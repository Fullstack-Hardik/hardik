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

const premiumFont = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "900"] });

const faqs = [
  {
    question: "Who is Hardik Yadav?",
    answer: "Hardik Yadav is a full-stack developer and software engineer who builds web applications, APIs, AI-powered products and digital experiences. He works across frontend, backend, databases, deployment and UI/UX."
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
    question: "Does Hardik build AI applications?",
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
    question: "Where does Hardik share coding content?",
    answer: "Hardik shares technical articles, development insights and project write-ups on the Blog section of this website. You can also find his code on his GitHub profile."
  },
  {
    question: "How can I contact Hardik?",
    answer: "Use the Contact page on this website to send Hardik a message directly. You can also connect through his verified developer profiles listed in the site footer."
  }
];

function AccordionItem({ question, answer, index }: { question: string, answer: string, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-white/10 overflow-hidden"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center py-8 text-left focus:outline-none group"
      >
        <span className="text-xl md:text-2xl font-medium text-white group-hover:text-[#ff5800] transition-colors duration-300">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown className="w-6 h-6 text-[#ff5800]" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, filter: "blur(10px)" }}
            animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
            exit={{ height: 0, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="pb-8">
              <p className="text-zinc-400 text-lg leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

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
            <div className="w-full max-w-4xl mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col items-start min-h-screen relative z-10 pointer-events-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#ffffff]/10 rounded-xl">
                  <MessageCircleQuestion className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">How can we help?</h2>
              </div>
              
              <p className="text-xl text-zinc-400 mb-16 max-w-2xl">
                Everything you need to know about our services, pricing, and how we can elevate your digital presence.
              </p>
              
              <div className="w-full flex flex-col gap-2">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} index={index} question={faq.question} answer={faq.answer} />
                ))}
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
            
            <Footer />
          </GlyphPortal>
        </div>
      </main>
    </>
  );
}
