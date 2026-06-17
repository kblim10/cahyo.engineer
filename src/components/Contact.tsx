"use client";

import { personalInfo, socials } from "@/lib/data";
import { AnimatedCard } from "./animations";
import { Mail, Github, Linkedin, Send } from "lucide-react";
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
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      <div className="section-container relative z-10">
        <AnimatedCard>
          <h2 className="section-title gradient-text text-center mb-16">
            Get in Touch
          </h2>
        </AnimatedCard>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <AnimatedCard delay={0.2} className="lg:col-span-2">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-muted mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-surface rounded-xl border border-white/10 focus:border-accent outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-muted mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-surface rounded-xl border border-white/10 focus:border-accent outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-muted mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-white/10 focus:border-accent outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedCard>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status */}
            <AnimatedCard delay={0.3}>
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="status-dot" />
                  <span className="text-sm text-muted">Status</span>
                </div>
                <p className="font-semibold mb-2">{personalInfo.availability}</p>
                <p className="text-sm text-muted">{personalInfo.location}</p>
              </div>
            </AnimatedCard>

            {/* Social Links */}
            <AnimatedCard delay={0.4}>
              <div className="glass-card p-6">
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="space-y-3">
                  {socials.map((social) => {
                    const Icon = iconMap[social.icon] || Mail;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl bg-surface hover:bg-surface-light transition-colors group"
                      >
                        <Icon size={20} className="text-muted group-hover:text-accent transition-colors" />
                        <span className="text-sm">{social.name}</span>
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
