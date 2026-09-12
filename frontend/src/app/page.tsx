"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import LogoLoop from "@/components/ui/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiNodedotjs, SiFigma, SiGooglecloud, SiFirebase } from "react-icons/si";
import { Outfit } from "next/font/google";

const HorizontalFeatureReveal = dynamic(() => import("@/components/ui/horizontal-feature-reveal").then(mod => mod.HorizontalFeatureReveal));
const MagicBento = dynamic(() => import("@/components/ui/MagicBento"));
const FlowArt = dynamic(() => import("@/components/ui/story-scroll"));
const FlowSection = dynamic(() => import("@/components/ui/story-scroll").then(mod => mod.FlowSection));
const Footer = dynamic(() => import("@/components/ui/Footer").then(mod => mod.Footer));
import Navbar from "@/components/ui/Navbar";
import { TypingDemo } from "@/components/ui/TypingDemo";

const premiumFont = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function Home() {

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

  const techLogos = [
    { node: <SiReact className="text-zinc-500 hover:text-[#61DAFB] transition-colors text-3xl" />, title: "React" },
    { node: <SiNextdotjs className="text-zinc-500 hover:text-white transition-colors text-3xl" />, title: "Next.js" },
    { node: <SiTypescript className="text-zinc-500 hover:text-[#3178C6] transition-colors text-3xl" />, title: "TypeScript" },
    { node: <SiTailwindcss className="text-zinc-500 hover:text-[#06B6D4] transition-colors text-3xl" />, title: "Tailwind CSS" },
    { node: <SiPython className="text-zinc-500 hover:text-[#3776AB] transition-colors text-3xl" />, title: "Python" },
    { node: <SiNodedotjs className="text-zinc-500 hover:text-[#339933] transition-colors text-3xl" />, title: "Node.js" },
    { node: <SiFigma className="text-zinc-500 hover:text-[#F24E1E] transition-colors text-3xl" />, title: "Figma" },
    { node: <SiGooglecloud className="text-zinc-500 hover:text-[#4285F4] transition-colors text-3xl" />, title: "Google Cloud" },
    { node: <SiFirebase className="text-zinc-500 hover:text-[#FFCA28] transition-colors text-3xl" />, title: "Firebase" },
  ];

  const servicesData = [
    {
        id: 1,
        title: "Website Development",
        description: "Robust, modern website development customized to meet your exact business needs and scale with your growth.",
        imageUrl: '/services/website_dev.png',
        reverse: false
    },
    {
        id: 2,
        title: "Graphic Designing",
        description: "Creative graphic designing that stands out, capturing your brand identity through stunning visual experiences.",
        imageUrl: '/services/graphic_design.png',
        reverse: true
    },
    {
        id: 3,
        title: "SEO & Marketing",
        description: "Data-driven SEO and digital marketing strategies designed to boost your reach and convert leads into loyal customers.",
        imageUrl: '/services/digital_marketing.png',
        reverse: false
    },
    {
        id: 4,
        title: "Deployment Solutions",
        description: "Seamless deployment, hosting, and continuous integration solutions ensuring maximum uptime and performance.",
        imageUrl: '/services/deployment_design.png',
        reverse: true
    },
    {
        id: 5,
        title: "UI/UX Web Designing",
        description: "Beautiful, intuitive web designing tailored specifically to optimize user experience and engagement.",
        imageUrl: '/services/web_design.png',
        reverse: false
    },
    {
        id: 6,
        title: "System Architecture",
        description: "Scalable system designing and robust cloud architecture to handle high-traffic, complex applications.",
        imageUrl: '/services/system_architecture.png',
        reverse: true
    },
    {
        id: 7,
        title: "Teaching Coding",
        description: "Expert mentorship and teaching coding to empower individuals and teams with cutting-edge programming skills.",
        imageUrl: '/services/teaching_coding.png',
        reverse: false
    }
  ];

  return (
    <main className={`w-full relative min-h-screen bg-black text-white ${premiumFont.className}`}>
      
      {/* Hero Section */}
      <section className="relative w-full h-[100svh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
        <video 
          className="absolute inset-0 z-0 w-full h-full object-cover pointer-events-none opacity-40" 
          autoPlay 
          muted 
          loop 
          playsInline 
          disablePictureInPicture 
          aria-hidden="true"
          preload="auto"
          style={{ backgroundColor: '#050505' }}
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_064556_051587f1-74a1-4336-8c05-4dde3594ed05.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-black/20 to-black" />

        <Navbar zIndex={20} />

        <div className="relative z-10 flex flex-col items-start w-full px-6 lg:px-24 xl:px-32">
          <h1 className="flex flex-col font-semibold tracking-tighter text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-6 drop-shadow-xl text-white">
            <span>Hardik Yadav:</span>
            <span className="text-zinc-300 text-5xl md:text-6xl lg:text-[4rem] mt-2">AI Builder & Software Company in Saharanpur</span>
          </h1>
          <p className="text-zinc-300 font-light text-lg md:text-xl max-w-2xl mb-10 drop-shadow-lg">
            I am Hardik Yadav—a Full-Stack Developer, AI Builder, and UX Designer.<br className="hidden md:block"/>
            I craft scalable web architectures and intelligent systems that solve complex problems.
          </p>
          <button className="h-12 px-8 rounded-lg bg-white text-black font-semibold shadow-xl flex items-center gap-4 hover:bg-zinc-200 transition-colors group">
            View My Work
            <div className="w-8 h-8 rounded-md bg-black flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>

        {/* Tech Stack Marquee Banner */}
        <div className="absolute bottom-0 left-0 w-full z-20 bg-black/40 backdrop-blur-md border-y border-white/5 py-4 md:py-6 flex items-center shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
          
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none z-10" />

          <div className="w-full relative z-0">
            <LogoLoop
              logos={techLogos}
              speed={30}
              direction="left"
              logoHeight={32}
              gap={100}
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <HorizontalFeatureReveal />

      {/* Skills Section */}
      <MagicBento 
        textAutoHide={false}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
      />

      {/* Code Screen & Keyboard Section */}
      <section className="w-full py-12 flex flex-col items-center justify-center bg-black border-t border-white/5 relative z-10">
        <div className="text-center mb-8 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Command the Code</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">An interactive demonstration of full-stack expertise.</p>
        </div>
        <TypingDemo />
      </section>

      {/* SEO Content Expansion Section */}
      <section className="w-full py-20 px-6 lg:px-24 xl:px-32 bg-[#050505] text-white relative z-10 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">What is Coding?</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-4">
              At its core, understanding <strong>what is coding</strong> means learning how to write instructions that a computer can execute. It involves mastering various <strong>programming languages</strong> and the fundamentals of <strong>computer science</strong> to solve real-world problems.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Whether it's using <strong>languages like Python</strong> for AI, or <strong>HTML CSS</strong> and JavaScript for web development, learning to code within a modern <strong>development environment</strong> is the first step toward building the future of software.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Software Company Serving Saharanpur & Delhi NCR</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-4">
              HRDK Developers is a premier <strong>software company in Saharanpur</strong>, proudly serving clients across Uttar Pradesh and the <strong>National Capital Territory</strong>. 
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              From the quiet corners of UP to the bustling tech hubs near <strong>Delhi Metro</strong> and <strong>India Gate</strong>, we provide world-class web development, AI integration, and digital marketing solutions tailored to elevate your business.
            </p>
          </div>

        </div>
      </section>

      {/* About Me Section (Story Scroll) */}
      <FlowArt aria-label="About Me Section">
        <FlowSection aria-label="About Me" style={{ backgroundColor: '#18181b', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">01 — About Me</p>
          <hr className="my-[2vw] border-none border-t border-zinc-700" />
          <div>
            <h1 className="text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] uppercase tracking-tight">
              Beyond
              <br />
              The
              <br />
              Code
            </h1>
          </div>
          <hr className="my-[2vw] border-none border-t border-zinc-700" />
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2vw,1.5rem)] font-light leading-relaxed text-zinc-300">
            I don't just write scripts; I build robust digital ecosystems. From architecting high-performance Next.js frontends to training machine learning models, my focus is always on delivering seamless, impactful user experiences. Based in Saharanpur, building for the world.
          </p>
        </FlowSection>

        <FlowSection aria-label="My Skills" style={{ backgroundColor: '#fd5200', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">02 — My Skills</p>
          <hr className="my-[2vw] border-none border-t border-white/30" />
          <div>
            <h2 className="text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] uppercase tracking-tight">
              Full
              <br />
              Stack
              <br />
              Mastery
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/30" />
          <p className="max-w-[50ch] text-[clamp(1rem,2vw,1.5rem)] font-light leading-relaxed text-white/90">
            Expertise across the stack, enabling robust solutions from the pixel to the database.
          </p>
          <hr className="my-[2vw] border-none border-t border-white/30" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-white">Frontend Architecture</p>
              <p className="text-[clamp(0.85rem,1vw,1.05rem)] leading-relaxed text-white/80">
                React, Next.js, Tailwind CSS, and Framer Motion for immersive experiences.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-white">Backend & Systems</p>
              <p className="text-[clamp(0.85rem,1vw,1.05rem)] leading-relaxed text-white/80">
                Node.js, Python, scalable REST/GraphQL APIs, and SQL/NoSQL databases.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-white">AI & Emerging Tech</p>
              <p className="text-[clamp(0.85rem,1vw,1.05rem)] leading-relaxed text-white/80">
                Machine Learning models, LLM Integrations, and intelligent data pipelines.
              </p>
            </div>
          </div>
        </FlowSection>

        <FlowSection aria-label="Good Quotes" style={{ backgroundColor: '#fff', color: '#000' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">03 — Good Quotes</p>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <div>
            <h2 className="text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] uppercase tracking-tight">
              Words
              <br />
              To
              <br />
              Live By
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <p className="max-w-[50ch] text-[clamp(1rem,2vw,1.5rem)] font-medium leading-relaxed">
            “Code is like humor. When you have to explain it, it’s bad.”
          </p>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Simplicity</p>
              <p className="text-[clamp(0.85rem,1vw,1.05rem)] leading-relaxed opacity-75">
                “Simplicity is the soul of efficiency.” — Austin Freeman
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Problem First</p>
              <p className="text-[clamp(0.85rem,1vw,1.05rem)] leading-relaxed opacity-75">
                “First, solve the problem. Then, write the code.” — John Johnson
              </p>
            </div>
          </div>
        </FlowSection>

        <FlowSection aria-label="Working Tips" style={{ backgroundColor: '#2563eb', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">04 — Working Tips & Ideas</p>
          <hr className="my-[2vw] border-none border-t border-white/30" />
          <div>
            <h2 className="text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] uppercase tracking-tight">
              Think.
              <br />
              Plan.
              <br />
              Execute.
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/30" />
          <p className="max-w-[50ch] text-[clamp(1rem,2vw,1.5rem)] font-light leading-relaxed text-blue-100">
            1. Always plan your architecture before writing the first line of code. <br />
            2. Consistency compounds. Write a little bit of code every day. <br />
            3. Never stop learning. The tech landscape shifts fast, stay curious.
          </p>
        </FlowSection>

      </FlowArt>

      {/* Footer Section */}
      <Footer />

    </main>
  );
}
