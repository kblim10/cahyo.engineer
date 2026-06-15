"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { MapPin, ArrowDown } from "lucide-react";
import React from "react";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20 pointer-events-none">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="text-center lg:text-left pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, z: -100, rotateX: 20 }}
            animate={{ opacity: 1, z: 0, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
          >
            <span className="status-dot" />
            <span className="text-xs text-muted font-mono">
              {personalInfo.availability}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, z: -100, rotateX: 20 }}
            animate={{ opacity: 1, z: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]"
          >
            <span className="gradient-text">{personalInfo.nickname}</span>
            <span className="text-accent drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, z: -100, rotateX: 20 }}
            animate={{ opacity: 1, z: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="mb-6"
          >
            <h2 className="text-xl md:text-2xl font-mono text-muted-foreground">
              <span className="text-accent drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">&gt;</span> {personalInfo.title}
              <span className="typing-cursor" />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, z: -100, rotateX: 20 }}
            animate={{ opacity: 1, z: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            className="text-base md:text-lg text-muted max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed drop-shadow-sm"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, z: -100, rotateX: 20 }}
            animate={{ opacity: 1, z: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <a
              href="#contact"
              className="px-6 py-2.5 bg-accent hover:bg-accent-muted text-white text-sm rounded-full transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-2.5 border border-border text-sm rounded-full text-muted hover:text-foreground hover:border-muted hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.4 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="mt-12 mx-auto lg:mx-0 max-w-lg cursor-crosshair group perspective-[1000px]"
          >
            <div className="code-block p-4 text-left transition-shadow duration-300 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] border border-border/50 group-hover:border-accent/50 relative bg-card/60 backdrop-blur-md"
                 style={{ transform: "translateZ(30px)" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" style={{ transform: "translateZ(-10px)" }}/>
              
              <div className="flex items-center gap-2 mb-3" style={{ transform: "translateZ(40px)" }}>
                <div className="w-3 h-3 rounded-full bg-red-500/60 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-green-500/60 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                <span className="text-[10px] text-muted-foreground ml-2 font-mono">
                  ~/portfolio
                </span>
              </div>
              <div className="space-y-1 text-xs md:text-sm font-mono" style={{ transform: "translateZ(50px)" }}>
                <p>
                  <span className="text-success drop-shadow-[0_0_5px_rgba(34,197,94,0.4)]">cahyo</span>
                  <span className="text-muted-foreground">@</span>
                  <span className="text-accent drop-shadow-[0_0_5px_rgba(59,130,246,0.4)]">cloud</span>
                  <span className="text-muted-foreground"> ~ $ </span>
                  <span className="text-foreground">whoami</span>
                </p>
                <p className="text-muted">
                  TRPL Student | Backend & Cloud Infra | IoT
                </p>
                <p className="mt-2">
                  <span className="text-success drop-shadow-[0_0_5px_rgba(34,197,94,0.4)]">cahyo</span>
                  <span className="text-muted-foreground">@</span>
                  <span className="text-accent drop-shadow-[0_0_5px_rgba(59,130,246,0.4)]">cloud</span>
                  <span className="text-muted-foreground"> ~ $ </span>
                  <span className="text-foreground">cat skills.json | jq</span>
                </p>
                <p className="text-accent drop-shadow-[0_0_3px_rgba(59,130,246,0.3)]">
                  {`{ "focus": ["Node.js APIs", "Kubernetes", "IoT/MQTT"] }`}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-auto"
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
