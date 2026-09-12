"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

interface ColorChangeCardProps {
  heading: string;
  description: string;
  imgSrc: string;
  href: string;
}

export const ColorChangeCard = ({ heading, description, imgSrc, href }: ColorChangeCardProps) => {
  return (
    <Link href={href} className="block w-full">
      <motion.div
        transition={{ staggerChildren: 0.035 }}
        whileHover="hover"
        className="group relative h-64 w-full cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 border border-white/5"
      >
        <div
          className="absolute inset-0 saturate-100 transition-all duration-500 group-hover:scale-110 md:saturate-0 md:group-hover:saturate-100"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-500" />
        
        <div className="relative z-20 flex h-full flex-col justify-between p-6 text-zinc-300 transition-colors duration-500 group-hover:text-white">
          <FiArrowRight className="ml-auto text-3xl transition-transform duration-500 group-hover:-rotate-45" />
          <div>
            <h4 className="flex flex-wrap">
              {heading.split("").map((letter, index) => (
                <AnimatedLetter letter={letter} key={index} />
              ))}
            </h4>
            <p className="mt-2 line-clamp-2 text-sm md:text-base opacity-80">{description}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

interface AnimatedLetterProps {
  letter: string;
}

const letterVariants: Variants = {
  hover: {
    y: "-50%",
  },
};

const AnimatedLetter = ({ letter }: AnimatedLetterProps) => {
  return (
    <div className="inline-block h-[36px] overflow-hidden font-semibold text-2xl md:text-3xl">
      <motion.span
        className="flex min-w-[4px] flex-col"
        style={{ y: "0%" }}
        variants={letterVariants}
        transition={{ duration: 0.5 }}
      >
        <span>{letter === " " ? "\u00A0" : letter}</span>
        <span>{letter === " " ? "\u00A0" : letter}</span>
      </motion.span>
    </div>
  );
};
