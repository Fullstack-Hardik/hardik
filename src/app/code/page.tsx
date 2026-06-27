import type { Metadata } from "next";
import { Code2, Terminal, Cpu, Copy, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Code — Snippets & Resources",
  description: "Hardik's curated code snippets, algorithms, and developer resources across TypeScript, React, Python, CSS and more.",
};

const categories = [
  {
    id: "typescript",
    label: "TypeScript",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-500/10",
    border: "border-blue-500/30",
    snippets: [
      {
        title: "Debounce Hook",
        lang: "tsx",
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
        title: "Fetch with Timeout",
        lang: "ts",
        code: `async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeout = 8000
): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(url, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);
  return response;
}`,
      },
      {
        title: "Generic API Wrapper",
        lang: "ts",
        code: `type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
};

async function apiCall<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    return { data, error: null, loading: false };
  } catch (e) {
    return { data: null, error: (e as Error).message, loading: false };
  }
}`,
      },
    ],
  },
  {
    id: "react",
    label: "React / Next.js",
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    snippets: [
      {
        title: "Next.js API Route",
        lang: "ts",
        code: `// app/api/generate/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const result = await processPrompt(prompt);
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Something went wrong' },
      { status: 500 }
    );
  }
}`,
      },
      {
        title: "useLocalStorage Hook",
        lang: "tsx",
        code: `function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch { return initialValue; }
  });

  const setValue = (value: T) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue] as const;
}`,
      },
      {
        title: "Optimistic UI Update",
        lang: "tsx",
        code: `async function handleLike(postId: string) {
  // Optimistically update UI first
  setLiked(prev => !prev);
  setCount(prev => liked ? prev - 1 : prev + 1);

  try {
    await fetch('/api/like', {
      method: 'POST',
      body: JSON.stringify({ postId }),
    });
  } catch {
    // Revert on failure
    setLiked(prev => !prev);
    setCount(prev => liked ? prev + 1 : prev - 1);
  }
}`,
      },
    ],
  },
  {
    id: "python",
    label: "Python",
    color: "from-green-500 to-teal-500",
    bgColor: "bg-green-500/10",
    border: "border-green-500/30",
    snippets: [
      {
        title: "FastAPI Endpoint",
        lang: "python",
        code: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class UserRequest(BaseModel):
    name: str
    email: str

@app.post("/users")
async def create_user(req: UserRequest):
    if not req.email.endswith(".com"):
        raise HTTPException(status_code=400, detail="Invalid email")
    user = await db.users.create(req.dict())
    return {"id": user.id, "message": "Created"}`,
      },
      {
        title: "Retry Decorator",
        lang: "python",
        code: `import time
import functools

def retry(max_attempts=3, delay=1.0):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts - 1:
                        raise e
                    time.sleep(delay * (2 ** attempt))
        return wrapper
    return decorator

@retry(max_attempts=3, delay=0.5)
def fetch_data(url: str):
    return requests.get(url).json()`,
      },
    ],
  },
  {
    id: "css",
    label: "CSS / Tailwind",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    border: "border-pink-500/30",
    snippets: [
      {
        title: "Glassmorphism Card",
        lang: "css",
        code: `.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255,255,255,0.15);
  transition: all 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-4px);
  border-color: rgba(168, 85, 247, 0.4);
}`,
      },
      {
        title: "Gradient Text Animation",
        lang: "css",
        code: `.animated-gradient-text {
  background: linear-gradient(
    135deg,
    #a855f7, #06b6d4, #ec4899, #a855f7
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 4s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
      },
    ],
  },
  {
    id: "nodejs",
    label: "Node.js",
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    snippets: [
      {
        title: "API Response Wrapper",
        lang: "js",
        code: `const apiResponse = (res, statusCode, message, data = null) => {
  return res.status(statusCode).json({
    success: statusCode < 400,
    message,
    data,
    timestamp: new Date().toISOString(),
    requestId: crypto.randomUUID(),
  });
};

// Usage
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  return apiResponse(res, 200, 'Users fetched', users);
});`,
      },
      {
        title: "Rate Limiter Middleware",
        lang: "js",
        code: `const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: {
    error: 'Too many requests',
    retryAfter: '15 minutes',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/', limiter);`,
      },
    ],
  },
];

