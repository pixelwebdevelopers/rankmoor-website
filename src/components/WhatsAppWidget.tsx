"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ArrowRight, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { COMPANY_INFO, FOUNDER_INFO } from "@/data/content";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Pop-up Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-2xl bg-white border border-[#25D366]/40 p-5 shadow-2xl shadow-slate-900/15 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-start justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#25D366] flex-shrink-0">
                <Image
                  src={FOUNDER_INFO.image}
                  alt={FOUNDER_INFO.name}
                  fill
                  className="object-cover object-top"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] rounded-full border-2 border-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <span>{FOUNDER_INFO.name}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
                </div>
                <div className="text-xs text-[#128C7E] font-semibold">
                  CEO & Founder • Active Now
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100"
              aria-label="Close message preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-slate-700 leading-relaxed">
            <p className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 mb-2">
              👋 Hey there! Looking to scale your Amazon store or launch on TikTok Shop? Send us your store link or ASIN — I personally review every catalog.
            </p>
            <div className="text-[10px] text-slate-500 flex items-center justify-between">
              <span>Avg response time: &lt;15 mins</span>
              <span className="text-[#128C7E] font-bold">Official WhatsApp</span>
            </div>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20BA5A] transition-colors shadow-md shadow-[#25D366]/25 flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Open WhatsApp Conversation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Trigger Button with Real WhatsApp Color & Official Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-3 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-200 border border-white"
        aria-label="WhatsApp Rankmoor"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <WhatsAppIcon className="w-5 h-5 text-white" />
        <span className="text-xs font-bold tracking-wide">
          WhatsApp
        </span>
      </button>
    </div>
  );
}
