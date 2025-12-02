"use client";

import { ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  href: string;
  color: string;
}

export default function ContactCard({ icon, title, value, href, color }: ContactCardProps) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="group flex flex-col items-center p-6 md:p-8 bg-surface border border-border rounded-2xl hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Icon container */}
      <div
        className="w-14 h-14 flex items-center justify-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}15` }}
      >
        <div style={{ color }}>{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-2">
        {title}
      </h3>

      {/* Value */}
      <p className="text-base md:text-lg font-semibold text-text group-hover:text-primary transition-colors text-center break-all">
        {value}
      </p>

      {/* Arrow indicator */}
      <div className="mt-4 flex items-center gap-1 text-sm text-text-subtle group-hover:text-primary transition-colors">
        <span>Connect</span>
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </a>
  );
}