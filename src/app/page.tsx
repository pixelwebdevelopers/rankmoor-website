"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  BarChart3, 
  CheckCircle2, 
  ShoppingBag, 
  Video, 
  Award, 
  Layers, 
  Zap, 
  ChevronRight,
  Star,
  ChevronDown,
  Maximize2,
  DollarSign,
  Search,
  Crosshair,
  Percent,
  SlidersHorizontal,
  Flame
} from "lucide-react";
import { 
  COMPANY_INFO, 
  FOUNDER_INFO, 
  CASE_STUDIES, 
  TESTIMONIALS, 
  FAQS 
} from "@/data/content";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { AuditCalculator } from "@/components/AuditCalculator";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { InteractiveRoadmap } from "@/components/InteractiveRoadmap";
import { RoiCalculator } from "@/components/RoiCalculator";
import { ImageLightbox } from "@/components/ImageLightbox";

export default function HomePage() {
  const [activeCaseTab, setActiveCaseTab] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqCategory, setFaqCategory] = useState<string>("all");
  const [heroMetricMode, setHeroMetricMode] = useState<"amazon" | "ppc" | "tiktok">("amazon");

  // Lightbox Modal State
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
    subtitle?: string;
    metrics?: { label: string; value: string }[];
  }>({
    isOpen: false,
    imageSrc: "",
    title: "",
    subtitle: "",
    metrics: [],
  });

  const activeCase = CASE_STUDIES[activeCaseTab];

  const marqueeItems = [
    { label: "Amazon Brand Registry 2.0", color: "bg-[#FF9900]" },
    { label: "Amazon Ads Verified Partner", color: "bg-[#FF6B00]" },
    { label: "TikTok Shop Creator Network", color: "bg-[#25F4EE]" },
    { label: "USPTO & Companies House", color: "bg-blue-600" },
    { label: "Tier-1 Factory Direct Sourcing", color: "bg-emerald-600" },
    { label: "Amazon SPN Certified", color: "bg-amber-500" },
    { label: "Amazon Multi-Channel Fulfillment (MCF)", color: "bg-purple-600" },
    { label: "IRS 147C & Corporate Formation", color: "bg-indigo-600" },
  ];

  // Dynamic hero stats depending on mode
  const heroStats = {
    amazon: {
      val1: "$20.23M+",
      lbl1: "Verified 12M Volume",
      col1: "text-slate-900",
      val2: "16.00%",
      lbl2: "Avg Ad ACOS",
      col2: "text-emerald-600",
      val3: "480K+",
      lbl3: "Units Shipped",
      col3: "text-[#FF6B00]",
    },
    ppc: {
      val1: "$7.37M",
      lbl1: "PPC Managed Sales",
      col1: "text-[#FF6B00]",
      val2: "-58%",
      lbl2: "Wasted Spend Cut",
      col2: "text-emerald-600",
      val3: "84.6%",
      lbl3: "Top-of-Search Share",
      col3: "text-slate-900",
    },
    tiktok: {
      val1: "4,200+",
      lbl1: "Creator Affiliates",
      col1: "text-teal-600",
      val2: "$480K/mo",
      lbl2: "Live Studio GMV",
      col2: "text-[#FF6B00]",
      val3: "4.85x",
      lbl3: "Spark Ads ROAS",
      col3: "text-emerald-600",
    },
  };

  const filteredFaqs = faqCategory === "all" 
    ? FAQS 
    : faqCategory === "amazon"
    ? FAQS.slice(0, 3)
    : faqCategory === "tiktok"
    ? FAQS.slice(1, 4)
    : FAQS.slice(3, 6);

  return (
    <div className="relative min-h-screen bg-[#FAFAFC] text-slate-900 overflow-x-hidden">
      
      {/* Global Image Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState({ ...lightboxState, isOpen: false })}
        imageSrc={lightboxState.imageSrc}
        title={lightboxState.title}
        subtitle={lightboxState.subtitle}
        metrics={lightboxState.metrics}
      />

      {/* ============================================================ */}
      {/* 1. HERO SECTION (RESPONSIVE MOBILE & DESKTOP ARCHITECTURE)   */}
      {/* ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#FCF5EB] border-b border-slate-200/90 pt-24 sm:pt-28 lg:pt-36 pb-12 lg:pb-12 min-h-0 lg:min-h-[720px] flex flex-col lg:flex-row items-center">
        
        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-2 sm:py-4 lg:py-8 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0">
            
            {/* Left Column: Copy, Switcher, Badges & CTAs */}
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-5 xl:col-span-5 space-y-4 text-center lg:text-left max-w-lg mx-auto lg:mx-0"
            >
              {/* Announcement Pill */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/90 shadow-2xs text-[11px] font-semibold text-slate-800"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                <span className="text-slate-900 font-bold">Empirical Marketplace Growth House</span>
                <span className="text-slate-300">•</span>
                <span className="text-[#E05300] font-bold">$20M+ Verified Data</span>
              </motion.div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-display font-extrabold tracking-tight text-slate-950 leading-[1.18]">
                We Don&apos;t Just Rank Products.{" "}
                <span className="text-[#FF6B00] block mt-1">
                  Makes You The Brand.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-md mx-auto lg:mx-0">
                Engineering category dominance for high-growth Amazon sellers and TikTok Shop pioneers through precision search architecture, conversion-led creatives, PPC science, and turnkey operational custodianship.
              </p>

              {/* Interactive Stat Badges with Dynamic Toggle Switcher */}
              <div className="space-y-2 pt-1">
                {/* Metric Mode Switcher */}
                <div className="inline-flex items-center p-0.5 rounded-lg bg-white/80 border border-slate-200/80 shadow-2xs text-[10px] font-bold text-slate-600">
                  <button
                    onClick={() => setHeroMetricMode("amazon")}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      heroMetricMode === "amazon"
                        ? "bg-[#FF6B00] text-white shadow-2xs"
                        : "hover:text-slate-900"
                    }`}
                  >
                    Amazon FBA
                  </button>
                  <button
                    onClick={() => setHeroMetricMode("ppc")}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      heroMetricMode === "ppc"
                        ? "bg-slate-900 text-white shadow-2xs"
                        : "hover:text-slate-900"
                    }`}
                  >
                    PPC Science
                  </button>
                  <button
                    onClick={() => setHeroMetricMode("tiktok")}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      heroMetricMode === "tiktok"
                        ? "bg-teal-600 text-white shadow-2xs"
                        : "hover:text-slate-900"
                    }`}
                  >
                    TikTok Shop
                  </button>
                </div>

                {/* 3 Metric Badges */}
                <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                  <motion.div 
                    key={`b1-${heroMetricMode}`}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-center lg:text-left"
                  >
                    <div className={`text-sm sm:text-base lg:text-lg font-bold font-display ${heroStats[heroMetricMode].col1}`}>
                      {heroStats[heroMetricMode].val1}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium truncate sm:whitespace-normal">
                      {heroStats[heroMetricMode].lbl1}
                    </div>
                  </motion.div>

                  <motion.div 
                    key={`b2-${heroMetricMode}`}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-center lg:text-left"
                  >
                    <div className={`text-sm sm:text-base lg:text-lg font-bold font-display ${heroStats[heroMetricMode].col2}`}>
                      {heroStats[heroMetricMode].val2}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium truncate sm:whitespace-normal">
                      {heroStats[heroMetricMode].lbl2}
                    </div>
                  </motion.div>

                  <motion.div 
                    key={`b3-${heroMetricMode}`}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-center lg:text-left"
                  >
                    <div className={`text-sm sm:text-base lg:text-lg font-bold font-display ${heroStats[heroMetricMode].col3}`}>
                      {heroStats[heroMetricMode].val3}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium truncate sm:whitespace-normal">
                      {heroStats[heroMetricMode].lbl3}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 transition-all duration-200 flex items-center justify-center gap-2 group active:scale-98"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Claim Free 24-Point Audit</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                {/* WhatsApp Button */}
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all shadow-md shadow-[#25D366]/25 hover:shadow-lg hover:shadow-[#25D366]/35 flex items-center justify-center gap-2 active:scale-98"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] text-slate-500">
                <span className="flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Real Seller Central</span>
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1 font-medium">
                  <Award className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>Amazon SPN</span>
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1 font-medium">
                  <Zap className="w-3.5 h-3.5 text-teal-600" />
                  <span>TikTok Partner</span>
                </span>
              </div>

              {/* MOBILE ONLY: High-Impact Visual Showcase Card */}
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block lg:hidden w-full max-w-md mx-auto pt-4"
              >
                <div className="relative aspect-[16/11] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-orange-950/10 border-2 border-white bg-[#FAF7F2]">
                  <Image
                    src="/assets/hero/hero-client-graphic-mobile.webp"
                    alt="Rankmoor Founder Mian Hassan - Verified Amazon & TikTok Growth"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                  {/* Floating Frosted Glass Overlay Badge on Mobile */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-200/90 shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] sm:text-xs font-bold text-slate-900 font-display">Mian Hassan • CEO</span>
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-extrabold text-[#E05300] bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
                      $20.23M+ 12M Sales
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* DESKTOP ONLY: Flush-Right Absolute Image (NO right padding, smooth left blend) */}
        <motion.div 
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:flex lg:absolute lg:right-0 lg:top-24 lg:bottom-0 w-[60%] xl:w-[64%] h-[calc(100%-96px)] z-10 items-end justify-end pointer-events-none"
        >
          {/* Continuous Left-Side Blend Overlay matching #FCF5EB */}
          <div className="absolute inset-y-0 left-0 w-48 xl:w-72 bg-gradient-to-r from-[#FCF5EB] via-[#FCF5EB]/70 to-transparent z-10 pointer-events-none" />

          {/* Graphic Container with Alpha-blended Graphic */}
          <div className="relative w-full h-full">
            <Image
              src="/assets/hero/hero-client-graphic.webp"
              alt="Rankmoor Amazon & TikTok Shop Category Dominance"
              fill
              priority
              className="object-contain object-right-bottom lg:object-cover lg:object-right-bottom"
            />
          </div>

          {/* Floating Verified Badge 1: Top-Right ($20.23M Sales) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="pointer-events-auto absolute top-2 sm:top-4 right-4 sm:right-8 bg-white/95 backdrop-blur-md border border-slate-200/90 p-3 sm:p-3.5 rounded-2xl shadow-xl shadow-slate-900/10 flex items-center gap-3 z-20"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                Verified 12M Volume
              </div>
              <div className="text-sm sm:text-base font-extrabold text-slate-900 font-display flex items-center gap-1.5">
                <span>$20,230,000+</span>
                <span className="text-[10px] text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-full font-bold">
                  +200% YoY
                </span>
              </div>
            </div>
          </motion.div>

          {/* Floating Verified Badge 2: Bottom-Right (16.0% ACOS) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="pointer-events-auto absolute bottom-4 sm:bottom-6 right-4 sm:right-10 bg-white/95 backdrop-blur-md border border-slate-200/90 p-3 sm:p-3.5 rounded-2xl shadow-xl shadow-slate-900/10 flex items-center gap-3 z-20"
          >
            <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#FF6B00] border border-orange-200 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                PPC Performance
              </div>
              <div className="text-sm sm:text-base font-extrabold text-slate-900 font-display flex items-center gap-1.5">
                <span>16.00% ACOS</span>
                <span className="text-[10px] text-[#E05300] bg-orange-100 px-1.5 py-0.5 rounded-full font-bold">
                  $7.37M Sales
                </span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* 2. INFINITE CONTINUOUS MARQUEE TICKER                        */}
      {/* ============================================================ */}
      <section className="border-b border-slate-200 bg-white py-5 overflow-hidden">
        <div className="text-center mb-3">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Verified Marketplace Credentials & Governance
          </p>
        </div>

        {/* Continuous Marquee Track */}
        <div className="relative w-full overflow-hidden whitespace-nowrap">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-10">
            {marqueeItems.map((item, index) => (
              <div
                key={`m1-${index}`}
                className="flex items-center gap-2.5 font-display font-bold text-slate-800 text-sm sm:text-base flex-shrink-0"
              >
                <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                <span>{item.label}</span>
              </div>
            ))}
            {marqueeItems.map((item, index) => (
              <div
                key={`m2-${index}`}
                className="flex items-center gap-2.5 font-display font-bold text-slate-800 text-sm sm:text-base flex-shrink-0"
              >
                <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. DUAL POWERHOUSES: AMAZON DOMINANCE & TIKTOK SHOP          */}
      {/*    (SLIDE IN FROM LEFT & RIGHT WITH EMBEDDED GRAPHICS)       */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Section Header with bottom-to-top reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Dual Core Engines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4">
            Where We Build Your Marketplace Empire
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We specialize exclusively in the world&apos;s two highest-leverage commercial channels: the algorithmic search fortress of Amazon, and the viral impulse commerce engine of TikTok Shop.
          </p>
        </motion.div>

        {/* Dual Cards: Left Card Slides In From Left, Right Card Slides In From Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Amazon Dominance (Slide in from Left: x: -90) */}
          <motion.div 
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="rounded-3xl p-6 sm:p-8 lg:p-9 bg-white border border-slate-200/90 hover:border-orange-300 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider">
                  The Algorithmic Fortress
                </span>
                <span className="text-xs text-slate-400 font-mono font-bold">01 / ARCHITECTURE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-2 group-hover:text-[#FF6B00] transition-colors">
                Amazon Dominance Suite
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                From reverse-ASIN Cosmo SEO to studio 3D A+ Content and sub-18% ACOS PPC science, we turn commodity listings into untouchable category leaders.
              </p>

              {/* Embedded Graphic Blueprint Preview (Click to Zoom Lightbox) */}
              <div 
                onClick={() => setLightboxState({
                  isOpen: true,
                  imageSrc: "/assets/graphics/amazon-dominance-graphic.webp",
                  title: "Amazon Search Dominance & PPC Architecture",
                  subtitle: "Algorithmic root indexing, dayparted PPC bids, and BuyBox retention",
                  metrics: [
                    { label: "Top-of-Search", value: "84.6% #1 Rank" },
                    { label: "Blended TACOS", value: "11.40%" },
                    { label: "BuyBox Win Rate", value: "99.8%" },
                  ]
                })}
                className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 mb-6 cursor-pointer group/preview shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/assets/graphics/amazon-dominance-graphic.webp"
                    alt="Amazon Dominance Blueprint"
                    fill
                    className="object-cover group-hover/preview:scale-102 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-slate-900/0 group-hover/preview:bg-slate-900/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover/preview:opacity-100 transition-opacity px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-md flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Expand Blueprint</span>
                  </span>
                </div>
                <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Amazon Dominance Architecture v4.2</span>
                  <span className="text-[#E05300] font-bold">Click to inspect</span>
                </div>
              </div>

              {/* Deliverable Checkpoints */}
              <ul className="space-y-2.5 mb-6 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                  <span><strong>Cosmo & A9 SEO:</strong> Reverse-ASIN semantic indexing for Page 1 ranks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                  <span><strong>3D Rendered A+ Content:</strong> Studio modules driving +35% conversion lift.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                  <span><strong>PPC & DSP Science:</strong> Algorithmic dayparting with documented 16% ACOS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                  <span><strong>Seller Central Custodianship:</strong> 24/7 account health & hijacker eviction.</span>
                </li>
              </ul>
            </div>

            <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
              <div className="text-xs text-slate-500">
                Verified: <strong className="text-slate-900 font-bold">$20.23M Sales</strong>
              </div>
              <Link
                href="/amazon"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-sm transition-all"
              >
                <span>Explore Amazon Suite</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: TikTok Shop Engine (Slide in from Right: x: 90) */}
          <motion.div 
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="rounded-3xl p-6 sm:p-8 lg:p-9 bg-white border border-slate-200/90 hover:border-emerald-300 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  The Impulse Commerce Engine
                </span>
                <span className="text-xs text-slate-400 font-mono font-bold">02 / VIRALITY</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                TikTok Shop Growth Engine
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Tap into the highest-converting commerce channel on earth. We seed your products across 500+ vetted creators, manage dedicated live studios, and scale GMV Max ads.
              </p>

              {/* Embedded Graphic Blueprint Preview (Click to Zoom Lightbox) */}
              <div 
                onClick={() => setLightboxState({
                  isOpen: true,
                  imageSrc: "/assets/graphics/tiktok-shop-flywheel-graphic.webp",
                  title: "TikTok Shop Creator & Live Commerce Flywheel",
                  subtitle: "Sample dispatch machine, live broadcasting, and Spark Ads amplification",
                  metrics: [
                    { label: "Creator Network", value: "4,200+ Active" },
                    { label: "Live GMV", value: "$480K / Month" },
                    { label: "Spark Ads ROAS", value: "4.85x Blended" },
                  ]
                })}
                className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 mb-6 cursor-pointer group/preview shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/assets/graphics/tiktok-shop-flywheel-graphic.webp"
                    alt="TikTok Shop Flywheel Blueprint"
                    fill
                    className="object-cover group-hover/preview:scale-102 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-slate-900/0 group-hover/preview:bg-slate-900/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover/preview:opacity-100 transition-opacity px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-md flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>Expand Blueprint</span>
                  </span>
                </div>
                <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">TikTok Shop Creator Flywheel v3.8</span>
                  <span className="text-teal-600 font-bold">Click to inspect</span>
                </div>
              </div>

              {/* Deliverable Checkpoints */}
              <ul className="space-y-2.5 mb-6 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Creator Seeding Machine:</strong> Dispatching 500+ samples monthly to top UGC creators.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Turnkey Live Streaming Studio:</strong> Dedicated hosts driving flash GMV bursts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Amazon MCF Fulfillment Bridge:</strong> Ship TikTok orders directly from FBA inventory.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Spark Ads & GMV Max:</strong> Algorithmic ad scaling on winning creator video hooks.</span>
                </li>
              </ul>
            </div>

            <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
              <div className="text-xs text-slate-500">
                Impact: <strong className="text-slate-900 font-bold">+340% Amazon Branded Search</strong>
              </div>
              <Link
                href="/tiktok-shop"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-sm transition-all"
              >
                <span>Explore TikTok Engine</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. NEW INTERACTIVE COMPONENT: ROI / VALUATION SIMULATOR      */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <RoiCalculator />
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* 5. INTERACTIVE BEFORE VS AFTER PERFORMANCE COMPARISON        */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <BeforeAfterSlider />
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* 6. INTERACTIVE 4-PHASE GROWTH ROADMAP                        */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <InteractiveRoadmap />
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* 7. REAL VERIFIED CASE STUDIES & METRICS GALLERY              */}
      {/* ============================================================ */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-200 bg-texture rounded-3xl my-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
              <span>Documented Empirical Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-2">
              Real Verified Client Dashboards
            </h2>
            <p className="text-slate-600 text-sm max-w-xl">
              We don&apos;t ask you to trust vague promises. Below are unfiltered Seller Central app captures, Ads Campaign Manager reports, and desktop sales records.
            </p>
          </motion.div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B00] hover:text-[#E05300] transition-colors"
          >
            <span>View All Detailed Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Interactive Case Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 relative z-10">
          {CASE_STUDIES.slice(0, 5).map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => setActiveCaseTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap border transition-all flex items-center gap-2 ${
                activeCaseTab === idx
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              <span>{cs.highlightMetric}</span>
              <span className="text-[11px] opacity-75">({cs.category})</span>
            </button>
          ))}
        </div>

        {/* Active Case Spotlight Card */}
        <motion.div 
          key={activeCase.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-xl shadow-slate-200/50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Screenshot Side (Click to open Lightbox) */}
            <div className="lg:col-span-6 relative">
              <div 
                onClick={() => setLightboxState({
                  isOpen: true,
                  imageSrc: activeCase.image,
                  title: activeCase.title,
                  subtitle: `${activeCase.category} — ${activeCase.growthTag}`,
                  metrics: activeCase.metrics.map(m => ({ label: m.label, value: m.value }))
                })}
                className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-md p-2 group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src={activeCase.image}
                    alt={activeCase.title}
                    fill
                    className="object-contain object-center group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-md flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>Inspect Full Dashboard</span>
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-sm">
                  <span className="text-slate-700 font-medium">Authentic Seller Central Capture</span>
                  <span className="text-emerald-700 font-bold">{activeCase.growthTag}</span>
                </div>
              </div>
            </div>

            {/* Content & Metrics Side */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold text-[#E05300] tracking-wider mb-2 block">
                  {activeCase.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-3">
                  {activeCase.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {activeCase.summary}
                </p>
              </div>

              {/* 4 Metric Pills */}
              <div className="grid grid-cols-2 gap-3">
                {activeCase.metrics.map((m) => (
                  <div key={m.label} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-[11px] text-slate-500 mb-0.5">{m.label}</div>
                    <div className="text-base sm:text-lg font-bold text-slate-900 font-display">
                      {m.value}
                    </div>
                    {m.change && (
                      <div className="text-[10px] text-emerald-700 font-bold mt-0.5">
                        {m.change}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quote if present */}
              {activeCase.quote && (
                <div className="p-4 rounded-xl bg-orange-50/60 border-l-3 border-[#FF6B00] text-xs text-slate-700 italic">
                  &ldquo;{activeCase.quote.text}&rdquo;
                  <div className="mt-2 text-slate-900 font-semibold not-italic">
                    — {activeCase.quote.author}, <span className="text-slate-500">{activeCase.quote.role}</span>
                  </div>
                </div>
              )}

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF6B00] hover:text-[#E05300] transition-colors"
                >
                  <span>Read Full Operational Breakdown</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* 8. MEET THE FOUNDER (Featuring Mian Hassan's Photo)          */}
      {/*    (SLIDE IN FROM LEFT & RIGHT, SUBTLE BG TEXTURE)           */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-200">
        <div className="relative rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-xl shadow-slate-200/40 overflow-hidden bg-texture">
          <div className="absolute inset-0 bg-white/92 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Founder Image: Slides in from Left (x: -70) */}
            <motion.div 
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-3xl overflow-hidden border-2 border-orange-200 shadow-xl group">
                <Image
                  src={FOUNDER_INFO.image}
                  alt={FOUNDER_INFO.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Name Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 text-center shadow-md">
                  <div className="text-sm font-bold text-slate-900 font-display">
                    {FOUNDER_INFO.name}
                  </div>
                  <div className="text-xs text-[#E05300] font-semibold">
                    {FOUNDER_INFO.role} & Principal Strategist
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Founder Bio & Ethos: Slides in from Right (x: +70) */}
            <motion.div 
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Executive Leadership</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-950 leading-tight">
                &ldquo;Most sellers are trapped in the commodity bidding war. We build defensible brand moats.&rdquo;
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {FOUNDER_INFO.bio}
              </p>

              <div className="space-y-2.5 pt-2">
                {FOUNDER_INFO.credentials.map((cred) => (
                  <div key={cred} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B00] flex-shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20BA5A] shadow-md transition-all flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>WhatsApp</span>
                </a>

                <Link
                  href="/about"
                  className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-all"
                >
                  Learn More About Rankmoor
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. INTERACTIVE 24-POINT AUDIT CALCULATOR                     */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <AuditCalculator />
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* 10. CLIENT TESTIMONIALS (INFINITE MARQUEE TICKER)           */}
      {/* ============================================================ */}
      <section className="w-full py-20 border-t border-slate-200 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-[#FF6B00] text-[#FF6B00]" />
            <span>Executive Feedback & Verified Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-2">
            Trusted by Eight-Figure Brand Founders
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Real feedback from marketplace founders and e-commerce directors who scaled past category plateaus with Rankmoor.
          </p>
        </div>

        {/* Continuous Infinite Marquee Track with Edge Fades */}
        <div className="relative w-full overflow-hidden whitespace-nowrap">
          <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-slow flex items-stretch gap-6">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <div
                key={`t-${idx}`}
                className="w-[360px] sm:w-[440px] flex-shrink-0 whitespace-normal p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-orange-300 hover:bg-white transition-all flex flex-col justify-between shadow-2xs hover:shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#FF6B00]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FF6B00]" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {t.salesProof}
                    </span>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900 font-display group-hover:text-[#FF6B00] transition-colors">
                      {t.author}
                    </div>
                    <div className="text-xs text-slate-500">
                      {t.role}, {t.company}
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. FREQUENTLY ASKED QUESTIONS (BG.WEBP BACKGROUND)          */}
      {/* ============================================================ */}
      <section className="relative w-full py-24 border-t border-slate-200 bg-texture overflow-hidden">
        {/* Soft translucent overlay for maximum legibility */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Knowledge & Clarity</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-sm max-w-lg mx-auto">
                Straightforward answers to the most common questions regarding our Amazon and TikTok Shop growth systems.
              </p>
            </div>

            {/* FAQ Category Pills */}
            <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
              <button
                onClick={() => setFaqCategory("all")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  faqCategory === "all"
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                All Questions
              </button>
              <button
                onClick={() => setFaqCategory("amazon")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  faqCategory === "amazon"
                    ? "bg-[#FF6B00] text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                Amazon FBA Growth
              </button>
              <button
                onClick={() => setFaqCategory("tiktok")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  faqCategory === "tiktok"
                    ? "bg-teal-600 text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                TikTok Shop & Live
              </button>
              <button
                onClick={() => setFaqCategory("terms")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  faqCategory === "terms"
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                Audits & Guarantees
              </button>
            </div>

            <div className="space-y-3.5">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.question}
                    className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-slate-900 font-bold text-base sm:text-lg hover:text-[#FF6B00] transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? "rotate-180 text-[#FF6B00]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
