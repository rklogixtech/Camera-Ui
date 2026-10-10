// 4th section
import React, { useRef, useState, useCallback } from "react";

const ROLL = [
  {
    id: "g1",
    src: "/home/g1.jpg",
    alt: "Mirrorless camera resting on a dark wooden surface",
    caption: "The Body",
    tag: "Full Frame",
  },
  {
    id: "g2",
    src: "/home/g2.jpg",
    alt: "Close-up of a camera lens",
    caption: "The Glass",
    tag: "Z-Mount Optics",
  },
  {
    id: "g3",
    src: "/home/g3.jpg",
    alt: "Macro shot of a lens aperture",
    caption: "The Aperture",
    tag: "f/1.4 — f/16",
  },
  {
    id: "g4",
    src: "/home/g4.jpg",
    alt: "Camera resting on a table with soft light",
    caption: "Ambient Light",
    tag: "ISO 64 – 25600",
  },
  {
    id: "g5",
    src: "/home/g5.jpg",
    alt: "Camera detail close-up",
    caption: "The Details",
    tag: "Milled Alloy Body",
  },
  {
    id: "g6",
    src: "/home/g6.jpg",
    alt: "Camera flat lay with accessories",
    caption: "The Kit",
    tag: "Complete System",
  },
  {
    id: "g7",
    src: "/home/g7.jpg",
    alt: "Photographer holding a camera",
    caption: "In Hand",
    tag: "Balanced Grip",
  },
  {
    id: "g8",
    src: "/home/g8.jpg",
    alt: "Photographer composing a shot",
    caption: "The Frame",
    tag: "493 AF Points",
  },
  {
    id: "g9",
    src: "/home/g9.jpg",
    alt: "Close-up of a lens element",
    caption: "The Element",
    tag: "Aspherical Glass",
  },
  {
    id: "g10",
    src: "/home/g10.jpg",
    alt: "Camera bag and gear laid out",
    caption: "Ready to Go",
    tag: "Precision Imaging",
  },
  {
    id: "g11",
    src: "/home/g11.jpg",
    alt: "Green mountain valley beneath a bright blue sky",
    caption: "The Landscape",
    tag: "Made for the Wild",
  },
];

