import { useEffect, useState } from 'react';

interface NavbarParticleLogoProps {
  className?: string;
}

export function NavbarParticleLogo({ className = "h-8 w-8" }: NavbarParticleLogoProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        perspective: '200px',
        perspectiveOrigin: '50% 50%',
      }}
      role="img"
      aria-label="Logo"
    >
      <div
        style={{
          animation: reducedMotion ? 'none' : 'logoRotateY 7s linear infinite',
          transformStyle: 'preserve-3d',
        }}
      >
        <img
            src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Logo"
          className="h-full w-full object-contain"
          draggable={false}
        />
      </div>

      <style>{`
        @keyframes logoRotateY {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}
