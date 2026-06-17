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
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-32 pb-20 pointer-events-none">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div className="text-center lg:text-left pointer-events-auto flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-border/60 bg-card/40 backdrop-blur-md mb-10 shadow-sm"
          >
            <span className="status-dot w-2.5 h-2.5" />
            <span className="text-sm text-foreground/80 font-mono tracking-wide uppercase">
              {personalInfo.availability}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1] drop-shadow-xl"
          >
            <span className="text-foreground">{personalInfo.nickname}</span>
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-mono text-muted-foreground font-light tracking-tight">
              <span className="text-accent mr-3">&gt;</span> {personalInfo.title}
              <span className="typing-cursor" />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-2xl text-muted-foreground/80 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed font-light"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
          >
            <div className="flex items-center gap-3 text-base text-muted-foreground">
              <MapPin size={18} className="text-accent" />
              <span className="font-medium tracking-wide">{personalInfo.location}</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border/80" />
            <a
              href="#contact"
              className="px-8 py-4 bg-foreground text-background text-base font-medium rounded-none hover:bg-accent hover:text-white transition-all hover:scale-105"
            >
              Start a project
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border border-border text-base font-medium rounded-none text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
            >
              View work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 mx-auto lg:mx-0 max-w-xl group"
          >
            <div className="code-block p-6 text-left transition-all duration-500 hover:bg-card/60 border border-border/30 hover:border-accent/40 relative bg-card/40 backdrop-blur-md rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs text-muted-foreground ml-3 font-mono tracking-wider opacity-60">
                  zsh - root@cahyo-cloud
                </span>
              </div>
              <div className="space-y-3 text-sm md:text-base font-mono leading-relaxed">
                <p>
                  <span className="text-green-400">root</span>
                  <span className="text-muted-foreground">@</span>
                  <span className="text-blue-400">cahyo-cloud</span>
                  <span className="text-muted-foreground"> ~ # </span>
                  <span className="text-foreground/90 font-semibold">systemctl status profile</span>
                </p>
                <p className="text-muted-foreground pl-4 border-l-2 border-border/50 ml-2">
                  ● profile.service - Cloud Architect & IoT Dev<br/>
                  Active: <span className="text-green-400 font-bold">active (running)</span> since Mon 2024-01-01 00:00:00 UTC<br/>
                  Main PID: 1 (node)
                </p>
                <p className="mt-4">
                  <span className="text-green-400">root</span>
                  <span className="text-muted-foreground">@</span>
                  <span className="text-blue-400">cahyo-cloud</span>
                  <span className="text-muted-foreground"> ~ # </span>
                  <span className="text-foreground/90 font-semibold">cat skills.json</span>
                </p>
                <p className="text-accent/90 pl-4">
                  {`{ "stack": ["Node.js", "Kubernetes", "AWS", "MQTT"] }`}
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-auto"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-4 rounded-full border border-border/50 bg-card/20 backdrop-blur-sm"
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
