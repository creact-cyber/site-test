"use client";
import { cn } from "../../lib/utils";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroTextProps {
  text?: string;
  className?: string;
  shutterColor?: string;
}

export default function HeroText({
  text = "IMMERSE",
  className = "",
  shutterColor = "text-primary", // Default to brand primary color
}: HeroTextProps) {
  const characters = text.split("");

  return (
    <div className={cn("relative flex justify-center items-center", className)}>
      <div className="flex flex-wrap justify-center items-center w-full">
        {characters.map((char, i) => (
          <div
            key={i}
            className="relative overflow-hidden group"
          >
            {/* Invisible placeholder to maintain width/height flow */}
            <span className="opacity-0 pointer-events-none select-none">
                {char === " " ? "\u00A0" : char}
            </span>

            {/* Main Character - The final visible text */}
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: i * 0.04 + 0.3, duration: 0.8 }}
              className="absolute inset-0 z-0"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>

            {/* Top Slice Layer */}
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "100%", opacity: [0, 1, 0] }}
              transition={{
                duration: 0.7,
                delay: i * 0.04,
                ease: "easeInOut",
              }}
              className={cn("absolute inset-0 z-10 pointer-events-none", shutterColor)}
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>

            {/* Middle Slice Layer - Uses current text color but darker/lighter contrast could be applied */}
            <motion.span
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "-100%", opacity: [0, 1, 0] }}
              transition={{
                duration: 0.7,
                delay: i * 0.04 + 0.1,
                ease: "easeInOut",
              }}
              className={cn("absolute inset-0 z-10 pointer-events-none brightness-50")}
              style={{
                clipPath: "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>

            {/* Bottom Slice Layer */}
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "100%", opacity: [0, 1, 0] }}
              transition={{
                duration: 0.7,
                delay: i * 0.04 + 0.2,
                ease: "easeInOut",
              }}
              className={cn("absolute inset-0 z-10 pointer-events-none", shutterColor)}
              style={{
                clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
}