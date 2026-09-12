"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["Web Development", "AI Solutions", "Consulting", "Beginner Coding"];

const faqContent: Record<string, { question: string; answer: string }[]> = {
  "Web Development": [
    {
      question: "What is web development?",
      answer: "Web development involves building, creating, and maintaining websites. It includes aspects such as web design, web publishing, web programming, and database management."
    },
    {
      question: "What programming languages are essential for web development?",
      answer: "Essential languages include HTML, CSS, and JavaScript for the frontend. For the backend, Node.js, Python, or Go are highly recommended depending on the use case."
    },
    {
      question: "What's the difference between front-end and back-end development?",
      answer: "Front-end development focuses on the visual and interactive parts of a website (what the user sees). Back-end deals with the server, database, and application logic (what happens behind the scenes)."
    },
    {
      question: "How long does it typically take to develop a website?",
      answer: "A basic website can take 2-4 weeks, while complex full-stack web applications or e-commerce platforms can take 3-6 months depending on requirements."
    },
    {
      question: "What is responsive web design?",
      answer: "Responsive web design is an approach that ensures web pages render well on a variety of devices and window or screen sizes, from mobile phones to desktop monitors."
    }
  ],
  "AI Solutions": [
    {
      question: "How do you integrate AI into existing software?",
      answer: "I integrate AI by connecting to advanced LLM APIs (like OpenAI or Anthropic), building custom vector databases for retrieval-augmented generation (RAG), and designing seamless conversational interfaces."
    },
    {
      question: "Can AI improve my website's performance?",
      answer: "Yes! AI can automate customer support via chatbots, personalize user experiences, and analyze data to provide predictive insights, drastically improving engagement."
    },
    {
      question: "Is AI integration secure?",
      answer: "Security is paramount. All AI integrations are built with strict data sanitization, secure API handling, and enterprise-grade encryption to protect user data."
    }
  ],
  "Consulting": [
    {
      question: "Do you offer technical consulting?",
      answer: "Yes, I offer technical consulting for startups and enterprises looking to scale their digital infrastructure or migrate to modern frameworks like Next.js."
    },
    {
      question: "How do we start a project together?",
      answer: "You can reach out via the Contact page. We'll schedule a discovery call to discuss your business needs, technical requirements, and project timeline."
    }
  ],
  "Beginner Coding": [
    {
      question: "Which programming language should I learn first in 2026?",
      answer: "JavaScript is highly recommended because it runs in every browser and powers both frontend and backend development. Python is a great alternative if you are interested in data or AI."
    },
    {
      question: "Do I need a computer science degree to start coding?",
      answer: "No. A large share of working developers are self-taught or came through bootcamps. What matters most to employers is what you can build and demonstrate."
    },
    {
      question: "Should I learn a framework like React right away?",
      answer: "No. Learn plain JavaScript first. Frameworks make much more sense once you understand the core problems they are solving."
    }
  ]
};

export default function TabbedFaq() {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveTab(category);
              setOpenIndex(null);
            }}
            className={cn(
              "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
              activeTab === category
                ? "bg-white text-black shadow-lg"
                : "bg-[#111111] text-zinc-400 hover:text-white hover:bg-[#222222] border border-white/5"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-4">
        {faqContent[activeTab].map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="w-full bg-[#111111] border border-white/5 rounded-2xl overflow-hidden transition-colors hover:bg-[#151515]"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <span className="text-zinc-400 flex-shrink-0 ml-4">
                  {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-zinc-400 text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
