"use client";

import React, { useEffect } from "react";
import { Outfit } from "next/font/google";
import { Footer } from "@/components/ui/Footer";
import { Skiper28 } from "@/components/ui/perspective-text-scroll";
import { Mail, MapPin, Phone, Heart, BrainCircuit } from "lucide-react";
import Navbar from "@/components/ui/Navbar";

const premiumFont = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function ContactPage() {
  useEffect(() => {
    // Setup animation fallback
    const fallbackTimeout = setTimeout(() => {
      document.documentElement.classList.remove('motion-pending');
      document.documentElement.classList.add('motion-animating');
    }, 3500);

    requestAnimationFrame(() => {
      document.documentElement.classList.remove('motion-pending');
      document.documentElement.classList.add('motion-animating');
    });

    return () => clearTimeout(fallbackTimeout);
  }, []);

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
              Bokaro Steel City, India 827010
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
            <div className="group relative overflow-hidden rounded-2xl bg-zinc-900/40 border border-white/5 p-6 backdrop-blur-md hover:bg-zinc-900/60 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff5800]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
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

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-zinc-900/40 border border-white/5 p-6 backdrop-blur-md hover:bg-zinc-900/60 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff5800]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
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

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-zinc-900/40 border border-white/5 p-6 backdrop-blur-md hover:bg-zinc-900/60 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff5800]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0 text-[#ff5800] border border-[#ff5800]/30 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                  <p className="text-zinc-400 text-sm">Bokaro Steel City, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form (Redesigned) */}
        <div className="relative group perspective-1000">
          <div className="absolute -inset-0.5 bg-gradient-to-br from-[#ff5800] via-zinc-800 to-transparent rounded-[2rem] blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-[#0a0a0a] p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl h-full flex flex-col justify-center">
            
            <div className="mb-10">
              <h3 className="text-3xl font-semibold mb-2">Send a Message</h3>
              <p className="text-zinc-500 text-sm">I'll get back to you in 1-2 business days.</p>
            </div>

            <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
              <input type="hidden" name="access_key" value="ec747eb6-7916-4048-8c19-df2450da63f2" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 relative">
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    placeholder="John Doe" 
                    className="peer w-full bg-zinc-900/50 border-b-2 border-white/10 px-4 py-4 text-white placeholder-transparent focus:outline-none focus:border-[#ff5800] transition-all focus:bg-zinc-900 rounded-t-lg"
                  />
                  <label htmlFor="name" className="absolute left-4 top-1 text-[10px] uppercase tracking-wider font-bold text-zinc-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:top-1 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-[#ff5800] cursor-text">Full Name</label>
                </div>
                
                <div className="flex flex-col gap-2 relative">
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    placeholder="john@example.com" 
                    className="peer w-full bg-zinc-900/50 border-b-2 border-white/10 px-4 py-4 text-white placeholder-transparent focus:outline-none focus:border-[#ff5800] transition-all focus:bg-zinc-900 rounded-t-lg"
                  />
                  <label htmlFor="email" className="absolute left-4 top-1 text-[10px] uppercase tracking-wider font-bold text-zinc-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:top-1 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-[#ff5800] cursor-text">Email Address</label>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 relative mt-2">
                <textarea 
                  id="message" 
                  name="message"
                  required
                  placeholder="How can we help you?" 
                  rows={4}
                  className="peer w-full bg-zinc-900/50 border-b-2 border-white/10 px-4 py-6 text-white placeholder-transparent focus:outline-none focus:border-[#ff5800] transition-all focus:bg-zinc-900 rounded-t-lg resize-none"
                ></textarea>
                <label htmlFor="message" className="absolute left-4 top-2 text-[10px] uppercase tracking-wider font-bold text-zinc-500 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-[#ff5800] cursor-text">Your Message</label>
              </div>
              
              <button type="submit" className="w-full mt-6 py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-[#ff5800] hover:text-white transition-colors duration-300 flex items-center justify-center gap-3 group">
                Send Request
                <div className="w-6 h-6 rounded-full bg-black/10 group-hover:bg-white/20 flex items-center justify-center transform group-hover:translate-x-2 transition-all">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </form>
          </div>
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
