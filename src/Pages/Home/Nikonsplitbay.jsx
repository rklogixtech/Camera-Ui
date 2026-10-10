//2nd section after hero section
import React from "react";

export default function MomentsSectionDark() {
  return (
    <section className="moments-section-dark">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Caveat:wght@500;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .moments-section-dark{
          --bg:#0A0A0B;
          --paper:#F5ECDC;
          --ink-soft:#F2EFE8;
          --ink-dim:#9C978D;
          --tape:#FFE300;
          --coral:#F3AC82;
          --sage:#BFD1AC;
          --line-soft:#262522;
          --chip:#161615;

          position:relative;
          width:100%;
          background:var(--bg);
          color:var(--ink-soft);
          font-family:'Inter',sans-serif;
          padding:clamp(48px,7vw,96px) clamp(20px,5vw,64px);
          overflow:hidden;
        }

        /* warm ambient glow, like a lamp over a table of photos */
        .moments-section-dark::before{
          content:"";
          position:absolute;
          inset:0;
          background:
            radial-gradient(ellipse 60% 50% at 78% 30%, rgba(255,227,0,0.06), transparent 60%),
            radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1.4px);
          background-size:auto, 18px 18px;
          pointer-events:none;
        }

        .moments-inner{
          position:relative;
          max-width:1180px;
          margin:0 auto;
          display:grid;
          grid-template-columns:0.82fr 1.18fr;
          gap:clamp(32px,5vw,72px);
          align-items:center;
        }

        .moments-eyebrow{
          display:inline-flex;
          align-items:center;
          gap:9px;
          font-family:'IBM Plex Mono',monospace;
          font-size:11px;
          letter-spacing:0.14em;
          text-transform:uppercase;
          color:var(--coral);
          background:rgba(240,161,132,0.12);
          padding:6px 12px 6px 10px;
          border-radius:999px;
        }
        .moments-eyebrow .dot{
          width:6px;height:6px;border-radius:50%;
          background:var(--coral);
          display:inline-block;
        }

        .moments-title{
          font-family:'Fraunces',serif;
          font-weight:600;
          font-size:clamp(38px,4.6vw,60px);
          line-height:1.04;
          letter-spacing:-0.01em;
          margin-top:20px;
          color:var(--ink-soft);
        }
        .moments-title i{
          font-style:italic;
          color:var(--coral);
        }
        .moments-title .scribble{
          position:relative;
          display:inline-block;
        }
        .moments-title .scribble svg{
          position:absolute;
          left:-2%;
          bottom:-6px;
          width:104%;
          height:14px;
        }

        .moments-copy{
          margin-top:22px;
          max-width:400px;
          font-size:15.5px;
          line-height:1.7;
          color:var(--ink-dim);
        }

        .moments-tags{
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-top:26px;
        }
        .moments-tag{
          font-family:'Caveat',cursive;
          font-weight:700;
          font-size:18px;
          color:var(--bg);
          background:var(--paper);
          border:1.5px solid var(--line-soft);
          padding:5px 16px 7px;
          border-radius:999px;
          transform:rotate(var(--r,-2deg));
          box-shadow:0 3px 0 rgba(0,0,0,0.3);
        }
        .moments-tag:nth-child(2){ --r:1.5deg; }
        .moments-tag:nth-child(3){ --r:-1deg; }

        .moments-cta{
          display:inline-flex;
          align-items:center;
          gap:10px;
          margin-top:34px;
          background:var(--tape);
          color:var(--bg);
          border:none;
          font-family:'Inter',sans-serif;
          font-weight:600;
          font-size:14px;
          padding:14px 26px;
          border-radius:999px;
          cursor:pointer;
          transition:transform .25s ease, box-shadow .25s ease;
        }
        .moments-cta:hover{
          transform:translateY(-2px);
          box-shadow:0 10px 24px rgba(255,227,0,0.22);
        }
        .moments-cta .arrow{
          display:inline-block;
          transition:transform .25s ease;
        }
        .moments-cta:hover .arrow{ transform:translateX(4px); }

        .polaroid-stage{
          position:relative;
          min-height:420px;
        }

        .polaroid{
          position:absolute;
          width:clamp(150px,15vw,190px);
          background:var(--paper);
          padding:10px 10px 0;
          border-radius:3px;
          box-shadow:0 18px 34px -10px rgba(0,0,0,0.55), 0 2px 4px rgba(0,0,0,0.4);
          transition:transform .5s cubic-bezier(.22,.9,.3,1), box-shadow .5s ease, z-index 0s;
          cursor:default;
        }
        .polaroid:hover{
          transform:translateY(-8px) rotate(0deg) scale(1.04) !important;
          box-shadow:0 26px 44px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,227,0,0.15), 0 4px 10px rgba(0,0,0,0.5);
          z-index:20;
        }
        .polaroid .frame{
          width:100%;
          aspect-ratio:1/1.02;
          border-radius:1px;
          overflow:hidden;
          position:relative;
          background:linear-gradient(135deg,#d8d2c2,#c7c0ac);
        }
        .polaroid .frame img{
          width:100%; height:100%;
          object-fit:cover;
          display:block;
        }
        .polaroid .caption{
          font-family:'Caveat',cursive;
          font-weight:600;
          font-size:19px;
          padding:12px 4px 16px;
          color:#2E2A23;
          text-align:center;
        }
        .polaroid .tape{
          position:absolute;
          top:-11px;
          left:50%;
          transform:translateX(-50%) rotate(-3deg);
          width:56px;height:20px;
          background:var(--tape);
          opacity:0.9;
          box-shadow:0 2px 5px rgba(0,0,0,0.4);
        }

        .p1{ top:0%;   left:2%;  transform:rotate(-7deg);  }
        .p2{ top:6%;   left:38%; transform:rotate(4deg); z-index:3; }
        .p3{ top:2%;   left:66%; transform:rotate(-4deg); }
        .p4{ top:52%;  left:14%; transform:rotate(6deg);  }
        .p5{ top:50%;  left:52%; transform:rotate(-6deg); z-index:2; }

        .stamp{
          position:absolute;
          bottom:6%;
          right:2%;
          width:86px;
          height:86px;
          border:1.5px dashed var(--sage);
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          text-align:center;
          font-family:'IBM Plex Mono',monospace;
          font-size:10px;
          letter-spacing:0.08em;
          color:var(--sage);
          text-transform:uppercase;
          line-height:1.5;
          transform:rotate(8deg);
        }

        @media (max-width:900px){
          .moments-inner{ grid-template-columns:1fr; }
          .polaroid-stage{ min-height:360px; margin-top:12px; }
          .polaroid{ width:clamp(120px,32vw,150px); }
          .p1{ top:0%; left:0%; }
          .p2{ top:14%; left:34%; }
          .p3{ top:0%; left:68%; }
          .p4{ top:56%; left:8%; }
          .p5{ top:54%; left:56%; }
          .stamp{ display:none; }
        }

        @media (prefers-reduced-motion: reduce){
          .polaroid, .moments-cta, .moments-cta .arrow{ transition:none !important; }
        }
      `}</style>

      <div className="moments-inner">
        <div className="moments-copy-col">
          <div className="moments-eyebrow">
            <span className="dot"></span>Shot on Nikon
          </div>
          <h2 className="moments-title">
            Not every shot
            <br />
            needs a{" "}
            <span className="scribble">
              <i>tripod</i>
              <svg viewBox="0 0 160 14" fill="none">
                <path
                  d="M2 10C30 2 60 2 80 8C100 14 130 4 158 6"
                  stroke="#FFE300"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="moments-copy">
            Some of the best frames happen between plans — a laugh at the
            table, the dog mid-jump, light through a bus window. Built to
            keep up with those, not just the posed ones.
          </p>
          <div className="moments-tags">
            <span className="moments-tag">golden hour</span>
            <span className="moments-tag">good boy 🐾</span>
            <span className="moments-tag">no re-takes</span>
          </div>
          <button className="moments-cta">
            See more moments <span className="arrow">→</span>
          </button>
        </div>

        <div className="polaroid-stage">
          <div className="polaroid p1">
            <div className="tape"></div>
            <div className="frame">
              <img
                src="/others/sea.jpg"
                alt="Dog jumping in a field"
              />
            </div>
            <div className="caption">good boy, mid-air</div>
          </div>
          <div className="polaroid p2">
            <div className="tape"></div>
            <div className="frame">
              <img
                src="/others/view.jpg"
                alt="Friends laughing at a table"
              />
            </div>
            <div className="caption">that one joke</div>
          </div>
          <div className="polaroid p3">
            <div className="tape"></div>
            <div className="frame">
              <img
                src="/others/kids.jpg"
                alt="Sunset over hills"
              />
            </div>
            <div className="caption">6:14pm, still gold</div>
          </div>
          <div className="polaroid p4">
            <div className="tape"></div>
            <div className="frame">
              <img
                src="/others/birds.jpg"
                alt="Child laughing"
              />
            </div>
            <div className="caption">unfiltered giggle</div>
          </div>
          <div className="polaroid p5">
            <div className="tape"></div>
            <div className="frame">
              <img
                src="/others/couples.jpg"
                alt="Street photography moment"
              />
            </div>
            <div className="caption">bus window light</div>
          </div>
          <div className="stamp">
            Z-mount
            <br />
            captured
          </div>
        </div>
      </div>
    </section>
  );
}