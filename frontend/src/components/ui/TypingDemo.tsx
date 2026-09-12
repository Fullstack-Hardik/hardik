"use client";

import React, { useState, useEffect, useCallback } from "react";
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
    // Auto reset after short delay if next char doesn't come immediately
    setTimeout(() => {
      setActiveKey(null);
    }, 100);
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-[700px] px-4 flex flex-col items-center justify-center my-12 overflow-hidden">
      <div 
        className="w-full flex flex-col items-center justify-center min-w-[700px] scale-[0.5] sm:scale-[0.65] md:scale-100 origin-center"
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
      <div className="w-full max-w-[700px] bg-zinc-800 h-2 md:h-3 rounded-b-xl border-t border-zinc-900 shadow-inner -mt-8 relative z-20" />

      {/* Keyboard / Base Area */}
      <motion.div 
        style={{ rotateX: baseRotate, transformOrigin: "top center" }}
        className="w-full max-w-[700px] flex justify-center -mt-2 md:-mt-1 relative z-30"
      >
        <Keyboard simulatedKey={activeKey} />
      </motion.div>
      
      {/* Table Shadow */}
      <div className="w-full max-w-[700px] h-8 bg-black/50 blur-xl rounded-[100%] mt-8" />
      </div>
    </div>
  );
};
