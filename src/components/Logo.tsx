import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export function Logo({
  className = "",
  size = "md",
  showTagline = true,
}: LogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-13 h-13"
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl"
  };

  const taglineSizes = {
    sm: "text-[8px] tracking-[0.2em]",
    md: "text-[9px] tracking-[0.22em]",
    lg: "text-[10px] tracking-[0.26em]"
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.01] ${className}`}
      aria-label="Rankmoor — Makes You The Brand"
    >
      {/* Dynamic Logo Symbol with Gradient Arrow */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center flex-shrink-0`}>
        {/* Subtle orange ambient glow on hover */}
        <div className="absolute inset-0 bg-[#FF6B00] rounded-xl blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        
        {/* SVG Vector Logo */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="rankmoorArrow" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF4500" />
              <stop offset="60%" stopColor="#FF6B00" />
              <stop offset="100%" stopColor="#FFA048" />
            </linearGradient>
            <linearGradient id="rankmoorDarkR" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="100%" stopColor="#1C2541" />
            </linearGradient>
          </defs>

          {/* R Outer Arch in Deep Navy/Slate */}
          <path
            d="M 18 16 
               L 56 16 
               C 76 16, 88 28, 88 45 
               C 88 58, 78 68, 65 71 
               C 71 76, 78 84, 90 90 
               L 72 90 
               C 61 84, 54 75, 49 68 
               L 44 68 
               L 44 54 
               C 55 54, 67 52, 67 43 
               C 67 33, 58 31, 48 31 
               L 34 31 
               L 18 16 
               Z"
            fill="url(#rankmoorDarkR)"
          />

          {/* Dynamic Rising Growth Arrow in Rankmoor Orange */}
          <path
            d="M 20 62 
               L 46 45 
               L 40 40 
               L 68 35 
               L 63 63 
               L 56 57 
               L 30 73 
               Z"
            fill="url(#rankmoorArrow)"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <div className={`font-display font-extrabold tracking-tight leading-none ${textSizes[size]}`}>
          <span className="text-[#0F172A] transition-colors">
            Rank
          </span>
          <span className="text-[#FF6B00] group-hover:text-[#FF7A1A] transition-colors">
            moor
          </span>
        </div>

        {showTagline && (
          <span className={`uppercase font-bold text-[#E05300] mt-1 select-none font-sans ${taglineSizes[size]}`}>
            Makes You The Brand
          </span>
        )}
      </div>
    </Link>
  );
}
