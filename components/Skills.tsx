import { SectionHeader } from "@/components/ui";
import SkillCard from "@/components/ui/SkillCard";

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