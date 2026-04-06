"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaXTwitter as Twitter,
  FaInstagram as Instagram,
  FaYoutube as Youtube,
  FaFacebookF as Facebook,
  FaLinkedinIn as Linkedin,
  FaArrowUpRightFromSquare as ArrowUpRight,
} from "react-icons/fa6";
import { CiMail as Mail } from "react-icons/ci";

const MotionLink = motion.create(Link);

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { icon: Twitter, label: "@FirstSkout", href: "#" },
  { icon: Instagram, label: "@FirstSkout", href: "#" },
  { icon: Linkedin, label: "@FirstSkout", href: "#" },
  { icon: Youtube, label: "@FirstSkout", href: "#" },
  { icon: Facebook, label: "@FirstSkout", href: "#" },
];

const services = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Creators", href: "/creators" },
  { label: "Tools", href: "/tools" },
  { label: "Blog", href: "/blog" },
];

const explore = [
  { label: "Terms & Conditions", href: "/terms-condition" },
  { label: "Privacy Policy", href: "/terms-condition" },
  { label: "Contact", href: "/creators#contact" },
];

export default function Footer() {
  const brandRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!brandRef.current) return;
    const el = brandRef.current;

    // Continuous right-to-left marquee using GSAP
    const totalWidth = el.scrollWidth / 2; // half because we duplicate the text

    gsap.fromTo(
      el,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 12,
        ease: "none",
        repeat: -1, // infinite
      },
    );

    return () => {
      gsap.killTweensOf(el);
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <footer
      ref={footerRef}
      style={{ backgroundColor: "#f0f0f0" }} // ← much lighter background
      className="relative overflow-hidden w-full"
    >
      {/* Top section */}
      <motion.div
        className="px-8 pt-10 pb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Row 1 — Tagline + Contact */}
        <motion.div
          variants={itemVariants}
          className="flex items-start justify-between mb-12"
        >
          <p className="text-[#1a1a1a] text-2xl font-semibold leading-tight max-w-[200px] font-body">
            Where Brands
            <br />
            Meet Creators
          </p>

          <MotionLink
            href="/creators#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 border-2 border-[#1a1a1a] rounded-full px-7 py-3 text-[#1a1a1a] text-xl font-medium bg-transparent hover:bg-[#1a1a1a] hover:text-[#e5e5e5] transition-colors duration-300"
          >
            Contact
          </MotionLink>
        </motion.div>

        {/* Row 2 — Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-[#1a1a1a] font-semibold text-sm mb-4 tracking-wide font-heading">
              Explore
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-[#2a2a2a] text-sm hover:text-black transition-colors duration-200 font-body"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Explore */}
          <motion.div variants={itemVariants}>
            <h3 className="text-[#1a1a1a] font-semibold text-sm mb-4 tracking-wide font-heading">
              Service
            </h3>
            <ul className="space-y-2">
              {explore.map((e) => (
                <li key={e.label}>
                  <Link
                    href={e.href}
                    className="text-[#2a2a2a] text-sm hover:text-black transition-colors duration-200 font-body"
                  >
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Say hello */}
          <motion.div variants={itemVariants}>
            <h3 className="text-[#1a1a1a] font-semibold text-sm mb-4 tracking-wide font-heading">
              Say hello!
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map(({ icon: Icon, label, href }, i) => (
                <MotionLink
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-1.5 bg-black/10 hover:bg-black/20 rounded-full px-3 py-1.5 transition-colors duration-200"
                >
                  <Icon size={13} className="text-[#1a1a1a] shrink-0" />
                  <span className="text-[#1a1a1a] text-[11px] font-medium truncate">
                    {label}
                  </span>
                </MotionLink>
              ))}
            </div>
          </motion.div>

          {/* Creative tools */}
          <motion.div variants={itemVariants}>
            <Link
              href="#"
              className="inline-flex items-center gap-1 text-[#1a1a1a] font-semibold text-sm mb-4 hover:text-black transition-colors font-body"
            >
              Creative tools <ArrowUpRight size={14} />
            </Link>
            <motion.div
              whileHover={{ rotate: 2, scale: 1.03 }}
              className="bg-black/10 rounded-2xl p-3 w-fit"
            >
              <div className="flex gap-2 flex-wrap w-24">
                {[Facebook, Linkedin, Mail, Twitter].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-xl bg-white/80 flex items-center justify-center shadow-sm"
                  >
                    <Icon size={16} className="text-[#1a1a1a]" />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="h-px bg-[#1a1a1a]/20 mx-8" />

      {/* Brand name — single word, GSAP parallax */}
      <div className="overflow-hidden py-2">
        <div ref={brandRef} className="whitespace-nowrap will-change-transform">
          <span
            className="text-[#1a1a1a] font-black select-none font-heading"
            style={{ fontSize: "clamp(80px, 18vw, 200px)", lineHeight: 1 }}
          >
            {/* Duplicate for seamless infinite loop */}
            FirstSkout&nbsp;&nbsp;&nbsp;&nbsp;FirstSkout&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex items-center justify-between px-8 pb-6 pt-2 text-[#2a2a2a] text-xs font-body"
      >
        <span>
          © {new Date().getFullYear()} FirstSkout. All rights reserved.
        </span>
        <span>Made with ♥ by FirstSkout</span>
      </motion.div>
    </footer>
  );
}
