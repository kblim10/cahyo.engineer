"use client";

import { experiences, education } from "@/lib/data";
import { AnimatedCard } from "./animations";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedCard>
          <div className="flex items-center gap-3 mb-16">
            <div className="section-line" />
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          </div>
        </AnimatedCard>

        {/* Experience Timeline */}
        <div className="space-y-6 mb-20">
          {experiences.map((exp, idx) => (
            <AnimatedCard key={idx} delay={0.1 + idx * 0.1}>
              <div className="bento-card shimmer p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Briefcase size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted font-mono whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-muted leading-relaxed mb-6 ml-16">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 ml-16">
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

        {/* Education */}
        <AnimatedCard delay={0.3}>
          <div className="flex items-center gap-3 mb-12">
            <div className="section-line" />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
        </AnimatedCard>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <AnimatedCard key={idx} delay={0.4 + idx * 0.1}>
              <div className="bento-card shimmer p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <GraduationCap size={20} className="text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-emerald-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-muted font-mono whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>

                <p className="text-sm text-muted leading-relaxed ml-16">
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
