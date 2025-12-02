import { ReactNode } from "react";

interface HighlightCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function HighlightCard({ icon, title, description }: HighlightCardProps) {
  return (
    <div className="group relative bg-surface border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative p-6">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg transition-colors duration-300 group-hover:bg-primary/15">
            {icon}
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-text mb-1.5">
              {title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}