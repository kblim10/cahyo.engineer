"use client";

import { projects } from "@/lib/data";
import { AnimatedCard, TiltCard } from "./animations";
import { ExternalLink, Folder, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative z-10 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <AnimatedCard>
          <div className="flex items-center gap-4 mb-20">
            <div className="w-16 h-px bg-accent/50" />
            <span className="font-mono text-base text-accent uppercase tracking-widest">04.</span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">Projects<span className="text-accent">.</span></h2>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <AnimatedCard key={project.title} delay={0.1 + idx * 0.1}>
              <TiltCard className="h-full">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="bento-card shimmer p-6 h-full group flex flex-col relative" style={{ transform: "translateZ(10px)" }}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4" style={{ transform: "translateZ(20px)" }}>
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Folder size={18} className="text-accent" />
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight
                          size={18}
                          className="text-accent"
                        />
                      </div>
                    </div>

                    {/* Category & Period */}
                    <div className="flex items-center justify-between mb-2" style={{ transform: "translateZ(25px)" }}>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground">
                        {project.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold mb-1 group-hover:text-accent transition-colors" style={{ transform: "translateZ(30px)" }}>
                      {project.title}
                    </h3>

                    {/* Role */}
                    <p className="text-[11px] text-accent mb-3 font-medium" style={{ transform: "translateZ(30px)" }}>
                      {project.role}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-muted leading-relaxed mb-4 flex-grow" style={{ transform: "translateZ(25px)" }}>
                      {project.description}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mt-auto" style={{ transform: "translateZ(20px)" }}>
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-background/50 border border-border text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </TiltCard>
            </AnimatedCard>
          ))}
        </div>

        {/* More projects CTA */}
        <AnimatedCard delay={0.5} className="mt-8 text-center">
          <a
            href="https://github.com/kblim10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors group"
          >
            <span>View more on GitHub</span>
            <ExternalLink
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </AnimatedCard>
      </div>
    </section>
  );
}
