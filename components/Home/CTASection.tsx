"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl mt-5">
      {/* Layer 1 — white base + radial blue glow */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]" />
      </div>

      {/* Layer 2 — fine grid with ellipse mask */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 flex items-center gap-2 rounded-full border-x border-b-0 bg-[#f7f4ff] text-black/80 text-lg border-[#ec4899] shadow-[0_-4px_6px_-1px_rgba(236,72,153,0.3)] px-3 py-1"
        >
          <BadgeCheck className="h-5 w-5 text-[#be185d] " strokeWidth={2} />
          <span className="text-sm font-medium text-gray-600">
            Become a Part of Us
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl font-heading"
        >
          Ready to Elevate Your{" "}
          <span className="text-gray-900">Influence with</span>{" "}
          <span className="bg-gradient-to-r from-[#ec4899] to-[#be185d] bg-clip-text text-transparent">
            India's Top Talent Network?
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-xl text-base leading-relaxed text-gray-500 font-body"
        >
          Join the movement. Grow your brand, unlock powerful collaborations,
          and shape culture with our expert talent &amp; influencer solutions.
        </motion.p>

        {/* CTA Button */}
        <Link href="/appointment">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 rounded-full bg-[#be185d] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition-all duration-200 hover:bg-[#9d1550] hover:shadow-pink-300 font-heading"
          >
            Book an Appointment
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
