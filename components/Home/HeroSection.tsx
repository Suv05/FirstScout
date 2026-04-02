"use client";

import Image from "next/image";
import Link from "next/link";
import FloatingImage from "./FloatingImage";

const AI_QUERY = encodeURIComponent(
  "Briefly explain CreatorsMela, what the company does, how it helps brands and creators through influencer marketing and talent management, what makes it unique, and how someone can collaborate or work with the company",
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
    <section className="relative flex flex-col items-center justify-center gap-[50px] w-full py-[120px] overflow-visible bg-black">
      {/* ── Top content block ── */}
      <div className="flex flex-col items-center justify-center gap-[29px] w-full max-w-[800px]">
        {/* Tag + Headings + Subheading */}
        <div className="flex flex-col items-center justify-center gap-[26px] w-full">
          {/* Tag + Headings wrapper */}
          <div className="flex flex-col items-center justify-center gap-[34px] w-full">
            {/* ── Highlight Tag ── */}
            <div className="relative flex flex-row items-center justify-center gap-3 px-4 py-[6px] pr-4 pl-[6px] rounded-[40px] border border-white/5 overflow-hidden w-fit">
              {/* Conic gradient overlay */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0.15) 0deg, rgba(255,255,255,0) 72deg, rgba(79,26,214,0.2) 171.89deg, rgba(255,255,255,0) 270deg, rgba(255,255,255,0.15) 360deg)",
                }}
              />
              {/* Purple pill */}
              <div className="relative flex items-center justify-center px-[10px] py-[9px] rounded-[26px] border-2 border-white/15 bg-gradient-to-b from-[#4f1ad6] to-[#8059e3]">
                <span className="text-[12px] font-bold leading-[10px] tracking-[-0.5px] text-white font-['DM_Sans']">
                  2026
                </span>
              </div>
              {/* India's #1 label */}
              <span
                className="relative z-10 text-[16px] font-normal leading-[26px] tracking-[-0.5px] font-['DM_Sans'] whitespace-pre"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgb(255,255,255) 0%, rgba(153,153,153,0) 350%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                India&apos;s #1 Talent Management Company
              </span>
            </div>

            {/* ── Headings ── */}
            <div className="flex flex-col items-center justify-center gap-[10px] w-full max-w-[800px]">
              <div className="flex flex-wrap items-center justify-center gap-[10px]">
                {/* "We Are" */}
                <h1
                  className="text-white text-center"
                  style={{
                    fontFamily: "'Unbounded', sans-serif",
                    fontSize: "70px",
                    letterSpacing: "-3px",
                    lineHeight: "0.9em",
                  }}
                >
                  We Are
                </h1>

                {/* "Talent" — rotated, serif */}
                <div className="rotate-[3deg]">
                  <h1
                    className="text-white text-center -rotate-[3deg]"
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "79px",
                      letterSpacing: "-3.38px",
                      lineHeight: "0.9em",
                    }}
                  >
                    Talent
                  </h1>
                </div>

                {/* "Crafting" */}
                <h1
                  className="text-white text-center"
                  style={{
                    fontFamily: "'Unbounded', sans-serif",
                    fontSize: "70px",
                    letterSpacing: "-3px",
                    lineHeight: "0.9em",
                  }}
                >
                  Crafting
                </h1>

                {/* "Company." */}
                <h1
                  className="text-white text-center"
                  style={{
                    fontFamily: "'Unbounded', sans-serif",
                    fontSize: "60px",
                    letterSpacing: "-3px",
                    lineHeight: "0.9em",
                  }}
                >
                  Company.
                </h1>
              </div>
            </div>

            {/* ── Subheading ── */}
            <p
              className="w-full max-w-[600px] text-center text-white/80"
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "18px",
                letterSpacing: "-0.02em",
                lineHeight: "1.5em",
              }}
            >
              At CreatorsMela, we merge bold creativity, strategic execution,
              and creator-first thinking to turn brand visions into powerful
              digital realities.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Images */}
      <div className="hidden lg:block">
        <FloatingImage />
      </div>

      {/* ── Ask AI About Us ── */}
      <div className="flex flex-wrap items-center justify-center gap-[10px] w-full pt-[10px]">
        <div className="flex flex-wrap items-center justify-center gap-3 w-[75%] max-w-[600px] overflow-hidden">
          {/* Label */}
          <h4
            className="text-white whitespace-pre"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "18px",
              fontWeight: 500,
              letterSpacing: "-0.5px",
              lineHeight: "26px",
            }}
          >
            Ask AI About Us
          </h4>

          {/* AI icon buttons */}
          <div className="flex flex-row items-center justify-center gap-[7px]">
            {AI_LINKS.map(({ href, icon, alt, w, h }) => (
              <Link
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[48px] h-[46px] rounded-[10px] border border-[#4f1ad6] bg-[#efeeec] overflow-hidden transition-opacity hover:opacity-80"
              >
                <div className="relative" style={{ width: w, height: h }}>
                  <Image src={icon} alt={alt} fill className="object-contain" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
