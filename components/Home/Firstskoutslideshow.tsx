"use client";

import { useEffect, useRef } from "react";

const scenes = [
  {
    id: "sc1",
    dur: 3800,
    animations: [
      { elId: "a1", delay: 200, anim: "tyU 0.8s ease-out forwards" },
      { elId: "a2", delay: 700, anim: "tyU 0.7s ease-out forwards" },
    ],
  },
  {
    id: "sc2",
    dur: 3500,
    animations: [
      { elId: "b1", delay: 200, anim: "tyU 0.8s ease-out forwards" },
      { elId: "b2", delay: 650, anim: "tyU 0.7s ease-out forwards" },
    ],
  },
  {
    id: "sc3",
    dur: 4200,
    animations: [
      { elId: "c1", delay: 200, anim: "tyU 0.8s ease-out forwards" },
      { elId: "c2", delay: 800, anim: "cU 0.5s ease-out forwards" },
      { elId: "c3", delay: 1000, anim: "cU 0.5s ease-out forwards" },
      { elId: "c4", delay: 1200, anim: "cU 0.5s ease-out forwards" },
      { elId: "c5", delay: 1400, anim: "cU 0.5s ease-out forwards" },
    ],
  },
  {
    id: "sc4",
    dur: 4000,
    animations: [
      { elId: "d1", delay: 200, anim: "tyU 0.8s ease-out forwards" },
      { elId: "d2", delay: 700, anim: "cU 0.6s ease-out forwards" },
      { elId: "d3", delay: 1100, anim: "cU 0.6s ease-out forwards" },
    ],
  },
  {
    id: "sc5",
    dur: 4500,
    animations: [
      { elId: "e1", delay: 200, anim: "tyU 0.8s ease-out forwards" },
      { elId: "e2", delay: 700, anim: "cU 0.4s ease-out forwards" },
      { elId: "e3", delay: 880, anim: "cU 0.3s ease-out forwards" },
      { elId: "e4", delay: 1060, anim: "cU 0.4s ease-out forwards" },
      { elId: "e5", delay: 1240, anim: "cU 0.3s ease-out forwards" },
      { elId: "e6", delay: 1420, anim: "cU 0.4s ease-out forwards" },
      { elId: "e7", delay: 1600, anim: "cU 0.3s ease-out forwards" },
      { elId: "e8", delay: 1780, anim: "cU 0.4s ease-out forwards" },
      { elId: "e9", delay: 1960, anim: "cU 0.3s ease-out forwards" },
      { elId: "e10", delay: 2140, anim: "cU 0.4s ease-out forwards" },
    ],
  },
  {
    id: "sc6",
    dur: 4000,
    animations: [
      { elId: "f1", delay: 200, anim: "tyU 0.8s ease-out forwards" },
      { elId: "f2", delay: 650, anim: "tyU 0.7s ease-out forwards" },
      { elId: "f3", delay: 1100, anim: "cU 0.6s ease-out forwards" },
    ],
  },
];

