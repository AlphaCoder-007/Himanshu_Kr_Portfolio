import { motion } from 'framer-motion';
import { Cpu, Code, Network, Kanban } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categories = [
  {
    id: 'automation',
    label: 'Automation & Testing',
    icon: <Cpu className="h-5 w-5 text-accent-cyan" />,
    description: 'Framework architecture, functional UI coverage, integration and API test engines.',
  },
  {
    id: 'programming',
    label: 'Programming Languages',
    icon: <Code className="h-5 w-5 text-accent-teal" />,
    description: 'Core languages for writing enterprise business services and automation scripts.',
  },
  {
    id: 'development',
    label: 'Software Development',
    icon: <Network className="h-5 w-5 text-accent-indigo" />,
    description: 'Backend services, full-stack MVC logic, relational databases, and REST APIs.',
  },
  {
    id: 'devops',
    label: 'DevOps & Engineering',
    icon: <Kanban className="h-5 w-5 text-accent-cyan" />,
    description: 'CI/CD pipeline construction, Dockerization, logging dashboards, and Agile workflows.',
  },
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-cyan">
            02 // Skill Stack
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Technical Capabilities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400">
            A comprehensive overview of my technical expertise across testing architecture, development platforms, and infrastructure tooling.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10"
        >
          {categories.map((cat) => {
            const catSkills = skillsData.filter((s) => s.category === cat.id);
            return (
              <motion.div
                key={cat.id}
                variants={categoryVariants}
                className="relative rounded-2xl border border-slate-200 bg-white/50 p-6 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/30"
              >
                {/* Category Header */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                      {cat.label}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 h-[1px] bg-slate-200/50 dark:bg-slate-800/50" />

                {/* Skills Chips Grid */}
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {catSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-accent-cyan/30 hover:shadow dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-accent-cyan/30"
                    >
                      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
