import React from "react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getBlogBySlug, getAllBlogs } from "@/lib/blogs";
import Navbar from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Outfit } from "next/font/google";
import type { Metadata } from 'next';

const premiumFont = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.metadata.slug.replace(/^\/blog\//, ''),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = getBlogBySlug(`/blog/${resolvedParams.slug}`);
  
  if (!blog) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: blog.metadata.metaTitle || blog.metadata.title,
    description: blog.metadata.metaDescription,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = getBlogBySlug(`/blog/${resolvedParams.slug}`);

  if (!blog) {
    notFound();
  }

  return (
    <main className={`w-full relative min-h-screen bg-black text-white ${premiumFont.className}`}>
      <Navbar zIndex={50} />
      
      <article className="max-w-4xl mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <header className="mb-12 text-center">
          <p className="text-[#ff5800] uppercase tracking-widest text-sm font-bold mb-4">{blog.metadata.category}</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{blog.metadata.title}</h1>
          <div className="flex items-center justify-center gap-4 text-zinc-400">
            <span>By {blog.metadata.author}</span>
            <span>•</span>
            <span>{blog.metadata.tags}</span>
          </div>
        </header>

        {blog.metadata.featuredImage && (
          <div className="w-full h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden mb-12 relative">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${blog.metadata.featuredImage.startsWith('http') ? blog.metadata.featuredImage : 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'})` 
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}

        <div className="prose prose-invert prose-orange max-w-none prose-headings:font-bold prose-a:text-[#ff5800] hover:prose-a:text-orange-400 prose-img:rounded-xl">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
      </article>

      <Footer />
    </main>
  );
}
