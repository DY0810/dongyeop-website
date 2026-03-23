"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />

      {/* Floating physics equations — decorative */}
      <div
        className="absolute top-[22%] right-[8%] font-mono text-[11px] select-none pointer-events-none hidden lg:block"
        style={{ color: "rgba(232, 150, 75, 0.06)" }}
        aria-hidden="true"
      >
        ds&sup2; = &minus;c&sup2;dt&sup2; + dx&sup2; + dy&sup2; + dz&sup2;
      </div>
      <div
        className="absolute bottom-[30%] left-[6%] font-mono text-[11px] select-none pointer-events-none hidden lg:block rotate-[-4deg]"
        style={{ color: "rgba(232, 150, 75, 0.05)" }}
        aria-hidden="true"
      >
        &nabla; &times; E = &minus;&part;B/&part;t
      </div>
      <div
        className="absolute top-[40%] left-[12%] font-mono text-[10px] select-none pointer-events-none hidden xl:block rotate-[6deg]"
        style={{ color: "rgba(232, 150, 75, 0.04)" }}
        aria-hidden="true"
      >
        &Gamma;&sup1;&#8320;&#8320; = (GM)/(r&sup2;c&sup2;)
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-8"
        >
          Physics &cap; Computer Science
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-serif text-6xl md:text-8xl lg:text-[9rem] tracking-tight mb-8 leading-[0.9]"
        >
          DongYeop
          <br />
          <span className="italic text-accent">Lee</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed font-sans"
        >
          I build things at the edge of physics and software — from NLP
          pipelines to spacetime simulators.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-6 py-3 font-mono text-sm overflow-hidden rounded-lg whitespace-nowrap"
          >
            <span className="absolute inset-0 bg-accent rounded-lg transition-transform duration-300 group-hover:scale-[1.03]" />
            <span className="relative text-background font-medium">
              View Projects
            </span>
          </a>
          <a
            href="#contact"
            className="px-6 py-3 font-mono text-sm border border-foreground/20 rounded-lg text-foreground hover:border-accent/50 hover:text-accent transition-all duration-300 whitespace-nowrap"
          >
            Get in Touch
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator — positioned relative to section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-muted/60 tracking-[0.25em] uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-accent/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
