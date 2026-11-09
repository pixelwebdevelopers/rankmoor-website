"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  BarChart3, 
  CheckCircle2, 
  TrendingUp,
  Maximize2,
  Filter,
  Star,
  Quote,
  Target,
  Zap,
  Clock
} from "lucide-react";
import { CASE_STUDIES, COMPANY_INFO } from "@/data/content";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ImageLightbox } from "@/components/ImageLightbox";
import { CurvyUnderline } from "@/components/CurvyUnderline";
import { SpotlightCard } from "@/components/SpotlightCard";

export default function CaseStudiesPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
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

  const filteredCaseStudies = selectedFilter === "all"
    ? CASE_STUDIES
    : selectedFilter === "amazon"
    ? CASE_STUDIES.filter(cs => cs.category.toLowerCase().includes("amazon"))
    : selectedFilter === "ppc"
    ? CASE_STUDIES.filter(cs => cs.title.toLowerCase().includes("ppc") || cs.category.toLowerCase().includes("ppc"))
    : CASE_STUDIES.filter(cs => cs.category.toLowerCase().includes("growth") || cs.category.toLowerCase().includes("scale"));

  return (
    <div className="relative min-h-screen bg-[#FAFAFC] text-slate-900 pt-24 pb-24 overflow-hidden selection:bg-[#FF6B00] selection:text-white">
      
      {/* Lightbox for inspecting verified dashboards */}
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
      <div className="absolute top-80 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* ============================================================ */}
      {/* 1. HERO SECTION (WITH SLIDE ANIMATION & CURVY UNDERLINE)     */}
      {/* ============================================================ */}
      <section className="relative w-full bg-[#FAF7F2] bg-texture border-b border-slate-200 py-14 sm:py-20 text-center lg:text-left overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Copy & Metrics (Slide in Left) */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Empirical Proof & Verified Dashboards</span>
                <span className="text-slate-300">•</span>
                <span className="text-[#FF6B00]">Real Seller Central</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-950 tracking-tight leading-[1.15]">
                We Let the Numbers Do the Talking.{" "}
                <span className="block mt-1.5">
                  <CurvyUnderline strokeColor="#FF6B00" variant="curvy">
                    $20M+ Verified Data.
                  </CurvyUnderline>
                </span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal mx-auto lg:mx-0">
                In an industry plagued by fabricated claims and unverified screenshots, Rankmoor publishes actual Seller Central app captures, Ads Campaign Manager reports, and desktop sales records.
              </p>

              {/* 3 Quick Verified Metric Pills */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 max-w-lg mx-auto lg:mx-0">
                <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-left">
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">12M Sales</div>
                  <div className="text-base sm:text-xl font-extrabold text-slate-900 font-display">$20.23M+</div>
                  <div className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full inline-block mt-0.5">+200% YoY</div>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-left">
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">PPC ACOS</div>
                  <div className="text-base sm:text-xl font-extrabold text-emerald-600 font-display">16.00%</div>
                  <div className="text-[10px] font-bold text-[#E05300] bg-orange-50 px-1.5 py-0.5 rounded-full inline-block mt-0.5">$7.37M Sales</div>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-left">
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Fulfilled</div>
                  <div className="text-base sm:text-xl font-extrabold text-slate-900 font-display">480K+</div>
                  <div className="text-[10px] font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded-full inline-block mt-0.5">Zero Stockouts</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 group active:scale-98"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Claim Free 24-Point Audit</span>
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

            {/* Right Hero Visual Card (Slide in Right with 3D Tilt) */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <div 
                onClick={() => setLightboxState({
                  isOpen: true,
                  imageSrc: "/assets/graphics/case-studies-hero.webp",
                  title: "Verified Amazon Seller Central & Ads Manager Portfolio",
                  subtitle: "Real 12-Month Performance Audit: $20.23M Volume & 16.00% PPC ACOS",
                  metrics: [
                    { label: "Documented Sales", value: "$20,230,000+" },
                    { label: "PPC ACOS", value: "16.00%" },
                    { label: "Units Shipped", value: "480,000+" },
                  ]
                })}
                className="group relative rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 p-2 sm:p-3 overflow-hidden cursor-zoom-in transition-all hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="relative aspect-[16/10] sm:aspect-[16/10.5] rounded-2xl overflow-hidden bg-slate-50">
                  <Image
                    src="/assets/graphics/case-studies-hero.webp"
                    alt="Verified Performance Audit - Amazon Seller Central & Ads Console"
                    fill
                    priority
                    className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Subtle hover overlay badge */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-xl bg-slate-900/80 text-white text-xs font-bold backdrop-blur-md flex items-center gap-2 shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Click to Enlarge Proof</span>
                    </span>
                  </div>
                </div>

                <div className="mt-3 px-3 py-1.5 flex items-center justify-between text-xs text-slate-600 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="font-semibold text-slate-800">100% Real Seller Central Data</span>
                  </div>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                    Dual Console Audit
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. INTERACTIVE CATEGORY FILTER                               */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
              Documented Client Case Studies
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Filter by operational focus to inspect relevant verified marketplace data
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Cases" },
              { id: "amazon", label: "Amazon FBA Scale" },
              { id: "ppc", label: "PPC Science (16% ACOS)" },
              { id: "growth", label: "Catalog Turnaround" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelectedFilter(btn.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                  selectedFilter === btn.id
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CASE STUDIES DETAILED GALLERY (ALTERNATING & SPOTLIGHT)   */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <AnimatePresence mode="popLayout">
          {filteredCaseStudies.map((cs, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={cs.id}
                id={cs.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all relative overflow-hidden"
              >
                <SpotlightCard
                  enableTilt
                  spotlightColor="rgba(255, 107, 0, 0.08)"
                  className="p-6 sm:p-10 border-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    {/* Screenshot Media Column */}
                    <div className={`lg:col-span-6 relative ${isEven ? "order-1" : "order-1 lg:order-2"}`}>
                      <div 
                        onClick={() => setLightboxState({
                          isOpen: true,
                          imageSrc: cs.image,
                          title: cs.title,
                          subtitle: `Case Study 0${idx + 1} • ${cs.category} (${cs.growthTag})`,
                          metrics: cs.metrics.map(m => ({ label: m.label, value: m.value }))
                        })}
                        className="group relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-md p-2.5 cursor-zoom-in hover:border-orange-300 transition-colors"
                      >
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                          <Image
                            src={cs.image}
                            alt={cs.title}
                            fill
                            className="object-contain object-center group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm flex items-center gap-1 shadow-sm">
                            <Maximize2 className="w-3 h-3" />
                            <span>Zoom</span>
                          </div>
                        </div>

                        <div className="mt-3 flex items-center justify-between text-xs px-2 text-slate-500">
                          <span className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="font-medium">Verified Client Capture</span>
                          </span>
                          <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                            {cs.growthTag}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Data & Narrative Column */}
                    <div className={`lg:col-span-6 space-y-5 ${isEven ? "order-2" : "order-2 lg:order-1"}`}>
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono font-bold uppercase text-[#E05300] tracking-wider mb-2.5">
                          <Target className="w-3.5 h-3.5 text-[#FF6B00]" />
                          <span>Case Study 0{idx + 1} • {cs.category}</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 leading-tight">
                          {cs.title}
                        </h3>

                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                          {cs.summary}
                        </p>
                      </div>

                      {/* 4 Metric Pills */}
                      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                        {cs.metrics.map((m) => (
                          <div key={m.label} className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                            <div className="text-[10px] sm:text-[11px] text-slate-500 mb-0.5">{m.label}</div>
                            <div className="text-base sm:text-lg font-extrabold text-slate-900 font-display">
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

                      {/* Challenge & Strategy */}
                      <div className="space-y-2.5 pt-1 text-xs text-slate-700">
                        <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200/70">
                          <strong className="text-rose-900 block mb-0.5 font-bold">The Bottleneck:</strong>
                          <p className="text-rose-800 leading-relaxed text-[11px] sm:text-xs">{cs.challenge}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/70">
                          <strong className="text-emerald-900 block mb-0.5 font-bold">The Rankmoor Strategy:</strong>
                          <p className="text-emerald-800 leading-relaxed text-[11px] sm:text-xs">{cs.strategy[0]}</p>
                        </div>
                      </div>

                      {/* Testimonial Quote */}
                      {cs.quote && (
                        <div className="p-3.5 rounded-xl bg-orange-50/60 border-l-4 border-[#FF6B00] text-xs text-slate-700 italic">
                          &ldquo;{cs.quote.text}&rdquo;
                          <div className="mt-1.5 text-slate-900 font-semibold not-italic text-[11px]">
                            — {cs.quote.author}, <span className="text-slate-500">{cs.quote.role}</span>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </section>

      {/* ============================================================ */}
      {/* 4. BOTTOM HIGH-IMPACT AUDIT CTA                              */}
      {/* ============================================================ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 text-center space-y-6 bg-texture relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Empirical Scaling Protocol</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950">
            Want Similar Results For{" "}
            <CurvyUnderline strokeColor="#FF6B00" variant="double">
              Your Marketplace Catalog?
            </CurvyUnderline>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Get an empirical 24-point diagnostic review of your product catalog, PPC spend efficiency, and organic keyword position within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 group active:scale-98"
            >
              <span>Book Your Free Audit</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-2 shadow-sm active:scale-98"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp CEO Mian Hassan</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
