import { motion } from 'framer-motion';
import { Target, TrendingUp, DollarSign, Award } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const achievementIcons = [
  <Target className="h-6 w-6 text-accent-cyan" />,
  <TrendingUp className="h-6 w-6 text-accent-teal" />,
  <DollarSign className="h-6 w-6 text-accent-indigo" />
];

export function Achievements() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 12 }
    }
  };

  return (
    <section id="achievements" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-cyan">
            09 // Professional Impact
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Key Engineering Achievements
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400">
            Measurable contributions that improved code quality, reduced resource spend, and accelerated delivery lifecycles.
          </p>
        </div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {achievementsData.map((ach, idx) => (
            <motion.div
              key={ach.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/30 hover:border-accent-cyan/20 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-accent-cyan via-accent-teal to-accent-indigo" />

              <div>
                {/* Header Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 mb-6">
                  {achievementIcons[idx] || <Award className="h-6 w-6 text-accent-cyan" />}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-950 dark:text-white">
                  {ach.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {/* Highlight impact metrics badge */}
              {ach.impactMetric && (
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/40">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    Measurable Result:
                  </span>
                  <span className="mt-1 block text-sm font-extrabold text-accent-cyan">
                    {ach.impactMetric}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
