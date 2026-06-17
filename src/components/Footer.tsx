"use client";

import { FadeIn } from "./animations";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-border py-16 px-6">
      <FadeIn>
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b-2 border-border">
            {/* Left - Brand */}
            <div>
              <div className="font-mono text-sm font-bold uppercase mb-4">
                <span className="text-accent">$</span> cahyo.engineer
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Building scalable systems & reliable cloud architectures.
              </p>
            </div>

            {/* Middle - Quick links */}
            <div>
              <h4 className="label-text mb-4">Navigation</h4>
              <nav className="space-y-2">
                {[
                  { name: "Systems", href: "#about" },
                  { name: "Stack", href: "#skills" },
                  { name: "Deployments", href: "#experience" },
                  { name: "Containers", href: "#projects" },
                  { name: "Network", href: "#contact" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-xs text-muted hover:text-accent transition-colors font-mono uppercase"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Right - Meta */}
            <div>
              <h4 className="label-text mb-4">Details</h4>
              <div className="space-y-2 text-xs text-muted font-mono">
                <p>VOL. 01 · 2026</p>
                <p>INDONESIA</p>
                <p className="text-accent">OPEN FOR OPPORTUNITIES</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted font-mono uppercase tracking-wider">
              &copy; {year} Muhamad Cahyo Rifki Dwi Putra
            </p>

            <p className="text-xs text-muted font-mono">
              <span className="text-accent">// </span>
              Designed & Built with Terminal Precision
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/kblim10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-accent transition-colors font-mono uppercase"
              >
                GitHub
              </a>
              <span className="text-border">◆</span>
              <a
                href="https://linkedin.com/in/kblim-cahyo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-accent transition-colors font-mono uppercase"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
