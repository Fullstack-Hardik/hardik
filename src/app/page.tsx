import type { Metadata } from "next";
import dynamic from "next/dynamic";

const HeroSection5 = dynamic(() => import("@/components/home/HeroSection5"));
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"));
const ProjectsSection = dynamic(() => import("@/components/home/ProjectsSection"));
const StatsSection = dynamic(() => import("@/components/home/StatsSection"));
const PricingSection = dynamic(() => import("@/components/home/PricingSection"));

export const metadata: Metadata = {
  title: "Hardik Yadav — Software Engineer & Visionary Builder",
  description:
    "Portfolio of Hardik Yadav. Crafting scalable web apps, AI-powered products & digital experiences that command attention.",
};

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <HeroSection5 />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <PricingSection />
    </div>
  );
}
