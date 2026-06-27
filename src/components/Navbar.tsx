"use client"

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, Home, User, Settings, Mail, Zap, Briefcase, GraduationCap, BookOpen, Gamepad2, Users, Code } from "lucide-react"
import Link from "next/link"

interface MenuItem {
  id: number
  title: string
  url: string
  icon: React.ReactNode
  subItems?: { title: string; url: string; icon: React.ReactNode }[]
}

const defaultMenuItems: MenuItem[] = [
  { id: 1, title: "Home", url: "/", icon: <Home className="w-5 h-5" /> },
  { id: 2, title: "About", url: "/about", icon: <User className="w-5 h-5" /> },
  { id: 3, title: "Skills", url: "/skills", icon: <Settings className="w-5 h-5" /> },
  { id: 4, title: "Projects", url: "/projects", icon: <Briefcase className="w-5 h-5" /> },
  { 
    id: 5, 
    title: "Courses", 
    url: "/courses", 
    icon: <GraduationCap className="w-5 h-5" />,
    subItems: [
      { title: "Cookbook", url: "/cookbook", icon: <BookOpen className="w-4 h-4" /> },
      { title: "Playground", url: "/playground", icon: <Gamepad2 className="w-4 h-4" /> }
    ]
  },
  { id: 8, title: "Community", url: "/community", icon: <Users className="w-5 h-5" /> },
  { id: 9, title: "Dev Corner", url: "/dev-corner", icon: <Code className="w-5 h-5" /> },
  { id: 10, title: "Contact", url: "/contact", icon: <Mail className="w-5 h-5" /> }
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 30)
  })

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuVariants: any = {
    closed: { opacity: 0, scale: 0.8, y: -50, transition: { type: "spring", stiffness: 300, damping: 30, when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 } },
    open: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30, when: "beforeChildren", staggerChildren: 0.1 } }
  }

  const itemVariants: any = {
    closed: { y: 20, opacity: 0, scale: 0.8 },
    open: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 400, damping: 25 } }
  }

  const hamburgerVariants = {
    normal: { rotate: 0, scale: 1 },
    scrolled: { rotate: 360, scale: 1.1 }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${
          isScrolled 
            ? "bg-black/40 backdrop-blur-md py-2 max-lg:-translate-y-[150%] max-lg:opacity-0" 
            : "bg-black/60 backdrop-blur-md py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                  <Zap className="w-5 h-5 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                  <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-md group-hover:bg-cyan-500/30 transition-all" />
                </div>
                <span className="text-xl font-black text-white italic tracking-tighter uppercase">HARDIK</span>
              </Link>
            </motion.div>

            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-2">
                {defaultMenuItems.map((item) => (
                  <motion.div
                    key={item.id}
                    className="relative group/navitem"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.url}
                      className="flex items-center space-x-2 px-3 py-2 rounded-md text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors whitespace-nowrap"
                    >
                      <span className="opacity-70">{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                    {item.subItems && (
                      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover/navitem:opacity-100 group-hover/navitem:visible transition-all duration-300 z-[70]">
                        <div className="bg-zinc-950 border border-white/10 rounded-xl p-2 shadow-2xl flex flex-col gap-1 min-w-[150px]">
                          {item.subItems.map((sub, i) => (
                            <Link key={i} href={sub.url} className="flex items-center gap-2 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors whitespace-nowrap">
                              <span className="opacity-70">{sub.icon}</span>
                              <span>{sub.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    {hoveredItem === item.id && (
                      <motion.div
                        layoutId="navbar-hover"
                        className="absolute inset-0 bg-white/10 rounded-md -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:hidden">
              <motion.button onClick={toggleMenu} className="p-2 rounded-md text-white hover:text-purple-400 focus:outline-none" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Menu className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isScrolled ? 1 : 0, opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-4 right-4 z-[60] lg:hidden"
      >
        <motion.button
          onClick={toggleMenu}
          className="w-14 h-14 bg-purple-600 text-white rounded-full shadow-lg flex items-center justify-center border border-purple-400/30"
          variants={hamburgerVariants}
          animate={isScrolled ? "scrolled" : "normal"}
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={toggleMenu}
            />

            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] w-[90%] max-w-md"
            >
              <div className="relative bg-zinc-950 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
                <motion.button
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full hover:bg-white/10"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>

                <div className="space-y-2 mt-8">
                  {defaultMenuItems.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                    >
                      {item.subItems ? (
                        <details className="group/details">
                          <summary className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer list-none">
                            <motion.div className="text-purple-400 group-hover/details:text-cyan-400" whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
                              {item.icon}
                            </motion.div>
                            <span className="text-lg font-bold uppercase tracking-widest text-zinc-300 group-hover/details:text-white flex-1">
                              {item.title}
                            </span>
                          </summary>
                          <div className="pl-12 pr-4 pb-2 space-y-1">
                            <Link href={item.url} onClick={toggleMenu} className="flex items-center gap-2 p-2 rounded-lg text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                              Overview
                            </Link>
                            {item.subItems.map((sub, i) => (
                              <Link key={i} href={sub.url} onClick={toggleMenu} className="flex items-center gap-3 p-2 rounded-lg text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                                <span className="text-purple-400 opacity-70">{sub.icon}</span>
                                <span>{sub.title}</span>
                              </Link>
                            ))}
                          </div>
                        </details>
                      ) : (
                        <Link
                          href={item.url}
                          onClick={toggleMenu}
                          className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <motion.div className="text-purple-400 group-hover:text-cyan-400" whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
                            {item.icon}
                          </motion.div>
                          <span className="text-lg font-bold uppercase tracking-widest text-zinc-300 group-hover:text-white">
                            {item.title}
                          </span>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="absolute -top-2 -left-2 w-4 h-4 bg-purple-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-2 -right-2 w-3 h-3 bg-cyan-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
