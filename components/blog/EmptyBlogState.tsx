"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Pen, Sparkles, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const hints = [
  { icon: Pen, label: "Deep-dive articles" },
  { icon: Sparkles, label: "Creator strategies" },
  { icon: Clock, label: "Coming very soon" },
];

export default function EmptyBlogState() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animated dashed line drawing
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          },
        );
      }

      // Floating dots in background
      const dots = gsap.utils.toArray<HTMLElement>(".float-dot");
      if (dots.length > 0) {
        dots.forEach((dot, i) => {
          gsap.to(dot, {
            y: i % 2 === 0 ? -18 : 18,
            x: i % 3 === 0 ? 10 : -10,
            duration: 2.5 + i * 0.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.3,
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-32 px-4 overflow-hidden"
    >
      {/* ── Floating background dots ── */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="float-dot absolute rounded-full opacity-30 pointer-events-none"
          style={{
            width: `${8 + (i % 4) * 6}px`,
            height: `${8 + (i % 4) * 6}px`,
            background: i % 2 === 0 ? "#be185d" : "#7c3aed",
            top: `${10 + ((i * 83) % 80)}%`,
            left: `${5 + ((i * 97) % 90)}%`,
            filter: "blur(2px)",
          }}
        />
      ))}

      {/* ── Soft glow ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[500px] w-[500px] rounded-full bg-pink-200/60 blur-[120px]" />
      </div>

      {/* ── Content ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center gap-8"
      >
        {/* Icon cluster */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center w-24 h-24"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-600/30 to-purple-700/30 blur-md" />
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full border border-pink-200 bg-pink-50">
            <Sparkles className="w-8 h-8 text-pink-500" />
          </div>
          {/* Orbiting dot */}
          <motion.div
            className="absolute w-3 h-3 rounded-full bg-pink-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{
              top: 0,
              left: "50%",
              transformOrigin: "0 48px",
              marginLeft: "-6px",
            }}
          />
        </motion.div>

        {/* Label */}
        <motion.span
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs uppercase tracking-[0.25em] text-pink-500 font-semibold"
        >
          Blog · Coming Soon
        </motion.span>

        {/* Main message */}
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 font-sans leading-[1.15] tracking-tight"
        >
          We&apos;re crafting{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            something valuable.
          </span>
        </motion.h2>

        {/* Divider line */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex items-center gap-4"
        >
          <div className="flex-1 h-px bg-gray-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
          <div className="flex-1 h-px bg-gray-200" />
        </motion.div>

        {/* Sub message */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-gray-500 text-lg leading-relaxed max-w-md"
        >
          Our first articles are in the works — real insights on creator-led
          growth, brand building, and what actually moves the needle.
        </motion.p>

        {/* Hint pills */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-3"
        >
          {hints.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm text-gray-600"
            >
              <Icon className="w-3.5 h-3.5 text-pink-500" />
              {label}
            </div>
          ))}
        </motion.div>

        {/* Animated progress bar */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-xs flex flex-col gap-2"
        >
          <div className="flex justify-between text-xs text-gray-400">
            <span>Articles in progress</span>
            <span className="text-pink-500">Almost there</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
              initial={{ width: 0 }}
              whileInView={{ width: "72%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.5,
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
