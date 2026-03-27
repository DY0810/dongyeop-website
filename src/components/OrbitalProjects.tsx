"use client";

import { useState, useEffect, useRef } from "react";

interface OrbitalProject {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  color: string;
  icon: React.ReactNode;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

const projects: OrbitalProject[] = [
  {
    id: 1,
    title: "Relativity Sim",
    subtitle: "Spacetime Visualization",
    description:
      "Real-time Minkowski spacetime with Lorentz boosts, symbolic auto-differentiation, and interactive 2D/3D worldline rendering. 3,200+ LOC at 60fps.",
    tech: ["React", "TypeScript", "Three.js"],
    github: "https://github.com/DY0810/relativity_sim",
    live: "https://relativity-sim.vercel.app",
    color: "#5eead4",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    relatedIds: [3],
    status: "completed",
    energy: 95,
  },
  {
    id: 2,
    title: "Veracity",
    subtitle: "AI Fact-Checker",
    description:
      "Chrome extension verifying 15–20 claims per article. BYOK architecture, 6-strategy fuzzy matching, 4-level JSON repair engine.",
    tech: ["React", "TypeScript", "Perplexity AI"],
    github: "https://github.com/DY0810/Veracity-Extension",
    color: "#e8964b",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    relatedIds: [4],
    status: "completed",
    energy: 90,
  },
  {
    id: 3,
    title: "Project Aether",
    subtitle: "Physics Engine",
    description:
      "Web-based physics sandbox with deterministic rigid-body dynamics, real-time data streams, and force visualization at 60 FPS.",
    tech: ["React", "Three.js", "Cannon-es"],
    github: "https://github.com/DY0810/Physics-Simulation-Project-Aether-",
    color: "#a78bfa",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    relatedIds: [1],
    status: "completed",
    energy: 85,
  },
  {
    id: 4,
    title: "NLP Pipeline",
    subtitle: "IDX Exchange",
    description:
      "6-stage NLP pipeline processing 10,000+ listings with hybrid FAISS/BM25 search. F1 boosted 42% → 60%.",
    tech: ["Python", "NLTK", "FAISS"],
    github: "https://github.com/DY0810/nlp-internship",
    color: "#5eead4",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    relatedIds: [5, 2],
    status: "in-progress",
    energy: 80,
  },
  {
    id: 5,
    title: "Hemut Newsletter",
    subtitle: "YC W25",
    description:
      "Full-stack AI newsletter engine with 10 REST endpoints, 3-stage pipeline, deploying 4,200+ LOC. Production from hours to 2 min.",
    tech: ["Next.js", "TypeScript", "Claude API"],
    color: "#f59e0b",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
    relatedIds: [4],
    status: "in-progress",
    energy: 75,
  },
  {
    id: 6,
    title: "ECHO Game",
    subtitle: "UCI × GATI",
    description:
      "Low-poly 3D stress-reduction game in Unity. Led team, secured $500 seed funding. Custom character controller and procedural sound.",
    tech: ["Unity", "C#", "3D Modeling"],
    github: "https://github.com/DY0810/Gati-Game-Project",
    color: "#fb7185",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.491 48.491 0 01-4.163-.3c-1.108-.128-2.03-1.05-2.03-2.158v-.633c0-.413.336-.75.75-.75h14.5c.414 0 .75.337.75.75v.633c0 1.108-.922 2.03-2.03 2.158a48.486 48.486 0 01-4.163.3.64.64 0 01-.657-.643v0z" />
      </svg>
    ),
    relatedIds: [],
    status: "completed",
    energy: 70,
  },
];

