import type { Metadata } from "next";
import { Terminal, Code2, Lightbulb, Cpu, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MagicRings from "@/components/ui/MagicRings";

export const metadata: Metadata = {
  title: "Dev Corner",
  description: "Hardik's dev corner — code snippets, tools, resources, and developer musings.",
};

const hobbies = [
  { title: "Chess", image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2942&auto=format&fit=crop" },
  { title: "Music", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2940&auto=format&fit=crop" },
  { title: "Photography", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=3000&auto=format&fit=crop" },
  { title: "Books Reading", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2998&auto=format&fit=crop" },
  { title: "Philosophy", image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2940&auto=format&fit=crop" },
  { title: "Yoga", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=3040&auto=format&fit=crop" },
  { title: "Drawing", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2942&auto=format&fit=crop" },
  { title: "Song Writing", image: "https://images.unsplash.com/photo-1520113110298-251f08bd6e27?q=80&w=3087&auto=format&fit=crop" }
];

const snippets = [
  {
    title: "Debounce Hook (React)",
    lang: "tsx",
    color: "from-cyan-500 to-blue-500",
    code: `function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}`,
  },
  {
    title: "API Response Wrapper (Node.js)",
    lang: "js",
    color: "from-green-500 to-teal-500",
    code: `const apiResponse = (res, statusCode, message, data = null) => {
  return res.status(statusCode).json({
    success: statusCode < 400,
    message,
    data,
    timestamp: new Date().toISOString(),
  });
};`,
  },
  {
    title: "CSS Glassmorphism Card",
    lang: "css",
    color: "from-purple-500 to-pink-500",
    code: `.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}`,
  },
  {
    title: "Fetch with timeout (TypeScript)",
    lang: "ts",
    color: "from-orange-500 to-yellow-500",
    code: `async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeout = 8000
): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(url, { ...options, signal: controller.signal });
  clearTimeout(id);
  return response;
}`,
  },
];

const tools = [
  { name: "shadcn/ui", desc: "Beautiful React component library", url: "https://ui.shadcn.com", tag: "UI" },
  { name: "Vercel AI SDK", desc: "Build AI-powered applications easily", url: "https://sdk.vercel.ai", tag: "AI" },
  { name: "Prisma", desc: "Next-gen Node.js ORM", url: "https://prisma.io", tag: "Database" },
  { name: "Resend", desc: "Email API for developers", url: "https://resend.com", tag: "Email" },
  { name: "Uploadthing", desc: "File uploads for Next.js", url: "https://uploadthing.com", tag: "Storage" },
  { name: "Zod", desc: "TypeScript schema validation", url: "https://zod.dev", tag: "Utils" },
  { name: "Lucide Icons", desc: "Beautiful consistent icons", url: "https://lucide.dev", tag: "Icons" },
  { name: "Framer Motion", desc: "Production animation library", url: "https://framer.com/motion", tag: "Animation" },
];

const tips = [
  "Always use TypeScript — it saves hours of debugging and makes refactoring painless.",
  "Learn SQL properly. Most developers skip it and it shows in their data modelling.",
  "Deploy early, iterate fast. A live MVP beats a perfect local project every time.",
  "Read error messages carefully — 80% of the time the answer is right there.",
  "Commit small, commit often. Your future self will thank you.",
  "Document as you build. Not after. You'll never come back to it.",
];

export default function DevCornerPage() {
  return (
    <main className="min-h-screen px-4 py-24 bg-black">
      <div className="container mx-auto max-w-6xl">
        
        {/* Profile Card Section */}
        <div className="mb-20 flex justify-center">
          <div className="relative group w-full max-w-3xl rounded-[2rem] p-8 md:p-12 overflow-hidden border border-white/10 bg-zinc-950 backdrop-blur-xl shadow-2xl">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              {/* Avatar placeholder */}
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-[2rem] bg-gradient-to-tr from-purple-500 to-cyan-500 p-1">
                <div className="w-full h-full rounded-[1.8rem] bg-black overflow-hidden flex items-center justify-center">
                  <span className="text-4xl font-black text-white italic">HY</span>
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="text-4xl font-black text-white italic mb-2 tracking-tight">Hardik Yadav</h2>
                <p className="text-purple-400 font-bold uppercase tracking-[0.2em] text-xs mb-6">Lead Developer & Visionary</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-8">
                  {["React", "Next.js", "Node.js", "Python", "AI/ML", "AWS", "PostgreSQL", "TypeScript", "Tailwind"].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10 bg-white/5 text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-6 border-t border-white/5">
                  <div>
                    <div className="text-2xl font-black text-white italic">50+</div>
                    <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white italic">30+</div>
                    <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-yellow-500 italic">5★</div>
                    <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Average Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white italic">3+</div>
                    <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Years Exp.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code Snippets */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Terminal className="w-6 h-6 text-cyan-400" />
            Useful Code Snippets
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {snippets.map((s) => (
              <div key={s.title} className="rounded-3xl overflow-hidden border border-white/5 bg-zinc-950">
                <div className={`flex items-center gap-3 px-6 py-4 bg-gradient-to-r ${s.color} bg-opacity-10 border-b border-white/5`}>
                  <Code2 className="w-5 h-5 text-white" />
                  <span className="text-sm font-bold text-white">{s.title}</span>
                  <span className="ml-auto text-[10px] font-mono bg-black/50 px-2 py-1 rounded-md text-gray-400">{s.lang}</span>
                </div>
                <pre className="p-6 text-[11px] text-gray-400 font-mono leading-relaxed overflow-x-auto bg-black/40">
                  <code>{s.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Cpu className="w-6 h-6 text-purple-400" />
            Tools I Actually Use & Recommend
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((t) => (
              <a
                key={t.name}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-zinc-950 border border-white/5 hover:border-purple-500/30 transition-all hover:bg-white/[0.02]"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-white font-bold text-sm">{t.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
                </div>
                <p className="text-gray-500 text-xs mb-4 leading-relaxed">{t.desc}</p>
                <span className="inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400 text-[10px] font-bold uppercase tracking-wider">{t.tag}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Dev Tips */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-yellow-400" />
            Hard-Learned Dev Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip, i) => (
              <div key={i} className="rounded-2xl p-6 border border-white/5 bg-zinc-950 flex items-start gap-5 group hover:border-white/10 transition-colors">
                <span className="text-3xl font-black text-zinc-800 font-mono w-8 shrink-0 group-hover:text-zinc-600 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">{tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hobbies & Other Skills */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-purple-400 font-black text-3xl italic">#</span>
            Beyond the Code
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hobbies.map((hobby, i) => (
              <div key={i} className="relative group rounded-3xl overflow-hidden aspect-[4/5] bg-zinc-950 border border-white/10 hover:border-purple-500/50 transition-colors">
                <div className="absolute inset-0 z-0">
                  <Image src={hobby.image} alt={hobby.title} fill className="object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500 grayscale group-hover:grayscale-0" />
                </div>
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen flex items-center justify-center">
                  <div className="w-[150%] h-[150%]">
                    <MagicRings color="#a855f7" colorTwo="#06b6d4" opacity={0.6} />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <h3 className="text-xl font-bold text-white tracking-tighter group-hover:text-purple-400 transition-colors">{hobby.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
