"use client";
import React, { Suspense } from "react";
import GenerativeMountainScene from "@/components/ui/mountain-scene";
import Link from "next/link";
import { ArrowRight, Code, Terminal, Brain, Target, Sparkles, Coffee } from "lucide-react";
import AboutUsSection from "@/components/about/AboutUsSection";
import ColorBends from "@/components/ui/ColorBends";

export default function AboutPage() {
  return (
    <div className="w-full bg-black min-h-screen">
      {/* Mountain Scene Hero */}
      <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <GenerativeMountainScene />
        </Suspense>
        
        <div className="relative z-10 text-center max-w-4xl px-4 pointer-events-none">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 animate-in slide-in-from-bottom duration-1000 slide-in-from-bottom-8 tracking-tighter">
            Visionary <span className="text-purple-400">Builder</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-200/80 animate-in slide-in-from-bottom duration-1000 delay-300 slide-in-from-bottom-8 fill-mode-both font-medium">
            I'm Hardik Yadav. I build digital excellence.
          </p>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>

      {/* About Us Section with ColorBends background */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ColorBends
            colors={["#a855f7", "#8a5cff", "#06b6d4"]}
            rotation={90}
            speed={0.2}
            scale={1}
            frequency={1.5}
            warpStrength={2}
            mouseInfluence={1}
            noise={0.1}
            parallax={0.5}
            iterations={2}
            intensity={1.2}
            bandWidth={6}
            transparent={false}
          />
          <div className="absolute inset-0 bg-black/70 pointer-events-none" />
        </div>
        <div className="relative z-10">
          <AboutUsSection />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 border-t border-white/5 text-center px-4 relative z-10">
        <div className="w-16 h-16 rounded-full glass border border-white/10 flex items-center justify-center mx-auto mb-8 shadow-xl">
          <Coffee className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Ready to build?</h2>
        <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg">
          Let's discuss your next project, SaaS idea, or collaboration.
        </p>
        <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-2xl bg-purple-600 hover:bg-purple-500 px-10 text-sm font-black text-white transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:scale-105 uppercase tracking-widest">
          Get in touch
        </Link>
      </section>
    </div>
  );
}
