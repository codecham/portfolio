interface Stat {
  value: string;
  label: string;
}

interface StatsGridProps {
  stats: Stat[];
}

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center text-center"
        >
          <span className="text-4xl md:text-5xl font-bold text-gradient">
            {stat.value}
          </span>
          <span className="mt-2 text-xs text-text-subtle uppercase tracking-wider">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}