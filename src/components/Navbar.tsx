"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { FaAmazon, FaTiktok } from "react-icons/fa6";
import { 
  ArrowUpRight, 
  Menu, 
  X, 
  Sparkles, 
  ChevronDown
} from "lucide-react";
import { COMPANY_INFO } from "@/data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("mobile-menu-active");
      window.dispatchEvent(new CustomEvent("rankmoor:mobile-menu", { detail: { open: true } }));
    } else {
      document.body.classList.remove("mobile-menu-active");
      window.dispatchEvent(new CustomEvent("rankmoor:mobile-menu", { detail: { open: false } }));
    }
    return () => {
      document.body.classList.remove("mobile-menu-active");
      window.dispatchEvent(new CustomEvent("rankmoor:mobile-menu", { detail: { open: false } }));
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.06)]"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Logo size="md" />

            {/* Desktop Navigation (Clean, no separate Amazon/TikTok links, no phone number) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === "/"
                    ? "text-[#FF6B00] bg-orange-50/90"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown (Houses both Amazon and TikTok Shop) */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button
                  type="button"
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                    pathname === "/amazon" || pathname === "/tiktok-shop"
                      ? "text-[#FF6B00] bg-orange-50/90"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {servicesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 w-[22rem] pt-2 z-50"
                    >
                      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-slate-900/10 p-3 space-y-1.5">
                        <Link
                          href="/amazon"
                          className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-orange-50/80 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                            <FaAmazon className="w-5 h-5 text-[#FF6B00]" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                              <span>Amazon Dominance</span>
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-orange-100 text-[#E05300]">
                                Core
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                              Cosmo SEO, Premium A+ 3D Creatives, PPC & DSP at 16% ACOS, Sourcing.
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/tiktok-shop"
                          className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-emerald-50/80 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                            <FaTiktok className="w-5 h-5 text-slate-900" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                              <span>TikTok Shop Engine</span>
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700">
                                Viral
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                              500+ Creator Machine, Turnkey Live Shopping & Amazon MCF Sync.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/case-studies"
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === "/case-studies"
                    ? "text-[#FF6B00] bg-orange-50/90"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                Case Studies
              </Link>

              <Link
                href="/about"
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === "/about"
                    ? "text-[#FF6B00] bg-orange-50/90"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === "/contact"
                    ? "text-[#FF6B00] bg-orange-50/90"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Bar (Clean CTA only, phone number removed) */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="group px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF7A1A] hover:to-[#FFA048] shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 transition-all duration-200 flex items-center gap-1.5 active:scale-98"
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Book Free Audit</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Trigger */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/contact"
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#FF6B00] text-white shadow-xs"
              >
                Free Audit
              </Link>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Open Mobile Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Professional Slide-over Mobile Sidebar Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[9998] lg:hidden">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs z-[9998]"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="absolute right-0 top-0 bottom-0 w-[320px] max-w-[85vw] bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-[9999]"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <Logo size="sm" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="py-6 space-y-2">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                      pathname === "/" ? "bg-orange-50 text-[#FF6B00]" : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    Home
                  </Link>

                  {/* Services Accordion in Mobile */}
                  <div className="rounded-xl border border-slate-100 overflow-hidden">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-bold text-slate-800 bg-slate-50/60"
                    >
                      <span>Services</span>
                      <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>

                    {mobileServicesOpen && (
                      <div className="p-2 space-y-1 bg-white">
                        <Link
                          href="/amazon"
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between p-2.5 rounded-lg text-xs font-semibold ${
                            pathname === "/amazon" ? "bg-orange-50 text-[#FF6B00]" : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <FaAmazon className="w-4 h-4 text-[#FF6B00]" />
                            <span>Amazon Dominance</span>
                          </div>
                          <span className="text-[10px] font-bold text-[#E05300] bg-orange-100 px-1.5 py-0.5 rounded">
                            Core
                          </span>
                        </Link>

                        <Link
                          href="/tiktok-shop"
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between p-2.5 rounded-lg text-xs font-semibold ${
                            pathname === "/tiktok-shop" ? "bg-emerald-50 text-emerald-700" : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <FaTiktok className="w-4 h-4 text-slate-900" />
                            <span>TikTok Shop Engine</span>
                          </div>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                            Viral
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/case-studies"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                      pathname === "/case-studies" ? "bg-orange-50 text-[#FF6B00]" : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    Case Studies
                  </Link>

                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                      pathname === "/about" ? "bg-orange-50 text-[#FF6B00]" : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    About Us
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                      pathname === "/contact" ? "bg-orange-50 text-[#FF6B00]" : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Bottom Actions inside Sidebar */}
              <div className="pt-6 border-t border-slate-100 space-y-3">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20BA5A] transition-colors shadow-md shadow-[#25D366]/20"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>WhatsApp</span>
                </a>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] shadow-md shadow-orange-500/25"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Free Audit</span>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
