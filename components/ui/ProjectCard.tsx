"use client";

import { ReactNode } from "react";
import TechBadge from "./TechBadge";

export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  image?: string; // Utilisé uniquement dans le modal
  gradient: string;
  icon: ReactNode;
  github?: string;
  demo?: string;
  highlights: string[];
  inProgress?: boolean;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article
      onClick={onClick}
      className="group relative bg-surface border border-border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
    >
      {/* Gradient Background + Icon */}
      <div className={`relative h-48 flex items-center justify-center overflow-hidden ${project.gradient}`}>
        {/* Icon */}
        <div className="text-text-muted opacity-30 transition-all duration-300 group-hover:opacity-50 group-hover:scale-110">
          {project.icon}
        </div>

        {/* In Progress Badge */}
        {project.inProgress && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              In Progress
            </span>
          </div>
        )}

        {/* Hover indicator */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-lg border border-white/20">
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech} name={tech} variant="small" />
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-[10px] text-text-subtle">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}