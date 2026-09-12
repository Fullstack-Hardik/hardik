"use client";

import React, { useState, useCallback } from "react";
import { CodeScreen } from "./CodeScreen";
import { Component as Keyboard } from "./keyboard";

import { motion, useScroll, useTransform } from "framer-motion";

export const TypingDemo = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Slight parallax opening effect on scroll
  const screenRotate = useTransform(scrollYProgress, [0, 0.5], [20, 5]);
  const baseRotate = useTransform(scrollYProgress, [0, 0.5], [30, 45]);

  const handleCharTyped = useCallback((char: string) => {
    setActiveKey(char);
    setTimeout(() => {
      setActiveKey(null);
    }, 100);
  }, []);

  return (
    <div className="w-full flex justify-center overflow-hidden py-4 md:py-12">
      <div 
        ref={containerRef} 
        className="w-[700px] flex-shrink-0 flex flex-col items-center justify-center scale-[0.5] sm:scale-[0.7] md:scale-100 origin-center"
        style={{ perspective: "1500px" }}
      >
        {/* Screen / Monitor Area */}
        <motion.div 
          style={{ rotateX: screenRotate, transformOrigin: "bottom center" }}
          className="w-full z-10"
        >
          <CodeScreen onCharTyped={handleCharTyped} />
        </motion.div>

        {/* Hinge / Connector */}
        <div className="w-full bg-zinc-800 h-2 md:h-3 rounded-b-xl border-t border-zinc-900 shadow-inner -mt-8 relative z-20" />

        {/* Keyboard / Base Area */}
        <motion.div 
          style={{ rotateX: baseRotate, transformOrigin: "top center" }}
          className="w-full flex justify-center -mt-2 md:-mt-1 relative z-30"
        >
          <Keyboard simulatedKey={activeKey} />
        </motion.div>
        
        {/* Table Shadow */}
        <div className="w-full h-8 bg-black/50 blur-xl rounded-[100%] mt-8" />
      </div>
    </div>
  );
};
