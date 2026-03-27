"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import TextScramble from "./TextScramble";
import MagneticButton from "./MagneticButton";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />

      {/* Floating physics equations — decorative */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute top-[22%] right-[8%] font-mono text-[11px] select-none pointer-events-none hidden lg:block"
        style={{ color: "rgba(232, 150, 75, 0.06)" }}
        aria-hidden="true"
      >
        ds&sup2; = &minus;c&sup2;dt&sup2; + dx&sup2; + dy&sup2; + dz&sup2;
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 2 }}
        className="absolute bottom-[30%] left-[6%] font-mono text-[11px] select-none pointer-events-none hidden lg:block rotate-[-4deg]"
        style={{ color: "rgba(232, 150, 75, 0.05)" }}
        aria-hidden="true"
      >
        &nabla; &times; E = &minus;&part;B/&part;t
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 2 }}
        className="absolute top-[40%] left-[12%] font-mono text-[10px] select-none pointer-events-none hidden xl:block rotate-[6deg]"
        style={{ color: "rgba(232, 150, 75, 0.04)" }}
        aria-hidden="true"
      >
        &Gamma;&sup1;&#8320;&#8320; = (GM)/(r&sup2;c&sup2;)
      </motion.div>

      {/* Horizontal accent lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent origin-left hidden lg:block"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.7, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/5 to-transparent origin-right hidden lg:block"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-8"
        >
          Physics &cap; Computer Science
        </motion.p>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] tracking-tight mb-4 leading-[0.9]">
          <TextScramble
            text="DongYeop"
            className="block"
            delay={500}
          />
          <TextScramble
            text="Lee"
            className="block italic text-accent mt-2"
            delay={900}
          />
        </h1>

        {/* Role badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8 mt-8"
        >
          {["NLP Engineer", "Physics Sim Dev", "YC Consultant"].map(
            (role, i) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + i * 0.1 }}
                className="font-mono text-xs text-muted border border-white/[0.08] bg-surface/50 px-3 py-1.5 rounded-full backdrop-blur-sm"
              >
                {role}
              </motion.span>
            )
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed font-sans"
        >
          I build things at the edge of physics and software — from NLP
          pipelines to spacetime simulators.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex items-center justify-center gap-4"
        >
          <MagneticButton
            as="a"
            href="#projects"
            strength={0.25}
            className="group relative px-7 py-3.5 font-mono text-sm overflow-hidden rounded-xl whitespace-nowrap inline-block"
          >
            <span className="absolute inset-0 bg-accent rounded-xl transition-transform duration-300 group-hover:scale-[1.03]" />
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-hover rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative text-background font-medium">
              View Projects
            </span>
          </MagneticButton>

          <MagneticButton
            as="a"
            href="#contact"
            strength={0.25}
            className="px-7 py-3.5 font-mono text-sm border border-foreground/20 rounded-xl text-foreground hover:border-accent/50 hover:text-accent transition-all duration-300 whitespace-nowrap inline-block"
          >
            Get in Touch
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
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