const resources = [
  { name: "shadcn/ui", desc: "Beautiful React components", url: "https://ui.shadcn.com", tag: "UI" },
  { name: "Vercel AI SDK", desc: "Build AI-powered applications", url: "https://sdk.vercel.ai", tag: "AI" },
  { name: "Prisma ORM", desc: "Next-gen Node.js ORM", url: "https://prisma.io", tag: "Database" },
  { name: "Zod", desc: "TypeScript schema validation", url: "https://zod.dev", tag: "Utils" },
  { name: "Resend", desc: "Email API for developers", url: "https://resend.com", tag: "Email" },
  { name: "Uploadthing", desc: "File uploads for Next.js", url: "https://uploadthing.com", tag: "Storage" },
  { name: "Lucide Icons", desc: "Beautiful consistent icons", url: "https://lucide.dev", tag: "Icons" },
  { name: "Framer Motion", desc: "Production animation library", url: "https://framer.com/motion", tag: "Animation" },
  { name: "TanStack Query", desc: "Powerful async state manager", url: "https://tanstack.com/query", tag: "State" },
  { name: "Zustand", desc: "Small, fast state management", url: "https://zustand-demo.pmnd.rs", tag: "State" },
  { name: "Stripe", desc: "Payments infrastructure", url: "https://stripe.com", tag: "Payments" },
  { name: "Supabase", desc: "Open source Firebase alternative", url: "https://supabase.com", tag: "Backend" },
];

export default function CodePage() {
  return (
    <main className="min-h-screen pb-24">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-6">
            <Terminal className="w-4 h-4" />
            Code Library
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="gradient-text">Code</span>{" "}
            <span className="text-white">Snippets</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production-ready code snippets, patterns, and resources from real-world projects. Copy, adapt, ship.
          </p>
        </div>
      </section>

      {/* Code Categories */}
      <div className="px-4">
        {categories.map((cat) => (
          <section key={cat.id} className="container mx-auto max-w-7xl mb-20">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${cat.color} text-white text-sm font-bold`}>
                <Code2 className="w-4 h-4" />
                {cat.label}
              </div>
              <div className={`flex-1 h-px bg-gradient-to-r ${cat.color} opacity-20`} />
            </div>

            {/* Snippets Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {cat.snippets.map((snippet) => (
                <div
                  key={snippet.title}
                  className={`liquid-glass rounded-2xl overflow-hidden border ${cat.border} group hover:border-opacity-60 transition-all duration-300`}
                >
                  {/* Header */}
                  <div className={`flex items-center justify-between px-5 py-3 ${cat.bgColor} border-b border-white/5`}>
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-white/70" />
                      <span className="text-sm font-bold text-white">{snippet.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono bg-black/30 px-2 py-0.5 rounded text-gray-400">
                        .{snippet.lang}
                      </span>
                    </div>
                  </div>

                  {/* Code */}
                  <pre className="p-5 text-xs text-gray-300 font-mono leading-relaxed overflow-x-auto bg-black/20 max-h-64">
                    <code>{snippet.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Resources */}
      <section className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-purple-500/30 text-purple-400 text-sm font-bold">
            <Cpu className="w-4 h-4" />
            Tools & Resources I Recommend
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-purple-500/20 to-transparent" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {resources.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group neo p-4 rounded-xl hover:bg-white/5 transition-all border border-white/5 hover:border-purple-500/30 flex flex-col gap-2"
            >
              <div className="flex items-start justify-between">
                <span className="text-white font-bold text-sm">{r.name}</span>
                <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
              </div>
              <p className="text-gray-500 text-xs">{r.desc}</p>
              <span className="inline-block px-2 py-0.5 rounded-full glass border border-white/10 text-gray-400 text-xs w-fit">
                {r.tag}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
