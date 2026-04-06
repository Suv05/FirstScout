"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  FileText,
  ChevronRight,
  Mail,
  ArrowUp,
  Check,
  Lock,
  AlertCircle,
  Users,
  CreditCard,
  Image,
  Gavel,
  RefreshCw,
  Eye,
  Share2,
  Cookie,
  Clock,
  UserCheck,
  ExternalLink,
  MapPin,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const TERMS_SECTIONS = [
  {
    id: "t-intro",
    icon: FileText,
    title: "Introduction",
    content: `Welcome to FirstSkout. By accessing our website or engaging with our services, you agree to comply with these Terms & Conditions. FirstSkout operates as an influencer marketing service unit under a registered entity in India and provides end-to-end campaign execution services.`,
  },
  {
    id: "t-scope",
    icon: Users,
    title: "Scope of Services",
    content: `FirstSkout offers a full-service execution partner experience, managing campaigns from start to finish.`,
    bullets: [
      "Influencer scouting and onboarding",
      "Campaign strategy and planning",
      "Creator coordination and communication",
      "Content briefing and quality guidance",
      "Campaign execution and monitoring",
      "Payment facilitation for creators",
    ],
  },
  {
    id: "t-nature",
    icon: AlertCircle,
    title: "Nature of Services & Performance",
    content: `Influencer marketing outcomes depend on multiple external factors such as platform algorithms, audience behavior, and content performance. While FirstSkout applies strategic and operational expertise, specific outcomes (sales, leads, conversions) are not guaranteed.`,
    bullets: [
      "Efficient coordination",
      "Timely execution",
      "Relevant creator selection",
    ],
    bulletsLabel: "We commit to:",
  },
  {
    id: "t-payments",
    icon: CreditCard,
    title: "Payments & Refunds",
    content: `Campaigns are typically initiated on an upfront payment basis, unless agreed otherwise. Payment structures may vary depending on campaign scope.`,
    subSections: [
      {
        label: "Refund Policy",
        text: "Refunds are handled on a case-by-case basis. In case of creator-related issues, FirstSkout will attempt reasonable resolution (replacement, adjustment, etc.). Any refund decision will consider campaign progress and deliverables. Refunds, if applicable, are at the discretion of FirstSkout, ensuring fair handling for all parties.",
      },
    ],
  },
  {
    id: "t-creator-pay",
    icon: Check,
    title: "Creator Payments",
    content: `FirstSkout manages and facilitates payments to creators across all campaigns, regardless of geography.`,
    bullets: [
      "Smooth execution",
      "Standardized payment handling",
      "Operational efficiency",
    ],
    bulletsLabel: "This ensures:",
  },
  {
    id: "t-content",
    icon: Image,
    title: "Content Usage & Rights",
    content: `Content usage is based on agreed deliverables between brand and creator. Brands may use content for organic/social media purposes.`,
    subSections: [
      {
        label: "Extended usage requiring explicit approval",
        text: "Paid ads, whitelisting, and licensing must be explicitly approved in advance. FirstSkout ensures creator rights are respected and content is not used beyond agreed terms without proper consent. FirstSkout may use content for portfolio and marketing purposes.",
      },
    ],
  },
  {
    id: "t-role",
    icon: Shield,
    title: "Role & Responsibility",
    content: `FirstSkout acts as a campaign execution and coordination partner ensuring structured workflows, creator alignment, and smooth communication.`,
    subSections: [
      {
        label: "Not responsible for",
        text: "Platform-related performance fluctuations, audience engagement variability, and uncontrollable external factors.",
      },
    ],
  },
  {
    id: "t-liability",
    icon: Gavel,
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by law, FirstSkout shall not be liable for campaign performance outcomes, indirect or consequential losses, or third-party/platform-related issues. Liability, if applicable, is limited to the value of services provided.`,
  },
  {
    id: "t-termination",
    icon: RefreshCw,
    title: "Termination",
    content: `Either party may terminate services with 7 days' written notice. Work completed until termination will be billed and ongoing deliverables will be adjusted mutually.`,
  },
  {
    id: "t-data",
    icon: Lock,
    title: "User Data",
    content: `By submitting information through our website, you agree that data provided is accurate and it may be used for communication and service delivery.`,
  },
  {
    id: "t-jurisdiction",
    icon: MapPin,
    title: "Jurisdiction",
    content: `These terms are governed by the laws of India. All disputes fall under the jurisdiction of courts in New Delhi.`,
  },
  {
    id: "t-updates",
    icon: RefreshCw,
    title: "Updates",
    content: `FirstSkout reserves the right to update these Terms at any time. Continued use implies acceptance.`,
  },
];

