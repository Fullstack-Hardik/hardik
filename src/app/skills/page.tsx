"use client";
import React, { forwardRef, useRef } from "react";
import HeroFuturistic from "@/components/ui/hero-futuristic";
import LogoLoop from "@/components/ui/LogoLoop";
import { AnimatedBeam } from "@/registry/magicui/animated-beam";
import MagicBento from "@/components/ui/MagicBento";
import LightPillar from "@/components/ui/LightPillar";
import { cn } from "@/lib/utils";
import { 
  SiJavascript, SiTypescript, SiPython, SiPostgresql,
  SiHtml5, SiCss, SiReact, SiTailwindcss, SiVite,
  SiNodedotjs, SiExpress, SiJsonwebtokens,
  SiMongodb, SiMongoose,
  SiNumpy, SiOpenai, SiGoogle,
  SiGit, SiGithub, SiPostman, SiNpm,
  SiVercel, SiNetlify, SiCloudinary,
  SiFigma, SiSupabase, SiDocker, SiRedis, SiSocketdotio
} from "react-icons/si";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const allLogos = [
  { node: <SiJavascript size={32} color="#F7DF1E"/>, title: "JavaScript (ES6+)" },
  { node: <SiTypescript size={32} color="#3178C6"/>, title: "TypeScript" },
  { node: <SiPython size={32} color="#3776AB"/>, title: "Python" },
  { node: <SiPostgresql size={32} color="#336791"/>, title: "SQL" },
  { node: <SiHtml5 size={32} color="#E34F26"/>, title: "HTML5" },
  { node: <SiCss size={32} color="#1572B6"/>, title: "CSS3" },
  { node: <SiReact size={32} color="#61DAFB"/>, title: "React.js" },
  { node: <SiTailwindcss size={32} color="#06B6D4"/>, title: "Tailwind CSS" },
  { node: <SiVite size={32} color="#646CFF"/>, title: "Vite" },
  { node: <SiNodedotjs size={32} color="#339933"/>, title: "Node.js" },
  { node: <SiExpress size={32} color="#000000" className="bg-white rounded-full p-1"/>, title: "Express.js" },
  { node: <SiMongodb size={32} color="#47A248"/>, title: "MongoDB" },
  { node: <SiNumpy size={32} color="#013243"/>, title: "NumPy" },
  { node: <SiOpenai size={32} color="#ffffff"/>, title: "OpenAI API" },
  { node: <SiGit size={32} color="#F05032"/>, title: "Git" },
  { node: <VscVscode size={32} color="#007ACC"/>, title: "VS Code" },
  { node: <SiVercel size={32} color="#ffffff"/>, title: "Vercel" },
  { node: <SiCloudinary size={32} color="#3448C5"/>, title: "Cloudinary" },
];

const bentoCards = [
  { color: 'rgba(97, 218, 251, 0.15)', icon: <FaReact color="#61DAFB" />, title: 'React & Next.js', description: 'Interactive and incredibly fast server-rendered UIs.', label: 'Frontend' },
  { color: 'rgba(51, 153, 51, 0.15)', icon: <FaNodeJs color="#339933" />, title: 'Node & Python', description: 'Scalable backend architectures and robust APIs.', label: 'Backend' },
  { color: 'rgba(51, 103, 145, 0.15)', icon: <SiPostgresql color="#336791" />, title: 'PostgreSQL & Redis', description: 'Optimized data modelling with intense caching.', label: 'Database' },
  { color: 'rgba(16, 163, 127, 0.15)', icon: <SiOpenai color="#10a37f" />, title: 'OpenAI & LangChain', description: 'Next-generation AI product integration.', label: 'Intelligence' },
  { color: 'rgba(36, 150, 237, 0.15)', icon: <FaDocker color="#2496ED" />, title: 'Docker & AWS', description: 'Seamless containerization and robust cloud deployment.', label: 'DevOps' },
  { color: 'rgba(6, 182, 212, 0.15)', icon: <SiTailwindcss color="#06B6D4" />, title: 'Tailwind & Framer', description: 'Pixel-perfect designs with fluid micro-interactions.', label: 'Design' }
];

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-20 items-center justify-center rounded-full bg-black p-3",
          className
        )}
      >
        {children}
      </div>
    );
  }
);
Circle.displayName = "Circle";

function SkillsAnimatedBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full overflow-x-auto overflow-y-hidden bg-zinc-950/50 rounded-3xl border border-white/5 shadow-2xl mt-4 mb-20 hide-scrollbar">
      <div
        className="relative flex h-[500px] min-w-[900px] w-full items-center justify-center p-16 mx-auto"
        ref={containerRef}
      >
        <div className="flex size-full max-h-[250px] max-w-2xl flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div1Ref}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-12 h-12 object-contain" />
            </Circle>
            <Circle ref={div5Ref}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" className="w-12 h-12 object-contain" />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div2Ref}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="ChatGPT" className="w-12 h-12 object-cover rounded-full bg-white p-1" />
            </Circle>
            <Circle ref={div4Ref} className="size-24 bg-white flex items-center justify-center p-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png" alt="Google" className="w-14 h-14 object-contain" />
            </Circle>
            <Circle ref={div6Ref}>
              <img src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" alt="Vercel" className="w-12 h-12 object-contain rounded-full" />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnM91o7r1wba01xcHW15PLqbe-ONaTIjOO3g&s" alt="Claude AI" className="w-12 h-12 object-cover rounded-xl" />
            </Circle>
            <Circle ref={div7Ref}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAhFBMVEX///8NDQ0LCwsQEBDv7+/8/PwYGBgeHh739/cTExMkJCQHBwf29vbz8/MaGhofHx/Q0NDKysrp6ekvLy+/v79XV1eurq5HR0c+Pj4oKCjc3NycnJw4ODjGxsZdXV1SUlKLi4uJiYl8fHxsbGyzs7NlZWU7OzuVlZWBgYFERETi4uKkpKQbIdYdAAAF8klEQVR4nO2bDXPaPAzHYxtDhEN4h4YWStu1Xen3/36PJAfos6ZLzEbi6/Q7bpce3KE/erEta0kiCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCILw17HWdm3CX8GmWZZ2bUQw9NunSVo+p9P909sw7+d5sX66ndjE8gfs6aMRk7F9qCQdTZ+GyminjDLGaG1M8TihKEttGW1xh5y1/MpWN6TCkAZHYkiJMusfbPxRQbxKrDfOLl4cqgA0X7NHHPkEtbjB28SWkWdjFsJZYGfP2gDajeYr5b2hSJBWzoF6HCWsJWIVBOrYzlEDKUA3oAhHGkA5UmMwwMzL4ei4ro39DaMkWY0pHRxrQOvBsBgDgB7SqM/BeJrGH1nJOzi0XCmMLSAn0DP6hFJE0wOpybdpEreQJPkBDt2hasinSZLEuEzaMs3TaR9/cdevE2KKTdcmfwmvH705h46pE+L0OivX+RixybPSoOojS2Ee/YxTR8rhtTIOsECZWiUOa9gmxhzxP+7oRvepQHGV/X2OoNr7ONOduKXCq8HV5whuVkAtura3EtrWvqCFQNuqeiGAReE+xhyh+ruoF3ASQrsViLUEY8lqKoTOJ1rvu7a4mlEOjYV4yXddm1zNtkG1OuvAz4I5dG3zJyht98110CGF8mTVtd2V7HRzIXQKxlXxsWubq7B3AQ7hI7w2y66NrmLUhwAdirYy7qZro6uY8NG8sUOoAquia6M/Y5NXRUeqhhifT+Ouza7injoNzYOLGxERCrG9oXL9+oPISQXKdjDv2uzP4EbLNdgsnoTwBtjEmOw7bsI1DyzqsbgIy+9mYMAFLO2+bD10bfZn9r6BFabDxLNFwT1WRt2TjG4QVMCmkVqROo9t04iLCDcVG+e6bwLDPKIjouX7gdlcczM0QAkWrZhSxPrm1KMzIRnCVw3ok0M8HqGWQ2KnwJcfIQdE45RZxqPDN+ZGd4bTvL4v91GKUtuIhPB95hOXU61CDlaYT7GthvaVLkFAuSYdxpMQbfJJK9bVf+DY7lxBgCdIMeW50u61zR72l19lj0rsAre8zRcQ3saQcrPO2tFRN0ByfHcBDnTzJKeLXrocdfNZEs3VG93s3ELY1sRwImkznybt3PPUfYXlyOr9NJqaCM1Dy6E/UPh4a49XKteXUh9bmzV5QocccUk4sD9aGhnwEyNffxG99ZrT2uHAqfr7kJNH0IF6vaHBGhp/uL6SxWZUM72zeNM880MOab6k40KYP2TlNNTVdWD8j81u8tUID/29XRqeATiHjNb+tMQHpl+E8Zt+REjvWlkHT7YOMJjXq145w1Pmiy1fvdsb4/yC8PHH5rY0LXl0rfarJ6hgOde/Xxw3zC0J4fDXxW51oCPgaQIGbdi8L8c0LkPjDeeyq/3vrv1q5/zzGfrbwct+Y1ueQUkH4BxPWcH8+XU1PRxms9lm+r5fzsFbTJfQHxZCrfyWkZyBLoHhcFgUxbCkKO7uH1d8HZ3yK2tLyAh02bFRfmIM+jmQF4BMplE4GlvCn/8UOuVAFm6l9NvtpDfKshTJ0izjp/NcU6vzf7aXG76bdco3PAwZSYNLypW1isT9zyVeh3K7TXXk2PRcqloRY70Qx/NWcAx9GuMD4BFL7ScbKLI0fBRCnx+v0moZx3/bmzfjb+mh0ZjL7lRgacUjl/gTFMeR/pjs3kswnpRTQl9q+fx8VXp95YtpU4Cc09JZKYRgIY7voOJpHB4JFmIAl/NlfDMywUKoMphJfKPV4aGF+b/u2uoKwpMdXw/R+eMCITRive3a6grCcwSTffYtPKLVoNe11RWIkNgQIbEhQmLjHxaiRMhVuSC0tAi5JhcJGXVtdQWXVK3xdxEybK0PGsAFQsw3EaLUML4eigiJDxESGyIkNkRIbIiQ2BAhsSFCYuPfFaK/i5BoPZLzqFiADK3jFNLnwT7dGFQSp5BQjxjDoRXddWh4smNofY8uijFFlKFVDMYDegUQ039hEwRBEARBEARBEARBEARBEARBEARBEARBEARBEP6Q/wBL7UBcifYptQAAAABJRU5ErkJggg==" alt="Render" className="w-12 h-12 object-contain" />
            </Circle>
          </div>
        </div>

        <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-75} pathColor="rgba(255,255,255,0.4)" pathWidth={3} gradientStartColor="#47A248" gradientStopColor="#a855f7" />
        <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} pathColor="rgba(255,255,255,0.4)" pathWidth={3} gradientStartColor="#00A67E" gradientStopColor="#a855f7" />
        <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={75} pathColor="rgba(255,255,255,0.4)" pathWidth={3} gradientStartColor="#D97757" gradientStopColor="#a855f7" />
        <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} curvature={-75} reverse pathColor="rgba(255,255,255,0.4)" pathWidth={3} gradientStartColor="#a855f7" gradientStopColor="#4285F4" />
        <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} reverse pathColor="rgba(255,255,255,0.4)" pathWidth={3} gradientStartColor="#a855f7" gradientStopColor="#ffffff" />
        <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} curvature={75} reverse pathColor="rgba(255,255,255,0.4)" pathWidth={3} gradientStartColor="#a855f7" gradientStopColor="#E53935" />
      </div>
    </div>
  );
}


export default function SkillsPage() {
  return (
    <main className="min-h-screen pb-24 bg-black relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LightPillar
          topColor="#FF0000"
          bottomColor="#8B0000"
          intensity={1.0}
          rotationSpeed={0.3}
          glowAmount={0.005}
          pillarWidth={3.0}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={0}
          interactive={false}
          mixBlendMode="normal"
        />
      </div>

      <div className="w-full relative z-10">
        <HeroFuturistic />
      </div>

      <section className="relative z-10 py-10 px-4">
        <div className="container mx-auto max-w-5xl">
          <SkillsAnimatedBeam />
          
          <div className="mb-20">
            <MagicBento cards={bentoCards} glowColor="255, 50, 50" enableStars={true} enableBorderGlow={true} />
          </div>


          <div className="bg-zinc-950/80 backdrop-blur-md rounded-3xl border border-red-500/20 p-8 overflow-hidden">
            <h3 className="text-2xl font-black text-white mb-8 italic text-center uppercase tracking-widest text-red-500">All Technologies</h3>
            <LogoLoop logos={allLogos} speed={80} direction="left" logoHeight={56} gap={70} fadeOut scaleOnHover />
          </div>

        </div>
      </section>
    </main>
  );
}
