"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import BlurFade from "./BlurFade";
import Marquee from "./Marquee";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 10000, suffix: "+", label: "Listings Processed" },
  { value: 171, suffix: "+", label: "Automated Tests" },
  { value: 4200, suffix: "+", label: "Lines of Code Deployed" },
  { value: 60, suffix: " FPS", label: "Renderer Performance" },
];

const techStack = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Three.js",
  "Java",
  "C#",
  "Docker",
  "Kubernetes",
  "Tailwind",
  "NLTK",
  "Claude API",
  "Supabase",
  "Unity",
  "n8n",
  "Git",
  "Perplexity AI",
  "ElevenLabs",
];

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

  return (
    <section id="about" className="py-32 relative grid-bg">
      {/* Decorative vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/10 to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <BlurFade delay={0} yOffset={30}>
          <div className="flex items-baseline gap-4 mb-16">
            <span className="font-mono text-accent text-sm">01</span>
            <h2 className="font-serif text-4xl md:text-5xl">About</h2>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
        </BlurFade>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Bio */}
          <div className="lg:col-span-3 space-y-6">
            <BlurFade delay={0.1}>
              <p className="text-muted text-lg leading-relaxed">
                I&apos;m a Physics &amp; Computer Science student at{" "}
                <span className="text-foreground font-medium">USC</span>,
                drawn to the space where physical intuition meets computational
                thinking. I believe the best software comes from understanding
                the underlying systems deeply — whether that&apos;s the
                structure of natural language or the geometry of spacetime.
              </p>
            </BlurFade>
            <BlurFade delay={0.2}>
              <p className="text-muted text-lg leading-relaxed">
                Currently leading NLP work at{" "}
                <span className="text-foreground font-medium">
                  IDX Exchange
                </span>{" "}
                and consulting for{" "}
                <span className="text-foreground font-medium">
                  Hemut (YC W25)
                </span>
                , building tools that automate complex pipelines from scraping to
                editorial review.
              </p>
            </BlurFade>
            <BlurFade delay={0.3}>
              <p className="text-muted text-lg leading-relaxed">
                Outside of work, I build physics simulations, game prototypes,
                and browser extensions — anything that lets me explore an idea
                hands-on.
              </p>
            </BlurFade>

            {/* Quick facts */}
            <BlurFade delay={0.4}>
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
            </BlurFade>
          </div>

          {/* Skills grid */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {skills.map((group, gi) => (
                <BlurFade key={group.category} delay={0.3 + gi * 0.1}>
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
                </BlurFade>
              ))}
            </div>
          </div>
        </div>

        {/* Stats counters */}
        <BlurFade delay={0.5} className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-surface/50 border border-white/[0.04] hover:border-accent/20 transition-colors duration-500"
                whileHover={{ y: -2 }}
              >
                <div className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <p className="font-mono text-[11px] text-muted uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </BlurFade>

        {/* Tech marquee */}
        <BlurFade delay={0.6} className="mt-16">
          <Marquee speed={35} className="py-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-sm text-muted/50 hover:text-accent/80 transition-colors duration-300 whitespace-nowrap px-2"
              >
                {tech}
              </span>
            ))}
          </Marquee>
        </BlurFade>
      </div>
    </section>
  );
}
