"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

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
    pin: {
      label: "#trend",
      color: "bg-blue-500",
      textColor: "text-white",
      tipSide: "right-[25px]",
    },
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
      tipSide: "left-[23px]",
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

export default function FloatingImage() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;

      gsap.to(el, {
        y: i % 2 === 0 ? -6 : 6,
        duration: 2.5 + i * 0.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <div className="hidden lg:block relative w-[184px] h-[184px] flex-shrink-0 mt-3">
      {GALLERY_IMAGES.map((img, i) => (
        <motion.div
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: i * 0.1,
            ease: "easeOut",
          }}
          className={`absolute w-[184px] h-[184px] ${img.zIndex} overflow-visible ${IMAGE_POSITIONS[i]}`}
        >
          {/* Pin badge */}
          {img.pin && (
            <div
              className={`absolute flex items-center gap-1 px-[10px] py-[6px] rounded-[15px] ${img.pin.color} z-20`}
              style={{ top: "-38px", right: "10px" }}
            >
              <span
                className={`text-[14px] font-semibold ${img.pin.textColor}`}
              >
                {img.pin.label}
              </span>

              <div
                className={`absolute w-[10px] h-[10px] ${img.pin.color} rotate-45`}
                style={{
                  bottom: "-4px",
                  [img.pin.tipSide.startsWith("right") ? "right" : "left"]:
                    "20px",
                }}
              />
            </div>
          )}

          {/* Image */}
          <div
            className={`relative w-full h-full ${img.rounded} ${img.rotate} overflow-hidden`}
          >
            <Image
              src={img.src}
              alt={img.alt ?? `Creator ${i + 1}`}
              fill
              sizes="184px"
              priority={i === 3}
              className="object-cover"
              draggable={false}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
