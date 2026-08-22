import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code2, ShieldCheck, Sliders, Zap, ArrowRight, Layout, Server, DatabaseZap } from 'lucide-react';

type ExpertiseTab = 'automation' | 'development';

export function Expertise() {
  const [activeTab, setActiveTab] = useState<ExpertiseTab>('automation');

  const automationArchitecture = [
    { step: "Application Layer", desc: "User-facing web or mobile interface (DOM, elements, shadows).", icon: <Layout className="h-4 w-4 text-accent-cyan" /> },
    { step: "Page/Object Layer", desc: "Locator maps, custom action abstractions, and strongly typed wrappers.", icon: <Server className="h-4 w-4 text-accent-teal" /> },
    { step: "Test Case Layer", desc: "Declarative test assertions written in BDD/Cucumber or unit/runner frameworks.", icon: <ShieldCheck className="h-4 w-4 text-accent-indigo" /> },
    { step: "Database / API Validation", desc: "Direct backend querying and service calls to confirm exact transactional states.", icon: <DatabaseZap className="h-4 w-4 text-amber-500" /> },
    { step: "Reporting & Dashboards", desc: "Allure/Extent metrics log analysis and slack notifications on completion.", icon: <Sliders className="h-4 w-4 text-accent-cyan" /> },
    { step: "CI/CD Orchestration", desc: "Parallel docker instances executing within Azure Pipelines or GitHub Actions.", icon: <Zap className="h-4 w-4 text-amber-500 animate-pulse" /> }
  ];

  const automationHighlights = [
    { title: "UI Automation", desc: "Developing and maintaining automated test cases using Selenium WebDriver and Playwright, creating reusable components and execution workflows." },
    { title: "API Testing", desc: "Conducting REST API testing using Postman, validating responses, status codes, business workflows, and backend integrations." },
    { title: "Database Validation", desc: "Validating database records and application workflows using SQL queries and CRUD operations to ensure data consistency." },
    { title: "Regression Testing", desc: "Performing functional, regression, integration, and end-to-end testing to validate application functionality and business workflows." },
    { title: "CI/CD Integration", desc: "Working with Git, CI/CD workflows, and version-controlled development and deployment processes." },
    { title: "Defect Tracking", desc: "Identifying, analyzing, tracking, and reporting software defects in collaboration with development and business teams." }
  ];

  const devHighlights = [
    { title: "Backend Development", desc: "Building and maintaining backend services and business logic using Node.js, Express.js, and .NET Core with C#." },
    { title: "REST & Web APIs", desc: "Building and integrating REST APIs for authentication, reporting, workflow automation, and data processing." },
    { title: "Database Engineering", desc: "Working with SQL Server, MySQL, and MongoDB for data access, CRUD operations, database integration, and query optimization." },
    { title: "React Frontend", desc: "Designing reusable React.js components and responsive user interfaces for enterprise applications." },
    { title: "Full-Stack Integration", desc: "Integrating frontend applications with backend APIs to support end-to-end business workflows." },
    { title: "Debugging & Optimization", desc: "Application debugging, production issue resolution, and performance optimization across frontend, backend, and database layers." }
  ];

  return (
    <section id="expertise" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-cyan">
            04 // Areas of Excellence
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Dual Expertise Blueprint
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400">
            A breakdown of my professional capabilities, showing that I can build software systems and design their complete validation architectures.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-xl bg-slate-100 p-1.5 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/65">
            <button
              onClick={() => setActiveTab('automation')}
              className={`flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeTab === 'automation'
                  ? 'bg-white text-slate-950 shadow-md dark:bg-slate-950 dark:text-white'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <Cpu className="h-4 w-4" />
              <span>Automation Expertise</span>
            </button>
            <button
              onClick={() => setActiveTab('development')}
              className={`flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeTab === 'development'
                  ? 'bg-white text-slate-950 shadow-md dark:bg-slate-950 dark:text-white'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <Code2 className="h-4 w-4" />
              <span>Development Expertise</span>
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <div className="mt-16">
          <AnimatePresence mode="wait">
            {activeTab === 'automation' ? (
              <motion.div
                key="automation"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start"
              >
                {/* Automation Grid Highlights */}
                <div className="lg:col-span-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {automationHighlights.map((hl) => (
                    <div
                      key={hl.title}
                      className="rounded-xl border border-slate-200 bg-white/50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/30 hover:border-accent-cyan/20 transition-all duration-300"
                    >
                      <h4 className="text-sm font-bold text-slate-950 dark:text-white">
                        {hl.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        {hl.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Automation Architecture Flow */}
                <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 dark:border-slate-800/80 dark:bg-slate-950/20">
                  <h3 className="text-base font-bold text-slate-950 dark:text-white flex items-center gap-2">
                    <Sliders className="h-5 w-5 text-accent-cyan" />
                    <span>Test Automation Architecture</span>
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    A conceptual view of how test actions propagate through layers to complete exhaustive quality audits.
                  </p>

                  {/* Architecture Stepper */}
                  <div className="mt-8 space-y-6 relative">
                    {/* Visual Connector Line */}
                    <div className="absolute left-6 top-3 h-[calc(100%-2rem)] w-0.5 bg-slate-200 dark:bg-slate-800" />

                    {automationArchitecture.map((step, idx) => (
                      <div key={step.step} className="relative flex gap-4 items-start">
                        {/* Step Icon Container */}
                        <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-sm">
                          {step.icon}
                        </div>
                        <div className="pt-1">
                          <h4 className="text-xs font-bold text-slate-950 dark:text-white flex items-center gap-2">
                            <span>{idx + 1}. {step.step}</span>
                            {idx < automationArchitecture.length - 1 && <ArrowRight className="h-3 w-3 text-slate-300 md:hidden" />}
                          </h4>
                          <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="development"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start"
              >
                {/* Development Grid Highlights */}
                <div className="lg:col-span-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {devHighlights.map((hl) => (
                    <div
                      key={hl.title}
                      className="rounded-xl border border-slate-200 bg-white/50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/30 hover:border-accent-indigo/20 transition-all duration-300"
                    >
                      <h4 className="text-sm font-bold text-slate-950 dark:text-white">
                        {hl.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        {hl.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Development Visual Philosophy Block */}
                <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 dark:border-slate-800/80 dark:bg-slate-950/20">
                  <h3 className="text-base font-bold text-slate-950 dark:text-white flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-accent-indigo" />
                    <span>Development Capabilities</span>
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    How I write, test, and release robust full-stack software applications.
                  </p>

                  <div className="mt-6 space-y-4">
                    <div className="rounded-xl bg-white border border-slate-200 p-4 dark:bg-slate-900 dark:border-slate-800 shadow-sm">
                      <span className="font-mono text-[10px] text-accent-indigo font-bold">FULL-STACK DEVELOPMENT</span>
                      <h4 className="mt-1 text-xs font-bold text-slate-900 dark:text-white">Scalable Web Applications</h4>
                      <p className="mt-1.5 text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        Developing full-stack web applications using React.js, Node.js, .NET Core, REST APIs, and SQL, covering frontend, backend, and database workflows.
                      </p>
                    </div>

                    <div className="rounded-xl bg-white border border-slate-200 p-4 dark:bg-slate-900 dark:border-slate-800 shadow-sm">
                      <span className="font-mono text-[10px] text-accent-indigo font-bold">API DEVELOPMENT</span>
                      <h4 className="mt-1 text-xs font-bold text-slate-900 dark:text-white">REST API Integration</h4>
                      <p className="mt-1.5 text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        Building and integrating REST APIs for authentication, reporting, workflow automation, and data processing with backend business logic and CRUD operations.
                      </p>
                    </div>

                    <div className="rounded-xl bg-white border border-slate-200 p-4 dark:bg-slate-900 dark:border-slate-800 shadow-sm">
                      <span className="font-mono text-[10px] text-accent-indigo font-bold">FRONTEND ENGINEERING</span>
                      <h4 className="mt-1 text-xs font-bold text-slate-900 dark:text-white">Reusable React Components</h4>
                      <p className="mt-1.5 text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        Designing reusable React.js components and responsive user interfaces for enterprise applications with frontend-backend integration.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
