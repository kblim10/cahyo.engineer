"use client";

import { personalInfo } from "@/lib/data";
import { AnimatedCard } from "./animations";

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="section-wide">
        <AnimatedCard>
          <h2 className="section-title gradient-text mb-24">About</h2>
        </AnimatedCard>

        {/* Two column - balanced */}
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Left - Bio */}
          <AnimatedCard delay={0.2}>
            <div className="minimal-card">
              <h3 className="text-2xl font-bold mb-6">{personalInfo.name}</h3>
              <p className="text-xl text-muted mb-8">{personalInfo.title}</p>
              <p className="text-lg text-muted leading-loose">{personalInfo.bio}</p>
              
              <div className="mt-12 pt-12 border-t border-border flex items-center gap-4">
                <span className="status-dot" />
                <span className="text-sm uppercase tracking-widest text-muted">
                  {personalInfo.availability}
                </span>
                <span className="text-muted">•</span>
                <span className="text-sm uppercase tracking-widest text-muted">
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </AnimatedCard>

          {/* Right - Specialties in 2x2 grid */}
          <div className="grid grid-cols-2 gap-6">
            <AnimatedCard delay={0.3}>
              <div className="minimal-card h-full">
                <div className="text-4xl font-bold mb-6">01</div>
                <h4 className="text-lg font-semibold mb-4">Backend Development</h4>
                <p className="text-muted">Node.js, Express.js, RESTful APIs</p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <div className="minimal-card h-full">
                <div className="text-4xl font-bold mb-6">02</div>
                <h4 className="text-lg font-semibold mb-4">Cloud Infrastructure</h4>
                <p className="text-muted">Kubernetes, Docker, Linux</p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.5}>
              <div className="minimal-card h-full">
                <div className="text-4xl font-bold mb-6">03</div>
                <h4 className="text-lg font-semibold mb-4">DevOps & CI/CD</h4>
                <p className="text-muted">GitHub Actions, Helm, Monitoring</p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.6}>
              <div className="minimal-card h-full">
                <div className="text-4xl font-bold mb-6">04</div>
                <h4 className="text-lg font-semibold mb-4">IoT & Messaging</h4>
                <p className="text-muted">ESP32, MQTT, Telegraf</p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}
