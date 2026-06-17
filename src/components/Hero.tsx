"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative">
      <div className="grid-lines" />
      
      <div className="section-wide w-full py-32">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Status */}
            <div className="flex items-center gap-3 mb-12">
              <span className="status-dot" />
              <span className="text-sm uppercase tracking-widest text-muted">
                {personalInfo.availability}
              </span>
            </div>

            {/* Name */}
            <h1 className="hero-title mb-8">
              <span className="gradient-text">{personalInfo.nickname}</span>
            </h1>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-muted">
              {personalInfo.title}
            </h2>

            {/* Tagline */}
            <p className="text-xl text-muted mb-12 leading-relaxed max-w-xl">
              {personalInfo.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-6 mb-16">
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="#projects" className="btn">
                View Work
              </a>
            </div>

            {/* Social - dengan spacing proper */}
            <div className="flex items-center gap-8">
              <a
                href="https://github.com/kblim10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors text-sm uppercase tracking-widest"
              >
                GitHub
              </a>
              <span className="w-px h-4 bg-border" />
              <a
                href="https://linkedin.com/in/kblim-cahyo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors text-sm uppercase tracking-widest"
              >
                LinkedIn
              </a>
              <span className="w-px h-4 bg-border" />
              <a
                href="mailto:putrarifki705@gmail.com"
                className="text-muted hover:text-foreground transition-colors text-sm uppercase tracking-widest"
              >
                Email
              </a>
            </div>
          </motion.div>

          {/* Right - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-end"
          >
            {/* Profile Image - larger */}
            <div className="w-full max-w-lg mb-12">
              <div className="aspect-square border border-border overflow-hidden">
                <Image
                  src="/profile.png"
                  alt={personalInfo.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
            </div>

            {/* Stats - spaced out */}
            <div className="grid grid-cols-2 gap-8 w-full max-w-lg">
              <div className="border border-border p-8">
                <div className="text-6xl font-bold mb-3">3</div>
                <div className="text-sm uppercase tracking-widest text-muted">
                  Node Cluster
                </div>
              </div>
              <div className="border border-border p-8">
                <div className="text-6xl font-bold mb-3">15+</div>
                <div className="text-sm uppercase tracking-widest text-muted">
                  Technologies
                </div>
              </div>
              <div className="border border-border p-8">
                <div className="text-6xl font-bold mb-3">4</div>
                <div className="text-sm uppercase tracking-widest text-muted">
                  Projects
                </div>
              </div>
              <div className="border border-border p-8">
                <div className="text-6xl font-bold mb-3">1</div>
                <div className="text-sm uppercase tracking-widest text-muted">
                  Int'l Award
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
