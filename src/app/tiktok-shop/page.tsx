"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  Layers
} from "lucide-react";
import { COMPANY_INFO } from "@/data/content";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ImageLightbox } from "@/components/ImageLightbox";

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

  const services = [
    {
      id: "tiktok-creator-affiliate-machine",
      number: "01",
      badge: "Viral Distribution",
      title: "Creator & Affiliate Outreach Machine",
      tagline: "Scale Product Seeding to 500+ Vetted Creators Every Month",
      summary: "TikTok Shop is an affiliate-first commerce engine. We deploy an industrial-scale creator seeding machine: identifying, vetting, and dispatching bespoke sample packages to hundreds of creators to flood the platform with tagged shoppable videos.",
      image: "/assets/services/tiktok/tiktok-creator-machine.webp",
      highlights: [
        "Algorithmic screening of 500+ creators by past GMV and US/UK demographic match",
        "Automated sample dispatch and tracking maintaining over 82% post compliance",
        "Dynamic commission tier structuring incentivizing top-performing creator affiliates"
      ],
      benchmarks: [
        { label: "Monthly Tagged Videos", value: "120 - 300+ Videos" },
        { label: "Sample Outreach ROI", value: "5.4x Sample Cost" }
      ],
      metricsLightbox: [
        { label: "Creator Seeding", value: "500+ / Mo" },
        { label: "Affiliate Share", value: "40% - 65% GMV" },
        { label: "Posting Rate", value: "82% Compliance" },
      ]
    },
    {
      id: "tiktok-live-stream-commerce",
      number: "02",
      badge: "Live Shopping",
      title: "Live Stream Commerce & Studio Operations",
      tagline: "High-Energy Broadcasts Driving Thousands of Units in Real Time",
      summary: "Live shopping is the pinnacle of interactive impulse commerce. We build and execute turnkey studio broadcasts featuring professional trained hosts, dynamic flash discounts, countdown drops, and real-time chat pinned checkouts.",
      image: "/assets/services/tiktok/tiktok-live-studio.webp",
      highlights: [
        "Dedicated multi-camera 4K broadcast studio with studio lighting and pro audio",
        "Charismatic live hosts trained in product objection handling and FOMO triggers",
        "Live chat moderation, product pinning, and post-stream clip repurposing"
      ],
      benchmarks: [
        { label: "Average Live Session GMV", value: "$4,500 - $35,000" },
        { label: "Viewer-to-Buyer CVR", value: "8.5% - 14.2% CVR" }
      ],
      metricsLightbox: [
        { label: "Live Session GMV", value: "$4.5K - $35K" },
        { label: "Viewer CVR", value: "8.5% - 14.2%" },
        { label: "Watch Time Lift", value: "+320%" },
      ]
    },
    {
      id: "tiktok-shop-architecture",
      number: "03",
      badge: "Platform Bridge",
      title: "TikTok Shop Architecture & Seamless Amazon Sync",
      tagline: "Turnkey Merchant Center Setup & Unified Multi-Channel Inventory",
      summary: "Expanding to TikTok Shop shouldn't complicate your operational backend. We set up bulletproof US and UK Merchant Centers and connect automated Multi-Channel Fulfillment (MCF) directly with your existing Amazon warehouses.",
      image: "/assets/services/tiktok/tiktok-amazon-mcf-sync.webp",
      highlights: [
        "Official TikTok Shop Merchant Center onboarding, tax verification & policy approvals",
        "Automated Multi-Channel Fulfillment (MCF) integration with existing Amazon stock",
        "Strict 48-hour dispatch SLA tracking keeping late fulfillment rates under 1.5%"
      ],
      benchmarks: [
        { label: "Merchant Onboarding", value: "< 5 Days to Live" },
        { label: "MCF Inventory Sync", value: "99.9% Zero Stockout" }
      ],
      metricsLightbox: [
        { label: "Onboarding SLA", value: "< 5 Days" },
        { label: "Sync Accuracy", value: "99.9%" },
        { label: "Late Dispatch", value: "< 1.5%" },
      ]
    },
    {
      id: "tiktok-viral-ugc-studio",
      number: "04",
      badge: "Content Factory",
      title: "Viral Short-Form UGC & Content Production",
      tagline: "Engineered 3-Second Hooks That Stop Thumb Scroll and Drive Checkouts",
      summary: "Traditional polished commercials perform poorly on TikTok. We produce raw, authentic User-Generated Content (UGC) with psychologically engineered 3-second hooks that feel native to the For You Page while driving shoppers directly to the cart.",
      image: "/assets/services/tiktok/tiktok-viral-ugc.webp",
      highlights: [
        "20 to 60 bespoke short-form 9:16 vertical videos produced and tested monthly",
        "Data-backed 3-second hook variations (curiosity, problem-solution, ASMR)",
        "Native trending audio, dynamic captions, and frictionless yellow cart transitions"
      ],
      benchmarks: [
        { label: "3-Second Hook Retention", value: "> 42% Retention" },
        { label: "Click-to-Cart CTR", value: "4.8% - 9.1% CTR" }
      ],
      metricsLightbox: [
        { label: "Hook Retention", value: "> 42%" },
        { label: "Monthly Assets", value: "20 - 60 Videos" },
        { label: "Click-to-Cart", value: "4.8% - 9.1%" },
      ]
    },
    {
      id: "tiktok-ads-scaling",
      number: "05",
      badge: "Ad Optimization",
      title: "TikTok Ads & GMV Max Scaling Engine",
      tagline: "Amplifying Winning Content with Algorithmic Paid Ad Spend",
      summary: "When a creator video starts gaining organic traction, the window to maximize revenue is immediate. We deploy TikTok Spark Ads and automated GMV Max campaigns, scaling daily revenue into five figures while maintaining strict ROAS targets.",
      image: "/assets/services/tiktok/tiktok-ads-gmv-max.webp",
      highlights: [
        "Spark Ads amplification whitelisting top organic creator videos with social proof",
        "Automated GMV Max value bidding targeting high-frequency TikTok shoppers",
        "7-day creative refresh cycles preventing ad fatigue and maintaining high ROAS"
      ],
      benchmarks: [
        { label: "Blended Campaign ROAS", value: "4.85x ROAS" },
        { label: "Acquisition Cost", value: "-32% vs Meta Ads" }
      ],
      metricsLightbox: [
        { label: "Campaign ROAS", value: "4.85x" },
        { label: "CPA Reduction", value: "-32%" },
        { label: "Daily Scale Cap", value: "$50K+ / Day" },
      ]
    },
    {
      id: "omnichannel-growth-flywheel",
      number: "06",
      badge: "Unified Growth",
      title: "Omnichannel Synergy: The Amazon + TikTok Flywheel",
      tagline: "Transform TikTok Virality into Amazon Category Dominance",
      summary: "The strongest brands synchronize both marketplaces. When a product surges on TikTok, thousands of shoppers open Amazon to search for the brand. We capture both channels, earning a 10% Amazon referral rebate while locking in Page 1 Bestseller badges.",
      image: "/assets/services/tiktok/tiktok-omnichannel-flywheel.webp",
      highlights: [
        "Amazon Attribution link integration on creator profiles earning 10% cash rebates",
        "Coordinated viral TikTok drops timed with high-bid Amazon Sponsored Brand slots",
        "Unified cross-channel inventory forecasting and consolidated blended TACoS reporting"
      ],
      benchmarks: [
        { label: "Amazon Branded Search", value: "+340% Surge" },
        { label: "Blended CAC Savings", value: "-28.4% Saved" }
      ],
      metricsLightbox: [
        { label: "Branded Search", value: "+340%" },
        { label: "Blended CAC", value: "-28.4%" },
        { label: "Attribution Rebate", value: "10% Cash" },
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#FAFAFC] text-slate-900 pt-24 pb-24 overflow-hidden">
      
      {/* Lightbox for zooming service graphics */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState({ ...lightboxState, isOpen: false })}
        imageSrc={lightboxState.imageSrc}
        title={lightboxState.title}
        subtitle={lightboxState.subtitle}
        metrics={lightboxState.metrics}
      />

      {/* Hero Header */}
      <section className="relative w-full bg-[#FAF7F2] bg-texture border-b border-slate-200 py-16 sm:py-20 text-center lg:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 text-emerald-600" />
                <span>The Fastest-Growing Impulse Commerce Platform</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                Turn TikTok Virality Into Predictable,{" "}
                <span className="text-emerald-600 block mt-1.5">
                  Multi-Million GMV.
                </span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                TikTok Shop is the highest-converting impulse commerce channel on earth. We deploy turnkey creator affiliate networks, run live shopping broadcasts, and sync inventory seamlessly with your existing Amazon FBA warehouses.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Launch TikTok Shop Engine</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-xl shadow-slate-200/40 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    TikTok Engine Benchmarks
                  </h3>
                  <span className="text-[11px] text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full font-bold border border-emerald-200">
                    CERTIFIED TSP SEAT
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Monthly Creator Outreach</div>
                      <div className="text-xl sm:text-2xl font-bold text-slate-900 font-display">500+ Creators</div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">120-300 Videos/Mo</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Live Broadcast Run-Rate</div>
                      <div className="text-xl sm:text-2xl font-bold text-teal-700 font-display">Up to $35K / Session</div>
                    </div>
                    <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">Turnkey Studio</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Fulfillment Bridge SLA</div>
                      <div className="text-xl sm:text-2xl font-bold text-slate-900 font-display">Amazon MCF 100%</div>
                    </div>
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">&lt; 48h Dispatch</span>
                  </div>
                </div>

                <div className="text-xs text-slate-500 pt-1 flex items-center justify-between">
                  <span>Supported in US & UK Merchant Centers</span>
                  <span className="text-emerald-700 font-bold">Tier-1 Agency Status</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6 Sub-Service Sections (Clean, Highly Readable Text + Relevant Graphics) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Turnkey Impulse Commerce</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-3">
            The 6 Pillars of TikTok Shop Dominance
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            How we take your product catalog from zero TikTok presence to a viral commerce powerhouse driving millions in monthly GMV.
          </p>
        </div>

        {/* Alternating Service Cards */}
        <div className="space-y-16">
          {services.map((srv, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={srv.id}
                id={srv.id}
                className="rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-200 transition-all p-6 sm:p-10 shadow-sm hover:shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Visual Graphic Column (Alternates on Desktop) */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div 
                      onClick={() => setLightboxState({
                        isOpen: true,
                        imageSrc: srv.image,
                        title: srv.title,
                        subtitle: `${srv.badge} — ${srv.tagline}`,
                        metrics: srv.metricsLightbox
                      })}
                      className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer group shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src={srv.image}
                          alt={srv.title}
                          fill
                          className="object-cover group-hover:scale-102 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-md flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5 text-teal-600" />
                          <span>Click to Expand Blueprint</span>
                        </span>
                      </div>
                      <div className="px-4 py-2.5 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span className="font-semibold text-slate-700">{srv.title}</span>
                        <span className="text-teal-600 font-bold">Inspect Details</span>
                      </div>
                    </div>
                  </div>

                  {/* Clean, Readable Text Content Column */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    
                    {/* Header Pill */}
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider font-mono">
                        Service {srv.number}
                      </span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        • {srv.badge}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 leading-tight">
                      {srv.title}
                    </h3>

                    {/* Tagline */}
                    <div className="text-sm font-bold text-emerald-700 tracking-wide">
                      {srv.tagline}
                    </div>

                    {/* Concise, Readable Description */}
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {srv.summary}
                    </p>

                    {/* Key Highlights (Readable text-sm font size) */}
                    <div className="space-y-2.5 pt-1">
                      {srv.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* 2 Key Verified Benchmarks */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {srv.benchmarks.map((b) => (
                        <div key={b.label} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                          <div className="text-xs text-slate-500 font-medium mb-0.5">
                            {b.label}
                          </div>
                          <div className="text-base sm:text-lg font-bold text-slate-900 font-display">
                            {b.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Link */}
                    <div className="pt-2 flex items-center gap-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors"
                      >
                        <span>Audit Your Brand for Service {srv.number}</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 text-center space-y-6 bg-texture">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Scale With Certainty</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
            Ready to Build Your TikTok Shop Engine?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Book a confidential TikTok Shop strategy session. We analyze your catalog for viral creator compatibility, Amazon MCF sync, and live stream opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
            >
              <span>Schedule TikTok Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-2 shadow-sm"
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
