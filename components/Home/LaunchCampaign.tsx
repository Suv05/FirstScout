"use client";
import { useState, useEffect } from "react";
import { Rocket } from "lucide-react";
import Link from "next/link";

const LaunchCampaign = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white p-4">
      <div
        className="relative w-full max-w-6xl rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl md:shadow-2xl shadow-[0_-8px_30px_rgba(0,0,0,0.08)]"
        style={{ minHeight: "340px" }}
      >
        {/* LEFT SIDE — replace src with your image path e.g. "/images/hero-left.png" */}
        <div
          className="relative md:w-2/5 w-full"
          style={{ minHeight: "340px" }}
        >
          <img
            src="/logo.png"
            alt="CreatorsMela"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* RIGHT SIDE - Content panel (light with dotted bg + purple glow) */}
        <div className="relative md:w-3/5 w-full flex items-center overflow-hidden">
          {/* Dotted background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#ffffff",
              backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
              backgroundSize: "16px 16px",
              zIndex: 0,
            }}
          />
          {/* Purple glow blob */}
          <div
            className="absolute"
            style={{
              top: 0,
              right: 0,
              height: "420px",
              width: "420px",
              transform: "translate(30%, -20%)",
              borderRadius: "50%",
              background: "rgba(173,109,244,0.5)",
              opacity: 0.5,
              filter: "blur(80px)",
              zIndex: 0,
            }}
          />

          {/* Content */}
          <div
            className="relative z-10 px-8 py-12 md:px-10"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full"
              style={{
                background: "rgba(190,24,93,0.1)",
                border: "1px solid rgba(190,24,93,0.25)",
              }}
            >
              <div
                className="flex items-center justify-center rounded-full p-1"
                style={{ background: "#be185d" }}
              >
                <Rocket size={12} color="#fff" />
              </div>
              <span
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  color: "#be185d",
                  letterSpacing: "0.01em",
                }}
              >
                Launch Your Campaign
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                color: "#0f0f0f",
                lineHeight: 1.2,
                marginBottom: "0.2rem",
              }}
            >
              Launch Your Campaign with{" "}
              <span style={{ color: "#0f0f0f" }}>FirstScout</span>
            </h1>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 700,
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                lineHeight: 1.2,
                marginBottom: "1.2rem",
              }}
              className="bg-gradient-to-r from-[#ec4899] to-[#be185d] bg-clip-text text-transparent"
            >
              In a Minutes of Time!
            </h2>

            {/* Divider */}
            <div
              style={{
                width: "48px",
                height: "2px",
                background: "linear-gradient(90deg, #be185d, #a855f7)",
                borderRadius: "2px",
                marginBottom: "1.2rem",
              }}
            />

            {/* Description */}
            <p
              style={{
                fontSize: "0.9rem",
                color: "#4b5563",
                lineHeight: 1.7,
                maxWidth: "420px",
                marginBottom: "1.8rem",
              }}
            >
              Build your brand with CreatorsMela's expert team—effortless
              website creation, strategic content, and confidence-driven
              results. Ready to elevate your presence? Let's get started today!
            </p>

            {/* CTA row */}
            <div className="flex items-center gap-6 flex-wrap">
              <Link href={"/appointment"}>
                <button
                  style={{
                    background: "#be185d",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "0.92rem",
                    padding: "12px 26px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 20px rgba(190,24,93,0.35)",
                    transition: "transform 0.15s ease, box-shadow 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 28px rgba(190,24,93,0.45)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(190,24,93,0.35)";
                  }}
                >
                  Book an Appointment
                </button>
              </Link>
              <div className="flex items-center gap-2">
                <div
                  style={{
                    width: "1px",
                    height: "32px",
                    background: "#d1d5db",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "#6b7280",
                  }}
                >
                  200+ Agencies Rated
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchCampaign;
