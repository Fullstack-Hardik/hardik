"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FiFileText, FiCode, FiVideo, FiDownload } from "react-icons/fi";
import { Check, ArrowRight } from "lucide-react";
import GlassIcons from "@/components/ui/GlassIcons";
import Link from "next/link";
import { courses } from "@/data/courses";
import { cn } from "@/lib/utils";

const Aurora = dynamic(() => import("@/components/ui/Aurora"), { ssr: false });

const freeResources = [
  { icon: <FiFileText />, color: 'blue', label: 'Notes', link: "/notes" },
  { icon: <FiCode />, color: 'green', label: 'Codes', link: "#" },
  { icon: <FiVideo />, color: 'purple', label: 'Tutorials', link: "#" },
  { icon: <FiDownload />, color: 'orange', label: 'Assets', link: "#" },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen relative bg-black overflow-hidden flex flex-col items-center pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#5227FF", "#7cff67", "#5227FF"]}
          blend={0.5}
          amplitude={1.2}
          speed={0.5}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10 pointer-events-none" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white text-xs font-black uppercase tracking-[0.3em] mb-6 backdrop-blur-sm"
          >
            Digital Academy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic drop-shadow-2xl mb-6"
          >
            Premium <span className="text-zinc-500">Learning</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg font-medium"
          >
            Master the most in-demand digital skills and accelerate your career. Choose a path that fits your goals.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-32 items-stretch">
          {courses.map((course, idx) => (
            <Link href={`/courses/${course.id}`} key={course.id} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "relative flex flex-col h-full bg-zinc-950/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border transition-all duration-500 overflow-hidden",
                  course.popular 
                    ? "border-white shadow-[0_0_40px_-15px_rgba(255,255,255,0.3)] md:-translate-y-4" 
                    : "border-white/10 group-hover:border-white/40 group-hover:-translate-y-2"
                )}
              >
                {/* Image Background Layer */}
                <div 
                  className="absolute top-0 left-0 w-full h-[60%] z-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${course.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                {/* Gradient Fade to Black */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-zinc-950/30 z-0 pointer-events-none" />
                <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />

                {course.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-white rounded-full text-[10px] font-black text-black uppercase tracking-widest shadow-xl z-20">
                    Bestseller
                  </div>
                )}
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-black text-white tracking-tight drop-shadow-md">{course.title}</h3>
                  <p className="text-zinc-400 text-sm mt-2 mb-8 h-10 drop-shadow-md">{course.description}</p>
                  
                  <div className="mb-10 pb-10 border-b border-white/10">
                    <span className="text-5xl font-black text-white tracking-tighter drop-shadow-lg">{course.price}</span>
                  </div>
                  
                  <ul className="space-y-5 mb-12 flex-1">
                    {course.features.slice(0, 4).map((feature, j) => (
                      <li key={j} className="flex items-start gap-4 text-sm text-zinc-300 font-medium">
                        <div className={cn(
                          "mt-0.5 p-1 rounded-full transition-colors",
                          course.popular ? "bg-white text-black" : "bg-white/10 text-white"
                        )}>
                          <Check className="w-3 h-3" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className={cn(
                    "mt-auto group/btn relative w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden",
                    course.popular 
                      ? "bg-white text-black group-hover:bg-zinc-200" 
                      : "bg-transparent border border-white text-white group-hover:bg-white group-hover:text-black"
                  )}>
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Free Resources Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 text-center tracking-tight uppercase italic">Free <span className="text-zinc-500">Resources</span></h2>
          <p className="text-zinc-400 mb-12 text-center text-lg font-medium max-w-2xl">Get started for free with our notes, code snippets, and assets.</p>
          
          <div className="w-full max-w-4xl relative h-[400px]">
             {/* Using a custom wrapper to make the icons clickable if needed */}
             <div className="w-full h-full" onClick={(e) => {
               const target = e.target as HTMLElement;
               if(target.closest('[aria-label="Notes"]')) {
                 window.location.href = '/notes';
               }
             }}>
               <GlassIcons items={freeResources} />
             </div>
          </div>
          
          <Link href="/notes">
             <button className="mt-8 bg-zinc-950 hover:bg-zinc-800 border border-white/20 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest transition-all shadow-xl">
                Browse All Free Resources
             </button>
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
