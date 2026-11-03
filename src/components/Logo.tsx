import React from "react";
import Link from "next/link";
import Image from "next/image";

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
      {/* Official Rankmoor Logo Symbol */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center flex-shrink-0`}>
        {/* Subtle orange ambient glow on hover */}
        <div className="absolute inset-0 bg-[#FF6B00] rounded-xl blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        
        <Image
          src="/assets/logo/rankmoor-symbol.png"
          alt="Rankmoor Logo"
          width={52}
          height={52}
          priority
          className="w-full h-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
        />
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
