"use client";

import Image from "next/image";
import Link from "next/link";
import FloatingImage from "./FloatingImage";
import { motion } from "framer-motion";

const AI_QUERY = encodeURIComponent(
  "Briefly explain FirstSkout, what the company does, how it helps brands and creators through influencer marketing and talent management, what makes it unique, and how someone can collaborate or work with the company",
);

const AI_LINKS = [
  {
    href: `https://www.google.com/search?udm=50&aep=11&q=${AI_QUERY}`,
    icon: "/hero-img/google.svg",
    alt: "Google AI",
    w: 33,
    h: 33,
  },
  {
    href: `https://chatgpt.com/?q=${AI_QUERY}`,
    icon: "/hero-img/chatgpt.svg",
    alt: "ChatGPT",
    w: 28,
    h: 30,
  },
  {
    href: `https://grok.com/?q=${AI_QUERY}`,
    icon: "/hero-img/grok.svg",
    alt: "Grok",
    w: 31,
    h: 30,
  },
  {
    href: `https://www.perplexity.ai/search?q=${AI_QUERY}`,
    icon: "/hero-img/perplexity.svg",
    alt: "Perplexity",
    w: 31,
    h: 35,
  },
  {
    href: `https://claude.ai/new?q=${AI_QUERY}`,
    icon: "/hero-img/claude.svg",
    alt: "Claude",
    w: 28,
    h: 33,
  },
];

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-[50px] w-full py-[120px] overflow-visible">
      {/* ✅ Light Grid Background */}
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-white 
bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] 
bg-[size:6rem_4rem]"
      >
        <div
          className="absolute inset-0 
  bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"
        ></div>
      </div>

      {/* ── Top content block ── */}
      <div className="flex flex-col items-center justify-center gap-[29px] w-full max-w-[800px]">
        {/* Tag + Headings + Subheading */}
        <div className="flex flex-col items-center justify-center gap-[26px] w-full">
          <div className="flex flex-col items-center justify-center gap-[34px] w-full">
            {/* Tag */}
            <div className="relative flex items-center gap-3 px-4 py-[6px] pr-4 pl-[6px] rounded-[40px] border border-black/10 bg-white/60 backdrop-blur">
              {/* Purple pill */}
              <div className="flex items-center justify-center px-[15px] py-[9px] rounded-[26px] border border-black/10 bg-gradient-to-b from-[#ec4899] to-[#be185d]">
                <span className="text-[12px] font-bold text-white">2026</span>
              </div>

              <span className="text-[16px] text-black/80 font-body">
                India&apos;s #1 Talent Management Company
              </span>
            </div>

            {/* Headings */}
            <div className="flex flex-wrap items-center justify-center gap-[10px] w-full max-w-[800px]">
              <h1 className="text-black text-center text-[70px] tracking-[-3px] leading-[0.9em] font-heading">
                We Are
              </h1>

              <h1
                className="text-[79px] tracking-[-3px] leading-[0.9em] 
    rotate-3 
    bg-gradient-to-b from-[#ec4899] to-[#be185d] 
    text-white px-4 py-1 rounded-md inline-block font-heading"
              >
                Creators
              </h1>

              <h1 className="text-black text-[70px] tracking-[-3px] leading-[0.9em] font-heading">
                Growth
              </h1>

              <h1 className="text-black text-[60px] tracking-[-3px] leading-[0.9em] font-heading">
                Engine.
              </h1>
            </div>

            {/* Subheading */}
            <p className="w-full max-w-[600px] text-center text-black/60 text-[18px] leading-[1.5em] font-body">
              At FirstSkout, we find the right creators, build the right campaigns, and execute everything — so your brand doesn't just show up online, it dominates.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Images */}
      <div className="hidden lg:block">
        <FloatingImage />
      </div>

      {/* Ask AI */}
      <div className="flex flex-wrap items-center justify-center gap-[10px] w-full pt-[10px]">
        <h4 className="text-black text-[18px] font-heading">Ask AI About Us</h4>

        <div className="flex gap-[7px]">
          {AI_LINKS.map(({ href, icon, alt, w, h }) => (
            <Link
              key={alt}
              href={href}
              target="_blank"
              className="flex items-center justify-center w-[48px] h-[46px] rounded-[10px] border border-[#4f1ad6] bg-white"
            >
              <div className="relative" style={{ width: w, height: h }}>
                <Image src={icon} alt={alt} fill className="object-contain" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
