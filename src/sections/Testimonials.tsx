import { motion } from 'framer-motion';
import { testimonialsData } from '../data/testimonialsData';
import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-cyan">
            06 // Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Professional Endorsements
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonialsData.map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ y: -5 }}
              className="glass-card p-8 flex flex-col justify-between"
            >
              <Quote className="h-8 w-8 text-accent-cyan/40 mb-4" />
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic flex-grow">
                "{t.quote}"
              </p>
              <div className="mt-6 border-t border-slate-100 dark:border-slate-800 pt-6">
                <p className="text-sm font-bold text-slate-950 dark:text-white">
                  {t.name}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
