import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const latestPosts = [
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
    slug: "freelancing-india-2025",
    title: "How I Made ₹1.5L/Month Freelancing as a Developer in India",
    excerpt: "Real strategies, client acquisition, pricing, and mindset shifts that helped me scale my freelance income. No fluff.",
    tag: "Career",
    tagColor: "from-orange-500 to-yellow-500",
    date: "Jun 1, 2025",
    readTime: "10 min read",
    featured: false,
  },
];

export default function LatestBlogSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full glass border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-4">
              Fresh from the Blog
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Latest <span className="gradient-text">Articles</span>
            </h2>
          </div>
          <Link
            href="/blogs"
            className="hidden md:flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors group"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {latestPosts.map((post, i) => (
            <article
              key={post.slug}
              className={`group liquid-glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer flex flex-col ${
                i === 0 ? "md:col-span-2 md:row-span-1" : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${post.tagColor}`}>
                  {post.tag}
                </span>
                {post.featured && (
                  <span className="text-gray-600 text-xs font-medium">Featured</span>
                )}
              </div>
              <h3 className={`font-black text-white mb-3 leading-snug group-hover:text-purple-300 transition-colors ${i === 0 ? "text-xl" : "text-base"}`}>
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{post.excerpt}</p>
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

        <div className="mt-6 text-center md:hidden">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/20 text-white font-semibold hover:border-purple-400/50 transition-all"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
