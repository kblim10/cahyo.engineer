"use client";

import { FadeIn } from "./animations";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-6">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="text-lg font-bold gradient-text-accent mb-2">
                cahyo<span className="text-accent">.</span>
              </div>
              <p className="text-xs text-muted">
                Building scalable systems & reliable cloud architectures
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="#about"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>

            <p className="text-xs text-muted">
              © {year} Muhamad Cahyo Rifki Dwi Putra
            </p>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
