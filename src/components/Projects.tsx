"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-14 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-[1340px]">
        <div className="mb-14 flex flex-col gap-6 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow">
              <span className="num">04</span>
              <span className="rule"></span>
              <span>Build Log</span>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display max-w-[16ch] text-5xl font-semibold leading-[1.0] tracking-[-0.03em] text-balance text-ice-100 md:text-7xl lg:text-[5.5rem]"
          >
            Selected <span className="italic text-cyan-300">Projects</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-t border-ink-200/16 pt-12 md:pt-20">
          {projects.map((project, idx) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
              className="group flex flex-col gap-6 rounded-2xl border border-ink-800 bg-ink-900/40 p-6 md:p-8 transition-colors hover:border-cyan-300/30 hover:bg-ink-800/60"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-cyan-300">
                    {project.category}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-200">
                    {project.period}
                  </span>
                </div>
                <h3 className="font-display text-3xl font-semibold text-ice-100 group-hover:text-cyan-200 transition-colors">
                  {project.title}
                </h3>
                <p className="font-serif italic text-ink-200 text-lg">
                  {project.role}
                </p>
              </div>

              <div className="h-px w-full bg-ink-800" />

              <p className="text-ink-100 leading-relaxed text-[15px]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[9px] tracking-[0.18em] uppercase text-ink-200 mt-auto pt-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-ink-800 px-3 py-1.5 rounded-sm border border-ink-800 group-hover:border-ink-200/20 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
