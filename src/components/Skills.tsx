"use client";

import { skills, awards } from "@/lib/data";
import { AnimatedCard } from "./animations";

export default function Skills() {
  const allSkills = [
    ...skills.languages,
    ...skills.backend,
    ...skills.databases_and_caching,
    ...skills.iot_and_messaging,
    ...skills.infrastructure_and_devops,
    ...skills.ci_cd_and_tools,
    ...skills.observability,
    ...skills.tools,
  ];

  return (
    <section id="skills" className="py-32">
      <div className="section-wide">
        <AnimatedCard>
          <h2 className="section-title gradient-text mb-24">Skills</h2>
        </AnimatedCard>

        {/* Skills dengan spacing proper */}
        <AnimatedCard delay={0.2}>
          <div className="minimal-card mb-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {allSkills.map((skill) => (
                <div key={skill} className="tech-badge text-center">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>

        {/* Awards - balanced layout */}
        {awards.length > 0 && (
          <AnimatedCard delay={0.4}>
            <div className="minimal-card">
              <div className="grid lg:grid-cols-2 gap-24">
                <div>
                  <div className="text-6xl font-bold mb-8">Awards</div>
                  <p className="text-xl text-muted">
                    Recognition for excellence in international competitions
                  </p>
                </div>
                
                <div className="space-y-12">
                  {awards.map((award) => (
                    <div key={award.title} className="border-l border-border pl-8">
                      <h4 className="text-2xl font-bold mb-3">{award.title}</h4>
                      <p className="text-lg text-muted mb-4">{award.event}</p>
                      <div className="flex flex-wrap gap-6 text-sm uppercase tracking-widest text-muted">
                        <span>{award.organizer}</span>
                        <span>•</span>
                        <span>{award.year}</span>
                        <span>•</span>
                        <span>{award.scope}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>
        )}
      </div>
    </section>
  );
}
