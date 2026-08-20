import { motion } from 'framer-motion';
import { Calendar, Building2, Code2, Cpu } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export function Experience() {
  const timelineVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="experience" className="py-20 sm:py-28 bg-slate-100/30 dark:bg-slate-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-cyan">
            03 // Career Path
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400">
            A history of designing quality infrastructure and building highly scalable application features.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Vertical central bar (visible on tablet and above, hidden on mobile) */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-slate-200 dark:bg-slate-800 md:left-1/2 md:-ml-[1px]" />

          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row md:justify-between ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Circle Marker */}
                  <div className="absolute left-4 top-1.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-950 border-2 border-accent-cyan md:left-1/2 md:-ml-3">
                    <div className="h-2 w-2 rounded-full bg-accent-cyan animate-pulse-slow" />
                  </div>

                  {/* Empty space block for grid layout symmetry */}
                  <div className="hidden md:block md:w-[45%]" />

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 md:w-[45%]">
                    <div className="glass-card glass-card-hover p-6">
                      
                      {/* Role Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                          {exp.role}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                          <Calendar className="h-3 w-3" />
                          {exp.duration}
                        </span>
                      </div>

                      {/* Company Name */}
                      <div className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-accent-cyan">
                        <Building2 className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>

                      {/* Job Description */}
                      <p className="mt-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                        {exp.description}
                      </p>

                      {/* Responsibilities list */}
                      <ul className="mt-4 space-y-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 mt-1 h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technical separation highlights */}
                      <div className="mt-5 grid grid-cols-1 gap-4 border-t border-slate-100 pt-4 dark:border-slate-800/60 sm:grid-cols-2">
                        
                        {/* Automation Column */}
                        <div className="rounded-lg bg-slate-50/50 p-3 dark:bg-slate-950/20 border border-slate-100/50 dark:border-slate-850">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-accent-cyan">
                            <Cpu className="h-3.5 w-3.5" />
                            <span>Automation Work</span>
                          </div>
                          <ul className="mt-2 space-y-1.5 text-[10px] text-slate-500 dark:text-slate-400">
                            {exp.automationHighlights?.slice(0, 2).map((hi, i) => (
                              <li key={i} className="leading-relaxed">- {hi}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Development Column */}
                        <div className="rounded-lg bg-slate-50/50 p-3 dark:bg-slate-950/20 border border-slate-100/50 dark:border-slate-850">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-accent-indigo">
                            <Code2 className="h-3.5 w-3.5" />
                            <span>Development Work</span>
                          </div>
                          <ul className="mt-2 space-y-1.5 text-[10px] text-slate-500 dark:text-slate-400">
                            {exp.developmentHighlights?.slice(0, 2).map((hi, i) => (
                              <li key={i} className="leading-relaxed">- {hi}</li>
                            ))}
                          </ul>
                        </div>

                      </div>

                      {/* Skill tags */}
                      <div className="mt-5 flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/40">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex rounded bg-slate-100 px-2 py-0.5 text-[9px] font-mono font-medium text-slate-600 dark:bg-slate-950 dark:text-slate-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
