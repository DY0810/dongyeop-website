"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "IDX Exchange",
    role: "NLP Engineer & Team Lead",
    period: "Feb 2026 – Present",
    location: "Los Angeles, CA",
    bullets: [
      "Developed a 200-term NLP taxonomy utilizing NLTK tokenization and bigram frequency analysis for entity extraction.",
      "Engineered a regex-driven text normalization pipeline with pandas to standardize pricing, measurements, and abbreviations.",
      "Authored automated validation suites using pytest achieving 100% pass rate.",
    ],
    github: "https://github.com/DY0810/nlp-internship",
  },
  {
    company: "Hemut — YC W25",
    role: "Technical Consultant",
    period: "Feb 2026 – Present",
    location: "Los Angeles, CA",
    bullets: [
      "Architecting a full-stack newsletter generation web app (Next.js, Supabase, Tailwind, Claude API) for a YC-backed freight startup.",
      "Building a cron-based scraping layer with Claude API classification serving 800K+ drivers and 15K+ investors.",
    ],
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
  },
  {
    company: "SD Lab Rats",
    role: "STEM Education Intern",
    period: "Jun 2024 – May 2025",
    location: "San Diego, CA",
    bullets: [
      "Conducted weekly STEM demonstrations for 30+ underserved K-8 students.",
      "Produced 5+ educational YouTube videos on physics and coding fundamentals.",
    ],
  },
];

function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-3 bottom-0 w-px bg-white/[0.06] group-last:bg-gradient-to-b group-last:from-white/[0.06] group-last:to-transparent" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-3 -translate-x-1/2 w-2.5 h-2.5 rounded-full border-2 border-accent bg-background z-10" />

      <div className="bg-surface/50 border border-white/[0.04] rounded-xl p-6 hover:border-accent/20 transition-all duration-500">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <h3 className="text-lg font-semibold text-foreground">
            {exp.role}
          </h3>
          <span className="font-mono text-xs text-muted">{exp.period}</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-accent font-medium text-sm">
            {exp.company}
          </span>
          <span className="text-muted text-xs">&middot; {exp.location}</span>
          {exp.github && (
            <a
              href={exp.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors ml-auto"
              aria-label={`${exp.company} GitHub`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
              <span className="w-1 h-1 rounded-full bg-accent/50 mt-2 shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32">
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-baseline gap-4 mb-16">
            <span className="font-mono text-accent text-sm">02</span>
            <h2 className="font-serif text-4xl md:text-5xl">Experience</h2>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
