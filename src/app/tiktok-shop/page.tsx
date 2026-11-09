"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Maximize2, 
  ChevronRight, 
  Flame, 
  Users, 
  Radio, 
  ShoppingBag, 
  Video, 
  Zap, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Target, 
  Play, 
  DollarSign, 
  RefreshCw, 
  Check, 
  Award, 
  Share2,
  Mic,
  Scissors,
  MessageSquare
} from "lucide-react";
import { FaTiktok, FaAmazon } from "react-icons/fa6";
import { COMPANY_INFO } from "@/data/content";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ImageLightbox } from "@/components/ImageLightbox";
import { CurvyUnderline } from "@/components/CurvyUnderline";
import { SpotlightCard } from "@/components/SpotlightCard";

export default function TikTokShopPage() {
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

  // State for Section 2: Creator Seeding Machine Niches
  const [activeNiche, setActiveNiche] = useState<number>(0);
  const creatorNiches = [
    {
      title: "Health & Wellness Creators",
      count: "140 Vetted Creators",
      commission: "18% Dynamic Plan",
      volume: "180+ Tagged Videos/Mo",
      roas: "5.6x Sample ROI",
      desc: "Daily fitness routines, shaker cup demonstrations, and gym locker unboxings with seamless orange cart tags.",
      badge: "Highest Re-order Rate"
    },
    {
      title: "Beauty & Skincare Affiliates",
      count: "185 Vetted Creators",
      commission: "20% Dynamic Plan",
      volume: "240+ Tagged Videos/Mo",
      roas: "6.2x Sample ROI",
      desc: "Sensory macro texture demos, before-and-after skin glow transitions, and high-energy GRWM (Get Ready With Me) clips.",
      badge: "Viral Impulse Leader"
    },
    {
      title: "Home & Lifestyle Pioneers",
      count: "95 Vetted Creators",
      commission: "15% Dynamic Plan",
      volume: "110+ Tagged Videos/Mo",
      roas: "4.8x Sample ROI",
      desc: "Aesthetic morning routine integration, desk organization transformations, and smart kitchen gadget reviews.",
      badge: "High Average Order Value"
    },
    {
      title: "Viral Impulse Reviewers",
      count: "120 Vetted Creators",
      commission: "22% Dynamic Plan",
      volume: "160+ Tagged Videos/Mo",
      roas: "5.1x Sample ROI",
      desc: "Stop-the-scroll 3-second problem/solution hooks engineered to trigger instant impulse checkout on For You Page.",
      badge: "Top Share of Voice"
    }
  ];

  // State for Section 3: Live Studio Flash Deal simulator
  const [liveFlashDeal, setLiveFlashDeal] = useState<boolean>(true);

  // State for Section 5: Spark Ads Hook Retention
  const [activeHookType, setActiveHookType] = useState<"curiosity" | "problem" | "asmr">("curiosity");

  return (
    <div className="relative min-h-screen bg-[#FAFAFC] text-slate-900 pt-24 pb-24 overflow-hidden selection:bg-[#FE2C55] selection:text-white">
      
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
      <div className="absolute top-20 left-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-96 right-10 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* ============================================================ */}
      {/* 1. HERO SECTION (WITH TIKTOK LIVE BROADCAST GRAPHIC)         */}
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
                <Flame className="w-3.5 h-3.5 text-[#FE2C55]" />
                <span>Official TikTok Shop Authorized Partner</span>
                <span className="text-slate-300">•</span>
                <span className="text-teal-600 font-bold">Tier-1 TSP</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                Turn TikTok Virality Into Predictable,{" "}
                <span className="block mt-1.5">
                  <CurvyUnderline strokeColor="#FE2C55" variant="curvy">
                    Multi-Million GMV.
                  </CurvyUnderline>
                </span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal mx-auto lg:mx-0">
                TikTok Shop is the highest-converting impulse commerce channel on earth. We deploy turnkey creator affiliate networks, run live shopping broadcasts, and sync inventory seamlessly with your existing Amazon FBA warehouses.
              </p>

              {/* 3 Quick Value Pills */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 max-w-lg mx-auto lg:mx-0">
                <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-left">
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Creator Network</div>
                  <div className="text-base sm:text-lg font-extrabold text-teal-600 font-display">4,200+</div>
                  <div className="text-[10px] font-bold text-teal-800 bg-teal-50 px-1.5 py-0.5 rounded-full inline-block mt-0.5">500+ Seeded/Mo</div>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-left">
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Live Studio GMV</div>
                  <div className="text-base sm:text-lg font-extrabold text-slate-900 font-display">$35K / Run</div>
                  <div className="text-[10px] font-bold text-[#E05300] bg-orange-50 px-1.5 py-0.5 rounded-full inline-block mt-0.5">Turnkey Hosts</div>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-left">
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Spark Ads ROAS</div>
                  <div className="text-base sm:text-lg font-extrabold text-[#FE2C55] font-display">4.85x</div>
                  <div className="text-[10px] font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded-full inline-block mt-0.5">-32% CPA</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 shadow-md shadow-teal-500/25 transition-all flex items-center justify-center gap-2 group active:scale-98"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Launch TikTok Shop Engine</span>
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

            {/* Right Hero Visual: 3D TikTok Viral Commerce (No-background transparent render) */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              <div 
                onClick={() => setLightboxState({
                  isOpen: true,
                  imageSrc: "/assets/graphics/tiktok-viral-commerce.webp",
                  title: "TikTok Shop Viral Commerce Architecture",
                  subtitle: "Turnkey Creator Affiliate Network • Live Shopping Broadcasts • Amazon MCF Sync",
                  metrics: [
                    { label: "Creator Network", value: "4,200+ Vetted" },
                    { label: "Live GMV / Run", value: "$35,000" },
                    { label: "Blended ROAS", value: "4.85x" }
                  ]
                })}
                className="group relative w-full max-w-md aspect-square flex items-center justify-center cursor-zoom-in"
              >
                {/* Subtle atmospheric cyan/rose TikTok ambient glow behind floating render */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FE2C55]/25 via-teal-400/20 to-rose-400/15 rounded-full blur-3xl pointer-events-none group-hover:scale-105 transition-transform duration-700" />
                
                <div className="relative w-full h-full p-4 transition-transform duration-500 group-hover:scale-[1.03]">
                  <Image
                    src="/assets/graphics/tiktok-viral-commerce.webp"
                    alt="TikTok Viral Commerce 3D Ecosystem"
                    fill
                    priority
                    className="object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Floating Verified Badge 1: Top-Right */}
                <div className="absolute top-4 right-2 sm:right-4 bg-white/95 backdrop-blur-md border border-slate-200/90 py-2.5 px-3.5 rounded-2xl shadow-xl shadow-slate-900/10 flex items-center gap-2.5 z-20 animate-float">
                  <div className="w-8 h-8 rounded-xl bg-rose-50 text-[#FE2C55] border border-rose-200 flex items-center justify-center font-bold">
                    <Flame className="w-4 h-4 text-[#FE2C55]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Live Status</div>
                    <div className="text-xs font-bold text-slate-900">Tier-1 TSP Partner</div>
                  </div>
                </div>

                {/* Floating Verified Badge 2: Bottom-Left */}
                <div className="absolute bottom-4 left-2 sm:left-4 bg-white/95 backdrop-blur-md border border-slate-200/90 py-2.5 px-3.5 rounded-2xl shadow-xl shadow-slate-900/10 flex items-center gap-2.5 z-20 animate-float-delayed">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 border border-teal-200 flex items-center justify-center font-bold">
                    <Sparkles className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Seeding Velocity</div>
                    <div className="text-xs font-bold text-slate-900">500+ Creators / Mo</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. THE 500+ CREATOR SEEDING MACHINE (INTERACTIVE SIMULATOR)  */}
      {/* ============================================================ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-teal-600" />
            <span>Industrial Creator Seeding Flywheel</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-950">
            The 500+ Creator{" "}
            <CurvyUnderline strokeColor="#0D9488" variant="curvy">
              Seeding Machine
            </CurvyUnderline>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            TikTok Shop is an affiliate-first channel. We don&apos;t just ask creators to post — we run an automated PR gifting machine with tiered commission plans that turns micro-influencers into a 24/7 sales force.
          </p>
        </div>

        {/* Interactive Creator Hub Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Generated Flywheel Graphic with Zoom */}
          <div className="lg:col-span-6 relative">
            <div 
              onClick={() => setLightboxState({
                isOpen: true,
                imageSrc: "/assets/graphics/tiktok_creator_pr_box.jpg",
                title: "500+ Creator Affiliate Seeding Machine Architecture",
                subtitle: "Turnkey Sample Outreach • Tiered Commissioning • Automated Video Tagging",
                metrics: [
                  { label: "Seeding Capacity", value: "500+ / Mo" },
                  { label: "Post Rate", value: "82.4%" },
                  { label: "Affiliate Share", value: "40% - 65% GMV" }
                ]
              })}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl cursor-zoom-in"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/assets/graphics/tiktok_creator_pr_box.jpg"
                  alt="TikTok Creator Affiliate Seeding Flywheel"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 px-4 py-2 rounded-full text-xs font-bold text-slate-900 shadow-md flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-teal-600" />
                  <span>Inspect Seeding Flywheel</span>
                </span>
              </div>

              <div className="p-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <span className="font-bold text-white">4,200+ Vetted Creator Network</span>
                <span className="text-teal-400 font-bold font-mono">82.4% Post Rate</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Niche Selector */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Select Vertical to Simulate Seeding Velocity:
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {creatorNiches.map((niche, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveNiche(idx)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    activeNiche === idx
                      ? "bg-slate-900 text-white border-slate-900 shadow-md scale-102"
                      : "bg-white text-slate-700 border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  <div className="text-xs font-bold">{niche.title}</div>
                  <div className={`text-[10px] mt-0.5 ${activeNiche === idx ? "text-teal-400" : "text-slate-500"}`}>
                    {niche.count}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Niche Specs Card */}
            <motion.div
              key={activeNiche}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-lg space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#E05300] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                  {creatorNiches[activeNiche].badge}
                </span>
                <span className="text-xs font-mono font-bold text-teal-600">
                  {creatorNiches[activeNiche].commission}
                </span>
              </div>

              <h3 className="text-lg font-bold font-display text-slate-900">
                {creatorNiches[activeNiche].title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {creatorNiches[activeNiche].desc}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] text-slate-500">Monthly Content Output</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    {creatorNiches[activeNiche].volume}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] text-slate-500">Sample Cost Return</div>
                  <div className="text-sm font-bold text-emerald-600 mt-0.5">
                    {creatorNiches[activeNiche].roas}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </section>

      {/* ============================================================ */}
      {/* 3. 24/7 LIVE STREAM COMMERCE & FLASH DROPS (INTERACTIVE)    */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#0B1120] text-white relative overflow-hidden border-y border-slate-800">
        
        {/* Glow ambient background lights */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy & Live Simulator Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-bold uppercase tracking-wider">
                <Radio className="w-3.5 h-3.5 text-teal-400" />
                <span>Turnkey 4K Shopping Broadcasts</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white leading-tight">
                Live Shopping That Drives{" "}
                <CurvyUnderline strokeColor="#2DD4BF" variant="curvy">
                  Thousands of Units.
                </CurvyUnderline>
              </h2>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Live shopping is interactive impulse entertainment. From our dedicated studio with charismatic trained hosts to real-time flash coupon drops, we turn your catalog into a must-watch retail spectacle.
              </p>

              {/* Interactive Flash Deal Simulator */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300">Live Mechanics Demonstration:</span>
                  <button
                    onClick={() => setLiveFlashDeal(!liveFlashDeal)}
                    className="px-3 py-1 rounded-lg text-xs font-bold bg-[#FE2C55] text-white shadow-xs cursor-pointer hover:bg-rose-600 transition-all"
                  >
                    {liveFlashDeal ? "Flash Drop ACTIVE" : "Trigger Flash Drop"}
                  </button>
                </div>

                {liveFlashDeal ? (
                  <div className="p-3.5 rounded-xl bg-teal-950/60 border border-teal-500/40 text-xs space-y-1.5">
                    <div className="font-bold text-teal-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                      <span>15-Minute Flash Countdown Running:</span>
                    </div>
                    <div className="text-slate-300 text-[11px]">
                      Chat conversion rate spikes from 4.2% to <strong>14.2%</strong> as host pins limited-quantity stock with live countdown timer.
                    </div>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
                    Click the button above to simulate how an hourly live flash deal triggers buyer urgency.
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <div className="text-lg font-bold font-display text-white">$4.5K – $35K</div>
                    <div className="text-[10px] text-slate-400">Avg GMV / 2h Session</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <div className="text-lg font-bold font-display text-emerald-400">+320%</div>
                    <div className="text-[10px] text-slate-400">Watch Time vs Industry</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Studio Production Features & Cinematic Studio Visual */}
            <div className="lg:col-span-6 space-y-4">
              {/* Cinematic 4K Studio Broadcast Card */}
              <div 
                onClick={() => setLightboxState({
                  isOpen: true,
                  imageSrc: "/assets/graphics/tiktok_live_studio_cinematic.jpg",
                  title: "TikTok Shop 4K Broadcast Studio Architecture",
                  subtitle: "Turnkey Host Operations, Flash Drops & Pinned Checkouts",
                  metrics: [
                    { label: "Live Run-Rate", value: "$28,450 GMV" },
                    { label: "Viewer CVR", value: "12.4%" },
                    { label: "Watch Time", value: "4m 18s" }
                  ]
                })}
                className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl cursor-zoom-in"
              >
                <div className="relative aspect-[16/8.5] w-full">
                  <Image
                    src="/assets/graphics/tiktok_live_studio_cinematic.jpg"
                    alt="TikTok Shop 4K Broadcast Studio Showcase"
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  {/* Subtle live indicator badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#FE2C55] text-white shadow-sm flex items-center gap-1.5 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                    <span>Live Studio Active</span>
                  </div>
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-md flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-teal-600" />
                      <span>Inspect 4K Studio</span>
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Radio className="w-3.5 h-3.5 text-teal-400" />
                    <span className="font-bold text-white">4K Multi-Cam OBS Hardware Rig</span>
                  </div>
                  <span className="text-teal-400 font-bold font-mono">$28.4K Avg GMV / Run</span>
                </div>
              </div>

              {/* 4 Feature cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <SpotlightCard
                  enableTilt
                  className="p-5 bg-slate-950 border-slate-800 text-white"
                  spotlightColor="rgba(0, 242, 254, 0.12)"
                >
                  <div className="w-9 h-9 rounded-xl bg-teal-950 text-teal-400 border border-teal-800 flex items-center justify-center font-bold mb-2.5">
                    <Mic className="w-4 h-4 text-teal-400" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white font-display">Trained Native Hosts</h3>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    Charismatic e-commerce hosts trained in objection handling, product demos, and chat FOMO.
                  </p>
                </SpotlightCard>

                <SpotlightCard
                  enableTilt
                  className="p-5 bg-slate-950 border-slate-800 text-white"
                  spotlightColor="rgba(254, 44, 85, 0.12)"
                >
                  <div className="w-9 h-9 rounded-xl bg-rose-950 text-rose-400 border border-rose-800 flex items-center justify-center font-bold mb-2.5">
                    <Video className="w-4 h-4 text-rose-400" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white font-display">Multi-Camera 4K OBS</h3>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    Pro boom mics, lighting rigs, and instant macro camera switching for premium product details.
                  </p>
                </SpotlightCard>

                <SpotlightCard
                  enableTilt
                  className="p-5 bg-slate-950 border-slate-800 text-white"
                  spotlightColor="rgba(255, 107, 0, 0.12)"
                >
                  <div className="w-9 h-9 rounded-xl bg-orange-950 text-[#FF6B00] border border-orange-800 flex items-center justify-center font-bold mb-2.5">
                    <MessageSquare className="w-4 h-4 text-[#FF6B00]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white font-display">Active Chat Moderation</h3>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    Dedicated moderators pin hot products, delete spam, and direct shoppers to checkout links.
                  </p>
                </SpotlightCard>

                <SpotlightCard
                  enableTilt
                  className="p-5 bg-slate-950 border-slate-800 text-white"
                  spotlightColor="rgba(16, 185, 129, 0.12)"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center font-bold mb-2.5">
                    <Scissors className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white font-display">Live Clip Repurposing</h3>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    High-converting broadcast moments cut into 15-second shoppable ads and Spark content.
                  </p>
                </SpotlightCard>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. OMNICHANNEL LOGISTICS BRIDGE (AMAZON MCF + TIKTOK SYNC)   */}
      {/* ============================================================ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Generated Logistics Bridge Visual with Zoom */}
          <div className="lg:col-span-6 relative">
            <div 
              onClick={() => setLightboxState({
                isOpen: true,
                imageSrc: "/assets/graphics/tiktok_logistics_fulfillment.jpg",
                title: "Unified Omnichannel Logistics Bridge Architecture",
                subtitle: "TikTok Shop Orders • Amazon Multi-Channel Fulfillment (MCF) Sync",
                metrics: [
                  { label: "Dispatch SLA", value: "< 48 Hours" },
                  { label: "Sync Accuracy", value: "99.9%" },
                  { label: "Referral Bonus", value: "10% Cash" }
                ]
              })}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl cursor-zoom-in"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/assets/graphics/tiktok_logistics_fulfillment.jpg"
                  alt="TikTok Shop to Amazon MCF Logistics Sync Bridge"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 px-4 py-2 rounded-full text-xs font-bold text-slate-900 shadow-md flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-teal-600" />
                  <span>Inspect MCF Sync Bridge</span>
                </span>
              </div>

              <div className="p-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <span className="font-bold text-white">Amazon MCF Blank-Box Delivery</span>
                <span className="text-emerald-400 font-bold font-mono">100% SLA Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Copy: Logistics Moat */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <ShoppingBag className="w-3.5 h-3.5 text-blue-600" />
              <span>Zero Separate Warehouse Friction</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950 leading-tight">
              Fulfill From Existing Inventory with{" "}
              <CurvyUnderline strokeColor="#3B82F6" variant="curvy">
                Amazon MCF Sync.
              </CurvyUnderline>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Expanding to TikTok Shop shouldn&apos;t require leasing another warehouse. We connect TikTok Merchant Center directly to Amazon Multi-Channel Fulfillment (MCF). Orders are picked, packed in unbranded boxes, and delivered in 48 hours.
            </p>

            <div className="space-y-3 pt-1 text-xs">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Zero Stockout Double-Counting:</div>
                  <div className="text-slate-500 text-[11px]">Real-time API sync protects your inventory numbers across both platforms automatically.</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#FF6B00] border border-orange-200 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">10% Brand Referral Bonus:</div>
                  <div className="text-slate-500 text-[11px]">Amazon Attribution links on creator bios earn you a 10% cash rebate on traffic that converts on Amazon.</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors"
              >
                <span>Audit Your Catalog for MCF TikTok Sync</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </section>

      {/* ============================================================ */}
      {/* 5. SPARK ADS & GMV MAX SCALING (INTERACTIVE ROAS MULTIPLIER) */}
      {/* ============================================================ */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Spark Ads Strategy & Hook Switcher */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-teal-400" />
                <span>Paid Media Amplification</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white leading-tight">
                Scale Winning Creator Posts at{" "}
                <CurvyUnderline strokeColor="#2DD4BF" variant="curvy">
                  4.85x Blended ROAS.
                </CurvyUnderline>
              </h2>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                When a creator video starts generating organic orders, we obtain Spark authorization codes to run paid ads directly from their personal profile, keeping comments, likes, and authentic credibility intact.
              </p>

              {/* 3-Second Hook Retention Selector */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-slate-300">
                  Inspect Our High-Converting Hook Angles:
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setActiveHookType("curiosity")}
                    className={`p-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      activeHookType === "curiosity"
                        ? "bg-teal-600 text-white border-teal-500 shadow-xs"
                        : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    Curiosity Hook
                  </button>
                  <button
                    onClick={() => setActiveHookType("problem")}
                    className={`p-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      activeHookType === "problem"
                        ? "bg-[#FE2C55] text-white border-rose-500 shadow-xs"
                        : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    Problem / Solution
                  </button>
                  <button
                    onClick={() => setActiveHookType("asmr")}
                    className={`p-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      activeHookType === "asmr"
                        ? "bg-[#FF6B00] text-white border-orange-500 shadow-xs"
                        : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    ASMR Sensory
                  </button>
                </div>

                {/* Hook Detail */}
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                  {activeHookType === "curiosity" && (
                    <div>
                      <div className="text-teal-300 font-bold">&ldquo;I bet you didn&apos;t know TikTok had this...&rdquo;</div>
                      <div className="text-slate-400 text-[11px]">46.2% 3-second retention. Disrupts scroll pattern and introduces unexpected product benefit.</div>
                    </div>
                  )}
                  {activeHookType === "problem" && (
                    <div>
                      <div className="text-rose-300 font-bold">&ldquo;Stop making this mistake when shopping for [category]...&rdquo;</div>
                      <div className="text-slate-400 text-[11px]">42.8% retention. Identifies customer pain point and positions your SKU as the instant solution.</div>
                    </div>
                  )}
                  {activeHookType === "asmr" && (
                    <div>
                      <div className="text-orange-300 font-bold">&ldquo;[Audio-Only Macro Unboxing & Snap Sounds]&rdquo;</div>
                      <div className="text-slate-400 text-[11px]">38.5% retention. Satisfying sensory tactile audio driving +62% click-through to product showcase.</div>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Right: Spark Ads Graphic with Zoom */}
            <div className="lg:col-span-6 relative">
              <div 
                onClick={() => setLightboxState({
                  isOpen: true,
                  imageSrc: "/assets/graphics/tiktok_viral_velocity.jpg",
                  title: "TikTok Spark Ads & GMV Max Scaling Engine",
                  subtitle: "Algorithmic Paid Amplification • 4.85x Blended ROAS • Creative Refresh Cycles",
                  metrics: [
                    { label: "Target ROAS", value: "4.85x" },
                    { label: "CPA vs Meta", value: "-32%" },
                    { label: "Scale Cap", value: "$50K+/Day" }
                  ]
                })}
                className="group relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl cursor-zoom-in"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/assets/graphics/tiktok_viral_velocity.jpg"
                    alt="TikTok Spark Ads 4.85x ROAS and GMV Max Optimization"
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 px-4 py-2 rounded-full text-xs font-bold text-slate-900 shadow-md flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>Inspect Spark Ads Blueprint</span>
                  </span>
                </div>

                <div className="p-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-bold text-white">GMV Max Machine Learning</span>
                  <span className="text-teal-400 font-bold font-mono">4.85x Verified ROAS</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. VIRAL UGC HOOK PRODUCTION (3 DISTINCT SPOTLIGHT CARDS)    */}
      {/* ============================================================ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Video className="w-3.5 h-3.5 text-[#FE2C55]" />
            <span>Creative Content Factory</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950">
            Native Short-Form Video Production
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Polished corporate ads fail on TikTok. We produce 20 to 60 raw, authentic creator videos every month engineered to look native to the FYP feed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SpotlightCard
            enableTilt
            className="p-8 border-slate-200/90 flex flex-col justify-between"
            spotlightColor="rgba(0, 242, 254, 0.12)"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                <Play className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900">
                3-Second Hook Engineering
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Every video tests 5 distinct hook angles (curiosity, FOMO, negative framing) to ensure retention stays above 42% past the critical 3-second mark.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-[11px] font-bold text-teal-700 uppercase tracking-wider">
              &gt; 42% Retention Ceiling
            </div>
          </SpotlightCard>

          <SpotlightCard
            enableTilt
            className="p-8 border-slate-200/90 flex flex-col justify-between"
            spotlightColor="rgba(254, 44, 85, 0.12)"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-[#FE2C55]">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900">
                Frictionless Yellow Cart Path
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Native screen overlays, trending TikTok sounds, and direct callouts to the orange product pill drive conversion rates between 4.8% and 9.1%.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-[11px] font-bold text-[#FE2C55] uppercase tracking-wider">
              Up to 9.1% Click-to-Cart
            </div>
          </SpotlightCard>

          <SpotlightCard
            enableTilt
            className="p-8 border-slate-200/90 flex flex-col justify-between"
            spotlightColor="rgba(255, 107, 0, 0.12)"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00]">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900">
                7-Day Creative Refresh Cycle
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                TikTok audiences exhaust creative fast. We continuously rotate new UGC hooks into your ad account weekly, permanently preventing creative fatigue.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-[11px] font-bold text-[#E05300] uppercase tracking-wider">
              Zero Ad Exhaustion
            </div>
          </SpotlightCard>
        </div>

      </section>

      {/* ============================================================ */}
      {/* 7. CLOSING HIGH-CONVERSION TIKTOK AUDIT CTA                  */}
      {/* ============================================================ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 text-center space-y-6 bg-texture relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Scale Without Inventory Risk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950">
            Ready to Unlock Multi-Million{" "}
            <CurvyUnderline strokeColor="#FE2C55" variant="double">
              TikTok Shop GMV?
            </CurvyUnderline>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Get an empirical 24-point audit of your product catalog&apos;s viral potential, creator affiliate commission models, and automated Amazon MCF integration within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 shadow-md shadow-teal-500/25 transition-all flex items-center justify-center gap-2 group active:scale-98"
            >
              <span>Schedule Free TikTok Catalog Audit</span>
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
