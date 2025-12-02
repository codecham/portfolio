export const personalInfo = {
  name: "Corentin Dechamps",
  title: "Développeur FullStack",
  email: "corentin.dechamps@gmail.com",
  github: "https://github.com/codecham",
  linkedin: "https://linkedin.com/in/corentindechamps",
  description: "Diplômé de 42 Belgium, passionné par le développement web..."
};

export const projects = [
  {
    id: 1,
    title: "ft_transcendence",
    description: "Application web de jeu Pong multijoueur avec chat en temps réel",
    technologies: ["React", "NestJS", "PostgreSQL", "WebSocket"],
    image: "/images/projects/transcendence.png",
    github: "https://github.com/...",
    demo: null, // ou lien vers démo si disponible
    highlights: [
      "Authentification OAuth 42",
      "Jeu en temps réel avec WebSocket",
      "Système de matchmaking"
    ]
  },
  {
    id: 2,
    title: "webserv",
    description: "Serveur HTTP écrit from scratch en C++",
    technologies: ["C++", "HTTP", "Sockets"],
    image: "/images/projects/webserv.png",
    github: "https://github.com/...",
    demo: null,
    highlights: [
      "Gestion des requêtes GET/POST/DELETE",
      "Support CGI",
      "Configuration par fichier"
    ]
  },
  // Ajouter d'autres projets...
];

export const experience = {
  company: "Proximus",
  role: "Développeur FullStack (Stage)",
  period: "Dates de ton stage",
  description: "Description de ton rôle et missions...",
  achievements: [
    "Développement de fonctionnalités sur...",
    "Collaboration avec l'équipe...",
    "Technologies utilisées..."
  ],
  technologies: ["React", "Node.js", "..."]
};

export const skills = {
  languages: ["C", "C++", "JavaScript", "TypeScript", "Python"],
  frontend: ["React", "Next.js", "HTML/CSS", "Tailwind CSS"],
  backend: ["Node.js", "NestJS", "Express"],
  databases: ["PostgreSQL", "MongoDB", "MySQL"],
  tools: ["Git", "Docker", "Linux", "VS Code"],
  soft: ["Travail d'équipe", "Autonomie", "Résolution de problèmes"]
};