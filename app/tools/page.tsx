"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FileText,
  Search,
  BarChart2,
  Link as Link2,
  Zap,
  PenTool,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const HINT_TOOLS = [
  { icon: Search,    label: "Content Calendar", tag: "Planning" },
  { icon: BarChart2, label: "Campaign Tracker",  tag: "Analytics" },
  { icon: Link2,      label: "Link in Bio Builder",tag: "Utility"  },
  { icon: Zap,       label: "Brief Generator",   tag: "Content"  },
  { icon: PenTool,   label: "Rate Card Maker",   tag: "Finance"  },
];

// ── Live tool card (Invoice Maker) ────────────────────────────────────────────
function LiveToolCard() {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={seen ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative col-span-2 md:col-span-3 mb-2"
    >
      {/* Glow ring */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.4 }}
        className="absolute -inset-px rounded-sm pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(135deg, #4a7c2f 0%, #8ab860 40%, #D3D1C7 100%)",
          filter: "blur(0px)",
        }}
      />

      <Link
        href="https://invoice-05.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 flex flex-col md:flex-row overflow-hidden rounded-sm
                   bg-[#FAFAF7] border border-transparent"
        style={{ borderRadius: "2px" }}
      >
        {/* ── Left: content panel ── */}
        <div className="flex flex-col justify-between p-7 md:p-10 md:w-[42%] shrink-0">
          {/* Header row */}
          <div>
            <div className="flex items-center justify-between mb-6">
              {/* Live badge */}
              <div className="flex items-center gap-2 bg-[#1a2e0f] text-[#8ab860] text-[10px]
                              uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full
                                   rounded-full bg-[#8ab860] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#6db33f]" />
                </span>
                Live · Free
              </div>

              {/* Arrow */}
              <motion.div
                animate={{ x: hovered ? 3 : 0, y: hovered ? -3 : 0 }}
                transition={{ duration: 0.25 }}
                className="w-8 h-8 rounded-sm border border-[#D3D1C7] bg-white/60
                           flex items-center justify-center"
              >
                <ArrowUpRight className="w-4 h-4 text-[#444441]" strokeWidth={1.5} />
              </motion.div>
            </div>

            {/* Icon */}
            <div className="w-10 h-10 rounded-sm bg-[#5a9600] flex items-center
                            justify-center mb-5 shadow-md">
              <svg viewBox="0 0 16 16" fill="none"><path d="M2 13L6 3l4 7 2-3.5L14 13" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>

            {/* Title */}
            <h3 className="text-[28px] md:text-[34px] font-black leading-tight tracking-tight
                           text-[#1a1a18] mb-2 font-heading">
              Invoice Maker
            </h3>
            <p className="text-[#5F5E5A] text-[14px] leading-relaxed mb-6 font-body max-w-xs">
              Generate professional invoices In Seconds — no
              sign-up, no watermarks, PDF download in seconds.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["INR · EUR · USD · CAD", "GST · VAT · EIN", "PDF Export", "No Login"].map((f) => (
                <span
                  key={f}
                  className="text-[11px] tracking-wide text-[#5F5E5A] border border-[#D3D1C7]
                             rounded-full px-3 py-1 bg-white/50 font-body"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            animate={{ gap: hovered ? "12px" : "8px" }}
            className="flex items-center gap-2"
          >
            <span
              className="text-[13px] font-semibold tracking-wide text-[#1a2e0f]
                         border-b border-[#4a7c2f] pb-px font-body"
            >
              Open tool
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#4a7c2f]" strokeWidth={2} />
          </motion.div>
        </div>

        {/* ── Right: screenshot panel ── */}
        <div className="relative flex-1 min-h-[240px] md:min-h-[360px] bg-[#eeecea]
                        overflow-hidden border-t md:border-t-0 md:border-l border-[#D3D1C7]">
          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-10 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(#D3D1C7 1px, transparent 1px), linear-gradient(90deg, #D3D1C7 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Subtle vignette */}
          <div className="absolute inset-0 z-20 pointer-events-none"
               style={{
                 background:
                   "radial-gradient(ellipse at 60% 50%, transparent 40%, rgba(238,236,234,0.7) 100%)",
               }}
          />

          {/* Screenshot */}
          <motion.div
            animate={{ scale: hovered ? 1.02 : 1, y: hovered ? -4 : 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-10 flex items-center justify-center p-4"
          >
            <div
              className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl
                         border border-[#C8C6BC]"
              style={{ maxWidth: "680px", margin: "0 auto" }}
            >
              <Image
                src="/tool-img/invoice-maker-img.png"
                alt="Invoice Maker by FirstSkout"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 55vw"
                priority
              />
            </div>
          </motion.div>

          {/* Finance tag */}
          <div
            className="absolute bottom-4 right-4 z-30 text-[10px] uppercase tracking-[0.18em]
                          text-[#888780] border border-[#D3D1C7] rounded-sm px-2 py-0.5 bg-[#FAFAF7]/80"
          >
            Finance
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── Ghost tool card ───────────────────────────────────────────────────────────
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
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative border border-[#D3D1C7] rounded-sm bg-white/40 hover:bg-white/80
                 hover:border-[#B4B2A9] hover:shadow-sm transition-all duration-500 p-6
                 flex flex-col gap-5 overflow-hidden cursor-not-allowed"
    >
      <div className="absolute top-4 right-4 text-[9px] uppercase tracking-[0.18em]
                      text-[#B4B2A9] border border-[#E8E6E0] rounded-sm px-2 py-0.5">
        Soon
      </div>

      <div className="w-10 h-10 rounded-sm border border-[#E8E6E0] bg-[#F1F0EC]
                      flex items-center justify-center group-hover:border-[#D3D1C7]
                      transition-all duration-300">
        <Icon className="w-4.5 h-4.5 text-[#888780]" strokeWidth={1.5} />
      </div>

      <div className="space-y-2 flex-1">
        {[1, 0.72, 0.55].map((w, si) => (
          <motion.div
            key={si}
            className="h-px bg-[#D3D1C7] rounded-full origin-left"
            style={{ width: si === 0 ? "100%" : `${w * 100}%` }}
            initial={{ scaleX: 0 }}
            animate={seen ? { scaleX: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: index * 0.08 + 0.2 + si * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </div>

      <div className="flex items-end justify-between">
        <span className="text-[13px] font-medium text-[#444441]">{label}</span>
        <span className="text-[10px] uppercase tracking-[0.14em] text-[#B4B2A9] border
                         border-[#E8E6E0] rounded-sm px-2 py-0.5">
          {tag}
        </span>
      </div>
    </motion.div>
  );
}

// ── Animated counter ──────────────────────────────────────────────────────────
function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true });
  useEffect(() => {
    if (!seen || !ref.current) return;
    let start = 0;
    const step = () => {
      start = Math.min(start + 2, to);
      if (ref.current) ref.current.textContent = start + "%";
      if (start < to) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [seen, to]);
  return <span ref={ref}>0%</span>;
}

// ── Section separator with label ─────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 max-w-5xl mx-auto flex items-center gap-4 mb-4">
      <div className="flex-1 h-px bg-[#D3D1C7]" />
      <span className="text-[10px] uppercase tracking-[0.22em] text-[#888780] font-medium font-body whitespace-nowrap">
        {children}
      </span>
      <div className="flex-1 h-px bg-[#D3D1C7]" />
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Page() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const lineRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          ease: "none",
          duration: 26,
          repeat: -1,
        });
      }
      if (lineRef.current) {
        gsap.fromTo(lineRef.current, { scaleX: 0 }, {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: lineRef.current, start: "top 88%" },
        });
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
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F1F0EC] overflow-hidden py-20 px-4 md:px-8"
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
                   text-black/[0.04] whitespace-nowrap leading-none tracking-[-3px] font-heading"
      >
        FirstSkout
      </div>

      {/* ── Hero text ── */}
      <motion.div
        variants={{ hidden: {}, show: {} }}
        initial="hidden"
        whileInView="show"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true, margin: "-60px" }}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center mb-14"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em]
                           text-[#888780] font-medium border border-[#D3D1C7] rounded-sm px-3 py-1.5 font-body">
            <span className="w-1 h-1 rounded-full bg-[#888780] inline-block" />
            Tools · Free Toolkit
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(40px,6.5vw,76px)] font-black leading-[1.06] tracking-tight
                     text-[#1a1a18] mb-6 font-heading"
        >
          Built for creators,
          <br />
          <em className="not-italic text-[#5F5E5A]">shipping now.</em>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex items-center gap-4 mb-8"
        >
          <div ref={lineRef} className="flex-1 h-px bg-[#2C2C2A] origin-left" />
          <div className="w-1 h-1 rounded-full bg-[#2C2C2A]" />
          <div className="flex-1 h-px bg-[#D3D1C7]" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#5F5E5A] text-base leading-relaxed max-w-lg mb-4 font-body"
        >
          We're building a free toolkit designed specifically for creators and
          brands — from invoice generators to influencer finders. Everything in
          one place.
        </motion.p>
      </motion.div>

      {/* ── LIVE section label ── */}
      <SectionLabel>
        <span className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6db33f] opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#6db33f]" />
          </span>
          Available now
        </span>
      </SectionLabel>

      {/* ── LIVE tool grid ── */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
        <LiveToolCard />
      </div>

      {/* ── COMING SOON section label ── */}
      <SectionLabel>Coming soon</SectionLabel>

      {/* ── Ghost tool grid ── */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 mb-14">
        {HINT_TOOLS.map((t, i) => (
          <GhostCard key={t.label} {...t} index={i} />
        ))}
      </div>

      {/* ── Progress bar ── */}
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
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          />
        </div>
      </div>

      {/* ── Pills ── */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: {} }}
        transition={{ staggerChildren: 0.07 }}
        className="relative z-10 flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto mb-16"
      >
        {["Free to use", "No sign-up required", "Creator-first", "More tools dropping soon"].map((p) => (
          <motion.div
            key={p}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 border border-[#D3D1C7] rounded-full px-4 py-2
                       text-[13px] text-[#5F5E5A] hover:border-[#B4B2A9] hover:text-[#2C2C2A]
                       bg-white/30 transition-all duration-300 font-body"
          >
            <span className="w-1 h-1 rounded-full bg-[#B4B2A9]" />
            {p}
          </motion.div>
        ))}
      </motion.div>

      {/* ── Marquee ── */}
      <div className="relative z-10 border-t border-b border-[#D3D1C7] py-3 overflow-hidden">
        <div ref={marqueeRef} className="flex whitespace-nowrap w-max">
          {Array.from({ length: 2 }).map((_, ri) => (
            <div key={ri} className="flex items-center">
              {["Invoice Maker", "Influencer Finder", "Campaign Tracker", "Rate Card Maker",
                "Link in Bio", "Brief Generator", "Analytics", "Free Tools"].map((t) => (
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

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#B4B2A9]" />
    </section>
  );
}