"use client";

import React from "react";
import { motion } from "framer-motion";

interface CurvyUnderlineProps {
  children: React.ReactNode;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
  variant?: "curvy" | "wave" | "double" | "brush";
}

export function CurvyUnderline({
  children,
  className = "",
  strokeColor = "#FF6B00",
  strokeWidth = 3.5,
  variant = "curvy",
}: CurvyUnderlineProps) {
  return (
    <span className={`relative inline-block whitespace-nowrap ${className}`}>
      <span className="relative z-10">{children}</span>
      
      {variant === "curvy" && (
        <svg
          className="absolute left-0 -bottom-2 w-full h-3 overflow-visible pointer-events-none select-none z-0"
          viewBox="0 0 250 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Subtle glow layer */}
          <motion.path
            d="M 3 9 C 45 4, 95 13, 145 6 C 185 1, 220 9, 247 5"
            stroke={strokeColor}
            strokeWidth={strokeWidth + 2}
            strokeLinecap="round"
            strokeOpacity={0.25}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />
          {/* Main pencil curvy stroke */}
          <motion.path
            d="M 3 9 C 45 4, 95 13, 145 6 C 185 1, 220 9, 247 5"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          />
        </svg>
      )}

      {variant === "wave" && (
        <svg
          className="absolute left-0 -bottom-2.5 w-full h-3.5 overflow-visible pointer-events-none select-none z-0"
          viewBox="0 0 240 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 2 11 Q 30 2, 60 11 T 120 11 T 180 11 T 238 9"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.2 }}
          />
        </svg>
      )}

      {variant === "double" && (
        <svg
          className="absolute left-0 -bottom-3 w-full h-4 overflow-visible pointer-events-none select-none z-0"
          viewBox="0 0 260 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Top sketch line */}
          <motion.path
            d="M 2 7 C 60 3, 130 9, 258 4"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          />
          {/* Bottom sketchy offset line */}
          <motion.path
            d="M 10 14 C 75 16, 155 11, 248 13"
            stroke={strokeColor}
            strokeWidth={strokeWidth * 0.75}
            strokeLinecap="round"
            strokeOpacity={0.8}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
      )}

      {variant === "brush" && (
        <svg
          className="absolute left-0 -bottom-2 w-full h-3.5 overflow-visible pointer-events-none select-none z-0"
          viewBox="0 0 260 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 4 8 C 50 14, 110 3, 170 11 C 210 15, 240 5, 256 9"
            stroke={strokeColor}
            strokeWidth={strokeWidth + 1}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
          />
        </svg>
      )}
    </span>
  );
}

