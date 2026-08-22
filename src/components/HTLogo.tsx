import { motion } from 'framer-motion';

export function HTLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <path
          d="M20 30L50 50L80 30"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M50 50V80M35 65H65"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 20L30 10L40 20M80 80L70 90L60 80"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
