import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Terminal, ShieldAlert, Cpu } from 'lucide-react';
import { projectsData, Project } from '../data/portfolioData';

type ProjectFilter = 'all' | 'development' | 'automation' | 'api' | 'fullstack';

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const modalCloseBtnRef = useRef<HTMLButtonElement | null>(null);

  // Filter projects based on choice
  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      // Focus close button for accessibility
      setTimeout(() => {
        modalCloseBtnRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-100/30 dark:bg-slate-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-cyan">
            05 // Engineered Artifacts
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Technical Showcase
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400">
            A filterable showcase of frameworks and applications. Click on any card to view detailed architectural challenges and solutions.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {(['all', 'automation', 'development', 'api', 'fullstack'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                filter === cat
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800'
              }`}
            >
              {cat === 'all' ? 'All Projects' : `${cat}`}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-card glass-card-hover group flex flex-col justify-between p-6 cursor-pointer hover:shadow-xl hover:shadow-cyan-500/10"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Category Badge & Code Icon */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-mono font-medium text-slate-600 dark:bg-slate-950 dark:text-slate-400 capitalize">
                      {project.category}
                    </span>
                    <Terminal className="h-4 w-4 text-slate-400 group-hover:text-accent-cyan transition-colors" />
                  </div>

                  {/* Project Name */}
                  <h3 className="mt-4 text-lg font-bold text-slate-950 dark:text-white group-hover:text-accent-cyan transition-colors">
                    {project.name}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Footer details inside card */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex rounded bg-slate-50 border border-slate-200/50 px-2 py-0.5 text-[9px] font-mono font-medium text-slate-500 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[9px] font-mono font-medium text-slate-400 self-center">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-bold text-accent-cyan flex items-center gap-1">
                    <span>View Architecture Details</span>
                    <span className="transition-transform group-hover:translate-x-1 duration-200">→</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detailed Modal View */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              {/* Blur Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
              />

              {/* Modal Body Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950 flex flex-col max-h-[85vh]"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-slate-800 shrink-0">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-md bg-accent-cyan/10 border border-accent-cyan/20 px-2.5 py-1 text-xs font-mono font-medium text-accent-cyan capitalize">
                      {selectedProject.category}
                    </span>
                    <h3 id="modal-title" className="text-lg font-bold text-slate-950 dark:text-white">
                      {selectedProject.name}
                    </h3>
                  </div>

                  {/* Close button with proper accessible labeling and ESC listener */}
                  <button
                    ref={modalCloseBtnRef}
                    onClick={() => setSelectedProject(null)}
                    className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
                    aria-label="Close project modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Scrollable content inside modal */}
                <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm text-slate-700 dark:text-slate-300">
                  {/* Detailed Description */}
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Project Overview</h4>
                    <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-300">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Technologies tags */}
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Built with</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-mono font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenge & Solution details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                    
                    <div className="rounded-xl border border-red-500/10 bg-red-50/20 p-5 dark:border-red-500/10 dark:bg-red-950/5">
                      <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold">
                        <ShieldAlert className="h-4.5 w-4.5" />
                        <span>The Engineering Challenge</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div className="rounded-xl border border-emerald-500/10 bg-emerald-50/20 p-5 dark:border-emerald-500/10 dark:bg-emerald-950/5">
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
                        <Cpu className="h-4.5 w-4.5" />
                        <span>The Implemented Solution</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        {selectedProject.solution}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Modal Footer containing links */}
                <div className="flex items-center justify-end gap-3 border-t border-slate-200 p-6 dark:border-slate-800 shrink-0 bg-slate-50/50 dark:bg-slate-950/40">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      <Github className="h-4 w-4" />
                      <span>View Repository</span>
                    </a>
                  )}

                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-900 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Launch Prototype</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
