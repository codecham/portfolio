"use client";

import { IconType } from "react-icons";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiSass,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiLinux,
  SiGrafana,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import { TbHexagons, TbBox } from "react-icons/tb";

// ============================================
// TECH ICONS MAPPING
// ============================================
interface TechConfig {
  icon: IconType;
  color: string;
}

export const techIcons: Record<string, TechConfig> = {
  // Languages
  C: { icon: SiC, color: "#A8B9CC" },
  "C++": { icon: SiCplusplus, color: "#00599C" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Python: { icon: SiPython, color: "#3776AB" },
  Java: { icon: FaJava, color: "#ED8B00" },

  // Web fundamentals
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss3, color: "#1572B6" },
  SCSS: { icon: SiSass, color: "#CC6699" },

  // Frontend frameworks
  Angular: { icon: SiAngular, color: "#DD0031" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  PrimeNG: { icon: TbHexagons, color: "#DD0031" }, // Custom - pas d'icône officielle
  TailwindCSS: { icon: SiTailwindcss, color: "#06B6D4" },

  // Backend
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  SapphireJS: { icon: TbHexagons, color: "#5865F2" }, // Custom - pas d'icône officielle

  // Databases
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  SQL: { icon: FaDatabase, color: "#F29111" },

  // DevOps & Tools
  Docker: { icon: SiDocker, color: "#2496ED" },
  Git: { icon: SiGit, color: "#F05032" },
  Linux: { icon: SiLinux, color: "#FCC624" },
  Grafana: { icon: SiGrafana, color: "#F46800" },

  // Concepts
  OOP: { icon: TbBox, color: "#9333EA" },
};

// ============================================
// SKILL CARD COMPONENT
// ============================================
interface SkillCardProps {
  name: string;
  showName?: boolean;
}

export default function SkillCard({ name, showName = true }: SkillCardProps) {
  const tech = techIcons[name];

  // Fallback for unknown technologies
  if (!tech) {
    return (
      <div className="flex flex-col items-center justify-center p-4 bg-surface border border-border rounded-xl hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
        <div className="w-8 h-8 flex items-center justify-center text-text-muted">
          <FaDatabase className="w-8 h-8" />
        </div>
        {showName && (
          <span className="mt-2 text-xs font-medium text-text-muted text-center">
            {name}
          </span>
        )}
      </div>
    );
  }

  const IconComponent = tech.icon;

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-surface border border-border rounded-xl hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group cursor-default">
      {/* Icon */}
      <IconComponent
        className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
        style={{ color: tech.color }}
      />

      {/* Name */}
      {showName && (
        <span className="mt-2 text-xs font-medium text-text-muted group-hover:text-text transition-colors text-center">
          {name}
        </span>
      )}
    </div>
  );
}