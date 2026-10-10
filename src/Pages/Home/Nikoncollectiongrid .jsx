//3rd section 
import React, { useEffect, useMemo, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Data — apni images /cameras/... me daalo (public folder)           */
/* ------------------------------------------------------------------ */

const CAMERAS = [
  {
    id: "z9",
    name: "Z9",
    tag: "The flagship. Unstoppable.",
    fstop: "ƒ1.2",
    shutter: "1/8000",
    iso: "100",
    cat: "Flagship",
    span: "lg:col-span-2 lg:row-span-2",
    img: "/cameras/z9.jpg",
  },
  {
    id: "z8",
    name: "Z8",
    tag: "All the power. Half the weight.",
    fstop: "ƒ1.8",
    shutter: "1/4000",
    iso: "200",
    cat: "Pro",
    span: "lg:col-span-1 lg:row-span-1",
    img: "/cameras/z8.jpg",
  },
  {
    id: "zf",
    name: "Zf",
    tag: "Heritage, rewired.",
    fstop: "ƒ2.8",
    shutter: "1/500",
    iso: "400",
    cat: "Retro",
    span: "lg:col-span-1 lg:row-span-2",
    img: "/cameras/zr.jpg",
  },
  {
    id: "z6iii",
    name: "Z6III",
    tag: "The all-rounder, sharpened.",
    fstop: "ƒ2.0",
    shutter: "1/2000",
    iso: "160",
    cat: "Hybrid",
    span: "lg:col-span-1 lg:row-span-1",
    img: "/cameras/z6iii.jpg",
  },
  {
    id: "z50ii",
    name: "Z50II",
    tag: "Light body, no compromises.",
    fstop: "ƒ3.5",
    shutter: "1/1000",
    iso: "320",
    cat: "Compact",
    span: "lg:col-span-2 lg:row-span-1",
    img: "/cameras/z50ii.jpg",
  },
  {
    id: "zr",
    name: "ZR",
    tag: "Born cinematic.",
    fstop: "ƒ1.4",
    shutter: "1/50",
    iso: "800",
    cat: "Cinema",
    span: "lg:col-span-1 lg:row-span-1",
    img: "/cameras/zf8.jpg",
  },
];

const FILTERS = ["All", "Flagship", "Pro", "Retro", "Hybrid", "Compact", "Cinema"];

/* ------------------------------------------------------------------ */
/*  Tile (DESKTOP / TABLET — unchanged)                               */
/* ------------------------------------------------------------------ */

const Tile = React.memo(function Tile({ cam, dim }) {
  return (
    <div
      className={`tile group relative rounded-[3px] overflow-hidden ${cam.span}`}
      style={{
        opacity: dim ? 0.22 : 1,
        transform: dim ? "scale(0.965)" : "scale(1)",
        transition:
          "opacity 500ms cubic-bezier(0.16,1,0.3,1), transform 500ms cubic-bezier(0.16,1,0.3,1)",
        boxShadow: "0 18px 40px -20px rgba(0,0,0,0.75)",
      }}
    >
      <div className="relative w-full h-full aspect-[4/5] lg:aspect-auto overflow-hidden bg-[#111]">
        <img
          src={cam.img}
          alt={cam.name}
          draggable={false}
          loading="lazy"
          decoding="async"
          className="tile-img w-full h-full object-cover"
        />

        {/* dark overlay — brightness filter ki jagah */}
        <div
          className="pointer-events-none absolute inset-0 bg-black transition-opacity duration-500"
          style={{ opacity: dim ? 0 : 0.3 }}
        />

        {/* hover pe halka lighten */}
        <div
          className="tile-lighten pointer-events-none absolute inset-0 bg-black transition-opacity duration-500"
          style={{ opacity: 0 }}
        />

        {/* dim hone pe grayscale overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-black transition-opacity duration-500"
          style={{
            opacity: dim ? 0.55 : 0,
            mixBlendMode: "saturation",
          }}
        />

        {/* bottom gradient */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,7,10,0.05) 30%, rgba(8,7,10,0.9) 100%)",
          }}
        />

        {/* top-left id */}
        <span className="absolute top-4 left-4 font-mono text-[9px] tracking-[0.18em] text-[#F2D889]/75">
          {cam.id.toUpperCase()}
        </span>

        {/* top-right category */}
        <span
          className="absolute top-4 right-4 font-mono text-[8px] tracking-[0.16em] uppercase text-[#F2D889]/85 px-2 py-1 rounded-full border"
          style={{
            borderColor: "rgba(212,175,55,0.35)",
            background: "rgba(8,7,10,0.5)",
          }}
        >
          {cam.cat}
        </span>

        {/* corner brackets — CSS hover se */}
        <span className="corner corner-tl top-3 left-3 border-t-2 border-l-2" />
        <span className="corner corner-tr top-3 right-3 border-t-2 border-r-2" />
        <span className="corner corner-bl bottom-3 left-3 border-b-2 border-l-2" />
        <span className="corner corner-br bottom-3 right-3 border-b-2 border-r-2" />

        {/* caption */}
        <div className="absolute left-5 right-5 bottom-5 z-10">
          <h3
            className="font-display italic text-white leading-none tracking-[-0.01em] transition-transform duration-500 group-hover:-translate-y-0.5"
            style={{
              fontSize: cam.span.includes("col-span-2")
                ? "clamp(26px, 3vw, 36px)"
                : "22px",
            }}
          >
            {cam.name}
          </h3>
          <p className="font-body font-light text-[#B8B2A4] text-[11.5px] mt-1.5 max-w-[220px]">
            {cam.tag}
          </p>

          {/* specs — sirf hover pe */}
          <div className="specs-row overflow-hidden flex items-center gap-2.5 max-h-0 opacity-0 mt-0 transition-all duration-500 group-hover:max-h-6 group-hover:opacity-100 group-hover:mt-2">
            <span className="font-mono text-[9px] tracking-[0.1em] text-[#D4AF37]">
              {cam.fstop}
            </span>
            <span className="w-[3px] h-[3px] rounded-full bg-[#3A342A]" />
            <span className="font-mono text-[9px] tracking-[0.1em] text-[#D4AF37]">
              {cam.shutter}s
            </span>
            <span className="w-[3px] h-[3px] rounded-full bg-[#3A342A]" />
            <span className="font-mono text-[9px] tracking-[0.1em] text-[#D4AF37]">
              ISO {cam.iso}
            </span>
          </div>
        </div>
      </div>

      {/* gold border on hover — CSS se, no box-shadow transition */}
      <div className="pointer-events-none absolute inset-0 rounded-[3px] border border-[rgba(212,175,55,0.45)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
});

