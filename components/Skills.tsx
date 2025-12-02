import { SectionHeader } from "@/components/ui";
import SkillCard from "@/components/ui/SkillCard";
import HackerRankBadge from "@/components/ui/HackerRankBadge";

// Skills data organized by category
const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "SCSS", "Angular", "React", "Next.js", "PrimeNG", "TailwindCSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "SapphireJS"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "SQL"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "Linux", "Grafana"],
  },
  {
    title: "Concepts",
    skills: ["OOP"],
  },
];

// HackerRank badges data
const hackerRankBadges = [
  { name: "Problem Solving", stars: 6 },
  { name: "C++", stars: 6 },
  { name: "Java", stars: 6 },
  { name: "Python", stars: 6 },
  { name: "C", stars: 5 },
];

const HACKERRANK_PROFILE = "https://www.hackerrank.com/profile/corentin_decham1";

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-background">
      <div className="container-custom">
        {/* Header */}
        <SectionHeader
          title="Technical"
          titleHighlight="Skills"
          badge="What I work with"
          description="Technologies and tools I use to bring ideas to life"
        />

        {/* Skills Grid by Category */}
        <div className="mt-14 md:mt-20 space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              {/* Category Title */}
              <h3 className="text-lg font-semibold text-text mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full" />
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {category.skills.map((skill) => (
                  <SkillCard key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* HackerRank Achievements Section */}
        <div className="mt-16 pt-16 border-t border-border">
          {/* Section Title */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h3 className="text-lg font-semibold text-text flex items-center gap-3">
              <span className="w-8 h-0.5 bg-linear-to-r from-[#00EA64] to-emerald-400 rounded-full" />
              HackerRank Achievements
            </h3>
            <a
              href={HACKERRANK_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-[#00EA64] transition-colors group"
            >
              <span>View full profile</span>
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

          {/* Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {hackerRankBadges.map((badge) => (
              <HackerRankBadge
                key={badge.name}
                name={badge.name}
                stars={badge.stars}
                profileUrl={HACKERRANK_PROFILE}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-sm text-text-subtle max-w-2xl mx-auto">
            Always learning and exploring new technologies. Currently diving deeper into{" "}
            <span className="text-primary font-medium">cloud architecture</span> and{" "}
            <span className="text-primary font-medium">system design</span>.
          </p>
        </div>
      </div>
    </section>
  );
}