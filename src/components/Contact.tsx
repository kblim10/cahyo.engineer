"use client";

import { personalInfo, socials } from "@/lib/data";
import { AnimatedCard } from "./animations";
import { Mail, Github, Linkedin, Send, ArrowRight } from "lucide-react";
import { useState } from "react";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
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
    <section id="contact" className="py-32 px-6 border-b-2 border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <AnimatedCard>
          <div className="flex items-center gap-4 mb-16">
            <span className="label-text text-accent">05.</span>
            <div className="section-line" />
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              Network
            </h2>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Form */}
          <AnimatedCard delay={0.1}>
            <div className="border-2 border-border p-8 bg-card">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-sm text-muted mb-8 leading-relaxed">
                Have an interesting project or opportunity? Drop me a message
                and I&apos;ll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="label-text block mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-background border-2 border-border px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="label-text block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-background border-2 border-border px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="label-text block mb-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-background border-2 border-border px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-8 py-3 bg-accent hover:bg-accent-muted text-black font-bold uppercase text-sm tracking-wider transition-all border-2 border-accent hover:shadow-[4px_4px_0_0_rgba(0,255,0,1)] group"
                >
                  <Send size={16} />
                  <span>Send Message</span>
                  <ArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </button>
              </form>
            </div>
          </AnimatedCard>

          {/* Right - Info & Socials */}
          <div className="space-y-6">
            {/* Status */}
            <AnimatedCard delay={0.2}>
              <div className="border-2 border-border p-8 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <span className="status-dot" />
                  <span className="label-text">Status</span>
                </div>
                <h4 className="text-xl font-bold mb-2">
                  {personalInfo.availability}
                </h4>
                <p className="text-sm text-muted">
                  Based in {personalInfo.location}
                </p>
              </div>
            </AnimatedCard>

            {/* Socials */}
            <AnimatedCard delay={0.3}>
              <div className="border-2 border-border p-8 bg-card">
                <h4 className="text-lg font-bold uppercase tracking-tight mb-6">
                  Connect
                </h4>
                <div className="space-y-3">
                  {socials.map((social) => {
                    const Icon = iconMap[social.icon] || Mail;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 border-2 border-border hover:border-accent bg-background transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            size={20}
                            className="text-accent"
                          />
                          <span className="text-sm font-mono uppercase tracking-wider">
                            {social.name}
                          </span>
                        </div>
                        <ArrowRight
                          size={16}
                          className="text-accent opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </AnimatedCard>

            {/* Terminal snippet */}
            <AnimatedCard delay={0.4}>
              <div className="border-2 border-border p-6 bg-card">
                <div className="font-mono text-xs space-y-1">
                  <p className="text-muted">
                    <span className="text-accent">$</span> curl -X POST
                    /api/contact
                  </p>
                  <p className="text-accent pl-4">
                    {`{ status: 200, message: "Let's talk!" }`}
                  </p>
                  <p className="text-muted">
                    <span className="text-accent">$</span> echo $RESPONSE_TIME
                  </p>
                  <p className="text-accent pl-4">&lt; 24 hours_</p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}