/* ------------------------------------------------------------------ */
/*  MobileViewer — sirf mobile (<640px). Ek hi bada "viewfinder",     */
/*  neeche thumbnails se model badlo, ya image ko swipe karo.         */
/* ------------------------------------------------------------------ */

function MobileViewer({ list }) {
  const [i, setI] = useState(0);
  const touchX = useRef(null);
  const thumbRefs = useRef([]);

  const n = list.length;
  const idx = Math.min(i, n - 1);
  const cam = list[idx];

  const go = (next) => setI(((next % n) + n) % n);

  // active thumbnail ko strip me center karo
  useEffect(() => {
    const el = thumbRefs.current[idx];
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [idx]);

  if (!cam) return null;

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 40) go(dx < 0 ? idx + 1 : idx - 1);
  };

  const pad = (v) => String(v).padStart(2, "0");

  return (
    <div className="m-viewer">
      {/* viewfinder */}
      <div
        className="m-frame"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img
          key={cam.id}
          src={cam.img}
          alt={cam.name}
          draggable={false}
          decoding="async"
          className="m-photo"
        />
        <div className="m-shade" />

        <span className="m-br m-br-tl" />
        <span className="m-br m-br-tr" />
        <span className="m-br m-br-bl" />
        <span className="m-br m-br-br" />

        <span className="m-id font-mono">{cam.id.toUpperCase()}</span>
        <span className="m-counter font-mono">
          {pad(idx + 1)} / {pad(n)}
        </span>

        {/* LCD style readout */}
        <div className="m-lcd font-mono">
          <div>
            <small>ƒ</small>
            <span>{cam.fstop.replace("ƒ", "")}</span>
          </div>
          <div>
            <small>SHUTTER</small>
            <span>{cam.shutter}</span>
          </div>
          <div>
            <small>ISO</small>
            <span>{cam.iso}</span>
          </div>
        </div>
      </div>

      {/* name + arrows */}
      <div className="m-info" key={cam.id + "-info"}>
        <div className="m-info-text m-fade">
          <span className="m-cat font-mono">{cam.cat}</span>
          <h3 className="font-display italic">{cam.name}</h3>
          <p className="font-body">{cam.tag}</p>
        </div>
        {n > 1 && (
          <div className="m-arrows">
            <button onClick={() => go(idx - 1)} aria-label="Previous camera">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
            </button>
            <button onClick={() => go(idx + 1)} aria-label="Next camera">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>
        )}
      </div>

      {/* thumbnail strip */}
      <div className="m-thumbs" role="tablist" aria-label="Cameras">
        {list.map((c, k) => (
          <button
            key={c.id}
            ref={(el) => (thumbRefs.current[k] = el)}
            role="tab"
            aria-selected={k === idx}
            onClick={() => setI(k)}
            className={`m-thumb${k === idx ? " on" : ""}`}
          >
            <span className="m-thumb-img">
              <img src={c.img} alt="" loading="lazy" decoding="async" draggable={false} />
            </span>
            <span className="m-thumb-name font-mono">{c.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main                                                              */
/* ------------------------------------------------------------------ */

export default function NikonCollectionGrid() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () =>
      new Set(
        CAMERAS.filter((c) => filter === "All" || c.cat === filter).map(
          (c) => c.id
        )
      ),
    [filter]
  );

  // mobile pe dim ki jagah seedha filter hota hai
  const mobileList = useMemo(
    () => CAMERAS.filter((c) => visible.has(c.id)),
    [visible]
  );

  return (
    <section className="relative w-full bg-[#08070A] py-16 lg:py-24 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500&family=JetBrains+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap');
        .font-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .font-mono    { font-family: 'JetBrains Mono', monospace; }
        .font-body    { font-family: 'Inter', sans-serif; }

        /* Tile image zoom — GPU friendly */
        .tile-img {
          transform: translateZ(0) scale(1);
          transition: transform 650ms cubic-bezier(0.16,1,0.3,1);
          will-change: transform;
        }
        .group:hover .tile-img { transform: translateZ(0) scale(1.08); }

        /* Halka darkening on hover */
        .group:hover .tile-lighten { opacity: 0.15; }

        /* Corner brackets */
        .corner {
          position: absolute;
          width: 16px; height: 16px;
          border-color: #D4AF37;
          opacity: 0;
          transition: opacity 380ms ease;
          z-index: 5;
          pointer-events: none;
        }
        .group:hover .corner { opacity: 1; }

        /* Tabs */
        .tab-btn {
          transition: color 250ms ease, background-color 250ms ease,
                      border-color 250ms ease, transform 250ms cubic-bezier(0.34,1.56,0.64,1);
        }
        .tab-btn:active { transform: scale(0.94); }

        /* Marquee */
        .marquee-track {
          animation: marquee 32s linear infinite;
          will-change: transform;
          transform: translateZ(0);
        }
        @keyframes marquee {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(-50%,0,0); }
        }

        /* Bento grid rows */
        .bento-grid { grid-auto-rows: 190px; }
        @media (min-width: 1024px) { .bento-grid { grid-auto-rows: 175px; } }

        /* ============ MOBILE ONLY (<640px) ============ */
        .m-only { display: none; }

        @media (max-width: 639px) {
          .d-only { display: none !important; }
          .m-only { display: block; }

          /* header thoda compact */
          .m-header { margin-bottom: 20px; }

          /* swipeable filter bar */
          .m-filterbar { padding: 0 0 18px; }
          .m-filters {
            display: flex;
            gap: 8px;
            overflow-x: auto;
            padding: 0 20px;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
          }
          .m-filters::-webkit-scrollbar { display: none; }
          .m-chip {
            flex: 0 0 auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            letter-spacing: 0.08em;
            padding: 9px 16px;
            border-radius: 999px;
            border: 1px solid rgba(255,255,255,0.1);
            color: #8A8272;
            background: transparent;
            min-height: 38px;
            transition: color 250ms ease, background-color 250ms ease, border-color 250ms ease;
          }
          .m-chip.on {
            color: #F2D889;
            border-color: rgba(212,175,55,0.7);
            background: rgba(212,175,55,0.14);
          }

          .m-viewer { padding: 0 20px; }

          /* viewfinder */
          .m-frame {
            position: relative;
            width: 100%;
            aspect-ratio: 4 / 5;
            overflow: hidden;
            border-radius: 3px;
            background: #111;
            touch-action: pan-y;
            box-shadow: 0 18px 40px -20px rgba(0,0,0,0.8);
          }
          .m-photo {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            filter: brightness(0.85);
            animation: mFade 420ms ease both;
          }
          @keyframes mFade { from { opacity: 0; } to { opacity: 1; } }
          .m-fade { animation: mFade 420ms ease both; }

          .m-shade {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background:
              linear-gradient(180deg, rgba(8,7,10,0.55) 0%, rgba(8,7,10,0) 22%),
              linear-gradient(180deg, rgba(8,7,10,0) 62%, rgba(8,7,10,0.85) 100%);
          }

          .m-br {
            position: absolute;
            width: 18px;
            height: 18px;
            border-color: #D4AF37;
            pointer-events: none;
          }
          .m-br-tl { top: 12px; left: 12px; border-top: 2px solid; border-left: 2px solid; }
          .m-br-tr { top: 12px; right: 12px; border-top: 2px solid; border-right: 2px solid; }
          .m-br-bl { bottom: 12px; left: 12px; border-bottom: 2px solid; border-left: 2px solid; }
          .m-br-br { bottom: 12px; right: 12px; border-bottom: 2px solid; border-right: 2px solid; }

          .m-id, .m-counter {
            position: absolute;
            top: 22px;
            font-size: 11px;
            letter-spacing: 0.14em;
            color: #F2D889;
          }
          .m-id { left: 26px; }
          .m-counter { right: 26px; }

          .m-lcd {
            position: absolute;
            left: 26px;
            right: 26px;
            bottom: 26px;
            display: grid;
            grid-template-columns: 1fr 1.4fr 1fr;
            gap: 10px;
            padding-top: 10px;
            border-top: 1px solid rgba(212,175,55,0.35);
          }
          .m-lcd div { display: flex; flex-direction: column; gap: 2px; }
          .m-lcd small { font-size: 9px; letter-spacing: 0.14em; color: #8A8272; }
          .m-lcd span { font-size: 18px; color: #F2D889; }

          /* name + arrows */
          .m-info {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 16px;
            padding: 20px 2px 22px;
          }
          .m-info-text { min-width: 0; }
          .m-cat {
            display: inline-block;
            font-size: 10px;
            letter-spacing: 0.12em;
            color: #D4AF37;
            border: 1px solid rgba(212,175,55,0.35);
            border-radius: 999px;
            padding: 4px 10px;
            margin-bottom: 10px;
          }
          .m-info h3 {
            font-size: 42px;
            line-height: 0.95;
            letter-spacing: -0.02em;
            color: #F4F1EA;
          }
          .m-info p {
            margin-top: 8px;
            font-size: 14px;
            font-weight: 300;
            color: #B8B2A4;
          }
          .m-arrows { display: flex; gap: 8px; flex: 0 0 auto; }
          .m-arrows button {
            width: 44px;
            height: 44px;
            border-radius: 999px;
            border: 1px solid rgba(212,175,55,0.45);
            color: #F2D889;
            background: transparent;
            display: grid;
            place-items: center;
            transition: background-color 200ms ease, transform 200ms ease;
          }
          .m-arrows button:active { background: rgba(212,175,55,0.16); transform: scale(0.94); }

          /* thumbnail strip */
          .m-thumbs {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            margin: 0 -20px;
            padding: 4px 20px 6px;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
          }
          .m-thumbs::-webkit-scrollbar { display: none; }
          .m-thumb {
            flex: 0 0 auto;
            width: 72px;
            background: transparent;
            border: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
            align-items: flex-start;
            opacity: 0.5;
            transition: opacity 250ms ease;
          }
          .m-thumb.on { opacity: 1; }
          .m-thumb-img {
            display: block;
            width: 72px;
            height: 72px;
            overflow: hidden;
            border-radius: 3px;
            border: 1.5px solid transparent;
            background: #111;
            transition: border-color 250ms ease;
          }
          .m-thumb.on .m-thumb-img { border-color: #D4AF37; }
          .m-thumb-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
          .m-thumb-name { font-size: 10px; letter-spacing: 0.08em; color: #F2D889; }
        }

        /* Reduced motion respect */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
          .tile-img { transition: none; }
          .m-photo, .m-fade { animation: none; }
          .m-chip, .m-thumb, .m-thumb-img { transition: none; }
        }
      `}</style>

      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(212,175,55,0.05), transparent 60%)",
        }}
      />

      {/* header */}
      <div className="m-header relative max-w-[1200px] mx-auto px-6 mb-9">
        <div className="flex items-center justify-center gap-4 mb-5">
          <span
            className="w-8 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)",
            }}
          />
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#6B6459] uppercase">
            The Wall
          </span>
          <span
            className="w-8 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)",
            }}
          />
        </div>
        <h2 className="font-display italic text-center text-[#F4F1EA] text-[32px] sm:text-[40px] lg:text-[48px] tracking-[-0.01em] leading-[1.05]">
          Six bodies, curated{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #8A6A2A, #F2D889 40%, #C89B3C)",
            }}
          >
            like prints
          </span>
          .
        </h2>
      </div>

      {/* marquee */}
      <div
        className="relative overflow-hidden border-y mb-10"
        style={{ borderColor: "rgba(212,175,55,0.15)" }}
      >
        <div className="marquee-track flex whitespace-nowrap py-2.5 w-max">
          {Array.from({ length: 2 }).map((_, r) => (
            <span key={r} className="flex items-center">
              {[
                "NIKON Z SERIES",
                "FULL-FRAME MIRRORLESS",
                "BUILT FOR LIGHT",
                "MADE TO SEE",
              ].map((t, i) => (
                <span
                  key={i}
                  className="font-mono text-[10px] tracking-[0.22em] text-[#4A4438] uppercase mx-5"
                >
                  {t} <span className="text-[#D4AF37]/60">•</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ---------------- DESKTOP / TABLET (unchanged) ---------------- */}
      <div className="d-only">
        {/* filters */}
        <div className="relative max-w-[1200px] mx-auto px-6 mb-8 flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="tab-btn font-mono text-[10px] tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full border"
              style={{
                borderColor:
                  filter === f
                    ? "rgba(212,175,55,0.7)"
                    : "rgba(255,255,255,0.08)",
                backgroundColor:
                  filter === f ? "rgba(212,175,55,0.14)" : "transparent",
                color: filter === f ? "#F2D889" : "#6B6459",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* bento grid */}
        <div className="relative max-w-[1200px] mx-auto px-6">
          <div className="bento-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-flow-dense gap-4">
            {CAMERAS.map((cam) => (
              <Tile key={cam.id} cam={cam} dim={!visible.has(cam.id)} />
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE ONLY ---------------- */}
      <div className="m-only relative">
        <div className="m-filterbar">
          <div className="m-filters" role="tablist" aria-label="Camera categories">
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`m-chip${filter === f ? " on" : ""}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <MobileViewer key={filter} list={mobileList} />
      </div>
    </section>
  );
}