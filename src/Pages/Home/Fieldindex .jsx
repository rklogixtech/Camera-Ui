// 5th section
import React, { useEffect, useRef, useState, useCallback } from "react";

/**
 * FieldIndex — slider edition
 * -----------------------------------------------------------------
 * Drop your own base64 / URL image sources into FRAMES below (the
 * `src` field on each entry). Everything else — layout, motion,
 * controls — is self-contained.
 */

const FRAMES = [
  {
    no: "001",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop",
    title: "Turquoise, Above the Tree Line",
    note: "The lake reads glacial even in shade — no filter, just altitude.",
    exif: "20mm · f/9 · 1/320s · ISO 100 · Handheld",
  },
  {
    no: "014",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
    title: "Athabasca, Dusk",
    note: "Blue hour along the river bend.",
    exif: "24mm · f/8 · 1/60s · ISO 100",
  },
  {
    no: "027",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop",
    title: "Pahalgam Rapids",
    note: "White water under pine cover.",
    exif: "35mm · f/11 · 1/125s · ISO 200",
  },
  {
    no: "031",
    src: "https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?q=80&w=1600&auto=format&fit=crop",
    title: "Lahemaa Undergrowth",
    note: "Long exposure, moss and current.",
    exif: "50mm · f/16 · 2.5s · ISO 100",
  },
  {
    no: "042",
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop",
    title: "Last Light, Highlands",
    note: "Sun breaking the tree line.",
    exif: "85mm · f/2.8 · 1/500s · ISO 100",
  },
];

const AUTO_MS = 5500;

