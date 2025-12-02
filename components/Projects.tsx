"use client";

import { useState } from "react";
import { projects, personalInfo } from "@/data/content";
import { SectionHeader, ProjectCard, ProjectModal, Project } from "@/components/ui";

// Icône terminal (style uniforme)
const TerminalIcon = (
  <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5}
      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

// Configuration des icônes et gradients par projet
const projectStyles: Record<number, { icon: React.ReactNode; gradient: string }> = {
  // Chrona - Discord bot/dashboard
  1: {
    icon: (
      <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    gradient: "bg-gradient-to-br from-violet-500/20 via-surface to-fuchsia-500/10",
  },
  // ft_transcendence - Multiplayer Pong
  2: {
    icon: (
      <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "bg-gradient-to-br from-blue-500/20 via-surface to-cyan-500/10",
  },
  // cub3d - 3D Raycasting
  3: {
    icon: (
      <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    gradient: "bg-gradient-to-br from-orange-500/20 via-surface to-red-500/10",
  },
  // webserv - HTTP Server
  4: {
    icon: (
      <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    gradient: "bg-gradient-to-br from-sky-500/20 via-surface to-indigo-500/10",
  },
  // minishell - Unix Shell
  5: {
    icon: TerminalIcon,
    gradient: "bg-gradient-to-br from-green-500/20 via-surface to-emerald-500/10",
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Transformer les données pour ajouter les icônes et gradients
  const projectsWithStyles: Project[] = projects.map((project) => ({
    ...project,
    icon: projectStyles[project.id]?.icon || TerminalIcon,
    gradient: projectStyles[project.id]?.gradient || "bg-gradient-to-br from-primary/20 via-surface to-accent/10",
  }));

  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container-custom">
        {/* Header */}
        <SectionHeader
          title="Featured"
          titleHighlight="Projects"
          badge="My work"
          description="A selection of projects that showcase my skills and passion for development"
        />

        {/* Projects Grid */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsWithStyles.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </div>

        {/* GitHub Link */}
        <div className="mt-12 text-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors group"
          >
            <span>Explore my full 42 journey on GitHub</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}