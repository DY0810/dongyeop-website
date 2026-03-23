"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "Java", "C#", "HTML/CSS"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Tailwind", "Unity"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Kubernetes", "n8n", "Git", "Supabase"],
  },
  {
    category: "AI / ML",
    items: ["NLTK", "Claude API", "Perplexity AI", "ElevenLabs"],
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative grid-bg">
      {/* Decorative vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/10 to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section header */}
          <div className="flex items-baseline gap-4 mb-16">
            <span className="font-mono text-accent text-sm">01</span>
            <h2 className="font-serif text-4xl md:text-5xl">About</h2>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          <div className="grid lg:grid-cols-5 gap-16">
            {/* Bio */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-muted text-lg leading-relaxed">
                I&apos;m a Physics &amp; Computer Science student at{" "}
                <span className="text-foreground font-medium">USC</span>,
                drawn to the space where physical intuition meets
                computational thinking. I believe the best software comes from
                understanding the underlying systems deeply — whether
                that&apos;s the structure of natural language or the geometry
                of spacetime.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Currently leading NLP work at{" "}
                <span className="text-foreground font-medium">
                  IDX Exchange
                </span>{" "}
                and consulting for{" "}
                <span className="text-foreground font-medium">
                  Hemut (YC W25)
                </span>
                , building tools that automate complex pipelines from scraping
                to editorial review.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Outside of work, I build physics simulations, game prototypes,
                and browser extensions — anything that lets me explore an idea
                hands-on.
              </p>

              {/* Quick facts */}
              <div className="pt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                  <span className="text-muted">
                    English &amp; Korean (Fluent)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                  <span className="text-muted">
                    USACO Platinum &middot; Congressional Silver Medal &middot;
                    Presidential Gold
                  </span>
                </div>
              </div>
            </div>

            {/* Skills grid */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {skills.map((group, gi) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + gi * 0.1, duration: 0.6 }}
                  >
                    <h3 className="font-mono text-[11px] text-accent/70 mb-3 uppercase tracking-[0.2em]">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs text-muted bg-surface border border-white/[0.06] px-3 py-1.5 rounded-md font-mono hover:border-accent/30 hover:text-foreground transition-all duration-300 cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
