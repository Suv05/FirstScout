"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ArrowUpRight, Pen, TrendingUp, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText);

// ── Data ────────────────────────────────────────────────────────────────────
const CARDS = [
  { tag: "Creator Growth", label: "In Progress", progress: 80 },
  { tag: "Brand Building", label: "In Progress", progress: 60 },
  { tag: "Strategy", label: "Drafting", progress: 30 },
];

const PILLS = [
  { icon: Pen, text: "Deep-dive articles" },
  { icon: TrendingUp, text: "Creator strategies" },
  { icon: Layers, text: "Design insights" },
];

// ── Stagger container ────────────────────────────────────────────────────────
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Animated counter ─────────────────────────────────────────────────────────
function Counter({ to, suffix = "%" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true });

  useEffect(() => {
    if (!seen || !ref.current) return;
    const ctrl = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return () => ctrl.stop();
  }, [seen, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

// ── Ghost card ───────────────────────────────────────────────────────────────
function GhostCard({
  tag,
  label,
  progress,
  index,
}: {
  tag: string;
  label: string;
  progress: number;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="flex-1 min-w-0 border border-[#D3D1C7] rounded-sm p-5 bg-white/40 backdrop-blur-sm
                 hover:bg-white/70 hover:border-[#B4B2A9] hover:shadow-sm
                 transition-all duration-500 group"
    >
      {/* Label */}
      <p className="text-[10px] uppercase tracking-[0.18em] text-[#B4B2A9] mb-4 font-medium">
        {label}
      </p>

      {/* Skeleton lines */}
      <div className="space-y-2 mb-5">
        {[100, 75, 90, 55].map((w, i) => (
          <motion.div
            key={i}
            className="h-px bg-[#D3D1C7] rounded-full origin-left"
            initial={{ scaleX: 0 }}
            animate={seen ? { scaleX: w / 100 } : {}}
            transition={{
              duration: 0.9,
              delay: index * 0.15 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ width: `${w}%` }}
          />
        ))}
      </div>

      {/* Tag badge */}
      <span
        className="inline-block text-[10px] border border-[#D3D1C7] rounded-sm px-2.5 py-1
                       text-[#B4B2A9] tracking-wide group-hover:border-[#B4B2A9] group-hover:text-[#888780]
                       transition-all duration-300"
      >
        {tag}
      </span>

      {/* Progress bar */}
      <div className="mt-5">
        <div className="flex justify-between text-[10px] text-[#B4B2A9] mb-1.5">
          <span>Progress</span>
          <Counter to={progress} />
        </div>
        <div className="w-full h-px bg-[#E8E6E0]">
          <motion.div
            className="h-px bg-[#2C2C2A]"
            initial={{ width: 0 }}
            animate={seen ? { width: `${progress}%` } : {}}
            transition={{
              duration: 1.4,
              delay: index * 0.2 + 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────
export default function EmptyBlogState() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState("");
  const [submitted, setSubmit] = useState(false);
  const [invalid, setInvalid] = useState(false);

  // ── GSAP: headline character split + marquee ──────────────────────────────
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Split headline into chars
      if (headlineRef.current) {
        const split = new SplitText(headlineRef.current, {
          type: "chars,words",
        });
        gsap.from(split.chars, {
          opacity: 0,
          y: 40,
          rotateX: -60,
          stagger: 0.025,
          duration: 0.9,
          ease: "power3.out",
          transformOrigin: "50% 50% -20px",
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 85%",
          },
        });
      }

      // Horizontal divider draw
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

      // Marquee infinite scroll
      if (marqueeRef.current) {
        const track = marqueeRef.current;
        gsap.to(track, {
          xPercent: -50,
          ease: "none",
          duration: 22,
          repeat: -1,
        });
      }

      // Floating noise dots
      gsap.utils.toArray<HTMLElement>(".fs-dot").forEach((dot, i) => {
        gsap.to(dot, {
          y: i % 2 === 0 ? -14 : 14,
          x: i % 3 === 0 ? 8 : -8,
          duration: 2.8 + i * 0.35,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.25,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── Email notify ──────────────────────────────────────────────────────────
  function handleNotify() {
    if (!email || !email.includes("@")) {
      setInvalid(true);
      setTimeout(() => setInvalid(false), 1500);
      return;
    }
    setSubmit(true);
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F1F0EC] overflow-hidden py-28 px-4 md:px-8"
    >
      {/* ── Ambient noise dots ── */}
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="fs-dot absolute rounded-full pointer-events-none"
          style={{
            width: `${5 + (i % 3) * 4}px`,
            height: `${5 + (i % 3) * 4}px`,
            background: i % 2 === 0 ? "#D3D1C7" : "#B4B2A9",
            top: `${8 + ((i * 79) % 84)}%`,
            left: `${4 + ((i * 91) % 92)}%`,
            opacity: 0.6,
          }}
        />
      ))}

      {/* ── Background wordmark ── */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute bottom-0 left-1/2 -translate-x-1/2
                   font-black text-[clamp(90px,18vw,180px)] text-black/[0.04]
                   whitespace-nowrap leading-none tracking-[-3px] font-heading"
      >
        FirstSkout
      </div>

      {/* ── Content ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeUp} className="mb-6">
          <span
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em]
                           text-[#888780] font-medium border border-[#D3D1C7] rounded-sm px-3 py-1.5 font-body"
          >
            <span className="w-1 h-1 rounded-full bg-[#888780] inline-block animate-pulse" />
            Blog · Coming soon
          </span>
        </motion.div>

        {/* Headline — GSAP splits this */}
        <h2
          ref={headlineRef}
          className="text-[clamp(42px,7vw,80px)] font-black leading-[1.06] tracking-tight
                     text-[#1a1a18] mb-6 perspective-[600px] font-heading"
        >
          Good writing{" "}
          <em className="not-italic text-[#5F5E5A]">takes time.</em>
        </h2>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          className="w-full flex items-center gap-4 mb-8"
        >
          <div ref={lineRef} className="flex-1 h-px bg-[#2C2C2A] origin-left" />
          <div className="w-1 h-1 rounded-full bg-[#2C2C2A]" />
          <div className="flex-1 h-px bg-[#D3D1C7]" />
        </motion.div>

        {/* Sub copy */}
        <motion.p
          variants={fadeUp}
          className="text-[#5F5E5A] text-base leading-relaxed max-w-md mb-12 font-body"
        >
          We're crafting our first articles — deep-dives on creator-led growth,
          product design, and the moves that actually matter. Worth the wait.
        </motion.p>

        {/* Ghost article cards */}
        <motion.div variants={stagger} className="flex gap-4 w-full mb-12">
          {CARDS.map((c, i) => (
            <GhostCard key={c.tag} {...c} index={i} />
          ))}
        </motion.div>

        {/* Overall progress */}
        <motion.div variants={fadeUp} className="w-full max-w-sm mb-12">
          <div className="flex justify-between text-[11px] text-[#888780] mb-2">
            <span>Overall progress</span>
            <Counter to={68} />
          </div>
          <div className="w-full h-px bg-[#D3D1C7]">
            <motion.div
              className="h-px bg-[#2C2C2A]"
              initial={{ width: 0 }}
              whileInView={{ width: "68%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4,
              }}
            />
          </div>
        </motion.div>

        {/* Notify input */}
        {/* <motion.div variants={fadeUp} className="flex w-full max-w-sm mb-10">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleNotify()}
            disabled={submitted}
            placeholder="your@email.com"
            className={[
              "flex-1 border-y border-l border-[#B4B2A9] rounded-l-sm px-4 py-2.5",
              "text-sm bg-transparent text-[#2C2C2A] placeholder:text-[#B4B2A9]",
              "focus:outline-none focus:border-[#2C2C2A] transition-colors duration-200",
              invalid ? "border-red-400" : "",
            ].join(" ")}
          />
          <button
            onClick={handleNotify}
            disabled={submitted}
            className={[
              "flex items-center gap-1.5 border border-[#2C2C2A] rounded-r-sm px-4 py-2.5",
              "text-sm font-medium transition-all duration-300",
              submitted
                ? "bg-[#3B6D11] border-[#3B6D11] text-white"
                : "bg-[#2C2C2A] text-[#F1F0EC] hover:bg-[#444441]",
            ].join(" ")}
          >
            {submitted ? "You're on the list!" : (<>Notify me <ArrowUpRight className="w-3.5 h-3.5" /></>)}
          </button>
        </motion.div> */}

        {/* Pill tags */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-2.5"
        >
          {PILLS.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 border border-[#D3D1C7] rounded-full
                         px-4 py-2 text-[13px] text-[#5F5E5A] hover:border-[#B4B2A9]
                         hover:text-[#2C2C2A] transition-all duration-300 bg-white/30 font-body"
            >
              <Icon className="w-3.5 h-3.5 text-[#888780]" />
              {text}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Section bottom border ── */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#B4B2A9]" />

      {/* ── Marquee ticker ── */}
      <div className="relative z-10 mt-20 border-t border-b border-[#D3D1C7] py-3 overflow-hidden">
        <div ref={marqueeRef} className="flex gap-0 whitespace-nowrap w-max">
          {Array.from({ length: 2 }).map((_, ri) => (
            <div key={ri} className="flex items-center">
              {[
                "Deep dives",
                "Creator stories",
                "Brand building",
                "Design thinking",
                "Growth strategy",
                "What moves the needle",
                "Coming soon",
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
    </section>
  );
}
