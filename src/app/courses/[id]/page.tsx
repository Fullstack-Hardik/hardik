"use client";

import React from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { courses } from "@/data/courses";
import dynamic from "next/dynamic";

const Aurora = dynamic(() => import("@/components/ui/Aurora"), { ssr: false });

export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const course = courses.find((c) => c.id === resolvedParams.id);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen relative bg-zinc-950 overflow-hidden flex flex-col pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      
      {/* Background Image Header */}
      <div className="absolute top-0 left-0 w-full h-[60vh] z-0 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 scale-105"
          style={{ backgroundImage: `url(${course.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-zinc-950/80 to-zinc-950 z-10" />
      </div>

      <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col">
        
        {/* Back Link */}
        <Link href="/courses" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12 w-fit font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to courses
        </Link>

        {/* Hero Area */}
        <div className="flex flex-col md:flex-row gap-12 items-start justify-between mb-20">
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic drop-shadow-2xl mb-6">
                {course.title.split(' ')[0]} <span className="text-zinc-500">{course.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-zinc-300 text-xl font-medium max-w-xl leading-relaxed">
                {course.description}
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-80 shrink-0 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle Aurora effect inside card */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <Aurora colorStops={["#5227FF", "#7cff67", "#5227FF"]} blend={0.5} amplitude={1.0} speed={0.5} />
            </div>

            <div className="relative z-10">
              <div className="text-zinc-400 font-black tracking-widest uppercase text-xs mb-4">Enrollment Fee</div>
              <div className="text-5xl font-black text-white tracking-tighter mb-8">{course.price}</div>
              
              <button className="w-full py-4 rounded-xl bg-white text-black font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                Enroll Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="text-center text-xs text-zinc-500 mt-4 font-medium">One-time payment • Lifetime access</div>
            </div>
          </motion.div>
        </div>

        {/* Features / Curriculum */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-black text-white uppercase italic tracking-tight mb-8">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {course.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white/5 border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
                <div className="mt-1 p-1.5 bg-white text-black rounded-full shrink-0">
                  <Check className="w-4 h-4 font-bold" />
                </div>
                <p className="text-zinc-300 font-medium">{feature}</p>
              </div>
            ))}
            
            {/* Adding some placeholder features to pad out the curriculum */}
            <div className="flex items-start gap-4 bg-white/5 border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
              <div className="mt-1 p-1.5 bg-white/10 text-white rounded-full shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-zinc-400 font-medium">Access to private community discord</p>
            </div>
            <div className="flex items-start gap-4 bg-white/5 border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
              <div className="mt-1 p-1.5 bg-white/10 text-white rounded-full shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-zinc-400 font-medium">Certificate of completion</p>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
