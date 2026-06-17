"use client";

import { personalInfo } from "@/lib/data";
import { AnimatedCard } from "./animations";
import { Code2, Cloud, Terminal, Radio } from "lucide-react";
import Image from "next/image";

export default function About() {
  const specialties = [
    {
      icon: Code2,
      title: "Backend Development",
      description:
        "RESTful APIs with Node.js & Express.js, database management with MongoDB & MySQL, and Redis caching for optimal performance.",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "Kubernetes cluster management, Docker containerization, Linux server administration, and Cloudflare tunneling.",
    },
    {
      icon: Terminal,
      title: "DevOps & CI/CD",
      description:
        "GitHub Actions pipelines, Helm charts, Prometheus & Grafana monitoring, and automated Bitnami deployments.",
    },
    {
      icon: Radio,
      title: "IoT & Messaging",
      description:
        "ESP32 programming, EMQX MQTT broker, Telegraf data collection, and seamless hardware-software integration.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedCard>
          <div className="flex items-center gap-3 mb-16">
            <div className="section-line" />
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          </div>
        </AnimatedCard>

        {/* Bio Card */}
        <AnimatedCard delay={0.1}>
          <div className="bento-card shimmer p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="shrink-0">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-accent/20 shadow-xl">
                  <Image
                    src="/profile.png"
                    alt={personalInfo.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  {personalInfo.name}
                </h3>
                <p className="text-accent font-medium mb-4">
                  {personalInfo.title}
                </p>
                <p className="text-muted leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialties.map((specialty, idx) => (
            <AnimatedCard key={specialty.title} delay={0.2 + idx * 0.1}>
              <div className="bento-card shimmer p-6 h-full group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <specialty.icon size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors">
                  {specialty.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
