"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Creators", href: "#" },
  { label: "Tools", href: "#" },
  { label: "Blog", href: "#" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  // GSAP entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        logoRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.7 }
      )
        .fromTo(
          navRef.current?.querySelectorAll("a") ?? [],
          { opacity: 0, y: -16 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.3"
        )
        .fromTo(
          btnRef.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.6 },
          "-=0.4"
        );
    }, headerRef);
    return () => ctx.revert();
  }, []);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 pt-4"
    >
      <div
        style={{ backgroundColor: "rgba(240,240,240,0.72)" }}
        className={`mx-auto rounded-2xl px-4 sm:px-6 lg:px-10 transition-all duration-300 backdrop-blur-lg backdrop-saturate-150 ring-1 ring-black/8 ${
          scrolled
            ? "shadow-[0_8px_40px_rgba(0,0,0,0.18)]"
            : "shadow-[0_4px_28px_rgba(0,0,0,0.10)]"
        }`}
      >
        <div className="flex items-center justify-between h-14 md:h-16">

          {/* ── Brand ── */}
          <div ref={logoRef} className="flex items-center gap-2 opacity-0">
            {/* Logo mark */}
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-8 h-8 rounded-full bg-black flex items-center justify-center"
            >
              <span className="text-white text-xs font-black tracking-tight">FS</span>
            </motion.div>
            <span className="text-black font-extrabold text-xl tracking-tight select-none">
              FirstScout
            </span>
          </div>

          {/* ── Desktop Nav ── */}
          <nav
            ref={navRef}
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className="relative px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200 group opacity-0"
              >
                {link.label}
                {/* animated underline */}
                <span
                  className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-black origin-left transition-transform duration-300 ${
                    activeLink === link.label
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* ── CTA Button ── */}
          <div ref={btnRef} className="hidden md:flex opacity-0">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                className="rounded-full bg-black text-white hover:bg-gray-800 text-sm font-semibold px-5 py-2 h-auto flex items-center gap-1.5 transition-colors duration-200"
              >
                Get in Touch
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </Button>
            </motion.div>
          </div>

          {/* ── Mobile Hamburger ── */}
          <motion.button
            whileTap={{ scale: 0.88 }}
            className="md:hidden p-2 rounded-lg text-black hover:bg-black/5 transition-colors"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
            style={{ backgroundColor: "#f0f0f0" }}
            className="md:hidden overflow-hidden border-t border-black/10 rounded-2xl mt-2 mx-2"
          >
            <nav className="flex flex-col px-5 py-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.28 }}
                  onClick={() => {
                    setActiveLink(link.label);
                    setMenuOpen(false);
                  }}
                  className={`px-3 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                    activeLink === link.label
                      ? "bg-black text-white"
                      : "text-gray-700 hover:bg-black/5 hover:text-black"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 + 0.05 }}
                className="mt-3"
              >
                <Button
                  className="w-full rounded-full bg-black text-white hover:bg-gray-800 text-sm font-semibold flex items-center justify-center gap-1.5 h-11"
                  onClick={() => setMenuOpen(false)}
                >
                  Get in Touch
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}