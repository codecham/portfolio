export const personalInfo = {
  name: "Corentin Dechamps",
  title: "FullStack Developer",
  email: "corentin.dechamps@gmail.com",
  github: "https://github.com/codecham",
  linkedin: "https://linkedin.com/in/corentindechamps",
  description: "42 Belgium graduate, passionate about web development..."
};

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
      "Matchmaking system"
    ]
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
      "Configuration file parsing"
    ]
  },
  // Add more projects...
];

export const experience = {
  company: "Proximus",
  role: "FullStack Developer (Internship)",
  period: "Your internship dates",
  description: "Description of your role and missions...",
  achievements: [
    "Developed features on...",
    "Collaborated with the team...",
    "Technologies used..."
  ],
  technologies: ["React", "Node.js", "..."]
};

export const skills = {
  languages: ["C", "C++", "JavaScript", "TypeScript", "Python"],
  frontend: ["React", "Next.js", "HTML/CSS", "Tailwind CSS"],
  backend: ["Node.js", "NestJS", "Express"],
  databases: ["PostgreSQL", "MongoDB", "MySQL"],
  tools: ["Git", "Docker", "Linux", "VS Code"],
  soft: ["Teamwork", "Autonomy", "Problem solving"]
};