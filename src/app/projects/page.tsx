"use client";
import React from "react";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { FeaturedSpotlight } from "@/components/ui/feature-spotlight";

const projects = [
  {
    title1: "E-Commerce",
    title2: "Admin Dashboard",
    description: "Full-stack admin panel with real-time analytics, inventory management, order tracking and custom reporting.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    linkTo: "#",
    index: "02",
    label: "Full-Stack"
  },
  {
    title1: "DevChat",
    title2: "AI Code Assistant",
    description: "VS Code-style AI coding assistant with context-aware completions, code explanation, and refactoring suggestions.",
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    linkTo: "#",
    index: "03",
    label: "AI / Dev Tools"
  },
  {
    title1: "Gym Management",
    title2: "System",
    description: "Complete gym management platform with member tracking, attendance, billing, and workout planning.",
    imageSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
    linkTo: "#",
    index: "04",
    label: "Full-Stack"
  },
  {
    title1: "Portfolio",
    title2: "Generator AI",
    description: "Enter your details and AI generates a beautiful, SEO-optimized portfolio website in seconds.",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    linkTo: "#",
    index: "05",
    label: "AI / Tools"
  },
  {
    title1: "Restaurant",
    title2: "QR Menu System",
    description: "Digital menu with QR code ordering, real-time kitchen display, payment integration and analytics.",
    imageSrc: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
    linkTo: "#",
    index: "06",
    label: "SaaS"
  },
  {
    title1: "Marshi",
    title2: "Collection",
    description: "E-commerce website for a premium clothing brand featuring ladies, gents, and kids apparel with a modern UI.",
    imageSrc: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80",
    linkTo: "https://marshicollection.vercel.app",
    index: "07",
    label: "E-Commerce"
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pb-24 bg-black w-full overflow-hidden text-white">
      {/* Hero Section */}
      <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden">
        <GLSLHills width="100%" height="100vh" />
        <div className="space-y-6 pointer-events-none z-10 text-center absolute">
          <h1 className="font-semibold text-5xl md:text-7xl whitespace-pre-wrap leading-tight text-white">
            <span className="italic text-4xl md:text-6xl font-thin block mb-4 text-purple-300">Projects That Speak</span>
            Louder Than Words
          </h1>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto">
            We craft stunning visuals and high-performance applications that <br className="hidden md:block" /> 
            help your brand stand out and dominate the market.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-4 max-w-6xl mt-32">
        <div className="mb-20 text-center md:text-left inline-block">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-purple-500 mb-4 block italic">Our Work</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl">
                Premium digital solutions designed to accelerate your business growth. Discover how we scale engineering and design.
            </p>
            <div className="mt-8 h-px bg-white/10 w-full max-w-md"></div>
        </div>

        <div className="flex flex-col items-center mt-12">
            {projects.map((project) => (
                <FeaturedSpotlight 
                    key={project.title1}
                    title1={project.title1}
                    title2={project.title2}
                    description={project.description}
                    index={project.index}
                    linkTo={project.linkTo}
                    imageSrc={project.imageSrc}
                    label={project.label}
                />
            ))}
        </div>
      </div>
    </main>
  );
}
