"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] overflow-hidden md:min-h-[100vh]">
      <div className="absolute inset-0 pointer-events-none">
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          className="absolute right-[5%] top-[11%] h-[30%] w-[35%] opacity-70"
        >
          <line x1="14" y1="56" x2="28" y2="42" stroke="var(--color-peach-300)" strokeWidth="0.5" strokeOpacity="0.5" />
          <line x1="28" y1="42" x2="42" y2="54" stroke="var(--color-peach-300)" strokeWidth="0.5" strokeOpacity="0.5" />
          <line x1="42" y1="54" x2="56" y2="40" stroke="var(--color-peach-300)" strokeWidth="0.5" strokeOpacity="0.5" />
          <line x1="56" y1="40" x2="70" y2="52" stroke="var(--color-peach-300)" strokeWidth="0.5" strokeOpacity="0.5" />
          <line x1="70" y1="52" x2="84" y2="38" stroke="var(--color-peach-300)" strokeWidth="0.5" strokeOpacity="0.5" />
          <circle cx="14" cy="56" r="1.5" fill="var(--color-peach-200)" />
          <circle cx="28" cy="42" r="1.5" fill="var(--color-peach-200)" />
          <circle cx="42" cy="54" r="1.5" fill="var(--color-peach-200)" />
          <circle cx="56" cy="40" r="1.5" fill="var(--color-peach-200)" />
          <circle cx="70" cy="52" r="1.5" fill="var(--color-peach-200)" />
          <circle cx="84" cy="38" r="1.5" fill="var(--color-peach-200)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[1340px] flex-col justify-center px-6 pt-16 pb-6 md:px-12 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col gap-6 md:min-h-[calc(100vh-11rem)] md:justify-center md:gap-10"
        >
          <div className="flex flex-col gap-7 md:gap-9">
            <div className="flex flex-col gap-3.5">
              <h1 className="max-w-[11ch] font-display text-[clamp(2.75rem,9.5vw,9.5rem)] font-semibold leading-[0.82] tracking-normal text-cream-100 md:max-w-[9ch]">
                <span className="block">Muhamad</span>
                <span className="block text-peach-300 italic">Cahyo</span>
              </h1>
              <p className="font-mono text-[12px] tracking-[0.26em] text-ink-200 uppercase md:hidden mt-4">
                {personalInfo.title}
              </p>
            </div>

            <div className="hidden max-w-[42rem] flex-col gap-3 md:flex">
              <p className="font-mono text-[12px] tracking-[0.26em] text-peach-300 uppercase md:text-[13px]">
                {personalInfo.title}
              </p>
              <p className="max-w-[34rem] text-[15px] leading-[1.55] text-ink-200 md:text-xl md:leading-relaxed font-serif italic">
                &quot;{personalInfo.tagline}&quot;
              </p>
            </div>

            <div className="hidden flex-wrap items-center gap-3 md:flex">
              <a
                href="#contact"
                className="group relative inline-flex min-h-[44px] items-center gap-3 overflow-hidden rounded-full bg-cream-100 px-6 py-3 text-sm font-medium text-ink-900 transition-all duration-500 hover:bg-peach-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-peach-300"
              >
                <span className="relative z-10">Get in touch</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pointer-events-none absolute right-6 bottom-8 hidden md:block md:right-12 md:bottom-12"
        >
          <div className="mr-auto flex max-w-[42rem] flex-col items-start gap-8 text-cream-100">
            <div className="flex items-center gap-4 font-mono text-[11px] tracking-[0.25em] text-ink-200 uppercase">
              <span>Selected proof</span>
              <span className="h-px w-12 bg-ink-200/50"></span>
              <span>Infrastructure</span>
            </div>
            
            <div className="grid w-full grid-cols-3 gap-5 border-y border-ink-200/20 py-5">
              <div className="flex flex-col gap-1">
                <span className="font-display text-[clamp(2rem,4vw,4.5rem)] font-semibold leading-none tracking-normal text-cream-100">3</span>
                <span className="max-w-[10rem] font-mono text-[10px] leading-snug tracking-[0.22em] text-ink-200 uppercase">Node Cluster</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display text-[clamp(2rem,4vw,4.5rem)] font-semibold leading-none tracking-normal text-cream-100">15+</span>
                <span className="max-w-[10rem] font-mono text-[10px] leading-snug tracking-[0.22em] text-ink-200 uppercase">Technologies</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display text-[clamp(2rem,4vw,4.5rem)] font-semibold leading-none tracking-normal text-cream-100">1</span>
                <span className="max-w-[10rem] font-mono text-[10px] leading-snug tracking-[0.22em] text-ink-200 uppercase">Int&apos;l Award</span>
              </div>
            </div>
            
            <p className="max-w-[35rem] text-lg leading-relaxed text-ink-100 font-serif">
              {personalInfo.bio.split(".")[0]}. {personalInfo.bio.split(".")[1]}.
            </p>
          </div>
        </motion.div>
        
        {/* Mobile stats view */}
        <div className="md:hidden mt-12">
          <div className="flex flex-col gap-4 rounded-2xl border border-ink-800 bg-ink-900/50 px-4 py-4 backdrop-blur-[3px]">
            <p className="text-[14px] leading-normal text-ink-100 font-serif">
              {personalInfo.bio.split(".")[0]}.
            </p>
            <div className="grid grid-cols-3 gap-3 border-t border-ink-200/20 pt-4">
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-2xl font-semibold leading-none text-cream-100">3</span>
                <span className="font-mono text-[9px] leading-snug tracking-[0.18em] text-ink-200 uppercase">Node Cluster</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-2xl font-semibold leading-none text-cream-100">15+</span>
                <span className="font-mono text-[9px] leading-snug tracking-[0.18em] text-ink-200 uppercase">Technologies</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-2xl font-semibold leading-none text-cream-100">1</span>
                <span className="font-mono text-[9px] leading-snug tracking-[0.18em] text-ink-200 uppercase">Int&apos;l Award</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
