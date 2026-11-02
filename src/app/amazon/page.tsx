"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  Factory
} from "lucide-react";
import { COMPANY_INFO } from "@/data/content";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ImageLightbox } from "@/components/ImageLightbox";

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

  const services = [
    {
      id: "amazon-cosmo-seo",
      number: "01",
      badge: "Search Architecture",
      title: "Reverse-ASIN Keyword Architecture & Cosmo SEO",
      tagline: "Algorithm-First Search Relevance on Amazon Cosmo 2.0 & A9",
      summary: "We map your entire competitor landscape through deep reverse-ASIN extraction. By structuring your catalog into precision exact-match silos, we train Amazon's Cosmo 2.0 algorithm to rank your products at the top of high-intent search queries.",
      image: "/assets/services/amazon/amazon-cosmo-seo.webp",
      highlights: [
        "Reverse-ASIN competitor harvest isolating top-converting keywords",
        "Amazon Cosmo 2.0 semantic mapping to capture latent shopper intent",
        "Algorithmic backend indexing preventing keyword cannibalization"
      ],
      benchmarks: [
        { label: "Top-10 Organic Ranks", value: "1,420+ Keywords" },
        { label: "Page 1 Share of Voice", value: "84.2% Visibility" }
      ],
      metricsLightbox: [
        { label: "Top-10 Keywords", value: "1,420+" },
        { label: "Page 1 Share", value: "84.2%" },
        { label: "Semantic Score", value: "0.94" },
      ]
    },
    {
      id: "amazon-3d-aplus",
      number: "02",
      badge: "Creative Studio",
      title: "3D Rendered A+ Content & Visual Brand Storytelling",
      tagline: "Turn Commodity Listings into Unmistakable Luxury Flagships",
      summary: "Flat product photography drags down conversion rates. Our in-house studio builds photorealistic 4K 3D renders, exploded benefit diagrams, and mobile-first storefront modules that increase conversions by up to 65%.",
      image: "/assets/services/amazon/amazon-3d-aplus.webp",
      highlights: [
        "Photorealistic 3D exploded CAD renders highlighting internal quality",
        "Conversion-optimized mobile A+ layouts built for one-thumb purchasing",
        "Multi-page branded storefronts designed to cross-sell and boost basket size"
      ],
      benchmarks: [
        { label: "Documented CVR Lift", value: "+42.5% Conversion" },
        { label: "Main Image CTR", value: "3.8% (Top 1% Tier)" }
      ],
      metricsLightbox: [
        { label: "CVR Lift", value: "+42.5%" },
        { label: "Main Image CTR", value: "3.8%" },
        { label: "Mobile Completion", value: "78%" },
      ]
    },
    {
      id: "amazon-ppc-dsp",
      number: "03",
      badge: "Paid Media Science",
      title: "Algorithmic PPC & Amazon DSP Media Buying",
      tagline: "Sub-18% ACOS Ad Scaling with Empirical Account Verification",
      summary: "Stop burning ad budget on low-converting search terms. We deploy hourly dayparting algorithms, automated negative target harvesting, and Amazon DSP retargeting to bring abandoned shoppers back to complete purchase.",
      image: "/assets/services/amazon/amazon-ppc-dsp.webp",
      highlights: [
        "Hourly dayparting adjusting bids to match peak historical conversion hours",
        "Automated negative keyword harvesting saving thousands in wasted clicks",
        "Amazon DSP retargeting targeting high-intent off-Amazon shoppers"
      ],
      benchmarks: [
        { label: "Verified Total Sales", value: "$7,370,000+" },
        { label: "Blended Ad ACOS", value: "16.00% ACOS" }
      ],
      metricsLightbox: [
        { label: "Ad Sales", value: "$7.37M+" },
        { label: "Verified ACOS", value: "16.00%" },
        { label: "DSP ROAS", value: "5.40x" },
      ]
    },
    {
      id: "amazon-honeymoon-launch",
      number: "04",
      badge: "Launchpad",
      title: "Honeymoon Velocity Launch & Bestseller Engineering",
      tagline: "45-Day Rank Acceleration to Lock In Organic Page 1 Badges",
      summary: "Capitalize on Amazon's algorithmic honeymoon period. We orchestrate early Vine reviews, external creator traffic, and aggressive exact-match PPC surges to propel new ASINs straight into the Category Top-5.",
      image: "/assets/services/amazon/amazon-honeymoon-launch.webp",
      highlights: [
        "Amazon Vine review seeding securing your first 30 verified 4.8★ reviews",
        "Amazon Attribution link tracking earning a 10% Brand Referral Bonus",
        "Synchronized velocity pushes timed with 85% FBA inventory check-in"
      ],
      benchmarks: [
        { label: "Page 1 Top-5 Rank", value: "Target: Day 18" },
        { label: "Brand Referral Bonus", value: "10% Cash Rebate" }
      ],
      metricsLightbox: [
        { label: "Rank Timeline", value: "Day 18" },
        { label: "Vine Reviews", value: "4.8★ Avg" },
        { label: "Cash Rebate", value: "10%" },
      ]
    },
    {
      id: "amazon-seller-custodianship",
      number: "05",
      badge: "Account Protection",
      title: "Seller Central Custodianship & Catalog Defense",
      tagline: "24/7 Account Health Safeguards, Stranded Stock & Hijacker Purging",
      summary: "Running an eight-figure brand requires total operational defense. We monitor account health around the clock, purge unauthorized listing hijackers with Project Zero, and resolve listing suppressions in hours.",
      image: "/assets/services/amazon/amazon-seller-custodianship.webp",
      highlights: [
        "24/7 Account Health monitoring keeping your seller rating in the green",
        "Automated Brand Registry Project Zero anti-hijacker eviction filings",
        "Suppression recovery and stranded inventory resolution in under 12 hours"
      ],
      benchmarks: [
        { label: "Account Health Rating", value: "1,000 / 1,000 (Green)" },
        { label: "BuyBox Win Rate", value: "99.8% Win Rate" }
      ],
      metricsLightbox: [
        { label: "Health Rating", value: "1,000/1,000" },
        { label: "BuyBox Win", value: "99.8%" },
        { label: "Resolution", value: "<12 Hours" },
      ]
    },
    {
      id: "amazon-global-sourcing",
      number: "06",
      badge: "Supply Chain",
      title: "Global Manufacturing & Sourcing Infrastructure",
      tagline: "Direct Tier-1 Factory Contracts Across China, Pakistan & Vietnam",
      summary: "Marketplace dominance is won on gross margins. We bypass middlemen trading agents to negotiate direct factory agreements, enforce on-site AQL 2.5 quality control, and secure Net-60 payment terms.",
      image: "/assets/services/amazon/amazon-global-sourcing.webp",
      highlights: [
        "Direct factory relationships locking in Tier-1 unit manufacturing costs",
        "On-site third-party quality control inspections capping defects below 0.35%",
        "Predictive 90-day supply chain models preventing costly out-of-stock rank death"
      ],
      benchmarks: [
        { label: "Landed Unit Savings", value: "-28.4% Saved" },
        { label: "Defect Rate Ceiling", value: "< 0.35% Defect" }
      ],
      metricsLightbox: [
        { label: "Cost Savings", value: "-28.4%" },
        { label: "Defect Ceiling", value: "<0.35%" },
        { label: "Payment Terms", value: "Net-60" },
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Full-Stack Amazon Ecosystem Architecture</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                Engineering Category Leaders on{" "}
                <span className="text-[#FF6B00] block mt-1.5">
                  Amazon Marketplace.
                </span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Most agencies burn ad spend trying to buy Page 1 rankings. We engineer algorithmic relevance through reverse-ASIN indexing, luxury 3D A+ storefronts, day-parted PPC bidding, and Tier-1 factory margin defenses.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Amazon Catalog Audit</span>
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
                    Verified Amazon Benchmarks
                  </h3>
                  <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-bold border border-emerald-200">
                    REAL SELLER DATA
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Documented Store Volume</div>
                      <div className="text-xl sm:text-2xl font-bold text-slate-900 font-display">$20,230,000+</div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">+200% YoY Surge</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Amazon Ads Verified ACOS</div>
                      <div className="text-xl sm:text-2xl font-bold text-emerald-600 font-display">16.00%</div>
                    </div>
                    <span className="text-xs font-bold text-[#E05300] bg-orange-50 px-2 py-0.5 rounded border border-orange-200">$7.37M Sales</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Total Units Delivered</div>
                      <div className="text-xl sm:text-2xl font-bold text-slate-900 font-display">482,714 Units</div>
                    </div>
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">449k+ Orders</span>
                  </div>
                </div>

                <div className="text-xs text-slate-500 pt-1 flex items-center justify-between">
                  <span>Covering US, UK, DE, FR, IT, ES, UAE</span>
                  <span className="text-[#FF6B00] font-bold">Enterprise SPN Tier</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6 Sub-Service Sections (Clean, Highly Readable Text + Relevant Graphics) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>End-to-End Growth Modules</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-3">
            The 6 Pillars of Amazon Category Dominance
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every layer of your Amazon presence engineered for higher click share, higher conversion, and defensible profit margins.
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
                className="rounded-3xl bg-white border border-slate-200/90 hover:border-orange-200 transition-all p-6 sm:p-10 shadow-sm hover:shadow-xl"
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
                          <Maximize2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                          <span>Click to Expand Blueprint</span>
                        </span>
                      </div>
                      <div className="px-4 py-2.5 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span className="font-semibold text-slate-700">{srv.title}</span>
                        <span className="text-[#E05300] font-bold">Inspect Details</span>
                      </div>
                    </div>
                  </div>

                  {/* Clean, Readable Text Content Column */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    
                    {/* Header Pill */}
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider font-mono">
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
                    <div className="text-sm font-bold text-[#FF6B00] tracking-wide">
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
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF6B00] hover:text-[#E05300] transition-colors"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Scale With Certainty</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
            Ready to Dominate Your Amazon Category?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Book your comprehensive 24-point empirical audit. We identify exact reverse-ASIN ranking opportunities, negative keyword ad waste, and conversion friction.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
            >
              <span>Schedule Free Catalog Audit</span>
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
