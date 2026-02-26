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
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedCard>
          <div className="flex items-center gap-3 mb-12">
            <div className="section-line" />
            <span className="font-mono text-sm text-accent">01.</span>
            <h2 className="text-2xl font-bold">About Me</h2>
          </div>
        </AnimatedCard>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Bio - spans 2 cols */}
          <AnimatedCard className="lg:col-span-2 md:col-span-2" delay={0.1}>
            <div className="bento-card shimmer p-6 h-full">
              <p className="text-sm text-muted leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="mt-6 flex items-center gap-3 relative">
                <div
                  className="w-10 h-10 rounded-full overflow-hidden border border-accent/20 cursor-pointer transition-all hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10"
                  onMouseEnter={() => setShowCard(true)}
                  onMouseLeave={() => setShowCard(false)}
                >
                  <Image
                    src="/profile.png"
                    alt={personalInfo.name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Hover Card */}
                <AnimatePresence>
                  {showCard && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute bottom-14 left-0 z-50"
                      onMouseEnter={() => setShowCard(true)}
                      onMouseLeave={() => setShowCard(false)}
                    >
                      <div className="w-64 rounded-xl bg-card border border-border shadow-2xl shadow-black/40 overflow-hidden">
                        {/* Card header gradient */}
                        <div className="h-16 bg-gradient-to-r from-accent/20 via-purple-500/15 to-cyan-500/15 relative">
                          <div className="absolute -bottom-8 left-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-card shadow-lg">
                              <Image
                                src="/profile.png"
                                alt={personalInfo.name}
                                width={64}
                                height={64}
                                className="object-cover w-full h-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Card body */}
                        <div className="pt-10 pb-4 px-4">
                          <p className="text-sm font-semibold text-foreground">
                            {personalInfo.name}
                          </p>
                          <p className="text-[11px] text-accent font-mono mt-0.5">
                            {personalInfo.title}
                          </p>
                          <div className="flex items-center gap-1.5 mt-2">
                            <MapPin size={11} className="text-muted-foreground" />
                            <span className="text-[10px] text-muted-foreground">
                              {personalInfo.location}
                            </span>
                            <span className="text-muted-foreground mx-1">·</span>
                            <span className="status-dot !w-[6px] !h-[6px]" />
                            <span className="text-[10px] text-success">
                              {personalInfo.availability}
                            </span>
                          </div>
                          <p className="text-[10px] text-muted leading-relaxed mt-3 line-clamp-3">
                            {personalInfo.tagline}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div>
                  <p className="text-sm font-medium">{personalInfo.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedCard>

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
