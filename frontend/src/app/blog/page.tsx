
import type { Metadata } from 'next';
import React from "react";
import { Outfit } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ScrollFlyIn } from "@/components/ui/hero-section-3";
import { ColorChangeCard } from "@/components/ui/color-change-card";
import { getAllBlogs } from "@/lib/blogs";

const premiumFont = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Blog | Hardik Yadav",
  description: "Read the latest engineering insights, web development tutorials, and programming guides by Hardik Yadav."
};

export default async function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <main className={`w-full relative min-h-screen bg-black text-white ${premiumFont.className}`}>
      <Navbar zIndex={50} />

      <div className="w-full bg-black text-white pt-20">
        <ScrollFlyIn
          imageUrl="https://cdn.21st.dev/assets/mirror/f8/f807350ced7c5e2b79dd250c7de73eebcd402442c40f562e3003c95752a75b5c.webp"
          imageAlt="Top view of a private jet flying across the screen"
        >
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-md font-semibold uppercase tracking-widest text-[#ff5800]">
              Welcome to our Blog
            </p>
            <h2 className="text-5xl md:text-7xl font-bold leading-tight mt-2 drop-shadow-lg">
              Read Our Latest Engineering Insights
            </h2>
          </div>
        </ScrollFlyIn>
      </div>

      <div className="w-full bg-black py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-bold mb-4">Latest Articles</h3>
            <p className="text-zinc-400">Discover insights from the world of development, engineering, and AI.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {blogs.map((blog, idx) => (
              <ColorChangeCard
                key={idx}
                heading={blog.metadata.category}
                description={blog.metadata.title}
                imgSrc={blog.metadata.featuredImage.startsWith('http') ? blog.metadata.featuredImage : `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop`}
                href={blog.metadata.slug}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
