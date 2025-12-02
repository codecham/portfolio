interface SectionHeaderProps {
  title: string;
  titleHighlight?: string;
  badge?: string;
  description?: string;
}

export default function SectionHeader({
  title,
  titleHighlight,
  badge,
  description,
}: SectionHeaderProps) {
  return (
    <div className="w-full flex flex-col items-center text-center">
      {/* Titre principal */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        {title}
        {titleHighlight && (
          <span className="text-gradient"> {titleHighlight}</span>
        )}
      </h2>

      {/* Badge */}
      {badge && (
        <div className="mt-5">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            {badge}
          </span>
        </div>
      )}

      {/* Description */}
      {description && (
        <p className="mt-5 text-sm text-text-subtle max-w-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}