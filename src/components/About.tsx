"use client";

import { personalInfo } from "@/lib/data";
import { AnimatedCard } from "./animations";
import { Code2, Cloud, Terminal, Radio, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [showCard, setShowCard] = useState(false);

  return (
    <section id="about" className="py-24 px-6 relative z-10 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <AnimatedCard>
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-px bg-accent/50" />
            <span className="font-mono text-sm text-accent uppercase tracking-widest">01.</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">About Me<span className="text-accent">.</span></h2>
          </div>
        </AnimatedCard>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Bio - spans 2 cols */}
          <AnimatedCard className="lg:col-span-2 md:col-span-2" delay={0.1}>
            <div className="bento-card shimmer p-6 h-full">
              <p className="text-sm text-muted leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full overflow-hidden border border-accent/20 cursor-pointer transition-all hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 hover:scale-110"
                  onClick={() => setShowCard(true)}
                >
                  <Image
                    src="/profile.png"
                    alt={personalInfo.name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium">{personalInfo.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Profile Modal */}
          <AnimatePresence>
            {showCard && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                  onClick={() => setShowCard(false)}
                />
                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
                >
                  <div
                    className="w-full max-w-sm rounded-2xl bg-card border border-border shadow-2xl shadow-black/50 overflow-hidden pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Header gradient banner */}
                    <div className="h-24 bg-gradient-to-r from-accent/30 via-purple-500/20 to-cyan-500/20 relative">
                      <div className="absolute inset-0 bg-[url('/profile.png')] bg-cover bg-center opacity-10 blur-sm" />
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-card shadow-xl ring-2 ring-accent/20">
                          <Image
                            src="/profile.png"
                            alt={personalInfo.name}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Body */}
                    <div className="pt-12 pb-6 px-6 text-center">
                      <h3 className="text-base font-bold text-foreground">
                        {personalInfo.name}
                      </h3>
                      <p className="text-xs text-accent font-mono mt-1">
                        {personalInfo.title}
                      </p>
                      <div className="flex items-center justify-center gap-2 mt-3">
                        <MapPin size={12} className="text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {personalInfo.location}
                        </span>
                        <span className="text-muted-foreground">·</span>
                        <span className="status-dot !w-[6px] !h-[6px]" />
                        <span className="text-xs text-success">
                          {personalInfo.availability}
                        </span>
                      </div>
                      <p className="text-xs text-muted leading-relaxed mt-4">
                        {personalInfo.tagline}
                      </p>
                      <div className="mt-5 flex items-center justify-center gap-3">
                        <a
                          href="#contact"
                          className="px-5 py-2 bg-accent hover:bg-accent-muted text-white text-xs rounded-full transition-all hover:shadow-lg hover:shadow-accent/25"
                          onClick={() => setShowCard(false)}
                        >
                          Get in Touch
                        </a>
                        <button
                          className="px-5 py-2 border border-border text-xs rounded-full text-muted hover:text-foreground hover:border-muted transition-all"
                          onClick={() => setShowCard(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Specialty cards */}
          <AnimatedCard delay={0.2}>
            <div className="bento-card shimmer p-6 h-full flex flex-col justify-between">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Code2 size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-1">
                  Backend Development
                </h3>
                <p className="text-xs text-muted-foreground">
                  RESTful APIs with Node.js & Express.js, database management
                  with MongoDB & MySQL, and Redis caching.
                </p>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.3}>
            <div className="bento-card shimmer p-6 h-full flex flex-col justify-between">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <Cloud size={20} className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-1">
                  Cloud Infrastructure
                </h3>
                <p className="text-xs text-muted-foreground">
                  Kubernetes cluster management, Docker containerization,
                  Linux server administration, and Cloudflare tunneling.
                </p>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.3}>
            <div className="bento-card shimmer p-6 h-full flex flex-col justify-between">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                <Terminal size={20} className="text-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-1">
                  DevOps & CI/CD
                </h3>
                <p className="text-xs text-muted-foreground">
                  GitHub Actions pipelines, Helm charts, Prometheus &
                  Grafana monitoring, and Bitnami deployments.
                </p>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.4}>
            <div className="bento-card shimmer p-6 h-full flex flex-col justify-between">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                <Radio size={20} className="text-orange-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-1">
                  IoT & Messaging
                </h3>
                <p className="text-xs text-muted-foreground">
                  ESP32 programming, EMQX MQTT broker, Telegraf data
                  collection, and hardware-software integration.
                </p>
              </div>
            </div>
          </AnimatedCard>

          {/* Code snippet card - spans 2 cols */}
          <AnimatedCard className="lg:col-span-2" delay={0.4}>
            <div className="bento-card shimmer p-6 h-full">
              <div className="code-block p-4 h-full">
                <p className="text-xs text-muted-foreground mb-2 font-mono">
                  // what drives me
                </p>
                <pre className="text-xs font-mono leading-relaxed">
                  <code>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-foreground">engineer</span>{" "}
                    <span className="text-accent">=</span> {`{\n`}
                    {"  "}
                    <span className="text-emerald-400">passion</span>:{" "}
                    <span className="text-orange-300">
                      &quot;backend &amp; cloud infrastructure&quot;
                    </span>
                    ,{"\n"}
                    {"  "}
                    <span className="text-emerald-400">philosophy</span>:{" "}
                    <span className="text-orange-300">
                      &quot;automate, containerize, deploy&quot;
                    </span>
                    ,{"\n"}
                    {"  "}
                    <span className="text-emerald-400">stack</span>:{" "}
                    <span className="text-orange-300">
                      &quot;Node.js + K8s + Linux&quot;
                    </span>
                    ,{"\n"}
                    {"  "}
                    <span className="text-emerald-400">love</span>:{" "}
                    <span className="text-accent">[</span>
                    <span className="text-orange-300">
                      &quot;clean APIs&quot;
                    </span>
                    ,{" "}
                    <span className="text-orange-300">
                      &quot;IoT systems&quot;
                    </span>
                    ,{" "}
                    <span className="text-orange-300">
                      &quot;monitoring&quot;
                    </span>
                    <span className="text-accent">]</span>
                    {"\n"}
                    {`};`}
                  </code>
                </pre>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
