"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FiDownload, FiBookOpen, FiCode, FiLayout } from "react-icons/fi";

const LightPillar = dynamic(() => import("@/components/ui/LightPillar"), { ssr: false });

const notes = [
  { title: "React Fundamentals", type: "PDF", size: "2.4 MB", icon: <FiLayout /> },
  { title: "Next.js App Router Guide", type: "PDF", size: "3.1 MB", icon: <FiLayout /> },
  { title: "Node.js API Cheatsheet", type: "Code", size: "124 KB", icon: <FiCode /> },
  { title: "CSS Grid & Flexbox", type: "Doc", size: "1.2 MB", icon: <FiBookOpen /> },
  { title: "MongoDB Aggregations", type: "Code", size: "56 KB", icon: <FiCode /> },
  { title: "Python Basics", type: "PDF", size: "4.5 MB", icon: <FiLayout /> },
];

export default function NotesPage() {
  return (
    <main className="min-h-screen relative bg-black overflow-hidden flex flex-col items-center pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-70">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1.0}
          rotationSpeed={0.3}
          glowAmount={0.005}
          pillarWidth={3.0}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={0}
          interactive={true}
          mixBlendMode="screen"
        />
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
      </div>

      <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 tracking-tight">
            Free Notes & Codes
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Download high-quality revision notes, cheat sheets, and starter templates.
          </p>
        </motion.div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {notes.map((note, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-3 bg-purple-500/20 rounded-xl text-purple-300">
                  {note.icon}
                </div>
                <span className="text-xs font-semibold text-gray-400 bg-black/40 px-3 py-1 rounded-full">
                  {note.type}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {note.title}
              </h3>
              
              <div className="mt-auto pt-6 flex items-center justify-between text-gray-400 text-sm">
                <span>{note.size}</span>
                <button className="flex items-center gap-2 text-white bg-white/10 hover:bg-purple-600 px-4 py-2 rounded-lg font-medium transition-colors">
                  <FiDownload /> Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
