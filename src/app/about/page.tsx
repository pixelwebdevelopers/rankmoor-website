"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  MapPin, 
  Target, 
  Compass, 
  Maximize2,
  CheckCircle2
} from "lucide-react";
import { COMPANY_INFO, FOUNDER_INFO } from "@/data/content";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ImageLightbox } from "@/components/ImageLightbox";

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
    <div className="relative min-h-screen bg-[#FAFAFC] text-slate-900 pt-24 pb-24 overflow-hidden">
      
      {/* Lightbox Modal */}
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
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Our Ethos & Origin</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950 tracking-tight leading-[1.18]">
                Built For Founders Who Refuse To Be{" "}
                <span className="text-[#FF6B00] block mt-1.5">
                  Another Commodity.
                </span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                Rankmoor was founded on a fundamental conviction: true marketplace scale is achieved not by chasing fleeting algorithm hacks, but by engineering authoritative, category-defining consumer brands.
              </p>

              {/* Core Tenets Checklist */}
              <div className="space-y-2.5 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                  <span>Direct Executive Stewardship: Zero account management handoffs</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                  <span>Amazon SPN Compliant & Verified TikTok Shop Creator Network</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                  <span>Multi-Marketplace Scaling across US, UK, EU & UAE Territories</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Schedule Strategic Consultation</span>
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

            {/* Right Hero Image */}
            <div className="lg:col-span-5">
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
                    <span className="text-amber-500">★</span>
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
            </div>

          </div>
        </div>
      </section>

      {/* Founder Executive Profile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-xl shadow-slate-200/40 relative overflow-hidden bg-texture">
          <div className="absolute inset-0 bg-white/90 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Founder Image */}
            <div className="lg:col-span-5 relative">
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
            </div>

            {/* Founder Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Founder & Principal Strategist</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950 leading-tight">
                Meet Mian Hassan
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {FOUNDER_INFO.bio}
              </p>

              <blockquote className="p-4 rounded-2xl bg-orange-50/60 border-l-3 border-[#FF6B00] text-sm text-slate-700 italic leading-relaxed">
                &ldquo;{FOUNDER_INFO.quote}&rdquo;
              </blockquote>

              <div className="space-y-2.5 pt-2">
                {FOUNDER_INFO.credentials.map((cred) => (
                  <div key={cred} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B00] flex-shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all flex items-center gap-2 shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>WhatsApp Mian Hassan Directly</span>
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl font-bold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all flex items-center gap-2"
                >
                  <span>Request Full Catalog Review</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-3">
            The Three Laws of Brand Scale
          </h2>
          <p className="text-slate-600 text-sm">
            How we protect client equity and generate predictable, compounding enterprise valuation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-orange-200 shadow-xs hover:shadow-lg transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">
              Empirical Precision Over Hunches
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every decision we make is rooted in hard search-query volume, reverse-ASIN competitor harvest data, and hour-by-hour PPC conversion probability. We eliminate guess-work.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-200 shadow-xs hover:shadow-lg transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">
              Defensible Brand Equity
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Price wars are a race to the bottom. We use luxury 3D rendering, sensory lifestyle storytelling, and Brand Registry defense to command premium margins that competitors cannot touch.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-200 shadow-xs hover:shadow-lg transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">
              Omnichannel Flywheel
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We eliminate marketplace silos. When TikTok viral impulse surges, we route that momentum directly into Amazon branded search, triggering algorithm rewards and permanent Page 1 ranks.
            </p>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-3">
            Our International Footprint
          </h2>
          <p className="text-slate-600 text-sm">
            Headquartered in Lahore with corporate and compliance offices across the United States, United Kingdom, and the United Arab Emirates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.globalOffices.map((office) => (
            <div
              key={office.city}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all"
            >
              <div className="text-xs text-[#E05300] uppercase font-bold tracking-wider mb-1">
                {office.region}
              </div>
              <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 mb-1 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF6B00]" />
                <span>{office.city}</span>
              </h3>
              <p className="text-xs text-slate-500 font-medium">{office.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 text-center space-y-6 bg-texture">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
            Partner With An Agency Operating At Your Ambition
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Schedule a direct consultation with Mian Hassan and our senior growth team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] shadow-md shadow-orange-500/25 transition-all flex items-center gap-2"
            >
              <span>Schedule Strategic Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
