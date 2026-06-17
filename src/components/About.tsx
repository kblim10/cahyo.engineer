"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative px-6 pt-14 pb-10 md:px-12 md:pt-36 md:pb-20 lg:px-20">
      <div className="mx-auto max-w-[1340px]">
        <div className="mb-10 flex flex-col gap-6 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow">
              <span className="num">01</span>
              <span className="rule"></span>
              <span>Background & Working Style</span>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display max-w-[18ch] text-5xl font-semibold leading-[1.0] tracking-[-0.03em] text-balance text-cream-100 md:text-7xl lg:text-[5.5rem]"
          >
            A backend engineer <span className="italic text-peach-300">who thinks in systems</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-10">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg leading-[1.65] text-ink-100 md:text-[19px] font-serif"
            >
              {personalInfo.bio}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 border-t border-dashed border-ink-200/24 pt-5"
            >
              <span className="font-mono text-peach-300">/</span>
              <span className="font-display text-2xl font-semibold italic text-cream-100 md:text-[28px]">{personalInfo.name}</span>
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink-200">· {personalInfo.title}</span>
            </motion.div>
          </div>

          <aside className="flex flex-col gap-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative overflow-hidden rounded-lg aspect-[4/5] border border-ink-200/10 shadow-[0_20px_45px_rgba(0,0,0,0.45)] bg-ink-800"
            >
              <Image
                src="/profile.png"
                alt={personalInfo.name}
                width={800}
                height={1000}
                className="absolute inset-0 block h-full w-full object-cover grayscale opacity-80 transition-all duration-700 hover:scale-105 hover:grayscale-0 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-peach-500 mix-blend-multiply opacity-10 pointer-events-none"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-baseline justify-between gap-4 border-b-2 border-ink-200/32 pb-2"
            >
              <span className="font-display text-xl font-bold text-cream-100">Vitals</span>
            </motion.div>

            <dl className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-[88px_1fr] items-baseline gap-4 border-b border-ink-200/18 pb-3"
              >
                <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-peach-300">Based in</dt>
                <dd className="flex flex-col gap-0.5">
                  <span className="font-display text-base font-semibold italic text-cream-100">{personalInfo.location}</span>
                </dd>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="grid grid-cols-[88px_1fr] items-baseline gap-4 border-b border-ink-200/18 pb-3"
              >
                <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-peach-300">Open to</dt>
                <dd className="flex flex-col gap-0.5">
                  <span className="font-display text-base font-semibold italic text-cream-100">{personalInfo.availability}</span>
                </dd>
              </motion.div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
