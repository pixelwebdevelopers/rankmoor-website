"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Palette, 
  BarChart3, 
  Rocket, 
  Calendar, 
  Sparkles,
  Layers
} from "lucide-react";

export function InteractiveRoadmap() {
  const [activePhase, setActivePhase] = useState<number>(0);

  const phases = [
    {
      phase: "01",
      title: "24-Point Empirical Audit",
      subtitle: "Reverse-ASIN Harvest & Profit Leak Discovery",
      timeline: "Days 1 - 7",
      icon: <Search className="w-5 h-5" />,
      image: "/assets/services/visual_keyword_copywriting_1791371196914-DqPmaqsr.jpg",
      deliverables: [
        "Exhaustive reverse-ASIN competitor harvest across top 15 category competitors",
        "Search-term waste audit purging unproductive broad-match ad spend",
        "Catalog variations, parent-child mapping & buy-box security evaluation",
        "Comprehensive 15-page diagnostic roadmap and video walk-through"
      ],
      kpi: "Identify $15k - $55k/mo in wasted ad spend & unindexed keywords"
    },
    {
      phase: "02",
      title: "Cosmo SEO & 3D Creative Re-Architecture",
      subtitle: "Luxury Storefronts & Semantic Indexing",
      timeline: "Days 8 - 25",
      icon: <Palette className="w-5 h-5" />,
      image: "/assets/services/visual_product_photography_studio_1791371208097-BkaI5-qC.jpg",
      deliverables: [
        "Amazon Cosmo semantic search title, bullet & backend search term deployment",
        "3D product modeling, microscopic feature renders & explode view graphics",
        "Responsive Premium A+ Content modules with cross-SKU comparison charts",
        "Multi-page luxury Amazon Brand Store architecture and navigation"
      ],
      kpi: "+28% to +65% conversion rate surge and organic indexation lift"
    },
    {
      phase: "03",
      title: "Algorithmic PPC Day-Parting & Velocity Surge",
      subtitle: "High-ROI Advertising Operating at 16% ACOS",
      timeline: "Days 26 - 60",
      icon: <BarChart3 className="w-5 h-5" />,
      image: "/assets/services/hero_slide_ecommerce_store_1791369080616-D47z7nzw.jpg",
      deliverables: [
        "Single-Keyword Ad Groups (SKAG) isolating high-converting exact search terms",
        "Algorithmic day-parting targeting hourly consumer buying momentum",
        "Exhaustive negative keyword shields preventing competitor brand theft",
        "Sponsored Brand Videos capturing high-converting mobile search slots"
      ],
      kpi: "Maintain 14% - 18% ACOS while scaling monthly ad volume 3x"
    },
    {
      phase: "04",
      title: "TikTok Shop Omnichannel Flywheel",
      subtitle: "Creator Seeding & Amazon MCF Sync",
      timeline: "Days 60+",
      icon: <Rocket className="w-5 h-5" />,
      image: "/assets/services/visual_brand_launch_cta_1791371232017-BRdhgM5z.jpg",
      deliverables: [
        "Targeted seeding to 500+ vetted creators for 120-300+ monthly tagged videos",
        "Automated inventory sync bridging Amazon FBA warehouses via MCF",
        "Turnkey TikTok Live Shopping broadcasts with trained product hosts",
        "TikTok Spark Ads amplifying breakout organic creator content"
      ],
      kpi: "+340% Amazon branded search lift & multi-million omnichannel GMV"
    }
  ];

  const current = phases[activePhase];

  return (
    <div className="relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-xl shadow-slate-200/50 overflow-hidden">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider mb-2.5">
          <Layers className="w-3.5 h-3.5 text-[#FF6B00]" />
          <span>Execution Methodology</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
          The 4-Phase Category Dominance Roadmap
        </h3>
        <p className="text-slate-600 text-sm mt-1">
          Click through each operational phase to inspect our step-by-step scaling framework.
        </p>
      </div>

      {/* Phase Navigation Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {phases.map((p, idx) => (
          <button
            key={p.phase}
            onClick={() => setActivePhase(idx)}
            className={`p-4 rounded-2xl border text-left transition-all ${
              activePhase === idx
                ? "bg-orange-50/90 border-[#FF6B00] shadow-md shadow-orange-500/10"
                : "bg-slate-50 border-slate-200 hover:bg-slate-100"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`text-xs font-mono font-extrabold ${activePhase === idx ? "text-[#FF6B00]" : "text-slate-400"}`}>
                Phase {p.phase}
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                activePhase === idx ? "bg-white text-[#E05300] shadow-2xs" : "bg-white text-slate-500"
              }`}>
                {p.timeline}
              </span>
            </div>
            <div className="text-sm font-bold text-slate-900 leading-snug">
              {p.title}
            </div>
          </button>
        ))}
      </div>

      {/* Active Phase Deep Dive */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-200 border border-slate-300 shadow-md">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-2.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-900 flex items-center justify-between">
                  <span>{current.subtitle}</span>
                  <span className="text-[#FF6B00]">{current.timeline}</span>
                </div>
              </div>
            </div>

            {/* Deliverables & Target KPI */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-mono font-bold text-[#E05300] uppercase tracking-wider block mb-1">
                  Active Milestone: Phase {current.phase} ({current.timeline})
                </span>
                <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                  {current.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {current.subtitle}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="space-y-2">
                {current.deliverables.map((deliv) => (
                  <div key={deliv} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>

              {/* Target Outcome */}
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs flex items-center gap-2.5 text-emerald-800 font-semibold">
                <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Target Outcome: {current.kpi}</span>
              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
