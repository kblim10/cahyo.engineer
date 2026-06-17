"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { MapPin, ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
        >
          <span className="status-dot" />
          <span className="text-xs text-muted font-medium">
            {personalInfo.availability}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl gradient-text-accent font-bold">
            {personalInfo.title}
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Location & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} className="text-accent" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <a
            href="#contact"
            className="group relative px-8 py-3 bg-accent hover:bg-accent-muted text-white font-medium rounded-full transition-all overflow-hidden"
          >
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-border hover:border-accent text-foreground hover:text-accent font-medium rounded-full transition-all backdrop-blur-sm"
          >
            View Work
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/kblim10"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border hover:border-accent bg-card/50 backdrop-blur-sm flex items-center justify-center text-muted hover:text-accent transition-all"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/kblim-cahyo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border hover:border-accent bg-card/50 backdrop-blur-sm flex items-center justify-center text-muted hover:text-accent transition-all"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:putrarifki705@gmail.com"
            className="w-10 h-10 rounded-full border border-border hover:border-accent bg-card/50 backdrop-blur-sm flex items-center justify-center text-muted hover:text-accent transition-all"
          >
            <Mail size={18} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "3", label: "Node Cluster" },
            { value: "15+", label: "Technologies" },
            { value: "4", label: "Projects" },
            { value: "1", label: "Int'l Award" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-muted uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
