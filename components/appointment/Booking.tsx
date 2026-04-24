"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { InlineWidget } from "react-calendly";
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Video,
  Sparkles,
  ChevronDown,
} from "lucide-react";

/* ─────────────────────────────────────────────
   CONTACT OPTION CARD DATA
───────────────────────────────────────────── */
const contactOptions = [
  {
    id: "call",
    icon: Phone,
    label: "Connect Over Call",
    value: "+91 9411721792",
    href: "tel:+919411721792",
    cta: "Call Now",
    color: "#e91e8c",
    bg: "from-pink-50 to-rose-50",
    border: "border-pink-200",
    description: "Talk directly with our talent team",
  },
  {
    id: "mail",
    icon: Mail,
    label: "Drop a Mail",
    value: "team@firstskout.com",
    href: "mailto:team@firstskout.com",
    cta: "Send Email",
    color: "#7c3aed",
    bg: "from-violet-50 to-purple-50",
    border: "border-violet-200",
    description: "We reply within 24 hours",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    label: "Chat on WhatsApp",
    value: "+91 9411721792",
    href: "https://wa.me/919411721792",
    cta: "Open WhatsApp",
    color: "#16a34a",
    bg: "from-green-50 to-emerald-50",
    border: "border-green-200",
    description: "Quick replies, fast solutions",
  },
];

const perks = [
  "30-minute strategy session",
  "No commitment required",
  "Expert talent advisors",
  "Same-day confirmation",
];

/* ─────────────────────────────────────────────
   FLOATING BADGE COMPONENT
───────────────────────────────────────────── */
function FloatingBadge({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-200 bg-white/80 backdrop-blur-sm text-sm text-gray-600 shadow-sm mb-6"
    >
      <span className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center">
        <Sparkles className="w-3 h-3 text-white" />
      </span>
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   CONTACT CARD COMPONENT
───────────────────────────────────────────── */
function ContactCard({
  option,
  index,
}: {
  option: (typeof contactOptions)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = option.icon;

  return (
    <motion.a
      ref={ref}
      href={option.href}
      target={option.id === "whatsapp" ? "_blank" : undefined}
      rel={option.id === "whatsapp" ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`group relative flex flex-col gap-4 p-6 rounded-2xl border bg-gradient-to-br ${option.bg} ${option.border} overflow-hidden cursor-pointer transition-shadow hover:shadow-xl`}
    >
      {/* Glow blob */}
      <div
        className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ backgroundColor: option.color }}
      />

      <div className="flex items-start justify-between">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm"
          style={{ backgroundColor: option.color + "18" }}
        >
          <Icon className="w-5 h-5" style={{ color: option.color }} />
        </div>
        <motion.div
          className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: option.color }}
          whileHover={{ rotate: 45 }}
        >
          <ArrowRight className="w-4 h-4 text-white" />
        </motion.div>
      </div>

      <div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">
          {option.label}
        </p>
        <p className="text-base font-semibold text-gray-800 font-body">
          {option.value}
        </p>
        <p className="text-xs text-gray-500 mt-1">{option.description}</p>
      </div>

      <div
        className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto"
        style={{ color: option.color }}
      >
        {option.cta}
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.a>
  );
}

/* ─────────────────────────────────────────────
   CALENDLY SECTION
───────────────────────────────────────────── */
function CalendlySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-white"
    >
      {/* Top bar decoration */}
      <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-100 bg-gray-50/80">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs text-gray-500 font-body shadow-sm">
            <Video className="w-3 h-3 text-pink-500" />
            calendly.com/FirstSkout · 30 min call
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-green-600 font-medium">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Live
        </div>
      </div>

      {/* Calendly widget */}
      <div className="h-[680px]">
        <InlineWidget
          url="https://calendly.com/hellofirstskout"
          styles={{ height: "100%", width: "100%" }}
        />
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function AppointmentPage() {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#f8f9fc] overflow-x-hidden">
      {/* ── GRID BACKGROUND (matches your site style) ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,210,240,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,210,240,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── PURPLE GRADIENT BLOB (top right, like your hero) ── */}
      <div
        className="fixed top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(167,139,250,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* ══════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════ */}
        <section ref={heroRef} className="text-center mb-20 mt-3">
          <FloatingBadge>Book Your Free Strategy Session</FloatingBadge>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight mb-6 font-heading"
          >
            Let's Build{" "}
            <span
              className="relative inline-block"
              style={{ color: "#e91e8c" }}
            >
              Something
              {/* Underline squiggle */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M2 8 Q75 2 150 8 Q225 14 298 8"
                  stroke="#e91e8c"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                />
              </svg>
            </span>{" "}
            <br />
            Together.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Schedule a 30-minute web conference with the FirstSkout team — or
            reach us the way that works best for you.
          </motion.p>

          {/* Perks row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap justify-center gap-3 mb-4"
          >
            {perks.map((perk, i) => (
              <motion.div
                key={perk}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.07 }}
                className="flex items-center gap-1.5 text-sm text-gray-600 bg-white/80 border border-gray-200 rounded-full px-3 py-1.5 shadow-sm backdrop-blur-sm"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-pink-500" />
                {perk}
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-gray-400 text-xs mt-8"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </section>

        {/* ══════════════════════════════════════
            MAIN CONTENT — two-column layout
        ══════════════════════════════════════ */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* LEFT — Calendly (wider) */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 mb-5"
            >
              <div className="w-8 h-8 rounded-lg bg-pink-500 flex items-center justify-center shadow">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Pick a Time Slot
                </p>
                <p className="text-xs text-gray-400">
                  30-min web conference · Free
                </p>
              </div>
            </motion.div>
            <CalendlySection />
          </div>

          {/* RIGHT — OR divider + Contact Options */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* OR divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 lg:flex-col lg:items-start"
            >
              <div className="hidden lg:flex items-center gap-3 w-full">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2">
                  Or reach us directly
                </span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <p className="lg:hidden text-xs font-bold text-gray-400 uppercase tracking-widest">
                Or reach us directly
              </p>
            </motion.div>

            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-black text-gray-900 leading-snug font-heading">
                Prefer a <span style={{ color: "#e91e8c" }}>different way</span>{" "}
                to connect?
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Our team is available across multiple channels.
              </p>
            </motion.div>

            {/* Contact cards */}
            <div className="flex flex-col gap-4">
              {contactOptions.map((option, i) => (
                <ContactCard key={option.id} option={option} index={i} />
              ))}
            </div>

            {/* Bottom trust note */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="rounded-2xl bg-gradient-to-br from-pink-50 to-violet-50 border border-pink-100 p-5 flex gap-3 items-start"
            >
              <div className="w-8 h-8 rounded-full bg-pink-500 flex-shrink-0 flex items-center justify-center shadow mt-0.5">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  150+ Partners
                </p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  Trusted by brands & creators across Globe. Our team responds
                  within minutes on WhatsApp.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            BOTTOM — MARQUEE BRAND LINE
        ══════════════════════════════════════ */}
        <div className="mt-28 overflow-hidden border-t border-gray-200 pt-10">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap select-none"
          >
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="text-6xl md:text-8xl font-black text-[#e7e6e2] mr-12 tracking-tight font-heading"
              >
                FirstSkout <span style={{ color: "#e91e8c" }}>✦</span>{" "}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
