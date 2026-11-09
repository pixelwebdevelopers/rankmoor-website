"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { CurvyUnderline } from "./CurvyUnderline";
import { Globe, Sparkles, ShieldCheck, TrendingUp, Cpu, Award } from "lucide-react";

// Curated polygon coastlines for main world landmasses [lat, lon]
const CONTINENT_POLYGONS: [number, number][][] = [
  // North America
  [
    [70, -160], [71, -130], [60, -138], [55, -130], [50, -125], [38, -123],
    [32, -117], [23, -110], [18, -104], [15, -93], [19, -91], [25, -97],
    [29, -94], [29, -83], [25, -80], [30, -81], [35, -75], [42, -70],
    [45, -65], [47, -53], [53, -56], [58, -63], [62, -75], [68, -85],
    [64, -90], [69, -115], [70, -160]
  ],
  // South America
  [
    [11, -75], [8, -77], [2, -79], [-5, -81], [-18, -71], [-30, -71],
    [-45, -75], [-54, -70], [-55, -66], [-48, -66], [-38, -58], [-33, -53],
    [-23, -43], [-13, -38], [-5, -35], [2, -50], [5, -52], [7, -58],
    [10, -62], [11, -75]
  ],
  // Europe
  [
    [36, -6], [43, -9], [44, -1], [48, -5], [50, 1], [54, 8],
    [55, 12], [58, 12], [63, 21], [70, 28], [68, 44], [60, 50],
    [50, 40], [45, 35], [42, 28], [37, 24], [38, 20], [41, 15],
    [44, 8], [42, 3], [37, -2], [36, -6]
  ],
  // UK
  [
    [50, -5], [54, -3], [58, -5], [58, -2], [55, -1], [52, 1], [50, -1], [50, -5]
  ],
  // Africa
  [
    [36, -6], [37, 10], [33, 11], [32, 25], [31, 32], [28, 34],
    [13, 43], [11, 51], [2, 45], [-5, 40], [-15, 40], [-26, 33],
    [-34, 26], [-34, 18], [-28, 16], [-17, 12], [-5, 12], [4, 7],
    [4, 2], [6, 2], [5, -4], [4, -8], [11, -16], [15, -17],
    [21, -17], [28, -13], [33, -8], [36, -6]
  ],
  // Asia
  [
    [70, 35], [75, 80], [73, 130], [67, 175], [60, 165], [53, 142],
    [43, 132], [38, 120], [30, 122], [22, 114], [21, 108], [10, 104],
    [1, 104], [10, 98], [22, 90], [21, 70], [25, 62], [13, 44],
    [25, 37], [35, 36], [40, 50], [50, 55], [60, 50], [70, 35]
  ],
  // India
  [
    [25, 68], [21, 70], [15, 74], [8, 77], [10, 80], [16, 82],
    [21, 87], [25, 89], [28, 85], [25, 68]
  ],
  // Japan
  [
    [31, 131], [34, 135], [40, 140], [45, 142], [43, 145], [35, 140], [33, 133], [31, 131]
  ],
  // Australia
  [
    [-12, 130], [-15, 136], [-12, 142], [-20, 148], [-28, 153], [-37, 150],
    [-38, 145], [-35, 138], [-32, 132], [-35, 116], [-28, 114], [-22, 114],
    [-17, 122], [-12, 130]
  ]
];

// Key marketplace hubs
const MARKETPLACE_HUBS = [
  { name: "North America (Amazon US)", lat: 39.5, lon: -98.3, color: "#2DD4BF" },
  { name: "Europe (Amazon UK/DE)", lat: 51.5, lon: -0.1, color: "#38BDF8" },
  { name: "Middle East (Amazon UAE)", lat: 25.2, lon: 55.3, color: "#FBBF24" },
  { name: "East Asia (Tmall / TikTok)", lat: 31.2, lon: 121.5, color: "#34D399" },
  { name: "Japan (Amazon JP)", lat: 35.7, lon: 139.7, color: "#F472B6" },
  { name: "Australia (Amazon AU)", lat: -33.8, lon: 151.2, color: "#A78BFA" }
];

// Connection arcs between hubs
const HUBS_CONNECTIONS = [
  [0, 1], // US <-> Europe
  [1, 2], // Europe <-> UAE
  [2, 3], // UAE <-> East Asia
  [3, 4], // East Asia <-> Japan
  [3, 5], // East Asia <-> Australia
  [0, 3], // US <-> East Asia
];

