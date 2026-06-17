"use client";

import { skills, awards } from "@/lib/data";
import { AnimatedCard } from "./animations";
import { Trophy } from "lucide-react";

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
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        <AnimatedCard>
          <h2 className="section-title gradient-text text-center mb-16">
            Tech Stack
          </h2>
        </AnimatedCard>

        {/* Skills Cloud */}
        <AnimatedCard delay={0.2}>
          <div className="glass-card p-8 mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {allSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="tech-badge"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimatedCard>

        {/* Awards */}
        {awards.length > 0 && (
          <AnimatedCard delay={0.4}>
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                  <Trophy size={24} className="text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold">Awards & Recognition</h3>
              </div>
              
              {awards.map((award) => (
                <div key={award.title} className="border-l-4 border-amber-500/30 pl-6 py-4">
                  <h4 className="text-xl font-semibold mb-2">{award.title}</h4>
                  <p className="text-muted mb-2">{award.event}</p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="text-muted">{award.organizer}</span>
                    <span className="text-border">•</span>
                    <span className="text-muted">{award.year}</span>
                    <span className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">
                      {award.scope}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedCard>
        )}
      </div>
    </section>
  );
}
