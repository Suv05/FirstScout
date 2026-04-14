"use client";

import {
  sendCreatorInquiryEmail,
  type CreatorFormData,
} from "@/server-act/creators-contact/actions";
import { gsap } from "gsap";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useForm } from "react-hook-form";
import {
  ExternalLink,
  Users,
  Send,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Star,
  ChevronDown,
} from "lucide-react";
import { FaInstagram as Instagram } from "react-icons/fa6";

/* ══════════════════════════════════════════
   CREATORS DATA
══════════════════════════════════════════ */
const CREATORS = [
  {
    name: "Rosario Mendicino",
    image: "/creators-img/Rosario-Mendicino.jpg",
    followers: "248K",
    followersRaw: 248000,
    ig: "https://www.instagram.com/rosriogram/reels/",
    handle: "@rosriogram",
    niche: "Lifestyle",
    accentIndex: 0,
  },
  {
    name: "Patryk Micek",
    image: "/creators-img/Patryk-Micek.jpg",
    followers: "173K",
    followersRaw: 173000,
    ig: "https://www.instagram.com/micek.drones/reels/",
    handle: "@micek.drones",
    niche: "Aerial / Drones",
    accentIndex: 1,
  },
  {
    name: "Dominic Hayles",
    image: "/creators-img/Dominic-Hayles.jpg",
    followers: "117K",
    followersRaw: 117000,
    ig: "https://www.instagram.com/dominic_hayles",
    handle: "@dominic_hayles",
    niche: "Travel",
    accentIndex: 2,
  },
  {
    name: "Tomás Wilhelm",
    image: "/creators-img/Tom%C3%A1s-Wilhelm.jpg",
    followers: "162K",
    followersRaw: 162000,
    ig: "https://www.instagram.com/tomytaw",
    handle: "@tomytaw",
    niche: "Adventure",
    accentIndex: 3,
  },
  {
    name: "Damien Rijken",
    image: "/creators-img/Damien-Rijken.jpg",
    followers: "92.1K",
    followersRaw: 92100,
    ig: "https://www.instagram.com/watchdamien/reels/",
    handle: "@watchdamien",
    niche: "Cinematic",
    accentIndex: 4,
  },
  {
    name: "Nico",
    image: "/creators-img/Nico-1.jpg",
    followers: "103K",
    followersRaw: 103000,
    ig: "https://www.instagram.com/sentichiviaggia/reels/",
    handle: "@sentichiviaggia",
    niche: "Travel",
    accentIndex: 5,
  },
  {
    name: "Alexei Dela Cuesta",
    image: "/creators-img/Alexei-Dela-Cuesta.jpg",
    followers: "144K",
    followersRaw: 144000,
    ig: "https://www.instagram.com/alexeidelacuesta/reels/",
    handle: "@alexeidelacuesta",
    niche: "Lifestyle",
    accentIndex: 0,
  },
  {
    name: "CJ",
    image: "/creators-img/CJ.jpg",
    followers: "150K",
    followersRaw: 150000,
    ig: "https://www.instagram.com/cj.filmed.it/reels/",
    handle: "@cj.filmed.it",
    niche: "Cinematic",
    accentIndex: 1,
  },
  {
    name: "Ignacio Vásconez",
    image: "/creators-img/Ignacio-V%C3%A1sconez.jpg",
    followers: "210K",
    followersRaw: 210000,
    ig: "https://www.instagram.com/ignaciovasconez/reels/",
    handle: "@ignaciovasconez",
    niche: "Adventure",
    accentIndex: 2,
  },
  {
    name: "Marjara Petito",
    image: "/creators-img/Marjara-Petito.jpg",
    followers: "169K",
    followersRaw: 169000,
    ig: "https://www.instagram.com/marjarapetito",
    handle: "@marjarapetito",
    niche: "Travel",
    accentIndex: 3,
  },
  {
    name: "ERIKA & LUCA",
    image: "/creators-img/ERIKA-&-LUCA.jpg",
    followers: "161K",
    followersRaw: 161000,
    ig: "https://www.instagram.com/weekend_dipendenti",
    handle: "@weekend_dipendenti",
    niche: "Couples / Travel",
    accentIndex: 4,
  },
];

const ACCENTS = ["#d4006e", "#7c3aed", "#0891b2", "#059669", "#d97706"];
const NICHE_COLORS: Record<string, string> = {
  Lifestyle: "#d4006e",
  "Aerial / Drones": "#0891b2",
  Travel: "#059669",
  Adventure: "#7c3aed",
  Cinematic: "#d97706",
  "Couples / Travel": "#db2777",
};

