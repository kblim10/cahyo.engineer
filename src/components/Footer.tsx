"use client";

import { FadeIn } from "./animations";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10">
      <FadeIn>
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="text-xl font-bold gradient-accent mb-2">
                cahyo<span className="text-accent">.</span>
              </div>
              <p className="text-sm text-muted">
                Building scalable systems & reliable cloud architectures
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="#about" className="text-sm text-muted hover:text-foreground transition-colors">
                About
              </a>
              <a href="#skills" className="text-sm text-muted hover:text-foreground transition-colors">
                Skills
              </a>
              <a href="#experience" className="text-sm text-muted hover:text-foreground transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-sm text-muted hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm text-muted hover:text-foreground transition-colors">
                Contact
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted">
              © {year} All rights reserved
            </p>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
