"use client";

import { projects } from "@/lib/data";
import { AnimatedCard } from "./animations";
import { ExternalLink, Folder } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container">
        <AnimatedCard>
          <h2 className="section-title gradient-text text-center mb-16">
            Featured Projects
          </h2>
        </AnimatedCard>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <AnimatedCard key={project.title} delay={0.1 + idx * 0.1}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-8 block h-full group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Folder size={28} className="text-accent" />
                  </div>
                  <ExternalLink
                    size={20}
                    className="text-muted group-hover:text-accent transition-colors"
                  />
                </div>

                {/* Category & Period */}
                <div className="flex items-center gap-2 mb-4 text-xs text-muted">
                  <span className="px-3 py-1 bg-accent/10 rounded-full">{project.category}</span>
                  <span>•</span>
                  <span>{project.period}</span>
                </div>

                {/* Title & Role */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-accent mb-4">{project.role}</p>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge !text-xs !py-1 !px-3">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </AnimatedCard>
          ))}
        </div>

        {/* CTA */}
        <AnimatedCard delay={0.6}>
          <div className="text-center mt-12">
            <a
              href="https://github.com/kblim10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
            >
              View more on GitHub
              <ExternalLink size={16} />
            </a>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
