"use client";

import React from "react";
import { Outfit } from "next/font/google";
import { Footer } from "@/components/ui/Footer";
import { Skiper28 } from "@/components/ui/perspective-text-scroll";
import { Mail, MapPin, Phone, Heart, BrainCircuit } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import MercuryContactForm from "@/components/ui/mercury-contact-form";
import BorderGlow from "@/components/ui/BorderGlow";

const premiumFont = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function ContactPage() {


  return (
    <main className={`w-full relative min-h-screen bg-black text-white ${premiumFont.className}`}>
      
      <Navbar zIndex={50} />

      {/* Hero Section */}
      <section className="relative w-full min-h-[90svh] flex flex-col items-center justify-center overflow-hidden border-b border-white/10 bg-[#050505] bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:24px_24px]">
        {/* Gradient Overlay for blending */}
        <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,#050505_100%)] opacity-80" />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 h-full flex flex-col items-center justify-center pt-24 pb-32">
          
          {/* Main Typography Layout */}
          <div className="relative w-full flex flex-col items-center justify-center gap-6 md:gap-12 mt-12">
            
            {/* Top Row: DIGITAL */}
            <div className="w-full flex justify-center md:justify-end md:pr-32 lg:pr-48 relative">
              <h1 className="text-[clamp(3.5rem,12vw,7rem)] font-light tracking-tight text-white/90 leading-none">
                DIGITAL
              </h1>
              {/* Floating Text 1 */}
              <div className="hidden md:block absolute -left-12 lg:left-0 top-0 max-w-[200px] text-right">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  I am india digital product designer based in Bokaro Steel City, India.
                </p>
              </div>
            </div>

            {/* Middle Row: PR [Icon] DUCTS */}
            <div className="w-full flex justify-center items-center gap-2 md:gap-8 relative">
              <h1 className="text-[clamp(3.5rem,12vw,7rem)] font-light tracking-tight text-white/90 leading-none">
                PR
              </h1>
              <div className="relative flex items-center justify-center w-16 h-16 md:w-32 md:h-32">
                <BrainCircuit className="w-full h-full text-white/90 stroke-1" />
                <span className="absolute text-xl md:text-4xl font-light text-white/90">?</span>
              </div>
              <h1 className="text-[clamp(3.5rem,12vw,7rem)] font-light tracking-tight text-white/90 leading-none">
                DUCTS
              </h1>
              
              {/* Floating Text 2 */}
              <div className="hidden md:block absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 max-w-[240px] text-left">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Open to all forms of design collaboration, regardless of location and language.
                </p>
              </div>
            </div>

            {/* Bottom Row: DESIGN [Icon] CODE */}
            <div className="w-full flex justify-center items-center gap-2 md:gap-8">
              <h1 className="text-[clamp(3.5rem,12vw,7rem)] font-light tracking-tight text-white/90 leading-none">
                DESIGN
              </h1>
              <div className="flex items-center justify-center">
                <Heart className="w-12 h-12 md:w-28 md:h-28 text-[#ff4b5c] fill-[#ff4b5c]" />
              </div>
              <h1 className="text-[clamp(3.5rem,12vw,7rem)] font-light tracking-tight text-white/90 leading-none">
                CODE
              </h1>
            </div>

          </div>
          
          {/* Footer Bar inside Hero */}
          <div className="absolute bottom-0 left-0 right-0 w-full px-6 md:px-12 py-6 border-t border-white/10 flex flex-col md:flex-row justify-end items-center gap-4 text-sm md:text-base">
            <span className="text-zinc-300 font-medium tracking-widest uppercase text-xs md:text-sm">
              Saharanpur, UP, India
            </span>
            <div className="flex items-center gap-2">
              <span className="text-white font-medium tracking-widest uppercase text-lg md:text-xl">DESIGNER</span>
              <span className="text-[#ff5800] italic font-semibold text-xl md:text-2xl" style={{ fontFamily: 'Georgia, serif' }}>Hardik</span>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 md:gap-24 relative z-10 bg-black">
        
        {/* Contact Details (Redesigned) */}
        <div className="flex flex-col justify-center space-y-12 relative">
          {/* Subtle Glow Behind Text */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#ff5800] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
              Let's Connect.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 relative z-10">
            {/* Card 1 */}
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#0a0a0a"
              borderRadius={16}
              glowRadius={40}
              glowIntensity={1.0}
              coneSpread={25}
              animated={true}
              colors={['#ff5800', '#ff8a00', '#ffffff']}
              className="w-full"
            >
              <div className="group relative overflow-hidden rounded-2xl p-6 transition-colors">
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0 text-[#ff5800] border border-[#ff5800]/30 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                    <p className="text-zinc-400 text-sm">hardikyadaven@gmail.com</p>
                  </div>
                </div>
              </div>
            </BorderGlow>

            {/* Card 2 */}
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#0a0a0a"
              borderRadius={16}
              glowRadius={40}
              glowIntensity={1.0}
              coneSpread={25}
              animated={true}
              colors={['#ff5800', '#ff8a00', '#ffffff']}
              className="w-full"
            >
              <div className="group relative overflow-hidden rounded-2xl p-6 transition-colors">
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0 text-[#ff5800] border border-[#ff5800]/30 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                    <p className="text-zinc-400 text-sm">+91 98707 72415</p>
                  </div>
                </div>
              </div>
            </BorderGlow>

            {/* Card 3 */}
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#0a0a0a"
              borderRadius={16}
              glowRadius={40}
              glowIntensity={1.0}
              coneSpread={25}
              animated={true}
              colors={['#ff5800', '#ff8a00', '#ffffff']}
              className="w-full"
            >
              <div className="group relative overflow-hidden rounded-2xl p-6 transition-colors">
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0 text-[#ff5800] border border-[#ff5800]/30 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                    <p className="text-zinc-400 text-sm">Saharanpur, UP, India</p>
                  </div>
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>

        {/* Contact Form (Redesigned with Liquid Animation) */}
        <div className="relative w-full h-full flex flex-col justify-center min-h-[500px]">
          <MercuryContactForm />
        </div>
      </section>

      {/* Perspective Text Scroll Animation */}
      <div className="relative w-full overflow-hidden bg-[#050505]">
        <Skiper28 />
      </div>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
