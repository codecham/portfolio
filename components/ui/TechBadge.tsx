interface TechBadgeProps {
  name: string;
  variant?: "default" | "small";
}

export default function TechBadge({ name, variant = "default" }: TechBadgeProps) {
  const sizeClasses = {
    default: "px-3 py-1.5 text-xs",
    small: "px-2 py-1 text-[10px]",
  };

  return (
    <span
      className={`inline-flex items-center font-medium bg-surface border border-border rounded-full text-text-muted hover:text-text hover:border-primary/30 transition-colors ${sizeClasses[variant]}`}
    >
      {name}
    </span>
  );
}