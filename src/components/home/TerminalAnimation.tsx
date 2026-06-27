"use client";
import { useEffect, useRef, useState } from "react";
import { Terminal, Circle } from "lucide-react";

const codeSnippets = [
  {
    lang: "typescript",
    label: "AI Integration",
    color: "#a855f7",
    code: [
      `import { OpenAI } from 'openai';`,
      ``,
      `const client = new OpenAI({ apiKey: process.env.KEY });`,
      ``,
      `async function generateCode(prompt: string) {`,
      `  const response = await client.chat.completions.create({`,
      `    model: 'gpt-4o',`,
      `    messages: [{ role: 'user', content: prompt }],`,
      `    temperature: 0.7,`,
      `  });`,
      `  return response.choices[0].message.content;`,
      `}`,
    ],
  },
  {
    lang: "react",
    label: "Next.js API Route",
    color: "#06b6d4",
    code: [
      `// app/api/generate/route.ts`,
      `import { NextResponse } from 'next/server';`,
      ``,
      `export async function POST(req: Request) {`,
      `  const { prompt } = await req.json();`,
      ``,
      `  const result = await generateCode(prompt);`,
      ``,
      `  return NextResponse.json({`,
      `    success: true,`,
      `    data: result,`,
      `    timestamp: Date.now(),`,
      `  });`,
      `}`,
    ],
  },
  {
    lang: "python",
    label: "FastAPI Backend",
    color: "#22c55e",
    code: [
      `from fastapi import FastAPI, HTTPException`,
      `from pydantic import BaseModel`,
      `import openai`,
      ``,
      `app = FastAPI()`,
      ``,
      `class CodeRequest(BaseModel):`,
      `    prompt: str`,
      `    language: str = "python"`,
      ``,
      `@app.post("/generate")`,
      `async def generate(req: CodeRequest):`,
      `    result = await ai_generate(req.prompt)`,
      `    return {"code": result, "lang": req.language}`,
    ],
  },
  {
    lang: "css",
    label: "Glassmorphism UI",
    color: "#ec4899",
    code: [
      `.glass-card {`,
      `  background: rgba(255, 255, 255, 0.05);`,
      `  backdrop-filter: blur(20px) saturate(180%);`,
      `  border: 1px solid rgba(255, 255, 255, 0.1);`,
      `  border-radius: 20px;`,
      `  box-shadow:`,
      `    0 8px 32px rgba(0, 0, 0, 0.4),`,
      `    inset 0 1px 0 rgba(255,255,255,0.15);`,
      `  transition: all 0.3s ease;`,
      `}`,
      ``,
      `.glass-card:hover {`,
      `  transform: translateY(-4px);`,
      `  border-color: rgba(168, 85, 247, 0.4);`,
      `}`,
    ],
  },
];

