import { Github, Linkedin, FileText, ChevronRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { heroData } from '../data/portfolioData';
import { useSiteConfig } from '../hooks/useSiteConfig';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSec = document.getElementById('projects');
    if (projectsSec) {
      const headerOffset = 80;
      const elementPosition = projectsSec.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const config = useSiteConfig();

  return (
    <section
      id="home"
      className="relative flex min-h-[95vh] items-center justify-center overflow-hidden py-24 sm:py-32"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#0f172a12_1px,transparent_1px),linear-gradient(to_bottom,#0f172a12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#33415518_1px,transparent_1px),linear-gradient(to_bottom,#33415518_1px,transparent_1px)]" />

      {/* Futuristic Gradients */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full bg-accent-cyan/10 blur-3xl dark:bg-accent-cyan/5" />
      <div className="absolute bottom-1/3 right-1/4 -z-10 h-96 w-96 rounded-full bg-accent-indigo/10 blur-3xl dark:bg-accent-indigo/5" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Main Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left items-center lg:items-start"
          >
            {/* Title / Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 px-3.5 py-1 text-xs font-mono font-medium text-accent-cyan dark:border-accent-cyan/30 dark:bg-accent-cyan/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan"></span>
              </span>
              <span>Available for Hybrid Roles & Projects</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl"
            >
              Hi, I'm <span className="text-gradient">{heroData.name}</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.h2
              variants={itemVariants}
              className="mt-4 text-xl font-bold text-slate-800 dark:text-slate-200 sm:text-3xl"
            >
              {heroData.title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-2 font-mono text-xs sm:text-sm text-accent-cyan font-medium"
            >
              {heroData.tagline}
            </motion.p>

            {/* Value Proposition */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300"
            >
              {heroData.valueProposition}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row gap-4 items-center"
            >
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="group btn-primary bg-slate-900 text-white dark:bg-white dark:text-slate-950 flex items-center gap-2 font-medium w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="/resume/Himanshu%20Kr..pdf"
                download
                className="btn-secondary flex items-center gap-2 font-medium w-full sm:w-auto"
              >
                <FileText className="h-4 w-4" />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center gap-3 mt-4 sm:mt-0 sm:ml-2 sm:border-l border-slate-200 sm:pl-6 dark:border-slate-800">
                <a
                  href={config.gitURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={config.linkedInURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Code Snippet Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white/50 p-5 shadow-xl shadow-slate-100 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/40 dark:shadow-none">
              {/* Logo Watermark */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl">
                <img
                    src={`${import.meta.env.BASE_URL}logo.png`}
                  alt=""
                  aria-hidden="true"
                  className="h-40 w-40 object-contain opacity-[0.04] dark:opacity-[0.15] select-none"
                />
              </div>

              {/* IDE Header */}
              <div className="relative flex items-center justify-between border-b border-slate-200/60 pb-3 dark:border-slate-800/60">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-[10px] text-slate-400">fullstack.config.ts</span>
              </div>

              {/* Code Content */}
              <div className="relative mt-4 space-y-3 font-mono text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                <div>
                  <span className="text-purple-600 dark:text-purple-400">import</span> {'{'} createApp {'}'} <span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-emerald-600 dark:text-emerald-400">'@core/engine'</span>;
                </div>

                <div className="relative rounded-lg bg-slate-50 p-3 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-900 overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" aria-hidden="true" className="h-20 w-20 object-contain opacity-[0.14] dark:opacity-[0.12] select-none" />
                  </div>
                  <div className="relative flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold mb-2">
                    <Terminal className="h-3.5 w-3.5" />
                    <span>System Capabilities</span>
                  </div>
                  <div className="space-y-1.5 text-[10px]">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-500">✓</span>
                      <span>React.js <span className="text-slate-400">· Frontend Architecture</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-500">✓</span>
                      <span>Node.js <span className="text-slate-400">· REST API Development</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-500">✓</span>
                      <span>.NET Core <span className="text-slate-400">· Backend Services</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-500">✓</span>
                      <span>SQL <span className="text-slate-400">· Database Engineering</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-500">✓</span>
                      <span>Selenium <span className="text-slate-400">· QA Automation</span></span>
                    </div>
                  </div>
                </div>

                <div className="space-y-0.5">
                  <div><span className="text-blue-600 dark:text-blue-400">const</span> engineer = <span className="text-blue-600 dark:text-blue-400">await</span> createApp({'{'}</div>
                  <div className="pl-4">role: <span className="text-emerald-600 dark:text-emerald-400">'Full-Stack Developer'</span>,</div>
                  <div className="pl-4">focus: [<span className="text-emerald-600 dark:text-emerald-400">'frontend'</span>, <span className="text-emerald-600 dark:text-emerald-400">'backend'</span>, <span className="text-emerald-600 dark:text-emerald-400">'quality'</span>],</div>
                  <div className="pl-4">experience: <span className="text-amber-600 dark:text-amber-400">'3.5+ years'</span>,</div>
                  <div>{'}'});</div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="mt-4 flex items-center justify-between border-t border-slate-200/40 pt-3 dark:border-slate-800/40 text-[10px]">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Systems Operational
                </span>
                <span className="text-slate-400">TypeScript · React · Node</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
