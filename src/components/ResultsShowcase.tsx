"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CurvyUnderline } from "./CurvyUnderline";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Lock, 
  Award, 
  Star,
  Users
} from "lucide-react";
import { COMPANY_INFO } from "@/data/content";

export function ResultsShowcase() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12; // -6 to 6 deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#FAF9F6] border-b border-slate-200/90 overflow-hidden">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
          
          {/* ================= LEFT COLUMN: COPY & TRUST POINTS (SLIDE IN LEFT) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Verified 98.4% Client Retention</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#FF6B00]">Real Dashboards</span>
            </div>

            {/* Headline with Curvy Pencil Underline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-950 leading-tight">
              Real Brand Growth.{" "}
              <span className="block mt-1">
                Real Numbers.{" "}
                <CurvyUnderline strokeColor="#FF6B00" variant="curvy">
                  Zero Excuses.
                </CurvyUnderline>
              </span>
            </h2>

            {/* Concise impact text without AI filler */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Most agencies hand your account to an intern who sets automated rules and disappears. At Rankmoor, your brand is steered by proven seven-figure sellers who treat every ad dollar like our own capital.
            </p>

            {/* 3 Visual Advantage Points (Crisp, High-Impact) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 text-left">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-orange-500/40 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#FF6B00] border border-orange-200 flex items-center justify-center mb-2.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-900">16.0% Avg ACOS</div>
                <div className="text-[11px] text-slate-500 mt-1 leading-tight">
                  Harvested $7.37M sales with negative bid shields
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-teal-500/40 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 border border-teal-200 flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-900">Direct Dashboard</div>
                <div className="text-[11px] text-slate-500 mt-1 leading-tight">
                  100% transparent Seller Central access
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-500/40 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mb-2.5">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-900">Dedicated Council</div>
                <div className="text-[11px] text-slate-500 mt-1 leading-tight">
                  Direct Slack line to senior marketplace leads
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 flex items-center justify-center gap-2 group transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Free 24-Point Audit</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20BA5A] shadow-md shadow-[#25D366]/25 flex items-center justify-center gap-2 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Talk with Founder</span>
              </a>
            </div>

          </motion.div>

          {/* ================= RIGHT COLUMN: USER'S UPLOADED IMAGE WITH 3D MOUSE TILT (SLIDE IN RIGHT) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex justify-center"
          >
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[460px] sm:max-w-[500px] perspective-[1000px]"
            >
              <motion.div
                animate={{
                  rotateX: tilt.y,
                  rotateY: tilt.x,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="relative aspect-square w-full flex items-center justify-center"
              >
                {/* Glowing backdrop shadow */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#FF6B00]/20 via-amber-500/10 to-teal-500/20 blur-2xl pointer-events-none" />

                {/* The Uploaded Image: satisfied-client-rating.png */}
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/satisfied-client-rating.png"
                    alt="Rankmoor Verified Client Partner - 4.8 Rating & Sales Growth"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Floating Micro-Badge 1: Bottom-Left (Verified Partner) */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-6 left-2 sm:left-4 bg-white/95 backdrop-blur-md border border-slate-200/90 py-2.5 px-3.5 rounded-2xl shadow-xl shadow-slate-900/10 flex items-center gap-2.5 z-20"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Status</div>
                    <div className="text-xs font-bold text-slate-900">Amazon SPN & TikTok Tier 1</div>
                  </div>
                </motion.div>

                {/* Floating Micro-Badge 2: Top-Right (90-Day Best Seller) */}
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-8 right-2 sm:right-4 bg-white/95 backdrop-blur-md border border-slate-200/90 py-2 px-3 rounded-2xl shadow-xl shadow-slate-900/10 flex items-center gap-2 z-20"
                >
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                  <span className="text-[11px] font-extrabold text-slate-900">
                    +240% Sales Velocity
                  </span>
                </motion.div>

              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

