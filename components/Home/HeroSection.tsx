"use client";

import Image from "next/image";
import Link from "next/link";

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

const GALLERY_IMAGES = [
  {
    src: "/hero-img/image1.avif",
    alt: "Creator 1",
    rotate: "rotate-[-7deg]",
    rounded: "rounded-[18px]",
    zIndex: "z-[1]",
    pin: null,
  },
  {
    src: "/hero-img/image2.avif",
    alt: "Creator 2",
    rotate: "rotate-[-8deg]",
    rounded: "rounded-[18px]",
    zIndex: "z-[2]",
    pin: { label: "#trend", color: "bg-blue-500", textColor: "text-white" },
  },
  {
    src: "/hero-img/image3.avif",
    alt: "Creator 3",
    rotate: "rotate-[-5deg]",
    rounded: "rounded-[18px]",
    zIndex: "z-[3]",
    pin: null,
  },
  {
    src: "/hero-img/image4.avif",
    alt: "Creator 4",
    rotate: "rotate-0",
    rounded: "rounded-[18px]",
    zIndex: "z-[4]",
    pin: null,
  },
  {
    src: "/hero-img/image5.avif",
    alt: "Creator 5",
    rotate: "rotate-[6deg]",
    rounded: "rounded-[18px]",
    zIndex: "z-[5]",
    pin: null,
  },
  {
    src: "/hero-img/image6.avif",
    alt: "Creator 6",
    rotate: "rotate-[7deg]",
    rounded: "rounded-[18px]",
    zIndex: "z-[6]",
    pin: null,
  },
  {
    src: "/hero-img/image7.avif",
    alt: "Creator 7",
    rotate: "rotate-[14deg]",
    rounded: "rounded-[18px]",
    zIndex: "z-[7]",
    pin: {
      label: "#viral",
      color: "bg-[#d4d4d4]",
      textColor: "text-[#050505]",
    },
  },
];

/* Positions matching the original expanded layout (desktop) */
const IMAGE_POSITIONS = [
  "bottom-[-16px] left-[-334px]", // image1 — far left bottom
  "top-[-12px]   left-[-217px]", // image2
  "top-0         left-[-108px]", // image3
  "top-0         left-0", // image4 — center
  "top-0         right-[-100px]", // image5
  "bottom-[-7px] right-[-201px]", // image6
  "top-[8px]     left-[calc(216.304%-92px)]", // image7 — far right
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

        {/* ── Floating Image Gallery ── */}
        <div className="hidden lg:block relative w-[184px] h-[184px] flex-shrink-0">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`absolute w-[184px] h-[184px] ${img.rounded} ${img.rotate} ${img.zIndex} overflow-hidden ${IMAGE_POSITIONS[i]}`}
            >
              <Image
  src={img.src}
  alt={img.alt ?? `Creator ${i + 1}`}
  fill
  sizes="184px"
  priority={i === 3} // only center image
  className="object-cover"
  draggable={false}
/>
              {img.pin && (
                <>
                  <div
                    className={`absolute flex items-center px-[10px] py-[6px] rounded-[15px] ${img.pin.color} z-10`}
                    style={{ top: "-65px", right: i === 1 ? "82px" : "30px" }}
                  >
                    <span
                      className={`text-[18px] font-medium ${img.pin.textColor} whitespace-pre`}
                    >
                      {img.pin.label}
                    </span>
                    {/* Triangle tip */}
                    <div
                      className={`absolute w-[10px] h-[10px] ${img.pin.color} rotate-[-45deg] z-10`}
                      style={{
                        bottom: "-5px",
                        [i === 1 ? "right" : "left"]: i === 1 ? "25px" : "23px",
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
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
