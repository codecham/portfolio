import { personalInfo } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-primary)_0%,transparent_50%)] opacity-10" />
      
      {/* Background grid (tech effect) */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--color-text-muted) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-text-muted) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Centered content */}
      <div className="relative z-10 w-full max-w-4xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-surface border border-border rounded-full text-sm text-text-muted animate-fade-in">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Open to opportunities
        </div>

        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
          Hi, I&apos;m{" "}
          <span className="text-gradient">{personalInfo.name.split(" ")[0]}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-text-muted mb-4 animate-fade-in-up delay-100">
          {personalInfo.title}
        </p>

        {/* Description */}
        <div className="flex justify-center mb-10 animate-fade-in-up delay-200">
          <p className="text-base md:text-lg text-text-subtle max-w-2xl text-center">
            From low-level C/C++ at 42 Belgium to modern fullstack development. I combine strong software foundations with Angular, React, Next.js and NestJS to build robust, scalable applications.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-all glow-hover text-sm"
          >
            View my projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-surface hover:bg-surface-hover text-text border border-border font-medium rounded-lg transition-all text-sm"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <a
          href="#about"
          className="text-text-subtle hover:text-text transition-colors"
          aria-label="Scroll to about section"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}