function getTokenColor(token: string): string {
  // Keywords
  if (/^(import|export|from|async|await|const|let|var|function|return|class|new|interface|type|extends|implements|if|else|for|of|in)$/.test(token)) {
    return "#c792ea";
  }
  // Strings
  if (/^['"`]/.test(token) || token.startsWith("'") || token.includes("'")) {
    return "#c3e88d";
  }
  // Numbers
  if (/^\d+$/.test(token)) {
    return "#f78c6c";
  }
  // Comments
  if (token.startsWith("//") || token.startsWith("#")) {
    return "#546e7a";
  }
  return "inherit";
}

export default function TerminalAnimation() {
  const [snippetIdx, setSnippetIdx] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const snippet = codeSnippets[snippetIdx];

  useEffect(() => {
    setDisplayedLines([]);
    setCurrentLine(0);
    setCurrentChar(0);
  }, [snippetIdx]);

  useEffect(() => {
    const lines = snippet.code;
    if (currentLine >= lines.length) {
      // Wait then switch snippet
      const timer = setTimeout(() => {
        setSnippetIdx((i) => (i + 1) % codeSnippets.length);
      }, 2500);
      return () => clearTimeout(timer);
    }

    const line = lines[currentLine];
    if (currentChar <= line.length) {
      const timer = setTimeout(() => {
        if (currentChar === line.length) {
          setDisplayedLines((prev) => [...prev, line]);
          setCurrentLine((l) => l + 1);
          setCurrentChar(0);
        } else {
          setCurrentChar((c) => c + 1);
        }
      }, currentChar === 0 && line === "" ? 60 : 28);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, snippet, snippetIdx]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedLines, currentChar]);

  const currentLinePartial = currentLine < snippet.code.length
    ? snippet.code[currentLine].slice(0, currentChar)
    : "";

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-4">
            <Terminal className="w-4 h-4" />
            Live Code
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Code I Write <span className="gradient-text">Every Day</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real snippets from real projects — TypeScript, Python, React, CSS and more.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="liquid-glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          {/* Title Bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-black/40 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
              <Circle className="w-2 h-2 fill-green-400 text-green-400 animate-pulse" />
              hardik@dev:~/{snippet.label.toLowerCase().replace(/\s+/g, "-")}
            </div>
            {/* Snippet tabs */}
            <div className="flex gap-1">
              {codeSnippets.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setSnippetIdx(i)}
                  className={`px-2 py-1 rounded text-xs font-mono transition-all ${
                    i === snippetIdx
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-400"
                  }`}
                  style={{ color: i === snippetIdx ? s.color : undefined }}
                >
                  {s.lang}
                </button>
              ))}
            </div>
          </div>

          {/* Code Area */}
          <div
            ref={containerRef}
            className="p-6 min-h-[320px] max-h-[400px] overflow-y-auto font-mono text-sm leading-relaxed"
            style={{ background: "rgba(5, 5, 16, 0.8)" }}
          >
            {/* Line numbers + code */}
            <div className="flex gap-4">
              {/* Line numbers */}
              <div className="flex flex-col text-gray-700 text-right select-none min-w-[2rem]">
                {displayedLines.map((_, i) => (
                  <span key={i} className="leading-relaxed">{i + 1}</span>
                ))}
                {currentLine < snippet.code.length && (
                  <span className="leading-relaxed text-gray-500">{displayedLines.length + 1}</span>
                )}
              </div>

              {/* Code lines */}
              <div className="flex-1 overflow-x-auto">
                {displayedLines.map((line, i) => (
                  <div key={i} className="leading-relaxed">
                    <CodeLine line={line} color={snippet.color} />
                  </div>
                ))}
                {/* Current typing line */}
                {currentLine < snippet.code.length && (
                  <div className="leading-relaxed">
                    <CodeLine line={currentLinePartial} color={snippet.color} />
                    <span
                      className="inline-block w-0.5 h-4 ml-0.5 align-middle animate-pulse"
                      style={{ backgroundColor: snippet.color }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="px-5 py-2 bg-black/40 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-600">
            <span style={{ color: snippet.color }}>{snippet.label}</span>
            <span>Ln {Math.min(currentLine + 1, snippet.code.length)} · Col {currentChar + 1}</span>
            <span className="text-green-500/70">● ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeLine({ line, color }: { line: string; color: string }) {
  if (!line) return <span>&nbsp;</span>;

  // Simple syntax highlighting
  const isComment = line.trim().startsWith("//") || line.trim().startsWith("#") || line.trim().startsWith("/*");
  const isString = line.includes("'") || line.includes('"') || line.includes("`");

  if (isComment) {
    return <span style={{ color: "#546e7a" }}>{line}</span>;
  }

  // Highlight keywords in the line
  const keywords = ["import", "export", "from", "async", "await", "const", "let", "var", "function", "return", "class", "new", "interface", "type", "extends", "def", "async def", "from", "class", "self"];
  
  let parts: { text: string; highlighted: boolean; type: string }[] = [{ text: line, highlighted: false, type: "normal" }];
  
  return (
    <span>
      {line.split(/(\s+)/).map((token, idx) => {
        if (keywords.includes(token.trim())) {
          return <span key={idx} style={{ color: "#c792ea" }}>{token}</span>;
        }
        if (/^['"`]/.test(token) || (token.includes("'") && !token.startsWith("/"))) {
          return <span key={idx} style={{ color: "#c3e88d" }}>{token}</span>;
        }
        if (/^\d+/.test(token.trim())) {
          return <span key={idx} style={{ color: "#f78c6c" }}>{token}</span>;
        }
        if (token.includes("(") || token.includes(")")) {
          return <span key={idx} style={{ color: "#ffd700" }}>{token}</span>;
        }
        return <span key={idx} className="text-gray-300">{token}</span>;
      })}
    </span>
  );
}
