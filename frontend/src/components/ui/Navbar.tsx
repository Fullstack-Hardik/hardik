"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SpecularButton from "@/components/ui/SpecularButton";

export default function Navbar({ zIndex = 50 }: { zIndex?: number }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faqs" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header 
        className="absolute top-6 left-6 right-6 lg:left-12 lg:right-12 h-12 flex items-center justify-between"
        style={{ zIndex }}
      >
        <Link href="/" className="flex items-center justify-center w-32 block no-underline z-50 bg-white px-2 py-1.5 rounded-xl transition-all hover:bg-zinc-200" aria-label="HRDK home">
          <img src="/hrdk_logo.jpg" alt="HRDK Logo" className="h-10 w-auto rounded-lg" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-[16px] font-medium tracking-wide">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`relative group transition-colors ${pathname === link.href ? "text-white" : "text-zinc-400 hover:text-white"}`}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white transform origin-left transition-transform duration-300"></span>
                )}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-zinc-400 border-l border-white/20 pl-6 ml-2">
            <a href="https://github.com/fullstack-hardik" target="_blank" className="hover:text-white transition-colors" aria-label="GitHub"><FaGithub className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/hardik-yadav-682016301/" target="_blank" className="hover:text-white transition-colors" aria-label="LinkedIn"><FaLinkedin className="w-5 h-5" /></a>
          </div>

          <SpecularButton
            size="md"
            radius={8}
            tint="#ffffff"
            tintOpacity={0}
            blur={0}
            textColor="#000000"
            lineColor="#000000"
            baseColor="#525252"
            intensity={1}
            shineSize={10}
            shineFade={40}
            thickness={1}
            speed={0.35}
            followMouse
            proximity={250}
            autoAnimate={false}
            className="!bg-white"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Me
          </SpecularButton>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 gap-1.5 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ zIndex: 9998 }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Sidebar Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-black/80 backdrop-blur-md border-l border-white/10 transform transition-transform duration-300 ease-out md:hidden flex flex-col px-8 py-24 gap-8 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ zIndex: 9999 }}
      >
        <nav className="flex flex-col gap-6 text-xl font-medium tracking-wide">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`transition-colors relative group ${pathname === link.href ? "text-white" : "text-zinc-400 hover:text-zinc-300"}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-white transform origin-left transition-transform duration-300"></span>
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-6 text-zinc-400 mt-4 justify-center">
            <a href="https://github.com/fullstack-hardik" target="_blank" className="hover:text-white transition-colors" aria-label="GitHub"><FaGithub className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/hardik-yadav-682016301/" target="_blank" className="hover:text-white transition-colors" aria-label="LinkedIn"><FaLinkedin className="w-6 h-6" /></a>
        </div>

        <a
          href="/contact"
          className="mt-auto w-full px-6 py-3 rounded-lg bg-white text-black font-semibold shadow-lg hover:bg-zinc-200 transition-colors text-center block"
          onClick={() => setMenuOpen(false)}
        >
          Contact Me
        </a>
      </div>
    </>
  );
}
