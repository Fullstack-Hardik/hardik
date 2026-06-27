import { ArrowRight, BookOpen, Star } from "lucide-react";
import Link from "next/link";

const topCourses = [
  {
    name: "Advanced AI Products",
    price: "₹15,999",
    tag: "Advanced",
    color: "from-purple-500 to-pink-500",
    desc: "Build real AI SaaS products using GPT API, LangChain, vector databases, and deployment strategies.",
    rating: 4.9,
    students: "2.1k+",
    badge: "🔥 Bestseller",
  },
  {
    name: "Advanced Web Development",
    price: "₹21,999",
    tag: "Advanced",
    color: "from-violet-500 to-purple-500",
    desc: "Next.js, Node.js, databases, REST APIs, deployment, authentication and full-stack projects.",
    rating: 4.8,
    students: "3.4k+",
    badge: "⭐ Top Rated",
  },
  {
    name: "Basic Web Development",
    price: "₹11,999",
    tag: "Beginner",
    color: "from-blue-500 to-indigo-500",
    desc: "HTML, CSS, JavaScript, React — build complete websites from scratch with portfolio projects.",
    rating: 4.9,
    students: "5.2k+",
    badge: "🚀 Most Popular",
  },
  {
    name: "Digital Marketing Advanced",
    price: "₹9,999",
    tag: "Professional",
    color: "from-orange-500 to-red-500",
    desc: "SEO, Google Ads, Meta Ads, content strategy, analytics and performance marketing.",
    rating: 4.7,
    students: "1.8k+",
    badge: "📈 Trending",
  },
];

const tagColors: Record<string, string> = {
  Beginner: "bg-green-500/20 text-green-400 border-green-500/30",
  Advanced: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Professional: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

export default function TopCoursesSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full glass border border-green-500/30 text-green-400 text-sm font-semibold mb-4">
              Learn With Hardik
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Top <span className="gradient-text-2">Courses</span>
            </h2>
            <p className="text-gray-400 mt-2 max-w-lg">
              Practical, project-based learning designed to get you job-ready and future-proof your skills.
            </p>
          </div>
          <Link
            href="/courses"
            className="hidden md:flex items-center gap-2 text-green-400 font-semibold hover:text-green-300 transition-colors group"
          >
            All Courses
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {topCourses.map((c) => (
            <div
              key={c.name}
              className="group liquid-glass rounded-2xl p-5 border border-white/8 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col"
            >
              {/* Badge */}
              <div className="text-xs font-bold mb-3 text-gray-400">{c.badge}</div>

              {/* Gradient bar */}
              <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${c.color} mb-4`} />

              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-sm font-bold text-white leading-snug flex-1">{c.name}</h3>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap ${tagColors[c.tag]}`}>
                  {c.tag}
                </span>
              </div>

              <p className="text-gray-400 text-xs mb-4 leading-relaxed flex-1">{c.desc}</p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-yellow-400 text-xs font-bold">{c.rating}</span>
                <span className="text-gray-600 text-xs">· {c.students} students</span>
              </div>

              <div className="flex items-center justify-between">
                <div className={`text-lg font-black bg-gradient-to-r ${c.color} bg-clip-text text-transparent`}>
                  {c.price}
                </div>
                <a
                  href="mailto:hardik@example.com?subject=Course Enquiry"
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r ${c.color} opacity-90 hover:opacity-100 transition-all group-hover:scale-105`}
                >
                  Enroll
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/20 text-white font-semibold hover:border-green-400/50 transition-all"
          >
            View All Courses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
