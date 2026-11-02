"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Send
} from "lucide-react";
import { COMPANY_INFO } from "@/data/content";

export function AuditCalculator() {
  const [platform, setPlatform] = useState<"amazon" | "tiktok" | "both">("amazon");
  const [revenue, setRevenue] = useState<string>("50k-200k");
  const [bottleneck, setBottleneck] = useState<string>("acos");
  const [email, setEmail] = useState("");
  const [brandName, setBrandName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const calculateEstimate = () => {
    switch (revenue) {
      case "under-10k":
        return { lift: "+180% - +300%", savings: "$2,500 - $6,000 / mo", timeframe: "30-60 Days" };
      case "10k-50k":
        return { lift: "+65% - +140%", savings: "$8,000 - $18,000 / mo", timeframe: "45-90 Days" };
      case "50k-200k":
        return { lift: "+35% - +85%", savings: "$24,000 - $55,000 / mo", timeframe: "60-120 Days" };
      case "200k-plus":
        return { lift: "+22% - +48%", savings: "$60,000 - $180,000+ / mo", timeframe: "90-180 Days" };
      default:
        return { lift: "+45% - +90%", savings: "$15,000 - $35,000 / mo", timeframe: "60 Days" };
    }
  };

  const estimate = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FF6B00", "#FF8533", "#10B981", "#3B82F6"]
    });

    setSubmitted(true);
  };

  return (
    <div className="relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-xl shadow-slate-200/40 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
          <Calculator className="w-3.5 h-3.5 text-[#FF6B00]" />
          <span>Interactive Audit Estimator</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-2">
          Calculate Your Unlocked Category Opportunity
        </h3>
        <p className="text-slate-600 text-sm mb-8">
          Select your marketplace parameters to estimate recoverable ad spend and organic conversion upside.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Target Channel */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                1. Select Growth Channel
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: "amazon", label: "Amazon FBA" },
                  { id: "tiktok", label: "TikTok Shop" },
                  { id: "both", label: "Omnichannel (Both)" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPlatform(item.id as any)}
                    className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold border transition-all text-center ${
                      platform === item.id
                        ? "bg-[#FF6B00] text-white border-[#FF6B00] shadow-md shadow-orange-500/25"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Monthly Revenue */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                2. Current Monthly Revenue
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "under-10k", label: "< $10K / mo" },
                  { id: "10k-50k", label: "$10K - $50K" },
                  { id: "50k-200k", label: "$50K - $200K" },
                  { id: "200k-plus", label: "$200K+ / mo" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRevenue(item.id)}
                    className={`py-2.5 px-2 rounded-xl text-xs font-medium border transition-all text-center ${
                      revenue === item.id
                        ? "bg-slate-900 text-white border-slate-900 font-bold shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Primary Bottleneck */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                3. Largest Growth Bottleneck
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: "acos", label: "High Ad Spend / Unprofitable ACOS (>25%)" },
                  { id: "conversion", label: "Low Conversion Rate / Flat A+ Content" },
                  { id: "rank", label: "Stuck on Page 2+ for Root Keywords" },
                  { id: "tiktok", label: "No TikTok Creator / Affiliate Machine" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBottleneck(item.id)}
                    className={`p-3 rounded-xl text-xs font-medium border text-left transition-all ${
                      bottleneck === item.id
                        ? "bg-orange-50/90 border-[#FF6B00] text-slate-900 font-semibold"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100/80"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results & Action Column */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-slate-50/90 border border-slate-200/80">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#E05300] font-bold mb-3 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#FF6B00]" />
                <span>Estimated Recoverable Opportunity</span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-xs text-slate-500 mb-1">Estimated Monthly Margin Recovery</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-display">
                    {estimate.savings}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-2xs">
                    <div className="text-slate-500 mb-0.5">Projected Revenue Lift</div>
                    <div className="text-sm font-bold text-slate-900">{estimate.lift}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-2xs">
                    <div className="text-slate-500 mb-0.5">Execution Horizon</div>
                    <div className="text-sm font-bold text-slate-900">{estimate.timeframe}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Claim Action */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3 pt-4 border-t border-slate-200">
                <div className="text-xs text-slate-700 font-semibold">
                  Receive your custom 24-point video & diagnostic report:
                </div>
                <input
                  type="text"
                  placeholder="Brand / Store Name or ASIN"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00]"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Business Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00]"
                />
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Generate Free 24-Point Audit</span>
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <div className="text-sm font-bold text-slate-900">Audit Request Received!</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our strategic team is running your reverse-ASIN and category benchmarks. We will email your report shortly!
                </p>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs font-bold text-emerald-600 underline hover:text-emerald-700"
                >
                  Expedite on WhatsApp with CEO Mian Hassan →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
