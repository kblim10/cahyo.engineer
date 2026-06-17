"use client";

import { skills, awards } from "@/lib/data";
import { AnimatedCard } from "./animations";
import {
  Server,
  Radio,
  Container,
  Database,
  Activity,
  Code2,
  Wrench,
  Monitor,
  Trophy,
} from "lucide-react";

const skillSections = [
  {
    title: "Languages",
    icon: Code2,
    items: skills.languages,
  },
  {
    title: "Backend",
    icon: Server,
    items: skills.backend,
  },
  {
    title: "Databases & Caching",
    icon: Database,
    items: skills.databases_and_caching,
  },
  {
    title: "IoT & Messaging",
    icon: Radio,
    items: skills.iot_and_messaging,
  },
  {
    title: "Infrastructure & DevOps",
    icon: Container,
    items: skills.infrastructure_and_devops,
  },
  {
    title: "CI/CD & Tools",
    icon: Wrench,
    items: skills.ci_cd_and_tools,
  },
  {
    title: "Observability",
    icon: Activity,
    items: skills.observability,
  },
  {
    title: "Tools",
    icon: Monitor,
    items: skills.tools,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 border-b-2 border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <AnimatedCard>
          <div className="flex items-center gap-4 mb-16">
            <span className="label-text text-accent">02.</span>
            <div className="section-line" />
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              Tech Stack
            </h2>
          </div>
        </AnimatedCard>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillSections.map((section, idx) => (
            <AnimatedCard key={section.title} delay={0.05 + idx * 0.03}>
              <div className="border-2 border-border p-6 bg-card hover:border-accent transition-all group h-full">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-border">
                  <div className="w-10 h-10 border-2 border-accent bg-accent/10 flex items-center justify-center">
                    <section.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wide">
                    {section.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <span key={item} className="tech-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Awards */}
        {awards.length > 0 && (
          <AnimatedCard delay={0.3}>
            <div className="border-2 border-border p-8 bg-card">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-border">
                <div className="w-12 h-12 border-2 border-accent bg-accent/10 flex items-center justify-center">
                  <Trophy size={24} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">
                  Recognition
                </h3>
              </div>
              <div className="space-y-6">
                {awards.map((award, idx) => (
                  <div
                    key={award.title}
                    className="flex items-start gap-6 pb-6 border-b border-border last:border-0"
                  >
                    <div className="text-4xl font-black text-accent font-mono pt-1">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold mb-1">{award.title}</h4>
                      <p className="text-sm text-muted mb-2">{award.event}</p>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase">
                        <span className="text-muted">{award.organizer}</span>
                        <span className="text-border">◆</span>
                        <span className="text-muted">{award.year}</span>
                        <span className="text-border">◆</span>
                        <span className="px-2 py-1 border-2 border-accent text-accent">
                          {award.scope}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>
        )}
      </div>
    </section>
  );
}
