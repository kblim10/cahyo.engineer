"use client";

import { projects } from "@/lib/data";
import { AnimatedCard } from "./animations";
import { ExternalLink, Folder } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedCard>
          <div className="flex items-center gap-3 mb-16">
            <div className="section-line" />
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <AnimatedCard key={project.title} delay={0.1 + idx * 0.1}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group"
              >
                <div className="bento-card shimmer p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Folder size={24} className="text-accent" />
                    </div>
                    <ExternalLink
                      size={20}
                      className="text-muted group-hover:text-accent transition-colors"
                    />
                  </div>

                  {/* Category & Period */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-muted uppercase">
                      {project.category}
                    </span>
                    <span className="text-muted">•</span>
                    <span className="text-xs font-mono text-muted">
                      {project.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Role */}
                  <p className="text-sm text-accent mb-3 font-medium">
                    {project.role}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-badge text-xs">
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
        <AnimatedCard delay={0.5} className="mt-12 text-center">
          <a
            href="https://github.com/kblim10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors group"
          >
            <span>View more on GitHub</span>
            <ExternalLink
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </AnimatedCard>
      </div>
    </section>
  );
}
