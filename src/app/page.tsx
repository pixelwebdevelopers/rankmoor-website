"use client";

import React, { useState, useEffect } from "react";
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
  Video, 
  Award, 
  Layers, 
  Zap, 
  ChevronRight,
  Star, 
  ChevronDown, 
  Maximize2, 
  Search, 
  SlidersHorizontal, 
  Check, 
  X, 
  Target, 
  Clock, 
  ShieldAlert,
  Activity,
  Filter,
  Cpu
} from "lucide-react";
import { FaAmazon, FaTiktok } from "react-icons/fa6";
import { 
  COMPANY_INFO, 
  FOUNDER_INFO, 
  CASE_STUDIES, 
  TESTIMONIALS, 
  FAQS 
} from "@/data/content";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ImageLightbox } from "@/components/ImageLightbox";

export default function HomePage() {
  const [activeCaseTab, setActiveCaseTab] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqCategory, setFaqCategory] = useState<string>("all");
  const [heroMetricMode, setHeroMetricMode] = useState<"amazon" | "ppc" | "tiktok">("amazon");
  const [serviceTab, setServiceTab] = useState<"all" | "amazon" | "tiktok">("all");

  // Interactive Simulator State
  const [simRevenue, setSimRevenue] = useState<number>(75000);
  const [simAcos, setSimAcos] = useState<number>(34);

  // Keyword Laboratory State (Inspired by AdBox & AdsInitiatorz PPC Science)
  const [selectedKeywordPreset, setSelectedKeywordPreset] = useState<number>(0);
  const keywordPresets = [
    {
      term: "Electrolyte Hydration Powder",
      category: "Health & Supplements",
      searchVolume: "184,500 / mo",
      broadAcos: "38.5%",
      skagAcos: "15.4%",
      wastedSpendSaved: "$12,800 / mo",
      peakHours: "06:00 PM – 11:30 PM EST",
      negativesShielded: "142 Junk Queries",
    },
    {
      term: "Ergonomic Memory Foam Chair",
      category: "Home & Office",
      searchVolume: "96,200 / mo",
      broadAcos: "44.0%",
      skagAcos: "16.8%",
      wastedSpendSaved: "$18,400 / mo",
      peakHours: "09:00 AM – 03:00 PM EST",
      negativesShielded: "98 Irrelevant Terms",
    },
    {
      term: "Organic Ceremonial Matcha",
      category: "Gourmet Beverage",
      searchVolume: "142,000 / mo",
      broadAcos: "36.2%",
      skagAcos: "14.9%",
      wastedSpendSaved: "$9,600 / mo",
      peakHours: "07:00 AM – 12:00 PM EST",
      negativesShielded: "86 Broad Queries",
    },
    {
      term: "Cordless Stick Vacuum Cleaner",
      category: "Home Appliances",
      searchVolume: "310,000 / mo",
      broadAcos: "48.5%",
      skagAcos: "17.2%",
      wastedSpendSaved: "$28,500 / mo",
      peakHours: "07:00 PM – 11:00 PM EST",
      negativesShielded: "215 Competitor Misspells",
    },
  ];

  // 5-Point Store Health Scanner State
  const [scannerChecks, setScannerChecks] = useState<boolean[]>([true, true, false, false, false]);
  const toggleScannerCheck = (index: number) => {
    const updated = [...scannerChecks];
    updated[index] = !updated[index];
    setScannerChecks(updated);
  };
  const checkedCount = scannerChecks.filter(Boolean).length;
  const storeHealthScore = Math.round((checkedCount / 5) * 100);

  // Floating Live Activity Toast State
  const [showActivityToast, setShowActivityToast] = useState<boolean>(true);
  const [activityToastIndex, setActivityToastIndex] = useState<number>(0);
  const liveActivities = [
    { text: "Verified: $7.37M Amazon PPC portfolio running at 16.00% ACOS", tag: "PPC Science" },
    { text: "Live: Amazon Cosmo 2.0 reverse-ASIN harvest deployed", tag: "SEO Engine" },
    { text: "Delivered: 482,714 units fulfilled with zero stockouts", tag: "FBA Scale" },
    { text: "TikTok Shop: 500+ Creator seeding machine active", tag: "Creator GMV" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivityToastIndex((prev) => (prev + 1) % liveActivities.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [liveActivities.length]);

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

  const activeCase = CASE_STUDIES[activeCaseTab] || CASE_STUDIES[0];

  // Simulator calculations
  const projectedRevenueGain = Math.round(simRevenue * 0.95);
  const projectedMonthlyRevenue = simRevenue + projectedRevenueGain;
  const currentAdSpend = simRevenue * (simAcos / 100);
  const targetAcos = 16.0;
  const adWasteEliminated = Math.round(currentAdSpend * Math.max(0, (simAcos - targetAcos) / simAcos) * 0.75);
  const annualEbitdaImpact = Math.round((projectedRevenueGain * 0.28 + adWasteEliminated) * 12);

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

      {/* Floating Live Activity Toast (Bottom-Left) */}
      <AnimatePresence>
        {showActivityToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-md border border-slate-200/90 py-2.5 px-4 rounded-2xl shadow-xl shadow-slate-900/10 max-w-sm"
          >
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                {liveActivities[activityToastIndex].tag}
              </div>
              <div className="text-xs font-semibold text-slate-800 line-clamp-1">
                {liveActivities[activityToastIndex].text}
              </div>
            </div>
            <button
              onClick={() => setShowActivityToast(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-md transition-colors"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================================================ */}
      {/* 1. HERO SECTION (PRESERVED AS CLIENT LIKED IT)               */}
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
              {/* Announcement Pill with Continuous Radar Pulse */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/90 shadow-2xs text-[11px] font-semibold text-slate-800"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B00]" />
                </span>
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

              {/* Action Buttons with Continuous Shimmer */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                <Link
                  href="/contact"
                  className="relative overflow-hidden w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 transition-all duration-200 flex items-center justify-center gap-2 group active:scale-98"
                >
                  <span className="absolute inset-0 animate-shimmer pointer-events-none opacity-40" />
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

        {/* DESKTOP ONLY: Flush-Right Absolute Image with Floating Continuous Bobbing Badges */}
        <motion.div 
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:flex lg:absolute lg:right-0 lg:top-24 lg:bottom-0 w-[60%] xl:w-[64%] h-[calc(100%-96px)] z-10 items-end justify-end pointer-events-none"
        >
          {/* Continuous Left-Side Blend Overlay matching #FCF5EB */}
          <div className="absolute inset-y-0 left-0 w-48 xl:w-72 bg-gradient-to-r from-[#FCF5EB] via-[#FCF5EB]/70 to-transparent z-10 pointer-events-none" />

          {/* Graphic Container */}
          <div className="relative w-full h-full">
            <Image
              src="/assets/hero/hero-client-graphic.webp"
              alt="Rankmoor Amazon & TikTok Shop Category Dominance"
              fill
              priority
              className="object-contain object-right-bottom lg:object-cover lg:object-right-bottom"
            />
          </div>

          {/* Floating Verified Badge 1: Top-Right ($20.23M Sales) - CONTINUOUS FLOAT ANIMATION */}
          <div className="pointer-events-auto absolute top-2 sm:top-4 right-4 sm:right-8 bg-white/95 backdrop-blur-md border border-slate-200/90 p-3 sm:p-3.5 rounded-2xl shadow-xl shadow-slate-900/10 flex items-center gap-3 z-20 animate-float">
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
          </div>

          {/* Floating Verified Badge 2: Bottom-Right (16.0% ACOS) - CONTINUOUS REVERSE FLOAT */}
          <div className="pointer-events-auto absolute bottom-4 sm:bottom-6 right-4 sm:right-10 bg-white/95 backdrop-blur-md border border-slate-200/90 p-3 sm:p-3.5 rounded-2xl shadow-xl shadow-slate-900/10 flex items-center gap-3 z-20 animate-float-delayed">
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
          </div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* 2. AUTHENTIC PARTNER & CREDENTIALS BANNER                    */}
      {/* ============================================================ */}
      <section className="border-b border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-slate-400 font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Verified Governance & Agency Seats</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5">
                <FaAmazon className="w-4 h-4 text-[#FF9900]" />
                <span>Amazon Ads Verified Partner</span>
              </span>
              <span className="hidden sm:inline text-slate-200">|</span>
              <span className="flex items-center gap-1.5">
                <FaTiktok className="w-4 h-4 text-[#000000]" />
                <span>TikTok Shop Creator Network</span>
              </span>
              <span className="hidden sm:inline text-slate-200">|</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Brand Registry 2.0</span>
              </span>
              <span className="hidden sm:inline text-slate-200">|</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-600" />
                <span>USPTO & Companies House</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. THE BRUTAL REALITY: PAIN POINTS WE SOLVE (WITH 3D ASSETS) */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#F4F6FA] border-b border-slate-200/90 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>The Marketplace Reality</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950">
              Most Brands Don&apos;t Fail from Bad Products. <br className="hidden sm:inline" />
              <span className="text-[#FF6B00]">They Bleed Out from Fragile Systems.</span>
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              If your store feels trapped between soaring ad costs and razor-thin margins, you are experiencing one of these three profit leaks:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Trap 1: The PPC Cash Bleed (Features 3D Transparent Floating Coin Asset) */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-red-300 hover:shadow-xl transition-all group relative overflow-hidden">
              <div>
                {/* 3D Transparent Floating Asset */}
                <div className="relative w-full h-36 mb-4 flex items-center justify-center">
                  <div className="relative w-32 h-32 animate-float">
                    <Image
                      src="/assets/graphics/ppc-ad-leak.webp"
                      alt="PPC Ad Budget Leak Warning"
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">01 / PPC LOSS</span>
                </div>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-2">
                  The Runaway ACOS Trap
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Bidding high on broad keywords without day-parting or negative harvesting. Ad spend goes up, but profit evaporates into Amazon&apos;s pockets.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">The Rankmoor Fix:</span>
                <span className="font-bold text-emerald-600">Pinpointed 16% Target ACOS</span>
              </div>
            </div>

            {/* Trap 2: Commodity Listing Fatigue (Features 3D Transparent Exploded Bottle Asset) */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-amber-300 hover:shadow-xl transition-all group relative overflow-hidden">
              <div>
                {/* 3D Transparent Floating Asset */}
                <div className="relative w-full h-36 mb-4 flex items-center justify-center">
                  <div className="relative w-32 h-32 animate-float-delayed">
                    <Image
                      src="/assets/graphics/listing-conversion-3d.webp"
                      alt="3D Listing Conversion Architecture"
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">02 / CVR BOUNCE</span>
                </div>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-2">
                  The Low-Converting Listing
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Flat 2D renders, robotic keyword stuffing, and generic bullet points. 80% of clicks bounce to competitors who look like true luxury leaders.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">The Rankmoor Fix:</span>
                <span className="font-bold text-[#FF6B00]">3D Studio A+ & Cosmo SEO</span>
              </div>
            </div>

            {/* Trap 3: TikTok Disconnect (Features 3D Transparent Smartphone Viral Stream Asset) */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-teal-300 hover:shadow-xl transition-all group relative overflow-hidden">
              <div>
                {/* 3D Transparent Floating Asset */}
                <div className="relative w-full h-36 mb-4 flex items-center justify-center">
                  <div className="relative w-32 h-32 animate-float">
                    <Image
                      src="/assets/graphics/tiktok-viral-commerce.webp"
                      alt="TikTok Shop Live Shopping Stream"
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded">03 / MISSED SCALE</span>
                </div>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-2">
                  The TikTok Shop Blindspot
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Hearing about viral sales surges, but lacking the 500+ creator network, live studio infrastructure, or Amazon MCF bridge to execute profitably.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">The Rankmoor Fix:</span>
                <span className="font-bold text-teal-600">Turnkey Creator Engine</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. WHO WE PARTNER WITH VS WHO THIS IS NOT FOR (QUALIFIER)    */}
      {/* ============================================================ */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Filter className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Partnership Alignment</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950">
            Are We The Right Growth Partner For You?
          </h2>
          <p className="mt-1 text-slate-600 text-sm">
            We are a high-conviction growth house, not a volume agency. We protect our client ratios to guarantee eight-figure outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Box 1: Who We Work With */}
          <div className="p-8 sm:p-10 rounded-3xl bg-emerald-50/40 border-2 border-emerald-200/80 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-slate-900">
                  Ideal Partner Brands
                </h3>
                <span className="text-xs text-emerald-800 font-semibold">Engineered For Exponential Scale</span>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Generating <strong>$15,000 to $500,000+/month</strong> on Amazon or seeking turnkey TikTok Shop expansion.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Founders committed to building long-term <strong>brand moats</strong> through high-end 3D creatives and superior products.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Brands seeking <strong>senior strategist oversight</strong> and direct executive WhatsApp communication, not junior trainees.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Sellers ready to slash runaway broad ad spend and lock in a <strong>sub-18% ACOS baseline</strong>.</span>
              </li>
            </ul>
          </div>

          {/* Box 2: Who We Are NOT For */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border-2 border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-300 text-slate-700 flex items-center justify-center font-bold">
                <X className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-slate-900">
                  Who This Is NOT For
                </h3>
                <span className="text-xs text-slate-500 font-semibold">Save Both Of Our Time</span>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <span>Drop-shippers, counterfeit re-sellers, or get-rich-quick commodity product flippers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <span>Sellers looking for $150 Fiverr keyword dumps or black-hat review manipulation schemes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <span>Catalogs with less than 20% gross margins that cannot support scalable PPC advertising.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <span>Businesses unwilling to register trademarks or maintain Amazon Brand Registry compliance.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. INTERACTIVE PPC SEARCH HARVESTING LABORATORY              */}
      {/* ============================================================ */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        
        {/* Glow ambient background lights */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-[#FF8533] text-xs font-bold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>PPC Science Laboratory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white">
              See How We Cut 40%+ In Wasted Ad Spend
            </h2>
            <p className="mt-1 text-slate-400 text-sm">
              Select a sample category below to inspect our algorithmic day-parting, single-keyword ad groups (SKAG), and negative harvesting shields.
            </p>
          </div>

          {/* Interactive Preset Selector Buttons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {keywordPresets.map((kp, idx) => (
              <button
                key={kp.term}
                onClick={() => setSelectedKeywordPreset(idx)}
                className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                  selectedKeywordPreset === idx
                    ? "bg-slate-800 border-[#FF6B00] shadow-lg shadow-orange-500/20"
                    : "bg-slate-800/40 border-slate-700/80 hover:bg-slate-800/80 hover:border-slate-600 text-slate-400"
                }`}
              >
                <div className="text-[10px] font-bold uppercase text-slate-400 mb-0.5">{kp.category}</div>
                <div className="text-xs sm:text-sm font-bold text-white line-clamp-1">{kp.term}</div>
              </button>
            ))}
          </div>

          {/* Live Diagnostic Display Card */}
          <div className="rounded-3xl bg-slate-800/90 border border-slate-700 p-6 sm:p-10 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-700 gap-4">
              <div>
                <span className="text-[11px] font-mono text-[#FF8533] uppercase tracking-wider font-bold">
                  Target ASIN Query Isolation
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  &ldquo;{keywordPresets[selectedKeywordPreset].term}&rdquo;
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Rankmoor SKAG Mode: ACTIVE</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-8">
              
              {/* Metric 1 */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/80">
                <div className="text-[11px] text-slate-400 mb-1">Monthly Search Volume</div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                  {keywordPresets[selectedKeywordPreset].searchVolume}
                </div>
                <div className="text-[10px] text-slate-400 mt-1">High Buying Intent</div>
              </div>

              {/* Metric 2 */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/80">
                <div className="text-[11px] text-slate-400 mb-1">Auto-Broad ACOS vs SKAG</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg line-through text-red-400 font-mono">
                    {keywordPresets[selectedKeywordPreset].broadAcos}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                    {keywordPresets[selectedKeywordPreset].skagAcos}
                  </span>
                </div>
                <div className="text-[10px] text-emerald-400 font-bold mt-1">-58% Waste Elimination</div>
              </div>

              {/* Metric 3 */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/80">
                <div className="text-[11px] text-slate-400 mb-1">Estimated Monthly Savings</div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#FF8533]">
                  {keywordPresets[selectedKeywordPreset].wastedSpendSaved}
                </div>
                <div className="text-[10px] text-slate-400 mt-1">Recovered Gross Margin</div>
              </div>

              {/* Metric 4 */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/80">
                <div className="text-[11px] text-slate-400 mb-1">Algorithmic Day-Parting</div>
                <div className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                  {keywordPresets[selectedKeywordPreset].peakHours}
                </div>
                <div className="text-[10px] text-slate-400 mt-1 font-mono">
                  {keywordPresets[selectedKeywordPreset].negativesShielded}
                </div>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Want this exact audit conducted on your brand&apos;s Seller Central ad console?
              </span>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-white hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
              >
                <span>Audit My Search Terms (Free)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CORE SERVICES ARCHITECTURE (WITH BESPOKE BLUEPRINT IMAGES) */}
      {/* ============================================================ */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Engineered Systems</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950">
              The Rankmoor Growth Architecture
            </h2>
            <p className="mt-1 text-slate-600 text-sm max-w-xl">
              Specialized infrastructure engineered to turn products into defensible, high-margin category leaders.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setServiceTab("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                serviceTab === "all" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All Pillars
            </button>
            <button
              onClick={() => setServiceTab("amazon")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                serviceTab === "amazon" ? "bg-[#FF6B00] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Amazon FBA
            </button>
            <button
              onClick={() => setServiceTab("tiktok")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                serviceTab === "tiktok" ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              TikTok Shop
            </button>
          </div>
        </div>

        {/* 4 Modular Pillars with High-Resolution Embedded Graphic Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Pillar 1: Amazon PPC & DSP Advertising */}
          {(serviceTab === "all" || serviceTab === "amazon") && (
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    Target: 16.00% ACOS
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900 mb-2 group-hover:text-[#FF6B00] transition-colors">
                  Amazon PPC & Programmatic DSP Science
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Algorithmic bid management, hourly day-parting, and Single-Keyword Ad Groups (SKAG) designed to cut wasted broad spend while securing Top-of-Search positions.
                </p>

                {/* Embedded Graphic Blueprint Preview (Click to Zoom Lightbox) */}
                <div 
                  onClick={() => setLightboxState({
                    isOpen: true,
                    imageSrc: "/assets/services/amazon/amazon-ppc-dsp.webp",
                    title: "Amazon PPC & Programmatic DSP Architecture",
                    subtitle: "Single-Keyword Ad Groups (SKAG) with 16.0% ACOS Day-Parting",
                    metrics: [
                      { label: "Target ACOS", value: "16.00%" },
                      { label: "Verified Sales", value: "$7.37M" },
                      { label: "Waste Cut", value: "-58%" },
                    ]
                  })}
                  className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 mb-5 cursor-zoom-in group/img aspect-[16/10] shadow-2xs hover:shadow-md transition-shadow"
                >
                  <Image
                    src="/assets/services/amazon/amazon-ppc-dsp.webp"
                    alt="Amazon PPC Architecture Blueprint"
                    fill
                    className="object-cover group-hover/img:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover/img:bg-slate-900/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/img:opacity-100 transition-opacity px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-md flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>Expand Architecture Blueprint</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                    <span>Hourly day-parting targeting peak checkout hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                    <span>Continuous search term harvesting & negative shields</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                    <span>Sponsored Brand Video & DSP retargeting</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">Documented: $7.37M Sales</span>
                <Link
                  href="/amazon"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-[#E05300]"
                >
                  <span>Explore PPC Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Pillar 2: Cosmo & A9 Listing SEO */}
          {(serviceTab === "all" || serviceTab === "amazon") && (
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Search className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-orange-50 text-[#E05300] text-xs font-bold border border-orange-200">
                    +140% Keyword Velocity
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900 mb-2 group-hover:text-[#FF6B00] transition-colors">
                  Cosmo & A9 Algorithmic Listing Architecture
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Reverse-ASIN competitor scraping coupled with semantic intent mapping for Amazon&apos;s latest Cosmo algorithm, turning listings into organic category anchors.
                </p>

                {/* Embedded Graphic Blueprint Preview (Click to Zoom Lightbox) */}
                <div 
                  onClick={() => setLightboxState({
                    isOpen: true,
                    imageSrc: "/assets/services/amazon/amazon-cosmo-seo.webp",
                    title: "Cosmo & A9 Algorithmic Keyword Architecture",
                    subtitle: "Reverse-ASIN Semantic Root Mapping for Page 1 Best Sellers",
                    metrics: [
                      { label: "Organic Top-10", value: "1,420+ Keywords" },
                      { label: "Page 1 Share", value: "84.2%" },
                    ]
                  })}
                  className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 mb-5 cursor-zoom-in group/img aspect-[16/10] shadow-2xs hover:shadow-md transition-shadow"
                >
                  <Image
                    src="/assets/services/amazon/amazon-cosmo-seo.webp"
                    alt="Cosmo & A9 SEO Blueprint"
                    fill
                    className="object-cover group-hover/img:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover/img:bg-slate-900/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/img:opacity-100 transition-opacity px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-md flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>Expand Architecture Blueprint</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                    <span>Multi-tiered reverse-ASIN keyword indexing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                    <span>Mobile-first title & bullet psychology for 3-second scan</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                    <span>Backend search term optimization without index reset</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">Organic Rank: Top-3 Dominance</span>
                <Link
                  href="/amazon"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-[#E05300]"
                >
                  <span>Explore SEO Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Pillar 3: Studio 3D Creatives & Premium A+ */}
          {(serviceTab === "all" || serviceTab === "amazon") && (
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    +28% to +65% CVR Lift
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900 mb-2 group-hover:text-[#FF6B00] transition-colors">
                  Studio 3D Creatives & Premium A+ Storefronts
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Photorealistic 3D product renders, microscopic exploded views, cross-selling comparison modules, and full-bleed brand stores that command high pricing.
                </p>

                {/* Embedded Graphic Blueprint Preview (Click to Zoom Lightbox) */}
                <div 
                  onClick={() => setLightboxState({
                    isOpen: true,
                    imageSrc: "/assets/services/amazon/amazon-3d-aplus.webp",
                    title: "Studio 3D Creatives & Premium A+ Storefronts",
                    subtitle: "Photorealistic CAD Exploded Renders & Luxury Comparison Modules",
                    metrics: [
                      { label: "Conversion Lift", value: "+42.5%" },
                      { label: "Main Image CTR", value: "3.8% (Top 1%)" },
                    ]
                  })}
                  className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 mb-5 cursor-zoom-in group/img aspect-[16/10] shadow-2xs hover:shadow-md transition-shadow"
                >
                  <Image
                    src="/assets/services/amazon/amazon-3d-aplus.webp"
                    alt="3D A+ Creative Studio Blueprint"
                    fill
                    className="object-cover group-hover/img:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover/img:bg-slate-900/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/img:opacity-100 transition-opacity px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-md flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>Expand Architecture Blueprint</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                    <span>3D CAD modeling & sensory ingredient renders</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                    <span>Premium A+ modules & multi-SKU comparison charts</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                    <span>Amazon Manage Your Experiments statistical A/B tests</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">Conversion: Up to 24.6% CVR</span>
                <Link
                  href="/amazon"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-[#E05300]"
                >
                  <span>View Creative Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Pillar 4: TikTok Shop Creator Engine */}
          {(serviceTab === "all" || serviceTab === "tiktok") && (
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 hover:border-teal-300 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Video className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-teal-50 text-teal-700 text-xs font-bold border border-teal-200">
                    4,200+ Active Creators
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                  TikTok Shop Creator Seeding & Live GMV Engine
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Monthly seeding to 500+ vetted UGC creators, dedicated TikTok Live shopping hosts, Spark Ads scaling, and automated Amazon MCF inventory synchronization.
                </p>

                {/* Embedded Graphic Blueprint Preview (Click to Zoom Lightbox) */}
                <div 
                  onClick={() => setLightboxState({
                    isOpen: true,
                    imageSrc: "/assets/services/tiktok/tiktok-creator-machine.webp",
                    title: "TikTok Shop Creator Seeding & Live GMV Engine",
                    subtitle: "500+ Monthly Creator Outreach Machine with Amazon MCF FBA Bridge",
                    metrics: [
                      { label: "Active Creators", value: "4,200+" },
                      { label: "Monthly Tagged Videos", value: "120-300+" },
                      { label: "Live GMV", value: "$480K / Mo" },
                    ]
                  })}
                  className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 mb-5 cursor-zoom-in group/img aspect-[16/10] shadow-2xs hover:shadow-md transition-shadow"
                >
                  <Image
                    src="/assets/services/tiktok/tiktok-creator-machine.webp"
                    alt="TikTok Shop Flywheel Blueprint"
                    fill
                    className="object-cover group-hover/img:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover/img:bg-slate-900/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/img:opacity-100 transition-opacity px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-md flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-teal-600" />
                      <span>Expand Architecture Blueprint</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span>Targeted seeding producing 120-300+ monthly tagged videos</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span>Amazon Multi-Channel Fulfillment (MCF) blank-box API</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span>Spark Ads & GMV Max paid amplification</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">Live GMV: $480K / Month</span>
                <Link
                  href="/tiktok-shop"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-700"
                >
                  <span>Explore TikTok Engine</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. VERIFIED CLIENT DASHBOARDS (4 CORE MARKETPLACE CASES)     */}
      {/* ============================================================ */}
      <section className="py-20 border-t border-slate-200 bg-[#FAF9F6] bg-texture relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FAF9F6]/85 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
                <span>Documented Performance Data</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950">
                Verified Seller Central Records
              </h2>
              <p className="mt-1 text-slate-600 text-sm max-w-xl">
                Unfiltered Seller Central app captures, Ads Campaign Manager reports, and desktop sales records.
              </p>
            </div>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF6B00] hover:text-[#E05300]"
            >
              <span>View All Detailed Case Breakdowns</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Case Navigation Tabs (4 Core Verified Cases Only) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8">
            {CASE_STUDIES.map((cs, idx) => (
              <button
                key={cs.id}
                onClick={() => setActiveCaseTab(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap border transition-all cursor-pointer ${
                  activeCaseTab === idx
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
              >
                <span>{cs.highlightMetric}</span>
                <span className="text-[11px] opacity-75 ml-1.5">({cs.category})</span>
              </button>
            ))}
          </div>

          {/* Active Case Card */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-lg shadow-slate-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Visual Side */}
              <div className="lg:col-span-6">
                <div 
                  onClick={() => setLightboxState({
                    isOpen: true,
                    imageSrc: activeCase.image,
                    title: activeCase.title,
                    subtitle: `${activeCase.category} — ${activeCase.growthTag}`,
                    metrics: activeCase.metrics.map(m => ({ label: m.label, value: m.value }))
                  })}
                  className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm p-2 group cursor-pointer"
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
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-2xs">
                    <span className="text-slate-700 font-medium">Authentic Seller Central Capture</span>
                    <span className="text-emerald-700 font-bold">{activeCase.growthTag}</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <span className="text-xs uppercase font-bold text-[#E05300] tracking-wider mb-1 block">
                    {activeCase.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-2">
                    {activeCase.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {activeCase.summary}
                  </p>
                </div>

                {/* 4 Metric Pills */}
                <div className="grid grid-cols-2 gap-3">
                  {activeCase.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
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

                {/* Strategy Checkpoints */}
                <div className="space-y-1.5 text-xs text-slate-700 pt-1">
                  {activeCase.strategy.slice(0, 3).map((st, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                      <span>{st}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF6B00] hover:text-[#E05300]"
                  >
                    <span>Read Full Operational Breakdown</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. WHY RANKMOOR? (FEATURING 3D BRAND FORTRESS ASSET)         */}
      {/* ============================================================ */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider mb-3">
              <Target className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>The Agency Moat</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950">
              Why Eight-Figure Brands Choose Rankmoor
            </h2>
            <p className="mt-1 text-slate-600 text-sm">
              How we compare against cheap individual freelancers and bloated legacy agencies.
            </p>
          </div>

          {/* 3D Transparent Floating Fortress Asset */}
          <div className="w-28 h-28 relative flex-shrink-0 hidden md:block animate-float">
            <Image
              src="/assets/graphics/brand-moat-fortress.webp"
              alt="Rankmoor Brand Moat Fortress"
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* 3-Column Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[680px] rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 p-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              <div className="col-span-5">Execution Capability</div>
              <div className="col-span-3 text-center text-slate-400">Typical Freelancer</div>
              <div className="col-span-4 text-center text-[#FF6B00] bg-orange-50 py-1.5 -my-1.5 rounded-lg border border-orange-200 font-extrabold">
                Rankmoor Growth House
              </div>
            </div>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              
              {/* Row 1 */}
              <div className="grid grid-cols-12 p-4 items-center">
                <div className="col-span-5 font-semibold text-slate-900">
                  Leadership & Strategy
                  <div className="text-[11px] text-slate-400 font-normal">Who actually directs your campaigns</div>
                </div>
                <div className="col-span-3 text-center text-slate-500 flex items-center justify-center gap-1.5">
                  <X className="w-4 h-4 text-red-500" />
                  <span>One person juggling 20 gigs</span>
                </div>
                <div className="col-span-4 text-center font-bold text-slate-950 flex items-center justify-center gap-1.5 bg-orange-50/40 py-2 -my-2 rounded">
                  <Check className="w-4 h-4 text-[#FF6B00]" />
                  <span>Senior E-Com Leads & Mian Hassan</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-12 p-4 items-center">
                <div className="col-span-5 font-semibold text-slate-900">
                  PPC Day-Parting & Target ACOS
                  <div className="text-[11px] text-slate-400 font-normal">Hourly algorithmic bids vs. automated rules</div>
                </div>
                <div className="col-span-3 text-center text-slate-500 flex items-center justify-center gap-1.5">
                  <X className="w-4 h-4 text-red-500" />
                  <span>Basic auto-campaigns (30%+ ACOS)</span>
                </div>
                <div className="col-span-4 text-center font-bold text-slate-950 flex items-center justify-center gap-1.5 bg-orange-50/40 py-2 -my-2 rounded">
                  <Check className="w-4 h-4 text-[#FF6B00]" />
                  <span>Documented 16.0% ACOS on $7M+</span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-12 p-4 items-center">
                <div className="col-span-5 font-semibold text-slate-900">
                  Studio 3D Creatives & Premium A+
                  <div className="text-[11px] text-slate-400 font-normal">CAD rendering, explode views, storefronts</div>
                </div>
                <div className="col-span-3 text-center text-slate-500 flex items-center justify-center gap-1.5">
                  <X className="w-4 h-4 text-red-500" />
                  <span>Canva / stock photo collages</span>
                </div>
                <div className="col-span-4 text-center font-bold text-slate-950 flex items-center justify-center gap-1.5 bg-orange-50/40 py-2 -my-2 rounded">
                  <Check className="w-4 h-4 text-[#FF6B00]" />
                  <span>In-House 3D Studio & Brand Stores</span>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-12 p-4 items-center">
                <div className="col-span-5 font-semibold text-slate-900">
                  TikTok Shop Creator Network
                  <div className="text-[11px] text-slate-400 font-normal">Vetted creator seeding & Amazon MCF bridge</div>
                </div>
                <div className="col-span-3 text-center text-slate-500 flex items-center justify-center gap-1.5">
                  <X className="w-4 h-4 text-red-500" />
                  <span>Zero creator infrastructure</span>
                </div>
                <div className="col-span-4 text-center font-bold text-slate-950 flex items-center justify-center gap-1.5 bg-orange-50/40 py-2 -my-2 rounded">
                  <Check className="w-4 h-4 text-[#FF6B00]" />
                  <span>4,200+ Creators & Live Studios</span>
                </div>
              </div>

              {/* Row 5 */}
              <div className="grid grid-cols-12 p-4 items-center">
                <div className="col-span-5 font-semibold text-slate-900">
                  Communication & Speed
                  <div className="text-[11px] text-slate-400 font-normal">How fast problems get solved</div>
                </div>
                <div className="col-span-3 text-center text-slate-500 flex items-center justify-center gap-1.5">
                  <X className="w-4 h-4 text-red-500" />
                  <span>Disappears or delays for days</span>
                </div>
                <div className="col-span-4 text-center font-bold text-slate-950 flex items-center justify-center gap-1.5 bg-orange-50/40 py-2 -my-2 rounded">
                  <Check className="w-4 h-4 text-[#FF6B00]" />
                  <span>Dedicated Private WhatsApp Channel</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. INTERACTIVE 5-POINT "BRAND MOAT" STORE HEALTH SCANNER     */}
      {/* ============================================================ */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-lg shadow-slate-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Interactive Checkpoints */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider mb-2">
                    <Activity className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Interactive Diagnostic Check</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                    How Defensible Is Your Marketplace Moat?
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Click each capability your brand currently has implemented to calculate your store&apos;s Dominance Score.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {[
                    "Amazon Cosmo 2.0 Semantic Reverse-ASIN Keyword Indexing",
                    "Photorealistic 3D CAD Exploded Renders & Premium A+ Storefront",
                    "Hourly Day-Parted PPC Bidding with Negative Query Shields",
                    "TikTok Shop 500+ Creator Machine with Amazon MCF Auto-Sync",
                    "BuyBox 24/7 Monitoring & Project Zero Listing Hijacker Eviction"
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => toggleScannerCheck(idx)}
                      className={`w-full p-3.5 rounded-xl text-left border flex items-center justify-between transition-all cursor-pointer ${
                        scannerChecks[idx]
                          ? "bg-emerald-50/70 border-emerald-300 text-slate-900 font-semibold"
                          : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-3 text-xs sm:text-sm">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          scannerChecks[idx]
                            ? "bg-emerald-600 border-emerald-600 text-white"
                            : "border-slate-300 bg-white"
                        }`}>
                          {scannerChecks[idx] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span>{item}</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        scannerChecks[idx] ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-600"
                      }`}>
                        {scannerChecks[idx] ? "+20% Moat" : "Missing"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Live Calculated Score Ring & Diagnosis */}
              <div className="lg:col-span-5 bg-slate-900 text-white p-7 sm:p-9 rounded-2xl flex flex-col items-center text-center justify-between">
                <span className="text-[11px] font-mono text-[#FF8533] uppercase tracking-wider font-bold">
                  Calculated Brand Moat Readiness
                </span>

                {/* Score Dial */}
                <div className="my-6 relative flex items-center justify-center">
                  <div className="text-5xl sm:text-6xl font-display font-extrabold text-white">
                    {storeHealthScore}%
                  </div>
                  <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[#FF6B00]/40 animate-spin-slow pointer-events-none" />
                </div>

                <div className="space-y-2 mb-6">
                  <div className="text-sm font-bold text-white">
                    {storeHealthScore <= 40 && "Fragile Commodity Status"}
                    {storeHealthScore > 40 && storeHealthScore <= 80 && "Growth Stage: Margin Bleed Detected"}
                    {storeHealthScore > 80 && "Institutional Category Dominance"}
                  </div>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                    {storeHealthScore <= 40 && "Your catalog is vulnerable to aggressive competitor conquesting and runaway ACOS bleed."}
                    {storeHealthScore > 40 && storeHealthScore <= 80 && "You have solid traction, but are leaking 20-35% in profit margin to unoptimized broad PPC and flat visuals."}
                    {storeHealthScore > 80 && "Your brand possesses institutional-grade infrastructure with full multi-channel defenses."}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-white hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-[#FF6B00]" />
                  <span>Fix Missing {5 - checkedCount} Moat Pillars</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. THE 90-DAY BLUEPRINT (WITH ARCHITECTURE PREVIEW IMAGES)  */}
      {/* ============================================================ */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-[#FF8533] text-xs font-bold uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Execution Blueprint</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white">
              The 90-Day Roadmap to Category Dominance
            </h2>
            <p className="mt-1 text-slate-400 text-sm">
              No guesswork. A structured four-stage system engineered to halt margin bleed and compound organic momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Stage 1 */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between hover:border-slate-600 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-bold text-[#FF6B00]">01</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-700 text-slate-300">
                    Days 1 - 7
                  </span>
                </div>

                {/* Stage 1 Image Preview */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 border border-slate-700">
                  <Image
                    src="/assets/graphics/marketplace-audit-blueprint.webp"
                    alt="Stage 1 Forensic Audit Blueprint"
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-base font-display font-bold text-white mb-2">
                  Forensic 24-Point Audit
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  Exhaustive reverse-ASIN competitor harvest, purging unproductive broad-match ad spend, and identifying hidden buy-box leaks.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-emerald-400 pt-3 border-t border-slate-700">
                Deliverable: 15-Page Action Roadmap
              </div>
            </div>

            {/* Stage 2 */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between hover:border-slate-600 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-bold text-[#FF6B00]">02</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-700 text-slate-300">
                    Days 8 - 25
                  </span>
                </div>

                {/* Stage 2 Image Preview */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 border border-slate-700">
                  <Image
                    src="/assets/services/ebc_creative_showcase_1790702284614-DM9GOURk.jpg"
                    alt="Stage 2 3D Creatives & Storefronts"
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-base font-display font-bold text-white mb-2">
                  Cosmo SEO & 3D Creatives
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  Deploying Cosmo semantic backend search terms and studio-grade 3D renders with comparison modules to immediately lift CVR.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-emerald-400 pt-3 border-t border-slate-700">
                Deliverable: +35% Expected Conversion Lift
              </div>
            </div>

            {/* Stage 3 */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between hover:border-slate-600 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-bold text-[#FF6B00]">03</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-700 text-slate-300">
                    Days 26 - 60
                  </span>
                </div>

                {/* Stage 3 Image Preview */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 border border-slate-700">
                  <Image
                    src="/assets/cases/amazon-ppc-7m-sales-16acos.webp"
                    alt="Stage 3 PPC Scaling Console"
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-base font-display font-bold text-white mb-2">
                  Algorithmic PPC Scaling
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  Activating Single-Keyword Ad Groups (SKAG) with hourly day-parting to slash ACOS while scaling monthly revenue volume.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-emerald-400 pt-3 border-t border-slate-700">
                Deliverable: Sub-18% Target ACOS
              </div>
            </div>

            {/* Stage 4 */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between hover:border-slate-600 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-bold text-[#FF6B00]">04</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-700 text-slate-300">
                    Days 60+
                  </span>
                </div>

                {/* Stage 4 Image Preview */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 border border-slate-700">
                  <Image
                    src="/assets/graphics/tiktok-shop-flywheel-graphic.webp"
                    alt="Stage 4 TikTok Shop Flywheel"
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-base font-display font-bold text-white mb-2">
                  TikTok Shop Flywheel
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  Seeding products to 500+ creators, running dedicated live streams, and syncing inventory straight from Amazon FBA via MCF.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-emerald-400 pt-3 border-t border-slate-700">
                Deliverable: +340% Branded Search Surge
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-white hover:bg-slate-100 transition-all shadow-md"
            >
              <Sparkles className="w-4 h-4 text-[#FF6B00]" />
              <span>Start Stage 01: Request Your 24-Point Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. PROFIT SIMULATOR (WITH 3D COMPOUNDING GROWTH ASSET)      */}
      {/* ============================================================ */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-lg shadow-slate-200/50 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider mb-2.5">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Interactive Growth Simulator</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                    Simulate Your Recoverable Profit & Growth
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Adjust the sliders to match your current marketplace revenue and ad ACOS.
                  </p>
                </div>

                {/* 3D Transparent Floating Profit Growth Chart Asset */}
                <div className="w-24 h-24 relative flex-shrink-0 hidden sm:block animate-float">
                  <Image
                    src="/assets/graphics/profit-growth-chart.webp"
                    alt="Profit Growth Surge"
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </div>
              </div>

              {/* Slider 1: Revenue */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold text-slate-700">Current Monthly Revenue:</span>
                  <span className="font-extrabold font-mono text-[#FF6B00] text-base">
                    ${simRevenue.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={simRevenue}
                  onChange={(e) => setSimRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>$10,000/mo</span>
                  <span>$250,000/mo</span>
                  <span>$500,000+/mo</span>
                </div>
              </div>

              {/* Slider 2: ACOS */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold text-slate-700">Current PPC Ad ACOS:</span>
                  <span className="font-extrabold font-mono text-red-600 text-base">
                    {simAcos}%
                  </span>
                </div>
                <input
                  type="range"
                  min="18"
                  max="60"
                  step="1"
                  value={simAcos}
                  onChange={(e) => setSimAcos(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>18% (Controlled)</span>
                  <span>35% (Typical)</span>
                  <span>60% (Severe Bleed)</span>
                </div>
              </div>
            </div>

            {/* Right Output Card */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Rankmoor 90-Day Projected Outcome
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-[11px] text-slate-500 mb-0.5">Projected Monthly GMV</div>
                  <div className="text-lg sm:text-xl font-extrabold text-slate-900 font-display">
                    ${projectedMonthlyRevenue.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-emerald-600 font-bold mt-0.5">+95% Omnichannel Surge</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-[11px] text-slate-500 mb-0.5">Monthly Ad Waste Saved</div>
                  <div className="text-lg sm:text-xl font-extrabold text-emerald-600 font-display">
                    ${adWasteEliminated.toLocaleString()} / mo
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">At 16% Target ACOS</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-bold text-[#E05300]">
                    Annual EBITDA / Valuation Surge
                  </div>
                  <div className="text-2xl font-display font-extrabold text-slate-950">
                    +${annualEbitdaImpact.toLocaleString()}
                  </div>
                </div>
                <div className="text-right text-[11px] text-slate-500">
                  Based on 3.5x - 4.5x <br /> e-commerce exit multiple
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Request Custom Audit for These Numbers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 12. EXECUTIVE LEADERSHIP (MEET THE FOUNDER)                  */}
      {/* ============================================================ */}
      <section className="py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-lg shadow-slate-200/40 relative overflow-hidden bg-texture">
            <div className="absolute inset-0 bg-white/92 pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Founder Image */}
              <div className="lg:col-span-5">
                <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden border-2 border-orange-200 shadow-md">
                  <Image
                    src={FOUNDER_INFO.image}
                    alt={FOUNDER_INFO.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200 text-center shadow-2xs">
                    <div className="text-sm font-bold text-slate-900 font-display">
                      {FOUNDER_INFO.name}
                    </div>
                    <div className="text-xs text-[#E05300] font-semibold">
                      {FOUNDER_INFO.role} & Principal Strategist
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Bio */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>Executive Leadership</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950 leading-tight">
                  &ldquo;Most sellers are trapped in the commodity bidding war. We build defensible brand moats.&rdquo;
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {FOUNDER_INFO.bio}
                </p>

                <div className="space-y-2 pt-1 text-xs sm:text-sm text-slate-700">
                  {FOUNDER_INFO.credentials.map((cred) => (
                    <div key={cred} className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF6B00] flex-shrink-0" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20BA5A] shadow-md transition-all flex items-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Chat With Mian Hassan</span>
                  </a>

                  <Link
                    href="/about"
                    className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-all"
                  >
                    Learn More About Rankmoor
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 13. CLIENT TESTIMONIALS (CURATED VERIFIED SHOWCASE)         */}
      {/* ============================================================ */}
      <section className="py-20 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-[#FF6B00] text-[#FF6B00]" />
              <span>Verified Client Feedback</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950">
              Trusted by Eight-Figure Brand Founders
            </h2>
            <p className="mt-1 text-slate-600 text-sm">
              Real feedback from marketplace directors and e-commerce founders scaling with Rankmoor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:bg-white hover:border-orange-300 transition-all shadow-2xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-[#FF6B00]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FF6B00]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full border border-emerald-200">
                      {t.salesProof}
                    </span>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-5 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900 font-display">{t.author}</div>
                    <div className="text-slate-500 text-[11px]">{t.role}, {t.company}</div>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 14. FREQUENTLY ASKED QUESTIONS (CLEAN 2-COLUMN)              */}
      {/* ============================================================ */}
      <section className="py-20 border-t border-slate-200 bg-[#FAFAFC] bg-texture relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FAFAFC]/85 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Context & Support Card */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider mb-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>Clarity & Answers</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
                  Frequently Asked Questions
                </h2>
                <p className="mt-1 text-slate-600 text-xs sm:text-sm">
                  Direct answers to the most common questions regarding our Amazon FBA and TikTok Shop scaling systems.
                </p>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFaqCategory("all")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    faqCategory === "all" ? "bg-slate-900 text-white" : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFaqCategory("amazon")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    faqCategory === "amazon" ? "bg-[#FF6B00] text-white" : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  Amazon FBA
                </button>
                <button
                  onClick={() => setFaqCategory("tiktok")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    faqCategory === "tiktok" ? "bg-teal-600 text-white" : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  TikTok Shop
                </button>
              </div>

              {/* Direct Help Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
                <div className="text-xs font-bold text-slate-900">Have a custom question about your catalog?</div>
                <p className="text-xs text-slate-500">
                  Connect with Mian Hassan directly on WhatsApp for an unvarnished audit of your current numbers.
                </p>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Start WhatsApp Conversation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Accordion Items */}
            <div className="lg:col-span-7 space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.question}
                    className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xs transition-shadow"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-slate-900 font-bold text-sm sm:text-base hover:text-[#FF6B00] transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? "rotate-180 text-[#FF6B00]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 15. HIGH-CONTRAST CLOSING ACTION (WITH 3D BESTSELLER TROPHY) */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#0F172A] text-white relative overflow-hidden">
        
        {/* Subtle glowing ambient accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          {/* 3D Transparent Floating Category Trophy */}
          <div className="w-28 h-28 mx-auto relative animate-float">
            <Image
              src="/assets/graphics/category-trophy-3d.webp"
              alt="Amazon Category Dominance Trophy"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#FF8533] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Institutional Scale?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Stop Bleeding Amazon Ad Spend. <br className="hidden sm:inline" />
            <span className="text-[#FF6B00]">Makes You The Brand.</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Claim your complimentary 24-Point Forensic Account Audit. We will analyze your reverse-ASIN ranking gaps, unmask wasted broad ad spend, and deliver an exact 90-day scaling roadmap.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="relative overflow-hidden w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-2"
            >
              <span className="absolute inset-0 animate-shimmer pointer-events-none opacity-30" />
              <Sparkles className="w-4 h-4" />
              <span>Claim Free 24-Point Forensic Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20BA5A] shadow-md transition-all flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Direct WhatsApp Discussion</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Confidential</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>48-Hour Turnaround</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero Commitment Required</span>
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}