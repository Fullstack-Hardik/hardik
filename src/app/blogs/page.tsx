import type { Metadata } from "next";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Hardik's blog — articles on web development, AI, design, career advice and the latest in tech.",
};

const posts = [
  {
    slug: "build-ai-saas-nextjs",
    title: "Building a Full AI SaaS App with Next.js 15 + OpenAI in 2025",
    excerpt: "Step-by-step walkthrough of building a production-ready AI SaaS from scratch — auth, billing, OpenAI integration, and deployment.",
    tag: "AI / Development",
    tagColor: "from-purple-500 to-pink-500",
    date: "Jun 20, 2025",
    readTime: "12 min read",
    featured: true,
  },
  {
    slug: "react-hooks-mastery",
    title: "Every React Hook Explained — From useState to useTransition",
    excerpt: "The definitive 2025 guide to React hooks. Learn when to use each hook and avoid the common mistakes that slow down apps.",
    tag: "React",
    tagColor: "from-cyan-500 to-blue-500",
    date: "Jun 14, 2025",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "tailwind-css-tips",
    title: "20 Tailwind CSS Tricks That Will Make Your UI 10x Better",
    excerpt: "Advanced Tailwind patterns — glassmorphism, custom animations, responsive typography, and design systems that actually scale.",
    tag: "CSS / Design",
    tagColor: "from-teal-500 to-green-500",
    date: "Jun 8, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "freelancing-india-2025",
    title: "How I Made ₹1.5L/Month Freelancing as a Developer in India",
    excerpt: "Real strategies, client acquisition, pricing, and mindset shifts that helped me scale my freelance income. No fluff.",
    tag: "Career",
    tagColor: "from-orange-500 to-yellow-500",
    date: "Jun 1, 2025",
    readTime: "10 min read",
    featured: true,
  },
  {
    slug: "nextjs-seo-guide",
    title: "Next.js SEO: The Complete 2025 Guide to Rank #1 on Google",
    excerpt: "Metadata API, structured data, sitemap, robots.txt, Core Web Vitals — everything you need to dominate search rankings.",
    tag: "SEO",
    tagColor: "from-green-500 to-emerald-500",
    date: "May 24, 2025",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "postgres-vs-mongodb",
    title: "PostgreSQL vs MongoDB in 2025: Which Database Should You Choose?",
    excerpt: "A deep dive into when to use SQL vs NoSQL, performance benchmarks, and real-world use cases from production projects.",
    tag: "Database",
    tagColor: "from-blue-500 to-indigo-500",
    date: "May 18, 2025",
    readTime: "7 min read",
    featured: false,
  },
];

export default function BlogsPage() {
  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <main className="min-h-screen px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full glass border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-4">
            Thoughts & Tutorials
          </div>
          <h1 className="text-5xl md:text-6xl font-black gradient-text mb-4">Blog</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Deep dives into web dev, AI, design, freelancing, and everything in between.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((post) => (
              <article
                key={post.slug}
                className="liquid-glass rounded-2xl p-7 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer hover:scale-[1.02]"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${post.tagColor}`}>
                    {post.tag}
                  </span>
                  <span className="text-gray-600 text-xs">Featured</span>
                </div>
                <h3 className="text-xl font-black text-white mb-3 leading-snug group-hover:text-purple-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <span className="text-purple-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            All Articles
          </h2>
          <div className="flex flex-col gap-4">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="liquid-glass rounded-2xl p-6 border border-white/8 hover:border-white/20 transition-all duration-300 group cursor-pointer flex flex-col md:flex-row md:items-center gap-5"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${post.tagColor}`}>
                      {post.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-snug mb-1">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{post.excerpt}</p>
                </div>
                <div className="flex md:flex-col items-end gap-3 text-xs text-gray-500 shrink-0">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                  <span className="text-purple-400 font-semibold flex items-center gap-1">Read <ArrowRight className="w-3 h-3" /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
