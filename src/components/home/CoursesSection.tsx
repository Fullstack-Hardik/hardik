"use client";
import { BookOpen, Trophy, Clock } from "lucide-react";

const courses = [
  { name: "Basics of AI & ChatGPT", price: "₹7,999", tag: "Beginner", color: "from-cyan-500 to-blue-500", desc: "Learn how AI works, use ChatGPT, Midjourney, prompt engineering and AI tools for productivity." },
  { name: "Advanced AI Products", price: "₹15,999", tag: "Advanced", color: "from-purple-500 to-pink-500", desc: "Build real AI SaaS products using GPT API, LangChain, vector databases, and deployment strategies." },
  { name: "Basic Web Development", price: "₹11,999", tag: "Beginner", color: "from-blue-500 to-indigo-500", desc: "HTML, CSS, JavaScript, React — build complete websites from scratch with portfolio projects." },
  { name: "Advanced Web Development", price: "₹21,999", tag: "Advanced", color: "from-violet-500 to-purple-500", desc: "Next.js, Node.js, databases, REST APIs, deployment, authentication and full-stack projects." },
  { name: "Python + Basic DSA", price: "₹3,999", tag: "Beginner", color: "from-green-500 to-teal-500", desc: "Core Python programming, data structures, algorithms and problem-solving fundamentals." },
  { name: "Digital Marketing Advanced", price: "₹9,999", tag: "Professional", color: "from-orange-500 to-red-500", desc: "SEO, Google Ads, Meta Ads, content strategy, analytics and performance marketing." },
  { name: "Basic Computer Learning", price: "₹3,999", tag: "Beginner", color: "from-teal-500 to-cyan-500", desc: "Computer fundamentals, internet, MS Office, email, Google Workspace and essential digital skills." },
  { name: "Advanced Excel & Adobe Suite", price: "₹9,500", tag: "Professional", color: "from-yellow-500 to-orange-500", desc: "Excel macros, pivot tables, Photoshop, Illustrator, Premiere Pro and professional workflows." },
  { name: "Graphic Design Mastery", price: "₹8,999", tag: "Creative", color: "from-pink-500 to-rose-500", desc: "Design principles, Canva, Figma, Photoshop, brand identity, social media and print design." },
];

const tagColors: Record<string, string> = {
  Beginner: "bg-green-500/20 text-green-400 border-green-500/30",
  Advanced: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Professional: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Creative: "bg-pink-500/20 text-pink-400 border-pink-500/30",
};

export default function CoursesSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full glass border border-green-500/30 text-green-400 text-sm font-semibold mb-4">
            Learn With Hardik
          </div>
          <h2 className="text-4xl md:text-5xl font-black gradient-text-2 mb-4">Courses & Coaching</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Practical, project-based learning designed to get you job-ready and future-proof your skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c) => (
            <div
              key={c.name}
              className="group liquid-glass rounded-2xl p-6 border border-white/8 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Top bar gradient */}
              <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${c.color} mb-5`} />

              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-base font-bold text-white leading-snug">{c.name}</h3>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border whitespace-nowrap ${tagColors[c.tag]}`}>
                  {c.tag}
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-5 leading-relaxed">{c.desc}</p>

              <div className="flex items-center justify-between">
                <div>
                  <div className={`text-xl font-black bg-gradient-to-r ${c.color} bg-clip-text text-transparent`}>
                    {c.price}
                  </div>
                  <div className="text-gray-600 text-xs">one-time</div>
                </div>
                <a
                  href="mailto:hardik@example.com?subject=Course Enquiry"
                  className={`px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${c.color} opacity-90 hover:opacity-100 transition-all group-hover:scale-105`}
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl border border-yellow-500/20 p-6 text-center">
          <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
          <h4 className="text-white font-bold text-lg mb-2">🔥 Bundle & Save</h4>
          <p className="text-gray-400 text-sm mb-4">Enroll in 2+ courses together and get up to 20% off. Custom learning paths also available for teams and companies.</p>
          <a
            href="mailto:hardik@example.com?subject=Bundle Course"
            className="inline-block px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:opacity-90 transition-all"
          >
            Contact for Bundle Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