const PLATFORM_OPTIONS = [
  "YouTube",
  "Instagram",
  "UGC Content",
  "Influencer Marketing Queries",
];
const COMPANY_OPTIONS = ["Agency", "SaaS", "Banking", "Business", "Other"];

/* ══════════════════════════════════════════
   HELPERS
══════════════════════════════════════════ */
const fade = (delay = 0, y = 28) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
});

function PillBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4006e]/25 bg-[#d4006e]/6 text-[#d4006e] text-xs font-bold tracking-widest uppercase mb-6 font-body">
      <span className="w-1.5 h-1.5 rounded-full bg-[#d4006e] animate-pulse" />
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════
   MARQUEE
══════════════════════════════════════════ */
function Marquee({
  items,
  duration = 24,
}: {
  items: string[];
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() =>
      gsap.to(ref.current, {
        xPercent: -50,
        ease: "none",
        duration,
        repeat: -1,
      }),
    );
    return () => ctx.revert();
  }, [duration]);
  return (
    <div className="border-t border-b border-[#D3D1C7] py-3 overflow-hidden">
      <div ref={ref} className="flex whitespace-nowrap w-max">
        {[0, 1].map((ri) => (
          <div key={ri} className="flex items-center">
            {items.map((t) => (
              <span
                key={t}
                className="flex items-center gap-4 px-8 text-[11px] uppercase tracking-[0.2em] text-[#B4B2A9] font-medium"
              >
                {t}
                <span className="w-1 h-1 rounded-full bg-[#D3D1C7] inline-block" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   HERO
══════════════════════════════════════════ */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const totalFollowers = CREATORS.reduce((s, c) => s + c.followersRaw, 0);
  const formatNum = (n: number) =>
    n >= 1000000 ? `${(n / 1000000).toFixed(1)}M` : `${(n / 1000).toFixed(0)}K`;

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-white border-b border-gray-100 min-h-[80vh] flex flex-col justify-center"
      style={{ position: "relative" }}
    >
      {/* blobs */}
      <div className="absolute -top-40 -right-40 w-175 h-175 rounded-full bg-linear-to-br from-[#ede8f5] via-[#f5e8f0] to-transparent opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-87.5 h-87.5 rounded-full bg-[#d4006e]/5 blur-3xl pointer-events-none" />
      {/* grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.033) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.033) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-24"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PillBadge>Our Creator Network</PillBadge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.05] mb-5 font-heading"
            >
              Creators who{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#d4006e]">move</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.85, duration: 0.5 }}
                  className="absolute bottom-1 left-0 right-0 h-3 bg-[#d4006e]/12 rounded origin-left"
                />
              </span>{" "}
              audiences.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-lg leading-relaxed mb-8 font-body"
            >
              We work with a handpicked network of creators — not a database.
              Each one is vetted for content quality, audience authenticity, and
              brand alignment.
            </motion.p>

            {/* stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-6 mb-8"
            >
              {[
                { num: "20000+", label: "Active Creators" },
                { num: "2500+", label: "Creators We Work With" },
                { num: "Real-Time", label: "Scouting Always On" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-gray-900 font-heading text-center">
                    {s.num}
                  </p>
                  <p className="text-xs text-gray-400 font-body">{s.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#d4006e] text-white font-bold text-sm hover:bg-[#b0005a] transition-colors duration-200 shadow-lg shadow-[#d4006e]/25 font-body"
            >
              <Sparkles size={14} />
              Work With Our Creators
            </motion.a>
          </div>

          {/* right — stacked preview cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="hidden lg:block relative h-72"
          >
            {CREATORS.slice(0, 5).map((creator, i) => {
              const offset = (i - 2) * 18;
              const rotate = (i - 2) * 4;
              return (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-0"
                  style={{ zIndex: i === 2 ? 10 : i }}
                  animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                  whileHover={{ scale: 1.08, zIndex: 20 }}
                >
                  <div
                    className="w-28 h-36 rounded-2xl overflow-hidden border-2 border-white shadow-xl"
                    style={{
                      transform: `translateX(calc(-50% + ${offset}px)) rotate(${rotate}deg)`,
                    }}
                  >
                    <img
                      src={creator.image}
                      alt={creator.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      <Marquee
        items={[
          "Real Creators",
          "Verified Reach",
          "Multi-Platform",
          "Authentic Content",
          "No Databases",
          "Hand-Picked",
          "Audience Fit",
        ]}
      />
    </div>
  );
}

/* ══════════════════════════════════════════
   CREATOR CARD
══════════════════════════════════════════ */
function CreatorCard({
  creator,
  index,
}: {
  creator: (typeof CREATORS)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const accent = ACCENTS[creator.accentIndex];
  const nicheColor = NICHE_COLORS[creator.niche] || "#d4006e";

  return (
    <motion.div
      {...fade(index * 0.06)}
      whileHover={{ y: -8 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-400"
    >
      {/* image */}
      <div className="relative h-72 overflow-hidden">
        <motion.img
          src={creator.image}
          alt={creator.name}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

        {/* niche badge — top left */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
          style={{ background: `${nicheColor}cc`, backdropFilter: "blur(6px)" }}
        >
          {creator.niche}
        </div>

        {/* followers chip — top right */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-black text-gray-900">
          <Users size={10} className="text-[#d4006e]" />
          {creator.followers}
        </div>

        {/* bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-black text-lg leading-tight font-heading">
            {creator.name}
          </h3>
          <p className="text-white/60 text-xs font-body">{creator.handle}</p>
        </div>
      </div>

      {/* bottom action */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Instagram size={14} style={{ color: accent }} />
          <span className="text-xs text-gray-500 font-medium font-body">
            {creator.followers} followers
          </span>
        </div>
        <motion.a
          href={creator.ig}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white transition-all duration-200"
          style={{ background: accent }}
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={11} />
          Profile
        </motion.a>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   CREATORS GRID SECTION
══════════════════════════════════════════ */
function CreatorsGrid() {
  return (
    <section className="bg-[#f7f6f3] py-20 md:py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.03) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div {...fade(0)}>
              <PillBadge>The Network</PillBadge>
            </motion.div>
            <motion.h2
              {...fade(0.1)}
              className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.08] font-heading"
            >
              Meet our <span className="text-[#d4006e]">creators.</span>
            </motion.h2>
          </div>
          <motion.p
            {...fade(0.15)}
            className="text-gray-400 text-base max-w-sm font-body"
          >
            Every creator in our network is handpicked for content quality and
            audience authenticity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {CREATORS.map((creator, i) => (
            <CreatorCard key={creator.name} creator={creator} index={i} />
          ))}

          {/* "More coming" card */}
          <motion.div
            {...fade(CREATORS.length * 0.06)}
            className="relative bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden flex flex-col items-center justify-center p-8 text-center min-h-80"
          >
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-[#d4006e]/15 blur-2xl" />
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 rounded-full border-2 border-dashed border-[#d4006e]/40 flex items-center justify-center mb-4"
            >
              <Sparkles size={18} className="text-[#d4006e]" />
            </motion.div>
            <h3 className="text-white font-black text-lg mb-2 font-heading">
              More Creators
            </h3>
            <p className="text-gray-500 text-xs mb-5 font-body">
              We scout fresh creators for every campaign in real time.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#d4006e] text-white text-xs font-bold hover:bg-[#b0005a] transition-colors font-body"
            >
              Join the Network <ArrowRight size={11} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   FORM TYPES
══════════════════════════════════════════ */
// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   platform: string;
//   companyType: string;
//   platformLink: string;
//   message: string;
// }

/* ══════════════════════════════════════════
   CUSTOM SELECT
══════════════════════════════════════════ */
type SelectOption = string | { label: string; value: string };

function CustomSelect({
  label,
  options,
  value,
  onChange,
  error,
  placeholder,
}: {
  label: React.ReactNode;
  options: SelectOption[];
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedLabel =
    options.find((opt) =>
      typeof opt === "string" ? opt === value : opt.value === value,
    ) ?? placeholder;

  return (
    <div className="relative" ref={ref}>
      <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2 font-body">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl border text-sm text-left transition-all duration-200 font-body ${
          error
            ? "border-red-300 bg-red-50"
            : open
              ? "border-[#d4006e] bg-white ring-2 ring-[#d4006e]/15"
              : "border-gray-200 bg-white hover:border-gray-300"
        }`}
      >
        <span className={value ? "text-gray-900 font-medium" : "text-gray-400"}>
          {typeof selectedLabel === "string"
            ? selectedLabel
            : selectedLabel.label}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} className="text-gray-400" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute z-50 top-full mt-2 left-0 right-0 bg-white rounded-xl border border-gray-100 shadow-xl overflow-hidden"
          >
            {options.map((opt) => {
              const optionValue = typeof opt === "string" ? opt : opt.value;
              const optionLabel = typeof opt === "string" ? opt : opt.label;
              const selected = optionValue === value;

              return (
                <button
                  key={optionValue}
                  type="button"
                  onClick={() => {
                    onChange(optionValue);
                    setOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-sm text-left transition-colors duration-150 flex items-center justify-between font-body ${
                    selected
                      ? "bg-[#d4006e]/6 text-[#d4006e] font-bold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {optionLabel}
                  {selected && (
                    <CheckCircle size={14} className="text-[#d4006e]" />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      {error && (
        <p className="mt-1.5 text-xs text-red-500 font-body">{error}</p>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════
   INPUT FIELD
══════════════════════════════════════════ */
function InputField({
  label,
  placeholder,
  error,
  type = "text",
  textarea = false,
  rows = 4,
  ...rest
}: {
  label: React.ReactNode;
  placeholder: string;
  error?: string;
  type?: string;
  textarea?: boolean;
  rows?: number;
  [key: string]: any;
}) {
  const baseClass = `w-full px-4 py-3.5 rounded-xl border text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none focus:ring-2 focus:ring-[#d4006e]/15 ${
    error
      ? "border-red-300 bg-red-50"
      : "border-gray-200 bg-white hover:border-gray-300 focus:border-[#d4006e]"
  }`;

  return (
    <div>
      <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2 font-body">
        {label}
      </label>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          rows={rows}
          className={`${baseClass} resize-none font-body`}
          {...rest}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={`${baseClass} font-body`}
          {...rest}
        />
      )}
      {error && (
        <p className="mt-1.5 text-xs text-red-500 font-body">{error}</p>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════
   CONTACT FORM SECTION
══════════════════════════════════════════ */
// ── Genre options (new) ──────────────────────────────────────────────────────
const GENRE_OPTIONS = [
  { label: "Beauty & Fashion", value: "beauty_fashion" },
  { label: "Entertainment & Comedy", value: "entertainment_comedy" },
  { label: "Travel", value: "travel" },
  { label: "Technology", value: "technology" },
  { label: "Motivational", value: "motivational" },
  { label: "Food", value: "food" },
  { label: "Music", value: "music" },
  { label: "Business & Finance", value: "business_finance" },
  { label: "Health & Fitness", value: "health_fitness" },
  { label: "Gaming", value: "gaming" },
];

// ── Component ────────────────────────────────────────────────────────────────
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState(""); // new
  // companyType state removed ✂️

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreatorFormData>();

  const onSubmit = async (data: CreatorFormData) => {
    setLoading(true);
    setError(null);

    // companyType removed from payload, genre added
    const payload: CreatorFormData = { ...data, platform, genre };
    const result = await sendCreatorInquiryEmail(payload);

    if (result.success) {
      setSubmitted(true);
      reset();
      setPlatform("");
      setGenre(""); // reset genre
    } else {
      setError(result.error ?? "Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  const handleReset = () => {
    setSubmitted(false);
    reset();
    setPlatform("");
    setGenre("");
  };

  return (
    <section
      id="contact"
      className="relative bg-white pt-20 md:pt-28 pb-0 border-t border-gray-100 scroll-mt-20"
    >
      {/* grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.025) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#ede8f5] opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#d4006e]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* ── left info panel ── */}
          <div className="lg:sticky lg:top-28">
            <motion.div {...fade(0)}>
              <PillBadge>Join the Network</PillBadge>
            </motion.div>
            <motion.h2
              {...fade(0.1)}
              className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.08] mb-5 font-heading"
            >
              Are you a{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#d4006e]">creator</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute bottom-1 left-0 right-0 h-3 bg-[#d4006e]/12 rounded origin-left"
                />
              </span>{" "}
              or a brand?
            </motion.h2>
            <motion.p
              {...fade(0.2)}
              className="text-gray-500 text-base leading-relaxed mb-8 font-body"
            >
              Whether you're a creator looking to collaborate or a brand ready
              to launch a campaign — reach out and let's start the conversation.
            </motion.p>

            <motion.div {...fade(0.25)} className="space-y-4 mb-8">
              {[
                {
                  label: "Creators",
                  desc: "Get matched with campaigns that fit your niche and audience.",
                },
                {
                  label: "Brands & Agencies",
                  desc: "Tell us your goals and we'll find the right creators fast.",
                },
                {
                  label: "Queries",
                  desc: "Have a question about influencer marketing? We're happy to help.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#d4006e]/10 flex items-center justify-center shrink-0">
                    <Star size={10} className="text-[#d4006e]" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-gray-800 font-body">
                      {item.label}
                    </p>
                    <p className="text-xs text-gray-400 font-body">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              {...fade(0.3)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#d4006e]/5 border border-[#d4006e]/15"
            >
              <CheckCircle size={16} className="text-[#d4006e] shrink-0" />
              <p className="text-xs text-gray-600 font-medium font-body">
                We reply to every message within 24 hours.
              </p>
            </motion.div>
          </div>

          {/* ── right: form ── */}
          <motion.div {...fade(0.15)}>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-[#f7f6f3] rounded-3xl border border-gray-100 p-8 shadow-sm space-y-5"
                >
                  {/* ── Error banner ── */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        key="error-banner"
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.22 }}
                        className="flex items-start gap-3 px-4 py-3.5 rounded-xl bg-red-50 border border-red-200"
                      >
                        <svg
                          className="w-4 h-4 text-red-500 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v4m0 4h.01" strokeLinecap="round" />
                        </svg>
                        <div className="flex-1">
                          <p className="text-xs font-bold text-red-700 font-body mb-0.5">
                            Failed to send message
                          </p>
                          <p className="text-xs text-red-600 font-body">
                            {error}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setError(null)}
                          className="text-red-400 hover:text-red-600 transition-colors"
                        >
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              d="M6 18L18 6M6 6l12 12"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* name row */}
                  <div className="grid grid-cols-2 gap-4">
                    <InputField
                      label="First Name"
                      placeholder="Your first name"
                      error={errors.firstName?.message}
                      {...register("firstName", { required: "Required" })}
                    />
                    <InputField
                      label="Last Name"
                      placeholder="Your last name"
                      error={errors.lastName?.message}
                      {...register("lastName", { required: "Required" })}
                    />
                  </div>

                  <InputField
                    label="Email Address"
                    placeholder="you@example.com"
                    type="email"
                    error={errors.email?.message}
                    {...register("email", {
                      required: "Required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />

                  {/* ── Phone Number (optional) ── */}
                  <InputField
                    label={
                      <span className="flex items-center gap-1.5">
                        Phone Number
                        <span className="text-[10px] font-normal text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-full">
                          Optional
                        </span>
                      </span>
                    }
                    placeholder="+91 98765 43210"
                    type="tel"
                    error={errors.phone?.message}
                    {...register("phone", {
                      pattern: {
                        value: /^[+]?[\d\s\-().]{7,15}$/,
                        message: "Enter a valid phone number",
                      },
                    })}
                  />

                  <CustomSelect
                    label="Platform Type"
                    placeholder="What best describes you?"
                    options={PLATFORM_OPTIONS}
                    value={platform}
                    onChange={setPlatform}
                  />

                  {/* ── Creator Genre (new) ── */}
                  <CustomSelect
                    label="Creator Genre"
                    placeholder="Which industry do you create in?"
                    options={GENRE_OPTIONS}
                    value={genre}
                    onChange={setGenre}
                  />

                  {/* companyType <CustomSelect> removed ✂️ */}

                  <InputField
                    label="Your Profile / Platform Link"
                    placeholder="https://instagram.com/yourprofile"
                    error={errors.platformLink?.message}
                    {...register("platformLink")}
                  />

                  <InputField
                    label="Message"
                    placeholder="Tell us about your campaign goals or collaboration idea..."
                    textarea
                    rows={4}
                    error={errors.message?.message}
                    {...register("message", {
                      required: "Please share some context",
                    })}
                  />

                  {/* ── Submit button ── */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={!loading ? { scale: 1.02 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-bold text-sm transition-all duration-200 shadow-lg font-body ${
                      loading
                        ? "bg-[#d4006e]/60 cursor-not-allowed shadow-none"
                        : "bg-[#d4006e] hover:bg-[#b0005a] shadow-[#d4006e]/25"
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                          />
                          <path
                            className="opacity-80"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-gray-400 font-body">
                    By submitting you agree to our{" "}
                    <a href="/legal" className="text-[#d4006e] hover:underline">
                      privacy policy
                    </a>
                    .
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#f7f6f3] rounded-3xl border border-gray-100 p-12 shadow-sm flex flex-col items-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1,
                    }}
                    className="w-20 h-20 rounded-full bg-[#d4006e]/10 flex items-center justify-center mb-6"
                  >
                    <CheckCircle size={36} className="text-[#d4006e]" />
                  </motion.div>
                  <h3 className="text-3xl font-black text-gray-900 mb-3 font-heading">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 text-base mb-8 max-w-xs font-body">
                    We've received your message and will get back to you within
                    24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    onClick={handleReset}
                    className="px-6 py-3 rounded-xl bg-[#d4006e] text-white text-sm font-bold hover:bg-[#b0005a] transition-colors font-body"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   PAGE ROOT
══════════════════════════════════════════ */
export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <CreatorsGrid />
      <ContactForm />
    </main>
  );
}
