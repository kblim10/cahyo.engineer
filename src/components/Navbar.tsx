"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Systems", href: "#about", num: "01" },
  { name: "Stack", href: "#skills", num: "02" },
  { name: "Deployments", href: "#experience", num: "03" },
  { name: "Containers", href: "#projects", num: "04" },
  { name: "Network", href: "#contact", num: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
          ? "bg-background/95 backdrop-blur-xl border-b-2 border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm tracking-wider font-bold uppercase"
        >
          <span className="text-accent">$</span> cahyo.engineer
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-mono uppercase tracking-wider text-muted hover:text-accent transition-colors relative group border-2 border-transparent hover:border-accent"
            >
              <span className="text-accent mr-2">{link.num}</span>
              {link.name}
            </a>
          ))}
          <a
            href="/CV-Muhamad%20Cahyo.pdf"
            target="_blank"
            className="ml-4 text-sm px-6 py-2 border-2 border-accent text-accent hover:bg-accent hover:text-black transition-all font-bold uppercase tracking-wider"
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
          className="md:hidden bg-background/98 backdrop-blur-xl border-b-2 border-border"
        >
          <div className="px-6 py-6 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-mono uppercase tracking-wider text-muted hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4 py-2"
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-accent mr-2">{link.num}</span>
                {link.name}
              </a>
            ))}
            <a
              href="/CV-Muhamad%20Cahyo.pdf"
              target="_blank"
              className="mt-2 text-sm px-6 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-black transition-all font-bold uppercase tracking-wider text-center"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
