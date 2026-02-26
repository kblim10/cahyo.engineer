"use client";

import { skills, techMarquee, certifications, awards } from "@/lib/data";
import { AnimatedCard } from "./animations";
import {
  Server,
  Radio,
  Container,
  Database,
  Activity,
  Code2,
  Award,
  Wrench,
  Monitor,
  Trophy,
} from "lucide-react";

const skillSections = [
  {
    title: "Languages",
    icon: Code2,
    items: skills.languages,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "Backend",
    icon: Server,
    items: skills.backend,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Databases & Caching",
    icon: Database,
    items: skills.databases_and_caching,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "IoT & Messaging",
    icon: Radio,
    items: skills.iot_and_messaging,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    title: "Infrastructure & DevOps",
    icon: Container,
    items: skills.infrastructure_and_devops,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    title: "CI/CD & Tools",
    icon: Wrench,
    items: skills.ci_cd_and_tools,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Observability",
    icon: Activity,
    items: skills.observability,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    title: "Tools",
    icon: Monitor,
    items: skills.tools,
    color: "text-slate-400",
    bg: "bg-slate-500/10",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedCard>
          <div className="flex items-center gap-3 mb-12">
            <div className="section-line" />
            <span className="font-mono text-sm text-accent">02.</span>
            <h2 className="text-2xl font-bold">Tech Stack</h2>
          </div>
        </AnimatedCard>

        {/* Marquee */}
        <AnimatedCard delay={0.1}>
          <div className="relative mb-12 overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...techMarquee, ...techMarquee].map((tech, i) => (
                <span
                  key={i}
                  className="tech-badge mx-2 shrink-0"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedCard>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillSections.map((section, idx) => (
            <AnimatedCard key={section.title} delay={0.1 + idx * 0.05}>
              <div className="bento-card shimmer p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-8 h-8 rounded-lg ${section.bg} flex items-center justify-center`}
                  >
                    <section.icon size={16} className={section.color} />
                  </div>
                  <h3 className="text-sm font-semibold">{section.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs rounded-md bg-background/50 border border-border text-muted hover:text-foreground hover:border-muted transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <AnimatedCard delay={0.4} className="mt-4">
            <div className="bento-card shimmer p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                  <Award size={16} className="text-yellow-400" />
                </div>
                <h3 className="text-sm font-semibold">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 text-xs text-muted"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60 shrink-0" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>
        )}

        {/* Awards */}
        {awards.length > 0 && (
          <AnimatedCard delay={0.5} className="mt-4">
            <div className="bento-card shimmer p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <Trophy size={16} className="text-amber-400" />
                </div>
                <h3 className="text-sm font-semibold">Awards</h3>
              </div>
              <div className="space-y-4">
                {awards.map((award) => (
                  <div key={award.title} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60 shrink-0 mt-1.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {award.title}
                      </p>
                      <p className="text-xs text-muted mt-0.5">
                        {award.event}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-mono text-muted-foreground">
                          {award.organizer}
                        </span>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-[10px] font-mono text-muted-foreground">
                          {award.year}
                        </span>
                        <span className="px-1.5 py-0.5 text-[9px] font-medium rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
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
