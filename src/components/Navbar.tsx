"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-bold gradient-text-accent hover:opacity-80 transition-opacity"
        >
          cahyo<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="/CV-Muhamad%20Cahyo.pdf"
            target="_blank"
            className="px-6 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition-all text-sm font-medium"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground hover:text-accent transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/CV-Muhamad%20Cahyo.pdf"
              target="_blank"
              className="px-6 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition-all text-sm font-medium text-center"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