export default function FirstSkoutSlideshow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const totalDuration = scenes.reduce((acc, s) => acc + s.dur, 0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const getEl = (id: string) =>
      container.querySelector<HTMLElement>(`[data-id="${id}"]`);

    const clearTimers = () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };

    const addTimer = (fn: () => void, delay: number) => {
      const t = setTimeout(fn, delay);
      timersRef.current.push(t);
      return t;
    };

    const resetScene = (scene: (typeof scenes)[0]) => {
      const el = getEl(scene.id);
      if (!el) return;
      el.classList.remove("active");
      el.style.transition = "none";
      scene.animations.forEach(({ elId }) => {
        const ae = getEl(elId);
        if (ae) {
          ae.style.animation = "none";
          ae.style.opacity = "0";
        }
      });
    };

    const playScene = (index: number) => {
      const scene = scenes[index];
      const el = getEl(scene.id);
      if (!el) return;

      const cnt = countRef.current;
      if (cnt) cnt.textContent = `0${index + 1} / 0${scenes.length}`;

      el.style.transition = "opacity 0.6s ease-in";
      el.classList.add("active");

      scene.animations.forEach(({ elId, delay, anim }) => {
        addTimer(() => {
          const ae = getEl(elId);
          if (ae) {
            ae.style.animation = anim;
            ae.style.opacity = "1";
          }
        }, delay);
      });

      addTimer(() => {
        el.style.transition = "opacity 0.5s ease-out";
        el.classList.remove("active");
        addTimer(() => {
          resetScene(scene);
          const next = (index + 1) % scenes.length;
          playScene(next);
        }, 550);
      }, scene.dur);
    };

    const animateBar = () => {
      const bar = barRef.current;
      if (!bar) return;
      bar.style.transition = "none";
      bar.style.width = "0%";
      void bar.offsetWidth;
      bar.style.transition = `width ${totalDuration}ms linear`;
      bar.style.width = "100%";
    };

    const go = () => {
      clearTimers();
      scenes.forEach(resetScene);
      animateBar();
      playScene(0);
      addTimer(go, totalDuration + 600);
    };

    const startTimer = setTimeout(go, 300);

    return () => {
      clearTimeout(startTimer);
      clearTimers();
    };
  }, [totalDuration]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        .fsk-wrap * { margin: 0; padding: 0; box-sizing: border-box; }

        .fsk-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 340px;
          overflow: hidden;
          background: #faf9f7;
          font-family: 'Outfit', sans-serif;
        }

        .fsk-scene {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
        }
        .fsk-scene.active {
          opacity: 1;
          pointer-events: auto;
        }

        .fsk-vig {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 50%, rgba(250,249,247,0.7) 100%);
          z-index: 40;
          pointer-events: none;
        }

        .fsk-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #c87adb, #c83c78);
          z-index: 60;
          border-radius: 0 2px 0 0;
        }

        .fsk-cnt {
          position: absolute;
          top: 14px;
          right: 16px;
          font-size: 10px;
          color: rgba(0,0,0,0.2);
          z-index: 55;
          letter-spacing: 1.5px;
          font-weight: 500;
        }

        .fsk-logo {
          position: absolute;
          top: 14px;
          left: 16px;
          z-index: 55;
          display: flex;
          align-items: center;
        }

        .fsk-logo-txt {
          font-size: 15px;
          font-weight: 600;
          color: rgba(0,0,0,0.45);
          letter-spacing: -0.3px;
        }

        .fsk-logo-icon {
          width: 20px;
          height: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0 -1px;
        }

        .fsk-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 1;
          pointer-events: none;
        }

        .fsk-st {
          color: #1a1a1a;
          text-align: center;
          padding: 0 36px;
          position: relative;
          z-index: 10;
        }

        .fsk-sb {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 4vw, 36px);
          font-weight: 700;
          line-height: 1.15;
          opacity: 0;
          color: #1a1a1a;
        }

        .fsk-ss {
          font-size: clamp(11px, 1.5vw, 14px);
          color: rgba(0,0,0,0.4);
          margin-top: 12px;
          font-weight: 300;
          letter-spacing: 0.3px;
          opacity: 0;
        }

        .fsk-ac { color: #c83c78; font-style: italic; }
        .fsk-ac2 { color: #b44ddb; }
        .fsk-ac3 { color: #1d9e75; }

        @keyframes tyU {
          0%   { opacity: 0; transform: translateY(28px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes cU {
          0%   { opacity: 0; transform: scale(0.85); }
          50%  { opacity: 1; transform: scale(1.04); }
          100% { opacity: 1; transform: scale(1); }
        }

        /* Orbs — all with position:absolute and border-radius:50% here */
        .fsk-orb {
          position: absolute;
          border-radius: 50%;
          opacity: 0.06;
        }

        .fsk-orb1 {
          width: 50%;
          height: 50%;
          background: #c87adb;
          top: -15%;
          right: -10%;
          animation: dr1 8s ease-in-out infinite;
        }
        .fsk-orb2 {
          width: 35%;
          height: 35%;
          background: #c83c78;
          bottom: -10%;
          left: -5%;
          animation: dr2 10s ease-in-out infinite;
        }
        .fsk-orb3 {
          width: 25%;
          height: 25%;
          background: #1d9e75;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: dr3 12s ease-in-out infinite;
        }
        .fsk-orb4 {
          width: 45%;
          height: 45%;
          background: #c87adb;
          top: -10%;
          left: 55%;
          animation: dr1 9s ease-in-out infinite;
        }

        @keyframes dr1 {
          0%, 100% { transform: translate(0,0); }
          50%       { transform: translate(-18px,12px); }
        }
        @keyframes dr2 {
          0%, 100% { transform: translate(0,0); }
          50%       { transform: translate(12px,-16px); }
        }
        @keyframes dr3 {
          0%, 100% { transform: translate(-50%,-50%) scale(1); }
          50%       { transform: translate(-50%,-50%) scale(1.15); }
        }

        /* Scene 3 cards */
        .fsk-cards {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-top: 22px;
          flex-wrap: wrap;
        }
        .fsk-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 12px;
          padding: 12px;
          text-align: center;
          width: 80px;
          opacity: 0;
        }
        .fsk-card-ico {
          width: 34px; height: 34px;
          border-radius: 9px;
          margin: 0 auto 7px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .fsk-card-lbl {
          font-size: 11px;
          color: rgba(0,0,0,0.4);
          font-weight: 500;
        }

        /* Scene 4 stats */
        .fsk-stats {
          display: flex;
          gap: 32px;
          justify-content: center;
          margin-top: 18px;
          flex-wrap: wrap;
        }
        .fsk-stat {
          text-align: center;
          opacity: 0;
        }
        .fsk-stat-n {
          font-family: 'Playfair Display', serif;
          font-size: clamp(24px, 4vw, 34px);
          font-weight: 700;
          color: #1a1a1a;
        }
        .fsk-stat-l {
          font-size: 10px;
          color: rgba(0,0,0,0.3);
          margin-top: 3px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        /* Scene 5 steps */
        .fsk-steps {
          display: flex;
          gap: 6px;
          align-items: center;
          justify-content: center;
          margin-top: 22px;
          flex-wrap: wrap;
        }
        .fsk-step {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 9px;
          padding: 6px 11px;
          font-size: 11px;
          color: rgba(0,0,0,0.5);
          opacity: 0;
        }
        .fsk-arr {
          color: rgba(0,0,0,0.15);
          font-size: 13px;
          opacity: 0;
        }

        /* Scene 6 CTA */
        .fsk-cta { margin-top: 22px; opacity: 0; }
        .fsk-btn {
          display: inline-block;
          background: linear-gradient(135deg, #c83c78, #a02060);
          color: #fff;
          padding: 12px 26px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.4px;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          border: none;
        }
      `}</style>

      <div className="fsk-wrap" ref={containerRef}>
        <div className="fsk-grid" />
        <div className="fsk-vig" />

        {/* Logo */}
        <div className="fsk-logo">
          <span className="fsk-logo-txt">FirstSk</span>
          <span className="fsk-logo-icon">
            <svg viewBox="0 0 26 26" fill="none" width="20" height="20">
              <circle cx="13" cy="13" r="10.5" stroke="#c87adb" strokeWidth="2.2" />
              <circle cx="13" cy="13" r="5.8" stroke="#c87adb" strokeWidth="2" />
              <circle cx="13" cy="13" r="2" fill="#c87adb" />
            </svg>
          </span>
          <span className="fsk-logo-txt">ut</span>
        </div>

        {/* Counter */}
        <div className="fsk-cnt" ref={countRef}>01 / 06</div>

        {/* Progress bar */}
        <div className="fsk-bar" ref={barRef} />

        {/* Scene 1 */}
        <div className="fsk-scene" data-id="sc1">
          <div style={{ position: "absolute", inset: 0 }}>
            <div className="fsk-orb fsk-orb1" />
            <div className="fsk-orb fsk-orb2" />
            <div className="fsk-orb fsk-orb3" />
          </div>
          <div className="fsk-st">
            <div className="fsk-sb" data-id="a1">
              Your brand deserves<br />
              <span className="fsk-ac">more than guesswork.</span>
            </div>
            <div className="fsk-ss" data-id="a2">
              No outdated lists. No middlemen. Just results.
            </div>
          </div>
        </div>

        {/* Scene 2 */}
        <div className="fsk-scene" data-id="sc2">
          <div style={{ position: "absolute", inset: 0 }}>
            <div className="fsk-orb fsk-orb4" />
          </div>
          <div className="fsk-st">
            <div className="fsk-sb" data-id="b1">
              We <span className="fsk-ac2">scout</span> creators<br />
              who actually fit.
            </div>
            <div className="fsk-ss" data-id="b2">
              Right niche. Right audience. Right energy.
            </div>
          </div>
        </div>

        {/* Scene 3 */}
        <div className="fsk-scene" data-id="sc3">
          <div className="fsk-st">
            <div className="fsk-sb" data-id="c1">
              Strategy. Content.<br />
              <span className="fsk-ac3">Execution.</span>
            </div>
            <div className="fsk-cards">
              <div className="fsk-card" data-id="c2">
                <div className="fsk-card-ico" style={{ background: "rgba(200,60,120,0.08)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c83c78" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="fsk-card-lbl">Campaign</div>
              </div>
              <div className="fsk-card" data-id="c3">
                <div className="fsk-card-ico" style={{ background: "rgba(200,122,219,0.08)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c87adb" strokeWidth="2" strokeLinecap="round">
                    <path d="M23 7l-7 5 7 5V7z" />
                    <rect x="1" y="5" width="15" height="14" rx="2" />
                  </svg>
                </div>
                <div className="fsk-card-lbl">UGC</div>
              </div>
              <div className="fsk-card" data-id="c4">
                <div className="fsk-card-ico" style={{ background: "rgba(29,158,117,0.08)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1d9e75" strokeWidth="2" strokeLinecap="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="fsk-card-lbl">Creators</div>
              </div>
              <div className="fsk-card" data-id="c5">
                <div className="fsk-card-ico" style={{ background: "rgba(239,159,39,0.08)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d48a15" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 20V10" />
                    <path d="M12 20V4" />
                    <path d="M6 20v-6" />
                  </svg>
                </div>
                <div className="fsk-card-lbl">Analytics</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scene 4 */}
        <div className="fsk-scene" data-id="sc4">
          <div className="fsk-st">
            <div className="fsk-sb" data-id="d1">
              The numbers<br />
              <span className="fsk-ac">speak louder.</span>
            </div>
            <div className="fsk-stats">
              <div className="fsk-stat" data-id="d2">
                <div className="fsk-stat-n">50K+</div>
                <div className="fsk-stat-l">Worldwide creators</div>
              </div>
              <div className="fsk-stat" data-id="d3">
                <div className="fsk-stat-n">1500+</div>
                <div className="fsk-stat-l">Creators we&apos;ve worked with</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scene 5 */}
        <div className="fsk-scene" data-id="sc5">
          <div className="fsk-st">
            <div className="fsk-sb" data-id="e1">
              How we <span className="fsk-ac2">work.</span>
            </div>
            <div className="fsk-steps">
              <div className="fsk-step" data-id="e2">Scout</div>
              <div className="fsk-arr" data-id="e3">&rarr;</div>
              <div className="fsk-step" data-id="e4">Strategize</div>
              <div className="fsk-arr" data-id="e5">&rarr;</div>
              <div className="fsk-step" data-id="e6">Brief</div>
              <div className="fsk-arr" data-id="e7">&rarr;</div>
              <div className="fsk-step" data-id="e8">Execute</div>
              <div className="fsk-arr" data-id="e9">&rarr;</div>
              <div className="fsk-step" data-id="e10">Deliver</div>
            </div>
          </div>
        </div>

        {/* Scene 6 */}
        <div className="fsk-scene" data-id="sc6">
          <div style={{ position: "absolute", inset: 0 }}>
            <div className="fsk-orb fsk-orb1" />
            <div className="fsk-orb fsk-orb2" />
          </div>
          <div className="fsk-st">
            <div className="fsk-sb" data-id="f1">
              Ready to<br />
              <span className="fsk-ac">dominate?</span>
            </div>
            <div className="fsk-ss" data-id="f2">
              You focus on your brand. We handle the rest.
            </div>
            <div className="fsk-cta" data-id="f3">
              <button className="fsk-btn">Start your campaign</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}