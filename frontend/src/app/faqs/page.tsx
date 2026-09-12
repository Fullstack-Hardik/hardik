"use client";

import { useEffect, useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import GlyphPortal from "@/components/ui/glyph-portal";
import Beams from "@/components/ui/Beams";
import { Footer } from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Outfit } from "next/font/google";
import Link from "next/link";
import FaqSection from "@/components/ui/habit-faq-scroller";
import TabbedFaq from "@/components/ui/TabbedFaq";

const premiumFont = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "900"] });

const faqs = [
  {
    question: "Who is Hardik Yadav and what is Hardik coding?",
    answer: "Hardik Yadav is a full-stack developer and software engineer who builds web applications, APIs, AI-powered products and digital experiences. 'Hardik coding' represents his methodology of writing clean, scalable code across frontend, backend, databases, deployment and UI/UX."
  },
  {
    question: "What does Hardik Yadav do?",
    answer: "Hardik works across the full stack — from building responsive React and Next.js frontends to designing REST APIs with Node.js and Express, managing MongoDB and PostgreSQL databases, deploying to cloud platforms and integrating AI capabilities into web applications."
  },
  {
    question: "What technologies does Hardik use?",
    answer: "Hardik's core stack includes React, Next.js, TypeScript, JavaScript, Node.js, Express.js, MongoDB, PostgreSQL, Tailwind CSS, and modern cloud infrastructure including Vercel and AWS. He also works with AI/LLM integrations and developer tooling."
  },
  {
    question: "How does Hardik utilize AI in modern software?",
    answer: "Yes. Hardik integrates AI and LLM capabilities into web applications, from intelligent product features and automation to AI-powered workflows. He focuses on doing this without compromising user experience."
  },
  {
    question: "Can I hire Hardik for a web project?",
    answer: "Yes, Hardik is available for web development projects, collaborations and consulting. Visit the Contact page to get in touch and discuss your project requirements."
  },
  {
    question: "Where can I see Hardik's projects?",
    answer: "You can explore Hardik's work on the Projects page of this website, which includes real full-stack applications with case studies covering architecture, technology stack, challenges and outcomes."
  },
  {
    question: "What is coding and how do you write instructions for computers?",
    answer: "Coding is the process of using programming languages to write instructions that a computer can execute. It involves computer science principles and environments to build software. Whether it's languages like Python or HTML CSS, learning coding allows you to build digital solutions."
  },
  {
    question: "Is HRDK Developers a software company in Saharanpur and Delhi?",
    answer: "Yes, HRDK Developers is a leading software company in Saharanpur, UP, providing services across the National Capital Territory of Delhi and beyond. Use the Contact page on this website to connect."
  }
];

const faqData = {
  mainTitle: "Frequently Asked Questions",
  mainSubtitle: "Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.",
  rows: [
    {
      id: 'row1',
      speed: '25s',
      direction: 'left' as const,
      faqItems: [
        { id: 'q1', question: "Who is Hardik Yadav?", answer: "A full-stack developer & AI builder." },
        { id: 'q2', question: "What tech stack?", answer: "React, Next.js, Node.js, AI." },
        { id: 'q3', question: "Location?", answer: "Saharanpur, India." },
      ]
    }
  ]
};

export default function FAQsPage() {
  const [currentWord, setCurrentWord] = useState("FAQS");
  
  useEffect(() => {
    // Smoothly transition between FAQS and ANSWERS every 4 seconds
    const timer = setInterval(() => {
      setCurrentWord(prev => prev === "FAQS" ? "ANSWERS" : "FAQS");
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* SEO Schema for FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* 
        Removed overflow-hidden and fixed height from main wrapper 
        to allow native window scrolling for touchpads and mobile devices.
      */}
      <main className="w-full bg-[#050505] selection:bg-[#ff5800] selection:text-white">
        <div 
          tabIndex={0} 
          role="region" 
          aria-label="Answers. Scroll to step inside."
          style={{ width: "100%", background: "#050505" }}
        >
          <GlyphPortal 
            word={currentWord} 
            fontFamily={premiumFont.style.fontFamily} 
            fontWeight={900} 
            scrollLength={2.4} 
            interactive={true} 
            annotations={false} 
            enterLabel="Find Answers"
            background={
              <div className="absolute inset-0 z-0">
                <Beams 
                  backgroundColor="#050505" 
                  beamColor="#ffffff" 
                  lightColor="#ffbb88" 
                  noiseIntensity={0.8}
                  speed={1.5}
                  scale={0.4}
                />
                <div 
                  className="absolute inset-0 backdrop-blur-[12px] bg-[#050505]/30 pointer-events-none transition-opacity duration-300"
                  style={{
                    opacity: 'calc(var(--gp-progress, 0) * 1.5)'
                  }}
                />
              </div>
            }
            style={{ 
              fontFamily: premiumFont.style.fontFamily,
              "--gp-paper": "#050505",
              "--gp-ink": "#ffffff",
              "--gp-field": "#050505",
              "--gp-foreground": "#ffffff"
            } as any}
            front={
              <>
                <Navbar zIndex={50} />
                
                <div className="absolute bottom-[10%] left-0 right-0 flex justify-center pointer-events-none">
                  <span className="text-[#ffffff] text-sm tracking-widest uppercase animate-pulse opacity-70">Scroll to enter ↓</span>
                </div>
              </>
            }
          >
            {/* CONTENT INSIDE THE PORTAL */}
            <div className="w-full max-w-5xl mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col items-center min-h-screen relative z-10 pointer-events-auto">
              <div className="w-full flex justify-center mb-20">
                <FaqSection data={faqData} />
              </div>
              
              <div className="w-full mb-12">
                <TabbedFaq />
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-32 p-12 md:p-16 rounded-[3rem] bg-zinc-900/50 border border-white/5 w-full text-center relative overflow-hidden backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/10 to-transparent pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center">
                  <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Still have questions?</h3>
                  <p className="text-xl text-zinc-400 mb-10 max-w-lg mx-auto">
                    Can't find the answer you're looking for? Please chat to our friendly team.
                  </p>
                  <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-widest bg-white hover:bg-zinc-200 text-black rounded-full transition-transform hover:scale-105 duration-300">
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </GlyphPortal>
        </div>
        <Footer />
      </main>
    </>
  );
}
