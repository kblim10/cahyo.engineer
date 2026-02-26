"use client";

import { personalInfo } from "@/lib/data";
import { AnimatedCard } from "./animations";
import { Code2, Cloud, Terminal, Cpu } from "lucide-react";

export default function About() {
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
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <span className="text-lg">👨‍💻</span>
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
                  APIs, microservices, event-driven architectures, and
                  distributed systems.
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
                  Cloud Architecture
                </h3>
                <p className="text-xs text-muted-foreground">
                  Multi-cloud infra, IaC, serverless, and cost-optimized
                  solutions.
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
                  Automated pipelines, GitOps, container orchestration, and
                  monitoring.
                </p>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.4}>
            <div className="bento-card shimmer p-6 h-full flex flex-col justify-between">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                <Cpu size={20} className="text-orange-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-1">
                  System Design
                </h3>
                <p className="text-xs text-muted-foreground">
                  Scalable architectures, database design, caching strategies,
                  and performance tuning.
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
                      &quot;building reliable systems&quot;
                    </span>
                    ,{"\n"}
                    {"  "}
                    <span className="text-emerald-400">philosophy</span>:{" "}
                    <span className="text-orange-300">
                      &quot;automate everything&quot;
                    </span>
                    ,{"\n"}
                    {"  "}
                    <span className="text-emerald-400">goal</span>:{" "}
                    <span className="text-orange-300">
                      &quot;99.99% uptime&quot;
                    </span>
                    ,{"\n"}
                    {"  "}
                    <span className="text-emerald-400">love</span>:{" "}
                    <span className="text-accent">[</span>
                    <span className="text-orange-300">
                      &quot;clean code&quot;
                    </span>
                    ,{" "}
                    <span className="text-orange-300">
                      &quot;observability&quot;
                    </span>
                    ,{" "}
                    <span className="text-orange-300">
                      &quot;open source&quot;
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
