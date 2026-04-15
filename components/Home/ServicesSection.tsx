"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Megaphone,
  Film,
  Rocket,
  Users,
  Compass,
  TrendingUp,
  MapPin,
  BarChart2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────────
   SERVICES DATA
───────────────────────────────────────────── */
const mainService = {
  icon: Megaphone,
  title: "Influencer Campaign Execution",
  description:
    "End-to-end campaign management — from creator discovery and briefing to live reporting and results. We run campaigns that actually convert.",
};

const subServices = [
  {
    icon: Film,
    name: "UGC & Short-Form Content",
    description:
      "Authentic, scroll-stopping content built for Reels, Shorts, and TikTok — produced by vetted creators who know their audience.",
    color: "#e91e8c",
    bg: "from-pink-50 to-rose-50/60",
    border: "border-pink-100",
    iconBg: "bg-pink-100",
    number: "01",
  },
  {
    icon: Rocket,
    name: "Product Launch Campaigns",
    description:
      "Make every launch land with precision. We orchestrate creator rollouts that build hype, drive traffic, and convert at scale.",
    color: "#7c3aed",
    bg: "from-violet-50 to-purple-50/60",
    border: "border-violet-100",
    iconBg: "bg-violet-100",
    number: "02",
  },
  {
    icon: Users,
    name: "Creator Management",
    description:
      "Full-service talent handling — contracts, briefs, timelines, revisions, and payments. You focus on strategy, we handle the rest.",
    color: "#0891b2",
    bg: "from-cyan-50 to-sky-50/60",
    border: "border-cyan-100",
    iconBg: "bg-cyan-100",
    number: "03",
  },
  {
    icon: Compass,
    name: "Content Direction",
    description:
      "Strategic creative direction that ensures every piece of content feels on-brand, on-trend, and audience-first.",
    color: "#d97706",
    bg: "from-amber-50 to-yellow-50/60",
    border: "border-amber-100",
    iconBg: "bg-amber-100",
    number: "04",
  },
  {
    icon: MapPin,
    name: "Regional Campaigns",
    description:
      "Hyperlocal and regional influencer strategies tailored for Tier 1, 2, and 3 cities across India and beyond.",
    color: "#dc2626",
    bg: "from-red-50 to-rose-50/60",
    border: "border-red-100",
    iconBg: "bg-red-100",
    number: "06",
  },
  {
    icon: BarChart2,
    name: "Performance Optimization",
    description:
      "Data-backed iteration on what's working. We track, analyse, and improve every campaign to maximise your ROI.",
    color: "#0369a1",
    bg: "from-blue-50 to-indigo-50/60",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
    number: "07",
  },
];

/* ─────────────────────────────────────────────
   SERVICE CARD
───────────────────────────────────────────── */
function ServiceCard({
  service,
  index,
}: {
  service: (typeof subServices)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.52,
        delay: (index % 3) * 0.09,
        ease: "easeOut",
      }}
      whileHover={{ y: -5, scale: 1.012 }}
      className={`group relative flex flex-col gap-4 p-6 rounded-2xl border bg-gradient-to-br ${service.bg} ${service.border} overflow-hidden transition-shadow duration-300 hover:shadow-xl`}
    >
      {/* Number watermark */}
      <span
        className="absolute -top-3 -right-1 text-[72px] font-black leading-none select-none pointer-events-none"
        style={{ color: service.color, opacity: 0.06 }}
      >
        {service.number}
      </span>

      {/* Glow */}
      <div
        className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ backgroundColor: service.color }}
      />

      {/* Icon row */}
      <div className="flex items-center justify-between">
        <div
          className={`w-11 h-11 rounded-xl ${service.iconBg} flex items-center justify-center`}
        >
          <Icon className="w-5 h-5" style={{ color: service.color }} />
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 space-y-2">
        <h3
          className="text-[15px] font-black text-gray-900 leading-snug"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {service.name}
        </h3>
        <p className="text-[13px] text-gray-500 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Hover arrow */}
      <Link
        href="/appointment"
        className="inline-flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200"
        style={{ color: service.color }}
      >
        Learn more
        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   HERO SERVICE BANNER (main service)
───────────────────────────────────────────── */
function HeroBanner({
  gridRef,
}: {
  gridRef: React.RefObject<HTMLDivElement | null>;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = mainService.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="relative rounded-3xl overflow-hidden bg-gray-950 p-8 md:p-10 mb-6 flex flex-col md:flex-row items-start md:items-center gap-7"
    >
      {/* Pink glow */}
      <div
        className="absolute -top-16 -left-16 w-64 h-64 rounded-full blur-3xl"
        style={{ backgroundColor: "#e91e8c", opacity: 0.18 }}
      />
      <div
        className="absolute -bottom-16 -right-8 w-64 h-64 rounded-full blur-3xl"
        style={{ backgroundColor: "#7c3aed", opacity: 0.15 }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Icon */}
      <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">
        <Icon className="w-8 h-8 text-pink-400" />
      </div>

      {/* Text */}
      <div className="relative z-10 flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-pink-400 bg-pink-500/15 px-3 py-1 rounded-full">
            Core Service
          </span>
        </div>
        <h3
          className="text-2xl md:text-3xl font-black text-white leading-tight mb-2"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {mainService.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
          {mainService.description}
        </p>
      </div>

      {/* Arrow */}
      <motion.div
        whileHover={{ x: 4 }}
        onClick={() =>
          gridRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
        className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
      >
        <ArrowRight className="w-5 h-5 text-white/60" />
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SERVICES SECTION
───────────────────────────────────────────── */
export default function ServicesSection() {
  const headingRef = useRef(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section className="relative pt-24 pb-3 overflow-hidden bg-[#f8f9fc]">
      {/* ✅ Top fade — blends from About section white into this background */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,210,240,0.28) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,210,240,0.28) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Gradient blobs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(167,139,250,0.1) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[420px] h-[420px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(233,30,140,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── HEADER ── */}
        <div
          ref={headingRef}
          className="flex flex-col items-center text-center mb-14"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-200 bg-white/80 backdrop-blur-sm text-sm text-gray-600 shadow-sm mb-6"
          >
            <span className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </span>
            What We Do
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-5"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Everything Your{" "}
            <span
              className="relative inline-block"
              style={{ color: "#e91e8c" }}
            >
              Campaign
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 280 10"
                fill="none"
              >
                <motion.path
                  d="M2 7 Q70 1 140 7 Q210 13 278 7"
                  stroke="#e91e8c"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </svg>
            </span>{" "}
            Needs.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-gray-500 text-lg max-w-xl leading-relaxed"
          >
            From ideation to execution — we cover every angle of influencer
            marketing so your brand moves faster and hits harder.
          </motion.p>
        </div>

        {/* ── MAIN SERVICE BANNER ── */}
        <HeroBanner gridRef={gridRef} />

        {/* ── SERVICES GRID ── */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14 scroll-mt-8"
        >
          {subServices.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} />
          ))}
        </div>
      </div>

      {/* ✅ Bottom fade — blends service section into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
    </section>
  );
}
