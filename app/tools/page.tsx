"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, cubicBezier } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  FileText,
  Search,
  BarChart2,
  Link,
  Zap,
  PenTool,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const LIVE_TOOLS = [
  {
    label: "Invoice Maker",
    tag: "Finance",
    description:
      "Generate clean, professional invoices for your creator campaigns in seconds. Free, no sign-up required.",
    img: "/tool/invoice-maker.png",
    href: "https://invoice-05.netlify.app/",
    badge: "Live",
    icon: FileText,
  },
];

const COMING_TOOLS = [
  { icon: Search, label: "Influencer Finder", tag: "Discovery" },
  { icon: BarChart2, label: "Campaign Tracker", tag: "Analytics" },
  { icon: Link, label: "Link in Bio Builder", tag: "Utility" },
  { icon: Zap, label: "Brief Generator", tag: "Content" },
  { icon: PenTool, label: "Rate Card Maker", tag: "Finance" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Variants
// ─────────────────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};
const stagger = (d = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: d } },
});

// ─────────────────────────────────────────────────────────────────────────────
// Live tool card
// ─────────────────────────────────────────────────────────────────────────────
function LiveToolCard({
  label,
  tag,
  description,
  img,
  href,
  badge,
  icon: Icon,
}: (typeof LIVE_TOOLS)[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={seen ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: cubicBezier(0.22, 1, 0.36, 1) }}
      className="group relative border border-[#D3D1C7] rounded-sm bg-white/50
                 hover:border-[#2C2C2A] hover:shadow-lg transition-all duration-500 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* ── Image pane ── */}
        <div className="relative overflow-hidden bg-[#E8E6E0] aspect-[4/3] md:aspect-auto min-h-[260px]">
          <Image
            src={img}
            alt={label}
            fill
            className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
          />
          {/* subtle dark overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
        </div>

        {/* ── Info pane ── */}
        <div className="flex flex-col justify-between p-8 md:p-10">
          <div>
            {/* Top row: icon box + badges */}
            <div className="flex items-start justify-between mb-7">
              <div
                className="w-11 h-11 border border-[#E8E6E0] rounded-sm bg-[#F1F0EC]
                              flex items-center justify-center group-hover:border-[#D3D1C7] transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-[#888780]" strokeWidth={1.5} />
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em]
                                 font-medium text-[#3B6D11] border border-[#3B6D11]/30
                                 bg-[#3B6D11]/10 rounded-sm px-2.5 py-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B6D11] animate-pulse" />
                  {badge}
                </span>
                <span
                  className="text-[10px] uppercase tracking-[0.18em] text-[#B4B2A9]
                                 border border-[#E8E6E0] rounded-sm px-2.5 py-1"
                >
                  {tag}
                </span>
              </div>
            </div>

            {/* Label */}
            <h3
              className="text-[28px] font-black leading-tight text-[#1a1a18] mb-3 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {label}
            </h3>

            {/* Divider */}
            <div className="h-px bg-[#E8E6E0] w-full mb-5" />

            {/* Description */}
            <p className="text-[14px] text-[#5F5E5A] leading-[1.85]">
              {description}
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["Free to use", "No sign-up", "Instant PDF", "Professional"].map(
                (f) => (
                  <span
                    key={f}
                    className="text-[11px] border border-[#E8E6E0] rounded-full
                                          px-3 py-1 text-[#888780]"
                  >
                    {f}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* CTA */}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-[#2C2C2A] text-[#F1F0EC]
                       rounded-sm px-6 py-3 text-[13px] font-medium self-start
                       hover:bg-[#444441] transition-all duration-300 group/btn"
          >
            Open Tool
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Ghost coming-soon card
// ─────────────────────────────────────────────────────────────────────────────
function GhostCard({
  icon: Icon,
  label,
  tag,
  index,
}: {
  icon: React.ElementType;
  label: string;
  tag: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={seen ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      }}
      className="group relative border border-[#D3D1C7] rounded-sm bg-white/40
                 hover:bg-white/70 hover:border-[#B4B2A9] transition-all duration-500
                 p-6 flex flex-col gap-5 overflow-hidden cursor-not-allowed"
    >
      <div
        className="absolute top-4 right-4 text-[9px] uppercase tracking-[0.18em]
                      text-[#B4B2A9] border border-[#E8E6E0] rounded-sm px-2 py-0.5"
      >
        Soon
      </div>

      <div
        className="w-10 h-10 rounded-sm border border-[#E8E6E0] bg-[#F1F0EC]
                      flex items-center justify-center group-hover:border-[#D3D1C7] transition-all duration-300"
      >
        <Icon className="w-4 h-4 text-[#888780]" strokeWidth={1.5} />
      </div>

      <div className="space-y-2 flex-1">
        {[100, 72, 55].map((w, i) => (
          <motion.div
            key={i}
            className="h-px bg-[#D3D1C7] rounded-full origin-left"
            style={{
              width: `${w}%`,
              background: i === 0 ? "#D3D1C7" : "#E8E6E0",
            }}
            initial={{ scaleX: 0 }}
            animate={seen ? { scaleX: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: index * 0.08 + 0.2 + i * 0.1,
              ease: cubicBezier(0.22, 1, 0.36, 1),
            }}
          />
        ))}
      </div>

      <div className="flex items-end justify-between">
        <span className="text-[13px] font-medium text-[#444441]">{label}</span>
        <span
          className="text-[10px] uppercase tracking-[0.14em] text-[#B4B2A9]
                         border border-[#E8E6E0] rounded-sm px-2 py-0.5"
        >
          {tag}
        </span>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Animated counter
// ─────────────────────────────────────────────────────────────────────────────
function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true });
  useEffect(() => {
    if (!seen || !ref.current) return;
    let n = 0;
    const step = () => {
      n = Math.min(n + 2, to);
      if (ref.current) ref.current.textContent = n + "%";
      if (n < to) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [seen, to]);
  return <span ref={ref}>0%</span>;
}

// ─────────────────────────────────────────────────────────────────────────────
// Marquee
// ─────────────────────────────────────────────────────────────────────────────
function Marquee({
  items,
  duration = 26,
}: {
  items: string[];
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() =>
      gsap.to(ref.current, {
        xPercent: -50,
        ease: "none",
        duration,
        repeat: -1,
      }),
    );
    return () => ctx.revert();
  }, [duration]);
  return (
    <div className="border-t border-b border-[#D3D1C7] py-3 overflow-hidden">
      <div ref={ref} className="flex whitespace-nowrap w-max">
        {[0, 1].map((ri) => (
          <div key={ri} className="flex items-center">
            {items.map((t) => (
              <span
                key={t}
                className="flex items-center gap-4 px-8 text-[11px] uppercase
                                       tracking-[0.2em] text-[#B4B2A9] font-medium"
              >
                {t}
                <span className="w-1 h-1 rounded-full bg-[#D3D1C7] inline-block" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────
export default function ToolsPage() {
  const pageRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;
    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: lineRef.current, start: "top 88%" },
          },
        );
      }
      gsap.utils.toArray<HTMLElement>(".tool-dot").forEach((dot, i) => {
        gsap.to(dot, {
          y: i % 2 === 0 ? -12 : 12,
          x: i % 3 === 0 ? 8 : -8,
          duration: 2.6 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={pageRef}
      className="relative w-full bg-[#F1F0EC] overflow-hidden py-20 px-4 md:px-8 mt-2"
    >
      {/* Ambient dots */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="tool-dot absolute rounded-full pointer-events-none"
          style={{
            width: `${5 + (i % 3) * 4}px`,
            height: `${5 + (i % 3) * 4}px`,
            background: i % 2 === 0 ? "#D3D1C7" : "#B4B2A9",
            top: `${10 + ((i * 77) % 80)}%`,
            left: `${4 + ((i * 89) % 92)}%`,
            opacity: 0.5,
          }}
        />
      ))}

      {/* BG wordmark */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute bottom-0 left-1/2
                                   -translate-x-1/2 font-black text-[clamp(90px,18vw,180px)]
                                   text-black/[0.04] whitespace-nowrap leading-none tracking-[-3px]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        FirstSkout
      </div>

      {/* ── Hero ── */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger(0.1)}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center mb-16"
      >
        <motion.div variants={fadeUp} className="mb-6">
          <span
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em]
                           text-[#888780] font-medium border border-[#D3D1C7] rounded-sm px-3 py-1.5"
          >
            <span className="w-1 h-1 rounded-full bg-[#888780] inline-block" />
            Creator Tools
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="text-[clamp(40px,6.5vw,76px)] font-black leading-[1.06] tracking-tight text-[#1a1a18] mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Built for creators,
          <br />
          <em className="not-italic text-[#5F5E5A]">free to use.</em>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="w-full flex items-center gap-4 mb-8"
        >
          <div className="flex-1 h-px bg-[#2C2C2A]" />
          <div className="w-1 h-1 rounded-full bg-[#2C2C2A]" />
          <div className="flex-1 h-px bg-[#D3D1C7]" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-[#5F5E5A] text-base leading-relaxed max-w-lg"
        >
          A growing toolkit designed specifically for creators and brands — from
          invoice generators to influencer finders. Everything in one place, no
          sign-up required.
        </motion.p>
      </motion.div>

      <Marquee
        items={[
          "Invoice Maker",
          "Influencer Finder",
          "Campaign Tracker",
          "Rate Card Maker",
          "Link in Bio",
          "Brief Generator",
          "Free Tools",
          "Creator-First",
        ]}
      />

      {/* ── LIVE tools ── */}
      <div className="relative z-10 max-w-5xl mx-auto mt-16 mb-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger()}
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 mb-8"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#888780] font-medium mb-1">
                Available now
              </p>
              <div
                ref={lineRef}
                className="draw-line h-px bg-[#2C2C2A] origin-left w-10"
              />
            </div>
            <span className="flex items-center gap-1.5 text-[11px] text-[#3B6D11] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B6D11] animate-pulse" />
              {LIVE_TOOLS.length} tool live
            </span>
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-5">
          {LIVE_TOOLS.map((tool) => (
            <LiveToolCard key={tool.label} {...tool} />
          ))}
        </div>
      </div>

      {/* ── COMING SOON tools ── */}
      <div className="relative z-10 max-w-5xl mx-auto mt-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger()}
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 mb-8"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#888780] font-medium mb-1">
                Coming soon
              </p>
              <div className="h-px bg-[#D3D1C7] w-10" />
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-14">
          {COMING_TOOLS.map((t, i) => (
            <GhostCard key={t.label} {...t} index={i} />
          ))}
        </div>
      </div>

      {/* ── Progress ── */}
      <div className="relative z-10 max-w-sm mx-auto mb-14 px-4">
        <div className="flex justify-between text-[11px] text-[#888780] mb-2">
          <span>Tools in development</span>
          <Counter to={45} />
        </div>
        <div className="w-full h-px bg-[#D3D1C7]">
          <motion.div
            className="h-px bg-[#2C2C2A]"
            initial={{ width: 0 }}
            whileInView={{ width: "45%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1.8,
              ease: cubicBezier(0.22, 1, 0.36, 1),
              delay: 0.4,
            }}
          />
        </div>
      </div>

      {/* ── Pills ── */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger(0.07)}
        className="relative z-10 flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto mb-16"
      >
        {[
          "Free to use",
          "No sign-up required",
          "Creator-first",
          "More tools dropping soon",
        ].map((p) => (
          <motion.div
            key={p}
            variants={fadeUp}
            className="flex items-center gap-2 border border-[#D3D1C7] rounded-full px-4 py-2
                       text-[13px] text-[#5F5E5A] hover:border-[#B4B2A9] hover:text-[#2C2C2A]
                       bg-white/30 transition-all duration-300"
          >
            <span className="w-1 h-1 rounded-full bg-[#B4B2A9]" />
            {p}
          </motion.div>
        ))}
      </motion.div>

      <Marquee
        items={[
          "Invoice Maker",
          "Influencer Finder",
          "Campaign Tracker",
          "Rate Card Maker",
          "Link in Bio",
          "Brief Generator",
          "Analytics",
          "Free Tools",
        ]}
        duration={20}
      />

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#B4B2A9]" />
    </section>
  );
}
