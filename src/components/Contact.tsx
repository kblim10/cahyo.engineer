"use client";

import { personalInfo } from "@/lib/data";
import { AnimatedCard } from "./animations";
import { Send } from "lucide-react";
import { useState } from "react";

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
    <section id="contact" className="py-32">
      <div className="section-wide">
        <AnimatedCard>
          <h2 className="section-title gradient-text mb-24">Contact</h2>
        </AnimatedCard>

        {/* Two columns - balanced */}
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Left - Info */}
          <AnimatedCard delay={0.2}>
            <div className="minimal-card">
              <div className="text-6xl font-bold mb-12">
                Let's work<br />together
              </div>
              
              <p className="text-xl text-muted mb-12 leading-loose">
                Have an interesting project or opportunity? I'd love to hear about it. 
                Send me a message and I'll get back to you.
              </p>

              <div className="space-y-8">
                <div>
                  <div className="text-sm uppercase tracking-widest text-muted mb-2">
                    Email
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-lg hover:text-muted transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>

                <div>
                  <div className="text-sm uppercase tracking-widest text-muted mb-2">
                    Status
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="status-dot" />
                    <span className="text-lg">{personalInfo.availability}</span>
                  </div>
                </div>

                <div>
                  <div className="text-sm uppercase tracking-widest text-muted mb-2">
                    Location
                  </div>
                  <span className="text-lg">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Right - Form */}
          <AnimatedCard delay={0.4}>
            <div className="minimal-card">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-sm uppercase tracking-widest text-muted mb-4">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-background border border-border focus:border-foreground outline-none transition-colors text-lg"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest text-muted mb-4">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-background border border-border focus:border-foreground outline-none transition-colors text-lg"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest text-muted mb-4">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-4 bg-background border border-border focus:border-foreground outline-none transition-colors text-lg resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full justify-center text-base">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
