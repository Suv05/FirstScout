"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Zap,
  Target,
  Users,
  ArrowRight,
  ChevronDown,
  Check,
  X,
  BarChart3,
  FileText,
  Megaphone,
  Video,
  Globe,
  TrendingUp,
  Sparkles,
  Star,
  Shield,
  Clock,
  Search,
  Layers,
} from "lucide-react";

/* ══════════════════════════════════════════
   SHARED
══════════════════════════════════════════ */
const MAGENTA = "#d4006e";
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
});

function PillBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4006e]/25 bg-[#d4006e]/6 text-[#d4006e] text-xs font-bold tracking-widest uppercase mb-6"
      style={{ fontFamily: "system-ui,sans-serif" }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#d4006e] animate-pulse" />
      {children}
    </div>
  );
}

function SectionHeading({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <h2
      className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.08]"
      style={{ fontFamily: "'Georgia',serif" }}
    >
      {children}
    </h2>
  );
}

/* ══════════════════════════════════════════
   1. HERO
══════════════════════════════════════════ */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const op = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const words = ["Campaigns", "That", "Actually", "Perform."];

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white border-b border-gray-100"
    >
      {/* blobs */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#ede8f5] via-[#f5e8f0] to-transparent opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-[#d4006e]/5 blur-3xl pointer-events-none" />

      {/* grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.035) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        style={{ y, opacity: op }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32"
      >
        <motion.div {...fade(0)}>
          <PillBadge>About FirstSkout</PillBadge>
        </motion.div>

        <div className="max-w-4xl">
          <h1
            className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.04] mb-8"
            style={{ fontFamily: "'Georgia',serif" }}
          >
            Built for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#d4006e]">Campaigns</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-1 left-0 right-0 h-3 bg-[#d4006e]/12 rounded origin-left"
              />
            </span>{" "}
            That <em>Actually</em> Perform.
          </h1>

          <motion.p
            {...fade(0.2)}
            className="text-xl text-gray-500 leading-relaxed max-w-2xl mb-4"
            style={{ fontFamily: "system-ui,sans-serif", fontWeight: 400 }}
          >
            FirstSkout is an execution-first influencer marketing agency focused
            on relevance, content quality, and real results — not outdated
            creator lists.
          </motion.p>
          <motion.p
            {...fade(0.3)}
            className="text-base text-gray-400 mb-10"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            We scout influencers in real time, align them with your brand, and
            manage everything from strategy to execution to payments.
          </motion.p>

          <motion.div {...fade(0.4)} className="flex flex-wrap gap-4">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#d4006e] text-white font-bold text-sm hover:bg-[#b0005a] transition-colors duration-200"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              Start Your Campaign <ArrowRight size={15} />
            </Link>
            <Link
              href="#what-we-do"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-200 text-gray-600 font-semibold text-sm hover:border-gray-400 transition-colors duration-200"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              See What We Do
            </Link>
          </motion.div>
        </div>

        {/* floating stat chips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 flex flex-wrap gap-3"
        >
          {[
            ["Real-Time Scouting", Search],
            ["End-to-End Execution", Layers],
            ["Creator Relationships", Users],
            ["Content Quality", Star],
          ].map(([label, Icon]: any, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-600 text-xs font-semibold"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              <Icon size={12} className="text-[#d4006e]" />
              {label}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════
   2. SHORT ABOUT
══════════════════════════════════════════ */
function ShortAbout() {
  return (
    <section className="relative bg-[#f7f6f3] py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.03) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div {...fade(0)}>
            <PillBadge>Who We Are</PillBadge>
            <SectionHeading>
              Beyond the <span className="text-[#d4006e]">Database.</span>
            </SectionHeading>
            <p
              className="mt-5 text-gray-500 text-lg leading-relaxed"
              style={{ fontFamily: "system-ui,sans-serif", fontWeight: 400 }}
            >
              Most agencies hand you a list. We hand you results. FirstSkout is
              a full-service influencer marketing agency that scouts the right
              creators in real time — no stale databases, no guesswork, no
              middlemen.
            </p>
            <p
              className="mt-4 text-gray-400 text-base leading-relaxed"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              We take full ownership of your campaign — from the first strategy
              call to the final payment to every creator.
            </p>
            <div
              className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#d4006e]/8 border border-[#d4006e]/20 text-[#d4006e] text-sm font-bold"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              <Sparkles size={13} />
              Right creators. Strong content. Real results.
            </div>
          </motion.div>

          {/* Visual: animated numbers */}
          <motion.div {...fade(0.15)} className="grid grid-cols-2 gap-4">
            {[
              { num: "100%", label: "Campaign Ownership", color: "#d4006e" },
              { num: "0", label: "Outdated Creator Lists", color: "#7c3aed" },
              {
                num: "Real-Time",
                label: "Creator Discovery",
                color: "#0891b2",
              },
              { num: "E2E", label: "Execution Coverage", color: "#059669" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <p
                  className="text-3xl font-black mb-1"
                  style={{ color: s.color, fontFamily: "'Georgia',serif" }}
                >
                  {s.num}
                </p>
                <p
                  className="text-xs text-gray-500 font-medium"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   3. CORE PILLARS (3 cards)
══════════════════════════════════════════ */
const PILLARS = [
  {
    icon: Search,
    title: "Real-Time Scouting",
    desc: "We discover creators based on what's trending now — not what was relevant last quarter. Audience fit, content style, and engagement are all evaluated fresh.",
    accent: "#d4006e",
  },
  {
    icon: Zap,
    title: "Execution-First",
    desc: "From campaign planning to creator coordination to final payments — we own every step. You focus on your brand; we handle the rest.",
    accent: "#7c3aed",
  },
  {
    icon: Users,
    title: "Creator Relationships",
    desc: "We don't treat creators as vendors. We build long-term partnerships that unlock better content, better rates, and more authentic storytelling.",
    accent: "#0891b2",
  },
];

function CorePillars() {
  return (
    <section className="bg-white py-20 md:py-28 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.div {...fade(0)} className="flex justify-center">
            <PillBadge>Our Foundation</PillBadge>
          </motion.div>
          <motion.div {...fade(0.1)}>
            <SectionHeading>
              Three pillars.{" "}
              <span className="text-[#d4006e]">One promise.</span>
            </SectionHeading>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                whileHover={{ y: -6 }}
                className="group relative bg-[#f7f6f3] rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg,${p.accent},${p.accent}50)`,
                  }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${p.accent}12`,
                    border: `1.5px solid ${p.accent}25`,
                  }}
                >
                  <Icon
                    size={22}
                    style={{ color: p.accent }}
                    strokeWidth={1.8}
                  />
                </div>
                <h3
                  className="text-xl font-black text-gray-900 mb-3"
                  style={{ fontFamily: "'Georgia',serif" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-gray-500 text-sm leading-relaxed"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   4. ABOUT / STORY
══════════════════════════════════════════ */
const PROBLEMS = [
  "Depend on outdated creator databases",
  "Act as passive middlemen",
  "Ignore content quality standards",
  "Offer one-time, disposable collaborations",
];
const SOLUTIONS = [
  "Scout creators fresh for every campaign",
  "Own the full execution pipeline",
  "Enforce structured briefs & review cycles",
  "Build lasting creator relationships",
];

function AboutStory() {
  return (
    <section className="bg-[#f7f6f3] py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.03) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div {...fade(0)} className="flex justify-center">
            <PillBadge>Our Story</PillBadge>
          </motion.div>
          <motion.div {...fade(0.1)}>
            <SectionHeading>
              Built on Execution.
              <br />
              <span className="text-[#d4006e]">Designed for What's Next.</span>
            </SectionHeading>
          </motion.div>
          <motion.p
            {...fade(0.2)}
            className="mt-5 text-gray-500 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            FirstSkout was created to fix what traditional agencies get
            fundamentally wrong. We took every broken pattern in the industry
            and rebuilt it from scratch.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Problem */}
          <motion.div
            {...fade(0)}
            className="bg-white rounded-2xl border border-gray-200 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center">
                <X size={18} className="text-red-400" />
              </div>
              <h3
                className="text-lg font-black text-gray-800"
                style={{ fontFamily: "'Georgia',serif" }}
              >
                Typical Agencies
              </h3>
            </div>
            <ul className="space-y-3">
              {PROBLEMS.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 text-sm text-gray-500"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                    <X size={10} className="text-red-400" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            {...fade(0.12)}
            className="bg-gray-900 rounded-2xl border border-gray-800 p-8 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#d4006e]/15 blur-2xl" />
            <div className="flex items-center gap-3 mb-6 relative">
              <div className="w-9 h-9 rounded-xl bg-[#d4006e]/20 flex items-center justify-center">
                <Check size={18} className="text-[#d4006e]" />
              </div>
              <h3
                className="text-lg font-black text-white"
                style={{ fontFamily: "'Georgia',serif" }}
              >
                FirstSkout
              </h3>
            </div>
            <ul className="space-y-3 relative">
              {SOLUTIONS.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 text-sm text-gray-300"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#d4006e]/20 border border-[#d4006e]/30 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-[#d4006e]" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   5. WHAT WE DO (6 cards)
══════════════════════════════════════════ */
const WHAT_WE_DO = [
  {
    icon: Target,
    title: "Campaign Strategy & Planning",
    desc: "We map out the full campaign before a single creator is contacted — goals, formats, timelines, budgets.",
    accent: "#d4006e",
  },
  {
    icon: Search,
    title: "Real-Time Influencer Scouting",
    desc: "No databases. We discover creators based on live relevance, trends, and your specific audience profile.",
    accent: "#7c3aed",
  },
  {
    icon: Megaphone,
    title: "Creator Outreach & Negotiation",
    desc: "We handle every conversation — from first DM to final contract — so you don't have to.",
    accent: "#0891b2",
  },
  {
    icon: FileText,
    title: "Content Briefing & QC",
    desc: "Structured briefs, clear deliverables, and a multi-step review process ensures content that converts.",
    accent: "#059669",
  },
  {
    icon: BarChart3,
    title: "Execution & Monitoring",
    desc: "Live tracking of deliverables, posting schedules, and performance metrics throughout the campaign.",
    accent: "#d97706",
  },
  {
    icon: TrendingUp,
    title: "Payments & Reporting",
    desc: "We handle creator payments end-to-end and deliver post-campaign reports with clear insights.",
    accent: "#db2777",
  },
];

function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="bg-white py-20 md:py-28 border-y border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.div {...fade(0)} className="flex justify-center">
            <PillBadge>What We Do</PillBadge>
          </motion.div>
          <motion.div {...fade(0.1)}>
            <SectionHeading>
              Everything your campaign{" "}
              <span className="text-[#d4006e]">needs.</span>
            </SectionHeading>
          </motion.div>
          <motion.p
            {...fade(0.2)}
            className="mt-4 text-gray-400 max-w-xl mx-auto"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            Six services. One team. Zero handoffs to outside vendors.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHAT_WE_DO.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                {...fade(i * 0.07)}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl border border-gray-100 bg-[#f7f6f3] p-6 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute bottom-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: item.accent }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `${item.accent}12`,
                    border: `1.5px solid ${item.accent}22`,
                  }}
                >
                  <Icon
                    size={19}
                    style={{ color: item.accent }}
                    strokeWidth={1.8}
                  />
                </div>
                <h3
                  className="text-base font-black text-gray-900 mb-2"
                  style={{ fontFamily: "'Georgia',serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   6. OUR APPROACH (3 cards horizontal timeline)
══════════════════════════════════════════ */
const APPROACH = [
  {
    step: "01",
    icon: Search,
    title: "Real-Time Discovery",
    sub: "Creators sourced from trends, not lists",
    desc: "Every campaign starts fresh. We analyse current trends, platform signals, and your audience to find creators who are relevant right now.",
    accent: "#d4006e",
  },
  {
    step: "02",
    icon: Layers,
    title: "Structured Execution",
    sub: "Brief → Create → Review → Publish",
    desc: "A clean, repeatable workflow ensures nothing slips through the cracks — from content briefing to quality review to going live.",
    accent: "#7c3aed",
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Scalable Growth",
    sub: "Repeatable systems for better results",
    desc: "Every campaign makes the next one smarter. Our systems are built to scale — more creators, more markets, better performance.",
    accent: "#059669",
  },
];

function OurApproach() {
  return (
    <section className="bg-[#f7f6f3] py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div {...fade(0)} className="flex justify-center">
            <PillBadge>Our Approach</PillBadge>
          </motion.div>
          <motion.div {...fade(0.1)}>
            <SectionHeading>
              How we make it <span className="text-[#d4006e]">happen.</span>
            </SectionHeading>
          </motion.div>
        </div>

        {/* Timeline connector */}
        <div className="relative">
          {/* horizontal line — desktop only */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8">
            {APPROACH.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  {...fade(i * 0.12)}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step bubble */}
                  <div
                    className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6 border-4 border-[#f7f6f3] shadow-md"
                    style={{
                      background: `linear-gradient(135deg,${item.accent},${item.accent}bb)`,
                    }}
                  >
                    <Icon size={28} className="text-white" strokeWidth={1.6} />
                    <span
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border border-gray-100 text-[10px] font-black flex items-center justify-center"
                      style={{
                        color: item.accent,
                        fontFamily: "system-ui,sans-serif",
                      }}
                    >
                      {item.step}
                    </span>
                  </div>

                  <div className="bg-white rounded-2xl border border-gray-100 p-6 w-full shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3
                      className="text-xl font-black text-gray-900 mb-1"
                      style={{ fontFamily: "'Georgia',serif" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-xs font-bold mb-3 italic"
                      style={{
                        color: item.accent,
                        fontFamily: "system-ui,sans-serif",
                      }}
                    >
                      {item.sub}
                    </p>
                    <p
                      className="text-sm text-gray-500 leading-relaxed"
                      style={{ fontFamily: "system-ui,sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   7. SERVICES (8 cards)
══════════════════════════════════════════ */
const SERVICES = [
  { icon: Zap, title: "Influencer Campaign Execution", accent: "#d4006e" },
  { icon: Video, title: "UGC & Short-Form Content", accent: "#7c3aed" },
  { icon: Megaphone, title: "Product Launch Campaigns", accent: "#0891b2" },
  { icon: Users, title: "Creator Management", accent: "#059669" },
  { icon: FileText, title: "Content Direction", accent: "#d97706" },
  { icon: TrendingUp, title: "Paid Amplification", accent: "#db2777" },
  { icon: Globe, title: "Regional Campaigns", accent: "#0891b2" },
  { icon: BarChart3, title: "Performance Optimization", accent: "#7c3aed" },
];

function Services() {
  return (
    <section className="bg-white py-20 md:py-28 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.div {...fade(0)} className="flex justify-center">
            <PillBadge>Services</PillBadge>
          </motion.div>
          <motion.div {...fade(0.1)}>
            <SectionHeading>
              What we offer —{" "}
              <span className="text-[#d4006e]">end to end.</span>
            </SectionHeading>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                {...fade(i * 0.06)}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative bg-[#f7f6f3] rounded-2xl border border-gray-100 p-5 flex flex-col items-start gap-3 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-default"
              >
                <div
                  className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: s.accent }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${s.accent}12`,
                    border: `1.5px solid ${s.accent}22`,
                  }}
                >
                  <Icon
                    size={18}
                    style={{ color: s.accent }}
                    strokeWidth={1.8}
                  />
                </div>
                <p
                  className="text-sm font-bold text-gray-800 leading-tight"
                  style={{ fontFamily: "'Georgia',serif" }}
                >
                  {s.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   8. CREDIBILITY
══════════════════════════════════════════ */
const CRED_ITEMS = [
  { icon: Shield, label: "Hands-on campaign management" },
  { icon: Clock, label: "End-to-end execution workflows" },
  { icon: Star, label: "Performance-focused collaborations" },
];

function Credibility() {
  return (
    <section className="bg-gray-900 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#d4006e]/12 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-violet-500/8 blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.08) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <motion.div {...fade(0)}>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4006e]/30 bg-[#d4006e]/10 text-[#ff6eb4] text-xs font-bold tracking-widest uppercase mb-6"
                style={{ fontFamily: "system-ui,sans-serif" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4006e] animate-pulse" />
                Credibility
              </div>
            </motion.div>
            <motion.h2
              {...fade(0.1)}
              className="text-4xl md:text-5xl font-black text-white leading-[1.08] mb-5"
              style={{ fontFamily: "'Georgia',serif" }}
            >
              Built by Operators,
              <br />
              <span className="text-[#d4006e]">Not Just Coordinators.</span>
            </motion.h2>
            <motion.p
              {...fade(0.2)}
              className="text-gray-400 text-lg leading-relaxed mb-8"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              FirstSkout is built by a team with hands-on experience in
              influencer campaign execution. New brand. Proven mindset. The
              foundation is built on real campaigns, real creators, and real
              results.
            </motion.p>
            <motion.a
              {...fade(0.3)}
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#d4006e] text-white font-bold text-sm hover:bg-[#b0005a] transition-colors duration-200"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              Work With Us <ArrowRight size={15} />
            </motion.a>
          </div>

          <div className="space-y-4">
            {CRED_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 bg-white/5 border border-white/8 rounded-2xl p-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#d4006e]/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#d4006e]" />
                  </div>
                  <p
                    className="text-white font-semibold"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="bg-[#d4006e]/10 border border-[#d4006e]/20 rounded-2xl p-5 flex items-center gap-3"
            >
              <Sparkles size={18} className="text-[#d4006e] flex-shrink-0" />
              <p
                className="text-[#ff6eb4] font-bold text-sm italic"
                style={{ fontFamily: "system-ui,sans-serif" }}
              >
                "New identity. Proven execution mindset."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   9. FAQ
══════════════════════════════════════════ */
const FAQS = [
  {
    q: "How is FirstSkout different from other agencies?",
    a: "We don't rely on pre-built creator databases. Every campaign starts with real-time scouting based on current trends and your specific audience. We also own the full execution pipeline — from strategy to creator payments — instead of acting as a middleman.",
  },
  {
    q: "Do you use an influencer database?",
    a: "No. We discover creators dynamically for each campaign. This means the creators we work with are actually relevant to your brand right now — not just whoever was popular when a database was last updated.",
  },
  {
    q: "Do you handle full campaigns end-to-end?",
    a: "Yes, completely. Strategy, creator scouting, outreach, negotiation, content briefing, execution monitoring, and final payments — it's all managed by our team.",
  },
  {
    q: "How do you ensure content quality?",
    a: "Every creator gets a structured brief with clear deliverables, tone guidelines, and brand context. We run a multi-step review process before anything goes live, so you're never surprised by off-brand content.",
  },
  {
    q: "Can you scale campaigns across multiple creators?",
    a: "Absolutely. Our workflow is built for multi-creator execution. Whether it's 5 creators or 50, the same structured process applies — ensuring consistency and quality at scale.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#f7f6f3] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.div {...fade(0)} className="flex justify-center">
            <PillBadge>FAQ</PillBadge>
          </motion.div>
          <motion.div {...fade(0.1)}>
            <SectionHeading>
              Questions? <span className="text-[#d4006e]">Answered.</span>
            </SectionHeading>
          </motion.div>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              {...fade(i * 0.07)}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                style={{ fontFamily: "system-ui,sans-serif" }}
              >
                <span className="font-bold text-gray-900 text-sm md:text-base">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${open === i ? "bg-[#d4006e] text-white" : "bg-gray-100 text-gray-500"}`}
                >
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div
                      className="px-6 pb-6 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4"
                      style={{ fontFamily: "system-ui,sans-serif" }}
                    >
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   10. CTA
══════════════════════════════════════════ */
function CTA() {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div {...fade(0)} className="flex justify-center">
          <PillBadge>Get Started</PillBadge>
        </motion.div>

        <motion.h2
          {...fade(0.1)}
          className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.05] mb-6"
          style={{ fontFamily: "'Georgia',serif" }}
        >
          Start building{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#d4006e]">
              real influence.
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute bottom-1 left-0 right-0 h-3 bg-[#d4006e]/12 rounded origin-left"
            />
          </span>
        </motion.h2>

        <motion.div
          {...fade(0.2)}
          className="flex flex-wrap justify-center gap-6 mb-10"
          style={{ fontFamily: "system-ui,sans-serif" }}
        >
          {["Better creators", "Better content", "Better results"].map(
            (item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-gray-500 text-base"
              >
                <Check size={15} className="text-[#d4006e]" />
                {item}
              </span>
            ),
          )}
        </motion.div>

        <motion.p
          {...fade(0.25)}
          className="text-gray-400 text-lg mb-10 max-w-xl mx-auto"
          style={{ fontFamily: "system-ui,sans-serif" }}
        >
          If you're looking for a partner who takes full ownership of your
          campaign and delivers, FirstSkout is built for you.
        </motion.p>

        <motion.div
          {...fade(0.3)}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#d4006e] text-white font-bold text-base hover:bg-[#b0005a] transition-all duration-200 shadow-lg shadow-[#d4006e]/25 hover:shadow-[#d4006e]/40"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            Start Your Campaign <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   PAGE ROOT
══════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f3]">
      <Hero />
      <ShortAbout />
      <CorePillars />
      <AboutStory />
      <WhatWeDo />
      <OurApproach />
      <Services />
      <Credibility />
      <FAQ />
      <CTA />
    </main>
  );
}
