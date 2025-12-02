export const personalInfo = {
  name: "Corentin Dechamps",
  title: "FullStack Developer",
  email: "corentin.dechamps@gmail.com",
  github: "https://github.com/codecham",
  linkedin: "https://linkedin.com/in/corentindechamps",
  description: "42 Belgium graduate, passionate about web development...",
};

// ============================================
// ABOUT SECTION
// ============================================
export const aboutData = {
  headline: "Passionate about building modern web experiences",
  paragraphs: [
    "I'm a FullStack Developer based in Belgium, graduated from 42 Belgium — an innovative coding school based on peer-to-peer learning and project-based education.",
    "My journey through 42's intensive curriculum taught me not just programming, but how to learn, adapt, and solve complex problems independently. From low-level C programming to full-stack web applications, I've built a solid foundation across the entire development stack.",
    "Currently seeking opportunities where I can contribute to meaningful projects while continuing to grow as a developer.",
  ],
  highlights: [
    {
      icon: "graduation",
      title: "42 Belgium",
      description: "Completed the common core curriculum with projects ranging from C to web development",
    },
    {
      icon: "briefcase",
      title: "Proximus Internship",
      description: "Gained real-world experience working on production applications in a professional environment",
    },
    {
      icon: "code",
      title: "FullStack Focus",
      description: "Specialized in React, Next.js, Node.js, and modern web technologies",
    },
  ],
};

// ============================================
// PROJECTS
// Les images sont optionnelles et affichées uniquement dans le modal
// ============================================
export const projects = [
  {
    id: 1,
    title: "Chrona",
    shortDescription: "Discord server admin & moderation dashboard",
    fullDescription:
      "A comprehensive SaaS platform for Discord server administrators. Chrona provides a powerful dashboard to manage, moderate, and analyze Discord communities with advanced automation features and real-time analytics.",
    technologies: ["Angular", "PrimeNG", "NestJS", "SapphireJS", "PostgreSQL", "TimescaleDB", "Docker", "Grafana Loki"],
    image: "/images/projects/chrona.png", // Screenshot pour le modal
    github: "https://github.com/codecham/chrona", // À ajuster
    demo: undefined,
    highlights: [
      "Dashboard for server analytics and insights",
      "Auto-moderation with custom rules and filters",
      "Real-time logging and monitoring with Grafana Loki",
      "Scalable architecture with Docker containerization",
      "Time-series data analysis with TimescaleDB",
    ],
    inProgress: true,
  },
  {
    id: 2,
    title: "ft_transcendence",
    shortDescription: "Multiplayer Pong with real-time chat",
    fullDescription:
      "The final project of 42's common core curriculum. A full-stack web application featuring a real-time multiplayer Pong game, user authentication, chat system, and social features. Built with a modern tech stack and containerized with Docker.",
    technologies: ["React", "NestJS", "PostgreSQL", "WebSocket", "Docker", "OAuth 2.0"],
    image: "/images/projects/transcendence.png", // Screenshot pour le modal
    github: "https://github.com/codecham/ft_transcendence", // À ajuster
    demo: undefined,
    highlights: [
      "OAuth 2.0 authentication with 42 API",
      "Real-time multiplayer gameplay using WebSocket",
      "Matchmaking system with ELO ranking",
      "Private messaging and channel-based chat",
      "User profiles with match history and statistics",
    ],
    inProgress: false,
  },
  {
    id: 3,
    title: "cub3d",
    shortDescription: "3D raycasting game engine inspired by Wolfenstein",
    fullDescription:
      "A 3D game engine built from scratch using raycasting techniques, inspired by the classic Wolfenstein 3D. This project explores the fundamentals of computer graphics, including texture mapping, sprite rendering, and basic game mechanics.",
    technologies: ["C", "MiniLibX", "Raycasting", "Mathematics"],
    image: "/images/projects/cub3d.png", // Screenshot pour le modal
    github: "https://github.com/codecham/cub3d", // À ajuster
    demo: undefined,
    highlights: [
      "Raycasting engine rendering 3D environments from 2D maps",
      "Textured walls with collision detection",
      "Sprite rendering for objects and enemies",
      "Map parsing from configuration files",
      "Smooth player movement and rotation",
    ],
    inProgress: false,
  },
  {
    id: 4,
    title: "webserv",
    shortDescription: "HTTP server written from scratch in C++",
    fullDescription:
      "A fully functional HTTP/1.1 web server implemented in C++ without any external libraries. This project deepened my understanding of network programming, the HTTP protocol, and concurrent connection handling.",
    technologies: ["C++", "HTTP/1.1", "Sockets", "I/O Multiplexing", "CGI"],
    image: undefined, // Pas de screenshot
    github: "https://github.com/codecham/webserv", // À ajuster
    demo: undefined,
    highlights: [
      "Full HTTP/1.1 protocol implementation",
      "GET, POST, and DELETE request handling",
      "CGI script execution support",
      "Non-blocking I/O with poll/select multiplexing",
      "Configuration file parsing similar to Nginx",
    ],
    inProgress: false,
  },
  {
    id: 5,
    title: "minishell",
    shortDescription: "Unix shell implementation in C",
    fullDescription:
      "A minimalist Unix shell that replicates core functionalities of Bash. This project involved deep exploration of process management, signal handling, and the Unix filesystem.",
    technologies: ["C", "Unix", "Process Management", "Signals", "Parsing"],
    image: undefined, // Pas de screenshot
    github: "https://github.com/codecham/minishell", // À ajuster
    demo: undefined,
    highlights: [
      "Command parsing with quotes and special characters",
      "Built-in commands (cd, echo, env, export, unset, pwd, exit)",
      "Pipes and redirections (<, >, >>, <<)",
      "Environment variable expansion",
      "Signal handling (Ctrl+C, Ctrl+D, Ctrl+\\)",
    ],
    inProgress: false,
  },
];

