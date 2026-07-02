import type { Metadata } from "next";
import React, { Suspense } from "react";

import HeroSection5 from "@/components/home/HeroSection5";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import PricingSection from "@/components/home/PricingSection";

export const metadata: Metadata = {
  title: "Hardik Yadav — Software Engineer & Visionary Builder",
  description:
    "Portfolio of Hardik Yadav. Crafting scalable web apps, AI-powered products & digital experiences that command attention.",
};

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white overflow-hidden">
      <HeroSection5 />
      <StatsSection />
      <ServicesSection />
      <PricingSection />
    </main>
  );
}
