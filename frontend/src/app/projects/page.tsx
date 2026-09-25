"use client";
import React from "react";
import { cn } from "@/lib/utils";

import { Footer } from "@/components/ui/Footer";
import { ImageStreamHero } from "@/components/ui/image-stream-hero";
import { FeaturedSpotlight } from "@/components/ui/feature-spotlight";
import Navbar from "@/components/ui/Navbar";

const projects = [
  {
    title1: "Olive Health",
    title2: "Care Clinic",
    description: "Trusted homeopathic & holistic care clinic in Pune led by Dr. Nisha Solomon, providing gentle, evidence-based treatments.",
    imageSrc: "/proj_olive.png",
    linkTo: "https://www.olivehealthcareclinic.com/",
    index: "01",
    label: "Healthcare",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    working: "Appointments can be booked through direct WhatsApp integration, while the site showcases detailed specialty services and health articles."
  },
  {
    title1: "Divine Wheel",
    title2: "Of Fortune",
    description: "A platform for spiritual guidance offering private readings, energy sessions and sacred goods with Natassha Sharrma.",
    imageSrc: "/proj_divine.png",
    linkTo: "https://divinewheeloffortune.com/",
    index: "02",
    label: "Spiritual",
    technologies: ["React", "Vite", "Framer Motion"],
    working: "Users can browse spiritual services, book private readings, and shop for sacred goods via integrated e-commerce features."
  },
  {
    title1: "HRDKPen",
    title2: "Code IDE",
    description: "A fully functional AI web IDE for coding and learning, featuring CodeMirror, virtual terminal, and an AI chat agent for assistance.",
    imageSrc: "/proj_ide_hrdkpen.png",
    linkTo: "https://hrdkpen-code.vercel.app",
    index: "03",
    label: "Web IDE",
    technologies: ["React", "CodeMirror", "Node.js", "Socket.io"],
    working: "Provides real-time code compilation and execution using a virtual terminal, with live AI chat integration."
  },
  {
    title1: "Vertex",
    title2: "CRM",
    description: "A fast and intuitive CRM dashboard with task management, messaging, employee and manager panels, activity logs, screen sharing, and full secure authentication.",
    imageSrc: "/proj_crm_vertex.png",
    linkTo: "https://vertexcrm.vercel.app/",
    index: "04",
    label: "Management",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    working: "An employee management system featuring live messaging, task assignment, and activity tracking dashboards."
  },
  {
    title1: "Vertexiae",
    title2: "Platform",
    description: "A comprehensive event and HR management dashboard with real-time analytics and employee tracking.",
    imageSrc: "/proj_event.png",
    linkTo: "https://github.com/fullstack-hardik",
    index: "05",
    label: "HR & Events",
    technologies: ["Next.js", "Firebase", "Stripe"],
    working: "Facilitates end-to-end event management, ticket booking, and real-time HR analytics."
  },
  {
    title1: "Earnetix",
    title2: "Hub",
    description: "A centralized task management and team collaboration hub with kanban boards and workflow automation.",
    imageSrc: "/proj_task.png",
    linkTo: "https://github.com/fullstack-hardik",
    index: "06",
    label: "Productivity",
    technologies: ["React", "Redux", "Express", "MongoDB"],
    working: "Enables task organization via drag-and-drop Kanban boards and custom workflow automation rules."
  },
  {
    title1: "Earnetix",
    title2: "Updates",
    description: "A modern tech blog and news portal featuring seamless reading experiences and content discovery.",
    imageSrc: "/proj_blog.png",
    linkTo: "https://github.com/fullstack-hardik",
    index: "07",
    label: "Publishing",
    technologies: ["Next.js", "Contentful CMS", "GraphQL"],
    working: "A scalable publishing platform that delivers technical articles and news seamlessly with static site generation."
  },
  {
    title1: "Garry",
    title2: "Digital 360",
    description: "An immersive virtual tour agency platform showcasing 3D spatial mapping and interactive property views.",
    imageSrc: "/proj_tour.png",
    linkTo: "https://github.com/fullstack-hardik",
    index: "08",
    label: "Virtual Reality",
    technologies: ["Three.js", "React", "WebGL"],
    working: "Provides immersive 3D spatial mapping and interactive property tours directly within the browser."
  },
  {
    title1: "Delta",
    title2: "Traders",
    description: "A sophisticated corporate portfolio and trading platform with real-time market integrations.",
    imageSrc: "/proj_business.png",
    linkTo: "https://github.com/fullstack-hardik",
    index: "09",
    label: "Finance",
    technologies: ["React", "WebSockets", "Chart.js"],
    working: "Delivers live trading dashboards and real-time market data visualization for corporate portfolios."
  },
  {
    title1: "Ratna",
    title2: "Kanchan",
    description: "A luxurious e-commerce storefront for premium jewelry with seamless checkout and product visualization.",
    imageSrc: "/proj_jewelry.png",
    linkTo: "https://github.com/fullstack-hardik",
    index: "10",
    label: "E-Commerce",
    technologies: ["Next.js", "Shopify API", "Tailwind"],
    working: "A premium jewelry e-commerce experience with interactive product visualizers and a seamless checkout flow."
  }
];

const HERO_IMAGES = projects.map(p => ({
  src: p.imageSrc,
  alt: p.title1
}));

export default function ProjectsPage() {
  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased selection:bg-orange-500/30">
      <Navbar />

      {/* Hero Parallax section acting as the header for the page */}
      <div className="pt-24 pb-12 w-full flex justify-center bg-black overflow-hidden relative">
        <ImageStreamHero
          images={HERO_IMAGES}
          className="h-[560px] w-full max-w-7xl rounded-lg bg-black"
        >
          <div className="relative z-10 flex h-full flex-col items-center justify-center py-12 text-center pointer-events-none">
            <div className="px-6 mb-8 mt-20">
              <h1 className="text-balance text-5xl font-medium tracking-tight text-white sm:text-6xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                Our Showcase
              </h1>
            </div>
            <p className="max-w-md text-balance px-6 text-sm text-zinc-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Discover a gallery of cutting-edge applications, engaging websites, and digital experiences we've crafted.
            </p>
          </div>
        </ImageStreamHero>
      </div>

      {/* Projects List Section */}
      <main className="relative z-10 w-full bg-black py-24 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="flex flex-col gap-20">
            {projects.map((project, idx) => (
              <FeaturedSpotlight key={idx} {...project} isReversed={idx % 2 !== 0} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
