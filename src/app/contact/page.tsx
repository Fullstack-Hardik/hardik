"use client";

import React, { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import dynamic from 'next/dynamic';

const Beams = dynamic(() => import('@/components/ui/Beams'), {
  ssr: false,
});
import ProfileCard from "@/components/ui/ProfileCard";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleContactClick = () => {
    navigator.clipboard.writeText("+91 9870772415");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen relative bg-black overflow-x-hidden flex items-center justify-center">
      {/* Background Beams */}
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={3}
          beamHeight={20}
          beamNumber={15}
          lightColor="#a855f7"
          speed={1.5}
          noiseIntensity={1.5}
          scale={0.15}
          rotation={15}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto max-w-6xl relative z-10 px-4 py-24 md:py-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
            <Sparkles className="w-3 h-3" /> Let&apos;s Connect
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase drop-shadow-2xl">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Touch</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto mt-6 text-lg font-medium leading-relaxed">
            Ready to build something extraordinary? Drop me a message below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <ProfileCard
                name="Hardik Yadav"
                title="Software Engineer"
                handle="hardikyadav"
                status="Online"
                contactText={copied ? "Number Copied!" : "WhatsApp Me"}
                avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhOim-7B-Hh-iV8Yh4HMYX8dJmIOPW1lP6Tw&s"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={handleContactClick}
                behindGlowEnabled={true}
                behindGlowColor="rgba(168, 85, 247, 0.4)"
                innerGradient="linear-gradient(145deg, rgba(168,85,247,0.1) 0%, rgba(6,182,212,0.1) 100%)"
              />
            </div>
          </div>

          {/* Right Column: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <form className="relative rounded-[2rem] p-8 md:p-10 border border-white/10 flex flex-col gap-6 shadow-2xl overflow-hidden backdrop-blur-3xl bg-white/5">
              
              {/* Blurred gradients inside the card for glass effect */}
              <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none" />
              
              <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase relative z-10">Send a Transmission</h2>
              
              <div className="text-sm text-zinc-400 relative z-10 mb-2 space-y-1">
                <p>Email: <a href="mailto:hardikyadaven@gmail.com" className="text-purple-400 hover:text-cyan-400 transition-colors font-medium">hardikyadaven@gmail.com</a></p>
                <p>WhatsApp: <a href="https://wa.me/919870772415" target="_blank" rel="noreferrer" className="text-green-400 hover:text-cyan-400 transition-colors font-medium">+91 9870772415</a></p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 relative z-10">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all backdrop-blur-md"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 relative z-10">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Inquiry Type</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50 transition-all appearance-none backdrop-blur-md">
                    <option value="" className="bg-zinc-900">Select a category…</option>
                    <option className="bg-zinc-900">Web Development (₹5,000+)</option>
                    <option className="bg-zinc-900">Full-Stack App (₹11,999+)</option>
                    <option className="bg-zinc-900">AI SaaS Product (₹25,000+)</option>
                    <option className="bg-zinc-900">Digital Marketing</option>
                    <option className="bg-zinc-900">Course / Mentorship</option>
                    <option className="bg-zinc-900">Just saying hi! 👋</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 text-xs">▼</div>
                </div>
              </div>

              <div className="flex flex-col gap-2 relative z-10">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Message Payload</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project, goals, timeline, and budget…"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all resize-none backdrop-blur-md"
                />
              </div>

              <button
                type="button"
                className="group relative w-full py-4 rounded-xl font-black text-black uppercase tracking-widest overflow-hidden bg-white hover:scale-[1.02] transition-transform duration-300 mt-2 z-10 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-3">
                  Initiate Link <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
