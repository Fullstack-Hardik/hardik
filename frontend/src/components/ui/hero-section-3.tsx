"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollFlyInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode; 
  imageUrl: string;
  imageAlt?: string;
}

const ScrollFlyIn = React.forwardRef<HTMLDivElement, ScrollFlyInProps>(
  ({ children, imageUrl, imageAlt = "Animated image", className, ...props }, ref) => {
    const targetRef = React.useRef<HTMLDivElement>(null);
    const [screenWidth, setScreenWidth] = React.useState(1920);

    React.useEffect(() => {
      setScreenWidth(window.innerWidth);
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

    const x = useTransform(smoothProgress, [0, 1], [`-${1.5 * screenWidth}px`, `${3 * screenWidth}px`]);
    const opacity = useTransform(smoothProgress, [0, 0.05, 0.9, 1], [0, 1, 1, 0]);

    // The content will just animate in on mount instead of waiting for scroll

    return (
      <div ref={targetRef} className={cn("relative h-[120vh]", className)} {...props}>
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          {/* Animated Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ 
              duration: 1.2, 
              type: "spring", 
              bounce: 0.4,
              damping: 20
            }}
            className="z-10 text-center"
          >
            {children}
          </motion.div>

          {/* Animated Image (Plane) */}
          <motion.div 
            style={{ x, opacity }} 
            className="absolute top-0 left-0 z-20 flex h-full w-full items-center"
          >
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-auto h-auto max-w-none"
              onError={(e) => {
                e.currentTarget.src = `https://cdn.21st.dev/assets/mirror/1f/1fc1cc87bf58406056e825358749e9cd26c0b98170fd8b786dccf0b71f8192c6.svg`;
              }}
            />
          </motion.div>
        </div>
      </div>
    );
  }
);

ScrollFlyIn.displayName = "ScrollFlyIn";

export { ScrollFlyIn };
