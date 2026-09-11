"use client"
 
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"

export const Component = ({ simulatedKey }: { simulatedKey?: string | null }) => {
  const [pressedKey, setPressedKey] = useState<string | null>(null)
  const [capsLock, setCapsLock] = useState(false)
  const [shift, setShift] = useState(false)
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  )

  useEffect(() => {
    if (simulatedKey) {
      setPressedKey(simulatedKey.toLowerCase());
      // Handle Shift modifier for uppercase simulation
      if (simulatedKey === simulatedKey.toUpperCase() && simulatedKey.match(/[A-Z]/)) {
        setShift(true);
      } else {
        setShift(false);
      }
      
      const timer = setTimeout(() => {
        setPressedKey(null);
        setShift(false);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [simulatedKey]);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleKeyPress = (key: string) => {
    setPressedKey(key)
    setTimeout(() => setPressedKey(null), 150)

    if (key === "capslock") {
      setCapsLock(!capsLock)
    } else if (key === "shift") {
      setShift(!shift)
    } else {
      if (shift) setShift(false)
    }
  }

  const getKeyDisplay = (key: string, shiftSymbol?: string) => {
    if (key.length === 1 && key.match(/[a-z]/)) {
      return capsLock || shift ? key.toUpperCase() : key
    }
    return shift && shiftSymbol ? shiftSymbol : key
  } 

  const isCompact = windowWidth < 768 // More compact layout on mobile

  const KeyButton = ({
    children,
    subLabel,
    className = "",
    onClick,
    isPressed = false,
    isActive = false,
    size = "default",
    actualKey = "",
  }: {
    children: React.ReactNode
    subLabel?: React.ReactNode
    className?: string
    onClick?: () => void
    isPressed?: boolean
    isActive?: boolean
    size?: "sm" | "default" | "lg" | "xl"
    actualKey?: string
  }) => {
    const sizeClasses = {
      sm: "h-6 w-6 text-[0.6rem] flex-none",
      default: isCompact ? "h-8 w-8 text-[0.65rem] flex-none" : "h-9 w-9 text-xs flex-none",
      lg: "h-8 md:h-9 text-xs flex-[1.5]",
      xl: "h-8 md:h-9 text-xs flex-[1.75]",
      xxl: "h-8 md:h-9 text-xs flex-[2.5]",
      space: "h-8 md:h-9 text-xs flex-[5]",
    }

    const isSimulatedActive = pressedKey === actualKey || (actualKey === ' ' && pressedKey === ' ') || (actualKey === 'enter' && pressedKey === '\n');
    const currentlyPressed = isPressed || isSimulatedActive;

    return (
      <Button
        variant="outline"
        className={`
          ${sizeClasses[size]} 
          relative flex flex-col items-center justify-center font-mono transition-all duration-75 
          bg-[#18181b] text-zinc-300 border-none rounded-[4px]
          ${currentlyPressed || isActive ? "bg-[#09090b] scale-95 shadow-inner translate-y-[2px]" : "shadow-[0_2px_0_0_#09090b,0_4px_4px_0_rgba(0,0,0,0.2)] hover:bg-[#27272a]"} 
          ${className}
        `}
        onClick={onClick}
      >
        {subLabel && (
          <span className="text-zinc-500 absolute top-0.5 left-1 text-[0.55rem] font-semibold">
            {subLabel}
          </span>
        )}
        <span className="font-medium">{children}</span>
      </Button>
    )
  }

  const numberRow = [
    { key: "`", shiftSymbol: "~" },
    { key: "1", shiftSymbol: "!" },
    { key: "2", shiftSymbol: "@" },
    { key: "3", shiftSymbol: "#" },
    { key: "4", shiftSymbol: "$" },
    { key: "5", shiftSymbol: "%" },
    { key: "6", shiftSymbol: "^" },
    { key: "7", shiftSymbol: "&" },
    { key: "8", shiftSymbol: "*" },
    { key: "9", shiftSymbol: "(" },
    { key: "0", shiftSymbol: ")" },
    { key: "-", shiftSymbol: "_" },
    { key: "=", shiftSymbol: "+" },
  ]

  const topRow = [
    { key: "q" }, { key: "w" }, { key: "e" }, { key: "r" },
    { key: "t" }, { key: "y" }, { key: "u" }, { key: "i" },
    { key: "o" }, { key: "p" },
    { key: "[", shiftSymbol: "{" }, { key: "]", shiftSymbol: "}" }, { key: "\\", shiftSymbol: "|" },
  ]

  const middleRow = [
    { key: "a" }, { key: "s" }, { key: "d" }, { key: "f" },
    { key: "g" }, { key: "h" }, { key: "j" }, { key: "k" },
    { key: "l" }, { key: ";", shiftSymbol: ":" }, { key: "'", shiftSymbol: '"' },
  ]

  const bottomRow = [
    { key: "z" }, { key: "x" }, { key: "c" }, { key: "v" },
    { key: "b" }, { key: "n" }, { key: "m" },
    { key: ",", shiftSymbol: "<" }, { key: ".", shiftSymbol: ">" }, { key: "/", shiftSymbol: "?" },
  ] 

  return (
    <div className="relative w-full max-w-[700px] mx-auto" style={{ transformStyle: 'preserve-3d' }}>
      
      {/* 3D Base Thickness Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#9ca3af] to-[#4b5563] rounded-b-2xl md:rounded-b-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]" style={{ transform: "translateZ(-4px)" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#6b7280] to-[#374151] rounded-b-2xl md:rounded-b-3xl" style={{ transform: "translateZ(-8px)" }}></div>
      <div className="absolute inset-0 bg-[#1f2937] rounded-b-2xl md:rounded-b-3xl" style={{ transform: "translateZ(-12px)" }}></div>

      {/* Top Deck Surface */}
      <div className="p-4 md:p-6 pb-8 md:pb-12 bg-[#c9cdd2] rounded-b-2xl md:rounded-b-3xl border-x border-b border-[#ffffff40] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] relative z-20 flex flex-col items-center" style={{ transform: "translateZ(0px)" }}>
        
        {/* Keyboard Well Wrapper */}
        <div className="flex w-full items-center justify-center">
          {/* Keyboard Well (Recessed area) */}
          <div className="bg-[#a3a8b0] rounded-xl p-3 md:p-4 px-4 md:px-6 shadow-[inset_0_4px_12px_rgba(0,0,0,0.4)] w-full max-w-[620px]">
          <div className="space-y-1 sm:space-y-1.5">
            <div className="flex gap-2 md:gap-4 justify-center">
              <div className="flex-1 max-w-[700px]">
              {/* Number Row */}
              <div className="flex justify-center gap-1 md:gap-1.5">
              {numberRow.map((item) => (
                <KeyButton
                  key={item.key}
                  actualKey={item.key}
                  onClick={() => handleKeyPress(item.key)}
                  subLabel={item.shiftSymbol}
                >
                  {getKeyDisplay(item.key, item.shiftSymbol)}
                </KeyButton>
              ))}
              <KeyButton
                actualKey="backspace"
                onClick={() => handleKeyPress("backspace")}
                size="lg"
              >
                ⌫
              </KeyButton>
            </div>

              {/* Top Row */}
              <div className="mt-1 md:mt-1.5 flex justify-center gap-1 md:gap-1.5">
              <KeyButton
                size="lg"
                actualKey="tab"
                onClick={() => handleKeyPress("tab")}
              >
                Tab
              </KeyButton>
              {topRow.map((item) => (
                <KeyButton
                  key={item.key}
                  actualKey={item.key}
                  onClick={() => handleKeyPress(item.key)}
                  subLabel={item.shiftSymbol}
                >
                  {getKeyDisplay(item.key, item.shiftSymbol)}
                </KeyButton>
              ))}
            </div>

              {/* Middle Row */}
              <div className="mt-1 md:mt-1.5 flex justify-center gap-1 md:gap-1.5">
              <KeyButton
                size="xl"
                actualKey="capslock"
                onClick={() => handleKeyPress("capslock")}
                isActive={capsLock}
              >
                Caps
              </KeyButton>
              {middleRow.map((item) => (
                <KeyButton
                  key={item.key}
                  actualKey={item.key}
                  onClick={() => handleKeyPress(item.key)}
                  subLabel={item.shiftSymbol}
                >
                  {getKeyDisplay(item.key, item.shiftSymbol)}
                </KeyButton>
              ))}
              <KeyButton
                size="xl"
                actualKey="enter"
                onClick={() => handleKeyPress("enter")}
              >
                Return
              </KeyButton>
            </div>

              {/* Bottom Row */}
              <div className="mt-1 md:mt-1.5 flex justify-center gap-1 md:gap-1.5">
              <KeyButton
                size="xxl"
                actualKey="shift"
                onClick={() => handleKeyPress("shift")}
                isActive={shift}
              >
                Shift
              </KeyButton>
              {bottomRow.map((item) => (
                <KeyButton
                  key={item.key}
                  actualKey={item.key}
                  onClick={() => handleKeyPress(item.key)}
                  subLabel={item.shiftSymbol}
                >
                  {getKeyDisplay(item.key, item.shiftSymbol)}
                </KeyButton>
              ))}
              <KeyButton
                size="xxl"
                actualKey="shift"
                onClick={() => handleKeyPress("shift")}
                isActive={shift}
              >
                Shift
              </KeyButton>
            </div>

              {/* Space Row */}
              <div className="mt-1 md:mt-1.5 flex justify-center gap-1 md:gap-1.5">
              <KeyButton
                size="lg"
                actualKey="control"
                onClick={() => handleKeyPress("control")}
              >
                control
              </KeyButton>
              <KeyButton
                size="lg"
                actualKey="option"
                onClick={() => handleKeyPress("option")}
              >
                option
              </KeyButton>
              <KeyButton
                size="lg"
                actualKey="command"
                onClick={() => handleKeyPress("command")}
              >
                command
              </KeyButton>
              <KeyButton
                size="space"
                actualKey=" "
                onClick={() => handleKeyPress(" ")}
              >
                {" "}
              </KeyButton>
              <KeyButton
                size="lg"
                actualKey="command"
                onClick={() => handleKeyPress("command")}
              >
                command
              </KeyButton>
              <KeyButton
                size="lg"
                actualKey="option"
                onClick={() => handleKeyPress("option")}
              >
                option
              </KeyButton>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>

        {/* Trackpad */}
        <div className="mt-6 md:mt-8 w-[40%] max-w-[340px] h-24 md:h-36 bg-[#c1c6cb] rounded-lg border border-[#a8aeb5] shadow-[inset_0_2px_4px_rgba(0,0,0,0.05),0_1px_1px_rgba(255,255,255,0.7)]"></div>
        
        {/* Thumb indent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 md:w-32 h-2 md:h-3 bg-[#aeb4bb] rounded-t-xl shadow-[inset_0_3px_5px_rgba(0,0,0,0.15)]"></div>
      </div>
    </div>
  )
}
