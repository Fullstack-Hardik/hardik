"use client";
import React from "react";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { FeaturedSpotlight } from "@/components/ui/feature-spotlight";

const projects = [
  {
    title1: "Vertexiae",
    title2: "Event & HR Platform",
    description: "Company website for Vertex Innovations for event management and admin post hirings. Beautifully designed using Vite, Next.js, Tailwind, MongoDB, and Express.",
    imageSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    linkTo: "https://vertexiae.com",
    index: "01",
    label: "Event Management"
  },
  {
    title1: "EarnetixHub",
    title2: "Task Management",
    description: "Platform for assigning tasks, where users can complete and share them. Built with React, Tailwind, MongoDB, Express, Cloudinary, and Brevo for OTP.",
    imageSrc: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80",
    linkTo: "https://earnetixhub.com",
    index: "02",
    label: "Task Platform"
  },
  {
    title1: "Earnetix",
    title2: "Updates & Blogs",
    description: "The main portal for Earnetix updates, comprehensive blogs, and company details.",
    imageSrc: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
    linkTo: "https://earnetix.com",
    index: "03",
    label: "Blog / Info"
  },
  {
    title1: "GarryDigital360",
    title2: "Virtual Tours",
    description: "Rich, SEO-friendly single-page agency website showcasing 360 virtual tours and web development services using 3D iframes.",
    imageSrc: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=1200&q=80",
    linkTo: "https://garrydigital360.in",
    index: "04",
    label: "Virtual Tours / Agency"
  },
  {
    title1: "Delta Traders",
    title2: "Business Portfolio",
    description: "High-ranking, SEO-optimized business website for a PVC pipes and carpentry shop, designed to boost local sales.",
    imageSrc: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=80",
    linkTo: "https://deltatraders.co.in",
    index: "05",
    label: "E-Commerce / Business"
  },
  {
    title1: "Olive Healthcare",
    title2: "Clinic Website",
    description: "Comprehensive medical clinic website with details and timings, optimized to rank highly in metropolitan areas like Bengaluru.",
    imageSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
    linkTo: "https://olivehealthcareclinic.com",
    index: "06",
    label: "Healthcare / Clinic"
  },
  {
    title1: "HrdkPen",
    title2: "Web IDE App",
    description: "Smart Web IDE helping students write HTML, CSS, JS, Python, and C code with a quick run option and AI bot assistance.",
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    linkTo: "https://hrdkpen.lovable.app",
    index: "07",
    label: "Web IDE / EdTech"
  },
  {
    title1: "GetLiveNow",
    title2: "Free Hosting",
    description: "Service helping users host static HTML, CSS, and JS websites with images quickly and for free, ideal for learning.",
    imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    linkTo: "https://getlivenow.vercel.app",
    index: "08",
    label: "Hosting / Service"
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
