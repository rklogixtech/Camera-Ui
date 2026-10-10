import React, { useState, useEffect } from "react";

/**
 * NIKON — Responsive Luxury Header
 * Mobile/Tablet (< lg): hamburger + full-height drawer with every page link.
 * Desktop (>= lg): same horizontal nav with spec readouts on hover.
 *
 * PAGES: har item ka `to` path hai. Plain <a href> se full page load hota hai.
 * React Router use kar rahe ho to neeche `NavLink` wrapper dekho (comment me).
 */

const NAV = [
  { label: "CAMERAS", spec: "45.7MP", to: "/" },
  { label: "ACCESSORIES", spec: "SB-5000", to: "#accessories" },
  { label: "STORIES", spec: "ISO 64–25600", to: "#stories" },
  { label: "GALLERY", spec: "FRAME ARCHIVE", to: "#gallery" },
  { label: "SUPPORT", spec: "24 / 7", to: "#support" },
];

/*
  React Router ke liye:
  import { Link } from "react-router-dom";
  const NavLink = ({ to, ...p }) => <Link to={to} {...p} />;
*/
const NavLink = ({ to, children, ...props }) => (
  <a href={to} {...props}>
    {children}
  </a>
);

export default function NikonHeader() {
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false);

  // Drawer open ho to page scroll lock + Esc se close
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <div className="w-full bg-[#0B0B0C] relative z-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500&display=swap');

        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .font-body { font-family: 'Inter', sans-serif; }

        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 22s linear infinite; width: max-content; }

        @keyframes iris-wake {
          0% { transform: rotate(-24deg) scale(0.85); opacity: 0; }
          100% { transform: rotate(0deg) scale(1); opacity: 1; }
        }
        .iris-wake { animation: iris-wake 900ms cubic-bezier(0.16,1,0.3,1) both; }
        .iris-group { transition: transform 700ms cubic-bezier(0.16,1,0.3,1); transform-origin: 50% 50%; }
        .iris-wrap:hover .iris-group { transform: rotate(52deg); }
        .iris-wrap:hover .iris-center-glow { opacity: 1; }
        .iris-center-glow { transition: opacity 500ms ease; opacity: 0; }

        /* Drawer */
        .drawer { transform: translateX(100%); transition: transform 380ms cubic-bezier(0.16,1,0.3,1); }
        .drawer.open { transform: translateX(0); }
        .scrim { opacity: 0; pointer-events: none; transition: opacity 300ms ease; }
        .scrim.open { opacity: 1; pointer-events: auto; }

        .nikon-focus:focus-visible { outline: 2px solid #FFE300; outline-offset: 3px; }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track, .iris-wake { animation: none; }
          .drawer, .scrim, .iris-group { transition: none; }
        }
      `}</style>

      {/* ---- HUD strip ---- */}
      <div className="border-b border-[#232326] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="h-7 sm:h-8 flex items-center overflow-hidden">
            <div className="flex marquee-track font-mono text-[10px] sm:text-[11px] tracking-[0.15em] text-[#6C6E73] gap-8 sm:gap-10 pr-8 sm:pr-10">
              {Array(2)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex items-center gap-8 sm:gap-10 shrink-0">
                    <span>ƒ/1.4</span><span className="text-[#3A3A3D]">·</span>
                    <span>1/8000s</span><span className="text-[#3A3A3D]">·</span>
                    <span>ISO 100</span><span className="text-[#3A3A3D]">·</span>
                    <span>AF-C</span><span className="text-[#3A3A3D]">·</span>
                    <span>WB 5600K</span><span className="text-[#3A3A3D]">·</span>
                    <span className="text-[#FFE300]/70">● REC</span><span className="text-[#3A3A3D]">·</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---- Main header ---- */}
      <header className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">
          {/* Logo */}
          <NavLink
            to="/"
            aria-label="Nikon home"
            className="flex items-center gap-2.5 sm:gap-3 iris-wrap shrink-0 nikon-focus"
          >
            <svg width="30" height="30" viewBox="0 0 100 100" className="iris-wake sm:w-[34px] sm:h-[34px]">
              <circle cx="50" cy="50" r="47" fill="none" stroke="#3A3A3D" strokeWidth="1" />
              <circle className="iris-center-glow" cx="50" cy="50" r="10" fill="#FFE300" />
              <g className="iris-group">
                {Array.from({ length: 7 }).map((_, i) => (
                  <polygon
                    key={i}
                    points="50,50 78,38 88,58"
                    fill="#D4D6DA"
                    opacity="0.9"
                    transform={`rotate(${(360 / 7) * i} 50 50)`}
                  />
                ))}
              </g>
            </svg>
            <span className="font-display font-bold text-[#F4F3EF] text-xl sm:text-2xl tracking-[0.02em]">
              NIKON
            </span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative py-2"
                onMouseEnter={() => setHovered(item.label)}
                onMouseLeave={() => setHovered(null)}
              >
                <NavLink
                  to={item.to}
                  onFocus={() => setHovered(item.label)}
                  onBlur={() => setHovered(null)}
                  className="nikon-focus font-body text-[13px] tracking-[0.12em] text-[#C9CDD3] hover:text-[#F4F3EF] transition-colors duration-200"
                >
                  {item.label}
                </NavLink>
                <span
                  className="absolute left-0 -bottom-[1px] h-[1.5px] bg-[#FFE300] transition-all duration-300 ease-out"
                  style={{ width: hovered === item.label ? "100%" : "0%" }}
                />
                <span
                  className="absolute left-0 top-full mt-2 font-mono text-[10px] tracking-[0.08em] text-[#6C6E73] whitespace-nowrap transition-all duration-300 pointer-events-none"
                  style={{
                    opacity: hovered === item.label ? 1 : 0,
                    transform: hovered === item.label ? "translateY(0px)" : "translateY(-4px)",
                  }}
                >
                  {item.spec}
                </span>
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            <button aria-label="Search" className="nikon-focus p-2 text-[#C9CDD3] hover:text-[#F4F3EF] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <button aria-label="Bag" className="nikon-focus p-2 text-[#C9CDD3] hover:text-[#F4F3EF] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M6 7h12l-1 13H7L6 7Z" />
                <path d="M9 7V5a3 3 0 0 1 6 0v2" />
              </svg>
            </button>

            {/* CTA: sirf sm+ par header me; mobile par drawer me */}
            <NavLink
              to="#lenses"
              className="nikon-focus hidden sm:flex items-center gap-2 bg-[#FFE300] hover:bg-[#FFEA4D] text-[#0B0B0C] font-display font-semibold text-[13px] tracking-[0.04em] pl-4 pr-3.5 py-2.5 transition-colors duration-200"
            >
              EXPLORE Z9
              <span className="font-mono text-[11px] opacity-70">ƒ/1.2</span>
            </NavLink>

            {/* Hamburger: < lg */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen((v) => !v)}
              className="nikon-focus lg:hidden p-2 -mr-2 text-[#F4F3EF]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                {open ? (
                  <>
                    <line x1="5" y1="5" x2="19" y2="19" />
                    <line x1="19" y1="5" x2="5" y2="19" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ---- Mobile / tablet drawer ---- */}
      <div
        className={`scrim lg:hidden fixed inset-0 bg-black/70 ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="mobile-drawer"
        aria-hidden={!open}
        className={`drawer ${open ? "open" : ""} lg:hidden fixed top-0 right-0 h-full w-[86%] max-w-[380px] bg-[#0B0B0C] border-l border-[#232326] flex flex-col`}
        style={{ paddingTop: "env(safe-area-inset-top, 0px)", paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="h-16 sm:h-20 px-5 flex items-center justify-between border-b border-[#232326] shrink-0">
          <span className="font-mono text-[11px] tracking-[0.15em] text-[#6C6E73]">MENU</span>
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="nikon-focus p-2 -mr-2 text-[#F4F3EF]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-2" aria-label="Mobile">
          {NAV.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="nikon-focus flex items-baseline justify-between py-5 border-b border-[#1A1A1C] active:bg-[#141416]"
            >
              <span className="font-display text-[22px] font-medium tracking-[0.04em] text-[#F4F3EF]">
                {item.label}
              </span>
              <span className="font-mono text-[10px] tracking-[0.08em] text-[#6C6E73]">
                {item.spec}
              </span>
            </NavLink>
          ))}
        </nav>

        <div className="p-5 border-t border-[#232326] shrink-0">
          <NavLink
            to="/cameras/z9"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="nikon-focus flex items-center justify-center gap-2 w-full bg-[#FFE300] hover:bg-[#FFEA4D] text-[#0B0B0C] font-display font-semibold text-[14px] tracking-[0.04em] py-3.5 transition-colors"
          >
            EXPLORE Z9
            <span className="font-mono text-[11px] opacity-70">ƒ/1.2</span>
          </NavLink>
        </div>
      </aside>
    </div>
  );
}