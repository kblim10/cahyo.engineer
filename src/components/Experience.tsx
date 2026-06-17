"use client";

import { experiences, education } from "@/lib/data";
import { AnimatedCard } from "./animations";

export default function Experience() {
  return (
    <section id="experience" className="py-32">
      <div className="section-wide">
        <AnimatedCard>
          <h2 className="section-title gradient-text mb-24">Experience</h2>
        </AnimatedCard>

        {/* Two columns - balanced */}
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Left - Experience */}
          <div>
            <div className="text-sm uppercase tracking-widest text-muted mb-12">
              Professional
            </div>
            
            {experiences.map((exp, idx) => (
              <AnimatedCard key={idx} delay={0.2}>
                <div className="minimal-card mb-12">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                      <p className="text-lg text-muted">{exp.company}</p>
                    </div>
                    <span className="text-sm uppercase tracking-widest text-muted">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-lg text-muted leading-loose mb-8">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {exp.tech.slice(0, 6).map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* Right - Education */}
          <div>
            <div className="text-sm uppercase tracking-widest text-muted mb-12">
              Education
            </div>
            
            {education.map((edu, idx) => (
              <AnimatedCard key={idx} delay={0.4}>
                <div className="minimal-card">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                      <p className="text-lg text-muted">{edu.institution}</p>
                    </div>
                    <span className="text-sm uppercase tracking-widest text-muted">
                      {edu.year}
                    </span>
                  </div>
                  
                  <p className="text-lg text-muted leading-loose">
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
