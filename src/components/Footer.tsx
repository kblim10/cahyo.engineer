"use client";

import { FadeIn } from "./animations";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-24 border-t border-border">
      <FadeIn>
        <div className="section-wide">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold mb-4">
                cahyo<span className="text-muted">.</span>
              </div>
              <p className="text-muted">
                Building scalable systems &<br />reliable cloud architectures
              </p>
            </div>

            {/* Links */}
            <div>
              <div className="text-sm uppercase tracking-widest text-muted mb-6">
                Navigate
              </div>
              <div className="space-y-3">
                {["About", "Skills", "Experience", "Projects", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-muted hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <div className="text-sm uppercase tracking-widest text-muted mb-6">
                Connect
              </div>
              <div className="space-y-3">
                <a
                  href="https://github.com/kblim10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/kblim-cahyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:putrarifki705@gmail.com"
                  className="block text-muted hover:text-foreground transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-12 border-t border-border flex justify-between items-center">
            <p className="text-sm text-muted">
              © {year} Muhamad Cahyo Rifki Dwi Putra
            </p>
            <p className="text-sm text-muted">
              All rights reserved
            </p>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
