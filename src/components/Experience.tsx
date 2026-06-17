"use client";

import { experiences, education } from "@/lib/data";
import { AnimatedCard } from "./animations";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 border-b-2 border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <AnimatedCard>
          <div className="flex items-center gap-4 mb-16">
            <span className="label-text text-accent">03.</span>
            <div className="section-line" />
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              Deployments
            </h2>
          </div>
        </AnimatedCard>

        {/* Experience */}
        <div className="space-y-8 mb-20">
          {experiences.map((exp, idx) => (
            <AnimatedCard key={idx} delay={0.1 + idx * 0.1}>
              <div className="border-2 border-border p-8 bg-card hover:border-accent transition-all">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-6 border-b-2 border-border">
                  <div className="flex-1">
                    <div className="label-text text-accent mb-2">
                      {exp.period}
                    </div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-mono text-muted uppercase tracking-wider">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base text-muted leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Education Header */}
        <AnimatedCard delay={0.3}>
          <div className="flex items-center gap-4 mb-12">
            <div className="section-line" />
            <h3 className="text-2xl font-bold uppercase tracking-tight">
              Education
            </h3>
          </div>
        </AnimatedCard>

        {/* Education */}
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <AnimatedCard key={idx} delay={0.4 + idx * 0.1}>
              <div className="border-2 border-border p-8 bg-card hover:border-accent transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="label-text text-accent mb-2">
                      {edu.year}
                    </div>
                    <h4 className="text-xl font-bold uppercase tracking-tight mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-mono text-muted uppercase tracking-wider">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <p className="text-base text-muted leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
