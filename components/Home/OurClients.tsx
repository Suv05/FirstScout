"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { HeartHandshake } from "lucide-react";

const clients = [
  { name: "Britannia", logo: "/brands/Britannia.svg" },
  { name: "DTOOR", logo: "/brands/dTooR.svg" },
  { name: "FLIMORA", logo: "/brands/Filmora-Go.svg" },
  { name: "FLAMAPP", logo: "/brands/FlamApp.svg" },
  { name: "FREEDOM-OIL", logo: "/brands/Freedom-Oil.svg" },
  { name: "HANGOUT-HUB", logo: "/brands/Hangout-Hub.svg" },
  { name: "LUMA-AI", logo: "/brands/Luma-AI.svg" },
  { name: "MANIPAL-EDUCATION", logo: "/brands/Manipal-Education.svg" },
  { name: "MAONO", logo: "/brands/Maono.svg" },
  { name: "METASHOT", logo: "/brands/Metashot.svg" },
  { name: "MOJ", logo: "/brands/Moj.svg" },
  { name: "PUNCH TRADING", logo: "/brands/Punch-Trading.svg" },
  { name: "HOLLYLAND", logo: "/brands/Hollyland.svg" },
  { name: "ROOTER", logo: "/brands/Rooter.svg" },
  { name: "VOYAGE", logo: "/brands/Voyage.svg" },
  { name: "REVLON", logo: "/brands/Revlon.svg" },
];

const row1 = clients.slice(0, Math.ceil(clients.length / 2));
const row2 = clients.slice(Math.ceil(clients.length / 2));
const row1Doubled = [...row1, ...row1];
const row2Doubled = [...row2, ...row2];

const CARD_W = 200;
const GAP = 24;
const STEP = CARD_W + GAP;

function LogoCard({
  client,
  rotate,
}: {
  client: (typeof clients)[0];
  rotate: number;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative flex-shrink-0 flex items-center justify-center rounded-2xl border border-white/10 bg-black shadow-md hover:shadow-violet-900/40 hover:border-violet-500/30"
      style={{ width: CARD_W, height: 88 }}
    >
      {/* Positioned container for fill-mode Image */}
      <div className="relative w-28 h-14">
        <Image
          src={client.logo}
          alt={client.name}
          fill
          className="object-contain brightness-90 hover:brightness-110 transition-all duration-300"
        />
      </div>
    </motion.div>
  );
}

function MarqueeRow({
  items,
  direction,
  duration = 28,
}: {
  items: (typeof clients)[0][];
  direction: "left" | "right";
  duration?: number;
}) {
  const dist = row1.length * STEP;
  const from = direction === "left" ? 0 : -dist;
  const to = direction === "left" ? -dist : 0;
  const rotate = direction === "left" ? 4 : -4;

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <motion.div
        animate={{ x: [from, to] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="flex"
        style={{ gap: GAP }}
      >
        {items.map((client, i) => (
          <LogoCard key={i} client={client} rotate={rotate} />
        ))}
      </motion.div>
    </div>
  );
}

export default function OurClients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden py-20 px-6">
      {/* Dot grid background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Pink elliptical radial gradient */}
      <div
        className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(190,24,93,0.3), rgba(255,255,255,0))",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
          ref={ref}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-700/30 bg-pink-700/10 px-4 py-1.5 text-sm text-pink-700">
            {/* 🔥 Replaced dot with Users icon */}
            <HeartHandshake className="w-5 h-5 text-pink-700 drop-shadow-[0_0_6px_rgba(190,24,93,0.6)] animate-pulse" />
            Our Partners
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-center text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 font-heading"
        >
          Our Partners: Driving
          <p className="bg-gradient-to-r from-[#ec4899] to-[#be185d] bg-clip-text text-transparent">
            Influence That Converts
          </p>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-800 text-lg max-w-xl mx-auto mb-14 leading-relaxed font-body"
        >
          We work with forward-thinking brands to craft influencer campaigns that don&rsquo;t just reach audiences — they inspire action and deliver real results.
        </motion.p>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col gap-5"
        >
          <MarqueeRow items={row1Doubled} direction="left" duration={30} />
          <MarqueeRow items={row2Doubled} direction="right" duration={26} />
        </motion.div>
      </div>
    </section>
  );
}
