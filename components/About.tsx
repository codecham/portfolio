import { aboutData } from "@/data/content";
import { SectionHeader, HighlightCard, StatsGrid } from "@/components/ui";

// Icons
const icons = {
  graduation: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
  briefcase: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  ),
  code: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
};

const stats = [
  { value: "42", label: "Belgium Graduate" },
  { value: "10+", label: "Projects Completed" },
  { value: "5+", label: "Technologies" },
  { value: "1", label: "Internship" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background-light">
      <div className="container-custom">
        
        {/* Header */}
        <SectionHeader
          title="About"
          titleHighlight="Me"
          badge="Get to know me"
          description={aboutData.headline}
        />

        {/* Content Grid */}
        <div className="mt-14 md:mt-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Text */}
          <div>
            <div className="space-y-5">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-text-muted text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="space-y-4">
            {aboutData.highlights.map((highlight, index) => (
              <HighlightCard
                key={index}
                icon={icons[highlight.icon as keyof typeof icons]}
                title={highlight.title}
                description={highlight.description}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-border">
          <StatsGrid stats={stats} />
        </div>

      </div>
    </section>
  );
}