export function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const rotation = useRef(0.5); // Radians
  const tilt = useRef(0.2); // Radians
  const velocity = useRef(0.0035); // Continuous spin velocity
  const animFrameId = useRef<number | null>(null);
  const [activeHubIndex, setActiveHubIndex] = useState(0);

  // Cycle active hub for extra dynamic life
  useEffect(() => {
    const hubInterval = setInterval(() => {
      setActiveHubIndex((prev) => (prev + 1) % MARKETPLACE_HUBS.length);
    }, 3200);
    return () => clearInterval(hubInterval);
  }, []);

  // 3D Spherical Projection Helper
  const project = useCallback(
    (lat: number, lon: number, radius: number, cx: number, cy: number) => {
      const phi = (lat * Math.PI) / 180;
      const lambda = (lon * Math.PI) / 180 + rotation.current;
      const theta = tilt.current;

      // Unrotated spherical coordinates
      const x0 = radius * Math.cos(phi) * Math.sin(lambda);
      const y0 = -radius * Math.sin(phi);
      const z0 = radius * Math.cos(phi) * Math.cos(lambda);

      // Rotate around X-axis for tilt
      const x = x0;
      const y = y0 * Math.cos(theta) - z0 * Math.sin(theta);
      const z = y0 * Math.sin(theta) + z0 * Math.cos(theta);

      return {
        x: cx + x,
        y: cy + y,
        z,
        visible: z > 0,
        depth: z / radius, // 0 (edge) to 1 (center)
      };
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;

    const render = () => {
      time += 0.02;

      // Handle idle rotation vs momentum decay
      if (!isDragging) {
        rotation.current += velocity.current;
        // Gently settle towards default smooth spin speed
        if (Math.abs(velocity.current - 0.0035) > 0.0001) {
          velocity.current += (0.0035 - velocity.current) * 0.05;
        }
      }

      // Responsive canvas sizing
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.44;

      // 1. Atmospheric Outer Glow (Cyan / Teal Corona)
      const outerGlow = ctx.createRadialGradient(cx, cy, radius * 0.95, cx, cy, radius * 1.35);
      outerGlow.addColorStop(0, "rgba(45, 212, 191, 0.28)");
      outerGlow.addColorStop(0.4, "rgba(20, 184, 166, 0.12)");
      outerGlow.addColorStop(0.7, "rgba(13, 148, 136, 0.04)");
      outerGlow.addColorStop(1, "rgba(10, 18, 38, 0)");
      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // 2. Base Ocean Sphere (Deep Navy Gradient with 3D spherical directional light)
      const oceanGrad = ctx.createRadialGradient(
        cx - radius * 0.35,
        cy - radius * 0.35,
        radius * 0.1,
        cx,
        cy,
        radius
      );
      oceanGrad.addColorStop(0, "#102347");
      oceanGrad.addColorStop(0.5, "#0A1733");
      oceanGrad.addColorStop(0.85, "#060D20");
      oceanGrad.addColorStop(1, "#030712");

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = oceanGrad;
      ctx.fill();
      ctx.clip(); // Clip everything to the sphere!

      // 3. Subtle Latitude & Longitude Coordinate Grid Lines
      ctx.strokeStyle = "rgba(45, 212, 191, 0.07)";
      ctx.lineWidth = 1;

      // Latitude circles
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        let first = true;
        for (let lon = -180; lon <= 180; lon += 8) {
          const p = project(lat, lon, radius, cx, cy);
          if (p.visible) {
            if (first) {
              ctx.moveTo(p.x, p.y);
              first = false;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      // Longitude meridians
      for (let lon = -180; lon < 180; lon += 45) {
        ctx.beginPath();
        let first = true;
        for (let lat = -80; lat <= 80; lat += 8) {
          const p = project(lat, lon, radius, cx, cy);
          if (p.visible) {
            if (first) {
              ctx.moveTo(p.x, p.y);
              first = false;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      // 4. Render Continents & Coastlines with glowing teal fill and borders
      CONTINENT_POLYGONS.forEach((polygon) => {
        let first = true;
        let anyVisible = false;

        ctx.beginPath();
        for (let i = 0; i < polygon.length; i++) {
          const [lat, lon] = polygon[i];
          const p = project(lat, lon, radius, cx, cy);

          if (p.visible) {
            anyVisible = true;
            if (first) {
              ctx.moveTo(p.x, p.y);
              first = false;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          } else {
            first = true;
          }
        }

        if (anyVisible) {
          ctx.fillStyle = "rgba(20, 184, 166, 0.32)";
          ctx.fill();
          ctx.strokeStyle = "rgba(45, 212, 191, 0.85)";
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      });

      // 5. Render Glowing Trade Route Arcs connecting Hubs
      HUBS_CONNECTIONS.forEach(([i1, i2], index) => {
        const hubA = MARKETPLACE_HUBS[i1];
        const hubB = MARKETPLACE_HUBS[i2];
        const pA = project(hubA.lat, hubA.lon, radius, cx, cy);
        const pB = project(hubB.lat, hubB.lon, radius, cx, cy);

        if (pA.visible && pB.visible) {
          // Midpoint elevated in 3D to create 3D parabolic orbit curve
          const midLat = (hubA.lat + hubB.lat) / 2;
          const midLon = (hubA.lon + hubB.lon) / 2;
          const arcHeight = radius * 1.14;
          const pMid = project(midLat, midLon, arcHeight, cx, cy);

          // Arc path
          ctx.beginPath();
          ctx.moveTo(pA.x, pA.y);
          ctx.quadraticCurveTo(pMid.x, pMid.y, pB.x, pB.y);
          ctx.strokeStyle = `rgba(45, 212, 191, ${0.25 + 0.15 * Math.sin(time * 2 + index)})`;
          ctx.lineWidth = 1.4;
          ctx.stroke();

          // Animated trade particle traveling along arc
          const progress = (time * 0.45 + index * 0.22) % 1;
          const t = progress;
          // Quadratic bezier interpolation
          const particleX =
            (1 - t) * (1 - t) * pA.x + 2 * (1 - t) * t * pMid.x + t * t * pB.x;
          const particleY =
            (1 - t) * (1 - t) * pA.y + 2 * (1 - t) * t * pMid.y + t * t * pB.y;

          ctx.beginPath();
          ctx.arc(particleX, particleY, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFFFF";
          ctx.shadowColor = "#2DD4BF";
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      });

      // 6. Marketplace Hub Beacons with Pulsing Radar Rings
      MARKETPLACE_HUBS.forEach((hub, idx) => {
        const p = project(hub.lat, hub.lon, radius, cx, cy);
        if (p.visible && p.depth > 0.1) {
          const depthAlpha = Math.min(1, p.depth * 1.4);

          // Outer radar pulse
          const pulseRadius = 4 + ((time * 15 + idx * 6) % 18);
          const pulseAlpha = Math.max(0, 1 - pulseRadius / 18) * depthAlpha * 0.7;

          ctx.beginPath();
          ctx.arc(p.x, p.y, pulseRadius, 0, Math.PI * 2);
          ctx.strokeStyle = hub.color;
          ctx.globalAlpha = pulseAlpha;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Solid core beacon dot
          ctx.globalAlpha = depthAlpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = hub.color;
          ctx.fill();

          // Center bright pinpoint
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFFFF";
          ctx.fill();

          ctx.globalAlpha = 1;
        }
      });

      // 7. Spherical Inner Shadow & Horizon Vignette (enhances 3D round curvature)
      const innerVignette = ctx.createRadialGradient(cx, cy, radius * 0.7, cx, cy, radius);
      innerVignette.addColorStop(0, "rgba(3, 7, 18, 0)");
      innerVignette.addColorStop(0.75, "rgba(3, 7, 18, 0.35)");
      innerVignette.addColorStop(1, "rgba(3, 7, 18, 0.82)");
      ctx.fillStyle = innerVignette;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore(); // Restore sphere clip

      // 8. Outer atmospheric rim border
      ctx.strokeStyle = "rgba(45, 212, 191, 0.45)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [isDragging, project]);

  // Mouse & Touch Drag Event Handlers for smooth interactivity
  const handlePointerDown = (clientX: number, clientY: number) => {
    setIsDragging(true);
    lastMousePos.current = { x: clientX, y: clientY };
    velocity.current = 0;
  };

  const handlePointerMove = (clientX: number, clientY: number) => {
    if (!isDragging) return;
    const dx = clientX - lastMousePos.current.x;
    const dy = clientY - lastMousePos.current.y;
    lastMousePos.current = { x: clientX, y: clientY };

    // Update spin and tilt
    rotation.current += dx * 0.006;
    tilt.current = Math.max(-0.6, Math.min(0.6, tilt.current - dy * 0.006));
    velocity.current = dx * 0.003;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="relative w-full bg-[#070B18] text-white py-24 sm:py-32 overflow-hidden border-y border-slate-800/80">
      
      {/* Background Starfield / Constellation Ambient Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(20,184,166,0.18),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,107,0,0.12),transparent_40%)] pointer-events-none" />
      
      {/* Subtle Grid Lines Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/70 border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-teal-950/50"
          >
            <Globe className="w-3.5 h-3.5 animate-spin-slow text-teal-400" />
            <span>Continuous Global Marketplace Operations</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight"
          >
            Borderless Scale Across Every Major{" "}
            <CurvyUnderline strokeColor="#2DD4BF" variant="brush">
              Global Marketplace
            </CurvyUnderline>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            From North American FBA dominance to European multi-jurisdiction VAT compliance and Asian live-stream TikTok GMV — we deploy enterprise brand moats worldwide.
          </motion.p>
        </div>

        {/* ============================================================ */}
        {/* MAIN GLOBE & 6-STAT SHOWCASE (FAITHFUL TO USER REFERENCE)   */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-4">
          
          {/* ================= LEFT COLUMN: 3 STATS (SLIDE IN LEFT) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 space-y-8 sm:space-y-12 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Stat 1: #1 Global 3P Amazon Seller */}
            <div className="relative group p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-teal-500/30 transition-all duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight flex items-baseline justify-center lg:justify-start gap-1">
                <span className="text-teal-400">#</span>1
              </div>
              <div className="mt-2 text-sm sm:text-base font-semibold text-slate-300 leading-snug">
                Global 3P Amazon Seller
              </div>
              <div className="mt-1 text-xs text-slate-500">
                Top 0.01% tier across North America & UK
              </div>
            </div>

            {/* Stat 2: 100+ Countries Reached */}
            <div className="relative group p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-teal-500/30 transition-all duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight flex items-baseline justify-center lg:justify-start">
                100<span className="text-[#FF6B00]">+</span>
              </div>
              <div className="mt-2 text-sm sm:text-base font-semibold text-slate-300 leading-snug">
                Countries Reached
              </div>
              <div className="mt-1 text-xs text-slate-500">
                Cross-border fulfillment & international listings
              </div>
            </div>

            {/* Stat 3: Gold Trading Partner */}
            <div className="relative group p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-teal-500/30 transition-all duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent tracking-tight">
                Gold
              </div>
              <div className="mt-2 text-sm sm:text-base font-semibold text-slate-300 leading-snug">
                Trading Partner on Tmall Global
              </div>
              <div className="mt-1 text-xs text-slate-500">
                Authorized cross-border flagship retail rights
              </div>
            </div>
          </motion.div>

          {/* ================= CENTER COLUMN: INTERACTIVE CONTINUOUS 3D GLOBE ================= */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[460px] sm:max-w-[520px] aspect-square flex items-center justify-center"
            >
              {/* Interactive 3D Canvas */}
              <canvas
                ref={canvasRef}
                className="w-full h-full cursor-grab active:cursor-grabbing select-none"
                style={{ touchAction: "none" }}
                onMouseDown={(e) => handlePointerDown(e.clientX, e.clientY)}
                onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
                onMouseUp={handlePointerUp}
                onMouseLeave={handlePointerUp}
                onTouchStart={(e) => {
                  if (e.touches[0]) handlePointerDown(e.touches[0].clientX, e.touches[0].clientY);
                }}
                onTouchMove={(e) => {
                  if (e.touches[0]) handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
                }}
                onTouchEnd={handlePointerUp}
              />

              {/* Floating Interactive Drag Tooltip Hint */}
              <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-teal-500/30 text-[11px] font-medium text-teal-300 flex items-center gap-2 pointer-events-none shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                <span>Drag to spin • Continuously live in 22 regions</span>
              </div>
            </motion.div>

            {/* Active Hub Live Indicator Pill */}
            <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-400">
              <span className="text-slate-500">Active Node:</span>
              <span className="font-semibold text-white">
                {MARKETPLACE_HUBS[activeHubIndex].name}
              </span>
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: MARKETPLACE_HUBS[activeHubIndex].color }}
              />
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 3 STATS (SLIDE IN RIGHT) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 space-y-8 sm:space-y-12 text-center lg:text-left order-3"
          >
            {/* Stat 4: 60+ Marketplaces */}
            <div className="relative group p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-teal-500/30 transition-all duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight flex items-baseline justify-center lg:justify-start">
                60<span className="text-teal-400">+</span>
              </div>
              <div className="mt-2 text-sm sm:text-base font-semibold text-slate-300 leading-snug">
                Marketplaces
              </div>
              <div className="mt-1 text-xs text-slate-500">
                Amazon, TikTok Shop, Walmart, eBay & Target Plus
              </div>
            </div>

            {/* Stat 5: 22 Global locations */}
            <div className="relative group p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-teal-500/30 transition-all duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight flex items-baseline justify-center lg:justify-start">
                22
              </div>
              <div className="mt-2 text-sm sm:text-base font-semibold text-slate-300 leading-snug">
                Global Locations
              </div>
              <div className="mt-1 text-xs text-slate-500">
                Regional logistics, creative studios & PPC desks
              </div>
            </div>

            {/* Stat 6: 38T Ecommerce Data Points Analyzed */}
            <div className="relative group p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-teal-500/30 transition-all duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-400 bg-clip-text text-transparent tracking-tight flex items-baseline justify-center lg:justify-start">
                38T
              </div>
              <div className="mt-2 text-sm sm:text-base font-semibold text-slate-300 leading-snug">
                Ecommerce Data Points Analyzed
              </div>
              <div className="mt-1 text-xs text-slate-500">
                Search term harvesting & competitor bid models
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

