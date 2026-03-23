"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const featured = [
  {
    title: "Special Relativity Simulator",
    subtitle: "Spacetime Visualization & Physics Engine",
    description:
      "Full-stack Minkowski spacetime visualization with real-time 2D/3D worldline rendering, Lorentz boost transformations, and interactive MCRF switching. Features a symbolic physics engine for automatic differentiation of 4-vectors, validated by 13 automated integrity checks.",
    tech: ["React", "TypeScript", "Plotly.js", "nerdamer", "mathjs"],
    github: "https://github.com/DY0810/relativity_sim",
    live: "https://relativity-sim.vercel.app",
    color: "#5eead4",
  },
  {
    title: "Veracity",
    subtitle: "Privacy-First AI Fact-Checker",
    description:
      'Chrome extension verifying statistical claims in real-time. "Bring Your Own Key" architecture for 100% client-side processing. Integrates Perplexity AI for NLP analysis, dynamically injecting React overlays to flag disputed vs. verified content.',
    tech: ["React", "TypeScript", "Vite", "Perplexity AI", "Chrome API"],
    github: "https://github.com/DY0810/Veracity-Extension",
    color: "#e8964b",
  },
  {
    title: "Project Aether",
    subtitle: "3D Physics Simulation Engine",
    description:
      "Web-based physics visualization with deterministic rigid-body dynamics, real-time data streams, and interactive sandbox. Simulate forces and observe velocity, acceleration, and kinetic energy at 60 FPS.",
    tech: ["React", "Three.js", "Cannon-es", "Recharts", "TypeScript"],
    github: "https://github.com/DY0810/Physics-Simulation-Project-Aether-",
    color: "#a78bfa",
  },
];

const other = [
  {
    title: "ECHO — Stress Reduction Game",
    description:
      "Low-poly 3D adventure game built in Unity. Led a team at UCI×GATI, secured $500 in seed funding. Custom character controller, environmental customization, and procedural sound.",
    tech: ["Unity", "C#", "3D Modeling"],
    github: "https://github.com/DY0810/Gati-Game-Project",
  },
  {
    title: "Autonomous AI Content Pipeline",
    description:
      "End-to-end automated media workflow using n8n. Integrates AI story generation, video creation (Veo AI), and stitching (ffmpeg) into a zero-touch pipeline posting to YouTube and Instagram.",
    tech: ["n8n", "Anthropic API", "Veo AI", "ffmpeg"],
  },
  {
    title: "Conversational AI Receptionist",
    description:
      "24/7 autonomous customer service using ElevenLabs. Manages Korean-language interactions, routes customers to booking/FAQ, and transfers to live support.",
    tech: ["ElevenLabs", "Workflow Automation", "Korean NLP"],
  },
];

function GithubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function FeaturedProject({
  project,
  index,
}: {
  project: (typeof featured)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative mb-16 last:mb-0"
    >
      {/* Hover glow */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${project.color}25, transparent 50%, ${project.color}10)`,
        }}
      />

      <div className="relative bg-surface border border-white/[0.04] rounded-2xl p-8 md:p-10 group-hover:border-transparent transition-colors duration-500 overflow-hidden">
        {/* Background decorative number */}
        <span
          className="absolute -right-4 -bottom-8 font-serif text-[12rem] leading-none font-bold select-none pointer-events-none"
          style={{ color: `${project.color}06` }}
          aria-hidden="true"
        >
          {index + 1}
        </span>

        <div className="relative z-10">
          <p
            className="font-mono text-xs uppercase tracking-[0.2em] mb-3"
            style={{ color: project.color }}
          >
            {project.subtitle}
          </p>
          <h3 className="font-serif text-3xl md:text-4xl mb-4">
            {project.title}
          </h3>
          <p className="text-muted leading-relaxed mb-6 max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs text-muted bg-background/50 px-2.5 py-1 rounded border border-white/[0.06]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label={`${project.title} GitHub`}
            >
              <GithubIcon />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label={`${project.title} Live Demo`}
              >
                <ExternalIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function OtherProject({
  project,
  index,
}: {
  project: (typeof other)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-surface border border-white/[0.04] rounded-xl p-6 hover:border-accent/20 hover:-translate-y-1 transition-all duration-400"
    >
      <div className="flex items-start justify-between mb-4">
        <svg
          className="w-9 h-9 text-accent/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label={`${project.title} GitHub`}
          >
            <svg
              className="w-4.5 h-4.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        )}
      </div>

      <h3 className="text-base font-semibold mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-[11px] text-muted/70">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 grid-bg">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-baseline gap-4 mb-16">
            <span className="font-mono text-accent text-sm">03</span>
            <h2 className="font-serif text-4xl md:text-5xl">Projects</h2>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
        </motion.div>

        {/* Featured projects */}
        <div className="mb-20">
          {featured.map((project, i) => (
            <FeaturedProject key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Other projects */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-center font-serif text-2xl mb-10"
        >
          Other Notable Work
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-4">
          {other.map((project, i) => (
            <OtherProject key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
