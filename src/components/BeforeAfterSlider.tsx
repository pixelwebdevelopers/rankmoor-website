"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  ArrowRight, 
  Sparkles, 
  BarChart3, 
  Layers, 
  ShieldAlert, 
  ShieldCheck,
  AlertTriangle,
  Gem
} from "lucide-react";

export function BeforeAfterSlider() {
  const [activeTab, setActiveTab] = useState<"before" | "after">("after");

  const comparisonData = [
    {
      metric: "PPC Advertising Efficiency (ACOS)",
      before: "38.5% - Bleeding margins on unsegmented auto campaigns",
      after: "16.00% - Pinpointed single-keyword ad groups & day-parting",
      beforeStatus: "bad",
      afterStatus: "good",
      delta: "-58% Waste Reduction"
    },
    {
      metric: "Listing Conversion Rate (CVR)",
      before: "8.8% - Flat 2D photography, generic bullets & bounce dropoffs",
      after: "24.6% - Luxury 3D renders, comparison tables & Premium A+",
      beforeStatus: "bad",
      afterStatus: "good",
      delta: "+180% Conversion Lift"
    },
    {
      metric: "Organic Keyword Positions",
      before: "Stuck on Page 3+ for primary root search queries",
      after: "Top-3 Organic Rank across 40+ high-volume search terms",
      beforeStatus: "bad",
      afterStatus: "good",
      delta: "#1 Category Best Seller"
    },
    {
      metric: "TikTok Shop Multi-Channel Presence",
      before: "Zero TikTok footprint; 100% ad-dependent on Amazon clicks",
      after: "500+ Creator Machine with seamless Amazon MCF FBA fulfillment",
      beforeStatus: "bad",
      afterStatus: "good",
      delta: "+340% Branded Search Lift"
    },
    {
      metric: "12-Month Documented Revenue",
      before: "$2.1M - Plateaued with seasonal stockout penalties",
      after: "$20.23M - Scaled with 200% year-on-year compound velocity",
      beforeStatus: "bad",
      afterStatus: "good",
      delta: "+200% YoY Verified Surge"
    }
  ];

  return (
    <div className="relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-xl shadow-slate-200/50 overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Empirical Transformation</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
            Before vs. After Rankmoor Execution
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mt-1">
            Toggle between the fragile commodity state and the authoritative category dominance model.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start md:self-auto">
          <button
            onClick={() => setActiveTab("before")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === "before"
                ? "bg-rose-500 text-white shadow-md shadow-rose-500/25"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Before Rankmoor</span>
          </button>

          <button
            onClick={() => setActiveTab("after")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === "after"
                ? "bg-[#FF6B00] text-white shadow-md shadow-orange-500/30"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>After Rankmoor</span>
          </button>
        </div>
      </div>

      {/* Visual Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Creative Visual Asset */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md aspect-[4/3]">
            <Image
              src={
                activeTab === "before"
                  ? "/assets/services/visual_listing_optimization_1791371182626-B9tkg6tG.jpg"
                  : "/assets/services/ebc_creative_showcase_1790702284614-DM9GOURk.jpg"
              }
              alt="Transformation Demonstration"
              fill
              className="object-cover transition-all duration-500"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200 text-xs flex items-center justify-between shadow-sm">
              <span className="font-bold text-slate-900 inline-flex items-center gap-1.5">
                {activeTab === "before" ? (
                  <>
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                    <span>Fragile Commodity Listing</span>
                  </>
                ) : (
                  <>
                    <Gem className="w-3.5 h-3.5 text-teal-600" />
                    <span>Luxury 3D Brand Flagship</span>
                  </>
                )}
              </span>
              <span className={`font-extrabold px-2 py-0.5 rounded-full ${
                activeTab === "before" ? "bg-rose-100 text-rose-700" : "bg-emerald-100 text-emerald-700"
              }`}>
                {activeTab === "before" ? "High Bounce Rate" : "+180% CVR Lift"}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Data Metrics Breakdown */}
        <div className="lg:col-span-7 space-y-3.5">
          {comparisonData.map((row, idx) => (
            <motion.div
              key={row.metric}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`p-4 rounded-2xl border transition-all ${
                activeTab === "after"
                  ? "bg-white border-slate-200/90 shadow-2xs hover:border-orange-200"
                  : "bg-rose-50/30 border-rose-200/60"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    {row.metric}
                  </div>
                  <div className="text-sm font-semibold text-slate-800 flex items-start gap-2">
                    {activeTab === "before" ? (
                      <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    )}
                    <span>{activeTab === "before" ? row.before : row.after}</span>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <span className={`text-xs font-extrabold px-2.5 py-1 rounded-full whitespace-nowrap ${
                    activeTab === "after"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-rose-100 text-rose-700"
                  }`}>
                    {activeTab === "after" ? row.delta : "Bottleneck"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
