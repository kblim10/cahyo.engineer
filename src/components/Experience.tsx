"use client";

import { experiences, education } from "@/lib/data";
import { AnimatedCard } from "./animations";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="section-container relative z-10">
        <AnimatedCard>
          <h2 className="section-title gradient-text text-center mb-16">
            Experience & Education
          </h2>
        </AnimatedCard>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Briefcase size={24} className="text-accent" />
              Experience
            </h3>
            
            {experiences.map((exp, idx) => (
              <AnimatedCard key={idx} delay={0.2}>
                <div className="glass-card p-6 mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-lg">{exp.role}</h4>
                      <p className="text-accent">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted">{exp.period}</span>
                  </div>
                  
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.slice(0, 6).map((t) => (
                      <span key={t} className="tech-badge !text-xs !py-1 !px-3">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap size={24} className="text-emerald-400" />
              Education
            </h3>
            
            {education.map((edu, idx) => (
              <AnimatedCard key={idx} delay={0.4}>
                <div className="glass-card p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-emerald-400">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-muted">{edu.year}</span>
                  </div>
                  
                  <p className="text-sm text-muted leading-relaxed">
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
