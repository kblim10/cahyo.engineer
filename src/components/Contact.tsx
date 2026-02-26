"use client";

import { personalInfo, socials } from "@/lib/data";
import { AnimatedCard } from "./animations";
import { Mail, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedCard>
          <div className="flex items-center gap-3 mb-12">
            <div className="section-line" />
            <span className="font-mono text-sm text-accent">05.</span>
            <h2 className="text-2xl font-bold">Contact</h2>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Message card */}
          <AnimatedCard className="lg:col-span-2" delay={0.1}>
            <div className="bento-card shimmer p-6 h-full">
              <h3 className="text-lg font-semibold mb-2">
                Let&apos;s build something together
              </h3>
              <p className="text-xs text-muted mb-6">
                Have an interesting project or opportunity? I&apos;d love to
                hear about it. Drop me a message and I&apos;ll get back to you
                as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground block mb-1.5 font-mono">
                      name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground block mb-1.5 font-mono">
                      email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground block mb-1.5 font-mono">
                    message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-background/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent hover:bg-accent-muted text-white text-sm rounded-full transition-all hover:shadow-lg hover:shadow-accent/25 group"
                >
                  <Send size={14} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </AnimatedCard>

          {/* Socials & Info */}
          <div className="space-y-4">
            <AnimatedCard delay={0.2}>
              <div className="bento-card shimmer p-6">
                <h3 className="text-sm font-semibold mb-4">Connect</h3>
                <div className="space-y-3">
                  {socials.map((social) => {
                    const Icon = iconMap[social.icon] || Mail;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border hover:border-accent/30 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={16} className="text-muted group-hover:text-accent transition-colors" />
                          <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                            {social.name}
                          </span>
                        </div>
                        <ArrowUpRight
                          size={14}
                          className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-all"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <div className="bento-card shimmer p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="status-dot" />
                  <span className="text-xs text-muted font-mono">
                    Currently
                  </span>
                </div>
                <p className="text-sm text-foreground">
                  {personalInfo.availability}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Based in {personalInfo.location}
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <div className="bento-card shimmer p-6">
                <div className="code-block p-3">
                  <p className="text-[10px] font-mono text-muted-foreground">
                    <span className="text-accent">const</span> response ={" "}
                    <span className="text-accent">await</span>{" "}
                    <span className="text-emerald-400">fetch</span>(
                    <span className="text-orange-300">&quot;/api/hire-me&quot;</span>
                    );
                  </p>
                  <p className="text-[10px] font-mono text-success mt-1">
                    // {"{ status: 200, message: \"Let's talk!\" }"}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}
