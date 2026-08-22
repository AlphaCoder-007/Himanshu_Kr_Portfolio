import { motion } from 'framer-motion';
import { Award, Briefcase, Code, Shield } from 'lucide-react';

// The data is imported from '../data/portfolioData'. Let's write the import correctly.
import { statsData as data } from '../data/portfolioData';

const statIcons = [
  <Briefcase className="h-5 w-5 text-accent-cyan" />,
  <Code className="h-5 w-5 text-accent-teal" />,
  <Shield className="h-5 w-5 text-accent-indigo" />,
  <Award className="h-5 w-5 text-accent-cyan" />,
];

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-100/40 dark:bg-slate-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Headline Column */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-cyan">
              01 // Professional Bio
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Engineering High-Quality, Resilient Software Solutions
            </h2>
            <div className="mt-6 h-1.5 w-16 bg-accent-cyan rounded-full" />
            
            <p className="mt-8 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Software Engineer with 3.5+ years of professional experience across software development, QA automation, API testing, and database-driven applications, with a strong focus on full-stack development.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Hands-on experience developing web applications and REST APIs using React.js, Node.js, .NET Core, JavaScript, and SQL. Strong foundation in debugging, application performance optimization, Agile development, Git, CI/CD, Selenium automation, API testing, and SQL validation, bringing a quality-focused engineering approach to building reliable and maintainable software.
            </p>
          </div>

          {/* Stats Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {data.map((stat, idx) => (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="relative rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm backdrop-blur-md transition-all dark:border-slate-800/60 dark:bg-slate-900/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-950/60">
                  {statIcons[idx] || <Code className="h-5 w-5 text-accent-cyan" />}
                </div>
                
                <div className="mt-4">
                  <span className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    {stat.value}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {stat.label}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
