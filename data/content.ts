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

// ============================================
// EXPERIENCE
// ============================================
export const experience = {
  company: "Proximus",
  role: "FullStack Developer Intern",
  period: "2024", // À ajuster avec les vraies dates
  description:
    "Contributed to the development of internal tools, gaining hands-on experience in a professional environment with modern development practices and agile methodologies.",
  achievements: [
    "Developed features for internal applications used by multiple teams",
    "Collaborated with senior developers in an agile environment",
    "Gained experience with enterprise-level development workflows",
  ],
  technologies: ["React", "Node.js", "TypeScript"], // À compléter
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