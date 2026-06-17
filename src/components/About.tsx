"use client";

import { personalInfo } from "@/lib/data";
import { AnimatedCard } from "./animations";
import { Code2, Cloud, Terminal, Radio } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 border-b-2 border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <AnimatedCard>
          <div className="flex items-center gap-4 mb-16">
            <span className="label-text text-accent">01.</span>
            <div className="section-line" />
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              Systems
            </h2>
          </div>
        </AnimatedCard>

        {/* Main content - Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Bio & Image */}
          <AnimatedCard delay={0.1}>
            <div className="space-y-8">
              <div className="border-2 border-border p-8 bg-card">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-20 h-20 border-2 border-accent overflow-hidden">
                    <Image
                      src="/profile.png"
                      alt={personalInfo.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-1">
                      {personalInfo.name}
                    </h3>
                    <p className="text-sm font-mono text-accent uppercase">
                      {personalInfo.title}
                    </p>
                    <p className="text-xs text-muted mt-1">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border-2 border-border p-4 bg-card">
                  <div className="text-3xl font-black text-accent font-mono">06</div>
                  <div className="label-text mt-1">Years Experience</div>
                </div>
                <div className="border-2 border-border p-4 bg-card">
                  <div className="text-3xl font-black text-accent font-mono">15+</div>
                  <div className="label-text mt-1">Technologies</div>
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Right - Specialties */}
          <AnimatedCard delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold uppercase mb-6 tracking-tight">
                <span className="text-accent">→</span> Core Disciplines
              </h3>

              {/* Backend */}
              <div className="border-2 border-border p-6 bg-card hover:border-accent transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-2 border-accent bg-accent/10 flex items-center justify-center">
                    <Code2 size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold uppercase tracking-wide mb-2">
                      Backend Development
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">
                      RESTful APIs with Node.js & Express.js, database management
                      with MongoDB & MySQL, and Redis caching.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cloud */}
              <div className="border-2 border-border p-6 bg-card hover:border-accent transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-2 border-accent bg-accent/10 flex items-center justify-center">
                    <Cloud size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold uppercase tracking-wide mb-2">
                      Cloud Infrastructure
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">
                      Kubernetes cluster management, Docker containerization,
                      Linux server administration, and Cloudflare tunneling.
                    </p>
                  </div>
                </div>
              </div>

              {/* DevOps */}
              <div className="border-2 border-border p-6 bg-card hover:border-accent transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-2 border-accent bg-accent/10 flex items-center justify-center">
                    <Terminal size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold uppercase tracking-wide mb-2">
                      DevOps & CI/CD
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">
                      GitHub Actions pipelines, Helm charts, Prometheus &
                      Grafana monitoring, and Bitnami deployments.
                    </p>
                  </div>
                </div>
              </div>

              {/* IoT */}
              <div className="border-2 border-border p-6 bg-card hover:border-accent transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-2 border-accent bg-accent/10 flex items-center justify-center">
                    <Radio size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold uppercase tracking-wide mb-2">
                      IoT & Messaging
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">
                      ESP32 programming, EMQX MQTT broker, Telegraf data
                      collection, and hardware-software integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>

        {/* Philosophy code block */}
        <AnimatedCard delay={0.3}>
          <div className="border-2 border-border p-8 bg-card">
            <div className="label-text mb-4">// ENGINEERING PHILOSOPHY</div>
            <pre className="text-sm md:text-base font-mono leading-relaxed">
              <code>
                <span className="text-accent">const</span>{" "}
                <span className="text-foreground">engineer</span> = {`{\n`}
                {"  "}
                <span className="text-muted">passion:</span>{" "}
                <span className="text-accent">
                  &quot;backend &amp; cloud infrastructure&quot;
                </span>
                ,{"\n"}
                {"  "}
                <span className="text-muted">philosophy:</span>{" "}
                <span className="text-accent">
                  &quot;automate, containerize, deploy&quot;
                </span>
                ,{"\n"}
                {"  "}
                <span className="text-muted">stack:</span>{" "}
                <span className="text-accent">
                  &quot;Node.js + K8s + Linux&quot;
                </span>
                ,{"\n"}
                {"  "}
                <span className="text-muted">love:</span> [
                <span className="text-accent">
                  &quot;clean APIs&quot;, &quot;IoT systems&quot;,
                  &quot;monitoring&quot;
                </span>
                ]{"\n"}
                {`};`}
              </code>
            </pre>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
