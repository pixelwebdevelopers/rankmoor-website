"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  DollarSign, 
  Sparkles, 
  ArrowRight, 
  Percent, 
  CheckCircle2, 
  Zap,
  ShoppingBag,
  Video
} from "lucide-react";
import Link from "next/link";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { COMPANY_INFO } from "@/data/content";

export function RoiCalculator() {
  const [revenue, setRevenue] = useState<number>(65000);
  const [acos, setAcos] = useState<number>(32);
  const [channel, setChannel] = useState<"amazon" | "tiktok" | "both">("both");

  // Calculations based on Rankmoor empirical case studies
  // Amazon typical uplift: +85% in 90 days, ACOS cut to ~16%
  // TikTok typical uplift: adds +60% incremental volume
  // Combined: +145% uplift, blended ACOS cut by 45%
  const growthMultiplier = channel === "both" ? 1.45 : channel === "amazon" ? 0.95 : 0.80;
  const acosTarget = channel === "tiktok" ? 18 : 16;
  const acosReduction = Math.max(0, acos - acosTarget);

  const projectedMonthlyRevenue = Math.round(revenue * (1 + growthMultiplier));
  const monthlyRevenueGain = projectedMonthlyRevenue - revenue;
  
  // Monthly ad spend assumed ~30% of revenue
  const monthlyAdSpend = revenue * (acos / 100);
  const projectedAdSpend = projectedMonthlyRevenue * (acosTarget / 100);
  const adWasteSaved = Math.round(monthlyAdSpend * (acosReduction / Math.max(1, acos)) * 0.7);
  const annualEbitdaImpact = Math.round((monthlyRevenueGain * 0.28 + adWasteSaved) * 12);

  return (
    <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-10 lg:p-12 overflow-hidden">
      
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Interactive Growth Engine Simulator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-3">
            Simulate Your Brand&apos;s Scaled Valuation
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Drag the sliders to see what Rankmoor&apos;s search architecture, PPC science, and TikTok Shop creator flywheel can unlock for your catalog.
          </p>
        </div>

        {/* Channel Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <button
            onClick={() => setChannel("both")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              channel === "both"
                ? "bg-[#FF6B00] text-white shadow-md shadow-orange-500/25 scale-102"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200"
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Omnichannel (Amazon + TikTok Shop)</span>
          </button>
          <button
            onClick={() => setChannel("amazon")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              channel === "amazon"
                ? "bg-[#FF6B00] text-white shadow-md shadow-orange-500/25 scale-102"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200"
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Amazon FBA Dominance</span>
          </button>
          <button
            onClick={() => setChannel("tiktok")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              channel === "tiktok"
                ? "bg-[#FF6B00] text-white shadow-md shadow-orange-500/25 scale-102"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200"
            }`}
          >
            <Video className="w-4 h-4" />
            <span>TikTok Shop Virality</span>
          </button>
        </div>

        {/* Two Columns: Sliders on Left, Dynamic Output Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sliders Input Column */}
          <div className="lg:col-span-6 space-y-7 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
            
            {/* Slider 1: Current Monthly Revenue */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs sm:text-sm font-bold text-slate-900">
                  Current Monthly Sales Volume
                </label>
                <span className="text-lg sm:text-xl font-extrabold text-[#FF6B00] font-display">
                  ${revenue.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min={15000}
                max={500000}
                step={5000}
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>$15K/mo (Launch)</span>
                <span>$150K/mo</span>
                <span>$500K+/mo (Enterprise)</span>
              </div>
            </div>

            {/* Slider 2: Current Ad ACOS / TACOS */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs sm:text-sm font-bold text-slate-900">
                  Current Advertising ACOS / TACOS
                </label>
                <span className="text-lg sm:text-xl font-extrabold text-slate-900 font-display">
                  {acos}%
                </span>
              </div>
              <input
                type="range"
                min={14}
                max={55}
                step={1}
                value={acos}
                onChange={(e) => setAcos(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>14% (Optimized)</span>
                <span>32% (Average)</span>
                <span>55% (Bleeding Ad Spend)</span>
              </div>
            </div>

            {/* Value Levers Checklist */}
            <div className="pt-2 border-t border-slate-200/70 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Targeted ACOS ceiling modeled at <strong>{acosTarget}.00%</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Conversion rate lift benchmarked at <strong>+28% to +65%</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Calculations derived from <strong>$20.23M+ verified Seller Central data</strong></span>
              </div>
            </div>

          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Big Projected Sales Card */}
            <motion.div 
              key={`${revenue}-${channel}`}
              initial={{ scale: 0.97, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white shadow-xl border border-slate-800"
            >
              <div className="text-xs uppercase font-bold text-orange-400 tracking-wider mb-1">
                Projected New Monthly Run-Rate
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-2 flex items-baseline gap-2">
                <span>${projectedMonthlyRevenue.toLocaleString()}</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded-full">
                  +{Math.round(growthMultiplier * 100)}% Lift
                </span>
              </div>
              <div className="text-xs text-slate-400">
                Adds an estimated <strong className="text-white">+${monthlyRevenueGain.toLocaleString()}</strong> in new high-margin sales every month.
              </div>
            </motion.div>

            {/* Two Secondary Stat Badges */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-0.5">
                  Monthly Ad Waste Cut
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-700 font-display">
                  +${adWasteSaved.toLocaleString()}
                </div>
                <div className="text-[10px] text-emerald-600 font-medium mt-0.5">
                  Saved via negative targeting & Dayparting
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-orange-50 border border-orange-200">
                <div className="text-[11px] font-bold text-[#E05300] uppercase tracking-wider mb-0.5">
                  Est. 12M EBITDA Boost
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#FF6B00] font-display">
                  +${annualEbitdaImpact.toLocaleString()}
                </div>
                <div className="text-[10px] text-orange-600 font-medium mt-0.5">
                  Direct bottom-line brand enterprise value
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:flex-1 px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 group active:scale-98"
              >
                <Sparkles className="w-4 h-4" />
                <span>Claim Blueprint For These Numbers</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