export default function OrbitalProjects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulsingIds, setPulsingIds] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedId(null);
      setAutoRotate(true);
      setPulsingIds(new Set());
    }
  };

  const toggleItem = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
      setAutoRotate(true);
      setPulsingIds(new Set());
    } else {
      setExpandedId(id);
      setAutoRotate(false);
      const item = projects.find((p) => p.id === id);
      setPulsingIds(new Set(item?.relatedIds || []));
      // Center on node
      const idx = projects.findIndex((p) => p.id === id);
      const targetAngle = (idx / projects.length) * 360;
      setRotationAngle(270 - targetAngle);
    }
  };

  useEffect(() => {
    if (!autoRotate) return;
    const timer = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.25) % 360);
    }, 50);
    return () => clearInterval(timer);
  }, [autoRotate]);

  const [radius, setRadius] = useState(180);

  useEffect(() => {
    const updateRadius = () => {
      setRadius(window.innerWidth < 480 ? 120 : window.innerWidth < 768 ? 150 : 180);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const getPosition = (index: number) => {
    const angle = ((index / projects.length) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2);
    const scale = 0.7 + 0.3 * ((1 + Math.sin(radian)) / 2);
    return { x, y, zIndex, opacity, scale };
  };

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: "min(600px, 80vh)" }}
    >
      <div
        ref={orbitRef}
        className="absolute w-full h-full flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        {/* Center orb — amber gradient matching site theme */}
        <div className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-accent via-accent-hover to-accent-cool flex items-center justify-center z-10">
          <div className="absolute w-18 h-18 rounded-full border border-accent/20 animate-ping opacity-60" style={{ width: "72px", height: "72px" }} />
          <div
            className="absolute rounded-full border border-accent/10 animate-ping opacity-40"
            style={{ width: "88px", height: "88px", animationDelay: "0.5s" }}
          />
          <div className="w-7 h-7 rounded-full bg-foreground/80 backdrop-blur-md" />
        </div>

        {/* Orbit ring */}
        <div
          className="absolute rounded-full border border-white/[0.06]"
          style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
        />
        {/* Second orbit ring for depth */}
        <div
          className="absolute rounded-full border border-white/[0.03] rotate-45"
          style={{ width: `${radius * 2 + 60}px`, height: `${radius * 2 + 60}px` }}
        />

        {/* Connection lines to active node */}
        {expandedId && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-[5]">
            {(() => {
              const activeIdx = projects.findIndex((p) => p.id === expandedId);
              const activePos = getPosition(activeIdx);
              const cx = 50; // center %
              const cy = 50;
              return projects
                .filter((p) => pulsingIds.has(p.id))
                .map((p) => {
                  const idx = projects.findIndex((pr) => pr.id === p.id);
                  const pos = getPosition(idx);
                  return (
                    <line
                      key={p.id}
                      x1={`${cx + (activePos.x / 360) * 100}%`}
                      y1={`${cy + (activePos.y / 360) * 100}%`}
                      x2={`${cx + (pos.x / 360) * 100}%`}
                      y2={`${cy + (pos.y / 360) * 100}%`}
                      stroke="rgba(232, 150, 75, 0.15)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                  );
                });
            })()}
          </svg>
        )}

        {/* Project nodes */}
        {projects.map((project, index) => {
          const pos = getPosition(index);
          const isExpanded = expandedId === project.id;
          const isPulsing = pulsingIds.has(project.id);
          const isRelated =
            expandedId !== null &&
            projects.find((p) => p.id === expandedId)?.relatedIds.includes(project.id);

          return (
            <div
              key={project.id}
              className="absolute transition-all duration-700"
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px) scale(${isExpanded ? 1.2 : pos.scale})`,
                zIndex: isExpanded ? 200 : pos.zIndex,
                opacity: isExpanded ? 1 : expandedId && !isRelated ? pos.opacity * 0.5 : pos.opacity,
                cursor: "none",
              }}
              onClick={(e) => {
                e.stopPropagation();
                toggleItem(project.id);
              }}
            >
              {/* Energy glow */}
              <div
                className={`absolute rounded-full ${isPulsing ? "animate-pulse" : ""}`}
                style={{
                  background: `radial-gradient(circle, ${project.color}25 0%, transparent 70%)`,
                  width: `${project.energy * 0.5 + 40}px`,
                  height: `${project.energy * 0.5 + 40}px`,
                  left: `${-(project.energy * 0.5 + 40 - 40) / 2}px`,
                  top: `${-(project.energy * 0.5 + 40 - 40) / 2}px`,
                }}
              />

              {/* Node circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  isExpanded
                    ? "scale-125"
                    : ""
                }`}
                style={{
                  backgroundColor: isExpanded
                    ? project.color
                    : isRelated
                    ? `${project.color}50`
                    : "var(--background)",
                  borderColor: isExpanded
                    ? project.color
                    : isRelated
                    ? project.color
                    : `${project.color}60`,
                  color: isExpanded ? "var(--background)" : project.color,
                  boxShadow: isExpanded
                    ? `0 0 20px ${project.color}40`
                    : "none",
                }}
              >
                {project.icon}
              </div>

              {/* Title label */}
              <div
                className={`absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] tracking-wider transition-all duration-300 ${
                  isExpanded ? "text-foreground font-semibold scale-110" : "text-muted"
                }`}
              >
                {project.title}
              </div>

              {/* Expanded card */}
              {isExpanded && (
                <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-72 bg-surface/95 backdrop-blur-xl border border-white/[0.08] rounded-xl shadow-2xl shadow-black/40 overflow-visible z-50">
                  {/* Connector line */}
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3"
                    style={{ backgroundColor: `${project.color}50` }}
                  />

                  <div className="p-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border"
                        style={{
                          color: project.status === "in-progress" ? "var(--background)" : project.color,
                          backgroundColor: project.status === "in-progress" ? project.color : "transparent",
                          borderColor: `${project.color}40`,
                        }}
                      >
                        {project.status === "completed"
                          ? "COMPLETE"
                          : project.status === "in-progress"
                          ? "IN PROGRESS"
                          : "PENDING"}
                      </span>
                      <span className="font-mono text-[10px] text-muted">
                        {project.subtitle}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg mb-2">{project.title}</h4>
                    <p className="text-muted text-xs leading-relaxed mb-3">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] text-muted/70 bg-background/50 px-1.5 py-0.5 rounded border border-white/[0.06]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Energy bar */}
                    <div className="pt-2 border-t border-white/[0.06]">
                      <div className="flex justify-between items-center text-[10px] mb-1">
                        <span className="font-mono text-muted flex items-center gap-1">
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                          </svg>
                          Complexity
                        </span>
                        <span className="font-mono text-muted">{project.energy}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${project.energy}%`,
                            background: `linear-gradient(to right, ${project.color}80, ${project.color})`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 mt-3 pt-2 border-t border-white/[0.06]">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-muted hover:text-foreground transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-muted hover:text-foreground transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>

                    {/* Connected nodes */}
                    {project.relatedIds.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-white/[0.06]">
                        <p className="font-mono text-[9px] text-muted/60 uppercase tracking-wider mb-1.5">
                          Connected Projects
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.relatedIds.map((relId) => {
                            const related = projects.find((p) => p.id === relId);
                            if (!related) return null;
                            return (
                              <button
                                key={relId}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleItem(relId);
                                }}
                                className="flex items-center gap-1 font-mono text-[10px] text-muted/80 hover:text-foreground border border-white/[0.08] hover:border-accent/30 px-1.5 py-0.5 rounded transition-all"
                              >
                                {related.title}
                                <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Instruction text */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] text-muted/40 tracking-wider">
        CLICK A NODE TO EXPLORE
      </div>
    </div>
  );
}
