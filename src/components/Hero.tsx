"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden border-b-2 border-border">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,255,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,0,0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Issue header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-16 pb-4 border-b border-border"
        >
          <div className="flex items-center gap-4">
            <span className="status-dot" />
            <span className="label-text">{personalInfo.availability}</span>
          </div>
          <span className="label-text">VOL. 01 · 2026</span>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-none">
            <span className="gradient-text">{personalInfo.nickname.toUpperCase()}</span>
          </h1>
          <div className="section-line mb-6" />
          <h2 className="text-xl md:text-3xl font-bold uppercase tracking-wide text-accent">
            {personalInfo.title}
          </h2>
        </motion.div>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-lg md:text-2xl text-foreground leading-relaxed font-light">
            {personalInfo.tagline}
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-border"
        >
          <div>
            <div className="stat-number">3</div>
            <div className="label-text mt-2">NODE CLUSTER</div>
          </div>
          <div>
            <div className="stat-number">2.4K+</div>
            <div className="label-text mt-2">CODE COMMITS</div>
          </div>
          <div>
            <div className="stat-number">4</div>
            <div className="label-text mt-2">PROJECTS SHIPPED</div>
          </div>
          <div>
            <div className="stat-number">1</div>
            <div className="label-text mt-2">INTL AWARD</div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-accent hover:bg-accent-muted text-black font-bold uppercase text-sm tracking-wider transition-all border-2 border-accent hover:shadow-[4px_4px_0_0_rgba(0,255,0,1)]"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-foreground text-foreground hover:bg-foreground hover:text-black font-bold uppercase text-sm tracking-wider transition-all hover:shadow-[4px_4px_0_0_rgba(255,255,255,1)]"
          >
            View Work
          </a>
          <div className="flex items-center gap-2 text-sm font-mono text-muted ml-4">
            <span className="text-accent">→</span>
            <span>{personalInfo.location}</span>
          </div>
        </motion.div>

        {/* Terminal preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-2xl"
        >
          <div className="border-2 border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
              <div className="w-3 h-3 bg-accent" />
              <div className="w-3 h-3 bg-accent opacity-50" />
              <div className="w-3 h-3 bg-accent opacity-25" />
              <span className="text-xs text-muted font-mono ml-2 uppercase tracking-wider">
                Terminal — cahyo@cloud
              </span>
            </div>
            <div className="space-y-2 text-xs md:text-sm font-mono">
              <p className="text-muted">
                <span className="text-accent">$</span> cat skills.txt
              </p>
              <p className="text-foreground pl-4">
                ◆ Node.js & Express.js APIs
              </p>
              <p className="text-foreground pl-4">
                ◆ Kubernetes Orchestration
              </p>
              <p className="text-foreground pl-4">
                ◆ IoT & MQTT Systems
              </p>
              <p className="text-muted mt-3">
                <span className="text-accent">$</span> echo $STATUS
              </p>
              <p className="text-accent pl-4">
                &gt; Building scalable infrastructure_
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="label-text">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
