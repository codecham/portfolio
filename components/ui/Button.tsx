import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  external?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  icon,
  external = false,
  className = "",
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    px-5 py-2.5
    text-sm font-medium
    rounded-full
    transition-all duration-300
    cursor-pointer
  `;

  const variants = {
    primary: `
      bg-primary/10 text-primary
      border border-primary/20
      hover:bg-primary/20 hover:border-primary/40
    `,
    secondary: `
      bg-surface text-text
      border border-border
      hover:bg-surface-hover hover:border-border-light
    `,
    ghost: `
      bg-transparent text-text-muted
      hover:bg-surface hover:text-text
    `,
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={combinedStyles}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={combinedStyles}>
      {content}
    </button>
  );
}