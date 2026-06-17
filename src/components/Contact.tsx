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
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedCard>
          <div className="flex items-center gap-3 mb-16">
            <div className="section-line" />
            <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <AnimatedCard className="lg:col-span-2" delay={0.1}>
            <div className="bento-card shimmer p-8">
              <h3 className="text-xl font-bold mb-2">Let's Connect</h3>
              <p className="text-sm text-muted mb-8">
                Have an interesting project or opportunity? I'd love to hear
                about it. Drop me a message and I'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-muted block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accent-muted text-white font-medium rounded-full transition-all"
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

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status */}
            <AnimatedCard delay={0.2}>
              <div className="bento-card shimmer p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="status-dot" />
                  <span className="text-sm font-medium text-muted">
                    Currently
                  </span>
                </div>
                <p className="text-foreground font-medium mb-2">
                  {personalInfo.availability}
                </p>
                <p className="text-sm text-muted">
                  Based in {personalInfo.location}
                </p>
              </div>
            </AnimatedCard>

            {/* Socials */}
            <AnimatedCard delay={0.3}>
              <div className="bento-card shimmer p-6">
                <h4 className="text-sm font-semibold mb-4">Connect</h4>
                <div className="space-y-3">
                  {socials.map((social) => {
                    const Icon = iconMap[social.icon] || Mail;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border hover:border-accent transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            size={18}
                            className="text-muted group-hover:text-accent transition-colors"
                          />
                          <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                            {social.name}
                          </span>
                        </div>
                        <ArrowRight
                          size={14}
                          className="text-muted opacity-0 group-hover:opacity-100 transition-all"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}
