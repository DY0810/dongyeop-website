"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import BlurFade from "./BlurFade";
import TiltCard from "./TiltCard";
import OrbitalProjects from "./OrbitalProjects";

const featured = [
  {
    title: "Special Relativity Simulator",
    subtitle: "Spacetime Visualization & Physics Engine",
    description:
      "Real-time Minkowski spacetime with Lorentz boost transformations, symbolic auto-differentiation, and interactive 2D/3D worldline rendering. 3,200+ LOC, 60fps with 5,000+ trace points.",
    tech: ["React", "TypeScript", "Three.js", "mathjs"],
    github: "https://github.com/DY0810/relativity_sim",
    live: "https://relativity-sim.vercel.app",
    color: "#5eead4",
    stats: "3,200+ LOC",
  },
  {
    title: "Veracity",
    subtitle: "Privacy-First AI Fact-Checker",
    description:
      "Chrome extension verifying 15–20 factual claims per article in real-time. BYOK architecture with zero backend data collection, 6-strategy fuzzy matching, and 4-level JSON repair engine.",
    tech: ["React", "TypeScript", "Perplexity AI", "Chrome API"],
    github: "https://github.com/DY0810/Veracity-Extension",
    color: "#e8964b",
    stats: "Chrome Web Store",
  },
  {
    title: "Project Aether",
    subtitle: "3D Physics Simulation Engine",
    description:
      "Web-based physics sandbox with deterministic rigid-body dynamics, real-time data streams, and interactive force visualization at 60 FPS.",
    tech: ["React", "Three.js", "Cannon-es", "TypeScript"],
    github: "https://github.com/DY0810/Physics-Simulation-Project-Aether-",
    color: "#a78bfa",
    stats: "60 FPS",
  },
];

const other = [
  {
    title: "ECHO — Stress Reduction Game",
    description:
      "Low-poly 3D adventure built in Unity. Led a team at UCI×GATI, secured $500 in seed funding.",
    tech: ["Unity", "C#", "3D Modeling"],
    github: "https://github.com/DY0810/Gati-Game-Project",
  },
  {
    title: "AI Content Pipeline",
    description:
      "End-to-end automated media workflow using n8n — AI story generation, video creation, and zero-touch posting.",
    tech: ["n8n", "Anthropic API", "Veo AI", "ffmpeg"],
  },
  {
    title: "AI Receptionist",
    description:
      "24/7 autonomous Korean-language customer service with routing, booking, and live handoff.",
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
  return (
    <BlurFade delay={index * 0.15} yOffset={40}>
      <TiltCard
        glareColor={`${project.color}20`}
        tiltStrength={6}
        className="mb-8 last:mb-0"
      >
        <div className="relative bg-surface border border-white/[0.04] rounded-2xl p-8 md:p-10 overflow-hidden group hover:border-white/[0.08] transition-colors duration-500">
          {/* Background decorative number */}
          <span
            className="absolute -right-4 -bottom-8 font-serif text-[12rem] leading-none font-bold select-none pointer-events-none"
            style={{ color: `${project.color}06` }}
            aria-hidden="true"
          >
            {index + 1}
          </span>

          {/* Animated corner accent */}
          <motion.div
            className="absolute top-0 left-0 w-20 h-px origin-left"
            style={{ background: `linear-gradient(to right, ${project.color}60, transparent)` }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
          />
          <motion.div
            className="absolute top-0 left-0 h-20 w-px origin-top"
            style={{ background: `linear-gradient(to bottom, ${project.color}60, transparent)` }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
          />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-3">
              <p
                className="font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: project.color }}
              >
                {project.subtitle}
              </p>
              <span
                className="font-mono text-[11px] px-2 py-0.5 rounded-md border"
                style={{
                  color: project.color,
                  borderColor: `${project.color}30`,
                  backgroundColor: `${project.color}08`,
                }}
              >
                {project.stats}
              </span>
            </div>

            <h3 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-muted leading-relaxed mb-6 max-w-2xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs text-muted bg-background/50 px-2.5 py-1 rounded-md border border-white/[0.06] hover:border-accent/20 transition-colors duration-300"
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
      </TiltCard>
    </BlurFade>
  );
}

function OtherProject({
  project,
  index,
}: {
  project: (typeof other)[0];
  index: number;
}) {
  return (
    <BlurFade delay={0.1 + index * 0.1} yOffset={20}>
      <div className="group relative bg-surface border border-white/[0.04] rounded-xl p-6 hover:border-accent/20 hover:-translate-y-1 transition-all duration-400 h-full">
        {/* Spotlight effect on hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

        <div className="relative z-10">
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
        </div>
      </div>
    </BlurFade>
  );
}

export default function Projects() {
  const ref = useRef(null);

  return (
    <section id="projects" className="py-32 grid-bg">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <BlurFade delay={0} yOffset={30}>
          <div className="flex items-baseline gap-4 mb-16">
            <span className="font-mono text-accent text-sm">03</span>
            <h2 className="font-serif text-4xl md:text-5xl">Projects</h2>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
        </BlurFade>

        {/* Interactive orbital view */}
        <BlurFade delay={0.1} yOffset={30}>
          <OrbitalProjects />
        </BlurFade>

        {/* Featured projects */}
        <div className="mb-20 mt-16">
          {featured.map((project, i) => (
            <FeaturedProject key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Other projects */}
        <BlurFade delay={0.2}>
          <h3 className="text-center font-serif text-2xl mb-10">
            Other Notable Work
          </h3>
        </BlurFade>
        <div className="grid md:grid-cols-3 gap-4">
          {other.map((project, i) => (
            <OtherProject key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
