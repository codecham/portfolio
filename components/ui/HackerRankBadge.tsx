"use client";

import { SiHackerrank } from "react-icons/si";

// ============================================
// TYPES
// ============================================
interface HackerRankBadgeProps {
  name: string;
  stars: number;
  profileUrl?: string;
}

// ============================================
// STAR COMPONENT
// ============================================
function Stars({ count, max = 6 }: { count: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <svg
          key={i}
          className={`w-3 h-3 ${
            i < count ? "text-amber-400" : "text-border"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ============================================
// BADGE COLORS BASED ON STARS
// ============================================
function getBadgeStyle(stars: number) {
  if (stars >= 6) {
    return {
      gradient: "from-amber-500/20 via-yellow-500/10 to-amber-600/20",
      border: "border-amber-500/30 hover:border-amber-400/50",
      glow: "hover:shadow-amber-500/10",
    };
  }
  if (stars >= 5) {
    return {
      gradient: "from-amber-600/15 via-yellow-600/10 to-amber-700/15",
      border: "border-amber-600/25 hover:border-amber-500/40",
      glow: "hover:shadow-amber-600/10",
    };
  }
  return {
    gradient: "from-zinc-500/10 via-zinc-400/5 to-zinc-500/10",
    border: "border-zinc-500/20 hover:border-zinc-400/30",
    glow: "hover:shadow-zinc-500/10",
  };
}

// ============================================
// MAIN COMPONENT
// ============================================
export default function HackerRankBadge({
  name,
  stars,
  profileUrl,
}: HackerRankBadgeProps) {
  const style = getBadgeStyle(stars);

  const content = (
    <div
      className={`
        flex flex-col items-center justify-center gap-3 p-5
        bg-linear-to-br ${style.gradient}
        border ${style.border}
        rounded-xl
        hover:shadow-lg ${style.glow}
        transition-all duration-300
        group cursor-pointer
      `}
    >
      {/* HackerRank Icon */}
      <div className="relative">
        <SiHackerrank
          className="w-8 h-8 text-[#00EA64] transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Badge Name */}
      <span className="text-sm font-medium text-text text-center leading-tight">
        {name}
      </span>

      {/* Stars */}
      <Stars count={stars} />
    </div>
  );

  if (profileUrl) {
    return (
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${name} badge on HackerRank`}
      >
        {content}
      </a>
    );
  }

  return content;
}