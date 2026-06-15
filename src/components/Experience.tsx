"use client";

import { experiences, education } from "@/lib/data";
import { AnimatedCard, TiltCard } from "./animations";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative z-10 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <AnimatedCard>
          <div className="flex items-center gap-4 mb-20">
            <div className="w-16 h-px bg-accent/50" />
            <span className="font-mono text-base text-accent uppercase tracking-widest">03.</span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">Experience<span className="text-accent">.</span></h2>
          </div>
        </AnimatedCard>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <AnimatedCard key={idx} delay={0.1 + idx * 0.1}>
                <TiltCard>
                  <div className="bento-card shimmer p-6 md:ml-12 relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-[calc(3rem+7px)] top-8 w-3.5 h-3.5 rounded-full border-2 border-accent bg-background hidden md:block" />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2" style={{ transform: "translateZ(20px)" }}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center md:hidden">
                          <Briefcase size={14} className="text-accent" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold">{exp.role}</h3>
                          <p className="text-xs text-accent">{exp.company}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-xs text-muted leading-relaxed mb-4" style={{ transform: "translateZ(10px)" }}>
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(15px)" }}>
                      {exp.tech.map((t) => (
                        <span key={t} className="tech-badge text-[10px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Education */}
        <AnimatedCard delay={0.3}>
          <div className="flex items-center gap-3 mt-16 mb-8">
            <div className="section-line" />
            <h3 className="text-lg font-bold">Education</h3>
          </div>
        </AnimatedCard>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <AnimatedCard key={idx} delay={0.4 + idx * 0.1}>
                <div className="bento-card shimmer p-6 md:ml-12 relative">
                  <div className="absolute -left-[calc(3rem+7px)] top-8 w-3.5 h-3.5 rounded-full border-2 border-emerald-400 bg-background hidden md:block" />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center md:hidden">
                        <GraduationCap size={14} className="text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">{edu.degree}</h3>
                        <p className="text-xs text-emerald-400">{edu.institution}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">
                      {edu.year}
                    </span>
                  </div>

                  <p className="text-xs text-muted leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
