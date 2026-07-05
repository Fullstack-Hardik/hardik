"use client";
import React from "react";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { FeaturedSpotlight } from "@/components/ui/feature-spotlight";

const projects = [
  {
    title1: "Marshi",
    title2: "Collection",
    description: "E-commerce website for a premium clothing brand featuring ladies, gents, and kids apparel with a modern UI.",
    imageSrc: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80",
    linkTo: "https://marshicollection.vercel.app",
    index: "01",
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
