"use client";

import { personalInfo } from "@/lib/data";
import { AnimatedCard } from "./animations";
import { Code2, Cloud, Terminal, Radio } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      <div className="section-container relative z-10">
        <AnimatedCard>
          <h2 className="section-title gradient-text text-center mb-16">
            About Me
          </h2>
        </AnimatedCard>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Bio */}
          <AnimatedCard delay={0.2}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold mb-4">{personalInfo.name}</h3>
              <p className="text-accent font-semibold mb-6">{personalInfo.title}</p>
              <p className="text-muted leading-relaxed">{personalInfo.bio}</p>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm">
                  <span className="status-dot" />
                  <span className="text-muted">{personalInfo.availability}</span>
                  <span className="text-muted">• {personalInfo.location}</span>
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Right - Specialties */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatedCard delay={0.3}>
              <div className="glass-card p-6 h-full hover:scale-105 transition-transform">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Code2 size={28} className="text-accent" />
                </div>
                <h4 className="font-semibold mb-2">Backend Development</h4>
                <p className="text-sm text-muted">Node.js, Express.js, RESTful APIs, MongoDB, MySQL</p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <div className="glass-card p-6 h-full hover:scale-105 transition-transform">
                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Cloud size={28} className="text-purple-400" />
                </div>
                <h4 className="font-semibold mb-2">Cloud Infrastructure</h4>
                <p className="text-sm text-muted">Kubernetes, Docker, Linux, Cloudflare Tunnel</p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.5}>
              <div className="glass-card p-6 h-full hover:scale-105 transition-transform">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Terminal size={28} className="text-emerald-400" />
                </div>
                <h4 className="font-semibold mb-2">DevOps & CI/CD</h4>
                <p className="text-sm text-muted">GitHub Actions, Helm, Prometheus, Grafana</p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.6}>
              <div className="glass-card p-6 h-full hover:scale-105 transition-transform">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Radio size={28} className="text-cyan-400" />
                </div>
                <h4 className="font-semibold mb-2">IoT & Messaging</h4>
                <p className="text-sm text-muted">ESP32, EMQX MQTT, Telegraf, ArduinoIDE</p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}
