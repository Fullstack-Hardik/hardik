"use client";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { AnimatedContainer } from "@/components/ui/animated-container";

const projects = [
  {
    quote: "Company website for Vertex Innovations for event management and admin post hirings. Beautifully designed using Vite, Next.js, Tailwind, MongoDB, and Express.",
    name: "Vertexiae",
    designation: "Event & HR Platform",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
  },
  {
    quote: "Platform for assigning tasks, where users can complete and share them. Built with React, Tailwind, MongoDB, Express, Cloudinary, and Brevo for OTP.",
    name: "EarnetixHub",
    designation: "Task Management",
    src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80",
  },
  {
    quote: "The main portal for Earnetix updates, comprehensive blogs, and company details.",
    name: "Earnetix",
    designation: "Updates & Blogs",
    src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
  },
  {
    quote: "Rich, SEO-friendly single-page agency website showcasing 360 virtual tours and web development services using 3D iframes.",
    name: "GarryDigital360",
    designation: "Virtual Tours",
    src: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=1200&q=80",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 md:py-32 relative bg-black">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <AnimatedContainer>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-cyan-400 mb-4 block italic">Verification</span>
            <h2 className="text-4xl font-black text-white md:text-6xl tracking-tighter leading-tight uppercase italic">
              Premium <br /> <span className="text-zinc-600">Case Studies</span>
            </h2>
          </AnimatedContainer>
        </div>
        
        <AnimatedContainer delay={0.5} className="flex justify-center">
          <CircularTestimonials 
            testimonials={projects} 
            autoplay={true}
            colors={{
              name: "white",
              designation: "#a1a1aa", // text-zinc-400
              testimony: "#a1a1aa",
              arrowBackground: "#09090b", // zinc-950
              arrowForeground: "white",
              arrowHoverBackground: "#06b6d4" // cyan-500
            }}
          />
        </AnimatedContainer>
      </div>
    </section>
  );
}
