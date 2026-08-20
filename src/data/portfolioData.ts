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
  title: "Full Stack Developer",
  tagline: "Full Stack Developer | React.js | Node.js | .NET Core | JavaScript | REST APIs | SQL",
  valueProposition: "Software Engineer with 3.5+ years of experience in software development, QA automation, and database-driven applications. Experienced in developing web applications and REST APIs using React.js, Node.js, .NET Core, JavaScript, and SQL.",
  resumeUrl: "#",
  githubUrl: "#",
  linkedinUrl: "#",
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
    value: "10+",
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
  { name: "Functional Testing", category: "automation" },

  // Development Tools
  { name: "Git", category: "devops" },
  { name: "GitHub", category: "devops" },
  { name: "CI/CD", category: "devops" },
  { name: "Microsoft Azure", category: "devops" }
];

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    company: "NAV Fund Services (India) Pvt. Ltd.",
    role: "Senior Associate Engineer",
    duration: "October 2024 – Present",
    description: "Developing and maintaining scalable web application components and integrated REST APIs.",
    responsibilities: [
      "Developed and maintained scalable web application components using React.js, Node.js, .NET Core, JavaScript, and SQL.",
      "Designed reusable React.js components and supported responsive user interfaces for enterprise applications.",
      "Developed and integrated REST APIs for authentication, reporting, workflow automation, and data processing.",
      "Implemented backend business logic, CRUD operations, and database interaction modules.",
      "Collaborated with cross-functional teams in Agile environments to deliver production-ready features."
    ],
    developmentHighlights: [
      "Designed reusable React.js components.",
      "Integrated backend APIs with frontend.",
      "Optimized application workflows and database interactions."
    ],
    techStack: ["React.js", "Node.js", ".NET Core", "JavaScript", "SQL", "Git"]
  },
  {
    id: "exp-2",
    company: "SEB Administrative Pvt. Ltd.",
    role: "Senior Test Engineer",
    duration: "June 2022 – July 2024",
    description: "Developed and maintained automation frameworks and performed comprehensive application testing.",
    responsibilities: [
      "Developed and maintained Selenium WebDriver automation for enterprise web applications, creating reusable components and automation workflows.",
      "Performed functional, regression, integration, and end-to-end testing to validate application functionality and business workflows.",
      "Developed and enhanced reusable automation framework components to improve test execution efficiency and maintainability.",
      "Conducted REST API testing using Postman, validating API responses, status codes, business logic, and backend workflows.",
      "Validated frontend-backend integration and database consistency using SQL queries and CRUD operations."
    ],
    automationHighlights: [
      "Selenium WebDriver automation framework.",
      "Reusable automation components.",
      "REST API testing with Postman."
    ],
    techStack: ["Selenium", "JavaScript", "SQL", "Postman", "Agile"]
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    name: "Bug Tracking System",
    description: "A full-stack issue tracking platform for managing software defects and issue lifecycle workflows.",
    longDescription: "A full-stack issue tracking platform for managing software defects and issue lifecycle workflows including ticket creation, assignment, priority management, and role-based access control.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    category: "fullstack",
    challenge: "Managing complex issue lifecycles and role-based access control.",
    solution: "Implemented modular backend architecture with RESTful APIs and secure authentication/authorization.",
    githubLink: "#",
    liveLink: undefined
  },
  {
    id: "proj-2",
    name: "Automation Reporting Dashboard",
    description: "A centralized web-based dashboard for monitoring and analyzing automation test execution.",
    longDescription: "A centralized web-based dashboard for monitoring and analyzing automation test execution, providing execution tracking, filtering, analytics, and SQL-based reporting.",
    technologies: ["React.js", "Node.js", "SQL", "Selenium"],
    category: "fullstack",
    challenge: "Integrating disparate automation execution data into a centralized view.",
    solution: "Developed a React dashboard with Node.js backend using SQL to retrieve and visualize automation metrics.",
    githubLink: "#",
    liveLink: undefined
  },
  {
    id: "proj-3",
    name: "Enterprise Automation Framework",
    description: "A reusable automation framework designed for enterprise web application testing.",
    longDescription: "A reusable automation framework designed for enterprise web application testing with configurable execution, functional, regression, and reporting utilities.",
    technologies: ["Selenium", "JavaScript", "Node.js", "SQL"],
    category: "automation",
    challenge: "Ensuring framework maintainability and reusability.",
    solution: "Implemented a modular architecture with reusable components and configurable test execution routines.",
    githubLink: "#",
    liveLink: undefined
  }
];

export const certificationsData: Certification[] = [];

export const educationData: Education = {
  degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
  institution: "Dr. A.P.J. Abdul Kalam Technical University",
  duration: "August 2014 – July 2018",
  details: "Percentage: 74.4%"
};

export const achievementsData: Achievement[] = [
  {
    id: "ach-1",
    title: "Full-Stack Development",
    description: "Developed full-stack web applications and REST APIs, covering frontend, backend, and database workflows.",
  },
  {
    id: "ach-2",
    title: "Reporting Dashboard",
    description: "Built a centralized automation reporting dashboard integrating Selenium execution data, improving test-result visibility."
  },
  {
    id: "ach-3",
    title: "Framework Development",
    description: "Developed reusable automation frameworks and application components, improving maintainability and reliability."
  }
];
