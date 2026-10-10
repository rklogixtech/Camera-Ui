// last section of my home page 
import React, { useState, useEffect, useRef } from "react";

/**
 * NIKON — Proven in the Field
 * "Flight Deck": a dark accordion log on the left, and a persistent
 * animated HUD on the right — concentric focus rings, AF-lock brackets,
 * an orbiting telemetry dot, and a readout line — that reacts to
 * whichever entry is open. Built for the strip just above the footer.
 */

const ITEMS = [
  {
    date: "Jan 2024",
    title: "13 bodies to orbit",
    tag: "LAUNCH",
    accent: "#FF7A29",
    telemetry: "ALT 408 KM · VEL 27,600 KM/H",
    body:
      "Thirteen unmodified Z9 cameras rode to the International Space Station aboard a Northrop Grumman resupply mission, retiring three generations of Nikon SLRs that had served the crew since 2017.",
  },
  {
    date: "Feb 2024",
    title: "Built for the Moon",
    tag: "CONTRACT",
    accent: "#6FA8DC",
    telemetry: "DIST 384,400 KM · LUNAR SURFACE",
    body:
      "NASA and Nikon signed on to build the Handheld Universal Lunar Camera — a modified Z9 with thermal shielding for Artemis III, the first handheld camera designed to work on the lunar surface.",
  },
  {
    date: "2026",
    title: "Tested in deep space",
    tag: "IN FLIGHT",
    accent: "#B073FF",
    telemetry: "RAD +140% BASELINE · ARTEMIS II",
    body:
      "A Z9 flew aboard Artemis II to log how the platform holds up in a high-radiation, deep-space environment ahead of the crewed lunar flyby.",
  },
  {
    date: "2021–23",
    title: "Recognition",
    tag: "CITATION",
    accent: "#D9B24C",
    telemetry: "6 CITATIONS · 2021–2023",
    body:
      "Camera Grand Prix (2022), Red Dot — Best of the Best (2022), EISA Camera of the Year (2022–23), DPReview Product of the Year (2021), TIPA World Award for Best Pro Full-Frame (2022), and an iF Design Award (2022).",
  },
];

