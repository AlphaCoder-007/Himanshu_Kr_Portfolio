export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface Skill {
  name: string;
  category: 'automation' | 'programming' | 'development' | 'devops';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
  automationHighlights?: string[];
  developmentHighlights?: string[];
  techStack: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'automation' | 'development' | 'api' | 'fullstack';
  challenge: string;
  solution: string;
  keyFeatures?: string[];
  githubLink?: string;
  liveLink?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  details?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  impactMetric?: string;
}

export const heroData = {
  name: "Himanshu Kumar Tripathi",
  title: "Full-Stack Software Engineer",
  tagline: "Full-Stack Software Engineer | React.js | Node.js | .NET Core | REST APIs | SQL",
  valueProposition: "Software Engineer with 3.5+ years of professional experience across software development, QA automation, API testing, and database-driven applications, with a strong focus on full-stack development. Hands-on experience developing web applications and REST APIs using React.js, Node.js, .NET Core, JavaScript, and SQL.",
  resumeUrl: "#",
  email: "tripathi.kr.himanshu@gmail.com"
};

export const statsData: Stat[] = [
  {
    label: "Years of Experience",
    value: "3.5+",
    description: "In software development, QA automation, and full-stack applications."
  },
  {
    label: "Applications Developed",
    value: "5+",
    description: "Full-stack web applications and automation tools."
  },
  {
    label: "Technologies Mastered",
    value: "12+",
    description: "Across frontend, backend, database, and testing domains."
  },
  {
    label: "Projects Delivered",
    value: "Robust",
    description: "Production-ready features and automation solutions."
  }
];

export const skillsData: Skill[] = [
  // Programming
  { name: "JavaScript (ES6+)", category: "programming" },
  { name: "C#", category: "programming" },
  { name: "SQL", category: "programming" },

  // Frontend
  { name: "React.js", category: "development" },
  { name: "HTML5", category: "development" },
  { name: "CSS3", category: "development" },
  { name: "Bootstrap", category: "development" },

  // Backend
  { name: "Node.js", category: "development" },
  { name: "Express.js", category: "development" },
  { name: ".NET Core", category: "development" },
  { name: "REST APIs", category: "development" },
  { name: "CRUD Operations", category: "development" },

  // Databases
  { name: "SQL Server", category: "development" },
  { name: "MySQL", category: "development" },
  { name: "MongoDB", category: "development" },

  // Testing & Quality Engineering
  { name: "Selenium WebDriver", category: "automation" },
  { name: "Playwright", category: "automation" },
  { name: "Postman", category: "automation" },
  { name: "API Testing", category: "automation" },
  { name: "Regression Testing", category: "automation" },
  { name: "SQL Validation", category: "automation" },

  // Development Tools
  { name: "Git", category: "devops" },
  { name: "GitHub", category: "devops" },
  { name: "CI/CD", category: "devops" },
  { name: "Microsoft Azure", category: "devops" },
  { name: "Jira", category: "devops" }
];

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    company: "NAV Fund Services (India) Pvt. Ltd.",
    role: "Senior Associate Engineer",
    duration: "October 2024 – Present",
    description: "Developed and maintained scalable web application components using React.js, Node.js, .NET Core, JavaScript, and SQL.",
    responsibilities: [
      "Designed reusable React.js components and supported responsive user interfaces for enterprise applications.",
      "Built and integrated REST APIs for authentication, reporting, workflow automation, and data processing.",
      "Implemented backend business logic, CRUD operations, and database interaction modules.",
      "Integrated frontend applications with backend APIs to support end-to-end business workflows.",
      "Worked on application debugging and production issue resolution across frontend, backend, and database layers.",
      "Optimized application workflows and database interactions to improve application performance and reliability.",
      "Collaborated with cross-functional teams in Agile environments to deliver production-ready features.",
      "Worked with Git, CI/CD workflows, and version-controlled development and deployment processes.",
      "Applied QA automation and testing knowledge during development to identify defects early and improve overall software quality."
    ],
    developmentHighlights: [
      "Designed reusable React.js components.",
      "Integrated backend APIs with frontend.",
      "Optimized application workflows and database interactions."
    ],
    techStack: ["React.js", "Node.js", ".NET Core", "JavaScript", "C#", "SQL", "REST APIs", "Git", "CI/CD"]
  },
  {
    id: "exp-2",
    company: "SEB Administrative Pvt. Ltd.",
    role: "Senior Test Engineer",
    duration: "June 2022 – July 2024",
    description: "Performed manual and automation testing for enterprise web applications across functional and regression workflows.",
    responsibilities: [
      "Developed and maintained automated web application test cases using Selenium WebDriver.",
      "Designed reusable automation components and execution workflows to improve testing efficiency.",
      "Conducted REST API testing using Postman, validating responses, status codes, business workflows, and backend integrations.",
      "Validated database records and application workflows using SQL queries and CRUD operations.",
      "Identified, analyzed, tracked, and reported software defects in collaboration with development and business teams.",
      "Participated in Agile ceremonies including sprint planning, stand-ups, defect triage, and release activities.",
      "Validated frontend and backend integration workflows to ensure application consistency.",
      "Contributed to reusable automation framework components and reporting utilities."
    ],
    automationHighlights: [
      "Selenium WebDriver automation framework.",
      "Reusable automation components.",
      "REST API testing with Postman."
    ],
    techStack: ["Selenium WebDriver", "JavaScript", "Postman", "REST APIs", "SQL", "Automation Frameworks", "Agile"]
  }
];

