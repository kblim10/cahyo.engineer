"use client";

import { projects } from "@/lib/data";
import { AnimatedCard } from "./animations";
import { ExternalLink, Folder, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedCard>
          <div className="flex items-center gap-3 mb-12">
            <div className="section-line" />
            <span className="font-mono text-sm text-accent">04.</span>
            <h2 className="text-2xl font-bold">Projects</h2>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <AnimatedCard key={project.title} delay={0.1 + idx * 0.1}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="bento-card shimmer p-6 h-full group flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
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
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">
                      {project.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Role */}
                  <p className="text-[11px] text-accent mb-3 font-medium">
                    {project.role}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-muted leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mt-auto">
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
