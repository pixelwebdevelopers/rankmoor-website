"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/content";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#FF6B00] via-[#FF5900] to-[#E04800] text-white pt-20 pb-12 overflow-hidden">
      {/* Background subtle texture overlay */}
      <div className="absolute inset-0 bg-texture opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Callout Card in crisp white with orange accents */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-white text-slate-900 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E05300] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Ready for Category Dominance?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-2">
              Claim Your Free 24-Point Empirical Catalog Audit
            </h3>
            <p className="text-slate-600 text-sm">
              We analyze your ASIN indexing, buy-box security, ad waste, and TikTok expansion readiness with zero obligation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
            >
              <span>Schedule Free Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-6 py-4 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20BA5A] transition-colors shadow-md shadow-[#25D366]/20 flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Main Links Grid in White/Light Orange */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              <div className="w-11 h-11 rounded-xl bg-white p-2 shadow-sm flex items-center justify-center">
                <Image
                  src="/assets/logo/rankmoor-symbol.png"
                  alt="Rankmoor Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col text-left">
                <div className="font-display font-extrabold text-2xl tracking-tight text-white leading-none">
                  Rank<span className="text-white/90">moor</span>
                </div>
                <span className="text-[9px] uppercase font-bold text-white/80 tracking-[0.25em] mt-1">
                  Makes You The Brand
                </span>
              </div>
            </Link>

            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-sm">
              Rankmoor is an elite e-commerce growth house engineering category dominance for high-growth Amazon sellers and TikTok Shop pioneers.
            </p>
            
            <div className="space-y-2.5 text-xs text-white/90">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-white font-medium hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-white font-medium hover:underline">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">{COMPANY_INFO.address}</span>
              </div>
            </div>

            {/* Global presence */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="text-[11px] uppercase tracking-wider text-white/80 font-bold mb-2">
                International Footprint
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {COMPANY_INFO.globalOffices.map((office) => (
                  <span
                    key={office.city}
                    className="px-2.5 py-1 rounded-md bg-white/15 border border-white/25 text-white font-medium backdrop-blur-xs"
                  >
                    {office.city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Amazon Dominance */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>Amazon Suite</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-white/85">
              <li>
                <Link href="/amazon" className="hover:text-white hover:underline transition-colors">
                  Listing SEO & Cosmo Indexing
                </Link>
              </li>
              <li>
                <Link href="/amazon" className="hover:text-white hover:underline transition-colors">
                  A+ Content & 3D Visuals
                </Link>
              </li>
              <li>
                <Link href="/amazon" className="hover:text-white hover:underline transition-colors">
                  PPC & DSP Programmatic Ads
                </Link>
              </li>
              <li>
                <Link href="/amazon" className="hover:text-white hover:underline transition-colors">
                  Honeymoon Launch Strategy
                </Link>
              </li>
              <li>
                <Link href="/amazon" className="hover:text-white hover:underline transition-colors">
                  Seller Central Custodianship
                </Link>
              </li>
              <li>
                <Link href="/amazon" className="hover:text-white hover:underline transition-colors">
                  Tier-1 Factory Sourcing
                </Link>
              </li>
            </ul>
          </div>

          {/* TikTok Shop Engine */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>TikTok Shop</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-white/85">
              <li>
                <Link href="/tiktok-shop" className="hover:text-white hover:underline transition-colors">
                  Creator Outreach Machine
                </Link>
              </li>
              <li>
                <Link href="/tiktok-shop" className="hover:text-white hover:underline transition-colors">
                  Live Stream Studio Operations
                </Link>
              </li>
              <li>
                <Link href="/tiktok-shop" className="hover:text-white hover:underline transition-colors">
                  TikTok Shop & Amazon FBA Sync
                </Link>
              </li>
              <li>
                <Link href="/tiktok-shop" className="hover:text-white hover:underline transition-colors">
                  Viral Short-Form UGC Videos
                </Link>
              </li>
              <li>
                <Link href="/tiktok-shop" className="hover:text-white hover:underline transition-colors">
                  Spark Ads & GMV Max Scaling
                </Link>
              </li>
              <li>
                <Link href="/tiktok-shop" className="hover:text-white hover:underline transition-colors">
                  Omnichannel Cross-Pollination
                </Link>
              </li>
            </ul>
          </div>

          {/* Verification & Proof */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>Proven Results</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-white/85">
              <li>
                <Link href="/case-studies" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span>$20.23M Store Sales</span>
                  <span className="text-[10px] text-white font-bold bg-white/20 px-1.5 py-0.5 rounded border border-white/30">+200%</span>
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span>$7.37M PPC at 16% ACOS</span>
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span>482,714 Units Ordered</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-colors">
                  About CEO Mian Hassan
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline transition-colors">
                  Book 24-Point Audit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar with Pixel Web Developers Credit */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/90">
          <div>
            © 2026 Rankmoor. Tagline: <em className="text-white font-bold">Makes You The Brand</em>. All Rights Reserved.
          </div>
          
          {/* Developed by Pixel Web Developers */}
          <div className="text-white font-medium">
            Developed by{" "}
            <a
              href="https://pixelwebdevelopers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-extrabold underline underline-offset-2 hover:text-white/80 transition-colors"
            >
              Pixel Web Developers
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-white font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>Verified Seller Central Data</span>
            </span>
            <Link href="/contact" className="hover:underline">
              Privacy & Disclaimers
            </Link>
            <Link href="/contact" className="hover:underline">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
