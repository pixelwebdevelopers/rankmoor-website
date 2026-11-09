"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  MapPin, 
  Target, 
  Compass, 
  Maximize2,
  CheckCircle2,
  Award,
  TrendingUp,
  BarChart3,
  Clock,
  Layers,
  Star
} from "lucide-react";
import { COMPANY_INFO, FOUNDER_INFO } from "@/data/content";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ImageLightbox } from "@/components/ImageLightbox";
import { CurvyUnderline } from "@/components/CurvyUnderline";
import { SpotlightCard } from "@/components/SpotlightCard";

export default function AboutPage() {
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

  return (
    <div className="relative min-h-screen bg-[#FAFAFC] text-slate-900 pt-24 pb-24 overflow-hidden selection:bg-[#FF6B00] selection:text-white">
      
      {/* Lightbox Modal */}
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
      <div className="absolute top-96 right-10 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* ============================================================ */}
      {/* 1. HERO SECTION (WITH SLIDE ANIMATION & CURVY UNDERLINE)     */}
      {/* ============================================================ */}
      <section className="relative w-full bg-[#FAF7F2] bg-texture border-b border-slate-200 py-14 sm:py-20 text-center lg:text-left overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column (Slide in Left) */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider shadow-2xs">
                <Compass className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Our Ethos & Origin</span>
                <span className="text-orange-300">•</span>
                <span>Category Moats</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-950 tracking-tight leading-[1.15]">
                Built For Founders Who Refuse To Be{" "}
                <span className="block mt-1.5">
                  <CurvyUnderline strokeColor="#FF6B00" variant="curvy">
                    Another Commodity.
                  </CurvyUnderline>
                </span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal mx-auto lg:mx-0">
                Rankmoor was founded on a fundamental conviction: true marketplace scale is achieved not by chasing fleeting algorithm hacks, but by engineering authoritative, category-defining consumer brands.
              </p>

              {/* Core Tenets Checklist */}
              <div className="space-y-3 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-6 h-6 rounded-lg bg-orange-100 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Direct Executive Stewardship:</strong> Zero account management handoffs</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-6 h-6 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Amazon SPN Compliant & Verified</strong> TikTok Shop Creator Network</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Multi-Marketplace Scaling</strong> across US, UK, EU & UAE Territories</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 group active:scale-98"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Schedule Strategic Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-2 shadow-sm active:scale-98"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>WhatsApp with CEO</span>
                </a>
              </div>
            </motion.div>

            {/* Right Hero Image (Slide in Right with 3D Tilt) */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div 
                onClick={() => setLightboxState({
                  isOpen: true,
                  imageSrc: "/assets/graphics/about-hero-workstation.webp",
                  title: "Founder Mian Hassan - Strategy & Command Center",
                  subtitle: "Overseeing $20M+ in Marketplace Deployments across Amazon & TikTok Shop",
                  metrics: [
                    { label: "Client Rating", value: "4.9 / 5.0" },
                    { label: "Portfolio GMV", value: "$20.23M+" },
                    { label: "Direct Support", value: "<15 Min Response" },
                  ]
                })}
                className="group relative rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 p-2 sm:p-2.5 overflow-hidden cursor-zoom-in transition-all hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src="/assets/graphics/about-hero-workstation.webp"
                    alt="Founder Mian Hassan at Rankmoor Strategy Command"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  {/* Subtle hover overlay badge */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-xl bg-slate-900/80 text-white text-xs font-bold backdrop-blur-md flex items-center gap-2 shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>View Command Center</span>
                    </span>
                  </div>

                  {/* Top-Right Star Rating Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm flex items-center gap-1.5 text-xs font-bold text-slate-800">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>4.9 / 5.0 Rating</span>
                  </div>
                </div>

                <div className="mt-3 px-3 py-1.5 flex items-center justify-between text-xs text-slate-600 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-semibold text-slate-800">Mian Hassan • Founder & CEO</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    $20M+ Managed
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. FOUNDER EXECUTIVE PROFILE                                 */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-xl shadow-slate-200/40 relative overflow-hidden bg-texture">
          <div className="absolute inset-0 bg-white/90 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Founder Image (Slide in Left with 3D Tilt) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-3xl overflow-hidden border-2 border-orange-200 shadow-xl group">
                <Image
                  src={FOUNDER_INFO.image}
                  alt={FOUNDER_INFO.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
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

            {/* Founder Text (Slide in Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Founder & Principal Strategist</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950 leading-tight">
                Meet Mian Hassan: Built on{" "}
                <CurvyUnderline strokeColor="#FF6B00" variant="curvy">
                  Empirical Leadership
                </CurvyUnderline>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {FOUNDER_INFO.bio}
              </p>

              <blockquote className="p-4 rounded-2xl bg-orange-50/60 border-l-4 border-[#FF6B00] text-sm text-slate-700 italic leading-relaxed">
                &ldquo;{FOUNDER_INFO.quote}&rdquo;
              </blockquote>

              <div className="space-y-2.5 pt-2">
                {FOUNDER_INFO.credentials.map((cred) => (
                  <div key={cred} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all flex items-center gap-2 shadow-sm active:scale-98"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>WhatsApp Mian Hassan Directly</span>
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all flex items-center gap-2 active:scale-98"
                >
                  <span>Request Full Catalog Review</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. THE THREE LAWS OF BRAND SCALE (BENTO SPOTLIGHT CARDS)     */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Operational Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mb-3">
            The Three Laws of{" "}
            <CurvyUnderline strokeColor="#FF6B00" variant="double">
              Brand Scale
            </CurvyUnderline>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm">
            How we protect client equity and generate predictable, compounding enterprise valuation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SpotlightCard
            enableTilt
            spotlightColor="rgba(255, 107, 0, 0.12)"
            className="p-8 border-slate-200/90 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                Empirical Precision Over Hunches
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Every decision is rooted in hard search-query volume, reverse-ASIN competitor harvest data, and hour-by-hour PPC conversion probability. We eliminate guess-work.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-[11px] font-bold text-[#E05300] uppercase tracking-wider">
              Law 01 • Search Science
            </div>
          </SpotlightCard>

          <SpotlightCard
            enableTilt
            spotlightColor="rgba(16, 185, 129, 0.12)"
            className="p-8 border-slate-200/90 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                Defensible Brand Equity
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Price wars are a race to the bottom. We use luxury 3D rendering, sensory lifestyle storytelling, and Brand Registry defense to command premium margins.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
              Law 02 • Creative Moats
            </div>
          </SpotlightCard>

          <SpotlightCard
            enableTilt
            spotlightColor="rgba(59, 130, 246, 0.12)"
            className="p-8 border-slate-200/90 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                Omnichannel Flywheel
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We eliminate marketplace silos. When TikTok viral impulse surges, we route that momentum directly into Amazon branded search, locking in permanent Page 1 ranks.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-[11px] font-bold text-blue-700 uppercase tracking-wider">
              Law 03 • Channel Synergy
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. GLOBAL OFFICES & INTERNATIONAL FOOTPRINT                  */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mb-3">
            Our International Footprint
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Headquartered in Lahore with corporate and compliance offices across the United States, United Kingdom, and the United Arab Emirates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.globalOffices.map((office) => (
            <SpotlightCard
              key={office.city}
              enableTilt
              className="p-6 border-slate-200/90 shadow-2xs hover:shadow-md"
            >
              <div className="text-[11px] text-[#E05300] uppercase font-bold tracking-wider mb-1.5 flex items-center justify-between">
                <span>{office.region}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 mb-1 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF6B00]" />
                <span>{office.city}</span>
              </h3>
              <p className="text-xs text-slate-500 font-medium">{office.role}</p>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. CLOSING CONSULTATION CTA                                  */}
      {/* ============================================================ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 text-center space-y-6 bg-texture relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950">
            Partner With An Agency Operating At{" "}
            <CurvyUnderline strokeColor="#FF6B00" variant="double">
              Your Ambition
            </CurvyUnderline>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Schedule a direct strategic session with Mian Hassan and our senior growth team. We review your catalog and map high-leverage growth channels.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 group active:scale-98"
            >
              <span>Schedule Strategic Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
