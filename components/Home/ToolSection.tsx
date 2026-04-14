"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  BarChart3,
  Calculator,
  CalendarDays,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

/* ─────────────────────────────────────────────
   TOOLS DATA
───────────────────────────────────────────── */
const tools = [
  {
    icon: FileText,
    name: "Invoice Maker",
    description:
      "Generate clean, professional invoices for brand deals and collaborations in seconds.",
    tag: "Free",
    color: "#e91e8c",
    bg: "bg-pink-50",
    iconBg: "bg-pink-100",
    border: "border-pink-100",
    tagColor: "text-pink-600 bg-pink-100",
  },
  {
    icon: BarChart3,
    name: "Media Kit Builder",
    description:
      "Build a stunning media kit that showcases your stats, niche, and past brand work.",
    tag: "Free",
    color: "#7c3aed",
    bg: "bg-violet-50",
    iconBg: "bg-violet-100",
    border: "border-violet-100",
    tagColor: "text-violet-600 bg-violet-100",
  },
  {
    icon: Calculator,
    name: "Collab Rate Calculator",
    description:
      "Know your worth. Calculate fair rates for reels, posts, and stories based on your reach.",
    tag: "Free",
    color: "#0891b2",
    bg: "bg-cyan-50",
    iconBg: "bg-cyan-100",
    border: "border-cyan-100",
    tagColor: "text-cyan-700 bg-cyan-100",
  },
  {
    icon: CalendarDays,
    name: "Content Calendar",
    description:
      "Plan, schedule, and organise your content pipeline across platforms in one place.",
    tag: "Free",
    color: "#16a34a",
    bg: "bg-green-50",
    iconBg: "bg-green-100",
    border: "border-green-100",
    tagColor: "text-green-700 bg-green-100",
  },
];

/* ─────────────────────────────────────────────
   TOOL CARD
───────────────────────────────────────────── */
function ToolCard({
  tool,
  index,
}: {
  tool: (typeof tools)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = tool.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.015 }}
      className={`group relative flex flex-col gap-5 p-6 rounded-2xl border ${tool.border} ${tool.bg} overflow-hidden cursor-default transition-shadow duration-300 hover:shadow-xl`}
    >
      {/* Glow blob */}
      <div
        className="absolute -top-8 -right-8 w-28 h-28 rounded-full blur-2xl opacity-25 group-hover:opacity-50 transition-opacity duration-500"
        style={{ backgroundColor: tool.color }}
      />

      {/* Icon + tag */}
      <div className="flex items-start justify-between">
        <div
          className={`w-11 h-11 rounded-xl ${tool.iconBg} flex items-center justify-center`}
        >
          <Icon className="w-5 h-5" style={{ color: tool.color }} />
        </div>
        <span
          className={`text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${tool.tagColor}`}
        >
          {tool.tag}
        </span>
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3
          className="text-base font-black text-gray-900 mb-2 leading-snug"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {tool.name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {tool.description}
        </p>
      </div>

      {/* Hover arrow */}
      <div
        className="flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 -mb-1"
        style={{ color: tool.color }}
      >
        Try it free
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   TOOLS SECTION
───────────────────────────────────────────── */
export default function ToolsSection() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 overflow-hidden bg-[#f8f9fc]">
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

      {/* Gradient blob — top left */}
      <div
        className="absolute top-0 left-0 w-[480px] h-[480px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(233,30,140,0.07) 0%, transparent 65%)",
        }}
      />
      {/* Gradient blob — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(124,58,237,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div ref={headingRef} className="flex flex-col items-center text-center mb-16">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-200 bg-white/80 backdrop-blur-sm text-sm text-gray-600 shadow-sm mb-6"
          >
            <span className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center">
              <Zap className="w-3 h-3 text-white" />
            </span>
            Built for Creators & Brands
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-5"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Free Tools to{" "}
            <span className="relative inline-block" style={{ color: "#e91e8c" }}>
              Supercharge
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 340 10"
                fill="none"
              >
                <motion.path
                  d="M2 7 Q85 1 170 7 Q255 13 338 7"
                  stroke="#e91e8c"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={headingInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </svg>
            </span>{" "}
            Your Workflow.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-gray-500 text-lg max-w-xl leading-relaxed"
          >
            We build powerful, free tools designed specifically for creators and
            agencies — so you can focus on what you do best.
          </motion.p>
        </div>

        {/* ── TOOL CARDS GRID ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {tools.map((tool, i) => (
            <ToolCard key={tool.name} tool={tool} index={i} />
          ))}
        </div>

        {/* ── BOTTOM CTA ROW ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-white border border-gray-100 shadow-sm px-8 py-6"
        >
          <div className="flex items-center gap-4">
            {/* Icon cluster */}
            <div className="flex -space-x-2">
              {tools.map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.name}
                    className={`w-9 h-9 rounded-full border-2 border-white ${t.iconBg} flex items-center justify-center`}
                  >
                    <Icon className="w-4 h-4" style={{ color: t.color }} />
                  </div>
                );
              })}
            </div>
            <div>
              <p
                className="text-base font-black text-gray-900"
                style={{ fontFamily: "Georgia, serif" }}
              >
                All tools are completely free.
              </p>
              <p className="text-sm text-gray-400">
                No sign-up required for most tools.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/tools">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 bg-[#e91e8c] hover:bg-pink-600 text-white font-bold text-sm px-7 py-3.5 rounded-2xl shadow-lg shadow-pink-200 transition-colors cursor-pointer whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4" />
              Explore All Tools
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}