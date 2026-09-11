"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const TimelineContent = ({
  children,
  className,
  animationNum = 0,
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  animationNum?: number;
  as?: any;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const revealVariants = {
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: animationNum * 0.1,
        duration: 0.5,
      },
    },
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={revealVariants}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

export default function ClientFeedback() {
  const testimonialRef = useRef<HTMLDivElement>(null);

  return (
    <main className="w-full bg-black">
      <section className="relative h-full container text-white mx-auto rounded-lg py-14" ref={testimonialRef}>
        <article className={"max-w-screen-md mx-auto text-center space-y-2 "} >
          <TimelineContent as="h1" className={"xl:text-4xl text-3xl font-medium"} animationNum={0}>
            Trusted by Startups and the worlds's largest companies
          </TimelineContent>
          <TimelineContent as="p" className={"mx-auto text-zinc-400"} animationNum={1}>
            Let's hear how our clients feel about our engineering blog
          </TimelineContent>
        </article>
        
        <div className="lg:grid lg:grid-cols-3 gap-2 flex flex-col w-full lg:py-10 pt-10 pb-4 px-4">
          <div className="md:flex lg:flex-col lg:space-y-2 h-full lg:gap-0 gap-2 ">
            <TimelineContent animationNum={2} className=" lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-zinc-900 overflow-hidden rounded-xl border border-white/10 p-5">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
              <article className="mt-auto relative z-10">
                <p className="text-zinc-300">
                  "The insights provided in this blog have been a game-changer for our architecture team. Their deep dives into React and Next.js are top-notch."
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h2 className="font-semibold lg:text-xl text-sm">
                      Guillermo Rauch
                    </h2>
                    <p className="text-zinc-500 text-sm">CEO of Vercel</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=200&auto=format&fit=crop"
                    alt="Guillermo"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
            
            <TimelineContent animationNum={3} className="lg:flex-[3] flex-[4] lg:h-fit lg:shrink-0 flex flex-col justify-between relative bg-blue-600 text-white overflow-hidden rounded-xl border border-blue-500 p-5">
              <article className="mt-auto">
                <p className="text-blue-100">
                  "We've seen incredible results after implementing the patterns discussed here. The expertise and dedication to quality is evident."
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h2 className="font-semibold text-xl">Rika Shinoda</h2>
                    <p className="text-blue-200 text-sm">Lead Engineer</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=200&auto=format&fit=crop"
                    alt="Rika"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>
          
          <div className="lg:h-full md:flex lg:flex-col h-fit lg:space-y-2 lg:gap-0 gap-2">
            <TimelineContent animationNum={4} className="flex flex-col justify-between relative bg-[#111111] text-white overflow-hidden rounded-xl border border-white/5 p-5">
              <article className="mt-auto">
                <p className="2xl:text-base text-sm text-zinc-300">
                  "Highly professional articles, and their innovative solutions have truly transformed the way we operate our frontend systems."
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h2 className="font-semibold lg:text-xl text-lg">Alex Reacher</h2>
                    <p className="text-zinc-500 lg:text-base text-sm">CTO at OdeaoLabs</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=200&auto=format&fit=crop"
                    alt="Alex"
                    className="lg:w-16 lg:h-16 w-12 h-12 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
            
            <TimelineContent animationNum={5} className="flex flex-col justify-between relative bg-[#111111] text-white overflow-hidden rounded-xl border border-white/5 p-5">
              <article className="mt-auto">
                <p className="2xl:text-base text-sm text-zinc-300">
                  "We're extremely satisfied with the open-source contributions. Their expertise has exceeded our expectations at every turn."
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h2 className="font-semibold lg:text-xl text-lg">John Smith</h2>
                    <p className="text-zinc-500 lg:text-base text-sm">VP of Engineering</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=200&auto=format&fit=crop"
                    alt="John"
                    className="lg:w-16 lg:h-16 w-12 h-12 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
            
            <TimelineContent animationNum={6} className="flex flex-col justify-between relative bg-[#111111] text-white overflow-hidden rounded-xl border border-white/5 p-5">
              <article className="mt-auto">
                <p className="2xl:text-base text-sm text-zinc-300">
                  "Their technical breakdowns are absolutely exceptional. Always clear, concise, and incredibly helpful for our junior developers."
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h2 className="font-semibold lg:text-xl text-lg">Steven Sunny</h2>
                    <p className="text-zinc-500 lg:text-base text-sm">Founder at Boxefi</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=200&auto=format&fit=crop"
                    alt="Steven"
                    className="lg:w-16 lg:h-16 w-12 h-12 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>
          
          <div className="h-full md:flex lg:flex-col lg:space-y-2 lg:gap-0 gap-2">
            <TimelineContent animationNum={7} className="lg:flex-[3] flex-[4] flex flex-col justify-between relative bg-[#1a1a1a] text-white overflow-hidden rounded-xl border border-white/10 p-5">
              <article className="mt-auto">
                <p className="text-zinc-300">
                  "This engineering blog has been a key resource in our rapid growth journey. The tutorials are phenomenal."
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h2 className="font-semibold text-xl">Sarah Jenkins</h2>
                    <p className="text-zinc-500 text-sm">Head of Product</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=200&auto=format&fit=crop"
                    alt="Sarah"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
            
            <TimelineContent animationNum={8} className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-zinc-900 overflow-hidden rounded-xl border border-white/10 p-5">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
              <article className="mt-auto relative z-10">
                <p className="text-zinc-300">
                  "A true game-changer for us. The exceptional depth of the articles, combined with practical real-world examples, has made a significant impact on our daily operations."
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h2 className="font-semibold text-xl">Paul Brauch</h2>
                    <p className="text-zinc-500 text-sm">CTO of Spectrum</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=200&auto=format&fit=crop"
                    alt="Paul"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>
        </div>
      </section>
    </main>
  );
}
