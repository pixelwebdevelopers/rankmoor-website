"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CurvyUnderline } from "./CurvyUnderline";
import { SpotlightCard } from "./SpotlightCard";
import { 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  Search, 
  Video, 
  ShieldCheck, 
  Layers, 
  SlidersHorizontal,
  Target,
  Zap,
  CheckCircle2,
  BarChart3,
  Flame,
  MousePointer,
  Award,
  Trophy
} from "lucide-react";
import { FaAmazon, FaTiktok } from "react-icons/fa6";

export function BentoServices() {
  const [activeCreativeTab, setActiveCreativeTab] = useState<"aplus" | "hero" | "video">("aplus");
  const [ppcComparisonMode, setPpcComparisonMode] = useState<"shielded" | "wasted">("shielded");

  return (
    <section className="py-24 sm:py-32 bg-[#FAFAFC] border-b border-slate-200/90 relative overflow-hidden">
      
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-orange-200/20 via-teal-100/20 to-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Turnkey Growth Infrastructure</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-950 leading-tight"
          >
            Engineered For{" "}
            <CurvyUnderline strokeColor="#FF6B00" variant="double">
              Category Dominance
            </CurvyUnderline>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Not simple checklists or recycled playbooks. We build resilient brand moats by combining proprietary search algorithms with high-converting creative engines.
          </motion.p>
        </div>

        {/* ============================================================ */}
        {/* ASYMMETRIC BENTO GRID (WITH MOUSE SPOTLIGHT & 3D TILT)        */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* ================= BENTO 1: AMAZON FBA (Col Span 7) - SLIDE IN LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <SpotlightCard
              enableTilt
              className="h-full p-6 sm:p-8 flex flex-col justify-between border-slate-200/90 hover:border-orange-500/30 group"
              spotlightColor="rgba(255, 107, 0, 0.12)"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6B00] border border-orange-200 flex items-center justify-center font-bold">
                      <FaAmazon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-[#FF6B00] tracking-wider">
                        Amazon Ecosystem
                      </div>
                      <div className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                        Full-Throttle FBA Domination
                      </div>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Cosmo 2.0 Live
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Reverse-ASIN indexing, semantic query mapping, and top-of-search placement that turns generic shoppers into loyal brand advocates.
                </p>

                {/* Interactive Visual Mini-Dashboard */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white shadow-inner mb-6 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 border-b border-slate-800 pb-2">
                    <div className="flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>Target Keyword Rank Leap</span>
                    </div>
                    <span className="text-emerald-400 font-mono font-bold">+284% Organic Velocity</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-300">Organic Position:</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 line-through text-[11px]">Page 4 (#48)</span>
                        <ArrowRight className="w-3 h-3 text-[#FF6B00]" />
                        <span className="px-2 py-0.5 rounded-md bg-[#FF6B00] text-white font-extrabold text-[11px] shadow-xs inline-flex items-center gap-1">
                          <span>#1 Best Seller</span>
                          <Trophy className="w-3 h-3 text-amber-200" />
                        </span>
                      </div>
                    </div>

                    {/* Visual Progress Bar */}
                    <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: "20%" }}
                        whileInView={{ width: "88%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="bg-gradient-to-r from-[#FF6B00] to-amber-400 h-full rounded-full"
                      />
                    </div>

                    <div className="flex justify-between items-center text-[11px] text-slate-400 pt-1">
                      <span>Top of Search Share: <strong className="text-white">84.6%</strong></span>
                      <span>Verified Ad ACOS: <strong className="text-emerald-400">16.0%</strong></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Footer Tags & Link */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium">A9 & Cosmo Reverse-ASIN</span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium">FBA Inventory Safeguard</span>
                </div>
                <Link
                  href="/amazon"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-[#E05300] transition-colors"
                >
                  <span>Explore FBA System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ================= BENTO 2: TIKTOK SHOP (Col Span 5) - SLIDE IN RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-5"
          >
            <SpotlightCard
              enableTilt
              className="h-full p-6 sm:p-8 flex flex-col justify-between border-slate-200/90 hover:border-teal-500/30 group"
              spotlightColor="rgba(20, 184, 166, 0.14)"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 border border-teal-200 flex items-center justify-center font-bold">
                      <FaTiktok className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-teal-600 tracking-wider">
                        Social Commerce
                      </div>
                      <div className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                        TikTok Shop Flywheel
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Automated sample seeding to 500+ vetted creator affiliates, 24/7 shoppable live broadcasts, and Spark Ad scaling that turns viral moments into recurring revenue.
                </p>

                {/* Visual Creator Machine Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-teal-50/60 border border-teal-200/70 text-center">
                    <div className="text-xl font-extrabold text-teal-700 font-display">
                      4,200+
                    </div>
                    <div className="text-[11px] text-teal-900/70 font-semibold mt-0.5">
                      Vetted Creator Network
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-teal-50/60 border border-teal-200/70 text-center">
                    <div className="text-xl font-extrabold text-teal-700 font-display">
                      4.85x
                    </div>
                    <div className="text-[11px] text-teal-900/70 font-semibold mt-0.5">
                      Avg Spark Ads ROAS
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-slate-900">Live Studio Seeding Engine:</span>
                    <span className="text-slate-500 block">Zero upfront retainer risk for sample outreach</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">TikTok Shop Tier 1 Partner</span>
                <Link
                  href="/tiktok-shop"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  <span>Explore TikTok Engine</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ================= BENTO 3: PPC PRECISION SCIENCE (Col Span 5) - SLIDE IN LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5"
          >
            <SpotlightCard
              enableTilt
              className="h-full p-6 sm:p-8 flex flex-col justify-between border-slate-200/90 hover:border-slate-800/40 group"
              spotlightColor="rgba(15, 23, 42, 0.10)"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                        Ad Architecture
                      </div>
                      <div className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                        PPC Precision Science
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  Stop burning money on irrelevant queries. We isolate high-intent keywords in SKAG structures and deploy automated negative shields.
                </p>

                {/* Interactive Toggle: Shielded vs Wasted */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 mb-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-700">PPC Architecture Comparison:</span>
                    <div className="inline-flex rounded-lg bg-white border border-slate-200 p-0.5 text-[10px] font-bold">
                      <button
                        onClick={() => setPpcComparisonMode("shielded")}
                        className={`px-2.5 py-0.5 rounded cursor-pointer transition-all ${
                          ppcComparisonMode === "shielded"
                            ? "bg-slate-900 text-white"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Rankmoor Moat
                      </button>
                      <button
                        onClick={() => setPpcComparisonMode("wasted")}
                        className={`px-2.5 py-0.5 rounded cursor-pointer transition-all ${
                          ppcComparisonMode === "wasted"
                            ? "bg-rose-600 text-white"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Generic Agency
                      </button>
                    </div>
                  </div>

                  {ppcComparisonMode === "shielded" ? (
                    <div className="space-y-1.5 text-xs text-emerald-800 bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-200">
                      <div className="font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>16.00% Ad ACOS with Negative Harvesting</span>
                      </div>
                      <div className="text-[11px] text-emerald-700">
                        Every dollar isolated in exact matches with strict dayparting.
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1.5 text-xs text-rose-800 bg-rose-50/80 p-2.5 rounded-xl border border-rose-200">
                      <div className="font-bold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                        <span>42.5%+ ACOS with Auto-Campaign Bleed</span>
                      </div>
                      <div className="text-[11px] text-rose-700">
                        Thousands wasted on irrelevant competitor misspells and broad queries.
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Hourly Bid Dayparting</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#FF6B00] transition-colors"
                >
                  <span>Audit PPC Waste</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ================= BENTO 4: CREATIVE CONVERSION (Col Span 7) - SLIDE IN RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="lg:col-span-7"
          >
            <SpotlightCard
              enableTilt
              className="h-full p-6 sm:p-8 flex flex-col justify-between border-slate-200/90 hover:border-amber-500/30 group"
              spotlightColor="rgba(245, 158, 11, 0.12)"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center font-bold">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-amber-600 tracking-wider">
                        Brand Studio
                      </div>
                      <div className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                        Conversion-First Creative Architecture
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                    +42% CVR Lift
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  Traffic is worthless without high conversion. We craft 3D product renders, Premium A+ Brand Stories, and click-magnet main images that turn casual scrollers into paying buyers.
                </p>

                {/* Interactive Visual Tabs for Creative Assets */}
                <div className="p-4 rounded-2xl bg-[#F8F9FC] border border-slate-200/90 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <button
                      onClick={() => setActiveCreativeTab("aplus")}
                      className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                        activeCreativeTab === "aplus"
                          ? "bg-white text-slate-900 shadow-xs border border-slate-200"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      Premium A+ Brand Story
                    </button>
                    <button
                      onClick={() => setActiveCreativeTab("hero")}
                      className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                        activeCreativeTab === "hero"
                          ? "bg-white text-slate-900 shadow-xs border border-slate-200"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      3D Main Image CTR Boost
                    </button>
                    <button
                      onClick={() => setActiveCreativeTab("video")}
                      className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                        activeCreativeTab === "video"
                          ? "bg-white text-slate-900 shadow-xs border border-slate-200"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      Shoppable Video
                    </button>
                  </div>

                  <div className="text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-200/70 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900">
                        {activeCreativeTab === "aplus" && "High-EBC Modular Brand Ecosystem"}
                        {activeCreativeTab === "hero" && "A/B Tested White Background CTR Magnet"}
                        {activeCreativeTab === "video" && "15-Second Direct-Response UGC"}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        {activeCreativeTab === "aplus" && "Cross-sells your full catalog and lowers customer acquisition costs."}
                        {activeCreativeTab === "hero" && "Increases search result click-through rates by up to 2.4x."}
                        {activeCreativeTab === "video" && "Autoplay video tiles on Amazon desktop & mobile."}
                      </div>
                    </div>
                    <span className="text-emerald-600 font-extrabold text-sm ml-2">Verified</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">In-House 3D Studio & Copywriting</span>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors"
                >
                  <span>See Creative Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

