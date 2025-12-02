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
// ============================================
export const projects = [
  {
    id: 1,
    title: "ft_transcendence",
    description: "Multiplayer Pong web application with real-time chat",
    technologies: ["React", "NestJS", "PostgreSQL", "WebSocket"],
    image: "/images/projects/transcendence.png",
    github: "https://github.com/...",
    demo: null,
    highlights: [
      "OAuth 42 authentication",
      "Real-time gameplay with WebSocket",
      "Matchmaking system",
    ],
  },
  {
    id: 2,
    title: "webserv",
    description: "HTTP server written from scratch in C++",
    technologies: ["C++", "HTTP", "Sockets"],
    image: "/images/projects/webserv.png",
    github: "https://github.com/...",
    demo: null,
    highlights: [
      "GET/POST/DELETE request handling",
      "CGI support",
      "Configuration file parsing",
    ],
  },
  // Add more projects...
];

// ============================================
// EXPERIENCE
// ============================================
export const experience = {
  company: "Proximus",
  role: "FullStack Developer (Internship)",
  period: "Your internship dates",
  description: "Description of your role and missions...",
  achievements: [
    "Developed features on...",
    "Collaborated with the team...",
    "Technologies used...",
  ],
  technologies: ["React", "Node.js", "..."],
};

// ============================================
// SKILLS
// ============================================
export const skills = {
  languages: ["C", "C++", "JavaScript", "TypeScript", "Python"],
  frontend: ["React", "Next.js", "HTML/CSS", "Tailwind CSS"],
  backend: ["Node.js", "NestJS", "Express"],
  databases: ["PostgreSQL", "MongoDB", "MySQL"],
  tools: ["Git", "Docker", "Linux", "VS Code"],
  soft: ["Teamwork", "Autonomy", "Problem solving"],
};