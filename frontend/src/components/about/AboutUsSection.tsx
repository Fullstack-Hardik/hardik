"use client"

import type React from "react"
import { useRef } from "react"
import {
  Code2,
  Server,
  Database,
  Brain,
  Cloud,
  Palette,
  ArrowRight,
  Zap,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Link from "next/link"

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const expertise = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Frontend Engineering",
      description:
        "Building responsive, accessible and performant user interfaces with React, Next.js, TypeScript and Tailwind CSS. I focus on component architecture, state management and smooth user experiences.",
      position: "left",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend & APIs",
      description:
        "Designing scalable REST APIs and server-side systems using Node.js and Express.js. Authentication, validation, middleware and clean architecture are core to how I approach backend development.",
      position: "left",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases & Storage",
      description:
        "Working with MongoDB and PostgreSQL to design schemas, write efficient queries and build reliable data layers that support real application needs at scale.",
      position: "left",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Integration",
      description:
        "Integrating AI and LLM capabilities into web applications — from intelligent features and automation to AI-powered product flows — without compromising user experience.",
      position: "right",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Deployment & Cloud",
      description:
        "Deploying full-stack applications on Vercel, AWS and modern cloud infrastructure. CI/CD pipelines, performance monitoring and zero-downtime releases are part of how I ship.",
      position: "right",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX & Design",
      description:
        "Designing interfaces that are both beautiful and usable. I treat design as an engineering discipline — every interaction, animation and visual decision serves the product and the user.",
      position: "right",
    },
  ]

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-transparent text-white overflow-hidden relative"
      aria-label="About Hardik Yadav"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-orange-600/10 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl"
        style={{ y: y2 }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span
            className="text-orange-400 font-medium mb-2 flex items-center gap-2 uppercase tracking-widest text-xs"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            Full-Stack Developer & Builder
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center tracking-tighter">
            About Hardik Yadav
          </h2>
          <motion.div
            className="w-24 h-1 bg-orange-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Intro paragraph */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 text-gray-400 text-lg leading-relaxed space-y-4"
          variants={itemVariants}
        >
          <p>
            Hi, I'm Hardik Yadav. My journey into software development wasn't just about learning syntax; it was about understanding how systems interact to create value. I am a Full-Stack Developer and AI Enthusiast based in Saharanpur, India, with a relentless drive for building things that matter.
          </p>
          <p>
            Whether I'm designing an intuitive user interface, optimizing a complex backend database, or experimenting with the latest AI models, my approach remains the same: meticulous planning, clean execution, and continuous iteration. I believe that great software is a blend of hard engineering and empathetic design.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Left Column */}
          <div className="space-y-16">
            {expertise
              .filter((item) => item.position === "left")
              .map((item, index) => (
                <ExpertiseItem
                  key={`left-${index}`}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center — Identity Card */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div
                className="rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 p-8 flex flex-col items-center text-center shadow-2xl shadow-orange-500/10"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white text-3xl font-black mb-4 shadow-lg">
                  HY
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Hardik Yadav</h3>
                <p className="text-orange-400 text-xs uppercase tracking-widest font-semibold mb-4">
                  Full-Stack Developer
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  I build web applications, AI products, scalable APIs and thoughtful digital experiences.
                </p>
                <div className="flex flex-col gap-2 w-full">
                  <Link
                    href="/projects"
                    className="flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors"
                  >
                    View Projects <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:border-orange-400 hover:text-orange-400 transition-colors"
                  >
                    Work Together
                  </Link>
                </div>
              </motion.div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-orange-500/20 backdrop-blur-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-cyan-500/20 backdrop-blur-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {expertise
              .filter((item) => item.position === "right")
              .map((item, index) => (
                <ExpertiseItem
                  key={`right-${index}`}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* Philosophy section */}
        <motion.div
          className="mt-24 p-10 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-xl"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Core Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Performance First", desc: "Speed is a feature. I build with Core Web Vitals in mind, ensuring fast and efficient applications." },
              { label: "Pixel Perfection", desc: "A great backend deserves a flawless frontend. UI/UX is paramount to everything I build." },
              { label: "Continuous Learning", desc: "In a field that changes daily, adaptability and constant exploration are my strongest skills." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">{item.label}</span>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

interface ExpertiseItemProps {
  icon: React.ReactNode
  title: string
  description: string
  variants: any
  delay: number
  direction: "left" | "right"
}

function ExpertiseItem({ icon, title, description, variants, delay, direction }: ExpertiseItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-white bg-white/5 border border-white/10 p-3 rounded-2xl transition-colors duration-300 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 group-hover:text-orange-400 relative"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-gray-400 leading-relaxed pl-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}
