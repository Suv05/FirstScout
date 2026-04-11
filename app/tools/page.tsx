"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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

// ── Hint tool cards ───────────────────────────────────────────────────────────
const HINT_TOOLS = [
  { icon: FileText, label: "Invoice Maker", tag: "Finance" },
  { icon: Search, label: "Influencer Finder", tag: "Discovery" },
  { icon: BarChart2, label: "Campaign Tracker", tag: "Analytics" },
  { icon: Link, label: "Link in Bio Builder", tag: "Utility" },
  { icon: Zap, label: "Brief Generator", tag: "Content" },
  { icon: PenTool, label: "Rate Card Maker", tag: "Finance" },
];

// ── Notify form ───────────────────────────────────────────────────────────────
// function NotifyForm() {
//   const [email, setEmail] = useState("");
//   const [submitted, setDone] = useState(false);
//   const [invalid, setInvalid] = useState(false);

//   function handle() {
//     if (!email || !email.includes("@")) {
//       setInvalid(true);
//       setTimeout(() => setInvalid(false), 1500);
//       return;
//     }
//     setDone(true);
//   }

//   return (
//     <div className="flex w-full max-w-sm">
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         onKeyDown={(e) => e.key === "Enter" && handle()}
//         disabled={submitted}
//         placeholder="your@email.com"
//         className={[
//           "flex-1 border-y border-l rounded-l-sm px-4 py-2.5 text-sm bg-transparent",
//           "text-[#2C2C2A] placeholder:text-[#B4B2A9] focus:outline-none transition-colors duration-200",
//           invalid
//             ? "border-red-400"
//             : "border-[#B4B2A9] focus:border-[#2C2C2A]",
//         ].join(" ")}
//       />
//       <button
//         onClick={handle}
//         disabled={submitted}
//         className={[
//           "flex items-center gap-1.5 border rounded-r-sm px-4 py-2.5 text-sm font-medium transition-all duration-300 whitespace-nowrap",
//           submitted
//             ? "bg-[#3B6D11] border-[#3B6D11] text-white"
//             : "bg-[#2C2C2A] border-[#2C2C2A] text-[#F1F0EC] hover:bg-[#444441]",
//         ].join(" ")}
//       >
//         {submitted ? (
//           "You're on the list!"
//         ) : (
//           <>
//             Notify me <ArrowUpRight className="w-3.5 h-3.5" />
//           </>
//         )}
//       </button>
//     </div>
//   );
// }

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
      {/* Coming soon badge */}
      <div
        className="absolute top-4 right-4 text-[9px] uppercase tracking-[0.18em]
                      text-[#B4B2A9] border border-[#E8E6E0] rounded-sm px-2 py-0.5"
      >
        Soon
      </div>

      {/* Icon box */}
      <div
        className="w-10 h-10 rounded-sm border border-[#E8E6E0] bg-[#F1F0EC]
                      flex items-center justify-center group-hover:border-[#D3D1C7]
                      transition-all duration-300"
      >
        <Icon className="w-4.5 h-4.5 text-[#888780]" strokeWidth={1.5} />
      </div>

      {/* Skeleton lines */}
      <div className="space-y-2 flex-1">
        <motion.div
          className="h-px bg-[#D3D1C7] rounded-full origin-left"
          initial={{ scaleX: 0 }}
          animate={seen ? { scaleX: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: index * 0.08 + 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
        <motion.div
          className="h-px bg-[#E8E6E0] rounded-full origin-left"
          style={{ width: "72%" }}
          initial={{ scaleX: 0 }}
          animate={seen ? { scaleX: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: index * 0.08 + 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
        <motion.div
          className="h-px bg-[#E8E6E0] rounded-full origin-left"
          style={{ width: "55%" }}
          initial={{ scaleX: 0 }}
          animate={seen ? { scaleX: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: index * 0.08 + 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>

      {/* Label + tag */}
      <div className="flex items-end justify-between">
        <span className="text-[13px] font-medium text-[#444441]">{label}</span>
        <span
          className="text-[10px] uppercase tracking-[0.14em] text-[#B4B2A9] border
                         border-[#E8E6E0] rounded-sm px-2 py-0.5"
        >
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

// ── Main component ────────────────────────────────────────────────────────────
export default function Page() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Marquee
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          ease: "none",
          duration: 26,
          repeat: -1,
        });
      }
      // Line draw
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
      // Floating dots
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

  const stagger = { hidden: {}, show: {} };
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F1F0EC] overflow-hidden py-20 px-4 md:px-8 mt-2"
    >
      {/* ── Ambient dots ── */}
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

      {/* ── BG wordmark ── */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute bottom-0 left-1/2
                                   -translate-x-1/2 font-black text-[clamp(90px,18vw,180px)]
                                   text-black/[0.04] whitespace-nowrap leading-none tracking-[-3px] font-heading"
      >
        FirstSkout
      </div>

      {/* ── Content ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true, margin: "-60px" }}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <span
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em]
                           text-[#888780] font-medium border border-[#D3D1C7] rounded-sm px-3 py-1.5 font-body"
          >
            <span className="w-1 h-1 rounded-full bg-[#888780] inline-block" />
            Tools · Coming soon
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(40px,6.5vw,76px)] font-black leading-[1.06] tracking-tight
                     text-[#1a1a18] mb-6 font-heading"
        >
          Built for creators,
          <br />
          <em className="not-italic text-[#5F5E5A]">shipping soon.</em>
        </motion.h2>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex items-center gap-4 mb-8"
        >
          <div ref={lineRef} className="flex-1 h-px bg-[#2C2C2A] origin-left" />
          <div className="w-1 h-1 rounded-full bg-[#2C2C2A]" />
          <div className="flex-1 h-px bg-[#D3D1C7]" />
        </motion.div>

        {/* Sub copy */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#5F5E5A] text-base leading-relaxed max-w-lg mb-10 font-body"
        >
          We're building a free toolkit designed specifically for creators and
          brands — from invoice generators to influencer finders. Everything in
          one place.
        </motion.p>

        {/* Notify */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          {/* <NotifyForm /> */}
        </motion.div>
      </motion.div>

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
        {[
          "Free to use",
          "No sign-up required",
          "Creator-first",
          "More tools dropping soon",
        ].map((p) => (
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
              {[
                "Invoice Maker",
                "Influencer Finder",
                "Campaign Tracker",
                "Rate Card Maker",
                "Link in Bio",
                "Brief Generator",
                "Analytics",
                "Free Tools",
              ].map((t) => (
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

      {/* ── Bottom border ── */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#B4B2A9]" />
    </section>
  );
}