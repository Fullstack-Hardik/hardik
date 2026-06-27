"use client";
import { Monitor, Brain, Palette, Video, Share2, Terminal } from "lucide-react";
import { FeatureCard, type FeatureType } from "@/components/ui/grid-feature-cards";
import { AnimatedContainer } from "@/components/ui/animated-container";

const services: FeatureType[] = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Static to full-stack apps, admin panels, e-commerce & SaaS platforms with modern UI.",
  },
  {
    icon: Brain,
    title: "AI Product Development",
    description: "Custom AI web apps, chatbots, automation tools and SaaS products powered by latest LLMs.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Brand identity, social media graphics, UI mockups and marketing materials. ₹100/image.",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing, reels, promotional content. Starts at ₹200/minute.",
  },
  {
    icon: Share2,
    title: "Digital Marketing",
    description: "SEO, social media, paid ads, content strategy and full-funnel digital marketing campaigns.",
  },
  {
    icon: Terminal,
    title: "Tech Coaching",
    description: "1-on-1 and group sessions for web dev, AI, Python, DSA, digital marketing & more.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-4 relative z-20 border-t border-white/10 bg-black">
      <div className="container mx-auto w-full max-w-6xl space-y-12 relative z-10">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 mb-4 block underline underline-offset-8">What I Do</span>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl italic">
            Services & <span className="text-gray-500">Expertise</span>
          </h2>
          <p className="text-gray-400 mt-6 text-lg tracking-wide max-w-2xl mx-auto font-medium opacity-90">
            From concept to deployment — I handle the full digital lifecycle for individuals, startups and businesses.
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.3}
          className="grid grid-cols-1 divide-zinc-900 divide-y md:divide-x border border-white/10 rounded-3xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3 bg-zinc-950 backdrop-blur-xl"
        >
          {services.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}
