import { motion } from 'framer-motion';
import { Award, GraduationCap, Calendar } from 'lucide-react';
import { certificationsData, educationData } from '../data/portfolioData';

export function CertificationsEducation() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="education" className="py-20 sm:py-28 bg-slate-100/30 dark:bg-slate-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-cyan">
              07 // Qualifications
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Professional Certifications
            </h2>
            <div className="mt-4 h-1 w-12 bg-accent-cyan rounded-full" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="mt-10 space-y-4"
            >
              {certificationsData.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={cardVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40 hover:border-accent-cyan/20 transition-all duration-300"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                    <Award className="h-5 w-5 text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-950 dark:text-white leading-snug">
                      {cert.name}
                    </h3>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-accent-teal">{cert.issuer}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Issued {cert.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-indigo">
              08 // Academic Base
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Education
            </h2>
            <div className="mt-4 h-1 w-12 bg-accent-indigo rounded-full" />

            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40 hover:border-accent-indigo/20 transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 mb-6">
                <GraduationCap className="h-6 w-6 text-accent-indigo" />
              </div>
              
              <h3 className="text-lg font-bold text-slate-950 dark:text-white leading-snug">
                {educationData.degree}
              </h3>
              
              <div className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-accent-indigo">
                <span>{educationData.institution}</span>
              </div>
              
              <span className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                <Calendar className="h-3.5 w-3.5" />
                {educationData.duration}
              </span>

              {educationData.details && (
                <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 pt-4 dark:border-slate-800/60">
                  {educationData.details}
                </p>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
