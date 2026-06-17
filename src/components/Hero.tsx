"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden noise-texture">
      {/* Gradient background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px]" />

      <div className="section-container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6">
              <span className="status-dot" />
              <span className="text-sm text-muted">{personalInfo.availability}</span>
            </div>

            {/* Name & Title */}
            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">cahyo</span>
              <span className="text-accent">.</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl gradient-accent font-semibold mb-6">
              {personalInfo.title}
            </h2>

            <p className="text-lg text-muted mb-8 leading-relaxed max-w-xl">
              {personalInfo.tagline}. Specialized in Node.js, Kubernetes, and IoT systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="btn-primary">
                Get in Touch
                <ArrowDown size={18} />
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/kblim10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card flex items-center justify-center hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/kblim-cahyo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card flex items-center justify-center hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:putrarifki705@gmail.com"
                className="w-12 h-12 glass-card flex items-center justify-center hover:text-accent transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right side - Profile & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center lg:items-end"
          >
            {/* Profile Image */}
            <div className="relative mb-8">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden glass-card p-2">
                <Image
                  src="/profile.png"
                  alt={personalInfo.name}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold gradient-accent mb-2">3</div>
                <div className="text-sm text-muted">Node Cluster</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold gradient-accent mb-2">15+</div>
                <div className="text-sm text-muted">Technologies</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold gradient-accent mb-2">4</div>
                <div className="text-sm text-muted">Projects</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold gradient-accent mb-2">1</div>
                <div className="text-sm text-muted">Int'l Award</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
