//hero section
import React, { useState, useEffect, useRef } from "react";

/**
 * NIKON — Viewfinder Slider (v2)
 * Shorter than a full 100vh hero so it reads as a section, not a wall.
 * Same "you're looking through the Z9" concept, tightened: smaller HUD,
 * a thumbnail rail replacing bare f-stop dots, and copy sized to fit
 * comfortably inside a fixed-height frame instead of vh-driven type.
 */

const SLIDES = [
  {
    id: "z9",
    name: "Z9",
    tag: "The flagship. Unstoppable.",
    fstop: "ƒ/1.2",
    shutter: "1/8000s",
    iso: "ISO 100",
    img: "/home/hero1.jpg",
  },
  {
    id: "z8",
    name: "Z8",
    tag: "All the power. Half the weight.",
    fstop: "ƒ/1.8",
    shutter: "1/4000s",
    iso: "ISO 200",
    img: "/home/hero2.jpg",
  },
  {
    id: "zf",
    name: "Zf",
    tag: "Heritage, rewired.",
    fstop: "ƒ/2.8",
    shutter: "1/500s",
    iso: "ISO 400",
    img: "/home/hero3.jpg",
  },
];

const SLIDE_DURATION = 6000;

export default function NikonViewfinderSlider() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const pausedRef = useRef(false);

  const goTo = (i) => {
    setIndex((i + SLIDES.length) % SLIDES.length);
    setProgress(0);
    startRef.current = null;
  };

  useEffect(() => {
    const tick = (t) => {
      if (pausedRef.current) {
        startRef.current = null;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      if (startRef.current === null) startRef.current = t;
      const elapsed = t - startRef.current;
      const pct = Math.min(elapsed / SLIDE_DURATION, 1);
      setProgress(pct);
      if (pct >= 1) {
        setIndex((prev) => (prev + 1) % SLIDES.length);
        startRef.current = t;
        setProgress(0);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const slide = SLIDES[index];

  return (
    <section
      className="relative w-full h-[78vh] min-h-[460px] max-h-[680px] bg-[#0B0B0C] overflow-hidden select-none"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .font-body { font-family: 'Inter', sans-serif; }

        @keyframes ken-burns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.08); }
        }
        .ken-burns { animation: ken-burns 6.5s linear both; }

        @keyframes reticle-breathe {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.08); }
        }
        .reticle { animation: reticle-breathe 2.8s ease-in-out infinite; }

        @keyframes rec-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
        .rec-dot { animation: rec-blink 1.6s ease-in-out infinite; }

        @keyframes copy-in {
          0% { opacity: 0; transform: translateY(14px); filter: blur(5px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .copy-in { animation: copy-in 650ms cubic-bezier(0.16,1,0.3,1) both; }

        .slide-fade { transition: opacity 700ms ease; }

        .thumb-active { outline: 1.5px solid #FFE300; outline-offset: 2px; }
      `}</style>

      {/* ---- full-bleed photos ---- */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className="slide-fade absolute inset-0"
          style={{ opacity: i === index ? 1 : 0, zIndex: i === index ? 1 : 0 }}
        >
          <img
            src={s.img}
            alt={s.name}
            className={`w-full h-full object-cover ${i === index ? "ken-burns" : ""}`}
          />
        </div>
      ))}

      {/* legibility gradient */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,11,12,0.6) 0%, rgba(11,11,12,0.1) 24%, rgba(11,11,12,0.05) 55%, rgba(11,11,12,0.88) 100%)",
        }}
      />

      {/* ---- permanent viewfinder frame ---- */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[
          { style: { top: 16, left: 16 }, d: "M0 20 L0 0 L20 0" },
          { style: { top: 16, right: 16 }, d: "M0 0 L20 0 L20 20" },
          { style: { bottom: 16, right: 16 }, d: "M0 0 L0 20 L20 20" },
          { style: { bottom: 16, left: 16 }, d: "M20 0 L20 20 L0 20" },
        ].map((b, i) => (
          <svg
            key={i}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="absolute"
            style={b.style}
          >
            <path
              d={b.d}
              fill="none"
              stroke="#F4F3EF"
              strokeOpacity="0.5"
              strokeWidth="1.3"
            />
          </svg>
        ))}

        {/* center reticle */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="reticle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <line
            x1="16"
            y1="0"
            x2="16"
            y2="9"
            stroke="#FFE300"
            strokeWidth="1.1"
          />
          <line
            x1="16"
            y1="23"
            x2="16"
            y2="32"
            stroke="#FFE300"
            strokeWidth="1.1"
          />
          <line
            x1="0"
            y1="16"
            x2="9"
            y2="16"
            stroke="#FFE300"
            strokeWidth="1.1"
          />
          <line
            x1="23"
            y1="16"
            x2="32"
            y2="16"
            stroke="#FFE300"
            strokeWidth="1.1"
          />
        </svg>

        {/* top-left HUD */}
        <div className="absolute top-5 left-10 font-mono text-[10px] tracking-[0.14em] text-[#F4F3EF]/70">
          {slide.iso} &nbsp;·&nbsp; AWB &nbsp;·&nbsp; RAW
        </div>

        {/* top-right HUD */}
        <div className="absolute top-5 right-10 flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-[#F4F3EF]/70">
          <span className="rec-dot w-1.5 h-1.5 rounded-full bg-[#FFE300]" />
          REC &nbsp;·&nbsp; 0{index + 1}/0{SLIDES.length}
        </div>

        {/* exposure readout, upper-right of copy */}
        <div className="absolute bottom-[104px] right-10 text-right font-mono text-[10px] tracking-[0.14em] text-[#F4F3EF]/70">
          {slide.fstop} &nbsp;·&nbsp; {slide.shutter}
        </div>
      </div>

      {/* ---- side nav arrows ---- */}
      <button
        onClick={() => goTo(index - 1)}
        aria-label="Previous"
        className="absolute z-30 left-3 lg:left-5 top-[42%] -translate-y-1/2 w-9 h-9 flex items-center justify-center text-[#F4F3EF]/70 hover:text-[#FFE300] transition-colors duration-200"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        onClick={() => goTo(index + 1)}
        aria-label="Next"
        className="absolute z-30 right-3 lg:right-5 top-[42%] -translate-y-1/2 w-9 h-9 flex items-center justify-center text-[#F4F3EF]/70 hover:text-[#FFE300] transition-colors duration-200"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {/* ---- bottom-left copy ---- */}
      <div
        key={index}
        className="absolute z-30 left-6 lg:left-10 bottom-[76px] max-w-lg"
      >
        <div
          className="copy-in flex items-center gap-3 mb-3"
          style={{ animationDelay: "50ms" }}
        >
          <span className="w-5 h-[1.5px] bg-[#FFE300]" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#D4D6DA] uppercase">
            Z Series
          </span>
        </div>
        <h2
          className="copy-in font-display font-bold text-[#F4F3EF] leading-[0.95] text-[clamp(2.5rem,7vw,4.5rem)] tracking-[-0.01em] mb-2"
          style={{ animationDelay: "110ms" }}
        >
          {slide.name}
        </h2>
        <p
          className="copy-in font-body text-[#D4D6DA] text-sm lg:text-base mb-5"
          style={{ animationDelay: "170ms" }}
        >
          {slide.tag}
        </p>
        <div className="copy-in" style={{ animationDelay: "230ms" }}>
          <button className="flex items-center gap-2 bg-[#FFE300] hover:bg-[#FFEA4D] text-[#0B0B0C] font-display font-semibold text-[12.5px] tracking-[0.04em] pl-4 pr-3.5 py-2.5 transition-colors duration-200">
            EXPLORE {slide.name}
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* ---- thumbnail rail + burst bar ---- */}
      <div className="absolute z-30 bottom-4 left-6 right-6 lg:left-10 lg:right-10">
        <div className="flex items-end gap-3">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className="flex flex-col items-center gap-1.5 shrink-0"
              aria-label={`Go to ${s.name}`}
            >
              <div
                className={`w-10 h-10 lg:w-11 lg:h-11 overflow-hidden ${i === index ? "thumb-active" : "opacity-50 hover:opacity-80"} transition-opacity duration-200`}
              >
                <img
                  src={s.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="font-mono text-[9.5px] tracking-[0.05em] transition-colors duration-200"
                style={{ color: i === index ? "#FFE300" : "#6C6E73" }}
              >
                {s.fstop}
              </span>
            </button>
          ))}

          <div className="flex-1 flex items-center gap-2 mb-4">
            {SLIDES.map((s, i) => (
              <div
                key={s.id}
                className="flex-1 h-[2.5px] bg-[#F4F3EF]/15 relative overflow-hidden"
              >
                <span
                  className="absolute inset-y-0 left-0 bg-[#FFE300]"
                  style={{
                    width:
                      i < index
                        ? "100%"
                        : i === index
                          ? `${progress * 100}%`
                          : "0%",
                    transition: i === index ? "none" : "width 300ms ease",
                  }}
                />
              </div>
            ))}
          </div>

          <span className="hidden sm:block font-mono text-[9.5px] tracking-[0.1em] text-[#8B8D93] mb-4 whitespace-nowrap">
            BURST {index + 1}/{SLIDES.length}
          </span>
        </div>
      </div>
    </section>
  );
}
