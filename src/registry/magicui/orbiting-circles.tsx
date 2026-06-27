"use client";

import { cn } from "@/lib/utils";
import React from "react";

export interface OrbitingCirclesProps {
  className?: string;
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
  iconSize = 30,
  speed = 1,
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-white/10 stroke-1 transition-all duration-300"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={
              {
                "--duration": duration / speed,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
              } as React.CSSProperties
            }
            className={cn(
              "absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full bg-black/50 backdrop-blur",
              { "[animation-direction:reverse]": reverse },
              className,
            )}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
