"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative px-6 py-20 md:px-12 md:py-32 lg:px-20 border-t border-ink-200/16 bg-[#0E0F10]">
      <div className="mx-auto max-w-[1340px]">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-16 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <h2 className="font-display text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.1] font-semibold text-ice-100 max-w-[14ch]">
              Interested in working <span className="italic text-cyan-300">together?</span>
            </h2>
            <a href="mailto:putrarifki705@gmail.com" className="inline-flex items-center gap-4 text-cyan-400 hover:text-ice-100 transition-colors w-fit group">
              <span className="font-display text-2xl md:text-3xl font-semibold italic border-b border-cyan-400/30 group-hover:border-ice-100/30 transition-colors pb-1">
                putrarifki705@gmail.com
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-12 md:gap-20 md:justify-end"
          >
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink-200">Social</span>
              <div className="flex flex-col gap-2">
                <a href="https://github.com/kblim10" target="_blank" rel="noopener noreferrer" className="font-serif italic text-lg md:text-xl text-ice-100 hover:text-cyan-300 transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/kblim-cahyo" target="_blank" rel="noopener noreferrer" className="font-serif italic text-lg md:text-xl text-ice-100 hover:text-cyan-300 transition-colors">LinkedIn</a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink-200">Navigate</span>
              <div className="flex flex-col gap-2">
                {["About", "Skills", "Experience", "Projects"].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="font-serif italic text-lg md:text-xl text-ice-100 hover:text-cyan-300 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-20 pt-8 border-t border-ink-200/16 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink-200 text-center md:text-left">© {year} Muhamad Cahyo Rifki Dwi Putra</span>
          <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink-200 text-center md:text-right">Built with Next.js & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