export default function NikonTrustFlightDeck() {
  const [openIndex, setOpenIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const active = ITEMS[openIndex] ?? ITEMS[0];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#08070A] pt-20 pb-24 lg:pt-28 lg:pb-28 overflow-hidden"
      style={{ "--accent": active.accent }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        .fd { font-family: 'Sora', sans-serif; }
        .fd-mono { font-family: 'JetBrains Mono', monospace; }

        .fd-row{
          display:grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .5s cubic-bezier(.22,.9,.3,1);
        }
        .fd-row.open{ grid-template-rows: 1fr; }
        .fd-row > div{ overflow:hidden; }

        .fd-plus{ transition: transform .4s cubic-bezier(.22,.9,.3,1), border-color .3s ease, color .3s ease; }
        .fd-plus.open{ transform: rotate(135deg); }

        .fd-item{
          opacity:0;
          transform: translateY(14px);
          transition: opacity .6s ease, transform .6s ease;
        }
        .fd-item.show{ opacity:1; transform: translateY(0); }

        .fd-title{ transition: color .3s ease; }
        .fd-header:hover .fd-title{ color: var(--accent); }
        .fd-header:hover .fd-plus{ border-color: var(--accent); color: var(--accent); }

        @keyframes fd-spin { to { transform: rotate(360deg); } }
        @keyframes fd-spin-rev { to { transform: rotate(-360deg); } }
        .fd-ring-outer{ animation: fd-spin 34s linear infinite; transform-origin: 50% 50%; }
        .fd-ring-ticks{ animation: fd-spin-rev 60s linear infinite; transform-origin: 50% 50%; }

        @keyframes fd-orbit{
          0%   { transform: translate(0px, -78px); }
          25%  { transform: translate(78px, 0px); }
          50%  { transform: translate(0px, 78px); }
          75%  { transform: translate(-78px, 0px); }
          100% { transform: translate(0px, -78px); }
        }
        .fd-orbit-dot{ animation: fd-orbit 7s linear infinite; }

        @keyframes fd-lock-in{
          0% { opacity:0; transform: scale(1.4); }
          60% { opacity:1; }
          100% { opacity:1; transform: scale(1); }
        }
        .fd-bracket{ animation: fd-lock-in .55s cubic-bezier(.2,.8,.2,1) both; }

        @keyframes fd-pulse{
          0%, 100% { opacity:0.35; }
          50% { opacity:0.9; }
        }
        .fd-pulse{ animation: fd-pulse 2.4s ease-in-out infinite; }

        .fd-hud-label{ transition: color .35s ease; }

        @media (prefers-reduced-motion: reduce){
          .fd-ring-outer, .fd-ring-ticks, .fd-orbit-dot, .fd-bracket, .fd-pulse{ animation:none !important; }
        }
      `}</style>

      {/* faint vignette for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 78% 45%, rgba(255,255,255,0.05), transparent 55%)",
        }}
      />

      <div className="fd relative max-w-[1220px] mx-auto px-6">
        <div className={`fd-item ${inView ? "show" : ""}`}>
          <div className="fd-mono text-[10.5px] tracking-[0.18em] mb-4" style={{ color: "var(--accent)", transition: "color .35s ease" }}>
            MISSION LOG — PROVEN IN THE FIELD
          </div>
          <h2 className="text-[#F4F4F2] text-3xl lg:text-[2.5rem] font-semibold tracking-[-0.02em] leading-[1.12] mb-14 max-w-lg">
            Trusted where focus cannot fail.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_auto] gap-16 items-start">
          {/* ---- accordion log ---- */}
          <div className="border-t border-[#211F24]">
            {ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`fd-item ${inView ? "show" : ""} border-b border-[#211F24]`}
                  style={{ transitionDelay: `${(i + 1) * 90}ms` }}
                >
                  <button
                    className="fd-header w-full flex items-center justify-between gap-6 py-6 text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-baseline gap-5 sm:gap-7">
                      <span className="fd-mono text-[#57545C] text-[12px] w-[56px] shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="fd-title text-[#F4F4F2] text-[18px] lg:text-[20px] font-medium">
                        {item.title}
                      </span>
                    </span>
                    <span className="flex items-center gap-4 shrink-0">
                      <span className="fd-mono hidden sm:inline text-[#57545C] text-[11px]">{item.date}</span>
                      <span
                        className={`fd-plus ${isOpen ? "open" : ""} w-6 h-6 rounded-full border border-[#3A3740] text-[#8A868F] flex items-center justify-center text-[15px] leading-none`}
                      >
                        +
                      </span>
                    </span>
                  </button>

                  <div className={`fd-row ${isOpen ? "open" : ""}`}>
                    <div>
                      <p className="fd-mono text-[10px] tracking-[0.1em] mb-3 pl-0 sm:pl-[76px]" style={{ color: item.accent }}>
                        {item.tag}
                      </p>
                      <p className="text-[#A6A3AA] text-[15px] leading-relaxed pb-7 pl-0 sm:pl-[76px] max-w-[54ch]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ---- flight-deck HUD ---- */}
          <div className="hidden lg:flex flex-col items-center pt-2">
            <svg width="280" height="280" viewBox="0 0 280 280">
              <g className="fd-ring-outer">
                <circle
                  cx="140" cy="140" r="126"
                  fill="none" stroke={active.accent} strokeWidth="1.2"
                  strokeDasharray="1 9"
                  style={{ transition: "stroke .4s ease" }}
                />
              </g>

              <circle cx="140" cy="140" r="108" fill="none" stroke="#26232B" strokeWidth="1" />

              <g className="fd-ring-ticks">
                {Array.from({ length: 24 }).map((_, i) => (
                  <line
                    key={i}
                    x1="140" y1="20" x2="140" y2={i % 6 === 0 ? "32" : "27"}
                    stroke="#3A3740" strokeWidth="1"
                    transform={`rotate(${i * 15} 140 140)`}
                  />
                ))}
              </g>

              {/* orbiting telemetry dot */}
              <g transform="translate(140 140)">
                <circle r="78" fill="none" stroke="#211F24" strokeWidth="1" />
                <circle
                  key={`orbit-${openIndex}`}
                  className="fd-orbit-dot"
                  r="3.2"
                  fill={active.accent}
                  style={{ transition: "fill .4s ease" }}
                />
              </g>

              {/* AF-lock brackets, replay on change via key */}
              <g key={`brackets-${openIndex}`} stroke={active.accent} strokeWidth="2" fill="none" style={{ transition: "stroke .4s ease" }}>
                <path className="fd-bracket" d="M 92 92 h 16 M 92 92 v 16" style={{ animationDelay: "0ms" }} />
                <path className="fd-bracket" d="M 188 92 h -16 M 188 92 v 16" style={{ animationDelay: "60ms" }} />
                <path className="fd-bracket" d="M 92 188 h 16 M 92 188 v -16" style={{ animationDelay: "120ms" }} />
                <path className="fd-bracket" d="M 188 188 h -16 M 188 188 v -16" style={{ animationDelay: "180ms" }} />
              </g>

              <circle className="fd-pulse" cx="140" cy="140" r="2.4" fill={active.accent} style={{ transition: "fill .4s ease" }} />
            </svg>

            <div className="text-center mt-6">
              <div className="fd-mono text-[10px] tracking-[0.14em] text-[#57545C] mb-1">STATUS</div>
              <div className="fd-hud-label fd-mono text-[13px]" style={{ color: active.accent }}>
                LOCKED — {active.tag}
              </div>
              <div className="fd-mono text-[11px] text-[#6B6870] mt-3">{active.telemetry}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}