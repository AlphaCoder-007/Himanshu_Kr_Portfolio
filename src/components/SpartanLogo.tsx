import { motion } from 'framer-motion';

interface SpartanLogoProps {
  className?: string;
  animate?: boolean;
}

export function SpartanLogo({ className = "h-16 w-16", animate = true }: SpartanLogoProps) {
  const containerVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 }
  };

  const glowVariants = {
    animate: {
      opacity: [0.5, 0.8, 0.5],
      filter: [
        "drop-shadow(0 0 4px rgba(6, 182, 212, 0.3))",
        "drop-shadow(0 0 12px rgba(6, 182, 212, 0.6))",
        "drop-shadow(0 0 4px rgba(6, 182, 212, 0.3))"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      variants={animate ? containerVariants : undefined}
      initial="rest"
      whileHover="hover"
    >
      <motion.svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full text-slate-900 dark:text-white"
        variants={animate ? glowVariants : undefined}
        animate={animate ? "animate" : undefined}
      >
        {/* Futuristic Plume / Crest */}
        <path
          d="M 28 26 C 30 14, 50 8, 72 26 C 63 17, 50 14, 35 20 Z"
          fill="currentColor"
          className="text-accent-cyan opacity-90"
        />
        <path
          d="M 33 28 C 35 20, 50 15, 67 28 C 60 22, 50 19, 39 23 Z"
          fill="currentColor"
          className="text-accent-cyan/70"
        />

        {/* Helmet Crown / Dome */}
        <path
          d="M 24 50 C 24 32, 50 26, 76 50 C 68 44, 50 42, 32 44 Z"
          fill="currentColor"
          className="text-slate-700 dark:text-slate-300"
        />

        {/* Eyebrow Brow Line for extra depth */}
        <path
          d="M 24 50 Q 50 42 76 50"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="text-slate-800 dark:text-slate-100"
        />

        {/* Left Cheek Guard */}
        <path
          d="M 24 50 L 30 74 L 43 66 V 54 L 32 52 Z"
          fill="currentColor"
          className="text-slate-800 dark:text-slate-200"
        />

        {/* Right Cheek Guard */}
        <path
          d="M 76 50 L 70 74 L 57 66 V 54 L 68 52 Z"
          fill="currentColor"
          className="text-slate-800 dark:text-slate-200"
        />

        {/* Vertical Sword Blade running through center */}
        {/* Point at the top, blade goes down, forms nose guard */}
        <path
          d="M 50 8 L 52.5 12 V 80 H 47.5 V 12 L 50 8 Z"
          fill="currentColor"
          className="text-accent-cyan"
        />
        {/* Blade Center line highlight */}
        <line
          x1="50"
          y1="8"
          x2="50"
          y2="80"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="0.8"
        />

        {/* Sword Crossguard / Hilt */}
        <path
          d="M 32 80 L 68 80 L 66 83 H 34 Z"
          fill="currentColor"
          className="text-slate-600 dark:text-slate-400"
        />

        {/* Sword Grip */}
        <path
          d="M 48.2 83 H 51.8 V 92 H 48.2 Z"
          fill="currentColor"
          className="text-slate-800 dark:text-slate-300"
        />

        {/* Sword Pommel */}
        <path
          d="M 50 92 L 53 95 L 50 98 L 47 95 Z"
          fill="currentColor"
          className="text-slate-600 dark:text-slate-400"
        />
      </motion.svg>
    </motion.div>
  );
}