export const projectsData: Project[] = [
  // --- Automation ---
  {
    id: "proj-auto-1",
    name: "Enterprise Web Automation Framework",
    description: "A scalable Selenium-based test automation framework for enterprise web applications using Java, TestNG, and Page Object Model.",
    longDescription: "A comprehensive, enterprise-grade test automation framework built with Java, Selenium WebDriver, TestNG, and Maven. Implements the Page Object Model (POM) design pattern to encapsulate element selectors and provide reusable, maintainable test components. Integrates REST API validation, SQL database verification, and CI/CD pipeline execution to ensure end-to-end quality across critical business workflows.",
    technologies: ["Java", "Selenium WebDriver", "TestNG", "Maven", "Page Object Model", "REST API", "SQL", "Git", "CI/CD"],
    category: "automation",
    challenge: "Designing a maintainable automation framework that scales across multiple web applications, handles flaky test isolation, and integrates UI, API, and database validation into a unified execution pipeline.",
    solution: "Implemented the Page Object Model for clean separation of UI selectors and test logic. Used TestNG for parallel execution and data-driven testing. Integrated REST Assured for API assertions and JDBC for SQL validation. Configured Maven profiles and CI/CD jobs to trigger automated regression suites on every pull request.",
    keyFeatures: [
      "Page Object Model with reusable page components",
      "Parallel test execution via TestNG and Maven Surefire",
      "REST API validation integrated into UI test workflows",
      "SQL database state verification post-execution",
      "CI/CD integration with automated regression runs"
    ],
    githubLink: "#",
    liveLink: undefined
  },
  {
    id: "proj-auto-2",
    name: "End-to-End Test Automation Platform",
    description: "A cross-browser test automation platform built with Playwright, TypeScript, and comprehensive reporting capabilities.",
    longDescription: "An end-to-end test automation platform leveraging Playwright and TypeScript for reliable cross-browser testing. Features parallel test execution across Chromium, Firefox, and WebKit, with built-in API automation, database validation, and automated HTML/JSON reporting. Configured with GitHub Actions for continuous regression testing on every code change.",
    technologies: ["Playwright", "TypeScript", "JavaScript", "API Automation", "Database Validation", "HTML Reporting", "CI/CD", "GitHub Actions", "Jenkins"],
    category: "automation",
    challenge: "Building a fast, reliable cross-browser automation platform that handles async operations, maintains test isolation across browser contexts, and provides actionable reporting across multiple execution environments.",
    solution: "Used Playwright's native browser context isolation and auto-wait mechanisms for reliable element interactions. Implemented API testing utilities alongside UI tests for full-stack validation. Designed custom reporters to generate HTML and JSON execution summaries. Automated the entire pipeline using GitHub Actions workflows with matrix builds for cross-browser coverage.",
    keyFeatures: [
      "Cross-browser testing (Chromium, Firefox, WebKit)",
      "Native browser context isolation for test reliability",
      "Integrated API and database validation utilities",
      "Custom HTML and JSON reporting dashboards",
      "GitHub Actions CI/CD with matrix browser builds"
    ],
    githubLink: "#",
    liveLink: undefined
  },

  // --- Development ---
  {
    id: "proj-dev-1",
    name: "Developer Productivity & Workflow Management Platform",
    description: "A full-stack workflow management application for tracking tasks, managing sprints, and streamlining developer productivity.",
    longDescription: "A full-stack developer productivity platform built with Spring Boot, React.js, and MySQL. Provides task management, sprint planning, team collaboration, and workflow automation capabilities. Features secure authentication with role-based access, RESTful API architecture, and a responsive dashboard for real-time project visibility.",
    technologies: ["Java", "Spring Boot", "REST API", "MySQL", "React.js", "JavaScript", "HTML5", "CSS3", "Authentication", "Git"],
    category: "development",
    challenge: "Building a secure, scalable workflow management system that supports real-time task updates, role-based permissions, and integrates cleanly across frontend, backend, and database layers.",
    solution: "Designed a RESTful API backend with Spring Boot for business logic and data access. Implemented JWT-based authentication and role-based access control for secure multi-user support. Built a responsive React.js frontend with task boards, sprint views, and analytics dashboards. Used MySQL with indexed queries for efficient data retrieval and performance.",
    keyFeatures: [
      "JWT-based authentication with role-based access control",
      "Sprint planning and task management boards",
      "Real-time workflow status updates",
      "Responsive dashboard with analytics views",
      "RESTful API architecture with Spring Boot"
    ],
    githubLink: "#",
    liveLink: undefined
  },

  // --- API ---
  {
    id: "proj-api-1",
    name: "Enterprise REST API Testing & Validation Suite",
    description: "A comprehensive API testing suite for automated REST API validation, schema verification, and business logic testing.",
    longDescription: "An enterprise-grade REST API testing and validation suite built with Node.js and Postman/Newman for automated API regression testing. Covers authentication flows, CRUD operations, response schema validation, business logic verification, and SQL database state checks. Integrated with CI/CD pipelines for continuous API quality assurance across development and staging environments.",
    technologies: ["REST API", "Postman", "Newman", "Node.js", "JavaScript", "JSON Schema", "SQL", "Authentication", "Automated Validation", "CI/CD"],
    category: "api",
    challenge: "Creating an automated API testing suite that validates complex authentication workflows, enforces response schema contracts, and detects business logic regressions across rapidly evolving REST endpoints.",
    solution: "Built automated test collections in Postman with environment-specific configurations. Used Newman for CLI-based execution in CI/CD pipelines. Implemented JSON schema validation to enforce API response contracts. Added SQL verification queries to validate database state after API operations. Designed modular test scripts for reusability across different API endpoints.",
    keyFeatures: [
      "Automated REST API regression test collections",
      "JSON schema validation for response contract enforcement",
      "Authentication and authorization flow testing",
      "SQL-based database state verification post-API calls",
      "Newman CI/CD integration for automated execution"
    ],
    githubLink: "#",
    liveLink: undefined
  },

  // --- Fullstack ---
  {
    id: "proj-1",
    name: "Bug Tracking System",
    description: "A full-stack issue tracking platform for managing software defects and issue lifecycle workflows.",
    longDescription: "A full-stack issue tracking platform for managing software defects and issue lifecycle workflows including ticket creation, assignment, priority management, and role-based access control.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    category: "fullstack",
    challenge: "Managing complex issue lifecycles with role-based access control across frontend, backend, and database layers.",
    solution: "Built reusable React.js components, developed REST APIs for issue management, implemented authentication and role-based access control, and applied modular backend architecture.",
    keyFeatures: [
      "Role-based access control for multi-user support",
      "Issue creation, assignment, and priority management",
      "RESTful API architecture for frontend-backend communication",
      "Reusable React.js component library"
    ],
    githubLink: "#",
    liveLink: undefined
  },
  {
    id: "proj-2",
    name: "Full Stack Reporting Application",
    description: "A centralized reporting dashboard for automation execution analytics and reporting.",
    longDescription: "A centralized reporting dashboard for automation execution analytics and reporting, providing execution tracking, filtering, analytics, and SQL-based reporting integrated with Selenium execution data.",
    technologies: ["React.js", "Node.js", "SQL", "Selenium", "REST APIs"],
    category: "fullstack",
    challenge: "Integrating disparate automation execution data into a centralized view with real-time analytics.",
    solution: "Built frontend modules for execution tracking and analytics, developed backend functionality for processing automation data, and implemented SQL-based data retrieval and reporting workflows.",
    keyFeatures: [
      "Real-time execution tracking dashboard",
      "SQL-based reporting and analytics",
      "Selenium execution data integration",
      "Filterable test result views"
    ],
    githubLink: "#",
    liveLink: undefined
  }
];

export const certificationsData: Certification[] = [];

export const educationData: Education = {
  degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
  institution: "Dr. A.P.J. Abdul Kalam Technical University",
  duration: "August 2014 – July 2018"
};

export const achievementsData: Achievement[] = [
  {
    id: "ach-1",
    title: "Full-Stack Development",
    description: "Developed full-stack web applications and REST APIs using React.js, Node.js, .NET Core, and SQL, covering frontend, backend, and database workflows."
  },
  {
    id: "ach-2",
    title: "Reporting Dashboard",
    description: "Built a centralized automation reporting dashboard integrating Selenium execution data, improving test-result visibility and reducing manual monitoring effort."
  },
  {
    id: "ach-3",
    title: "Framework Development",
    description: "Developed reusable automation frameworks and application components, combining software development and QA expertise to improve maintainability, reliability, and release quality."
  },
  {
    id: "ach-4",
    title: "Agile Collaboration",
    description: "Collaborated with cross-functional Agile teams to troubleshoot application issues, integrate APIs and databases, and deliver reliable, maintainable software solutions."
  }
];
