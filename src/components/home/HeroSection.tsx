"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"/><line x1="9" y1="20" x2="9.01" y2="20"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "AI Product Builder",
  "UI/UX Designer",
  "Tech Educator",
  "SaaS Creator",
  "Problem Solver",
];

// Gemini-style animated SVG paths
function GeminiPaths({ progress }: { progress: number }) {
  const paths = [
    "M 0 200 Q 200 100 400 200 Q 600 300 800 200 Q 1000 100 1200 200",
    "M 0 220 Q 200 120 400 220 Q 600 320 800 220 Q 1000 120 1200 220",
    "M 0 180 Q 200 80 400 180 Q 600 280 800 180 Q 1000 80 1200 180",
    "M 0 240 Q 200 140 400 240 Q 600 340 800 240 Q 1000 140 1200 240",
    "M 0 160 Q 200 60 400 160 Q 600 260 800 160 Q 1000 60 1200 160",
    "M 0 260 Q 200 160 400 260 Q 600 360 800 260 Q 1000 160 1200 260",
  ];

  const colors = [
    "#a855f7",
    "#06b6d4",
    "#ec4899",
    "#8b5cf6",
    "#22d3ee",
    "#f472b6",
  ];

  const opacities = [0.9, 0.7, 0.5, 0.8, 0.6, 0.4];

  return (
    <svg
      viewBox="0 0 1200 400"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
    >
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={colors[i]}
          strokeWidth={i < 2 ? 3 : i < 4 ? 2 : 1.5}
          strokeOpacity={opacities[i] * progress}
          strokeLinecap="round"
          filter={i < 3 ? `url(#glow-${i})` : undefined}
        />
      ))}
      <defs>
        {[0, 1, 2].map((i) => (
          <filter key={i} id={`glow-${i}`}>
            <feGaussianBlur stdDeviation={i < 2 ? 4 : 3} result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        ))}
      </defs>
    </svg>
  );
}

export default function GeminiHero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pathProgress, setPathProgress] = useState(0);

  // Animate path progress on mount
  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 2000;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setPathProgress(p);
      if (p < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Typewriter
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timer: ReturnType<typeof setTimeout>;
    if (!deleting && charIndex < current.length) {
      timer = setTimeout(() => { setText(current.slice(0, charIndex + 1)); setCharIndex(c => c + 1); }, 70);
    } else if (!deleting && charIndex === current.length) {
      timer = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIndex > 0) {
      timer = setTimeout(() => { setText(current.slice(0, charIndex - 1)); setCharIndex(c => c - 1); }, 35);
    } else {
      setDeleting(false);
      setRoleIndex(r => (r + 1) % ROLES.length);
    }
    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Gemini path background */}
      <div className="absolute inset-0 pointer-events-none">
        <GeminiPaths progress={pathProgress} />
        {/* Radial glow center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(168,85,247,0.12),transparent)]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(to right, #a855f7 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main content */}
      <div className="container mx-auto max-w-6xl px-4 text-center relative z-10">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-purple-500/30 text-purple-300 text-sm font-semibold mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to Work & Freelance Projects
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 leading-none tracking-tight">
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #ffffff 30%, #a855f7 60%, #06b6d4 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            HARDIK
          </span>
          <span
            className="block text-4xl md:text-5xl lg:text-6xl mt-2"
            style={{
              background: "linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            YADAV
          </span>
        </h1>

        {/* Typewriter role */}
        <div className="h-14 flex items-center justify-center mb-6">
          <span className="text-2xl md:text-3xl font-bold text-purple-300">
            {text}
            <span className="text-purple-400 animate-pulse ml-0.5">|</span>
          </span>
        </div>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Crafting{" "}
          <span className="text-cyan-400 font-semibold">scalable web apps</span>,{" "}
          <span className="text-purple-400 font-semibold">AI-powered products</span> &{" "}
          <span className="text-pink-400 font-semibold">digital experiences</span> that
          make people say <em className="text-white">"wow"</em>.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            href="/pricing"
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:opacity-90 transition-all hover:scale-105"
            style={{ boxShadow: "0 0 30px rgba(168,85,247,0.4), 0 0 60px rgba(168,85,247,0.1)" }}
          >
            Hire Me
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg glass border border-white/20 text-white hover:border-purple-400/50 transition-all hover:scale-105"
          >
            About Me
          </Link>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-16">
          {[
            { icon: <GithubIcon />, href: "https://github.com", label: "GitHub" },
            { icon: <LinkedinIcon />, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: <Mail className="w-5 h-5" />, href: "mailto:hardikyadav@example.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/50 border border-white/10 transition-all hover:scale-110"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {["React", "Next.js", "Node.js", "TypeScript", "Python", "MongoDB", "PostgreSQL", "AWS", "AI/ML", "Tailwind", "Figma"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-xs font-medium glass border border-white/8 text-gray-400 hover:border-purple-400/30 hover:text-purple-300 transition-all cursor-default"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs animate-float">
        <span className="font-mono uppercase tracking-widest">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4V16M5 11L10 16L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}
