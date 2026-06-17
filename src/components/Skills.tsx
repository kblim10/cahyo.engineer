"use client";

import { motion } from "framer-motion";
import { techMarquee, awards } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-14 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-[1340px]">
        
        {/* Marquee Track */}
        <div className="mb-20 border-y border-ink-200/16 py-5 md:mb-32">
          <div className="flex items-center gap-5">
            <span className="hidden font-mono text-[10px] tracking-[0.28em] uppercase text-peach-300 md:inline-flex md:shrink-0">
              → Tech Stack
            </span>
            <div className="marquee-track" style={{ "--mq-speed": "48s", "--mq-gap": "28px" } as React.CSSProperties}>
              <div className="mq-rail">
                <div className="mq-group">
                  {techMarquee.map((tech) => (
                    <span key={tech} className="flex items-center gap-7 font-mono text-[11px] tracking-[0.22em] uppercase text-ink-200">
                      <span>{tech}</span>
                      <span className="text-peach-400">·</span>
                    </span>
                  ))}
                </div>
                <div className="mq-group" aria-hidden="true">
                  {techMarquee.map((tech) => (
                    <span key={`${tech}-dup`} className="flex items-center gap-7 font-mono text-[11px] tracking-[0.22em] uppercase text-ink-200">
                      <span>{tech}</span>
                      <span className="text-peach-400">·</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        {awards.length > 0 && (
          <div className="mb-14 flex flex-col gap-6 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="eyebrow">
                <span className="num">02</span>
                <span className="rule"></span>
                <span>Recognition & Awards</span>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20 mt-10">
              <div className="flex flex-col gap-12">
                {awards.map((award, index) => (
                  <motion.div
                    key={award.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                    className="flex flex-col gap-4 pl-6 relative"
                  >
                    <span aria-hidden="true" className="absolute left-[-2px] top-0 bottom-0 w-px bg-gradient-to-b from-peach-400/60 to-transparent"></span>
                    <span aria-hidden="true" className="absolute left-[-4px] top-1 h-1.5 w-1.5 rounded-full bg-peach-400"></span>
                    
                    <div>
                      <h4 className="font-display text-2xl font-semibold text-cream-100 md:text-3xl">{award.title}</h4>
                      <p className="text-lg text-peach-300 font-serif italic mt-2">{award.event}</p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 border-t border-dashed border-ink-200/24 pt-4 mt-2">
                      <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink-200">{award.organizer}</span>
                      <span className="font-mono text-[10px] tracking-[0.28em] text-peach-400">•</span>
                      <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink-200">{award.year}</span>
                      <span className="font-mono text-[10px] tracking-[0.28em] text-peach-400">•</span>
                      <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink-200">{award.scope}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <aside>
                <p className="text-lg leading-[1.65] text-ink-200 font-serif border-l-2 border-peach-300/36 pl-6">
                  "Excellence is not an act, but a habit." Recognition from international competitions reflects a dedication to quality and innovative problem solving.
                </p>
              </aside>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
