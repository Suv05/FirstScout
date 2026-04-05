"use client";

import { FingerprintPattern } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const lines = [
  "Fueled by creativity, collaboration, and excellence,",
  "FirstScout is a premier talent management and",
  "influencer marketing agency crafting unmatched",
  "success for brands and creators alike.",
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-white px-6"
    >
      <div className="max-w-4xl text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center px-2 py-1 rounded-full  border-x border-b-0 bg-[#f7f4ff] text-black/80 text-lg border-[#ec4899] shadow-[0_-4px_6px_-1px_rgba(236,72,153,0.3)] font-heading">
          <span className="inline-flex items-center justify-center w-6 h-6 bg-gradient-to-b from-[#ec4899] to-[#be185d] rounded-full mr-2">
            <FingerprintPattern className="h-4 w-4 text-white" />
          </span>
          About Us
        </div>

        {/* Text */}
        <div className="text-3xl md:text-5xl font-medium leading-tight font-heading">
          {lines.map((line, index) => {
            const start = index * 0.2;
            const end = start + 0.2;

            const blur = useTransform(scrollYProgress, [start, end], [6, 0]);

            const color = useTransform(
              scrollYProgress,
              [start, end],
              ["#9ca3af", "#111827"], // gray → black
            );

            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0.3, 1],
            );

            return (
              <motion.div
                key={index}
                style={{
                  filter: useTransform(blur, (v) => `blur(${v}px)`),
                  color,
                  opacity,
                }}
                className="block"
              >
                {line}
              </motion.div>
            );
          })}
        </div>

        {/* Button */}
        <div>
          <Link href={"appointment"}>
            <Button className="px-6 py-6 text-base rounded-xl bg-gradient-to-b from-[#ec4899] to-[#be185d] text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] active:scale-[0.98] font-heading">
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