export default function EditorialHeroGallery() {
  const [active, setActive] = useState(0);
  const [mActive, setMActive] = useState(0);
  const stageRef = useRef(null);
  const frameRefs = useRef({});
  const trackRef = useRef(null);

  const onMove = useCallback((e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;

    const zone = Math.min(ROLL.length - 1, Math.max(0, Math.floor(relX * ROLL.length)));
    setActive((prev) => (prev === zone ? prev : zone));

    // subtle scale/parallax on the active image, driven directly (no re-render)
    const el = frameRefs.current[ROLL[zone].id];
    if (el) {
      const dx = (relX - 0.5) * 24;
      const dy = (relY - 0.5) * 16;
      el.style.transform = `scale(1.06) translate(${dx}px, ${dy}px)`;
    }
  }, []);

  function onLeave() {
    const el = frameRefs.current[ROLL[active].id];
    if (el) el.style.transform = "scale(1) translate(0,0)";
  }

  // Mobile: find the card closest to the centre of the track while swiping
  const onTrackScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const c = child.offsetLeft + child.offsetWidth / 2;
      const d = Math.abs(c - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setMActive((prev) => (prev === best ? prev : best));
  }, []);

  function goTo(i) {
    const track = trackRef.current;
    if (!track || !track.children[i]) return;
    track.children[i].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  const activeItem = ROLL[active];
  const mItem = ROLL[mActive];

  return (
    <section className="eh-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Newsreader:ital,wght@0,400;0,500;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap');

        .eh-section{
          --paper:#F3F1EC;
          --ink:#0A0A0A;
          --spot:#E63C1E;
          --grey:#726F68;
          --line:#0A0A0A;

          position:relative;
          width:100%;
          background:var(--ink);
          color:var(--paper);
          font-family:'Newsreader',serif;
        }

        .eh-masthead{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:20px clamp(20px,5vw,56px);
          border-bottom:1px solid rgba(243,241,236,0.18);
        }
        .eh-masthead-label{
          font-family:'JetBrains Mono',monospace;
          font-size:11px;
          letter-spacing:0.14em;
          color:var(--paper);
        }
        .eh-masthead-label b{ color:var(--spot); font-weight:500; }
        .eh-masthead-issue{
          font-family:'JetBrains Mono',monospace;
          font-size:11px;
          color:var(--grey);
        }

        .eh-stage{
          position:relative;
          width:100%;
          height: 100dvh;
          overflow:hidden;
          cursor:pointer;
        }

        .eh-frame{
          position:absolute;
          inset:0;
          opacity:0;
          transition:opacity .5s ease;
        }
        .eh-frame.active{ opacity:1; }
        .eh-frame img{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
          filter:grayscale(0.15) contrast(1.1) brightness(0.92);
          transition:transform .35s cubic-bezier(.22,.9,.3,1);
          transform:scale(1) translate(0,0);
        }

        .eh-overlay{
          position:absolute;
          inset:0;
          z-index:3;
          pointer-events:none;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          padding:clamp(20px,5vw,56px);
        }

        .eh-folio{
          align-self:flex-end;
          font-family:'Archivo Black',sans-serif;
          font-size:clamp(64px,14vw,200px);
          line-height:0.8;
          color:var(--paper);
          mix-blend-mode:difference;
          user-select:none;
        }

        .eh-caption-row{
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          gap:24px;
          flex-wrap:wrap;
        }
        .eh-caption{
          font-family:'Archivo Black',sans-serif;
          font-size:clamp(30px,5.2vw,74px);
          line-height:0.96;
          letter-spacing:-0.01em;
          color:var(--paper);
          mix-blend-mode:difference;
          max-width:14ch;
        }
        .eh-tag{
          font-family:'JetBrains Mono',monospace;
          font-size:12px;
          letter-spacing:0.08em;
          color:var(--paper);
          mix-blend-mode:difference;
          padding-bottom:10px;
          white-space:nowrap;
        }

        .eh-rail{
          display:flex;
          align-items:center;
          gap:0;
          padding:16px clamp(20px,5vw,56px) 22px;
          background:var(--ink);
        }
        .eh-tick{
          flex:1 1 0;
          height:2px;
          background:rgba(243,241,236,0.22);
          margin-right:6px;
          position:relative;
          cursor:pointer;
          border:none;
          padding:14px 0 0;
        }
        .eh-tick:last-child{ margin-right:0; }
        .eh-tick::before{
          content:"";
          position:absolute;
          left:0; top:0;
          height:2px;
          width:100%;
          background:var(--spot);
          transform:scaleX(0);
          transform-origin:left;
          transition:transform .3s ease;
        }
        .eh-tick.on::before{ transform:scaleX(1); }
        .eh-tick-num{
          position:absolute;
          left:0; top:6px;
          font-family:'JetBrains Mono',monospace;
          font-size:9px;
          color:var(--grey);
          transition:color .3s ease;
        }
        .eh-tick.on .eh-tick-num{ color:var(--paper); }

        /* ---------- MOBILE-ONLY BLOCK (hidden on desktop) ---------- */
        .eh-m{ display:none; }

        @media (max-width:640px){
          .eh-rail{ display:none; }
          .eh-stage{ display:none; }

          .eh-masthead{ padding:16px 20px; }

          .eh-m{
            display:block;
            padding:28px 0 36px;
            background:var(--ink);
          }
          .eh-m-head{
            padding:0 20px 22px;
          }
          .eh-m-kicker{
            font-family:'JetBrains Mono',monospace;
            font-size:10px;
            letter-spacing:0.16em;
            color:var(--spot);
            margin-bottom:10px;
          }
          .eh-m-title{
            font-family:'Archivo Black',sans-serif;
            font-size:clamp(40px,13vw,56px);
            line-height:0.94;
            letter-spacing:-0.01em;
            color:var(--paper);
          }
          .eh-m-sub{
            margin-top:12px;
            font-family:'Newsreader',serif;
            font-style:italic;
            font-size:16px;
            color:var(--grey);
          }

          .eh-m-track{
            position:relative;
            display:flex;
            gap:14px;
            overflow-x:auto;
            padding:0 20px;
            scroll-snap-type:x mandatory;
            scroll-padding:0 20px;
            -webkit-overflow-scrolling:touch;
            scrollbar-width:none;
          }
          .eh-m-track::-webkit-scrollbar{ display:none; }

          .eh-m-card{
            flex:0 0 78%;
            scroll-snap-align:center;
            position:relative;
          }
          .eh-m-card:last-child{ margin-right:2px; }

          .eh-m-imgwrap{
            position:relative;
            width:100%;
            aspect-ratio:4 / 5;
            overflow:hidden;
            background:#161616;
          }
          .eh-m-imgwrap img{
            width:100%;
            height:100%;
            object-fit:cover;
            display:block;
            filter:grayscale(0.15) contrast(1.1) brightness(0.92);
          }
          .eh-m-folio{
            position:absolute;
            top:12px; left:14px;
            font-family:'Archivo Black',sans-serif;
            font-size:56px;
            line-height:0.85;
            color:var(--paper);
            mix-blend-mode:difference;
            pointer-events:none;
          }
          .eh-m-info{
            padding:14px 2px 0;
            display:flex;
            flex-direction:column;
            gap:6px;
          }
          .eh-m-caption{
            font-family:'Archivo Black',sans-serif;
            font-size:28px;
            line-height:1;
            letter-spacing:-0.01em;
            color:var(--paper);
          }
          .eh-m-tag{
            font-family:'JetBrains Mono',monospace;
            font-size:11px;
            letter-spacing:0.08em;
            color:var(--spot);
          }

          .eh-m-footer{
            padding:24px 20px 0;
          }
          .eh-m-count{
            display:flex;
            align-items:baseline;
            justify-content:space-between;
            font-family:'JetBrains Mono',monospace;
            font-size:11px;
            letter-spacing:0.12em;
            color:var(--grey);
            margin-bottom:12px;
          }
          .eh-m-count b{
            color:var(--paper);
            font-weight:500;
          }
          .eh-m-bars{
            display:flex;
            gap:4px;
          }
          .eh-m-bar{
            flex:1 1 0;
            height:3px;
            padding:10px 0;
            background-clip:content-box;
            background-color:rgba(243,241,236,0.22);
            border:none;
            transition:background-color .3s ease;
            cursor:pointer;
          }
          .eh-m-bar.on{ background-color:var(--spot); }
        }

        @media (hover:none){
          .eh-stage{ cursor:default; }
        }
        @media (prefers-reduced-motion: reduce){
          .eh-frame, .eh-frame img, .eh-tick::before, .eh-m-bar{ transition:none !important; }
        }
      `}</style>

      <div className="eh-masthead">
        <div className="eh-masthead-label"><b>Nikon</b> — Field Notes</div>
        <div className="eh-masthead-issue">Vol. 01 · 11 Frames</div>
      </div>

      {/* ---------- DESKTOP (unchanged) ---------- */}
      <div
        className="eh-stage"
        ref={stageRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {ROLL.map((item, i) => (
          <div key={item.id} className={`eh-frame${i === active ? " active" : ""}`}>
            <img
              ref={(el) => (frameRefs.current[item.id] = el)}
              src={item.src}
              alt={item.alt}
              draggable={false}
            />
          </div>
        ))}

        <div className="eh-overlay">
          <div className="eh-folio">{String(active + 1).padStart(2, "0")}</div>
          <div className="eh-caption-row">
            <div className="eh-caption">{activeItem.caption}</div>
            <div className="eh-tag">{activeItem.tag}</div>
          </div>
        </div>
      </div>

      <div className="eh-rail">
        {ROLL.map((item, i) => (
          <button
            key={item.id}
            className={`eh-tick${i === active ? " on" : ""}`}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-label={item.caption}
          >
            <span className="eh-tick-num">{String(i + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>

      {/* ---------- MOBILE ONLY ---------- */}
      <div className="eh-m">
        <div className="eh-m-head">
          <div className="eh-m-kicker">SWIPE TO EXPLORE →</div>
          <div className="eh-m-title">Through<br />the Lens.</div>
          <div className="eh-m-sub">Eleven frames. One system.</div>
        </div>

        <div className="eh-m-track" ref={trackRef} onScroll={onTrackScroll}>
          {ROLL.map((item, i) => (
            <article key={item.id} className="eh-m-card">
              <div className="eh-m-imgwrap">
                <img
                  src={item.src}
                  alt={item.alt}
                  draggable={false}
                  loading={i < 2 ? "eager" : "lazy"}
                />
                <div className="eh-m-folio">{String(i + 1).padStart(2, "0")}</div>
              </div>
              <div className="eh-m-info">
                <div className="eh-m-caption">{item.caption}</div>
                <div className="eh-m-tag">{item.tag}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="eh-m-footer">
          <div className="eh-m-count">
            <span>
              <b>{String(mActive + 1).padStart(2, "0")}</b> / {String(ROLL.length).padStart(2, "0")}
            </span>
            <span>{mItem.caption.toUpperCase()}</span>
          </div>
          <div className="eh-m-bars">
            {ROLL.map((item, i) => (
              <button
                key={item.id}
                className={`eh-m-bar${i === mActive ? " on" : ""}`}
                onClick={() => goTo(i)}
                aria-label={item.caption}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}