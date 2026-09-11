"use client";

import React, { useEffect, useState, useRef } from "react";

const FULL_CODE = `const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    res.json({ token: 'xyz123' });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
`;

export const CodeScreen = ({ onCharTyped }: { onCharTyped?: (char: string) => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    
    const typeNextChar = () => {
      if (currentIndex < FULL_CODE.length) {
        const char = FULL_CODE[currentIndex];
        setDisplayedText((prev) => prev + char);
        if (onCharTyped) onCharTyped(char);
        
        currentIndex++;
        
        if (contentRef.current) {
          contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }

        // Variable typing speed
        const delay = char === '\n' ? 300 : Math.random() * 30 + 20;
        setTimeout(typeNextChar, delay);
      } else {
        // Restart after a delay
        setTimeout(() => {
          setDisplayedText("");
          currentIndex = 0;
          typeNextChar();
        }, 3000);
      }
    };

    const initialTimeout = setTimeout(typeNextChar, 1000);

    return () => clearTimeout(initialTimeout);
  }, [onCharTyped]);

  return (
    <div className="w-full max-w-[700px] mx-auto bg-black rounded-t-2xl md:rounded-t-[32px] rounded-b-lg md:rounded-b-2xl border-[10px] md:border-[16px] border-[#0a0a0a] border-b-[20px] md:border-b-[30px] shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden flex flex-col relative z-10">
      
      {/* Screen Glow / Backlight */}
      <div className="absolute inset-0 bg-blue-500/5 blur-[100px] pointer-events-none z-10"></div>

      {/* Glossy reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 pointer-events-none z-50"></div>
      
      {/* Webcam */}
      <div className="absolute top-[-10px] md:top-[-14px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#111] shadow-[inset_0_1px_2px_rgba(0,0,0,1)] flex items-center justify-center border border-white/5 z-50">
        <div className="w-0.5 h-0.5 rounded-full bg-[#1e40af] opacity-50 blur-[0.5px]"></div>
      </div>
      
      {/* Top window bar (Code Editor styling) */}
      <div className="h-8 bg-[#2d2d2d] border-b border-black/50 flex items-center px-4 gap-2 relative z-40">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
        <div className="ml-4 text-xs text-zinc-400 font-mono">server.js - Node.js</div>
      </div>
      
      {/* Code Editor Area */}
      <div 
        ref={contentRef}
        className="bg-[#1e1e1e] p-4 md:p-6 font-mono text-sm leading-relaxed text-[#f4f4f4] h-[220px] md:h-[300px] overflow-y-auto whitespace-pre-wrap break-all relative scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] z-30"
      >
        <span dangerouslySetInnerHTML={{ 
          __html: displayedText
            .replace(/const|require|app|res|req|async|try|catch|await|if|else/g, match => `<span class="text-[#569cd6]">${match}</span>`)
            .replace(/express|json|get|post|find|status|listen|log/g, match => `<span class="text-[#dcdcaa]">${match}</span>`)
            .replace(/'[^']*'/g, match => `<span class="text-[#ce9178]">${match}</span>`) 
        }} />
        <span className="inline-block w-2.5 h-4 bg-[#d4d4d4] animate-pulse ml-1 align-middle"></span>
      </div>

      {/* Macbook Bottom Logo Area */}
      <div className="absolute bottom-[-18px] md:bottom-[-26px] left-0 w-full flex justify-center items-center z-50">
        <span className="text-[7px] md:text-[9px] font-bold text-zinc-400 tracking-widest opacity-60">MacBook Pro</span>
      </div>
    </div>
  );
};
