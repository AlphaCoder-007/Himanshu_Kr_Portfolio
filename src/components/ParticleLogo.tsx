import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  scatterX: number;
  scatterY: number;
  color: string;
  size: number;
  alpha: number;
  speed: number;
  delay: number;
  phase: number;
}

interface ParticleLogoProps {
  className?: string;
  isDarkMode?: boolean;
}

// 100x100 grid source paths for Spartan helmet + sword
const SHAPES = [
  {
    // Plume/Crest
    paths: [
      "M 28 26 C 30 14, 50 8, 72 26 C 63 17, 50 14, 35 20 Z",
      "M 33 28 C 35 20, 50 15, 67 28 C 60 22, 50 19, 39 23 Z"
    ],
    colors: ["#06b6d4", "#0891b2", "#22d3ee", "#38bdf8"], // Cyan variations
  },
  {
    // Blade
    paths: ["M 50 8 L 52.5 12 V 80 H 47.5 V 12 L 50 8 Z"],
    colors: ["#22d3ee", "#e0f7fa", "#ffffff"], // Glowing cyan/white
  },
  {
    // Helmet Dome
    paths: ["M 24 50 C 24 32, 50 26, 76 50 C 68 44, 50 42, 32 44 Z"],
    colors: ["#94a3b8", "#cbd5e1", "#f1f5f9"], // Silver/Slate
  },
  {
    // Cheek Guards (Left and Right)
    paths: [
      "M 24 50 L 30 74 L 43 66 V 54 L 32 52 Z",
      "M 76 50 L 70 74 L 57 66 V 54 L 68 52 Z"
    ],
    colors: ["#64748b", "#475569", "#cbd5e1"], // Metallic Slate
  },
  {
    // Hilt / Grip / Pommel (with orange-gold sparks)
    paths: [
      "M 32 80 L 68 80 L 66 83 H 34 Z",
      "M 48.2 83 H 51.8 V 92 H 48.2 Z",
      "M 50 92 L 53 95 L 50 98 L 47 95 Z"
    ],
    colors: ["#475569", "#334155", "#fb923c", "#f59e0b"], // Dark metal & Orange gold
  }
];

