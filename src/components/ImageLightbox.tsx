"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, ExternalLink, ZoomIn } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  subtitle?: string;
  metrics?: { label: string; value: string }[];
}

export function ImageLightbox({
  isOpen,
  onClose,
  imageSrc,
  title,
  subtitle,
  metrics,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 font-display">
                    {title}
                  </h4>
                  {subtitle && (
                    <p className="text-xs text-slate-500">{subtitle}</p>
                  )}
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl bg-slate-200/70 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Preview Container */}
            <div className="relative flex-1 min-h-[400px] max-h-[70vh] bg-slate-950 flex items-center justify-center p-4 overflow-auto">
              <div className="relative w-full h-[60vh] max-h-[650px]">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Bottom Metrics Bar (if provided) */}
            {metrics && metrics.length > 0 && (
              <div className="px-6 py-3.5 bg-slate-900 text-white flex flex-wrap items-center justify-around gap-4 text-xs">
                {metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">
                      {m.label}
                    </span>
                    <span className="text-white font-extrabold text-sm sm:text-base font-display">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
