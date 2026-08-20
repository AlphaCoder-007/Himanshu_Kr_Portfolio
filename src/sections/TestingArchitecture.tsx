import { motion } from 'framer-motion';
import { ArrowDown, CheckSquare, Settings, Play, Layers, Database, Sliders, Terminal, GitBranch } from 'lucide-react';

export function TestingArchitecture() {
  const steps = [
    {
      id: "step-1",
      title: "Test Cases Spec Layer",
      tech: "SpecFlow Feature Files / Cucumber .feature / JUnit Specs",
      icon: <CheckSquare className="h-5 w-5 text-accent-cyan" />,
      desc: "Declarative, business-readable assertions and testing scenarios mapping directly to user stories."
    },
    {
      id: "step-2",
      title: "Core Test Runner Engine",
      tech: "Playwright Runner / TestNG / NUnit Engine",
      icon: <Play className="h-5 w-5 text-accent-teal" />,
      desc: "Handles concurrency, browser contexts, viewport injections, retry-count thresholds, and timeout intervals."
    },
    {
      id: "step-3",
      title: "Page Object Model (POM) Layer",
      tech: "Strongly Typed Locators & Element Mappings",
      icon: <Layers className="h-5 w-5 text-accent-indigo" />,
      desc: "Encapsulates element selections, shadow DOM custom waits, action wrappers, and decouples UI changes from tests."
    },
    {
      id: "step-4",
      title: "Execution Adapter Layer (UI / API)",
      tech: "Chromium / Webkit / REST Assured Client",
      icon: <Terminal className="h-5 w-5 text-accent-cyan" />,
      desc: "Dispatches actual browser events or API requests. Handles headers, payload deserialization, and authentication pools."
    },
    {
      id: "step-5",
      title: "Database State Validation",
      tech: "JDBC / ADO.NET / Dapper Query Pools",
      icon: <Database className="h-5 w-5 text-amber-500" />,
      desc: "Executes backend SQL assertions directly after frontend/API triggers to verify true database-level persistence."
    },
    {
      id: "step-6",
      title: "Core Utilities & Libraries",
      tech: "Faker Data / Crypto Helpers / File Readers",
      icon: <Settings className="h-5 w-5 text-slate-400" />,
      desc: "Provides runtime helper utilities like dynamic payload generation, configuration loading, and custom assertions."
    },
    {
      id: "step-7",
      title: "Logging & Reporting Dashboards",
      tech: "Allure Report / Extent HTML / SLF4J log lines",
      icon: <Sliders className="h-5 w-5 text-accent-cyan" />,
      desc: "Parses console logs, saves trace timelines and error screenshots, compiling them into a beautiful web interface."
    },
    {
      id: "step-8",
      title: "CI/CD Deployment Pipelines",
      tech: "Dockerized Agents / GitHub Actions / Azure Pipelines",
      icon: <GitBranch className="h-5 w-5 text-accent-indigo" />,
      desc: "Triggers tests instantly on PR branch changes, distributes runs across agent pods, and halts deployments on fail."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="architecture" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-cyan">
            06 // Framework Design
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Test Automation Framework Architecture
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400">
            A premium, layered schematic showing how my enterprise test automation engines are architected to scale safely and isolate failures.
          </p>
        </div>

        {/* Visual Layer Flow */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto mt-16 max-w-3xl space-y-4"
        >
          {steps.map((step, idx) => (
            <div key={step.id}>
              {/* Stepper Card */}
              <motion.div
                variants={stepVariants}
                whileHover={{ scale: 1.01 }}
                className="relative flex flex-col md:flex-row items-start md:items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40 backdrop-blur-md hover:border-accent-cyan/20 transition-all duration-300"
              >
                {/* Flow Step Badge */}
                <div className="absolute top-4 right-4 font-mono text-xs text-slate-300 dark:text-slate-700 font-bold">
                  LAYER 0{idx + 1}
                </div>

                {/* Left Section (Icon + Title) */}
                <div className="flex items-center gap-4 shrink-0 md:w-1/3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-950 dark:text-white leading-tight">
                      {step.title}
                    </h3>
                    <span className="mt-1 block font-mono text-[9px] text-accent-cyan font-semibold">
                      {step.tech}
                    </span>
                  </div>
                </div>

                {/* Right Section (Description) */}
                <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed md:w-2/3 md:pl-4 border-l border-slate-100 dark:border-slate-800/40 md:pt-0 pt-3 mt-1 md:mt-0">
                  {step.desc}
                </div>
              </motion.div>

              {/* Connecting Downward Pulse Arrow (skip on last step) */}
              {idx < steps.length - 1 && (
                <div className="flex justify-center my-2.5">
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900/60 text-slate-400 dark:text-slate-600 border border-slate-200/50 dark:border-slate-800"
                  >
                    <ArrowDown className="h-3 w-3 text-accent-cyan" />
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