export const experience = {
  company: "Proximus",
  logo: "/images/proximus-logo.png", // Optional
  role: "FullStack Developer Intern",
  team: "Platform & Tools (Data Department)",
  location: "Brussels, Belgium",
  period: "Aug 2024 - Jan 2025",
  duration: "6 months",
  description:
    "Joined a Data Engineering team to work on an internal orchestration/ETL tool used daily by data engineers. Combined feature development, UX improvements, and strategic technical analysis in a real production environment.",

  // Timeline phases for visual storytelling
  phases: [
    {
      title: "Enhance & Improve",
      description:
        "Worked on the existing Python Dash + React application. Implemented new features, fixed bugs, improved UX, and gathered direct feedback from end users.",
      icon: "code",
    },
    {
      title: "Analyze & Recommend",
      description:
        "Conducted a technical analysis for a future cloud migration. Evaluated multiple approaches and recommended Angular 19 + FastAPI for scalability and long-term maintainability.",
      icon: "search",
    },
    {
      title: "Build PoC",
      description:
        "Developed a complete Proof of Concept with Angular + PrimeNG frontend and FastAPI backend, demonstrating a modern cloud-ready architecture.",
      icon: "rocket",
    },
  ],

  // Key achievements (impactful bullets)
  achievements: [
    "Delivered production-ready features used daily by data engineers",
    "Gathered user feedback to drive UX improvements",
    "Led technical analysis for cloud migration strategy",
    "Built a complete PoC validating the recommended architecture",
    "Earned strong positive feedback from supervisors",
  ],

  // Tech stacks (existing + new)
  technologies: {
    existing: ["Python", "Dash", "React"],
    recommended: ["Angular 19", "PrimeNG", "FastAPI", "Python"],
  },

  // Testimonials from LinkedIn recommendations
  testimonials: [
    {
      name: "Marc Matthys",
      role: "People Manager in IT",
      company: "Proximus",
      relationship: "Direct Supervisor",
      quote:
        "Corentin is a passionate and trustworthy developer. He learns quickly, communicates well and is able to work both independently and in collaboration mode.",
      linkedin: "https://www.linkedin.com/in/marc-matthys-291a07175", // À ajuster avec le vrai lien
    },
    {
      name: "Jonathan Perin",
      role: "Data Governance Lead",
      company: "Proximus",
      relationship: "Colleague",
      quote:
        "What makes Corentin truly remarkable is his adaptability... He always approached challenges with curiosity and an open mind. A very friendly and approachable colleague who brings a positive attitude to the team.",
      linkedin: "https://www.linkedin.com/in/jonathanperin", // À ajuster avec le vrai lien
    },
  ],
};

// ============================================
// SKILLS
// ============================================
export const skills = {
  languages: ["C", "C++", "JavaScript", "TypeScript", "Python"],
  frontend: ["React", "Next.js", "Angular", "HTML/CSS", "Tailwind CSS"],
  backend: ["Node.js", "NestJS", "Express"],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "TimescaleDB"],
  tools: ["Git", "Docker", "Linux", "VS Code", "Grafana"],
  soft: ["Teamwork", "Autonomy", "Problem solving", "Adaptability"],
};