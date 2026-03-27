"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import BlurFade from "./BlurFade";

const experiences = [
  {
    company: "IDX Exchange",
    role: "NLP Engineer & Team Lead",
    period: "Feb 2026 – Present",
    location: "Los Angeles, CA",
    bullets: [
      "Engineered a 6-stage NLP pipeline processing 10,000+ listings with 8 classes, 103+ regex patterns, and a hybrid FAISS/BM25 search engine.",
      "Boosted extraction accuracy by 40% (F1: 42% → 60%) and price precision by 170% (15% → 40%), backed by 171+ automated tests.",
    ],
    github: "https://github.com/DY0810/nlp-internship",
    color: "#5eead4",
  },
  {
    company: "Hemut — YC W25",
    role: "Technical Consultant",
    period: "Feb 2026 – Present",
    location: "Los Angeles, CA",
    bullets: [
      "Built a full-stack AI newsletter engine in Next.js / TypeScript with 10 REST endpoints, 5 Postgres tables, and a 3-stage pipeline deploying 4,200+ LOC to Vercel.",
      "Cut newsletter production from hours to under 2 minutes with structured JSON → template architecture guaranteeing 100% visual consistency.",
    ],
    color: "#e8964b",
  },
  {
    company: "UCI × GATI",
    role: "Game Developer",
    period: "July 2024",
    location: "Irvine, CA",
    bullets: [
      "Secured $500 in seed funding after pitching 'ECHO,' a stress-reduction game concept.",
      "Led a team to build a functional Unity prototype with environmental customization and sound production.",
    ],
    github: "https://github.com/DY0810/Gati-Game-Project",
    color: "#a78bfa",
  },
];

function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <BlurFade delay={index * 0.12} yOffset={30}>
      <div
        className="relative pl-8 pb-12 last:pb-0 group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Timeline line */}
        <div className="absolute left-0 top-3 bottom-0 w-px bg-white/[0.06] group-last:bg-gradient-to-b group-last:from-white/[0.06] group-last:to-transparent" />

        {/* Timeline dot — pulses on hover */}
        <motion.div
          className="absolute left-0 top-3 -translate-x-1/2 w-2.5 h-2.5 rounded-full border-2 bg-background z-10"
          style={{ borderColor: exp.color }}
          animate={{
            boxShadow: hovered
              ? `0 0 12px 2px ${exp.color}40`
              : `0 0 0px 0px ${exp.color}00`,
          }}
        />

        <div className="relative bg-surface/50 border border-white/[0.04] rounded-xl p-6 hover:border-white/[0.08] transition-all duration-500 overflow-hidden">
          {/* Spotlight on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            style={{
              background: `radial-gradient(ellipse at 20% 0%, ${exp.color}08, transparent 60%)`,
            }}
          />

          <div className="relative z-10">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="text-lg font-semibold text-foreground">
                {exp.role}
              </h3>
              <span className="font-mono text-xs text-muted">{exp.period}</span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="font-medium text-sm" style={{ color: exp.color }}>
                {exp.company}
              </span>
              <span className="text-muted text-xs">
                &middot; {exp.location}
              </span>
              {exp.github && (
                <a
                  href={exp.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors ml-auto"
                  aria-label={`${exp.company} GitHub`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>

            <ul className="space-y-2.5">
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-muted text-sm leading-relaxed"
                >
                  <span
                    className="w-1 h-1 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: `${exp.color}80` }}
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </BlurFade>
  );
}

export default function Experience() {
  const ref = useRef(null);

  return (
    <section id="experience" className="py-32">
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <BlurFade delay={0} yOffset={30}>
          <div className="flex items-baseline gap-4 mb-16">
            <span className="font-mono text-accent text-sm">02</span>
            <h2 className="font-serif text-4xl md:text-5xl">Experience</h2>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
        </BlurFade>

        <div>
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