const PRIVACY_SECTIONS = [
  {
    id: "p-intro",
    icon: Shield,
    title: "Introduction",
    content: `FirstSkout respects your privacy and is committed to protecting your data. This policy explains how we collect, use, and safeguard your information.`,
  },
  {
    id: "p-collect",
    icon: Eye,
    title: "Information We Collect",
    content: `We collect several categories of information to deliver our services effectively.`,
    groups: [
      {
        label: "Personal Information",
        items: ["Name", "Email", "Phone number", "Company details"],
      },
      {
        label: "Business Information",
        items: ["Campaign requirements", "Budget", "Target audience"],
      },
      {
        label: "Technical Data",
        items: ["IP address", "Device & browser info", "Website usage data"],
      },
    ],
  },
  {
    id: "p-use",
    icon: FileText,
    title: "How We Use Data",
    content: `We use your data to:`,
    bullets: [
      "Communicate with you",
      "Understand requirements",
      "Execute campaigns",
      "Improve our services",
    ],
  },
  {
    id: "p-sharing",
    icon: Share2,
    title: "Data Sharing",
    content: `We do not sell your data. We may share limited information with creators (for campaign execution) and service tools/platforms as necessary for delivering our services.`,
  },
  {
    id: "p-protection",
    icon: Lock,
    title: "Data Protection",
    content: `We take reasonable steps to protect your data from unauthorized access or misuse, applying industry-standard security practices.`,
  },
  {
    id: "p-cookies",
    icon: Cookie,
    title: "Cookies",
    content: `We may use cookies to improve user experience and analyze traffic. You can disable cookies via your browser settings at any time.`,
  },
  {
    id: "p-retention",
    icon: Clock,
    title: "Data Retention",
    content: `We retain data only as long as necessary for service delivery and legal compliance.`,
  },
  {
    id: "p-rights",
    icon: UserCheck,
    title: "Your Rights",
    content: `You can request to:`,
    bullets: ["Access your data", "Update or correct it", "Delete your data"],
  },
  {
    id: "p-thirdparty",
    icon: ExternalLink,
    title: "Third-Party Links",
    content: `We are not responsible for external websites linked from our platform. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    id: "p-jurisdiction",
    icon: MapPin,
    title: "Jurisdiction",
    content: `This policy is governed by Indian law with jurisdiction in New Delhi.`,
  },
  {
    id: "p-updates",
    icon: RefreshCw,
    title: "Updates",
    content: `We may update this policy periodically. Continued use implies acceptance of the updated policy.`,
  },
  {
    id: "p-contact",
    icon: Mail,
    title: "Contact",
    content: `For any queries regarding our privacy policy or your data, please reach out to us at hello@FirstSkout.com`,
    isContact: true,
  },
];

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
type Tab = "terms" | "privacy";

interface Section {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  content: string;
  bullets?: string[];
  bulletsLabel?: string;
  subSections?: { label: string; text: string }[];
  groups?: { label: string; items: string[] }[];
  isContact?: boolean;
}

/* ─────────────────────────────────────────────
   SIDEBAR ITEM
───────────────────────────────────────────── */
function SidebarItem({
  section,
  index,
  isActive,
  onClick,
}: {
  section: Section;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = section.icon;
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 group ${
        isActive
          ? "bg-[#d4006e]/10 border border-[#d4006e]/30 text-[#d4006e]"
          : "hover:bg-gray-100 text-gray-500 hover:text-gray-800"
      }`}
    >
      <span
        className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
          isActive
            ? "bg-[#d4006e] text-white"
            : "bg-gray-100 group-hover:bg-gray-200"
        }`}
      >
        <Icon size={13} />
      </span>
      <span className="text-sm font-medium leading-tight font-body">
        {index + 1}. {section.title}
      </span>
      {isActive && (
        <motion.span layoutId="sidebar-arrow" className="ml-auto">
          <ChevronRight size={14} className="text-[#d4006e]" />
        </motion.span>
      )}
    </motion.button>
  );
}

/* ─────────────────────────────────────────────
   SECTION CARD
───────────────────────────────────────────── */
function SectionCard({ section, index }: { section: Section; index: number }) {
  const Icon = section.icon;
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      id={section.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Accent line */}
      <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-[#d4006e] to-[#d4006e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start gap-4">
        {/* Icon badge */}
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4006e]/10 to-[#d4006e]/5 border border-[#d4006e]/15 flex items-center justify-center">
          <Icon size={18} className="text-[#d4006e]" />
        </div>

        <div className="flex-1 min-w-0">
          {/* Number + Title */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-[#d4006e]/60 tracking-widest uppercase">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="h-px flex-1 bg-gray-100" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3 font-heading">
            {section.title}
          </h3>

          {/* Main content */}
          <p className="text-gray-600 text-sm leading-relaxed font-body">
            {section.content}
          </p>

          {/* Bullets */}
          {section.bulletsLabel && (
            <p className="mt-3 text-sm font-semibold text-gray-700 font-body">
              {section.bulletsLabel}
            </p>
          )}
          {section.bullets && (
            <ul className="mt-2 space-y-1.5">
              {section.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-600 font-body"
                >
                  <span className="w-4 h-4 rounded-full bg-[#d4006e]/10 flex items-center justify-center flex-shrink-0">
                    <Check size={9} className="text-[#d4006e]" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          )}

          {/* Sub-sections */}
          {section.subSections?.map((sub, i) => (
            <div
              key={i}
              className="mt-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
            >
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 font-body">
                {sub.label}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed font-body">
                {sub.text}
              </p>
            </div>
          ))}

          {/* Groups */}
          {section.groups && (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {section.groups.map((group, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <p className="text-xs font-bold text-[#d4006e] mb-2 font-body">
                    {group.label}
                  </p>
                  <ul className="space-y-1">
                    {group.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-xs text-gray-600 flex items-center gap-1.5 font-body"
                      >
                        <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Contact */}
          {section.isContact && (
            <a
              href="mailto:hello@FirstSkout.com"
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#d4006e] text-white text-sm font-semibold hover:bg-[#b0005a] transition-colors duration-200"
            >
              <Mail size={14} />
              hello@FirstSkout.com
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function Page() {
  const [activeTab, setActiveTab] = useState<Tab>("terms");
  const [activeSection, setActiveSection] = useState<string>("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const sections = activeTab === "terms" ? TERMS_SECTIONS : PRIVACY_SECTIONS;

  // Track scroll for active section & back-to-top
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      // Find which section is in view
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Reset active section on tab change
  useEffect(() => {
    setActiveSection(sections[0]?.id ?? "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f6f3] font-sans">
      {/* ── GRID TEXTURE ── */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── HERO ── */}
      <div className="relative z-10 overflow-hidden bg-white border-b border-gray-100 py-3">
        {/* Lavender gradient blob */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#ede8f5] to-[#f5e8f0] opacity-60 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-[300px] h-[300px] rounded-full bg-[#d4006e]/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4006e]/20 bg-[#d4006e]/5 text-[#d4006e] text-xs font-semibold tracking-wide mb-6"
          >
            <Gavel size={12} />
            Terms & Privacy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4 font-heading"
          >
            Terms &amp;{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#d4006e]">Policies</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#d4006e]/10 rounded" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-lg max-w-xl font-body"
          >
            Everything you need to know about how FirstSkout works with you —
            your rights, our responsibilities, and how we protect your data.
          </motion.p>

          {/* Tab switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 inline-flex bg-gray-100 rounded-2xl p-1 gap-1"
          >
            {(["terms", "privacy"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 capitalize ${
                  activeTab === tab
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {activeTab === tab && (
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 bg-[#d4006e] rounded-xl"
                    style={{ zIndex: 0 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab === "terms" ? (
                    <FileText size={14} />
                  ) : (
                    <Shield size={14} />
                  )}
                  {tab === "terms" ? "Terms & Conditions" : "Privacy Policy"}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center gap-6 text-sm text-gray-400 font-body"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Last updated: 2026
            </span>
            <span>·</span>
            <span>Governed by Indian Law</span>
            <span>·</span>
            <span>Jurisdiction: New Delhi</span>
          </motion.div>
        </div>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-10">
        <div className="flex gap-8">
          {/* ── SIDEBAR ── */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block w-72 flex-shrink-0"
          >
            <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-2 font-body">
                {activeTab === "terms" ? "Contents" : "Privacy Policy"}
              </p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-1"
                >
                  {sections.map((section, i) => (
                    <SidebarItem
                      key={section.id}
                      section={section as Section}
                      index={i}
                      isActive={activeSection === section.id}
                      onClick={() => scrollToSection(section.id)}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.aside>

          {/* ── CONTENT ── */}
          <div ref={contentRef} className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-5"
              >
                {/* Section header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#d4006e] flex items-center justify-center">
                    {activeTab === "terms" ? (
                      <FileText size={18} className="text-white" />
                    ) : (
                      <Shield size={18} className="text-white" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 font-heading">
                      {activeTab === "terms"
                        ? "Terms & Conditions"
                        : "Privacy Policy"}
                    </h2>
                    <p className="text-sm text-gray-400 font-body">
                      {sections.length} sections · FirstSkout, India
                    </p>
                  </div>
                </div>

                {sections.map((section, i) => (
                  <SectionCard
                    key={section.id}
                    section={section as Section}
                    index={i}
                  />
                ))}

                {/* Footer note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-4 p-6 rounded-2xl bg-gradient-to-br from-[#d4006e]/5 to-[#ede8f5] border border-[#d4006e]/10 text-center"
                >
                  <p className="text-sm text-gray-600 font-body">
                    Questions about our Terms &amp; Policies?{" "}
                    <a
                      href="mailto:hello@FirstSkout.com"
                      className="text-[#d4006e] font-semibold hover:underline"
                    >
                      hello@FirstSkout.com
                    </a>
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── BACK TO TOP ── */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#d4006e] text-white shadow-lg flex items-center justify-center hover:bg-[#b0005a] transition-colors duration-200"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
