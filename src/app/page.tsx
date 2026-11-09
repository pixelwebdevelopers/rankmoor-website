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
  Award, 
  Layers, 
  Zap, 
  Star, 
  ChevronDown, 
  Maximize2, 
  Search, 
  SlidersHorizontal, 
  Check, 
  X, 
  Target, 
  Clock, 
  Filter,
  Cpu,
  Percent,
  Flame,
  Globe,
  DollarSign
} from "lucide-react";
import { FaAmazon, FaTiktok } from "react-icons/fa6";
import confetti from "canvas-confetti";

import { 
  COMPANY_INFO, 
  FOUNDER_INFO, 
  CASE_STUDIES, 
  TESTIMONIALS, 
  FAQS 
} from "@/data/content";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ImageLightbox } from "@/components/ImageLightbox";
import { CurvyUnderline } from "@/components/CurvyUnderline";
import { SpotlightCard } from "@/components/SpotlightCard";
import { InteractiveGlobe } from "@/components/InteractiveGlobe";
import { ResultsShowcase } from "@/components/ResultsShowcase";
import { BentoServices } from "@/components/BentoServices";

export default function HomePage() {
  const [activeCaseTab, setActiveCaseTab] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqCategory, setFaqCategory] = useState<string>("all");
  const [heroMetricMode, setHeroMetricMode] = useState<"amazon" | "ppc" | "tiktok">("amazon");

  // Interactive Simulator State
  const [simRevenue, setSimRevenue] = useState<number>(85000);
  const [simAcos, setSimAcos] = useState<number>(34);

  // Keyword Laboratory State (Scientific PPC Query Analysis)
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

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#FF6B00", "#14B8A6", "#3B82F6", "#F59E0B"],
    });
  };

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
    <div className="relative min-h-screen bg-[#FAFAFC] text-slate-900 overflow-x-hidden selection:bg-[#FF6B00] selection:text-white">
      
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
      {/* 1. HERO SECTION (REFINED WITH CURVY PENCIL UNDERLINE)         */}
      {/* ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#FCF5EB] border-b border-slate-200/90 pt-24 sm:pt-28 lg:pt-36 pb-14 lg:pb-16 min-h-0 lg:min-h-[720px] flex flex-col lg:flex-row items-center">
        
        {/* Subtle Ambient Radial Highlight */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-2 sm:py-4 lg:py-8 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0">
            
            {/* Left Column: Copy, Switcher, Badges & CTAs (WordPress-style slide in left) */}
            <motion.div 
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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

              {/* Main Headline with Pencil / Curvy Underline */}
              <h1 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-display font-extrabold tracking-tight text-slate-950 leading-[1.18]">
                We Don&apos;t Just Rank Products.{" "}
                <span className="block mt-1">
                  <CurvyUnderline strokeColor="#FF6B00" variant="curvy">
                    Makes You The Brand.
                  </CurvyUnderline>
                </span>
              </h1>

              {/* Concise Subheadline */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-md mx-auto lg:mx-0">
                Engineering category dominance for high-growth Amazon sellers and TikTok Shop pioneers through precision search architecture, conversion-led creatives, and turnkey operational custodianship.
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
                  className="relative overflow-hidden w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 transition-all duration-200 flex items-center justify-center gap-2 group active:scale-98"
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

        {/* DESKTOP ONLY: Flush-Right Absolute Image (WordPress-style slide in right) */}
        <motion.div 
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
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
      {/* 2. AUTHENTIC PARTNER & CREDENTIALS MARQUEE BANNER             */}
      {/* ============================================================ */}
      <section className="border-b border-slate-200 bg-white py-5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Certified Marketplace Ecosystem</span>
            </div>
            
            <div className="w-full md:w-auto overflow-hidden relative">
              <div className="flex items-center gap-8 sm:gap-12 animate-marquee whitespace-nowrap">
                <span className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <FaAmazon className="w-4 h-4 text-[#FF6B00]" /> Amazon Service Provider Network (SPN)
                </span>
                <span className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <FaTiktok className="w-4 h-4 text-teal-600" /> TikTok Shop Authorized Partner
                </span>
                <span className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Award className="w-4 h-4 text-amber-500" /> Amazon Brand Registry Specialist
                </span>
                <span className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Walmart Marketplace Approved
                </span>
                <span className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Globe className="w-4 h-4 text-emerald-600" /> Tmall Global Gold Partner
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CONTINUOUSLY SPINNING 3D GLOBE SECTION (USER'S IMAGE #2)  */}
      {/* ============================================================ */}
      <InteractiveGlobe />

      {/* ============================================================ */}
      {/* 4. VERIFIED CLIENT RESULTS & GUARANTEE (USER'S IMAGE #1)     */}
      {/* ============================================================ */}
      <ResultsShowcase />

      {/* ============================================================ */}
      {/* 5. CORE CAPABILITIES BENTO GRID (SPOTLIGHT & MOUSE TILT)      */}
      {/* ============================================================ */}
      <BentoServices />

      {/* ============================================================ */}
      {/* 6. INTERACTIVE PPC SEARCH HARVESTING LABORATORY              */}
      {/* ============================================================ */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Glow ambient background lights */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3"
            >
              <Target className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Scientific Search Harvesting</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white"
            >
              Live Search Query &{" "}
              <CurvyUnderline strokeColor="#FF6B00" variant="curvy">
                Waste Elimination Lab
              </CurvyUnderline>
            </motion.h2>

            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Inspect how Rankmoor isolates real buyer intent, shields thousands in wasted ad spend, and forces Amazon&apos;s algorithm to reward your exact SKUs.
            </p>
          </div>

          {/* Interactive Console */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl max-w-5xl mx-auto">
            
            {/* Category Selectors */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-[#FF6B00]" />
                Select Category Simulation:
              </span>

              <div className="flex flex-wrap gap-2">
                {keywordPresets.map((preset, idx) => (
                  <button
                    key={preset.term}
                    onClick={() => setSelectedKeywordPreset(idx)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedKeywordPreset === idx
                        ? "bg-[#FF6B00] text-white shadow-md shadow-orange-500/30 scale-102"
                        : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                    }`}
                  >
                    {preset.category}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Simulation Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
              
              {/* Left Column: Query Specs (Slide in Left) */}
              <motion.div
                key={`query-${selectedKeywordPreset}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="lg:col-span-6 space-y-4"
              >
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs text-slate-400 font-medium">Root Search Term</div>
                  <div className="text-xl sm:text-2xl font-bold font-display text-white mt-1 flex items-center gap-2">
                    <span>&ldquo;{keywordPresets[selectedKeywordPreset].term}&rdquo;</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                    <span className="px-2 py-0.5 rounded bg-slate-800 font-mono text-orange-400">
                      {keywordPresets[selectedKeywordPreset].searchVolume}
                    </span>
                    <span>Exact monthly search queries</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Peak Converting Hours</div>
                    <div className="text-xs font-bold text-slate-200 mt-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-teal-400" />
                      <span>{keywordPresets[selectedKeywordPreset].peakHours}</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Shielded Bleed</div>
                    <div className="text-xs font-bold text-slate-200 mt-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{keywordPresets[selectedKeywordPreset].negativesShielded}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Comparison Gauges (Slide in Right) */}
              <motion.div
                key={`gauges-${selectedKeywordPreset}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="lg:col-span-6 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-6"
              >
                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-slate-400">Generic Broad Campaign ACOS:</span>
                    <span className="font-bold text-rose-400 font-mono">{keywordPresets[selectedKeywordPreset].broadAcos}</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-rose-500 h-full rounded-full" 
                      style={{ width: keywordPresets[selectedKeywordPreset].broadAcos }} 
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-slate-200 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Rankmoor Exact SKAG + Negative Shield:</span>
                    </span>
                    <span className="font-bold text-emerald-400 font-mono text-sm">{keywordPresets[selectedKeywordPreset].skagAcos}</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full" 
                      style={{ width: keywordPresets[selectedKeywordPreset].skagAcos }} 
                    />
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                  <div className="text-xs text-slate-400">Direct Monthly Waste Saved:</div>
                  <div className="text-lg font-extrabold text-[#FF6B00] font-mono">
                    {keywordPresets[selectedKeywordPreset].wastedSpendSaved}
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. VERIFIED CLIENT DASHBOARDS (4 CORE MARKETPLACE CASES)     */}
      {/* ============================================================ */}
      <section className="py-24 border-t border-slate-200 bg-[#FAF9F6] bg-texture relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FAF9F6]/85 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Unvarnished Proof • 100% Real Seller Central</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-950">
              Verified Marketplace{" "}
              <CurvyUnderline strokeColor="#FF6B00" variant="wave">
                Dashboards
              </CurvyUnderline>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              No photoshop mockups. Direct screenshots from active Seller Central accounts stewarded by Rankmoor. Click any dashboard to inspect high-resolution metrics.
            </p>
          </div>

          {/* Interactive Case Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {CASE_STUDIES.slice(0, 4).map((caseItem, idx) => (
              <button
                key={caseItem.id}
                onClick={() => setActiveCaseTab(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCaseTab === idx
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-102"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90"
                }`}
              >
                <span>{caseItem.highlightMetric}</span>
                <span className="hidden sm:inline text-slate-400 ml-1 font-normal">
                  ({caseItem.highlightLabel})
                </span>
              </button>
            ))}
          </div>

          {/* Active Case Card (Slide in Animation) */}
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Visual Screenshot with Zoom */}
              <div className="lg:col-span-6 relative group">
                <div 
                  onClick={() => setLightboxState({
                    isOpen: true,
                    imageSrc: activeCase.image,
                    title: activeCase.title,
                    subtitle: activeCase.client,
                    metrics: activeCase.metrics,
                  })}
                  className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 cursor-zoom-in shadow-md group-hover:shadow-xl transition-all"
                >
                  <Image
                    src={activeCase.image}
                    alt={activeCase.title}
                    fill
                    className="object-contain p-2 group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-md flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>Click to Zoom</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Case Specs */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold">
                  <span>{activeCase.category}</span>
                  <span>•</span>
                  <span>{activeCase.growthTag}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950">
                  {activeCase.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeCase.summary}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {activeCase.metrics.map((m, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="text-[11px] text-slate-500 font-medium">{m.label}</div>
                      <div className="text-base font-extrabold text-slate-900 font-display mt-0.5">
                        {m.value}
                      </div>
                      {m.change && (
                        <div className="text-[10px] font-bold text-emerald-600 mt-0.5">
                          {m.change}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <Link
                    href={`/case-studies/${activeCase.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#FF6B00] hover:text-[#E05300] transition-colors"
                  >
                    <span>Read Full Technical Breakdown</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. INTERACTIVE 5-POINT "BRAND MOAT" STORE HEALTH SCANNER     */}
      {/* ============================================================ */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200/90 shadow-xl p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Checklist */}
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>Interactive Account Audit</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950">
                  5-Point Brand Moat Self-Assessment
                </h3>

                <p className="text-xs sm:text-sm text-slate-600">
                  Toggle the checkboxes to evaluate if your marketplace catalog has resilient defenses or is leaking margins to competitors.
                </p>

                <div className="space-y-2.5 pt-2">
                  {[
                    "Cosmo 2.0 & A9 Reverse-ASIN indexing fully mapped",
                    "PPC operating at sub-20% ACOS with negative keyword harvesting",
                    "Premium A+ Brand Story deployed with 3D product renders",
                    "FBA inventory rolling 90-day forecast with zero stockouts",
                    "Active TikTok Shop affiliate seeding machine (100+ samples/mo)",
                  ].map((label, idx) => (
                    <button
                      key={idx}
                      onClick={() => toggleScannerCheck(idx)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        scannerChecks[idx]
                          ? "bg-emerald-50/60 border-emerald-300 text-slate-900"
                          : "bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-300"
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-medium">{label}</span>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                        scannerChecks[idx]
                          ? "bg-emerald-500 border-emerald-500 text-white"
                          : "border-slate-300 bg-white"
                      }`}>
                        {scannerChecks[idx] && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Score Gauge */}
              <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-[#FAF9F6] border border-slate-200">
                <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
                  Store Health Score
                </div>

                <div className="relative w-32 h-32 flex items-center justify-center mb-3">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#E2E8F0"
                      strokeWidth="10"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke={storeHealthScore > 60 ? "#10B981" : storeHealthScore > 40 ? "#FF6B00" : "#F43F5E"}
                      strokeWidth="10"
                      strokeDasharray={251.2}
                      animate={{ strokeDashoffset: 251.2 - (251.2 * storeHealthScore) / 100 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-3xl font-extrabold font-display text-slate-900">
                    {storeHealthScore}%
                  </span>
                </div>

                <div className="text-xs font-bold text-slate-700">
                  {storeHealthScore === 100
                    ? "Institutional Grade Moat"
                    : storeHealthScore >= 60
                    ? "Moderate Vulnerabilities"
                    : "Severe Margin Leakage"}
                </div>

                <div className="text-[11px] text-slate-500 mt-1">
                  {storeHealthScore < 100 && "Our 24-point audit fixes the gaps."}
                </div>

                <Link
                  href="/contact"
                  className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#FF6B00] hover:bg-[#E05300] transition-colors shadow-xs"
                >
                  Request Full Audit
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. INTERACTIVE PROFIT & REVENUE SIMULATOR                    */}
      {/* ============================================================ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Interactive Growth Valuation Simulator</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950">
              Simulate Your Brand&apos;s Scaled{" "}
              <CurvyUnderline strokeColor="#FF6B00" variant="double">
                Valuation
              </CurvyUnderline>
            </h3>

            <p className="text-sm text-slate-600 mt-2">
              Adjust your current monthly revenue and ad ACOS to project potential annual EBITDA gains through Rankmoor&apos;s dual Amazon + TikTok architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Slider 1: Monthly Revenue */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-700">Current Monthly Revenue:</span>
                  <span className="text-base font-extrabold text-slate-900 font-mono">
                    ${simRevenue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={500000}
                  step={5000}
                  value={simRevenue}
                  onChange={(e) => setSimRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>$10,000/mo</span>
                  <span>$250,000/mo</span>
                  <span>$500,000/mo</span>
                </div>
              </div>

              {/* Slider 2: Current ACOS */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-700">Current Ad ACOS:</span>
                  <span className="text-base font-extrabold text-slate-900 font-mono">
                    {simAcos}%
                  </span>
                </div>
                <input
                  type="range"
                  min={18}
                  max={60}
                  step={1}
                  value={simAcos}
                  onChange={(e) => setSimAcos(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>18% (Optimized)</span>
                  <span>35% (Average)</span>
                  <span>60% (Bleeding)</span>
                </div>
              </div>

            </div>

            {/* Calculations Display */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white space-y-4">
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Projected 12-Month Impact
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-[11px] text-slate-400">Monthly Projected Run-Rate</div>
                  <div className="text-lg sm:text-xl font-bold font-display text-white mt-1">
                    ${projectedMonthlyRevenue.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-emerald-400 font-bold mt-0.5">+95% Growth</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-[11px] text-slate-400">Monthly Wasted Ad Spend Saved</div>
                  <div className="text-lg sm:text-xl font-bold font-display text-emerald-400 mt-1">
                    ${adWasteEliminated.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Target: 16.0% ACOS</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500/20 to-amber-500/10 border border-orange-500/40">
                <div className="text-xs text-orange-300 font-semibold">Total Projected Annual Value:</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-0.5">
                  +${annualEbitdaImpact.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  Combines incremental gross margin with eliminated ad waste.
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={triggerConfetti}
                  className="w-full py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/30 cursor-pointer transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Lock In This Valuation Model</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. EXECUTIVE LEADERSHIP (MEET THE FOUNDER)                  */}
      {/* ============================================================ */}
      <section className="py-24 border-t border-slate-200 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Founder Image (Slide in Left) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-5 flex justify-center"
              >
                <div className="relative aspect-square w-full max-w-sm rounded-3xl overflow-hidden border-4 border-slate-100 shadow-2xl">
                  <Image
                    src={FOUNDER_INFO.image}
                    alt={FOUNDER_INFO.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-md">
                    <div className="text-sm font-bold text-slate-900">{FOUNDER_INFO.name}</div>
                    <div className="text-xs text-[#FF6B00] font-semibold">{FOUNDER_INFO.role}</div>
                  </div>
                </div>
              </motion.div>

              {/* Founder Bio (Slide in Right) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-7 space-y-4 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>Empirical Leadership</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950">
                  Built By Real Seven-Figure{" "}
                  <CurvyUnderline strokeColor="#FF6B00" variant="curvy">
                    Marketplace Sellers
                  </CurvyUnderline>
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {FOUNDER_INFO.bio}
                </p>

                <blockquote className="p-4 rounded-2xl bg-orange-50/60 border-l-4 border-[#FF6B00] text-xs sm:text-sm text-slate-800 italic">
                  &ldquo;{FOUNDER_INFO.quote}&rdquo;
                </blockquote>

                <div className="space-y-2 pt-2 text-left">
                  {FOUNDER_INFO.credentials.map((cred, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    Schedule Direct Strategy Call
                  </Link>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20BA5A] transition-colors shadow-sm flex items-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>WhatsApp Mian Hassan</span>
                  </a>
                </div>

              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. CLIENT TESTIMONIALS (CURATED VERIFIED SHOWCASE)         */}
      {/* ============================================================ */}
      <section className="py-24 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Partner Endorsements</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950">
              Trusted By Category Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((testimonial, idx) => (
              <SpotlightCard
                key={idx}
                enableTilt
                className="p-6 sm:p-8 flex flex-col justify-between border-slate-200/90"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 text-[#FF6B00] font-bold flex items-center justify-center font-display text-sm">
                      {testimonial.author[0]}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{testimonial.author}</div>
                      <div className="text-[11px] text-slate-500">{testimonial.role} • {testimonial.company}</div>
                    </div>
                  </div>
                  {testimonial.salesProof && (
                    <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {testimonial.salesProof}
                    </span>
                  )}
                </div>
              </SpotlightCard>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 12. FREQUENTLY ASKED QUESTIONS (CLEAN ACCORDION)             */}
      {/* ============================================================ */}
      <section className="py-24 border-t border-slate-200 bg-[#FAFAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Clear answers on contracts, pricing, and onboarding.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {[
                { id: "all", label: "All Questions" },
                { id: "amazon", label: "Amazon FBA" },
                { id: "tiktok", label: "TikTok Shop" },
                { id: "ppc", label: "PPC & Guarantees" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFaqCategory(tab.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    faqCategory === tab.id
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      openFaq === idx ? "rotate-180 text-[#FF6B00]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 13. HIGH-CONTRAST CLOSING ACTION SECTION                     */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
        
        {/* Glow ambient background lights */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Ready For Unfair Advantage?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
            Claim Category{" "}
            <CurvyUnderline strokeColor="#FF6B00" variant="double">
              Dominance Today
            </CurvyUnderline>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Stop losing margin to automated PPC leakage and stale listings. Claim your free 24-point account audit and review empirical roadmap options within 48 hours.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 transition-all active:scale-98"
            >
              <Sparkles className="w-4 h-4" />
              <span>Claim Free 24-Point Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20BA5A] shadow-lg shadow-[#25D366]/25 flex items-center justify-center gap-2 transition-all active:scale-98"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>

          <div className="pt-4 text-xs text-slate-400">
            Strict Confidentiality • Non-Disclosure Agreement Provided • Zero Pushy Sales Calls
          </div>
        </div>
      </section>

    </div>
  );
}
