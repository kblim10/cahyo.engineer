"use client";

import { motion } from "framer-motion";
import { experiences, education } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-14 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-[1340px]">
        <div className="mb-14 flex flex-col gap-6 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow">
              <span className="num">03</span>
              <span className="rule"></span>
              <span>Track Record</span>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display max-w-[16ch] text-5xl font-semibold leading-[1.0] tracking-[-0.03em] text-balance text-ice-100 md:text-7xl lg:text-[5.5rem]"
          >
            Experience & <span className="italic text-cyan-300">Education</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.6fr] lg:gap-20 border-t border-ink-200/16 pt-12 md:pt-20">
          
          <aside className="flex flex-col gap-10 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-cyan-300">Professional</span>
                <span className="h-px flex-1 bg-gradient-to-r from-ink-200/28 to-transparent"></span>
              </div>
              <ol className="relative flex flex-col gap-8 pl-6">
                <span aria-hidden="true" className="absolute left-1.5 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 to-transparent"></span>
                {experiences.map((exp, idx) => (
                  <li key={idx} className="relative flex flex-col gap-2">
                    <span aria-hidden="true" className="absolute left-[-22px] top-[0.4em] inline-block h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-5">
                      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-cyan-300 w-28 shrink-0">{exp.period}</span>
                      <span className="text-[17px] leading-snug text-ice-100 font-display font-semibold">{exp.role} <span className="font-serif italic text-ink-200 font-normal">at {exp.company}</span></span>
                    </div>
                    <div className="md:pl-[8.25rem]">
                      <p className="text-[15px] leading-relaxed text-ink-200 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[9px] tracking-[0.18em] uppercase text-ink-100">
                        {exp.tech.map((t) => <span key={t} className="bg-ink-800 px-2 py-1 rounded-sm">{t}</span>)}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>
          </aside>

          <aside className="flex flex-col gap-10 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-cyan-300">Education</span>
                <span className="h-px flex-1 bg-gradient-to-r from-ink-200/28 to-transparent"></span>
              </div>
              <ol className="relative flex flex-col gap-8 pl-6">
                <span aria-hidden="true" className="absolute left-1.5 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 to-transparent"></span>
                {education.map((edu, idx) => (
                  <li key={idx} className="relative flex flex-col gap-2">
                    <span aria-hidden="true" className="absolute left-[-22px] top-[0.4em] inline-block h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-cyan-300">{edu.year}</span>
                      <span className="text-[17px] leading-snug text-ice-100 font-display font-semibold mt-1">{edu.degree}</span>
                      <span className="text-[15px] leading-snug text-ink-200 font-serif italic">{edu.institution}</span>
                    </div>
                    <div>
                      <p className="text-[14px] leading-relaxed text-ink-200 mt-2">{edu.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>
          </aside>

        </div>
      </div>
    </section>
  );
}
