"use client";

import { projects } from "@/lib/data";
import { AnimatedCard } from "./animations";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="section-wide">
        <AnimatedCard>
          <h2 className="section-title gradient-text mb-24">Projects</h2>
        </AnimatedCard>

        {/* Projects grid - 2 columns, spacious */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <AnimatedCard key={project.title} delay={0.1 + idx * 0.1}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="minimal-card block group"
              >
                {/* Header dengan spacing */}
                <div className="flex items-start justify-between mb-12">
                  <div>
                    <div className="text-sm uppercase tracking-widest text-muted mb-4">
                      {project.category} • {project.period}
                    </div>
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-muted transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted">{project.role}</p>
                  </div>
                  <ArrowUpRight size={32} className="text-muted group-hover:text-foreground transition-colors" />
                </div>

                {/* Description */}
                <p className="text-lg text-muted leading-loose mb-12">
                  {project.description}
                </p>

                {/* Tech dengan spacing */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
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
          <div className="text-center mt-24">
            <a
              href="https://github.com/kblim10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-widest text-muted hover:text-foreground transition-colors inline-flex items-center gap-3"
            >
              View More on GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