export default function FieldIndex() {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const total = FRAMES.length;

  // Reveal on scroll into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const goTo = useCallback(
    (next) => {
      setIndex(((next % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Autoplay
  useEffect(() => {
    if (paused || !revealed) return;
    timerRef.current = setTimeout(() => goTo(index + 1), AUTO_MS);
    return () => clearTimeout(timerRef.current);
  }, [index, paused, revealed, goTo]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Basic swipe support
  const touchStartX = useRef(null);
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  const active = FRAMES[index];

  return (
    <section
      ref={sectionRef}
      className={`field-index ${revealed ? "is-revealed" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        .field-index {
          --onyx: #0b0b0c;
          --onyx-soft: #141416;
          --onyx-raise: #1a1a1d;
          --gold: #c9a46c;
          --gold-dim: #8a744f;
          --parchment: #f3eadf;
          --parchment-dim: rgba(243, 234, 223, 0.6);
          --hairline: rgba(201, 164, 108, 0.26);
          background: var(--onyx);
          color: var(--parchment);
          padding: clamp(3rem, 6vw, 7rem) clamp(1.25rem, 5vw, 5rem);
          font-family: 'Space Mono', 'DM Mono', monospace;
          position: relative;
          overflow: hidden;
        }

        .field-index::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(0deg, rgba(201,164,108,0.035) 0px, rgba(201,164,108,0.035) 1px, transparent 1px, transparent 3px);
          pointer-events: none;
        }

        /* ---------- Heading ---------- */

        .fi-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.72rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1.4rem;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fi-eyebrow::before { content: ""; width: 28px; height: 1px; background: var(--gold); }
        .is-revealed .fi-eyebrow { opacity: 1; transform: translateY(0); }

        .fi-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
          flex-wrap: wrap;
          border-bottom: 1px solid var(--hairline);
          padding-bottom: 2rem;
          margin-bottom: clamp(2rem, 4vw, 3.5rem);
        }

        .fi-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 500;
          font-style: italic;
          font-size: clamp(2.4rem, 5.2vw, 4.4rem);
          line-height: 1.02;
          color: var(--parchment);
          margin: 0;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.8s ease 0.08s, transform 0.8s ease 0.08s;
        }
        .is-revealed .fi-title { opacity: 1; transform: translateY(0); }
        .fi-title em { color: var(--gold); font-style: italic; }

        .fi-meta {
          max-width: 300px;
          font-size: 0.78rem;
          line-height: 1.7;
          color: var(--parchment-dim);
          text-align: right;
          opacity: 0;
          transition: opacity 0.8s ease 0.2s;
        }
        .is-revealed .fi-meta { opacity: 1; }
        .fi-meta span { display: block; color: var(--gold); letter-spacing: 0.1em; margin-bottom: 0.3rem; }

        /* ---------- Slider stage ---------- */

        .fi-stage {
          position: relative;
          border: 1px solid var(--hairline);
          overflow: hidden;
          min-height: 460px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s;
        }
        .is-revealed .fi-stage { opacity: 1; transform: translateY(0); }

        .fi-track {
          position: relative;
          width: 100%;
          height: 460px;
        }

        .fi-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1);
          pointer-events: none;
        }
        .fi-slide.is-active { opacity: 1; pointer-events: auto; }

        .fi-slide img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.9) contrast(1.05);
          transform: scale(1.06);
          transition: transform 6.5s ease-out;
        }
        .fi-slide.is-active img { transform: scale(1); }

        .fi-slide::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11,11,12,0.05) 0%, rgba(11,11,12,0.12) 45%, rgba(11,11,12,0.86) 100%);
        }

        .fi-corner { position: absolute; width: 22px; height: 22px; border: 1.5px solid var(--gold); z-index: 3; opacity: 0.85; }
        .fi-corner.tl { top: 16px; left: 16px; border-right: none; border-bottom: none; }
        .fi-corner.tr { top: 16px; right: 16px; border-left: none; border-bottom: none; }
        .fi-corner.bl { bottom: 16px; left: 16px; border-right: none; border-top: none; }
        .fi-corner.br { bottom: 16px; right: 16px; border-left: none; border-top: none; }

        .fi-slide-body {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          padding: 1.9rem 2.1rem;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .fi-slide-frameno { font-size: 0.7rem; letter-spacing: 0.2em; color: var(--gold); margin-bottom: 0.5rem; }
        .fi-slide-title { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: clamp(1.5rem, 2.6vw, 2.2rem); color: var(--parchment); margin: 0 0 0.4rem; }
        .fi-slide-note { font-size: 0.75rem; color: var(--parchment-dim); max-width: 42ch; line-height: 1.5; margin-bottom: 0.5rem; }
        .fi-slide-exif { font-size: 0.7rem; letter-spacing: 0.06em; color: var(--parchment-dim); }

        .fi-counter {
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          color: var(--gold);
          white-space: nowrap;
        }
        .fi-counter b { color: var(--parchment); font-weight: 400; }

        /* ---------- Arrow controls ---------- */

        .fi-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 4;
          width: 46px;
          height: 46px;
          border: 1px solid var(--hairline);
          background: rgba(11,11,12,0.55);
          backdrop-filter: blur(6px);
          color: var(--parchment);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.25s ease, background 0.25s ease, color 0.25s ease;
        }
        .fi-arrow:hover { border-color: var(--gold); color: var(--gold); background: rgba(11,11,12,0.75); }
        .fi-arrow.prev { left: 18px; }
        .fi-arrow.next { right: 18px; }
        .fi-arrow svg { width: 16px; height: 16px; }

        /* ---------- Progress rail (autoplay indicator) ---------- */

        .fi-progress {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          z-index: 4;
          background: rgba(201,164,108,0.14);
        }
        .fi-progress-bar {
          height: 100%;
          background: var(--gold);
          width: 0%;
        }
        .is-revealed .fi-progress-bar.is-running {
          animation: fi-fill ${AUTO_MS}ms linear forwards;
        }
        @keyframes fi-fill { from { width: 0%; } to { width: 100%; } }

        /* ---------- Thumbnail rail ---------- */

        .fi-rail {
          margin-top: 1.1rem;
          display: grid;
          grid-template-columns: repeat(${FRAMES.length}, 1fr);
          gap: 0.75rem;
        }

        @media (max-width: 720px) {
          .fi-rail { grid-template-columns: repeat(3, 1fr); }
        }

        .fi-thumb {
          position: relative;
          border: 1px solid var(--hairline);
          background: var(--onyx-soft);
          cursor: pointer;
          padding: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          text-align: left;
          transition: border-color 0.3s ease, transform 0.3s ease;
          opacity: 0;
          transform: translateY(14px);
        }
        .is-revealed .fi-thumb { opacity: 1; transform: translateY(0); }
        .fi-thumb:nth-child(1) { transition: border-color 0.3s ease, transform 0.3s ease, opacity 0.7s ease 0.28s, transform 0.7s ease 0.28s; }
        .fi-thumb:nth-child(2) { transition: border-color 0.3s ease, transform 0.3s ease, opacity 0.7s ease 0.34s, transform 0.7s ease 0.34s; }
        .fi-thumb:nth-child(3) { transition: border-color 0.3s ease, transform 0.3s ease, opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s; }
        .fi-thumb:nth-child(4) { transition: border-color 0.3s ease, transform 0.3s ease, opacity 0.7s ease 0.46s, transform 0.7s ease 0.46s; }
        .fi-thumb:nth-child(5) { transition: border-color 0.3s ease, transform 0.3s ease, opacity 0.7s ease 0.52s, transform 0.7s ease 0.52s; }

        .fi-thumb-img { position: relative; width: 100%; height: 92px; overflow: hidden; }
        .fi-thumb-img img { width: 100%; height: 100%; object-fit: cover; filter: saturate(0.85) brightness(0.75); transition: filter 0.3s ease, transform 0.5s ease; }
        .fi-thumb:hover .fi-thumb-img img { transform: scale(1.06); filter: saturate(0.95) brightness(0.9); }
        .fi-thumb.is-active .fi-thumb-img img { filter: saturate(1) brightness(1); }

        .fi-thumb-img::after {
          content: "";
          position: absolute; inset: 0;
          border: 1px solid transparent;
          transition: border-color 0.3s ease;
        }
        .fi-thumb.is-active .fi-thumb-img::after { border-color: var(--gold); }

        .fi-thumb-meta { padding: 0.55rem 0.65rem; }
        .fi-thumb-no { font-size: 0.62rem; letter-spacing: 0.14em; color: var(--gold-dim); }
        .fi-thumb.is-active .fi-thumb-no { color: var(--gold); }
        .fi-thumb-title { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 0.92rem; color: var(--parchment); margin-top: 0.15rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

        .fi-thumb:focus-visible,
        .fi-arrow:focus-visible {
          outline: 1px solid var(--gold);
          outline-offset: 2px;
        }

        /* ---------- Footline ---------- */

        .fi-footline {
          margin-top: clamp(2rem, 4vw, 3rem);
          padding-top: 1.5rem;
          border-top: 1px solid var(--hairline);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          opacity: 0;
          transition: opacity 0.9s ease 0.5s;
        }
        .is-revealed .fi-footline { opacity: 1; }
        .fi-footline-text { font-size: 0.72rem; letter-spacing: 0.08em; color: var(--parchment-dim); }

        .fi-cta {
          background: transparent;
          border: 1px solid var(--gold);
          color: var(--gold);
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0.75rem 1.6rem;
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease;
        }
        .fi-cta:hover { background: var(--gold); color: var(--onyx); }

        @media (prefers-reduced-motion: reduce) {
          .fi-slide, .fi-slide img, .fi-thumb, .fi-progress-bar { transition: none !important; animation: none !important; }
        }
      `}</style>

      <p className="fi-eyebrow">Nikon — Field Archive</p>

      <div className="fi-heading">
        <h2 className="fi-title">
          The Field <em>Index</em>
        </h2>
        <p className="fi-meta">
          <span>Roll 004 · Unedited</span>
          Five frames, catalogued as shot — no crop, no correction,
          light exactly as it fell.
        </p>
      </div>

      <div
        className="fi-stage"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="fi-progress">
          <div key={index} className={`fi-progress-bar ${!paused ? "is-running" : ""}`} />
        </div>

        <div className="fi-track">
          {FRAMES.map((f, i) => (
            <div key={f.no} className={`fi-slide ${i === index ? "is-active" : ""}`}>
              <img src={f.src} alt={f.title} />
              <span className="fi-corner tl" />
              <span className="fi-corner tr" />
              <span className="fi-corner bl" />
              <span className="fi-corner br" />
              <div className="fi-slide-body">
                <div>
                  <div className="fi-slide-frameno">No. {f.no} / Frame Selected</div>
                  <h3 className="fi-slide-title">{f.title}</h3>
                  <p className="fi-slide-note">{f.note}</p>
                  <div className="fi-slide-exif">{f.exif}</div>
                </div>
                <div className="fi-counter">
                  <b>{String(index + 1).padStart(2, "0")}</b> / {String(total).padStart(2, "0")}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="fi-arrow prev" onClick={prev} aria-label="Previous frame">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="fi-arrow next" onClick={next} aria-label="Next frame">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="fi-rail" role="tablist" aria-label="Select frame">
        {FRAMES.map((f, i) => (
          <button
            key={f.no}
            role="tab"
            aria-selected={i === index}
            className={`fi-thumb ${i === index ? "is-active" : ""}`}
            onClick={() => goTo(i)}
          >
            <div className="fi-thumb-img">
              <img src={f.src} alt={f.title} />
            </div>
            <div className="fi-thumb-meta">
              <div className="fi-thumb-no">No. {f.no}</div>
              <div className="fi-thumb-title">{f.title}</div>
            </div>
          </button>
        ))}
      </div>

      <div className="fi-footline">
        <p className="fi-footline-text">
          Shot on location — no studio, no reshoot. Use ← → or swipe to browse.
        </p>
        <button className="fi-cta">View Full Roll</button>
      </div>
    </section>
  );
}
