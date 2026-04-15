"use client";

import FloatingCards from "./FloatingCards";

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
                Global Influencer Marketing Agency
              </span>
            </div>

            {/* Headings */}
            <div className="flex flex-wrap items-center justify-center gap-[10px] w-full max-w-[800px]">
              <h1 className="text-black text-center text-[70px] tracking-[-3px] leading-[0.9em] font-heading">
                The
              </h1>

              <h1
                className="text-[79px] tracking-[-3px] leading-[0.9em] 
    rotate-3 
    bg-gradient-to-b from-[#ec4899] to-[#be185d] 
    text-white px-4 py-1 rounded-md inline-block font-heading"
              >
                Agency
              </h1>

              <h1 className="text-black text-[70px] tracking-[-3px] leading-[0.9em] font-heading">
                That
              </h1>

              <h1 className="text-black text-[60px] tracking-[-3px] leading-[0.9em] font-heading">
                Delivers.
              </h1>
            </div>

            {/* Subheading */}
            <p className="w-full max-w-[600px] text-center text-black/60 text-[18px] leading-[1.5em] font-body">
              At FirstSkout, we find the right creators, build the right
              campaigns, and execute everything — so your brand doesn't just
              show up online, it dominates.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Cards — hidden below 760px */}
      <div className="hidden [@media(min-width:760px)]:block w-full">
        <FloatingCards />
      </div>
    </section>
  );
}