"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { MapPin, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-purple-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
        >
          <span className="status-dot" />
          <span className="text-xs text-muted font-mono">
            {personalInfo.availability}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="gradient-text">{personalInfo.nickname}</span>
          <span className="text-accent">.</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-xl md:text-2xl font-mono text-muted-foreground">
            <span className="text-accent">&gt;</span> {personalInfo.title}
            <span className="typing-cursor" />
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-muted max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Location & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} />
            <span>{personalInfo.location}</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <a
            href="#contact"
            className="px-6 py-2.5 bg-accent hover:bg-accent-muted text-white text-sm rounded-full transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-6 py-2.5 border border-border text-sm rounded-full text-muted hover:text-foreground hover:border-muted transition-all"
          >
            View Projects
          </a>
        </motion.div>

        {/* Terminal snippet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 mx-auto max-w-lg"
        >
          <div className="code-block p-4 text-left">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="text-[10px] text-muted-foreground ml-2 font-mono">
                ~/portfolio
              </span>
            </div>
            <div className="space-y-1 text-xs md:text-sm">
              <p>
                <span className="text-success">cahyo</span>
                <span className="text-muted-foreground">@</span>
                <span className="text-accent">cloud</span>
                <span className="text-muted-foreground"> ~ $ </span>
                <span className="text-foreground">whoami</span>
              </p>
              <p className="text-muted">
                Backend Engineer | Cloud Architect | DevOps
              </p>
              <p className="mt-2">
                <span className="text-success">cahyo</span>
                <span className="text-muted-foreground">@</span>
                <span className="text-accent">cloud</span>
                <span className="text-muted-foreground"> ~ $ </span>
                <span className="text-foreground">cat skills.json | jq</span>
              </p>
              <p className="text-accent">
                {`{ "focus": ["scalable systems", "cloud-native", "automation"] }`}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
