'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import Prism from '@/components/ui/Prism'
import { WordPullUp } from '@/components/ui/word-pull-up'
import { ChevronRight, Code, Terminal, Database, Cloud, Cpu, Globe, Layout, Smartphone } from 'lucide-react'

export default function HeroSection5() {
    return (
        <main className="overflow-x-hidden">
            <section className="relative">
                <div className="relative py-24 md:pb-32 lg:pb-36 lg:pt-48">
                    <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                        <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                            <div role="heading" aria-level={1} className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl font-black tracking-tighter italic uppercase text-white flex flex-col items-center lg:items-start lg:flex-row lg:flex-wrap gap-2 lg:gap-4">
                                <WordPullUp
                                  words="Build 10x Faster with"
                                  className="text-inherit tracking-tighter"
                                />
                                <span className="text-purple-400">Hardik</span>
                            </div>
                            <p className="mt-8 max-w-2xl text-balance text-lg text-gray-400 font-medium">
                                Highly customized, extremely scalable full-stack applications and AI products designed to dominate the digital landscape.
                            </p>

                            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                                <Button
                                    asChild
                                    size="lg"
                                    className="h-14 rounded-full pl-6 pr-4 text-base bg-purple-600 hover:bg-purple-500 text-white font-bold shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all hover:scale-105 border-0"
                                >
                                    <Link href="/contact">
                                        <span className="text-nowrap tracking-widest uppercase text-xs">Start Building</span>
                                        <ChevronRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="h-14 rounded-full px-6 text-base hover:bg-white/5 border border-white/10 text-white font-bold transition-all hover:border-purple-500/50"
                                >
                                    <Link href="/projects">
                                        <span className="text-nowrap tracking-widest uppercase text-xs">View Portfolio</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-80">
                        <Prism
                            animationType="rotate"
                            timeScale={0.5}
                            height={3.9}
                            baseWidth={6.4}
                            scale={3.6}
                            hueShift={0.7584}
                            colorFrequency={1.25}
                            noise={0.15}
                            glow={0.8}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
                    </div>
                </div>
            </section>
            
            <section className="bg-black pb-2">
                <div className="group relative m-auto max-w-7xl px-6">
                    <div className="flex flex-col items-center md:flex-row border-t border-white/5 pt-12">
                        <div className="md:max-w-44 md:border-r md:border-white/10 md:pr-6 mb-6 md:mb-0 shrink-0">
                            <p className="text-center md:text-end text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                                Powering the best stacks
                            </p>
                        </div>
                        <div className="relative py-2 md:w-[calc(100%-11rem)] w-full overflow-hidden">
                            <InfiniteSlider
                                durationOnHover={20}
                                duration={40}
                                gap={64}
                            >
                                {[
                                    { icon: <Code className="w-5 h-5" />, name: "React" },
                                    { icon: <Terminal className="w-5 h-5" />, name: "Next.js" },
                                    { icon: <Database className="w-5 h-5" />, name: "PostgreSQL" },
                                    { icon: <Cloud className="w-5 h-5" />, name: "AWS" },
                                    { icon: <Cpu className="w-5 h-5" />, name: "AI/ML" },
                                    { icon: <Globe className="w-5 h-5" />, name: "Web3" },
                                    { icon: <Layout className="w-5 h-5" />, name: "Tailwind" },
                                    { icon: <Smartphone className="w-5 h-5" />, name: "Mobile App" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                                        {item.icon}
                                        <span className="text-sm font-black italic tracking-tighter uppercase">{item.name}</span>
                                    </div>
                                ))}
                            </InfiniteSlider>

                            <div className="bg-gradient-to-r from-black absolute inset-y-0 left-0 w-20 pointer-events-none"></div>
                            <div className="bg-gradient-to-l from-black absolute inset-y-0 right-0 w-20 pointer-events-none"></div>
                            <ProgressiveBlur
                                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                direction="left"
                                blurIntensity={1}
                            />
                            <ProgressiveBlur
                                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                direction="right"
                                blurIntensity={1}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
