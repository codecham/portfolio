import { experience } from "@/data/content";
import { SectionHeader, TechBadge } from "@/components/ui";

// Phase icons
const phaseIcons = {
  code: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  search: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  rocket: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
};

// Location icon
const locationIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

// Calendar icon
const calendarIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

// Checkmark icon for achievements
const checkIcon = (
  <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// Quote icon
const quoteIcon = (
  <svg className="w-8 h-8 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

// LinkedIn icon
const linkedinIcon = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-background-light">
      <div className="container-custom">
        {/* Header */}
        <SectionHeader
          title="Professional"
          titleHighlight="Experience"
          badge="Where I've worked"
          description="Real-world experience in enterprise software development"
        />

        {/* Main Experience Card */}
        <div className="mt-14 md:mt-20 max-w-4xl mx-auto">
          <article className="bg-surface border border-border rounded-2xl overflow-hidden">
            {/* Card Header */}
            <div className="p-6 md:p-8 border-b border-border bg-linear-to-r from-primary/5 via-transparent to-accent/5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Company & Role */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-text">
                    {experience.company}
                  </h3>
                  <p className="mt-1 text-lg text-primary font-medium">
                    {experience.role}
                  </p>
                  <p className="mt-0.5 text-sm text-text-muted">
                    {experience.team}
                  </p>
                </div>

                {/* Meta info */}
                <div className="flex flex-col gap-2 text-sm text-text-muted">
                  <div className="flex items-center gap-2">
                    {calendarIcon}
                    <span>{experience.period}</span>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {experience.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {locationIcon}
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-text-muted leading-relaxed">
                {experience.description}
              </p>
            </div>

            {/* Timeline Section */}
            <div className="p-6 md:p-8">
              <h4 className="text-sm font-semibold text-text uppercase tracking-wider mb-6">
                My Journey
              </h4>

              {/* Timeline */}
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-border md:hidden" />
                <div className="hidden md:block absolute left-0 right-0 top-[15px] h-0.5 bg-border" />

                {/* Timeline items */}
                <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
                  {experience.phases.map((phase, index) => (
                    <div key={index} className="relative pl-10 md:pl-0">
                      {/* Timeline dot - mobile */}
                      <div className="absolute left-0 top-0 md:hidden">
                        <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary">
                          {phaseIcons[phase.icon as keyof typeof phaseIcons]}
                        </div>
                      </div>

                      {/* Timeline content */}
                      <div className="md:text-center">
                        {/* Timeline dot - desktop */}
                        <div className="hidden md:flex justify-center mb-4">
                          <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary">
                            {phaseIcons[phase.icon as keyof typeof phaseIcons]}
                          </div>
                        </div>

                        {/* Phase number */}
                        <span className="inline-block px-2 py-0.5 text-[10px] font-semibold text-primary bg-primary/10 rounded-full mb-2">
                          Phase {index + 1}
                        </span>

                        {/* Phase title */}
                        <h5 className="text-base font-semibold text-text mb-2">
                          {phase.title}
                        </h5>

                        {/* Phase description */}
                        <p className="text-sm text-text-muted leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="p-6 md:p-8 border-t border-border bg-surface-hover/30">
              <h4 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
                Key Achievements
              </h4>

              <ul className="grid md:grid-cols-2 gap-3">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {checkIcon}
                    <span className="text-sm text-text-muted">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Section */}
            <div className="p-6 md:p-8 border-t border-border">
              <h4 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
                Tech Stack
              </h4>

              <div className="space-y-4">
                {/* Existing stack */}
                <div>
                  <span className="text-xs text-text-subtle uppercase tracking-wide">
                    Existing Application
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {experience.technologies.existing.map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <svg className="w-5 h-5 text-text-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* Recommended stack */}
                <div>
                  <span className="text-xs text-text-subtle uppercase tracking-wide">
                    Recommended Architecture (PoC)
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {experience.technologies.recommended.map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="p-6 md:p-8 border-t border-border bg-gradient-to-b from-transparent to-primary/5">
              <h4 className="text-sm font-semibold text-text uppercase tracking-wider mb-6">
                What They Said
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                {experience.testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="relative bg-surface border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
                  >
                    {/* Quote icon */}
                    <div className="absolute top-4 right-4">
                      {quoteIcon}
                    </div>

                    {/* Quote text */}
                    <blockquote className="text-sm text-text-muted leading-relaxed pr-8 mb-4">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <p className="text-sm font-semibold text-text">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-text-muted">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-primary">
                          {testimonial.relationship}
                        </p>
                      </div>

                      {/* LinkedIn link */}
                      <a
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-text-muted hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                        aria-label={`View ${testimonial.name}'s LinkedIn profile`}
                      >
                        {linkedinIcon}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Link to full recommendations */}
              <div className="mt-6 text-center">
                <a
                  href="https://linkedin.com/in/corentindechamps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors group"
                >
                  <span>View full recommendations on LinkedIn</span>
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
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}