"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}
interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}
interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}
interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) => {
  const colorName = colors.name ?? "#fff";
  const colorDesignation = colors.designation ?? "hsl(var(--muted-foreground))";
  const colorTestimony = colors.testimony ?? "hsl(var(--muted-foreground))";
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#a855f7";
  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);
  
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="testimonial-container mx-auto">
      <div className="testimonial-grid">
        <div className="image-container" ref={imageContainerRef}>
          {testimonials.map((testimonial, index) => (
            <img
              loading="lazy"
              key={testimonial.src}
              src={testimonial.src}
              alt={testimonial.name}
              className="testimonial-image grayscale hover:grayscale-0 transition-all duration-500"
              data-index={index}
              style={getImageStyle(index)}
            />
          ))}
        </div>
        <div className="testimonial-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3 className="name" style={{ color: colorName, fontSize: fontSizeName }}>
                {activeTestimonial.name}
              </h3>
              <p className="designation" style={{ color: colorDesignation, fontSize: fontSizeDesignation }}>
                {activeTestimonial.designation}
              </p>
              <motion.div className="quote" style={{ color: colorTestimony, fontSize: fontSizeQuote }}>
                {activeTestimonial.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.02 * i }}
                    style={{ display: "inline-block" }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <div className="arrow-buttons">
            <button
              className="arrow-button prev-button border border-white/10"
              onClick={handlePrev}
              style={{ backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous"
            >
              ←
            </button>
            <button
              className="arrow-button next-button border border-white/10"
              onClick={handleNext}
              style={{ backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .testimonial-container { width: 100%; max-width: 56rem; padding: 2rem; }
        .testimonial-grid { display: grid; gap: 5rem; }
        .image-container { position: relative; width: 100%; height: 24rem; perspective: 1000px; }
        .testimonial-image { position: absolute; width: 100%; height: 100%; object-fit: cover; border-radius: 1.5rem; box-shadow: 0 10px 30px rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); }
        .testimonial-content { display: flex; flex-direction: column; justify-content: center; }
        .name { font-weight: 900; margin-bottom: 0.25rem; letter-spacing: -0.02em; }
        .designation { margin-bottom: 1.5rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; }
        .quote { line-height: 1.6; font-weight: 500; }
        .arrow-buttons { display: flex; gap: 1rem; padding-top: 3rem; }
        .arrow-button { width: 3.5rem; height: 3.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s cubic-bezier(0.16,1,0.3,1); font-size: 1.2rem; color: white; }
        @media (min-width: 768px) {
          .testimonial-grid { grid-template-columns: 1fr 1.2fr; }
          .arrow-buttons { padding-top: 2rem; }
        }
      `}</style>
    </div>
  );
};
