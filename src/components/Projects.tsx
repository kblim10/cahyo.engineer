"use client";

import { projects } from "@/lib/data";
import { AnimatedCard } from "./animations";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 border-b-2 border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <AnimatedCard>
          <div className="flex items-center gap-4 mb-16">
            <span className="label-text text-accent">04.</span>
            <div className="section-line" />
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              Containers
            </h2>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.1}>
          <div className="mb-12">
            <p className="text-xl text-foreground font-light max-w-3xl">
              Four production systems, all deployed, all solving real
              infrastructure challenges.
            </p>
          </div>
        </AnimatedCard>

        {/* Projects as "Plates" */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <AnimatedCard key={project.title} delay={0.1 + idx * 0.1}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="plate-card shimmer">
                  {/* Plate header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-6 border-b-2 border-border">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="label-text text-accent">
                          P.{String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="label-text">{project.category}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-muted uppercase tracking-wider">
                        {project.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="label-text">{project.period}</span>
                      <ArrowRight
                        size={24}
                        className="text-accent opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base text-muted leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-badge">
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
        <AnimatedCard delay={0.5} className="mt-12">
          <div className="border-2 border-border p-8 bg-card text-center">
            <p className="text-sm text-muted mb-4 uppercase tracking-wider font-mono">
              More on GitHub
            </p>
            <a
              href="https://github.com/kblim10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-lg font-bold uppercase tracking-tight text-foreground hover:text-accent transition-colors group"
            >
              <span>View Full Repository</span>
              <ExternalLink
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
