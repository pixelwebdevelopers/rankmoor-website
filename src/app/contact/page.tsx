"use client";

import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Clock,
  Maximize2,
  Lock,
  ArrowRight
} from "lucide-react";
import { COMPANY_INFO, FOUNDER_INFO } from "@/data/content";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ImageLightbox } from "@/components/ImageLightbox";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brandName: "",
    channel: "both",
    revenue: "50k-200k",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FF6B00", "#FF8533", "#10B981", "#3B82F6"]
    });

    setSubmitted(true);
  };

  const scrollToForm = () => {
    const el = document.getElementById("audit-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAFAFC] text-slate-900 pt-24 pb-24 overflow-hidden">
      
      {/* Lightbox for inspecting sample audit report */}
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
                <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Strategic Partnership & Free Catalog Audit</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950 tracking-tight leading-[1.18]">
                Start Your Journey to{" "}
                <span className="text-[#FF6B00] block mt-1.5">
                  Category Dominance.
                </span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                Schedule your free 24-point empirical audit or message Founder & CEO Mian Hassan directly. We review your ASIN reverse indexing, ACOS waste, and TikTok Shop upside.
              </p>

              {/* Trust Badges Checklist */}
              <div className="space-y-2.5 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>&lt; 15-Minute</strong> Direct WhatsApp Response Time</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span><strong>100% Confidential</strong> Mutual Non-Disclosure Protection</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                  <span><strong>Actionable Intelligence:</strong> Exact ASIN & TACoS Wastage Breakdown</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5 justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Free 24-Point Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
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

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div 
                onClick={() => setLightboxState({
                  isOpen: true,
                  imageSrc: "/assets/graphics/marketplace-audit-blueprint.webp",
                  title: "Confidential 24-Point Marketplace Diagnostic Sample",
                  subtitle: "Comprehensive ASIN reverse indexing, PPC wastage analysis, and TikTok Shop upside",
                  metrics: [
                    { label: "Audit Points", value: "24 Checks" },
                    { label: "Turnaround", value: "24 Hours" },
                    { label: "Fee", value: "$0 Free" },
                  ]
                })}
                className="group relative rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 p-2 sm:p-2.5 overflow-hidden cursor-zoom-in transition-all hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="relative aspect-[16/10.5] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-slate-50">
                  <Image
                    src="/assets/graphics/marketplace-audit-blueprint.webp"
                    alt="Confidential 24-Point Marketplace Audit Diagnostic Sample"
                    fill
                    priority
                    className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Subtle hover overlay badge */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-xl bg-slate-900/80 text-white text-xs font-bold backdrop-blur-md flex items-center gap-2 shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Inspect Audit Sample</span>
                    </span>
                  </div>

                  {/* Top-Right Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-500 text-white shadow-sm flex items-center gap-1.5 text-xs font-bold">
                    <span>Sample Audit</span>
                  </div>
                </div>

                <div className="mt-3 px-3 py-1.5 flex items-center justify-between text-xs text-slate-600 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="font-semibold text-slate-800">100% Confidential Review</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#E05300] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                    Delivered in 24h
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section id="audit-form-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info & WhatsApp Area */}
          <div className="lg:col-span-5 space-y-8">
            {/* WhatsApp Priority Card */}
            <div className="rounded-3xl bg-emerald-50/70 border border-emerald-200 p-8 shadow-sm space-y-5">
              <div className="flex items-center gap-2.5 text-xs uppercase font-bold text-emerald-800 tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Fastest Response Channel</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                Chat Directly on WhatsApp
              </h3>

              <p className="text-slate-700 text-sm leading-relaxed">
                Skip the back-and-forth email scheduling. Send your store link or ASIN directly to Mian Hassan for an immediate initial voice memo or catalog breakdown.
              </p>

              <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs text-slate-700 space-y-1 shadow-2xs">
                <div className="flex items-center justify-between text-slate-500">
                  <span>Direct Number:</span>
                  <strong className="text-slate-900 font-mono">{COMPANY_INFO.phone}</strong>
                </div>
                <div className="flex items-center justify-between text-slate-500">
                  <span>Typical Response:</span>
                  <span className="text-emerald-700 font-bold">&lt; 15 Minutes</span>
                </div>
              </div>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Open WhatsApp Chat Now</span>
              </a>
            </div>

            {/* Direct Contact Info */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-8 space-y-6 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-display">
                Executive Channels
              </h4>

              <div className="space-y-4">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Direct Inquiries</div>
                    <div className="text-sm font-bold text-slate-900">{COMPANY_INFO.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Corporate Line</div>
                    <div className="text-sm font-bold text-slate-900 font-mono">{COMPANY_INFO.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Headquarters</div>
                    <div className="text-sm font-bold text-slate-900">{COMPANY_INFO.address}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Area */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-xl shadow-slate-200/40 relative">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>Confidential Catalog Review</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                  Request Your Free 24-Point Audit
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Fill in your details below. We review your ASIN reverse indexing, ACOS waste, and TikTok Shop upside. Delivered within 24 hours.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alexander Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alexander@brandname.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Brand Name or Store Link / ASIN
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. amazon.com/dp/B08XYZ... or Store Name"
                        value={formData.brandName}
                        onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Primary Focus Channel
                      </label>
                      <select
                        value={formData.channel}
                        onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#FF6B00]"
                      >
                        <option value="amazon">Amazon Marketplace Only</option>
                        <option value="tiktok">TikTok Shop Only</option>
                        <option value="both">Both (Amazon + TikTok Shop)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Current Monthly Revenue
                      </label>
                      <select
                        value={formData.revenue}
                        onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#FF6B00]"
                      >
                        <option value="under-10k">Under $10,000 / month</option>
                        <option value="10k-50k">$10,000 - $50,000 / month</option>
                        <option value="50k-200k">$50,000 - $200,000 / month</option>
                        <option value="200k-plus">$200,000+ / month (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Main Growth Bottleneck / Goals
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your current challenges (e.g. high ACOS, flat conversions, launching new SKU, expanding to TikTok Shop)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF6B00] via-[#FF7A1A] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Claim Free 24-Point Audit</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>We respect your confidentiality. Zero spam. We never disclose client brand names or proprietary ASIN metrics without explicit consent.</span>
                  </p>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-slate-900">
                    Audit Request Successfully Submitted!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our strategic analysis team has received your submission. We are compiling your reverse-ASIN competitor benchmarks and will email you within 24 hours.
                  </p>
                  <div className="pt-4">
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all shadow-md shadow-emerald-600/25"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      <span>Expedite via Direct WhatsApp With CEO</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
