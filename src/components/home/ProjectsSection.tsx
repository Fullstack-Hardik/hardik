"use client";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { AnimatedContainer } from "@/components/ui/animated-container";

const projects = [
  {
    quote: "Built a premium e-commerce platform for a fashion brand, featuring dynamic product displays and a seamless shopping experience.",
    name: "Marshi Collection",
    designation: "E-Commerce / Fashion",
    src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1000&q=60&auto=format,compress&fit=crop",
  }
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
