"use client";

import React from "react";
import { Outfit } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ScrollFlyIn } from "@/components/ui/hero-section-3";
import { Component as BlogPosts } from "@/components/ui/blog-posts";
import ClientFeedback from "@/components/ui/testimonial";

const premiumFont = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function BlogPage() {
  // Using defaults for drift items

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

      <div className="w-full bg-black">
        <BlogPosts
          title="Our Most Popular Articles of 2026!"
          description="Discover the most engaging content from our amazing community of developers and designers"
          backgroundLabel="BLOG"
          backgroundPosition="left"
          posts={[
            {
              id: 1,
              title: "What is Coding? A Complete Guide to Programming",
              category: "Computer Science",
              imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
              views: 3180,
              readTime: 10,
              rating: 5
            },
            {
              id: 2,
              title: "The Rise of AI in Modern Web Development",
              category: "Artificial Intelligence",
              imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop",
              views: 2456,
              readTime: 8,
              rating: 5
            },
            {
              id: 3,
              title: "Choosing a Software Company: Saharanpur vs Delhi NCR",
              category: "Business",
              imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
              views: 1987,
              readTime: 5,
              rating: 4
            }
          ]}
          className="mb-16"
        />
      </div>

      <ClientFeedback />

      <Footer />
    </main>
  );
}
