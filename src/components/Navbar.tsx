"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-0 right-0 top-4 z-50 flex justify-center px-4 md:top-5"
    >
      <a
        href="#top"
        aria-label="Back to top"
        className="group inline-flex min-h-[44px] items-center gap-3 rounded-full border border-[var(--color-ink-200)]/20 bg-[var(--color-ink-800)]/70 px-5 py-2 text-[var(--color-ice-100)] shadow-[0_18px_36px_-24px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-colors duration-300 hover:border-[var(--color-cyan-300)]/50 hover:text-[var(--color-cyan-200)]"
      >
        <span className="font-display text-[15px] font-semibold tracking-normal md:text-[17px]">
          Cahyo
        </span>
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-[var(--color-cyan-400)] transition-transform duration-300 group-hover:scale-125"
        ></span>
      </a>
    </motion.header>
  );
}
