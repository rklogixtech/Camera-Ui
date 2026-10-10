import React, { useState } from "react";

/**
 * NIKON — Footer (mobile-compact)
 * Desktop: full footer. Mobile (< md): sirf zaroori cheezein —
 * chhota newsletter, 2 essential link columns, ek line ka bottom bar.
 * `mobile: true` wale columns hi mobile par dikhte hain.
 */

const COLUMNS = [
  { title: "CAMERAS", mobile: true, links: ["Z9", "Z8", "Zf", "Z6III", "Z50II", "ZR"] },
  { title: "LENSES", links: ["NIKKOR Z S-Line", "Primes", "Zooms", "Teleconverters"] },
  { title: "ACCESSORIES", links: ["Speedlights", "Grips", "Bags & Cases", "Memory Cards"] },
  { title: "COMPANY", links: ["About Nikon", "Careers", "Press", "Sustainability"] },
  { title: "SUPPORT", mobile: true, links: ["Warranty", "Service Centers", "Downloads", "Contact Us"] },
];

const slug = (s) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function NikonFooter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <footer className="relative w-full bg-[#0B0B0C] border-t border-[#1C1C1E]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500&family=Barlow+Condensed:wght@300;500&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-barlow { font-family: 'Barlow Condensed', sans-serif; font-weight: 300; }
        .font-serif-nk { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 300; }

        @keyframes rotate-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .iris-rotate { animation: rotate-slow 50s linear infinite; transform-origin: 50% 50%; }
        .nk-input::placeholder { color: rgba(245,240,232,0.4); }
        .nk-input:focus { outline: none; border-color: #FFE300; }
        .nk-focus:focus-visible { outline: 2px solid #FFE300; outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) { .iris-rotate { animation: none; } }
      `}</style>

      {/* ---- newsletter ---- */}
      <section
        id="reserve"
        className="font-barlow relative overflow-hidden bg-[#08060a] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[100px] items-center px-5 py-8 md:px-[72px] md:py-[100px]"
      >
        {/* watermark: sirf md+ */}
        <span
          aria-hidden="true"
          className="font-serif-nk hidden md:block absolute pointer-events-none select-none whitespace-nowrap"
          style={{
            fontSize: "clamp(120px, 20vw, 280px)",
            color: "rgba(184,150,90,0.04)",
            right: "-40px",
            top: "50%",
            transform: "translateY(-50%)",
            letterSpacing: "0.1em",
          }}
        >
          NIKON
        </span>

        <div className="relative">
          {/* eyebrow: sirf md+ */}
          <div
            className="hidden md:flex items-center gap-3 mb-7 text-[10px] uppercase text-[#b8965a]"
            style={{ letterSpacing: "0.4em" }}
          >
            <span className="block w-6 h-px bg-[#b8965a]" />
            Begin Your Journey
          </div>

          <h2
            className="font-serif-nk text-[#f5f0e8] m-0 mb-0 md:mb-6"
            style={{ fontSize: "clamp(30px, 6vw, 86px)", lineHeight: 1.05 }}
          >
            Reserve your <br className="hidden md:block" />
            <span className="italic text-[#e2c98a]">golden hour</span>
          </h2>

          <p className="hidden md:block m-0 text-[14px] text-[rgba(245,240,232,0.55)] leading-[1.8]">
            Our optics team responds within 24 hours. Every lens is hand-inspected and matched to
            your body before it ships.
          </p>
        </div>

        <div className="relative flex flex-col gap-3 md:gap-4">
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              aria-label="Email address"
              className="nk-input font-barlow flex-1 min-w-0 bg-[rgba(245,240,232,0.05)] border border-[rgba(184,150,90,0.2)] border-r-0 px-4 py-3 md:px-[22px] md:py-[18px] text-[13px] text-[#f5f0e8]"
              style={{ letterSpacing: "0.06em", borderRadius: 0 }}
            />
            <button
              type="submit"
              disabled={sent}
              className="nk-focus bg-[#b8965a] px-4 md:px-8 py-3 md:py-[18px] text-[11px] font-medium uppercase text-[#08060a] whitespace-nowrap cursor-pointer"
              style={{ letterSpacing: "0.18em", border: "none" }}
            >
              {sent ? "Requested" : (
                <>
                  <span className="md:hidden">Send</span>
                  <span className="hidden md:inline">Request Details</span>
                </>
              )}
            </button>
          </form>

          {/* mobile: ek compact contact line */}
          <p className="md:hidden m-0 text-[12px] text-[rgba(245,240,232,0.45)]" style={{ letterSpacing: "0.06em" }}>
            Call{" "}
            <a href="tel:+19995550199" className="nk-focus text-[#b8965a] no-underline">
              +1 999 555 0199
            </a>
          </p>

          {/* desktop: full contact block */}
          <div className="hidden md:flex flex-col gap-4">
            <div
              className="flex items-center gap-4 text-[10px] uppercase text-[rgba(245,240,232,0.25)]"
              style={{ letterSpacing: "0.2em" }}
            >
              <span className="flex-1 h-px bg-[rgba(245,240,232,0.1)]" />
              or call us directly
              <span className="flex-1 h-px bg-[rgba(245,240,232,0.1)]" />
            </div>

            <a
              href="tel:+19995550199"
              className="nk-focus font-serif-nk block text-center text-[28px] text-[#f5f0e8] no-underline p-6 border border-[rgba(184,150,90,0.2)]"
            >
              <span
                className="font-barlow block text-[9px] uppercase text-[#b8965a] mb-1.5"
                style={{ letterSpacing: "0.3em" }}
              >
                Optics Desk
              </span>
              +1 999 555 0199
            </a>

            <p className="m-0 text-[12px] text-[rgba(245,240,232,0.3)]" style={{ letterSpacing: "0.08em" }}>
              Or write to{" "}
              <a href="mailto:hello@NIKONoptics.com" className="nk-focus text-[#b8965a] no-underline">
                hello@NIKONoptics.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ---- link columns ---- */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-6 py-7 md:py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8 md:gap-10">
        {/* brand: mobile par poori row, chhota */}
        <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <svg width="24" height="24" viewBox="0 0 100 100" aria-hidden="true">
              <g className="iris-rotate">
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
              <circle cx="50" cy="50" r="47" fill="none" stroke="#3A3A3D" strokeWidth="1.5" />
            </svg>
            <span className="font-display font-bold text-[#F4F3EF] text-lg tracking-[0.02em]">NIKON</span>
          </div>
          <p className="hidden md:block font-body text-[#6C6E73] text-[13px] leading-relaxed max-w-[200px]">
            Precision optics since 1917. Made for the frame that mattered.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title} className={col.mobile ? "" : "hidden md:block"}>
            <h4 className="font-mono text-[11px] tracking-[0.12em] text-[#5A5C61] uppercase mb-3 md:mb-4">
              {col.title}
            </h4>
            <ul className="space-y-2 md:space-y-2.5">
              {col.links.map((link, i) => (
                <li key={link} className={i >= 4 ? "hidden md:block" : ""}>
                  <a
                    href={`/${slug(col.title)}/${slug(link)}`}
                    className="nk-focus font-body text-[13px] md:text-[13.5px] text-[#C9CDD3] hover:text-[#FFE300] transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ---- bottom bar ---- */}
      <div className="border-t border-[#1C1C1E]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-6 py-4 md:py-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4 font-mono text-[10px] md:text-[10.5px] tracking-[0.05em] text-[#5A5C61]">
            <span>© 2026 NIKON</span>
            <a href="/privacy" className="nk-focus hover:text-[#C9CDD3] transition-colors">PRIVACY</a>
            <a href="/terms" className="nk-focus hover:text-[#C9CDD3] transition-colors">TERMS</a>
            <a href="/sitemap" className="nk-focus hidden md:inline hover:text-[#C9CDD3] transition-colors">SITEMAP</a>
          </div>

          {/* counter: sirf md+ */}
          <div className="hidden md:flex font-mono text-[10.5px] tracking-[0.05em] text-[#5A5C61] items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFE300] animate-pulse" />
            2,847,193 FRAMES SHARED TODAY
          </div>

          <div className="flex items-center gap-4 text-[#5A5C61]">
            <a href="https://www.instagram.com/rklogix?cplk=b2Jkandza3Q2ZG52" aria-label="Instagram" className="nk-focus hover:text-[#FFE300] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            
          <a
            href="https://www.linkedin.com/in/rajkumawat11?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            aria-label="LinkedIn"
            className="nk-focus hover:text-[#FFE300] transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
            </svg>
          </a>


          <a
            href="https://wa.me/918764841243"
            aria-label="WhatsApp"
            className="nk-focus hidden sm:block hover:text-[#FFE300] transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.96L.05 24l6.27-1.65a11.9 11.9 0 0 0 5.75 1.47h.01c6.58 0 11.93-5.35 11.93-11.93a11.85 11.85 0 0 0-3.49-8.41ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.85 9.85 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.94 9.92Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            </svg>
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
}