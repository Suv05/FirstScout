"use client";

import { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BlogUIHeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP: floating orb / shimmer on the radial gradient overlay
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".gsap-orb", {
        scale: 1.15,
        opacity: 0.85,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Subtle parallax on the grid on mouse move
      const el = containerRef.current;
      if (!el) return;
      const onMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 20;
        const y = (clientY / innerHeight - 0.5) * 20;
        gsap.to(".gsap-grid", {
          x,
          y,
          duration: 1.2,
          ease: "power2.out",
        });
      };
      el.addEventListener("mousemove", onMove);
      return () => el.removeEventListener("mousemove", onMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Framer Motion variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 36 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const words = "Built for the Age of Creators".split(" ");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* ── Background: radial gradient ── */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]" />

      {/* ── GSAP pulsing orb on top of gradient ── */}
      <div className="gsap-orb absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="h-[520px] w-[520px] rounded-full bg-purple-400/20 blur-[100px]" />
      </div>

      {/* ── Background: grid overlay ── */}
      <div className="gsap-grid absolute inset-0 -z-10 h-full w-full bg-white/0">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto gap-6">
        {/* Eyebrow badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 backdrop-blur-sm px-4 py-1.5 text-sm text-purple-700 font-medium shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600" />
            </span>
            Creator Economy · Brand Building · Growth
          </span>
        </motion.div>

        {/* Heading — word-by-word animation */}
        <h1
          ref={headingRef}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.2]"
        >
          {words.map((word, i) =>
            word === "Creators" ? (
              <motion.span
                key={i}
                custom={i * 0.5 + 1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="inline-block mr-[0.25em]"
              >
                <span className="inline-block rotate-3 bg-gradient-to-b from-[#ec4899] to-[#be185d] text-white px-4 py-1 rounded-md font-extrabold tracking-[-2px]">
                  Creators
                </span>
              </motion.span>
            ) : (
              <motion.span
                key={i}
                custom={i * 0.5 + 1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ),
          )}
        </h1>

        {/* Subtext */}
        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl text-gray-500 max-w-xl leading-relaxed"
        >
          Insights, ideas, and perspectives on building brands
          <br className="hidden sm:block" /> through people, not ads.
        </motion.p>

        {/* CTA */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <Button
            size="lg"
            className="group mt-2 rounded-full px-8 py-6 text-base font-semibold text-white shadow-lg shadow-pink-800/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-800/40"
            style={{ backgroundColor: "#be185d" }}
          >
            Book an Appointment
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3 mt-4"
        >
          <div className="flex -space-x-2">
            {["A", "B", "C", "D"].map((l, i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                style={{
                  backgroundColor: ["#7c3aed", "#be185d", "#0891b2", "#059669"][
                    i
                  ],
                }}
              >
                {l}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Trusted by{" "}
            <span className="font-semibold text-gray-700">2,400+</span> creators
            & brands
          </p>
        </motion.div>
      </div>
    </section>
  );
}