export function ParticleLogo({ className = "h-[400px] w-full", isDarkMode = true }: ParticleLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const stateRef = useRef<'assembling' | 'assembled' | 'dispersing' | 'dispersed'>('assembling');
  const timerRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const prefersReducedMotionRef = useRef<boolean>(false);

  // Read theme and reduced motion settings
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotionRef.current = mediaQuery.matches;

    const listener = (e: MediaQueryListEvent) => {
      prefersReducedMotionRef.current = e.matches;
    };
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;

    // Center and Size of the emblem inside the canvas
    const getEmblemConfig = (w: number, h: number) => {
      const targetSize = Math.min(w, h) * 0.75;
      const offsetX = (w - targetSize) / 2;
      const offsetY = (h - targetSize) / 2;
      return { targetSize, offsetX, offsetY };
    };

    // Sampling function to convert our SVG paths to actual points
    const generateParticles = () => {
      const { targetSize, offsetX, offsetY } = getEmblemConfig(width, height);
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      if (!tempCtx) return;

      // 150x150 offscreen coordinate space for dense sampling
      tempCanvas.width = 150;
      tempCanvas.height = 150;

      const scale = targetSize / 150;
      const particles: Particle[] = [];

      // Determine step size for responsiveness
      let step = 2;
      if (width < 640) {
        step = 4; // Mobile: lower particle count (~300)
      } else if (width < 1024) {
        step = 3; // Tablet: medium particle count (~700)
      } else {
        step = 2; // Desktop: rich particle count (~1400)
      }

      SHAPES.forEach((group) => {
        // Clear offscreen canvas
        tempCtx.clearRect(0, 0, 150, 150);

        // Draw paths for the current group
        tempCtx.fillStyle = '#ffffff';
        group.paths.forEach((pathStr) => {
          const path = new Path2D(pathStr);
          // Scale to 150x150 space. Our paths are original 100x100 grid.
          tempCtx.save();
          tempCtx.scale(1.5, 1.5);
          tempCtx.fill(path);
          tempCtx.restore();
        });

        const imgData = tempCtx.getImageData(0, 0, 150, 150);
        const data = imgData.data;

        for (let y = 0; y < 150; y += step) {
          for (let x = 0; x < 150; x += step) {
            const index = (y * 150 + x) * 4;
            // If the pixel is filled
            if (data[index + 3] > 120) {
              const targetX = x * scale + offsetX;
              const targetY = y * scale + offsetY;

              // Generate beautiful radial disperse starting positions
              const centerX = width / 2;
              const centerY = height / 2;
              const angle = Math.atan2(targetY - centerY, targetX - centerX) + (Math.random() - 0.5) * 0.4;
              const scatterDistance = Math.random() * (Math.max(width, height) * 0.45) + targetSize * 0.4;
              
              const scatterX = centerX + Math.cos(angle) * scatterDistance;
              const scatterY = centerY + Math.sin(angle) * scatterDistance;

              const randomColor = group.colors[Math.floor(Math.random() * group.colors.length)];

              particles.push({
                x: scatterX,
                y: scatterY,
                targetX,
                targetY,
                scatterX,
                scatterY,
                color: randomColor,
                size: Math.random() * 1.5 + 0.8, // 0.8px to 2.3px particles
                alpha: Math.random() * 0.6 + 0.4,
                speed: Math.random() * 0.04 + 0.02, // lerp multiplier (0.02 - 0.06)
                delay: Math.random() * 45, // randomized delay frames
                phase: Math.random() * Math.PI * 2
              });
            }
          }
        }
      });

      particlesRef.current = particles;
    };

    generateParticles();

    // Resize handler
    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
      generateParticles();
    };

    window.addEventListener('resize', handleResize);

    // Mouse movement inside canvas
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Touch support for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top
        };
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current = { x: null, y: null };
    };

    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);

    // Main animation loop
    let lastTime = 0;
    const animate = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      lastTime = timestamp;

      // Draw subtle tech grid background
      ctx.clearRect(0, 0, width, height);
      
      const gridColor = isDarkMode ? 'rgba(6, 182, 212, 0.025)' : 'rgba(15, 23, 42, 0.012)';
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      const gridSize = 25;
      
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Scanline sweep effect (horizontal thin line sweeping down)
      const sweepY = (timestamp / 12) % (height * 1.5) - height * 0.25;
      if (sweepY > 0 && sweepY < height) {
        const sweepGlow = ctx.createLinearGradient(0, sweepY - 10, 0, sweepY + 10);
        sweepGlow.addColorStop(0, 'rgba(6, 182, 212, 0)');
        sweepGlow.addColorStop(0.5, isDarkMode ? 'rgba(6, 182, 212, 0.06)' : 'rgba(6, 182, 212, 0.03)');
        sweepGlow.addColorStop(1, 'rgba(6, 182, 212, 0)');
        ctx.fillStyle = sweepGlow;
        ctx.fillRect(0, sweepY - 10, width, 20);
      }

      // Handle timing of states
      timerRef.current += 1;
      const currentState = stateRef.current;

      // If user prefers reduced motion, force state to always be assembled and skip loops
      if (prefersReducedMotionRef.current) {
        stateRef.current = 'assembled';
      } else {
        if (currentState === 'assembling' && timerRef.current > 130) {
          stateRef.current = 'assembled';
          timerRef.current = 0;
        } else if (currentState === 'assembled' && timerRef.current > 240) { // Hold logo for 4 seconds
          stateRef.current = 'dispersing';
          timerRef.current = 0;
        } else if (currentState === 'dispersing' && timerRef.current > 120) {
          stateRef.current = 'dispersed';
          timerRef.current = 0;
        } else if (currentState === 'dispersed' && timerRef.current > 90) { // Empty state for 1.5 seconds
          // Recalculate scatter coords on every disperse cycle for organic variety
          particlesRef.current.forEach(p => {
            const { targetSize } = getEmblemConfig(width, height);
            const centerX = width / 2;
            const centerY = height / 2;
            const angle = Math.atan2(p.targetY - centerY, p.targetX - centerX) + (Math.random() - 0.5) * 0.5;
            const scatterDistance = Math.random() * (Math.max(width, height) * 0.45) + targetSize * 0.4;
            p.scatterX = centerX + Math.cos(angle) * scatterDistance;
            p.scatterY = centerY + Math.sin(angle) * scatterDistance;
          });
          stateRef.current = 'assembling';
          timerRef.current = 0;
        }
      }

      const state = stateRef.current;
      const mouse = mouseRef.current;
      const particles = particlesRef.current;

      // Update and draw particles
      particles.forEach((p) => {
        let destX = p.targetX;
        let destY = p.targetY;
        let isDelayed = false;

        // Apply delay frames on assembly/disperse to stagger movement
        if (state === 'assembling') {
          if (timerRef.current < p.delay) {
            destX = p.scatterX;
            destY = p.scatterY;
            isDelayed = true;
          }
        } else if (state === 'dispersing') {
          if (timerRef.current < p.delay * 0.5) {
            destX = p.targetX;
            destY = p.targetY;
            isDelayed = true;
          } else {
            destX = p.scatterX;
            destY = p.scatterY;
          }
        } else if (state === 'dispersed') {
          destX = p.scatterX;
          destY = p.scatterY;
        }

        // Particle positioning math
        if (prefersReducedMotionRef.current) {
          // Instant snap for reduced motion
          p.x = p.targetX;
          p.y = p.targetY;
        } else if (isDelayed) {
          // Just drift slowly at current pos
          p.x += Math.sin(timestamp * 0.001 + p.phase) * 0.05;
          p.y += Math.cos(timestamp * 0.001 + p.phase) * 0.05;
        } else {
          // Lerp towards destination
          const diffX = destX - p.x;
          const diffY = destY - p.y;
          p.x += diffX * p.speed;
          p.y += diffY * p.speed;

          // Add a subtle wave/breath motion when assembled
          if (state === 'assembled') {
            const breathe = Math.sin(timestamp * 0.0015 + p.phase) * 0.25;
            p.x += breathe * 0.3;
            p.y += breathe;
          }
        }

        // Mouse Hover Repulsion Logic (Section 6)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSq = dx * dx + dy * dy;
          const hoverRadius = 60;
          const hoverRadiusSq = hoverRadius * hoverRadius;

          if (distSq < hoverRadiusSq) {
            const dist = Math.sqrt(distSq);
            // Repel force is stronger when closer
            const force = (hoverRadius - dist) / hoverRadius;
            const angle = Math.atan2(dy, dx);
            const repelStrength = 15; // displacement force
            
            p.x += Math.cos(angle) * force * repelStrength;
            p.y += Math.sin(angle) * force * repelStrength;
          }
        }

        // Draw particle
        ctx.fillStyle = p.color;
        
        // Adjust alpha based on state
        let currentAlpha = p.alpha;
        if (state === 'dispersed') {
          currentAlpha *= 0.15; // Low opacity empty state
        } else if (state === 'dispersing') {
          const progress = Math.min(timerRef.current / 120, 1);
          currentAlpha *= (1 - progress * 0.85);
        } else if (state === 'assembling') {
          const progress = Math.min(timerRef.current / 130, 1);
          currentAlpha *= (0.15 + progress * 0.85);
        } else if (state === 'assembled') {
          // Glow pulse when fully formed
          const pulse = Math.sin(timestamp * 0.002) * 0.15 + 0.85;
          currentAlpha *= pulse;
        }

        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Reset globalAlpha
      ctx.globalAlpha = 1.0;

      // Draw subtle decorative digital status overlay in the canvas corner
      ctx.font = '9px monospace';
      ctx.fillStyle = isDarkMode ? 'rgba(6, 182, 212, 0.45)' : 'rgba(15, 23, 42, 0.45)';
      
      const statusText = prefersReducedMotionRef.current
        ? 'SYS.STATUS: STATIC_REDUCED'
        : `SYS.STATUS: ${state.toUpperCase()}`;
      
      ctx.fillText(statusText, 15, 25);
      ctx.fillText(`PARTICLES: ${particles.length}`, 15, 40);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDarkMode]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="block h-full w-full"
      />
    </div>
  );
}
