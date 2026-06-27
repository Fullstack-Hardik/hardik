"use client";
import { AnimatedContainer } from "@/components/ui/animated-container";

export default function StatsSection() {
  return (
    <section className="py-32 border-y border-white/5 relative z-20 bg-black/50 backdrop-blur-3xl">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-20 mb-24">
          <AnimatedContainer className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-[0.5em] text-purple-500 mb-6 block italic">Impact Matrix</span>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.9]">
              Performance <br /> <span className="text-zinc-600">By the Numbers</span>
            </h2>
          </AnimatedContainer>
          <AnimatedContainer delay={0.2} className="hidden md:block">
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </AnimatedContainer>
          <AnimatedContainer delay={0.3} className="max-w-xs">
            <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest leading-loose italic">
              Quantifying the reach, quality, and impact of digital solutions delivered across diverse sectors.
            </p>
          </AnimatedContainer>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-zinc-950 border border-white/5 p-12 rounded-[3rem] shadow-2xl">
          <AnimatedContainer delay={0.1}>
            <h3 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter italic shadow-xl">
              50<span className="text-purple-500 text-4xl">+</span>
            </h3>
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">Projects Delivered</p>
          </AnimatedContainer>
          <AnimatedContainer delay={0.2}>
            <h3 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter italic">
              30<span className="text-cyan-500 text-4xl">+</span>
            </h3>
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">Happy Clients</p>
          </AnimatedContainer>
          <AnimatedContainer delay={0.3}>
            <h3 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter italic">
              5<span className="text-yellow-500 text-4xl">★</span>
            </h3>
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">Average Rating</p>
          </AnimatedContainer>
          <AnimatedContainer delay={0.4}>
            <h3 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter italic">
              3<span className="text-pink-500 text-4xl">+</span>
            </h3>
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">Years Experience</p>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}
