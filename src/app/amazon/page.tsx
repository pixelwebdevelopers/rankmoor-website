"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Maximize2,
  ChevronRight,
  Search,
  Palette,
  BarChart3,
  Rocket,
  Lock,
  Factory,
  Target,
  Zap,
  Clock,
  Award,
  TrendingUp,
  Cpu,
  Layers,
  Globe,
  SlidersHorizontal,
  Flame,
  Check,
  X,
  Trophy,
  Scale,
  Boxes
} from "lucide-react";
import { COMPANY_INFO } from "@/data/content";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ImageLightbox } from "@/components/ImageLightbox";
import { CurvyUnderline } from "@/components/CurvyUnderline";
import { SpotlightCard } from "@/components/SpotlightCard";

export default function AmazonPage() {
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

  // State for Section 2: Algorithm Node Explorer
  const [activeAlgoNode, setActiveAlgoNode] = useState<number>(0);
  const algoNodes = [
    {
      title: "Latent User Intent Mapping",
      subtitle: "Cosmo 2.0 Semantic Prediction",
      desc: "Amazon's LLM query engine predicts shopper intentions before they finish typing. We map semantic synonyms so your ASIN captures latent long-tail queries competitors miss.",
      stat: "+38% Unclaimed Impressions",
      badge: "Cosmo 2.0 AI",
      color: "#FF6B00"
    },
    {
      title: "Reverse-ASIN Keyword Conquest",
      subtitle: "Competitor Market Share Infiltration",
      desc: "We extract every search term driving clicks to the top 15 category competitors. We isolate high-converting phrases and build exact-match silos to hijack their buyer traffic.",
      stat: "1,420+ Keywords Mapped",
      badge: "A9 Search Harvest",
      color: "#10B981"
    },
    {
      title: "Velocity-Weighted Conversion Index",
      subtitle: "Algorithmic Rank Reinforcement",
      desc: "Amazon rewards sales velocity above all. By structuring title, bullets, and backend terms for rapid micro-conversions, we trigger Amazon's algorithm to lock your ASIN into Page 1.",
      stat: "Top-3 Organic Rank",
      badge: "Velocity Multiplier",
      color: "#3B82F6"
    },
    {
      title: "Algorithmic Buy Box Defense",
      subtitle: "Zero Suppression Custodianship",
      desc: "Automated monitoring guards your Buy Box against price suppression, rogue unauthorized sellers, and inventory splits across Amazon fulfillment centers.",
      stat: "99.8% Buy Box Win Rate",
      badge: "Catalog Shield",
      color: "#F59E0B"
    }
  ];

  // State for Section 3: Before vs After CVR Overhaul
  const [cvrTab, setCvrTab] = useState<"after" | "before">("after");

  // State for Section 4: PPC Dayparting Clock
  const [activeDaypart, setActiveDaypart] = useState<"peak" | "workday" | "dead">("peak");

  // State for Section 5: 45-Day Launch Stepper
  const [activeLaunchStep, setActiveLaunchStep] = useState<number>(0);
  const launchSteps = [
    {
      step: "01",
      days: "Day 01 – 10",
      title: "Vine Seeding & Inception",
      summary: "Enroll in Amazon Vine for first 30 verified 4.8-star reviews. Deploy Amazon Attribution links for a 10% cash Brand Referral Bonus.",
      deliverable: "30+ Verified Reviews • Zero TOS Risk",
      kpi: "4.8-Star Baseline Rating"
    },
    {
      step: "02",
      days: "Day 11 – 20",
      title: "Exact-Match Surge & Inventory Trigger",
      summary: "Activate ad campaigns the instant FBA warehouse check-in hits 85%. Surge high-intent exact match keywords to signal immediate buying velocity.",
      deliverable: "Single-Keyword Ad Groups (SKAG) Live",
      kpi: "Top-of-Search Share >80%"
    },
    {
      step: "03",
      days: "Day 21 – 35",
      title: "Cosmo Organic Rank Leap",
      summary: "Amazon's algorithm registers sustained conversion momentum. ASIN leaps from Page 4 directly into the Category Top-5 across primary root search terms.",
      deliverable: "Page 1 Organic Penetration",
      kpi: "+280% Organic Velocity"
    },
    {
      step: "04",
      days: "Day 36 – 45",
      title: "Category Dominance & Ad Taper",
      summary: "#1 Best Seller badge achieved. Ad spend is systematically tapered into defense campaigns while organic search volume carries 75%+ of revenue on autopilot.",
      deliverable: "Self-Sustaining Brand Moat",
      kpi: "16.0% Ad ACOS Maintained"
    }
  ];

  // State for Section 6: Sourcing Hubs
  const [activeFactoryHub, setActiveFactoryHub] = useState<"china" | "pakistan" | "vietnam">("china");

  return (
    <div className="relative min-h-screen bg-[#FAFAFC] text-slate-900 pt-24 pb-24 overflow-hidden selection:bg-[#FF6B00] selection:text-white">
      
      {/* Lightbox for zooming service graphics */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState({ ...lightboxState, isOpen: false })}
        imageSrc={lightboxState.imageSrc}
        title={lightboxState.title}
        subtitle={lightboxState.subtitle}
        metrics={lightboxState.metrics}
      />

      {/* Decorative ambient background accents */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-96 right-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* ============================================================ */}
      {/* 1. HERO SECTION (WITH 3D BESTSELLER TROPHY & CURVY UNDERLINE)*/}
      {/* ============================================================ */}
      <section className="relative w-full bg-[#FAF7F2] bg-texture border-b border-slate-200 py-16 sm:py-24 text-center lg:text-left overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy (Slide in Left) */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Full-Stack Amazon Ecosystem Architecture</span>
                <span className="text-slate-300">•</span>
                <span className="text-emerald-700 font-bold">SPN Verified</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                Engineering Category Leaders on{" "}
                <span className="block mt-1.5">
                  <CurvyUnderline strokeColor="#FF6B00" variant="curvy">
                    Amazon Marketplace.
                  </CurvyUnderline>
                </span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal mx-auto lg:mx-0">
                Most agencies burn ad spend trying to buy Page 1 clicks. We engineer algorithmic brand moats through reverse-ASIN indexing, luxury 3D A+ storefronts, day-parted PPC bidding, and Tier-1 factory margin defenses.
              </p>

              {/* 3 Quick Value Pills */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 max-w-lg mx-auto lg:mx-0">
                <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-left">
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Verified FBA GMV</div>
                  <div className="text-base sm:text-lg font-extrabold text-slate-900 font-display">$20.23M+</div>
                  <div className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full inline-block mt-0.5">+200% YoY</div>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-left">
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Ad Portfolio ACOS</div>
                  <div className="text-base sm:text-lg font-extrabold text-emerald-600 font-display">16.00%</div>
                  <div className="text-[10px] font-bold text-[#E05300] bg-orange-50 px-1.5 py-0.5 rounded-full inline-block mt-0.5">$7.37M Sales</div>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-left">
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Units Shipped</div>
                  <div className="text-base sm:text-lg font-extrabold text-slate-900 font-display">482K+</div>
                  <div className="text-[10px] font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded-full inline-block mt-0.5">Zero Stockouts</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 group active:scale-98"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Amazon Catalog Audit</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-2 shadow-sm active:scale-98"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Right Hero Visual: 3D Category Bestseller Trophy (Slide in Right with 3D Tilt) */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center">
                {/* Glowing backdrop shadow */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#FF6B00]/25 via-amber-400/20 to-teal-400/20 blur-3xl pointer-events-none" />

                <div className="relative w-full h-full p-4">
                  <Image
                    src="/assets/graphics/category-trophy-3d.webp"
                    alt="Category Dominance Trophy - Amazon FBA #1 Best Seller"
                    fill
                    priority
                    className="object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Floating Verified Badge 1: Top-Right */}
                <div className="absolute top-4 right-2 sm:right-4 bg-white/95 backdrop-blur-md border border-slate-200/90 py-2.5 px-3.5 rounded-2xl shadow-xl shadow-slate-900/10 flex items-center gap-2.5 z-20 animate-float">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center font-bold">
                    <Trophy className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Status</div>
                    <div className="text-xs font-bold text-slate-900">#1 Best Seller Badge</div>
                  </div>
                </div>

                {/* Floating Verified Badge 2: Bottom-Left */}
                <div className="absolute bottom-4 left-2 sm:left-4 bg-white/95 backdrop-blur-md border border-slate-200/90 py-2.5 px-3.5 rounded-2xl shadow-xl shadow-slate-900/10 flex items-center gap-2.5 z-20 animate-float-delayed">
                  <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#FF6B00] border border-orange-200 flex items-center justify-center font-bold">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Amazon SPN</div>
                    <div className="text-xs font-bold text-slate-900">Official Partner Tier</div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. THE COSMO 2.0 AI RELEVANCE ENGINE (INTERACTIVE NODE GRAPH)*/}
      {/* ============================================================ */}
      <section className="py-24 bg-[#0B1120] text-white relative overflow-hidden border-b border-slate-800">
        
        {/* Glow ambient background lights */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Proprietary Search Architecture</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white">
              The Amazon{" "}
              <CurvyUnderline strokeColor="#FF6B00" variant="curvy">
                Cosmo 2.0 Engine
              </CurvyUnderline>
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Amazon retired simplistic keyword stuffing. Click the nodes below to inspect how Rankmoor reverse-engineers Amazon&apos;s semantic LLM to dominate organic search.
            </p>
          </div>

          {/* Interactive Node Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Left: Interactive Node Selector Buttons */}
            <div className="lg:col-span-5 space-y-3">
              {algoNodes.map((node, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveAlgoNode(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    activeAlgoNode === idx
                      ? "bg-slate-800/90 border-[#FF6B00] shadow-lg shadow-orange-500/10 scale-102"
                      : "bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span 
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: node.color }}
                    />
                    <div>
                      <div className="text-xs font-bold text-white">{node.title}</div>
                      <div className="text-[10px] text-slate-400">{node.subtitle}</div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeAlgoNode === idx ? "text-[#FF6B00] translate-x-1" : "text-slate-600"}`} />
                </button>
              ))}
            </div>

            {/* Right: Active Node Detail Showcase Card */}
            <div className="lg:col-span-7">
              <motion.div
                key={activeAlgoNode}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-950/60 border border-orange-800/60 px-3 py-1 rounded-full">
                    {algoNodes[activeAlgoNode].badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {algoNodes[activeAlgoNode].stat}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-5">
                  {algoNodes[activeAlgoNode].title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-3">
                  {algoNodes[activeAlgoNode].desc}
                </p>

                <div className="mt-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Algorithmic Moat Deployed</span>
                  </div>
                  <span className="text-xs font-bold text-white">Full Indexing Guarantee</span>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. 3D VISUAL STUDIO & CONVERSION OVERHAUL (BEFORE VS AFTER)  */}
      {/* ============================================================ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual: 3D Exploded Renders & Listing Design */}
          <div className="lg:col-span-6 relative">
            <div 
              onClick={() => setLightboxState({
                isOpen: true,
                imageSrc: "/assets/graphics/listing-conversion-3d.webp",
                title: "3D CAD Exploded Engineering & Luxury A+ Design",
                subtitle: "Rankmoor In-House 3D Studio Architecture",
                metrics: [
                  { label: "Conversion Lift", value: "+42.5%" },
                  { label: "Main Image CTR", value: "3.8% (Top 1%)" },
                  { label: "Basket Size", value: "+18%" }
                ]
              })}
              className="group relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl cursor-zoom-in"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/assets/graphics/listing-conversion-3d.webp"
                  alt="3D Product Render & Conversion Architecture"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/15 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 px-4 py-2 rounded-full text-xs font-bold text-slate-900 shadow-md flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>Inspect 3D Creative Blueprint</span>
                </span>
              </div>

              <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900">4K CAD Exploded Renders</span>
                <span className="text-[#FF6B00] font-bold">+42.5% CVR Lift</span>
              </div>
            </div>
          </div>

          {/* Right Copy: Interactive Before/After Comparison */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
              <Palette className="w-3.5 h-3.5 text-amber-600" />
              <span>Conversion-First Creative Science</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950 leading-tight">
              Turn Flat Listings Into{" "}
              <CurvyUnderline strokeColor="#FF6B00" variant="curvy">
                Luxury Flagships.
              </CurvyUnderline>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Traffic is worthless without high conversion. We replace boring white-background photos with exploded 3D CAD renders, Premium A+ Brand Stories, and sensory lifestyle modules.
            </p>

            {/* Toggle Switch: Before vs After */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">Conversion Architecture:</span>
                <div className="inline-flex rounded-lg bg-slate-100 p-0.5 text-[11px] font-bold">
                  <button
                    onClick={() => setCvrTab("after")}
                    className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                      cvrTab === "after"
                        ? "bg-[#FF6B00] text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Rankmoor 3D Moat
                  </button>
                  <button
                    onClick={() => setCvrTab("before")}
                    className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                      cvrTab === "before"
                        ? "bg-rose-600 text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Generic Commodity
                  </button>
                </div>
              </div>

              {cvrTab === "after" ? (
                <div className="space-y-2 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs">
                  <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>24.6% Avg CVR • Luxury Brand Storytelling</span>
                  </div>
                  <div className="text-emerald-800 text-[11px]">
                    Exploded internal CAD visuals, comparison matrices, and thumb-stopping mobile layouts that maximize basket size.
                  </div>
                </div>
              ) : (
                <div className="space-y-2 p-3.5 rounded-xl bg-rose-50/70 border border-rose-200 text-xs">
                  <div className="font-bold text-rose-900 flex items-center gap-1.5">
                    <X className="w-4 h-4 text-rose-600" />
                    <span>8.8% CVR • High Bounce Rate & Price Erosion</span>
                  </div>
                  <div className="text-rose-800 text-[11px]">
                    Stock photos on white backgrounds, dense unreadable text blocks, and zero brand defense against competitor substitutes.
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-lg font-bold font-display text-slate-900">+42.5%</div>
                <div className="text-[10px] text-slate-500 font-medium">Session Conversion Lift</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-lg font-bold font-display text-slate-900">3.8%</div>
                <div className="text-[10px] text-slate-500 font-medium">Main Image CTR (Top 1% Tier)</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. PPC SCIENCE & DAYPARTING CLOCK (INTERACTIVE SHIELD)        */}
      {/* ============================================================ */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Interactive Dayparting Radar Clock */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-orange-400 text-xs font-bold uppercase tracking-wider">
                <Target className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Sub-18% ACOS Ad Architecture</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white leading-tight">
                Eliminating Wasted Clicks with{" "}
                <CurvyUnderline strokeColor="#FF6B00" variant="curvy">
                  Hourly Dayparting.
                </CurvyUnderline>
              </h2>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Generic agencies let ad campaigns run 24/7 at constant bids, burning thousands during midnight dead zones. We dynamically scale bids to hour-by-hour historical conversion peaks.
              </p>

              {/* Dayparting Interactive Selector */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Test Hourly Bid Multipliers:
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setActiveDaypart("peak")}
                    className={`p-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      activeDaypart === "peak"
                        ? "bg-[#FF6B00] text-white border-[#FF6B00]"
                        : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    06:00 PM – 11:30 PM
                    <span className="block text-[10px] opacity-80 mt-0.5">Peak Buyer Window</span>
                  </button>

                  <button
                    onClick={() => setActiveDaypart("workday")}
                    className={`p-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      activeDaypart === "workday"
                        ? "bg-slate-800 text-white border-slate-700"
                        : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    09:00 AM – 04:00 PM
                    <span className="block text-[10px] opacity-80 mt-0.5">Research Browsing</span>
                  </button>

                  <button
                    onClick={() => setActiveDaypart("dead")}
                    className={`p-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      activeDaypart === "dead"
                        ? "bg-rose-900/80 text-rose-200 border-rose-700"
                        : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    01:00 AM – 06:00 AM
                    <span className="block text-[10px] opacity-80 mt-0.5">Bleed Dead Zone</span>
                  </button>
                </div>

                {/* Dynamic Status Output */}
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                  {activeDaypart === "peak" && (
                    <div className="text-emerald-400 font-mono flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 inline text-emerald-400 flex-shrink-0" />
                      <span><strong>+35% Bid Boost Active:</strong> Capturing Top-of-Search during peak conversion hours. ACOS: 14.8%.</span>
                    </div>
                  )}
                  {activeDaypart === "workday" && (
                    <div className="text-slate-300 font-mono flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5 inline text-slate-300 flex-shrink-0" />
                      <span><strong>Baseline Bid Active:</strong> Harvesting mid-tail exact queries with zero budget wastage.</span>
                    </div>
                  )}
                  {activeDaypart === "dead" && (
                    <div className="text-amber-400 font-mono flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 inline text-amber-400 flex-shrink-0" />
                      <span><strong>Auto-Throttled to $0.05:</strong> Saves ~$14,200/mo in worthless midnight mobile clicks.</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Brand Fortress Graphic */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 p-4 shadow-2xl">
                <Image
                  src="/assets/graphics/brand-moat-fortress.webp"
                  alt="Brand Moat Fortress - Negative PPC Shield & Margin Protection"
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-center">
                  <span className="text-xs font-bold text-white font-mono">Verified $7.37M Managed PPC @ 16.00% ACOS</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. 45-DAY HONEYMOON VELOCITY LAUNCH (INTERACTIVE STEPPER)    */}
      {/* ============================================================ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider mb-3">
            <Rocket className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Turnkey Bestseller Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-950">
            The 45-Day{" "}
            <CurvyUnderline strokeColor="#FF6B00" variant="curvy">
              Honeymoon Velocity
            </CurvyUnderline>{" "}
            Protocol
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            The first 45 days dictate an ASIN&apos;s lifetime organic trajectory. Click each phase to review how we capitalize on Amazon&apos;s algorithm.
          </p>
        </div>

        {/* Stepper Tabs Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {launchSteps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveLaunchStep(idx)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                activeLaunchStep === idx
                  ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-102"
                  : "bg-white text-slate-600 border-slate-200/90 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className={`font-mono font-bold ${activeLaunchStep === idx ? "text-orange-400" : "text-[#FF6B00]"}`}>
                  Phase {s.step}
                </span>
                <span className={`text-[10px] ${activeLaunchStep === idx ? "text-slate-400" : "text-slate-400"}`}>
                  {s.days}
                </span>
              </div>
              <div className={`text-xs sm:text-sm font-bold ${activeLaunchStep === idx ? "text-white" : "text-slate-900"}`}>
                {s.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Details Card */}
        <motion.div
          key={activeLaunchStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-mono font-bold text-[#E05300] uppercase tracking-wider">
                {launchSteps[activeLaunchStep].days} Playbook
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950">
                {launchSteps[activeLaunchStep].title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {launchSteps[activeLaunchStep].summary}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 pt-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Deliverable: {launchSteps[activeLaunchStep].deliverable}</span>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-orange-50/60 border border-orange-200 text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-900/60">
                Primary Milestone Target
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#E05300] font-display mt-1">
                {launchSteps[activeLaunchStep].kpi}
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Verified with Amazon Attribution
              </div>
            </div>

          </div>
        </motion.div>

      </section>

      {/* ============================================================ */}
      {/* 6. GLOBAL FACTORY SOURCING & MARGIN DEFENSE (WORLD HUBS)     */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#FAF7F2] border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Authentic Container Freight & Factory Asset */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/assets/services/amazon_sourcing_logistics_1790702317084-DINcS-OP.jpg"
                    alt="Direct Tier-1 Factory Sourcing & Container Freight Logistics"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">Door-to-FBA Ocean Freight</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Net-60 Terms
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Factory Hubs Switcher */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
                <Factory className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Supply Chain Moat</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950 leading-tight">
                Direct Tier-1{" "}
                <CurvyUnderline strokeColor="#FF6B00" variant="curvy">
                  Factory Floor Margins.
                </CurvyUnderline>
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Marketplace dominance is won on gross margins. We bypass middlemen trading agents to negotiate direct factory agreements with strict defect tolerances.
              </p>

              {/* Regional Hub Switcher */}
              <div className="flex gap-2">
                {[
                  { id: "china", label: "China (Electronics & Molds)" },
                  { id: "pakistan", label: "Pakistan (Textiles & Steel)" },
                  { id: "vietnam", label: "Vietnam (Outdoor & Wood)" },
                ].map((hub) => (
                  <button
                    key={hub.id}
                    onClick={() => setActiveFactoryHub(hub.id as any)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeFactoryHub === hub.id
                        ? "bg-slate-900 text-white shadow-xs"
                        : "bg-white text-slate-600 border border-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {hub.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Hub Description */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2 text-xs">
                {activeFactoryHub === "china" && (
                  <div>
                    <div className="font-bold text-slate-900">Shenzhen & Ningbo Production Hubs:</div>
                    <div className="text-slate-600 text-[11px] leading-relaxed mt-1">
                      Tooling mold ownership, custom PCBA consumer electronics, and fast rapid-prototyping with AQL 2.5 defect inspections under 0.2%.
                    </div>
                  </div>
                )}
                {activeFactoryHub === "pakistan" && (
                  <div>
                    <div className="font-bold text-slate-900">Sialkot & Faisalabad Industrial Corridors:</div>
                    <div className="text-slate-600 text-[11px] leading-relaxed mt-1">
                      World capital of surgical steel, cutlery, fitness sportswear, and luxury cotton textiles. Unrivaled duty advantages for Western brands.
                    </div>
                  </div>
                )}
                {activeFactoryHub === "vietnam" && (
                  <div>
                    <div className="font-bold text-slate-900">Ho Chi Minh & Da Nang Sourcing Centers:</div>
                    <div className="text-slate-600 text-[11px] leading-relaxed mt-1">
                      Tariff mitigation hub for outdoor equipment, eco-packaging, and furniture with direct Pacific shipping routes.
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs">
                  <div className="font-bold text-slate-900">Landed Savings:</div>
                  <div className="text-sm font-extrabold text-emerald-600 mt-0.5">-18% to -35%</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs">
                  <div className="font-bold text-slate-900">Defect Tolerance:</div>
                  <div className="text-sm font-extrabold text-slate-900 mt-0.5">&lt; 0.2% Strict AQL</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. 24/7 ACCOUNT HEALTH & PROJECT ZERO DEFENSE (SECURITY)     */}
      {/* ============================================================ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Lock className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>24/7 Operational Custodianship</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950">
            Total Account Defense & Health
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Amazon algorithms penalize stranded inventory and policy slips instantly. We act as your executive operations desk.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SpotlightCard
            enableTilt
            className="p-6 border-slate-200/90"
            spotlightColor="rgba(255, 107, 0, 0.10)"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6B00] border border-orange-200 flex items-center justify-center font-bold mb-3">
              <ShieldCheck className="w-5 h-5 text-[#FF6B00]" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 font-display">Project Zero Eviction</h3>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              Automated Brand Registry enforcement systematically purging counterfeiters and unauthorized buy-box hijackers.
            </p>
          </SpotlightCard>

          <SpotlightCard
            enableTilt
            className="p-6 border-slate-200/90"
            spotlightColor="rgba(16, 185, 129, 0.10)"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center font-bold mb-3">
              <Zap className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 font-display">&lt;12h Suppression Fix</h3>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              Immediate algorithmic restoration for stranded inventory, inactive ASINs, and backend categorization bugs.
            </p>
          </SpotlightCard>

          <SpotlightCard
            enableTilt
            className="p-6 border-slate-200/90"
            spotlightColor="rgba(59, 130, 246, 0.10)"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center font-bold mb-3">
              <BarChart3 className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 font-display">99.8% BuyBox Win</h3>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              Automated algorithmic repricing strategies preventing margin erosion while securing permanent buy-box ownership.
            </p>
          </SpotlightCard>

          <SpotlightCard
            enableTilt
            className="p-6 border-slate-200/90"
            spotlightColor="rgba(245, 158, 11, 0.10)"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center font-bold mb-3">
              <Boxes className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 font-display">IPI Restock Safeguard</h3>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              Proactive FBA restock forecasting eliminating costly aged inventory surcharges and maintaining top-tier restock limits.
            </p>
          </SpotlightCard>
        </div>

      </section>

      {/* ============================================================ */}
      {/* 8. CLOSING HIGH-CONVERSION AUDIT CTA                         */}
      {/* ============================================================ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 text-center space-y-6 bg-texture relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Scale With Certainty</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950">
            Ready to Lock In Category{" "}
            <CurvyUnderline strokeColor="#FF6B00" variant="double">
              Dominance on Amazon?
            </CurvyUnderline>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Book your comprehensive 24-point empirical audit. We identify exact reverse-ASIN ranking opportunities, negative keyword ad waste, and conversion friction within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 group active:scale-98"
            >
              <span>Schedule Free Catalog Audit</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-2 shadow-sm active:scale-98"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
