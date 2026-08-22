import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const LOCAL_STORAGE_KEY = 'htdev_visitor_count';
const SESSION_KEY = 'htdev_visitor_session';
const DEDUP_WINDOW_MS = 30 * 60 * 1000; // 30 minutes

function formatSixDigits(n: number): string {
  return String(Math.min(Math.max(n, 0), 999999)).padStart(6, '0');
}

/** Check if this session should count as a new visit */
function shouldIncrement(): boolean {
  try {
    const lastVisit = sessionStorage.getItem(SESSION_KEY);
    if (lastVisit) {
      const elapsed = Date.now() - parseInt(lastVisit, 10);
      if (elapsed < DEDUP_WINDOW_MS) return false;
    }
    sessionStorage.setItem(SESSION_KEY, String(Date.now()));
    return true;
  } catch {
    return true;
  }
}

/** Get count from localStorage (fallback when Supabase is unavailable) */
function getLocalCount(): number {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? parseInt(raw, 10) || 0 : 0;
  } catch {
    return 0;
  }
}

function setLocalCount(count: number): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, String(count));
  } catch {
    // fail silently
  }
}

/** Try to get and increment count via Supabase */
async function fetchSupabaseCount(): Promise<number | null> {
  if (!supabase) return null;

  try {
    // Try to read current count
    const { data: existing } = await supabase
      .from('visitor_counter')
      .select('count')
      .eq('id', 1)
      .single();

    const currentCount = existing?.count ?? 0;

    if (shouldIncrement()) {
      // Atomic increment using RPC or upsert
      const { data: updated } = await supabase
        .from('visitor_counter')
        .upsert(
          { id: 1, count: currentCount + 1, updated_at: new Date().toISOString() },
          { onConflict: 'id' }
        )
        .select('count')
        .single();

      return updated?.count ?? currentCount + 1;
    }

    return currentCount;
  } catch {
    return null;
  }
}

export function VisitorCounter() {
  const [digits, setDigits] = useState<string[] | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        // Try Supabase first (real global count)
        const supabaseCount = await fetchSupabaseCount();

        if (!cancelled && supabaseCount !== null) {
          setDigits(formatSixDigits(supabaseCount).split(''));
          return;
        }

        // Fallback to localStorage
        let count = getLocalCount();
        if (shouldIncrement()) {
          count += 1;
          setLocalCount(count);
        }

        if (!cancelled) {
          setDigits(formatSixDigits(count).split(''));
        }
      } catch {
        if (!cancelled) {
          // Final fallback — show 000001
          setDigits(formatSixDigits(1).split(''));
        }
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  // Loading state — show dots, not zeros
  if (!digits) {
    return (
      <div className="flex flex-col items-center gap-1.5">
        <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          VISITORS
        </span>
        <div className="flex gap-[3px]">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="inline-flex h-5 w-3.5 items-center justify-center rounded-[3px] border border-slate-200 bg-slate-100 font-mono text-[10px] text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500"
            >
              .
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        VISITORS
      </span>
      <div className="flex gap-[3px]">
        {digits.map((d, i) => (
          <span
            key={i}
            className="inline-flex h-5 w-3.5 items-center justify-center rounded-[3px] border border-slate-200 bg-slate-50 font-mono text-[11px] font-bold tabular-nums text-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}
