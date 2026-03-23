"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-xl text-foreground hover:text-accent transition-colors duration-300"
        >
          DY<span className="text-accent">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.5 }}
              className="text-sm text-muted hover:text-foreground transition-colors duration-300 font-mono tracking-wide"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="/DongYeopLee-Resume.pdf"
            target="_blank"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-sm border border-accent/40 text-accent px-5 py-2 rounded-md hover:bg-accent/10 hover:border-accent transition-all duration-300 font-mono"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={
              mobileOpen
                ? { rotate: 45, y: 4 }
                : { rotate: 0, y: 0 }
            }
            className="w-6 h-px bg-foreground block origin-center"
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-px bg-foreground block"
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={
              mobileOpen
                ? { rotate: -45, y: -4 }
                : { rotate: 0, y: 0 }
            }
            className="w-6 h-px bg-foreground block origin-center"
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-white/[0.04]"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-muted hover:text-foreground transition-colors font-mono text-sm py-2"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="/DongYeopLee-Resume.pdf"
                target="_blank"
                className="text-accent font-mono text-sm py-2"
              >
                Resume &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
