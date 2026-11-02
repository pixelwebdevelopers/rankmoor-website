"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  BarChart3, 
  CheckCircle2, 
  TrendingUp,
  Maximize2
} from "lucide-react";
import { CASE_STUDIES, COMPANY_INFO } from "@/data/content";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ImageLightbox } from "@/components/ImageLightbox";

export default function CaseStudiesPage() {
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
    <div className="relative min-h-screen bg-[#FAFAFC] text-slate-900 pt-24 pb-24 overflow-hidden">
      
      {/* Lightbox for inspecting verified dashboards */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState({ ...lightboxState, isOpen: false })}
        imageSrc={lightboxState.imageSrc}
        title={lightboxState.title}
        subtitle={lightboxState.subtitle}
        metrics={lightboxState.metrics}
      />

      {/* Hero Header */}
      <section className="relative w-full bg-[#FAF7F2] bg-texture border-b border-slate-200 py-12 sm:py-16 lg:py-20 text-center lg:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Copy & Metrics */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Empirical Proof & Verified Dashboards</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950 tracking-tight leading-[1.18]">
                We Let the Numbers Do the Talking.{" "}
                <span className="text-[#FF6B00] block mt-1.5">
                  $20M+ in Verified Marketplace Data.
                </span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                In an industry plagued by fabricated claims and unverified screenshots, Rankmoor publishes actual Seller Central app captures, Ads Campaign Manager reports, and desktop sales records.
              </p>

              {/* 3 Quick Verified Metric Pills */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-lg mx-auto lg:mx-0">
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-left">
                  <div className="text-[11px] text-slate-500 font-medium">12M Sales</div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 font-display">$20.23M+</div>
                  <div className="text-[10px] font-bold text-emerald-700">+200% YoY</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-left">
                  <div className="text-[11px] text-slate-500 font-medium">PPC ACOS</div>
                  <div className="text-base sm:text-lg font-bold text-emerald-600 font-display">16.00%</div>
                  <div className="text-[10px] font-bold text-[#E05300]">$7.37M Sales</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-left">
                  <div className="text-[11px] text-slate-500 font-medium">Delivered</div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 font-display">480K+</div>
                  <div className="text-[10px] font-bold text-slate-600">Units Total</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Claim Free 24-Point Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>WhatsApp with CEO</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-6">
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
            </div>

          </div>
        </div>
      </section>

      {/* Case Studies Detailed Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {CASE_STUDIES.map((cs, idx) => (
          <div
            key={cs.id}
            id={cs.slug}
            className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-sm hover:shadow-xl transition-all relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Screenshot Media */}
              <div className="lg:col-span-6 relative">
                <div 
                  onClick={() => setLightboxState({
                    isOpen: true,
                    imageSrc: cs.image,
                    title: cs.title,
                    subtitle: `Case Study 0${idx + 1} • ${cs.category} (${cs.growthTag})`,
                    metrics: cs.metrics.map(m => ({ label: m.label, value: m.value }))
                  })}
                  className="group relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-md p-2.5 cursor-zoom-in hover:border-orange-200 transition-colors"
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

              {/* Data & Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="text-xs font-mono font-bold uppercase text-[#E05300] tracking-wider mb-2">
                    Case Study 0{idx + 1} • {cs.category}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-3">
                    {cs.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {cs.summary}
                  </p>
                </div>

                {/* 4 Metric Pills */}
                <div className="grid grid-cols-2 gap-3">
                  {cs.metrics.map((m) => (
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

                {/* Challenge & Strategy */}
                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                  <div>
                    <strong className="text-slate-900 block mb-1">The Bottleneck:</strong>
                    <p className="text-slate-600 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1">The Rankmoor Strategy:</strong>
                    <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                      {cs.strategy.slice(0, 3).map((item) => (
                        <li key={item} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Testimonial Quote */}
                {cs.quote && (
                  <div className="p-4 rounded-xl bg-orange-50/60 border-l-3 border-[#FF6B00] text-xs text-slate-700 italic">
                    &ldquo;{cs.quote.text}&rdquo;
                    <div className="mt-2 text-slate-900 font-semibold not-italic">
                      — {cs.quote.author}, <span className="text-slate-500">{cs.quote.role}</span>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 text-center space-y-6 bg-texture">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Proven Scalability</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
            Want Similar Results for Your Brand?
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Get an empirical 24-point diagnostic review of your product catalog, PPC spend efficiency, and organic keyword position.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] shadow-md shadow-orange-500/25 transition-all flex items-center gap-2"
            >
              <span>Book Your Free Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all flex items-center gap-2 shadow-sm"
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
