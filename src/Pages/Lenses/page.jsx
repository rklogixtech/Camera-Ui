  // import React, { useEffect, useRef, useState, useCallback } from "react";

  // /* ═══════ CONFIG ═══════ */
  // const FRAME_COUNT = 192;
  // const FRAME_BASE = "https://rassweiler-it.de/images/codepen/frames/frame_";
  // const FRAME_EXT = ".jpg";
  // const PASS1_STEP = 6;
  // const framePath = (n) =>
  //   `${FRAME_BASE}${String(n).padStart(4, "0")}${FRAME_EXT}`;

  // const STATUSES = [
  //   "Polishing the glass…",
  //   "Aligning the elements…",
  //   "Focusing the lens…",
  //   "Almost there…",
  // ];
  // const MARQUEE = [
  //   "NIKON Optics",
  //   "Built for Light",
  //   "Full-Frame Mirrorless",
  //   "Cinema-Grade Glass",
  //   "Aperture Perfected",
  //   "Since 1964",
  // ];

  // const LENSES = [
  //   {
  //     tag: "Prime",
  //     title: (
  //       <>
  //         The <em>Fifty</em>
  //         <br />
  //         That Sees
  //       </>
  //     ),
  //     desc: "50mm ƒ/1.2 — nine rounded blades, eleven elements, one honest frame.",
  //     img: "https://rassweiler-it.de/images/codepen/pool.jpg",
  //   },
  //   {
  //     tag: "Zoom",
  //     title: (
  //       <>
  //         Range
  //         <br />
  //         without <em>loss</em>
  //       </>
  //     ),
  //     desc: "24–70mm ƒ/2.8 — fluorite-built workhorse. Constant aperture through the whole zoom.",
  //     img: "https://rassweiler-it.de/images/codepen/suite.jpg",
  //   },
  //   {
  //     tag: "Telephoto",
  //     title: (
  //       <>
  //         Distance,
  //         <br />
  //         <em>dissolved</em>
  //       </>
  //     ),
  //     desc: "85mm ƒ/1.4 — creamy bokeh, razor focus, rendering that flatters skin and light.",
  //     img: "https://rassweiler-it.de/images/codepen/restaurant.jpg",
  //   },
  // ];

  // const FEATURES = [
  //   {
  //     icon: "🔭",
  //     name: "Nano Crystal Coat",
  //     desc: "Reflections killed at the source — multi-layer coating on every element.",
  //   },
  //   {
  //     icon: "💧",
  //     name: "Weather Sealed",
  //     desc: "Fluorine front element repels water, dust, and fingerprints.",
  //   },
  //   {
  //     icon: "⚙️",
  //     name: "Silent AF",
  //     desc: "Linear stepping motors — focus you feel, not hear.",
  //   },
  //   {
  //     icon: "🔘",
  //     name: "Aperture Ring",
  //     desc: "Clickable or stepless. De-click for video, click for stills.",
  //   },
  //   {
  //     icon: "🌈",
  //     name: "ED Glass",
  //     desc: "Extra-low dispersion elements. Chromatic aberration corrected.",
  //   },
  //   {
  //     icon: "🎞️",
  //     name: "Cinema Ready",
  //     desc: "Minimal focus breathing. Parfocal zoom. Built for motion.",
  //   },
  //   {
  //     icon: "🛡️",
  //     name: "Metal Barrel",
  //     desc: "Machined aluminium. Cold to the touch. Warm in the hand.",
  //   },
  //   {
  //     icon: "∞",
  //     name: "Full-Frame",
  //     desc: "Every NIKON lens covers the full 35mm sensor. No crop. No compromise.",
  //   },
  // ];

  // const LINEUP = [
  //   {
  //     type: "Signature Prime",
  //     name: "50mm ƒ/1.2 S",
  //     price: "€ 2,890",
  //     img: "https://rassweiler-it.de/images/codepen/suite.jpg",
  //     main: true,
  //   },
  //   {
  //     type: "Versatile Zoom",
  //     name: "24–70mm ƒ/2.8 S",
  //     price: "€ 2,190",
  //     img: "https://rassweiler-it.de/images/codepen/pool.jpg",
  //   },
  //   {
  //     type: "Portrait Prime",
  //     name: "85mm ƒ/1.4 S",
  //     price: "€ 1,690",
  //     img: "https://rassweiler-it.de/images/codepen/restaurant.jpg",
  //   },
  // ];

  // const TESTIMONIALS = [
  //   {
  //     quote:
  //       "The 50mm renders the way I remember light — not the way I remember cameras.",
  //     name: "Ines Takahashi",
  //     role: "Documentary Photographer",
  //   },
  //   {
  //     quote:
  //       "Wide open at ƒ/1.2 and it's still sharp corner to corner. That's not glass, that's sorcery.",
  //     name: "Marc Devereux",
  //     role: "Wedding Filmmaker",
  //   },
  //   {
  //     quote:
  //       "I've shot on every major mount for thirty years. NIKON is the first lens I don't think about.",
  //     name: "Anaya Okonkwo",
  //     role: "National Geographic Contributor",
  //   },
  // ];

  // const GALLERY = [
  //   {
  //     img: "https://rassweiler-it.de/images/codepen/pool.jpg",
  //     label: "Golden Hour",
  //   },
  //   {
  //     img: "https://rassweiler-it.de/images/codepen/suite.jpg",
  //     label: "Interior Light",
  //   },
  //   {
  //     img: "https://rassweiler-it.de/images/codepen/restaurant.jpg",
  //     label: "Candlelit",
  //   },
  //   {
  //     img: "https://rassweiler-it.de/images/codepen/pool.jpg",
  //     label: "Reflections",
  //   },
  //   {
  //     img: "https://rassweiler-it.de/images/codepen/restaurant.jpg",
  //     label: "Dusk",
  //   },
  //   {
  //     img: "https://rassweiler-it.de/images/codepen/suite.jpg",
  //     label: "Stillness",
  //   },
  // ];

  // /* ═══════ CSS ═══════ */
  // const CSS = `
  // @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Barlow+Condensed:wght@300;400;500&display=swap');
  // .lm-root,.lm-root *,.lm-root *::before,.lm-root *::after{margin:0;padding:0;box-sizing:border-box}
  // .lm-root{--g:#b8965a;--gp:#e2c98a;--gd:#7a5c2e;--ink:#08060a;--ink2:#0f0c14;--s:#f5f0e8;--sm:rgba(245,240,232,.55);--serif:"Cormorant Garamond",Georgia,serif;--cond:"Barlow Condensed",sans-serif;background:var(--ink);color:var(--s);font-family:var(--cond);font-weight:300;overflow-x:clip;position:relative;width:100%}
  // .lm-root ::-webkit-scrollbar{width:3px}
  // .lm-root ::-webkit-scrollbar-track{background:var(--ink)}
  // .lm-root ::-webkit-scrollbar-thumb{background:var(--g)}

  // /* LOADER */
  // .lm-loader{position:fixed;inset:0;z-index:9999;background:var(--ink);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:48px;transition:opacity .8s ease,visibility .8s ease}
  // .lm-loader.hidden{opacity:0;visibility:hidden;pointer-events:none}
  // .lm-loader-logo{font-family:var(--serif);font-size:clamp(36px,6vw,72px);font-weight:300;letter-spacing:.3em;text-transform:uppercase;color:var(--gp);opacity:0;transform:translateY(16px);animation:lmLogo .9s .1s ease forwards}
  // @keyframes lmLogo{to{opacity:1;transform:translateY(0)}}
  // .lm-loader-tagline{font-size:11px;font-weight:400;letter-spacing:.45em;text-transform:uppercase;color:rgba(184,150,90,.5);margin-top:-32px;opacity:0;animation:lmLogo .9s .35s ease forwards}
  // .lm-loader-bar-wrap{width:clamp(200px,30vw,320px);height:1px;background:rgba(184,150,90,.15);position:relative;overflow:hidden}
  // .lm-loader-bar{position:absolute;top:0;left:0;height:100%;width:0;background:linear-gradient(to right,transparent,var(--g),var(--gp));transition:width .25s ease;box-shadow:0 0 12px rgba(184,150,90,.6)}
  // .lm-loader-pct{font-family:var(--serif);font-size:11px;letter-spacing:.2em;color:rgba(184,150,90,.45);margin-top:-32px;opacity:0;animation:lmLogo .9s .5s ease forwards}
  // .lm-loader-status{font-size:10px;font-weight:400;letter-spacing:.3em;text-transform:uppercase;color:rgba(245,240,232,.25);margin-top:-32px;min-height:16px}
  // .lm-orb{position:absolute;border-radius:50%;filter:blur(80px);pointer-events:none;opacity:.35}
  // .lm-orb-1{width:400px;height:400px;background:#3a1a05;top:-100px;left:-100px}
  // .lm-orb-2{width:300px;height:300px;background:#1a0a30;bottom:-80px;right:-60px}

  // /* HERO */
  // .lm-hero-scroll{position:relative;height:350vh}
  // .lm-hero-sticky{position:sticky;top:0;height:100vh;overflow:hidden}
  // .lm-canvas{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
  // .lm-grad{position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 50% 45%,rgba(212,175,55,.08) 0%,transparent 45%),linear-gradient(to bottom,rgba(8,6,10,.25) 0%,transparent 25%),linear-gradient(to top,rgba(8,6,10,1) 0%,rgba(8,6,10,.65) 15%,rgba(8,6,10,0) 45%),linear-gradient(105deg,rgba(8,6,10,.5) 0%,transparent 50%)}
  // .lm-hero-text{position:absolute;bottom:0;left:0;padding:0 0 80px 72px;max-width:900px;z-index:2;will-change:opacity,transform}
  // .lm-eyebrow{font-size:11px;font-weight:400;letter-spacing:.45em;text-transform:uppercase;color:var(--g);margin-bottom:24px;display:flex;align-items:center;gap:16px;text-shadow:0 1px 4px rgba(0,0,0,.8);opacity:0;transform:translateY(20px)}
  // .lm-ready .lm-eyebrow{animation:lmUp .8s .1s ease forwards}
  // .lm-eyebrow::before{content:"";display:block;width:32px;height:1px;background:var(--g)}
  // .lm-title{font-family:var(--serif);font-size:clamp(64px,10vw,140px);font-weight:300;line-height:.92;letter-spacing:-.02em;margin-bottom:36px;text-shadow:1px 1px 0 rgba(0,0,0,.9),-1px -1px 0 rgba(0,0,0,.9),0 2px 8px rgba(0,0,0,.7);opacity:0;transform:translateY(50px)}
  // .lm-ready .lm-title{animation:lmUp 1.1s .3s ease forwards}
  // .lm-title .italic{font-style:italic;color:var(--gp)}
  // .lm-title .outline{-webkit-text-stroke:1px rgba(245,240,232,.5);color:transparent;text-shadow:1px 1px 0 rgba(0,0,0,.85),-1px -1px 0 rgba(0,0,0,.85),0 2px 10px rgba(0,0,0,.6)}
  // .lm-sub{font-size:14px;font-weight:300;letter-spacing:.1em;line-height:1.85;color:var(--sm);max-width:420px;margin-bottom:48px;text-shadow:0 1px 3px rgba(0,0,0,.9);opacity:0;transform:translateY(24px)}
  // .lm-ready .lm-sub{animation:lmUp .9s .6s ease forwards}
  // .lm-cta-row{display:flex;align-items:center;gap:32px;opacity:0;transform:translateY(18px)}
  // .lm-ready .lm-cta-row{animation:lmUp .8s .85s ease forwards}
  // @keyframes lmUp{to{opacity:1;transform:translateY(0)}}
  // .lm-btn-fill{display:inline-block;background:var(--g);color:var(--ink);font-size:12px;font-weight:500;letter-spacing:.22em;text-transform:uppercase;padding:16px 40px;text-decoration:none;transition:background .3s,transform .3s;border:none;cursor:pointer}
  // .lm-btn-fill:hover{background:var(--gp);transform:translateY(-2px)}
  // .lm-btn-ghost{display:inline-block;font-size:12px;font-weight:400;letter-spacing:.22em;text-transform:uppercase;color:rgba(245,240,232,.6);text-decoration:none;border-bottom:1px solid rgba(245,240,232,.25);padding-bottom:3px;transition:color .3s,border-color .3s}
  // .lm-btn-ghost:hover{color:var(--g);border-color:var(--g)}
  // .lm-scrub-progress{position:absolute;bottom:0;left:0;right:0;height:2px;background:rgba(184,150,90,.12);z-index:3}
  // .lm-scrub-bar{height:100%;width:0;background:linear-gradient(to right,var(--gd),var(--g),var(--gp));box-shadow:0 0 8px rgba(184,150,90,.5);position:relative}
  // .lm-scrub-bar::after{content:"";position:absolute;right:-4px;top:50%;transform:translateY(-50%);width:8px;height:8px;border-radius:50%;background:var(--gp);box-shadow:0 0 10px rgba(226,201,138,.8)}
  // .lm-scroll-ind{position:absolute;bottom:48px;left:50%;transform:translateX(-50%);z-index:3;display:flex;flex-direction:column;align-items:center;gap:8px;opacity:0}
  // .lm-ready .lm-scroll-ind{animation:lmIn .8s 1.2s ease forwards}
  // @keyframes lmIn{to{opacity:1}}
  // .lm-scroll-ind span{font-size:9px;letter-spacing:.35em;text-transform:uppercase;color:rgba(245,240,232,.4)}
  // .lm-scroll-dot{width:6px;height:6px;border-radius:50%;background:var(--g);animation:lmDot 2s ease-in-out infinite}
  // @keyframes lmDot{0%,100%{transform:translateY(0);opacity:.4}50%{transform:translateY(8px);opacity:1}}
  // .lm-side-label{position:absolute;right:56px;bottom:80px;z-index:3;writing-mode:vertical-rl;font-size:10px;font-weight:400;letter-spacing:.3em;text-transform:uppercase;color:rgba(245,240,232,.3);display:flex;align-items:center;gap:12px;opacity:0}
  // .lm-ready .lm-side-label{animation:lmSide .8s 1s ease forwards}
  // @keyframes lmSide{from{opacity:0;transform:translateX(12px)}to{opacity:1;transform:translateX(0)}}
  // .lm-side-label::after{content:"";display:block;width:1px;height:48px;background:rgba(245,240,232,.2)}
  // .lm-bokeh{position:absolute;inset:0;pointer-events:none;z-index:1;overflow:hidden}
  // .lm-bokeh span{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(226,201,138,.55),transparent 70%);filter:blur(6px);opacity:0;animation:lmBk linear infinite}
  // @keyframes lmBk{0%{transform:translateY(20px);opacity:0}20%{opacity:.35}80%{opacity:.35}100%{transform:translateY(-120px);opacity:0}}

  // /* MARQUEE */
  // .lm-marquee{background:var(--g);overflow:hidden;padding:14px 0;display:flex;white-space:nowrap}
  // .lm-marquee-in{display:inline-flex;animation:lmMarq 22s linear infinite}
  // @keyframes lmMarq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  // .lm-marquee-item{font-size:12px;font-weight:500;letter-spacing:.3em;text-transform:uppercase;color:var(--ink);padding:0 40px}
  // .lm-marquee-dot{color:rgba(8,6,10,.3);padding:0 8px}

  // /* SECTIONS */
  // .lm-tag{display:flex;align-items:center;gap:12px;font-size:10px;letter-spacing:.4em;text-transform:uppercase;color:var(--g);margin-bottom:28px}
  // .lm-tag::before{content:"";display:block;width:24px;height:1px;background:var(--g)}
  // .lm-big{font-family:var(--serif);font-size:clamp(42px,5vw,72px);font-weight:300;line-height:1.1;margin-bottom:32px}
  // .lm-big em{font-style:italic;color:var(--gp)}
  // .lm-body{font-size:15px;font-weight:300;line-height:1.95;color:var(--sm);margin-bottom:40px}

  // /* INTRO */
  // .lm-intro{padding:160px 0 0;position:relative;overflow:hidden;background:linear-gradient(175deg,var(--ink) 0%,var(--ink2) 100%)}
  // .lm-intro::before{content:"";position:absolute;top:-2px;left:0;right:0;height:82px;background:var(--ink);clip-path:polygon(0 0,100% 0,100% 0,0 100%)}
  // .lm-intro-in{display:grid;grid-template-columns:1fr 1fr;gap:0;max-width:1400px;margin:0 auto;padding:0 72px;align-items:center}
  // .lm-intro-l{padding-right:80px}
  // .lm-stats{display:grid;grid-template-columns:1fr 1fr;gap:2px}
  // .lm-stat{background:rgba(184,150,90,.07);border:1px solid rgba(184,150,90,.1);padding:48px 36px;transition:background .4s;position:relative;overflow:hidden}
  // .lm-stat::after{content:"";position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(to right,transparent,var(--g),transparent);transform:scaleX(0);transition:transform .5s}
  // .lm-stat:hover{background:rgba(184,150,90,.13)}
  // .lm-stat:hover::after{transform:scaleX(1)}
  // .lm-stat-n{font-family:var(--serif);font-size:64px;font-weight:300;color:var(--g);line-height:1;margin-bottom:10px}
  // .lm-stat-l{font-size:10px;letter-spacing:.28em;text-transform:uppercase;color:rgba(245,240,232,.4)}

  // /* LENSES */
  // .lm-lenses{padding:0 0 160px;background:var(--ink2)}
  // .lm-lenses-hd{padding:120px 72px 80px;display:flex;justify-content:space-between;align-items:flex-end}
  // .lm-lenses-num{font-family:var(--serif);font-size:clamp(100px,18vw,220px);font-weight:300;line-height:1;color:rgba(184,150,90,.07);pointer-events:none;user-select:none}
  // .lm-lenses-hd-r{text-align:right}
  // .lm-lenses-hd-r .lm-tag{justify-content:flex-end}
  // .lm-lenses-hd-r .lm-big{text-align:right;margin-bottom:0}
  // .lm-lenses-cards{padding:0 72px;display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
  // .lm-lens{position:relative;overflow:hidden;cursor:pointer}
  // .lm-lens:nth-child(2){margin-top:60px}
  // .lm-lens:nth-child(3){margin-top:120px}
  // .lm-lens-imgw{aspect-ratio:2/3;overflow:hidden;position:relative;background:linear-gradient(145deg,#1a1010,#0a0808)}
  // .lm-lens-imgw img{width:100%;height:100%;object-fit:cover;transition:transform .9s cubic-bezier(.25,.46,.45,.94);display:block}
  // .lm-lens:hover .lm-lens-imgw img{transform:scale(1.08)}
  // .lm-lens-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(8,6,10,.88) 0%,rgba(8,6,10,.1) 45%,transparent 100%)}
  // .lm-lens-body{position:absolute;bottom:0;left:0;right:0;padding:36px 32px}
  // .lm-lens-tag{font-size:9px;letter-spacing:.35em;text-transform:uppercase;color:var(--g);margin-bottom:10px}
  // .lm-lens-title{font-family:var(--serif);font-size:clamp(24px,2.5vw,34px);font-weight:300;color:var(--s);line-height:1.2;margin-bottom:10px}
  // .lm-lens-title em{font-style:italic}
  // .lm-lens-desc{font-size:13px;font-weight:300;color:rgba(245,240,232,.55);line-height:1.7;max-height:0;overflow:hidden;transition:max-height .5s,opacity .5s;opacity:0}
  // .lm-lens:hover .lm-lens-desc{max-height:120px;opacity:1}

  // /* QUOTE */
  // .lm-quote{position:relative;padding:180px 72px;overflow:hidden;background:var(--ink);display:flex;flex-direction:column;align-items:center;text-align:center}
  // .lm-quote-bg{position:absolute;font-family:var(--serif);font-size:clamp(180px,28vw,360px);font-weight:300;font-style:italic;color:rgba(184,150,90,.04);pointer-events:none;user-select:none;white-space:nowrap;top:50%;left:50%;transform:translate(-50%,-50%);line-height:1}
  // .lm-quote-t{font-family:var(--serif);font-size:clamp(28px,3.8vw,54px);font-weight:300;font-style:italic;color:var(--s);line-height:1.4;max-width:900px;margin-bottom:32px;position:relative;z-index:1}
  // .lm-quote-t mark{background:none;color:var(--gp);font-style:normal}
  // .lm-quote-a{font-size:10px;letter-spacing:.35em;text-transform:uppercase;color:var(--g);position:relative;z-index:1}

  // /* HERITAGE */
  // .lm-heritage{padding:160px 72px;background:var(--ink2);display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;max-width:1400px;margin:0 auto}
  // .lm-heritage-img{position:relative;aspect-ratio:4/5;overflow:hidden}
  // .lm-heritage-img img{width:100%;height:100%;object-fit:cover;transition:transform 1s ease}
  // .lm-heritage:hover .lm-heritage-img img{transform:scale(1.05)}
  // .lm-heritage-img::after{content:"Since 1964";position:absolute;bottom:24px;left:24px;font-family:var(--serif);font-size:14px;font-style:italic;letter-spacing:.15em;color:var(--gp);background:rgba(8,6,10,.7);padding:8px 16px;backdrop-filter:blur(8px)}

  // /* STRIP */
  // .lm-strip{position:relative;height:70vh;overflow:hidden;background:linear-gradient(135deg,#1a0f05 0%,#08060a 50%,#0a0510 100%)}
  // .lm-strip-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:brightness(.5) saturate(1.4) contrast(1.1);transform:scale(1.05);transition:transform 8s ease}
  // .lm-strip:hover .lm-strip-img{transform:scale(1)}
  // .lm-strip-ov{position:absolute;inset:0;background:linear-gradient(to right,rgba(8,6,10,.7) 0%,transparent 40%,transparent 60%,rgba(8,6,10,.7) 100%),linear-gradient(to bottom,rgba(8,6,10,.4) 0%,transparent 30%,transparent 70%,rgba(8,6,10,.5) 100%)}
  // .lm-strip-c{position:absolute;inset:0;z-index:2;display:flex;align-items:center;padding:0 72px}
  // .lm-strip-l{font-size:10px;letter-spacing:.45em;text-transform:uppercase;color:var(--g);margin-bottom:16px;display:flex;align-items:center;gap:12px}
  // .lm-strip-l::before{content:"";display:block;width:24px;height:1px;background:var(--g)}
  // .lm-strip-t{font-family:var(--serif);font-size:clamp(52px,7vw,100px);font-weight:300;line-height:.95;color:var(--s);margin-bottom:36px}
  // .lm-strip-t em{font-style:italic;color:var(--gp)}

  // /* FEATURES */
  // .lm-features{padding:160px 72px;background:var(--ink2);position:relative}
  // .lm-features::before{content:"";position:absolute;top:-1px;left:0;right:0;height:100px;background:linear-gradient(to bottom right,var(--ink) 0%,var(--ink) 50%,transparent 50%)}
  // .lm-grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin-top:80px;border:1px solid rgba(184,150,90,.1)}
  // .lm-feat{padding:52px 36px;border-right:1px solid rgba(184,150,90,.1);border-bottom:1px solid rgba(184,150,90,.1);position:relative;overflow:hidden;transition:background .4s}
  // .lm-feat:hover{background:rgba(184,150,90,.05)}
  // .lm-feat::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:var(--g);transform:scaleX(0);transform-origin:left;transition:transform .5s ease}
  // .lm-feat:hover::before{transform:scaleX(1)}
  // .lm-feat-i{font-size:32px;margin-bottom:24px;display:block}
  // .lm-feat-n{font-family:var(--serif);font-size:22px;font-weight:300;color:var(--s);margin-bottom:12px}
  // .lm-feat-d{font-size:13px;font-weight:300;line-height:1.8;color:var(--sm)}
  // .lm-feat-a{position:absolute;bottom:28px;right:28px;font-size:20px;color:rgba(184,150,90,.3);transition:color .3s,transform .3s}
  // .lm-feat:hover .lm-feat-a{color:var(--g);transform:translate(4px,-4px)}

  // /* GALLERY */
  // .lm-gallery{padding:160px 72px;background:var(--ink)}
  // .lm-gallery-hd{max-width:1400px;margin:0 auto 64px;display:flex;justify-content:space-between;align-items:flex-end;padding-bottom:32px;border-bottom:1px solid rgba(184,150,90,.12)}
  // .lm-gallery-hd .lm-big{margin-bottom:0}
  // .lm-gallery-grid{max-width:1400px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:4px}
  // .lm-gtile{position:relative;aspect-ratio:1/1;overflow:hidden;cursor:pointer}
  // .lm-gtile:nth-child(1){grid-column:span 2;grid-row:span 2;aspect-ratio:auto}
  // .lm-gtile img{width:100%;height:100%;object-fit:cover;transition:transform .8s ease;display:block}
  // .lm-gtile:hover img{transform:scale(1.06)}
  // .lm-gtile-l{position:absolute;bottom:20px;left:20px;font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:var(--gp);background:rgba(8,6,10,.6);padding:6px 12px;backdrop-filter:blur(8px);opacity:0;transform:translateY(8px);transition:opacity .4s,transform .4s}
  // .lm-gtile:hover .lm-gtile-l{opacity:1;transform:translateY(0)}

  // /* LINEUP */
  // .lm-lineup{padding:0 0 160px;background:var(--ink2)}
  // .lm-lineup-in{max-width:1400px;margin:0 auto;padding:0 72px}
  // .lm-lineup-hd{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:64px;padding-bottom:32px;border-bottom:1px solid rgba(184,150,90,.12)}
  // .lm-lineup-hd .lm-big{margin-bottom:0}
  // .lm-lineup-grid{display:grid;grid-template-columns:1.6fr 1fr;gap:3px}
  // .lm-lc{position:relative;overflow:hidden;cursor:pointer}
  // .lm-lc.main{grid-row:span 2}
  // .lm-lc-img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .8s ease}
  // .lm-lc.main .lm-lc-img{height:640px}
  // .lm-lc:not(.main) .lm-lc-img{height:316px}
  // .lm-lc:hover .lm-lc-img{transform:scale(1.04)}
  // .lm-lc-info{position:absolute;bottom:0;left:0;right:0;padding:40px 36px;background:linear-gradient(to top,rgba(8,6,10,.92) 0%,rgba(8,6,10,.3) 60%,transparent 100%);transform:translateY(8px);transition:transform .4s}
  // .lm-lc:hover .lm-lc-info{transform:translateY(0)}
  // .lm-lc-t{font-size:9px;letter-spacing:.3em;text-transform:uppercase;color:var(--g);margin-bottom:6px}
  // .lm-lc-n{font-family:var(--serif);font-size:28px;font-weight:300;color:var(--s);margin-bottom:8px}
  // .lm-lc-p{font-size:12px;color:rgba(245,240,232,.5);letter-spacing:.05em}
  // .lm-lc-p strong{color:var(--gp);font-weight:400}
  // .lm-lc-stack{display:grid;gap:3px}

  // /* TESTIMONIALS */
  // .lm-testi{padding:160px 72px;background:var(--ink);position:relative;overflow:hidden}
  // .lm-testi-hd{max-width:1400px;margin:0 auto 80px;text-align:center}
  // .lm-testi-hd .lm-tag{justify-content:center}
  // .lm-testi-hd .lm-tag::before{display:none}
  // .lm-testi-hd .lm-big{margin-bottom:0}
  // .lm-testi-grid{max-width:1400px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
  // .lm-tc{padding:48px 36px;background:rgba(184,150,90,.05);border:1px solid rgba(184,150,90,.12);position:relative;transition:background .4s,border-color .4s}
  // .lm-tc:hover{background:rgba(184,150,90,.08);border-color:rgba(184,150,90,.3)}
  // .lm-tc-q{font-family:var(--serif);font-size:22px;font-style:italic;line-height:1.5;color:var(--s);margin-bottom:32px}
  // .lm-tc-q::before{content:"“";font-size:64px;line-height:0;vertical-align:-.4em;color:var(--g);opacity:.4;margin-right:6px}
  // .lm-tc-n{font-family:var(--serif);font-size:16px;color:var(--gp);margin-bottom:4px}
  // .lm-tc-r{font-size:10px;letter-spacing:.28em;text-transform:uppercase;color:rgba(245,240,232,.4)}


  // /* REVEAL */
  // .rv{opacity:0;transform:translateY(44px);transition:opacity .9s ease,transform .9s ease}
  // .rv.in{opacity:1;transform:translateY(0)}
  // .rv.d1{transition-delay:.12s}
  // .rv.d2{transition-delay:.24s}
  // .rv.d3{transition-delay:.36s}

  // /* RESPONSIVE */
  // @media(max-width:1100px){
  //   .lm-hero-text{padding:0 0 72px 32px}
  //   .lm-lineup-grid{grid-template-columns:1fr}
  //   .lm-lc.main .lm-lc-img{height:420px}
  //   .lm-lenses-hd,.lm-strip-c,.lm-features,.lm-lineup-in,.lm-quote,.lm-reserve,.lm-gallery,.lm-testi{padding-left:32px;padding-right:32px}
  //   .lm-lens:nth-child(2),.lm-lens:nth-child(3){margin-top:0}
  //   .lm-lenses-num{display:none}
  //   .lm-gtile:nth-child(1){grid-column:span 2;grid-row:span 1}
  // }
  // @media(max-width:680px){
  //   .lm-lenses-cards,.lm-grid4,.lm-testi-grid{grid-template-columns:1fr}
  //   .lm-gallery-grid{grid-template-columns:1fr}
  //   .lm-gtile:nth-child(1){grid-column:auto;grid-row:auto;aspect-ratio:1/1}
  //   .lm-stats{grid-template-columns:1fr 1fr}
  //   .lm-title{font-size:clamp(48px,15vw,80px)}
  //   .lm-hero-scroll{height:280vh}
  //   .lm-side-label{display:none}
  //   .lm-quote-bg{font-size:clamp(120px,40vw,240px)}
  // }
  // `;

  // /* ═══════ COMPONENT ═══════ */
  // export default function NIKONPage() {
  //   const [progress, setProgress] = useState(0);
  //   const [statusIdx, setStatusIdx] = useState(0);
  //   const [ready, setReady] = useState(false);
  //   const [navSolid, setNavSolid] = useState(false);

  //   const canvasRef = useRef(null);
  //   const heroScrollRef = useRef(null);
  //   const heroTextRef = useRef(null);
  //   const scrubBarRef = useRef(null);
  //   const scrollIndRef = useRef(null);
  //   const gradRef = useRef(null);
  //   const framesRef = useRef(new Array(FRAME_COUNT));
  //   const currentFrameIdxRef = useRef(0);
  //   const targetFrameRef = useRef(0);
  //   const displayFrameRef = useRef(0);
  //   const rafRef = useRef(null);
  //   const pass1DoneRef = useRef(0);
  //   const initializedRef = useRef(false);

  //   const drawFrame = useCallback((idx) => {
  //     const canvas = canvasRef.current;
  //     const img = framesRef.current[idx];
  //     if (!canvas || !img || !img.complete || !img.naturalWidth) return;
  //     const ctx = canvas.getContext("2d");
  //     const cw = canvas.width,
  //       ch = canvas.height;
  //     const iw = img.naturalWidth,
  //       ih = img.naturalHeight;
  //     const scale = Math.max(cw / iw, ch / ih);
  //     const dw = iw * scale,
  //       dh = ih * scale;
  //     ctx.clearRect(0, 0, cw, ch);
  //     ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
  //   }, []);

  //   const findNearestFrame = useCallback((idx) => {
  //     if (framesRef.current[idx]) return idx;
  //     for (let o = 1; o < 12; o++) {
  //       if (idx - o >= 0 && framesRef.current[idx - o]) return idx - o;
  //       if (idx + o < FRAME_COUNT && framesRef.current[idx + o]) return idx + o;
  //     }
  //     return null;
  //   }, []);

  //   const resizeCanvas = useCallback(() => {
  //     const canvas = canvasRef.current;
  //     if (!canvas) return;
  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;
  //     const found = findNearestFrame(currentFrameIdxRef.current);
  //     if (found !== null) drawFrame(found);
  //   }, [drawFrame, findNearestFrame]);

  //   useEffect(() => {
  //     if (initializedRef.current) return;
  //     initializedRef.current = true;
  //     document.body.style.overflow = "hidden";
  //     resizeCanvas();
  //     window.addEventListener("resize", resizeCanvas);
  //     const pass1Count = Math.ceil(FRAME_COUNT / PASS1_STEP);
  //     let pass1Complete = false;
  //     let fakeP = 0;
  //     const fakeInterval = setInterval(() => {
  //       if (pass1DoneRef.current < pass1Count) {
  //         fakeP = Math.min(fakeP + Math.random() * 2, 25);
  //         setProgress(Math.max(fakeP, (pass1DoneRef.current / pass1Count) * 90));
  //       } else clearInterval(fakeInterval);
  //     }, 200);

  //     const dismiss = () => {
  //       setReady(true);
  //       document.body.style.overflow = "";
  //       drawFrame(0);
  //       for (let i = 1; i <= FRAME_COUNT; i++) {
  //         const idx = i - 1;
  //         if (framesRef.current[idx]) continue;
  //         const img = new Image();
  //         img.onload = () => {
  //           framesRef.current[idx] = img;
  //         };
  //         img.src = framePath(i);
  //       }
  //     };

  //     for (let i = 1; i <= FRAME_COUNT; i += PASS1_STEP) {
  //       const idx = i - 1;
  //       const img = new Image();
  //       img.onload = () => {
  //         framesRef.current[idx] = img;
  //         pass1DoneRef.current++;
  //         const pct = (pass1DoneRef.current / pass1Count) * 90;
  //         setProgress(pct);
  //         setStatusIdx(pct < 30 ? 0 : pct < 60 ? 1 : pct < 85 ? 2 : 3);
  //         if (idx === 0) drawFrame(0);
  //         if (pass1DoneRef.current >= pass1Count && !pass1Complete) {
  //           pass1Complete = true;
  //           clearInterval(fakeInterval);
  //           setProgress(95);
  //           setStatusIdx(3);
  //           setTimeout(dismiss, 400);
  //         }
  //       };
  //       img.onerror = () => {
  //         pass1DoneRef.current++;
  //         if (pass1DoneRef.current >= pass1Count && !pass1Complete) {
  //           pass1Complete = true;
  //           clearInterval(fakeInterval);
  //           setTimeout(dismiss, 400);
  //         }
  //       };
  //       img.src = framePath(i);
  //     }
  //     const fallback = setTimeout(() => {
  //       if (!pass1Complete) {
  //         pass1Complete = true;
  //         clearInterval(fakeInterval);
  //         setProgress(100);
  //         dismiss();
  //       }
  //     }, 15000);
  //     return () => {
  //       clearInterval(fakeInterval);
  //       clearTimeout(fallback);
  //       window.removeEventListener("resize", resizeCanvas);
  //     };
  //   }, [drawFrame, resizeCanvas]);

  //   useEffect(() => {
  //     if (!ready) return;
  //     const hs = heroScrollRef.current,
  //       ht = heroTextRef.current;
  //     const sb = scrubBarRef.current,
  //       si = scrollIndRef.current,
  //       gr = gradRef.current;
  //     if (!hs || !ht) return;
  //     let running = true,
  //       lastSolid = false;

  //     const loop = () => {
  //       if (!running) return;
  //       const diff = targetFrameRef.current - displayFrameRef.current;
  //       // Lerp factor badhaya (0.18 -> 0.30) kyunki height 500vh -> 350vh
  //       if (Math.abs(diff) > 0.5) displayFrameRef.current += diff * 0.3;
  //       else displayFrameRef.current = targetFrameRef.current;
  //       const idx = Math.max(
  //         0,
  //         Math.min(FRAME_COUNT - 1, Math.round(displayFrameRef.current)),
  //       );
  //       if (idx !== currentFrameIdxRef.current) {
  //         currentFrameIdxRef.current = idx;
  //         const d = findNearestFrame(idx);
  //         if (d !== null) drawFrame(d);
  //       }
  //       rafRef.current = requestAnimationFrame(loop);
  //     };
  //     rafRef.current = requestAnimationFrame(loop);

  //     const onScroll = () => {
  //       const rect = hs.getBoundingClientRect();
  //       const total = rect.height - window.innerHeight;
  //       const p = Math.max(0, Math.min(1, -rect.top / total));
  //       targetFrameRef.current = p * (FRAME_COUNT - 1);
  //       if (sb) sb.style.width = p * 100 + "%";
  //       const tp = Math.max(0, Math.min(1, (p - 0.08) / 0.32));
  //       ht.style.opacity = 1 - tp;
  //       ht.style.transform = `translateY(${tp * -80}px)`;
  //       if (si) si.style.opacity = Math.max(0, 1 - p * 14);
  //       if (gr) gr.style.opacity = Math.min(1, 0.85 + p * 0.15);
  //       const solid = window.scrollY > 80;
  //       if (solid !== lastSolid) {
  //         lastSolid = solid;
  //         setNavSolid(solid);
  //       }
  //     };
  //     window.addEventListener("scroll", onScroll, { passive: true });
  //     onScroll();
  //     return () => {
  //       running = false;
  //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
  //       window.removeEventListener("scroll", onScroll);
  //     };
  //   }, [ready, drawFrame, findNearestFrame]);

  //   useEffect(() => {
  //     const els = document.querySelectorAll(".lm-root .rv");
  //     const io = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((e) => {
  //           if (e.isIntersecting) {
  //             e.target.classList.add("in");
  //             io.unobserve(e.target);
  //           }
  //         });
  //       },
  //       { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
  //     );
  //     els.forEach((el) => io.observe(el));
  //     return () => io.disconnect();
  //   }, [ready]);

  //   const bokeh = useRef(
  //     Array.from({ length: 12 }).map(() => ({
  //       left: Math.random() * 100,
  //       top: 40 + Math.random() * 55,
  //       size: 6 + Math.random() * 18,
  //       dur: 8 + Math.random() * 8,
  //       delay: Math.random() * 6,
  //     })),
  //   ).current;

  //   return (
  //     <div className="lm-root">
  //       <style>{CSS}</style>

  //       {/* ═══ 1. LOADER ═══ */}
  //       <div className={`lm-loader ${ready ? "hidden" : ""}`}>
  //         <div className="lm-orb lm-orb-1" />
  //         <div className="lm-orb lm-orb-2" />
  //         <div className="lm-loader-logo">NIKON</div>
  //         <div className="lm-loader-tagline">Optics · Est. 1964</div>
  //         <div className="lm-loader-bar-wrap">
  //           <div
  //             className="lm-loader-bar"
  //             style={{ width: `${Math.min(100, progress)}%` }}
  //           />
  //         </div>
  //         <div className="lm-loader-pct">
  //           {Math.round(Math.min(100, progress))}%
  //         </div>
  //         <div className="lm-loader-status">{STATUSES[statusIdx]}</div>
  //       </div>


  //       {/* ═══ 3. HERO ═══ */}
  //       <section className="lm-hero-scroll" ref={heroScrollRef} id="top">
  //         <div className={`lm-hero-sticky ${ready ? "lm-ready" : ""}`}>
  //           <canvas className="lm-canvas" ref={canvasRef} />
  //           <div className="lm-grad" ref={gradRef} />
  //           <div className="lm-bokeh">
  //             {bokeh.map((b, i) => (
  //               <span
  //                 key={i}
  //                 style={{
  //                   left: `${b.left}%`,
  //                   top: `${b.top}%`,
  //                   width: `${b.size}px`,
  //                   height: `${b.size}px`,
  //                   animationDuration: `${b.dur}s`,
  //                   animationDelay: `${b.delay}s`,
  //                 }}
  //               />
  //             ))}
  //           </div>
  //           <div className="lm-hero-text" ref={heroTextRef}>
  //             <p className="lm-eyebrow">Full-Frame · Est. 1964</p>
  //             <h1 className="lm-title">
  //               <span className="outline">Where</span>
  //               <br />
  //               the <span className="italic">Light</span>
  //               <br />
  //               <span className="outline">Meets</span>{" "}
  //               <span className="italic">Glass</span>
  //             </h1>
  //             <p className="lm-sub">
  //               Nine lens elements. One perfect frame. Yours — from the moment the
  //               aperture opens.
  //             </p>
  //             <div className="lm-cta-row">
  //               <a className="lm-btn-fill" href="#reserve">
  //                 Pre-order Now
  //               </a>
  //               <a className="lm-btn-ghost" href="#lenses">
  //                 Explore the glass
  //               </a>
  //             </div>
  //           </div>
  //           <div className="lm-scroll-ind" ref={scrollIndRef}>
  //             <div className="lm-scroll-dot" />
  //             <span>Scroll to explore</span>
  //           </div>
  //           <div className="lm-side-label">NIKON Optics · Full-Frame</div>
  //           <div className="lm-scrub-progress">
  //             <div className="lm-scrub-bar" ref={scrubBarRef} />
  //           </div>
  //         </div>
  //       </section>

  //       {/* ═══ 4. MARQUEE ═══ */}
  //       <div className="lm-marquee">
  //         <div className="lm-marquee-in">
  //           {[...MARQUEE, ...MARQUEE].map((item, i) => (
  //             <React.Fragment key={i}>
  //               <span className="lm-marquee-item">{item}</span>
  //               <span className="lm-marquee-dot">·</span>
  //             </React.Fragment>
  //           ))}
  //         </div>
  //       </div>

  //       {/* ═══ 5. INTRO ═══ */}
  //       <section className="lm-intro">
  //         <div className="lm-intro-in">
  //           <div className="lm-intro-l">
  //             <div className="lm-tag rv">The NIKON Way</div>
  //             <h2 className="lm-big rv d1">
  //               Light bends.
  //               <br />
  //               <em>Glass listens.</em>
  //               <br />
  //               The frame is honest.
  //             </h2>
  //             <p className="lm-body rv d2">
  //               Every NIKON lens begins with the same question: how little does
  //               glass need to do, in order for light to do everything? Eleven
  //               elements, nine rounded blades, one truth — nothing stands between
  //               you and the frame.
  //             </p>
  //             <a className="lm-btn-fill rv d3" href="#lenses">
  //               Discover the range
  //             </a>
  //           </div>
  //           <div className="lm-stats rv d1">
  //             {[
  //               ["11", "Glass Elements"],
  //               ["ƒ1.2", "Fastest Aperture"],
  //               ["9", "Rounded Blades"],
  //               ["∞", "Full-Frame"],
  //             ].map(([n, l], i) => (
  //               <div className="lm-stat" key={i}>
  //                 <div className="lm-stat-n">{n}</div>
  //                 <div className="lm-stat-l">{l}</div>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </section>

  //       {/* ═══ 6. LENSES ═══ */}
  //       <section className="lm-lenses" id="lenses">
  //         <div className="lm-lenses-hd">
  //           <div className="lm-lenses-num rv">03</div>
  //           <div className="lm-lenses-hd-r">
  //             <div className="lm-tag rv">Curated Lenses</div>
  //             <h2 className="lm-big rv d1">
  //               Three primes,
  //               <br />
  //               <em>one signature</em>
  //             </h2>
  //           </div>
  //         </div>
  //         <div className="lm-lenses-cards">
  //           {LENSES.map((l, i) => (
  //             <div className={`lm-lens rv ${i > 0 ? `d${i}` : ""}`} key={i}>
  //               <div className="lm-lens-imgw">
  //                 <img src={l.img} alt={l.tag} loading="lazy" />
  //                 <div className="lm-lens-ov" />
  //               </div>
  //               <div className="lm-lens-body">
  //                 <p className="lm-lens-tag">{l.tag}</p>
  //                 <h3 className="lm-lens-title">{l.title}</h3>
  //                 <p className="lm-lens-desc">{l.desc}</p>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </section>

  //       {/* ═══ 7. QUOTE ═══ */}
  //       <section className="lm-quote">
  //         <div className="lm-quote-bg">Glass</div>
  //         <blockquote className="lm-quote-t rv">
  //           Every great photograph is a{" "}
  //           <mark>conversation between light and glass</mark> — and we have spent
  //           six decades making sure glass always listens.
  //         </blockquote>
  //         <p className="lm-quote-a rv d1">— NIKON Optics, since 1964</p>
  //       </section>

  //       {/* ═══ 8. HERITAGE ═══ */}
  //       <section className="lm-heritage" id="heritage">
  //         <div className="lm-heritage-img rv">
  //           <img
  //             src="https://rassweiler-it.de/images/codepen/suite.jpg"
  //             alt="Heritage"
  //             loading="lazy"
  //           />
  //         </div>
  //         <div>
  //           <div className="lm-tag rv">Heritage</div>
  //           <h2 className="lm-big rv d1">
  //             Six decades
  //             <br />
  //             of <em>listening</em>
  //           </h2>
  //           <p className="lm-body rv d2">
  //             In 1964, a small optics workshop opened in Kyoto with three
  //             engineers and one obsession: make glass that disappears. Six decades
  //             later, we still grind, polish, and assemble every element in the
  //             same building. Every lens that leaves our hands has been touched by
  //             a person who remembers why they started.
  //           </p>
  //           <a className="lm-btn-ghost rv d3" href="#features">
  //             Read our story
  //           </a>
  //         </div>
  //       </section>

  //       {/* ═══ 9. FEATURE STRIP ═══ */}
  //       <div className="lm-strip">
  //         <img
  //           className="lm-strip-img"
  //           src="https://rassweiler-it.de/images/codepen/pool.jpg"
  //           alt="Golden hour"
  //           onError={(e) => {
  //             e.target.style.display = "none";
  //           }}
  //         />
  //         <div className="lm-strip-ov" />
  //         <div className="lm-strip-c">
  //           <div>
  //             <p className="lm-strip-l rv">Golden Hour · Every Frame</p>
  //             <h2 className="lm-strip-t rv d1">
  //               The light is always
  //               <br />
  //               <em>performing</em>
  //             </h2>
  //             <a className="lm-btn-fill rv d2" href="#reserve">
  //               Reserve your lens
  //             </a>
  //           </div>
  //         </div>
  //       </div>

  //       {/* ═══ 10. FEATURES ═══ */}
  //       <section className="lm-features" id="features">
  //         <div className="lm-tag rv">Everything Considered</div>
  //         <h2 className="lm-big rv d1">
  //           The art of <em>effortless</em> optics
  //         </h2>
  //         <div className="lm-grid4">
  //           {FEATURES.map((f, i) => (
  //             <div
  //               className={`lm-feat rv ${i % 4 === 1 ? "d1" : i % 4 === 2 ? "d2" : i % 4 === 3 ? "d3" : ""}`}
  //               key={i}
  //             >
  //               <span className="lm-feat-i">{f.icon}</span>
  //               <h3 className="lm-feat-n">{f.name}</h3>
  //               <p className="lm-feat-d">{f.desc}</p>
  //               <span className="lm-feat-a">↗</span>
  //             </div>
  //           ))}
  //         </div>
  //       </section>

  //       {/* ═══ 11. GALLERY ═══ */}
  //       <section className="lm-gallery">
  //         <div className="lm-gallery-hd">
  //           <div>
  //             <div className="lm-tag rv">Shot on NIKON</div>
  //             <h2 className="lm-big rv d1">
  //               Frames from <em>the field</em>
  //             </h2>
  //           </div>
  //           <a className="lm-btn-ghost rv" href="#reserve">
  //             View full gallery
  //           </a>
  //         </div>
  //         <div className="lm-gallery-grid">
  //           {GALLERY.map((g, i) => (
  //             <div
  //               className="lm-gtile rv"
  //               key={i}
  //               style={{ transitionDelay: `${i * 0.06}s` }}
  //             >
  //               <img src={g.img} alt={g.label} loading="lazy" />
  //               <span className="lm-gtile-l">{g.label}</span>
  //             </div>
  //           ))}
  //         </div>
  //       </section>

  //       {/* ═══ 12. LINEUP ═══ */}
  //       <section className="lm-lineup">
  //         <div className="lm-lineup-in">
  //           <div className="lm-lineup-hd">
  //             <div>
  //               <div className="lm-tag rv">The Lineup</div>
  //               <h2 className="lm-big rv d1">
  //                 Your <em>signature</em> glass
  //               </h2>
  //             </div>
  //             <a className="lm-btn-ghost rv" href="#reserve">
  //               View all lenses
  //             </a>
  //           </div>
  //           <div className="lm-lineup-grid rv">
  //             {LINEUP.map((item, i) => (
  //               <div className={`lm-lc ${item.main ? "main" : ""}`} key={i}>
  //                 <img
  //                   className="lm-lc-img"
  //                   src={item.img}
  //                   alt={item.name}
  //                   loading="lazy"
  //                 />
  //                 <div className="lm-lc-info">
  //                   <p className="lm-lc-t">{item.type}</p>
  //                   <h3 className="lm-lc-n">{item.name}</h3>
  //                   <p className="lm-lc-p">
  //                     From <strong>{item.price}</strong>
  //                   </p>
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </section>

  //       {/* ═══ 13. TESTIMONIALS ═══ */}
  //       <section className="lm-testi">
  //         <div className="lm-testi-hd">
  //           <div className="lm-tag rv" style={{ justifyContent: "center" }}>
  //             In Their Hands
  //           </div>
  //           <h2 className="lm-big rv d1">
  //             Trusted by
  //             <br />
  //             <em>those who see</em>
  //           </h2>
  //         </div>
  //         <div className="lm-testi-grid">
  //           {TESTIMONIALS.map((t, i) => (
  //             <div className={`lm-tc rv d${i}`} key={i}>
  //               <p className="lm-tc-q">{t.quote}</p>
  //               <p className="lm-tc-n">{t.name}</p>
  //               <p className="lm-tc-r">{t.role}</p>
  //             </div>
  //           ))}
  //         </div>
  //       </section>

  //     </div>
  //   );
  // }

  import React, { useEffect, useRef, useState, useCallback } from "react";

/* ═══════ CONFIG (hero – unchanged) ═══════ */
const FRAME_COUNT = 192;
const FRAME_BASE = "https://rassweiler-it.de/images/codepen/frames/frame_";
const FRAME_EXT = ".jpg";
const PASS1_STEP = 6;
const framePath = (n) =>
  `${FRAME_BASE}${String(n).padStart(4, "0")}${FRAME_EXT}`;

const STATUSES = [
  "Polishing the glass…",
  "Aligning the elements…",
  "Focusing the lens…",
  "Almost there…",
];
const MARQUEE = [
  "NIKON Optics",
  "Built for Light",
  "Full-Frame Mirrorless",
  "Cinema-Grade Glass",
  "Aperture Perfected",
  "Since 1964",
];

/* ═══════ GALLERY DATA ═══════
   Yahan apni asli photos ke URL daalo – [src, label, objectPosition]  */
const B = "https://rassweiler-it.de/images/codepen/";
const P = B + "pool.jpg",
  S = B + "suite.jpg",
  R = B + "restaurant.jpg";
const PICS = [
  [P, "Golden Hour", "50% 30%"],
  [S, "Interior Light", "30% 50%"],
  [R, "Candlelit", "60% 40%"],
  [P, "Reflections", "20% 70%"],
  [R, "Dusk", "80% 30%"],
  [S, "Stillness", "70% 60%"],
  [P, "Blue Hour", "90% 50%"],
  [S, "Quiet Corners", "10% 40%"],
  [R, "Table for Two", "40% 80%"],
  [P, "Open Water", "50% 90%"],
  [S, "Soft Window", "50% 10%"],
  [R, "Last Light", "15% 20%"],
  ...[10,11,12,13,15,16,17,18,19,20,22,24,25,27,28,29,37,39].map((id, k) => [
    `https://picsum.photos/id/${id}/1400/1000`,
    ["Morning Mist","Long Road","Salt & Stone","Green Hours","Window Seat","Still Water","Wild Edge","Paper Light","Harbour","Slow Tide","Evening Walk","Forest Floor","Cold Coast","Warm Rooftop","Neon Rain","Old Street","Field Notes","Afterglow"][k],
    "50% 50%",
  ]),
].map(([src, label, pos], i) => ({ src, label, pos, i }));
const CHAPS = [
  ["I", "Golden Hour", "The first and last hour of the day, when light turns to honey and every edge softens.", [12, 13, 14]],
  ["II", "Interior Light", "Window, lamp, candle. Quiet rooms where glass learns to whisper.", [15, 16, 17]],
  ["III", "After Dark", "Where other lenses give up, ƒ/1.2 keeps looking.", [18, 19, 20]],
];
const SL = [0, 2, 5, 19, 22, 27];
const HGal = ({ items, tag, children, rev, setLb }) => (
  <section className="gx-h" data-rev={rev ? 1 : 0}>
    <div className="gx-hs">
      <div className="gx-hhd">
        <div className="lm-tag">{tag}</div>
        <h2 className="lm-big">{children}</h2>
      </div>
      <div className="gx-track">
        {items.map((p, n) => (
          <div className="gx-card" key={p.i} onClick={() => setLb(p.i)}>
            <img src={p.src} alt={p.label} style={{ objectPosition: p.pos }} loading="lazy" />
            <span className="gx-num">{String(n + 1).padStart(2, "0")}</span>
            <span className="gx-cap">{p.label}</span>
          </div>
        ))}
      </div>
      <div className="gx-hbar"><i /></div>
    </div>
  </section>
);

const TILTS = [
  ["Wide Open", "ƒ/1.2 — light pooled like water."],
  ["Razor Focus", "Corner-to-corner sharpness, wide open."],
  ["Honest Colour", "Skin, sky and shadow — just as they were."],
];

/* ═══════ CSS ═══════ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Barlow+Condensed:wght@300;400;500&display=swap');
.lm-root,.lm-root *,.lm-root *::before,.lm-root *::after{margin:0;padding:0;box-sizing:border-box}
.lm-root{--g:#b8965a;--gp:#e2c98a;--gd:#7a5c2e;--ink:#08060a;--ink2:#0f0c14;--s:#f5f0e8;--sm:rgba(245,240,232,.55);--serif:"Cormorant Garamond",Georgia,serif;--cond:"Barlow Condensed",sans-serif;background:var(--ink);color:var(--s);font-family:var(--cond);font-weight:300;overflow-x:clip;position:relative;width:100%}
.lm-root ::-webkit-scrollbar{width:3px}
.lm-root ::-webkit-scrollbar-track{background:var(--ink)}
.lm-root ::-webkit-scrollbar-thumb{background:var(--g)}

/* LOADER */
.lm-loader{position:fixed;inset:0;z-index:9999;background:var(--ink);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:48px;transition:opacity .8s ease,visibility .8s ease}
.lm-loader.hidden{opacity:0;visibility:hidden;pointer-events:none}
.lm-loader-logo{font-family:var(--serif);font-size:clamp(36px,6vw,72px);font-weight:300;letter-spacing:.3em;text-transform:uppercase;color:var(--gp);opacity:0;transform:translateY(16px);animation:lmLogo .9s .1s ease forwards}
@keyframes lmLogo{to{opacity:1;transform:translateY(0)}}
.lm-loader-tagline{font-size:11px;font-weight:400;letter-spacing:.45em;text-transform:uppercase;color:rgba(184,150,90,.5);margin-top:-32px;opacity:0;animation:lmLogo .9s .35s ease forwards}
.lm-loader-bar-wrap{width:clamp(200px,30vw,320px);height:1px;background:rgba(184,150,90,.15);position:relative;overflow:hidden}
.lm-loader-bar{position:absolute;top:0;left:0;height:100%;width:0;background:linear-gradient(to right,transparent,var(--g),var(--gp));transition:width .25s ease;box-shadow:0 0 12px rgba(184,150,90,.6)}
.lm-loader-pct{font-family:var(--serif);font-size:11px;letter-spacing:.2em;color:rgba(184,150,90,.45);margin-top:-32px;opacity:0;animation:lmLogo .9s .5s ease forwards}
.lm-loader-status{font-size:10px;font-weight:400;letter-spacing:.3em;text-transform:uppercase;color:rgba(245,240,232,.25);margin-top:-32px;min-height:16px}
.lm-orb{position:absolute;border-radius:50%;filter:blur(80px);pointer-events:none;opacity:.35}
.lm-orb-1{width:400px;height:400px;background:#3a1a05;top:-100px;left:-100px}
.lm-orb-2{width:300px;height:300px;background:#1a0a30;bottom:-80px;right:-60px}

/* HERO */
.lm-hero-scroll{position:relative;height:350vh}
.lm-hero-sticky{position:sticky;top:0;height:100vh;overflow:hidden}
.lm-canvas{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
.lm-grad{position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 50% 45%,rgba(212,175,55,.08) 0%,transparent 45%),linear-gradient(to bottom,rgba(8,6,10,.25) 0%,transparent 25%),linear-gradient(to top,rgba(8,6,10,1) 0%,rgba(8,6,10,.65) 15%,rgba(8,6,10,0) 45%),linear-gradient(105deg,rgba(8,6,10,.5) 0%,transparent 50%)}
.lm-hero-text{position:absolute;bottom:0;left:0;padding:0 0 80px 72px;max-width:900px;z-index:2;will-change:opacity,transform}
.lm-eyebrow{font-size:11px;font-weight:400;letter-spacing:.45em;text-transform:uppercase;color:var(--g);margin-bottom:24px;display:flex;align-items:center;gap:16px;text-shadow:0 1px 4px rgba(0,0,0,.8);opacity:0;transform:translateY(20px)}
.lm-ready .lm-eyebrow{animation:lmUp .8s .1s ease forwards}
.lm-eyebrow::before{content:"";display:block;width:32px;height:1px;background:var(--g)}
.lm-title{font-family:var(--serif);font-size:clamp(64px,10vw,140px);font-weight:300;line-height:.92;letter-spacing:-.02em;margin-bottom:36px;text-shadow:1px 1px 0 rgba(0,0,0,.9),-1px -1px 0 rgba(0,0,0,.9),0 2px 8px rgba(0,0,0,.7);opacity:0;transform:translateY(50px)}
.lm-ready .lm-title{animation:lmUp 1.1s .3s ease forwards}
.lm-title .italic{font-style:italic;color:var(--gp)}
.lm-title .outline{-webkit-text-stroke:1px rgba(245,240,232,.5);color:transparent;text-shadow:1px 1px 0 rgba(0,0,0,.85),-1px -1px 0 rgba(0,0,0,.85),0 2px 10px rgba(0,0,0,.6)}
.lm-sub{font-size:14px;font-weight:300;letter-spacing:.1em;line-height:1.85;color:var(--sm);max-width:420px;margin-bottom:48px;text-shadow:0 1px 3px rgba(0,0,0,.9);opacity:0;transform:translateY(24px)}
.lm-ready .lm-sub{animation:lmUp .9s .6s ease forwards}
.lm-cta-row{display:flex;align-items:center;gap:32px;opacity:0;transform:translateY(18px)}
.lm-ready .lm-cta-row{animation:lmUp .8s .85s ease forwards}
@keyframes lmUp{to{opacity:1;transform:translateY(0)}}
.lm-btn-fill{display:inline-block;background:var(--g);color:var(--ink);font-size:12px;font-weight:500;letter-spacing:.22em;text-transform:uppercase;padding:16px 40px;text-decoration:none;transition:background .3s,transform .3s;border:none;cursor:pointer}
.lm-btn-fill:hover{background:var(--gp);transform:translateY(-2px)}
.lm-btn-ghost{display:inline-block;font-size:12px;font-weight:400;letter-spacing:.22em;text-transform:uppercase;color:rgba(245,240,232,.6);text-decoration:none;border-bottom:1px solid rgba(245,240,232,.25);padding-bottom:3px;transition:color .3s,border-color .3s}
.lm-btn-ghost:hover{color:var(--g);border-color:var(--g)}
.lm-scrub-progress{position:absolute;bottom:0;left:0;right:0;height:2px;background:rgba(184,150,90,.12);z-index:3}
.lm-scrub-bar{height:100%;width:0;background:linear-gradient(to right,var(--gd),var(--g),var(--gp));box-shadow:0 0 8px rgba(184,150,90,.5);position:relative}
.lm-scrub-bar::after{content:"";position:absolute;right:-4px;top:50%;transform:translateY(-50%);width:8px;height:8px;border-radius:50%;background:var(--gp);box-shadow:0 0 10px rgba(226,201,138,.8)}
.lm-scroll-ind{position:absolute;bottom:48px;left:50%;transform:translateX(-50%);z-index:3;display:flex;flex-direction:column;align-items:center;gap:8px;opacity:0}
.lm-ready .lm-scroll-ind{animation:lmIn .8s 1.2s ease forwards}
@keyframes lmIn{to{opacity:1}}
.lm-scroll-ind span{font-size:9px;letter-spacing:.35em;text-transform:uppercase;color:rgba(245,240,232,.4)}
.lm-scroll-dot{width:6px;height:6px;border-radius:50%;background:var(--g);animation:lmDot 2s ease-in-out infinite}
@keyframes lmDot{0%,100%{transform:translateY(0);opacity:.4}50%{transform:translateY(8px);opacity:1}}
.lm-side-label{position:absolute;right:56px;bottom:80px;z-index:3;writing-mode:vertical-rl;font-size:10px;font-weight:400;letter-spacing:.3em;text-transform:uppercase;color:rgba(245,240,232,.3);display:flex;align-items:center;gap:12px;opacity:0}
.lm-ready .lm-side-label{animation:lmSide .8s 1s ease forwards}
@keyframes lmSide{from{opacity:0;transform:translateX(12px)}to{opacity:1;transform:translateX(0)}}
.lm-side-label::after{content:"";display:block;width:1px;height:48px;background:rgba(245,240,232,.2)}
.lm-bokeh{position:absolute;inset:0;pointer-events:none;z-index:1;overflow:hidden}
.lm-bokeh span{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(226,201,138,.55),transparent 70%);filter:blur(6px);opacity:0;animation:lmBk linear infinite}
@keyframes lmBk{0%{transform:translateY(20px);opacity:0}20%{opacity:.35}80%{opacity:.35}100%{transform:translateY(-120px);opacity:0}}

/* MARQUEE */
.lm-marquee{background:var(--g);overflow:hidden;padding:14px 0;display:flex;white-space:nowrap}
.lm-marquee-in{display:inline-flex;animation:lmMarq 22s linear infinite}
@keyframes lmMarq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.lm-marquee-item{font-size:12px;font-weight:500;letter-spacing:.3em;text-transform:uppercase;color:var(--ink);padding:0 40px}
.lm-marquee-dot{color:rgba(8,6,10,.3);padding:0 8px}

/* SHARED */
.lm-tag{display:flex;align-items:center;gap:12px;font-size:10px;letter-spacing:.4em;text-transform:uppercase;color:var(--g);margin-bottom:28px}
.lm-tag::before{content:"";display:block;width:24px;height:1px;background:var(--g)}
.lm-big{font-family:var(--serif);font-size:clamp(42px,5vw,72px);font-weight:300;line-height:1.1;margin-bottom:32px}
.lm-big em{font-style:italic;color:var(--gp)}
.lm-body{font-size:15px;font-weight:300;line-height:1.95;color:var(--sm);margin-bottom:40px}
.rv{opacity:0;transform:translateY(44px);transition:opacity .9s ease,transform .9s ease}
.rv.in{opacity:1;transform:translateY(0)}
.rv.d1{transition-delay:.12s}.rv.d2{transition-delay:.24s}.rv.d3{transition-delay:.36s}

/* ═══ NEW GALLERY ═══ */
.gx-sec{padding:140px 72px;max-width:1500px;margin:0 auto}
.gx-hd{margin-bottom:56px}
.gx-hd .lm-big{margin-bottom:0}

/* 1 · pinned horizontal scroll */
.gx-h{position:relative;height:420vh;background:var(--ink2)}
.gx-hs{position:sticky;top:0;height:100vh;overflow:hidden;display:flex;flex-direction:column;justify-content:center}
.gx-hhd{padding:0 72px 28px}
.gx-hhd .lm-big{margin-bottom:0}
.gx-track{display:flex;gap:28px;padding:0 72px;width:max-content;will-change:transform}
.gx-card{position:relative;flex:0 0 auto;width:min(34vw,460px);height:min(50vh,500px);overflow:hidden;cursor:pointer}
.gx-card:nth-child(even){margin-top:56px;margin-bottom:-56px}
.gx-card img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .8s ease,filter .6s}
.gx-card:hover img{transform:scale(1.07)}
.gx-card::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(8,6,10,.75),transparent 50%)}
.gx-num{position:absolute;top:16px;right:20px;z-index:2;font-family:var(--serif);font-size:44px;color:rgba(226,201,138,.5);line-height:1}
.gx-cap{position:absolute;left:20px;bottom:18px;z-index:2;font-size:11px;letter-spacing:.3em;text-transform:uppercase;color:var(--gp)}
.gx-hbar{position:absolute;left:72px;right:72px;bottom:36px;height:2px;background:rgba(184,150,90,.15)}
.gx-hbar i{display:block;height:100%;width:0;background:var(--g);box-shadow:0 0 8px rgba(184,150,90,.6)}

/* 2 · clip-path mosaic */
.gx-mos{display:grid;grid-template-columns:repeat(6,1fr);grid-auto-rows:150px;gap:10px}
.gx-t{position:relative;overflow:hidden;cursor:pointer}
.gx-t img{position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;will-change:transform;transition:filter .5s}
.gx-t:hover img{filter:brightness(1.15) saturate(1.2)}
.gx-t span{position:absolute;left:14px;bottom:12px;z-index:2;font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:var(--gp);text-shadow:0 1px 6px #000}
.gx-clip.rv{opacity:1;transform:none;clip-path:inset(0 0 100% 0);transition:clip-path 1.1s cubic-bezier(.77,0,.18,1)}
.gx-clip.gx-r.rv{clip-path:inset(0 0 0 100%)}
.gx-clip.gx-c.rv{clip-path:inset(50% 50% 50% 50%)}
.gx-clip.rv.in{clip-path:inset(0 0 0 0)}
@media(min-width:681px){
  .gx-t:nth-child(1){grid-column:span 3;grid-row:span 3}
  .gx-t:nth-child(2){grid-column:span 3;grid-row:span 2}
  .gx-t:nth-child(3){grid-column:span 3}
  .gx-t:nth-child(4),.gx-t:nth-child(5),.gx-t:nth-child(6){grid-column:span 2;grid-row:span 2}
  .gx-t:nth-child(7){grid-column:span 4;grid-row:span 2}
  .gx-t:nth-child(8){grid-column:span 2;grid-row:span 2}
}

/* 3 · dual opposite marquees */
.gx-rows{padding:40px 0 140px;overflow:hidden;background:var(--ink2)}
.gx-row{display:flex;width:max-content;animation:gxL 45s linear infinite;margin-bottom:14px}
.gx-row.rev{animation-direction:reverse;animation-duration:55s}
.gx-rows:hover .gx-row{animation-play-state:paused}
.gx-row img{width:340px;height:230px;object-fit:cover;margin-right:14px;display:block;cursor:pointer;filter:grayscale(.6) brightness(.8);transition:filter .5s,transform .5s}
.gx-row img:hover{filter:none;transform:scale(1.04)}
@keyframes gxL{to{transform:translateX(-50%)}}

/* 4 · 3D tilt cards */
.gx-tilts{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
.gx-tilt{perspective:900px}
.gx-tin{position:relative;aspect-ratio:3/4;overflow:hidden;transform:rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));transition:transform .25s ease-out;border:1px solid rgba(184,150,90,.15);cursor:pointer}
.gx-tin img{width:100%;height:100%;object-fit:cover;display:block;transform:scale(1.12)}
.gx-tin::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(8,6,10,.9),transparent 60%)}
.gx-tb{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:28px}
.gx-tb h3{font-family:var(--serif);font-size:28px;font-weight:300;margin-bottom:6px}
.gx-tb p{font-size:13px;color:var(--sm);line-height:1.6}

/* 5 · parallax banner */
.gx-par{position:relative;height:80vh;overflow:hidden;display:flex;align-items:center;padding:0 72px}
.gx-par img{position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;filter:brightness(.5) saturate(1.3);will-change:transform}
.gx-par>div{position:relative;z-index:2}
.gx-par h2{font-family:var(--serif);font-size:clamp(48px,7vw,100px);font-weight:300;line-height:.98;margin-bottom:32px}
.gx-par h2 em{font-style:italic;color:var(--gp)}

/* 6 · CTA */
.gx-cta{padding:160px 24px;text-align:center;background:var(--ink)}
.gx-cta .lm-tag{justify-content:center}

/* lightbox */
.gx-lb{position:fixed;inset:0;z-index:9000;background:rgba(8,6,10,.94);display:flex;align-items:center;justify-content:center;animation:lmIn .3s ease forwards}
.gx-lb img{max-width:92vw;max-height:80vh;object-fit:contain;animation:gxZ .4s ease}
@keyframes gxZ{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
.gx-lb b{position:absolute;bottom:32px;left:0;right:0;text-align:center;font-weight:400;font-size:11px;letter-spacing:.35em;text-transform:uppercase;color:var(--gp)}
.gx-lb button{position:absolute;background:none;border:1px solid rgba(184,150,90,.4);color:var(--gp);width:48px;height:48px;border-radius:50%;font-size:20px;cursor:pointer}
.gx-lb .x{top:24px;right:24px}.gx-lb .pv{left:24px}.gx-lb .nx{right:24px}

/* RESPONSIVE */
@media(max-width:1100px){
  .lm-hero-text{padding:0 0 72px 32px}
  .gx-sec{padding:100px 32px}.gx-hhd{padding:0 32px 24px}.gx-track{padding:0 32px}.gx-hbar{left:32px;right:32px}
  .gx-par{padding:0 32px}.gx-card{width:min(44vw,420px)}
  .gx-tilts{grid-template-columns:1fr 1fr}
}
@media(max-width:680px){
  .lm-title{font-size:clamp(48px,15vw,80px)}
  .lm-hero-scroll{height:280vh}
  .lm-side-label{display:none}
  .lm-tag{margin-bottom:16px;font-size:9px;letter-spacing:.32em}
  .lm-big{font-size:clamp(30px,9vw,40px);line-height:1.12;margin-bottom:20px}
  .lm-marquee{padding:10px 0}.lm-marquee-item{font-size:10px;padding:0 22px}
  .gx-sec{padding:72px 20px}.gx-hd{margin-bottom:28px}
  .gx-h{height:320vh}.gx-hhd{padding:0 20px 18px}.gx-track{padding:0 20px;gap:14px}
  .gx-card{width:74vw;height:46vh}.gx-card:nth-child(even){margin-top:28px;margin-bottom:-28px}
  .gx-num{font-size:32px}.gx-hbar{left:20px;right:20px;bottom:28px}
  .gx-mos{grid-template-columns:1fr 1fr;grid-auto-rows:140px;gap:6px}
  .gx-t:nth-child(1),.gx-t:nth-child(7){grid-column:span 2;grid-row:span 2}
  .gx-t:nth-child(4){grid-row:span 2}
  .gx-rows{padding-bottom:72px}.gx-row img{width:240px;height:170px;margin-right:10px}
  .gx-tilts{grid-template-columns:1fr;gap:16px}.gx-tin{aspect-ratio:4/3}.gx-tb{padding:20px}.gx-tb h3{font-size:24px}
  .gx-par{height:60vh;padding:0 20px}
  .gx-cta{padding:96px 20px}
  .gx-lb .pv,.gx-lb .nx{top:auto;bottom:24px;width:42px;height:42px}.gx-lb .pv{left:20px}.gx-lb .nx{right:20px}.gx-lb b{bottom:36px}
}

/* ═══ EXTRA LENGTH ═══ */
.gx-big{overflow:hidden;padding:60px 0;background:var(--ink)}
.gx-big div{display:flex;width:max-content;animation:gxL 35s linear infinite}
.gx-big span{font-family:var(--serif);font-size:clamp(70px,14vw,200px);font-style:italic;white-space:nowrap;color:transparent;-webkit-text-stroke:1px rgba(184,150,90,.35);padding-right:60px}
.gx-grow{height:260vh;position:relative}
.gx-grows{position:sticky;top:0;height:100vh;overflow:hidden;background:var(--ink)}
.gx-grows img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;clip-path:inset(30% 40%)}
.gx-grows h2{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;text-align:center;font-family:var(--serif);font-weight:300;font-size:clamp(44px,8vw,120px);line-height:1;text-shadow:0 4px 30px rgba(0,0,0,.7);z-index:2;opacity:0;padding:0 20px}
.gx-grows h2 em{color:var(--gp)}
.gx-chap{display:grid;grid-template-columns:1fr 1.3fr;gap:72px;padding:100px 0;border-top:1px solid rgba(184,150,90,.12)}
.gx-chap-t{position:sticky;top:18vh;align-self:start}
.gx-chap-n{font-family:var(--serif);font-size:clamp(90px,12vw,170px);color:rgba(184,150,90,.12);line-height:1}
.gx-chap-i{display:flex;flex-direction:column;gap:14px}
.gx-chap-i .gx-t{aspect-ratio:4/3}
.gx-stackw{padding:120px 72px 40px;max-width:1500px;margin:0 auto}
.gx-sc{position:sticky;top:calc(9vh + var(--i)*22px);height:68vh;margin-bottom:14vh;overflow:hidden;border:1px solid rgba(184,150,90,.2);cursor:pointer}
.gx-sc img{width:100%;height:100%;object-fit:cover;display:block}
.gx-sc::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(8,6,10,.85),transparent 55%)}
.gx-sc div{position:absolute;left:36px;bottom:30px;z-index:2}
.gx-sc h3{font-family:var(--serif);font-weight:300;font-size:clamp(30px,4vw,56px)}
.gx-sc p{font-size:11px;letter-spacing:.3em;text-transform:uppercase;color:var(--g);margin-bottom:6px}
.gx-cols{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.gx-col{display:flex;flex-direction:column;gap:10px}
.gx-col:nth-child(2){margin-top:90px}.gx-col:nth-child(3){margin-top:40px}
.gx-foot{padding:70px 72px 40px;background:var(--ink2);border-top:1px solid rgba(184,150,90,.15);display:flex;justify-content:space-between;gap:32px;flex-wrap:wrap;font-size:11px;letter-spacing:.3em;text-transform:uppercase;color:rgba(245,240,232,.4)}
.gx-foot b{font-family:var(--serif);font-weight:300;font-size:32px;letter-spacing:.3em;color:var(--gp)}
@media(max-width:1100px){.gx-stackw{padding:80px 32px 20px}.gx-foot{padding:60px 32px 32px}.gx-chap{gap:40px}}
@media(max-width:680px){
  .gx-big{padding:32px 0}.gx-grow{height:220vh}.gx-grows img{clip-path:inset(30% 30%)}
  .gx-chap{grid-template-columns:1fr;gap:24px;padding:56px 0}.gx-chap-t{position:static}
  .gx-stackw{padding:56px 20px 10px}.gx-sc{height:52vh;margin-bottom:9vh;top:calc(8vh + var(--i)*14px)}.gx-sc div{left:18px;bottom:18px}
  .gx-cols{gap:6px}.gx-col{gap:6px}.gx-col:nth-child(2){margin-top:44px}.gx-col:nth-child(3){margin-top:20px}
  .gx-foot{padding:44px 20px 28px;flex-direction:column;font-size:10px}
}

/* ═══ v3: tighter spacing + new designs ═══ */
.gx-sec{padding:80px 72px}.gx-hd{margin-bottom:36px}
.gx-h{height:300vh}.gx-grow{height:200vh}.gx-big{padding:24px 0}
.gx-rows{padding:20px 0 70px}.gx-chap{padding:56px 0}
.gx-stackw{padding:70px 72px 10px}.gx-sc{margin-bottom:8vh}.gx-sc:last-child{margin-bottom:0}
.gx-par{height:70vh}
.gx-chap-i{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.gx-chap-i .gx-t{aspect-ratio:1}
.gx-chap-i .gx-t:nth-child(1),.gx-chap-i .gx-t:nth-child(4){grid-column:span 2;aspect-ratio:16/10}
.gx-acc{display:flex;gap:8px;height:70vh}
.gx-ap{position:relative;flex:1;overflow:hidden;cursor:pointer;transition:flex .8s cubic-bezier(.77,0,.18,1)}
.gx-ap.on{flex:6}
.gx-ap img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(.8) brightness(.55);transition:filter .6s,transform 1.2s}
.gx-ap.on img{filter:none;transform:scale(1.05)}
.gx-ap::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(8,6,10,.7),transparent 50%);pointer-events:none}
.gx-ap b{position:absolute;top:18px;left:0;right:0;text-align:center;z-index:2;font-family:var(--serif);font-weight:300;font-size:22px;color:var(--gp)}
.gx-ap span{position:absolute;left:26px;bottom:22px;z-index:2;font-family:var(--serif);font-size:clamp(24px,3vw,40px);white-space:nowrap;opacity:0;transition:opacity .5s}
.gx-ap.on span{opacity:1;transition-delay:.35s}
.gx-pols{display:flex;flex-wrap:wrap;justify-content:center;gap:40px 28px;padding-top:10px}
.gx-pol{width:min(290px,28%);background:#f1ebe0;padding:12px 12px 46px;position:relative;cursor:pointer;box-shadow:0 18px 40px rgba(0,0,0,.55)}
.gx-pol.rv{opacity:0;transform:rotate(var(--r)) translateY(70px)}
.gx-pol.rv.in{opacity:1;transform:rotate(var(--r))}
.gx-pol.rv.in:hover{transform:rotate(0deg) scale(1.07);z-index:3;transition:transform .4s}
.gx-pol img{width:100%;aspect-ratio:1;object-fit:cover;display:block}
.gx-pol span{position:absolute;bottom:12px;left:0;right:0;text-align:center;font-family:var(--serif);font-style:italic;font-size:18px;color:#2a2018}
.gx-sl{position:relative;height:90vh;overflow:hidden;background:var(--ink)}
.gx-sl img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity 1.4s ease}
.gx-sl img.on{opacity:1;animation:gxKB 7s ease-out forwards}
@keyframes gxKB{from{transform:scale(1.02)}to{transform:scale(1.18)}}
.gx-sl::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(8,6,10,.85),transparent 55%);pointer-events:none}
.gx-slt{position:absolute;left:72px;bottom:90px;z-index:2}.gx-slt .lm-big{margin-bottom:0}
.gx-dots{position:absolute;right:72px;bottom:100px;z-index:3;display:flex;gap:10px}
.gx-dots i{width:34px;height:3px;background:rgba(245,240,232,.3);cursor:pointer}.gx-dots i.on{background:var(--g)}
@media(max-width:1100px){.gx-sec{padding:64px 32px}.gx-stackw{padding:60px 32px 10px}.gx-slt{left:32px}.gx-dots{right:32px}.gx-pol{width:30%}}
@media(max-width:680px){
  .gx-sec{padding:48px 20px}.gx-hd{margin-bottom:22px}
  .gx-h{height:240vh}.gx-grow{height:180vh}.gx-big{padding:16px 0}.gx-rows{padding-bottom:40px}
  .gx-chap{padding:36px 0;gap:18px}.gx-stackw{padding:44px 20px 10px}.gx-par{height:55vh}
  .gx-acc{flex-direction:column;height:78vh;gap:6px}.gx-ap.on{flex:5}
  .gx-ap span{left:16px;bottom:14px}.gx-ap b{left:16px;right:auto;top:50%;transform:translateY(-50%)}.gx-ap.on b{top:16px;transform:none}
  .gx-pols{gap:26px 14px}.gx-pol{width:44%;padding:8px 8px 34px}.gx-pol span{font-size:14px;bottom:8px}
  .gx-sl{height:70vh}.gx-slt{left:20px;bottom:64px}.gx-dots{right:auto;left:20px;bottom:30px}.gx-dots i{width:26px}
}
`;

/* ═══════ COMPONENT ═══════ */
export default function NIKONPage() {
  const [progress, setProgress] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);
  const [ready, setReady] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const [lb, setLb] = useState(null);
  const [acc, setAcc] = useState(0);
  const [slide, setSlide] = useState(0);

  const canvasRef = useRef(null);
  const heroScrollRef = useRef(null);
  const heroTextRef = useRef(null);
  const scrubBarRef = useRef(null);
  const scrollIndRef = useRef(null);
  const gradRef = useRef(null);
  const framesRef = useRef(new Array(FRAME_COUNT));
  const currentFrameIdxRef = useRef(0);
  const targetFrameRef = useRef(0);
  const displayFrameRef = useRef(0);
  const rafRef = useRef(null);
  const pass1DoneRef = useRef(0);
  const initializedRef = useRef(false);
  const gxRef = useRef(null);
  const trackRef = useRef(null);
  const gxBarRef = useRef(null);

  const drawFrame = useCallback((idx) => {
    const canvas = canvasRef.current;
    const img = framesRef.current[idx];
    if (!canvas || !img || !img.complete || !img.naturalWidth) return;
    const ctx = canvas.getContext("2d");
    const cw = canvas.width,
      ch = canvas.height;
    const iw = img.naturalWidth,
      ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale,
      dh = ih * scale;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
  }, []);

  const findNearestFrame = useCallback((idx) => {
    if (framesRef.current[idx]) return idx;
    for (let o = 1; o < 12; o++) {
      if (idx - o >= 0 && framesRef.current[idx - o]) return idx - o;
      if (idx + o < FRAME_COUNT && framesRef.current[idx + o]) return idx + o;
    }
    return null;
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const found = findNearestFrame(currentFrameIdxRef.current);
    if (found !== null) drawFrame(found);
  }, [drawFrame, findNearestFrame]);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    document.body.style.overflow = "hidden";
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    const pass1Count = Math.ceil(FRAME_COUNT / PASS1_STEP);
    let pass1Complete = false;
    let fakeP = 0;
    const fakeInterval = setInterval(() => {
      if (pass1DoneRef.current < pass1Count) {
        fakeP = Math.min(fakeP + Math.random() * 2, 25);
        setProgress(Math.max(fakeP, (pass1DoneRef.current / pass1Count) * 90));
      } else clearInterval(fakeInterval);
    }, 200);

    const dismiss = () => {
      setReady(true);
      document.body.style.overflow = "";
      drawFrame(0);
      for (let i = 1; i <= FRAME_COUNT; i++) {
        const idx = i - 1;
        if (framesRef.current[idx]) continue;
        const img = new Image();
        img.onload = () => {
          framesRef.current[idx] = img;
        };
        img.src = framePath(i);
      }
    };

    for (let i = 1; i <= FRAME_COUNT; i += PASS1_STEP) {
      const idx = i - 1;
      const img = new Image();
      img.onload = () => {
        framesRef.current[idx] = img;
        pass1DoneRef.current++;
        const pct = (pass1DoneRef.current / pass1Count) * 90;
        setProgress(pct);
        setStatusIdx(pct < 30 ? 0 : pct < 60 ? 1 : pct < 85 ? 2 : 3);
        if (idx === 0) drawFrame(0);
        if (pass1DoneRef.current >= pass1Count && !pass1Complete) {
          pass1Complete = true;
          clearInterval(fakeInterval);
          setProgress(95);
          setStatusIdx(3);
          setTimeout(dismiss, 400);
        }
      };
      img.onerror = () => {
        pass1DoneRef.current++;
        if (pass1DoneRef.current >= pass1Count && !pass1Complete) {
          pass1Complete = true;
          clearInterval(fakeInterval);
          setTimeout(dismiss, 400);
        }
      };
      img.src = framePath(i);
    }
    const fallback = setTimeout(() => {
      if (!pass1Complete) {
        pass1Complete = true;
        clearInterval(fakeInterval);
        setProgress(100);
        dismiss();
      }
    }, 15000);
    return () => {
      clearInterval(fakeInterval);
      clearTimeout(fallback);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [drawFrame, resizeCanvas]);

  useEffect(() => {
    if (!ready) return;
    const hs = heroScrollRef.current,
      ht = heroTextRef.current;
    const sb = scrubBarRef.current,
      si = scrollIndRef.current,
      gr = gradRef.current;
    if (!hs || !ht) return;
    let running = true,
      lastSolid = false;

    const loop = () => {
      if (!running) return;
      const diff = targetFrameRef.current - displayFrameRef.current;
      if (Math.abs(diff) > 0.5) displayFrameRef.current += diff * 0.3;
      else displayFrameRef.current = targetFrameRef.current;
      const idx = Math.max(
        0,
        Math.min(FRAME_COUNT - 1, Math.round(displayFrameRef.current)),
      );
      if (idx !== currentFrameIdxRef.current) {
        currentFrameIdxRef.current = idx;
        const d = findNearestFrame(idx);
        if (d !== null) drawFrame(d);
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    const onScroll = () => {
      const rect = hs.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = Math.max(0, Math.min(1, -rect.top / total));
      targetFrameRef.current = p * (FRAME_COUNT - 1);
      if (sb) sb.style.width = p * 100 + "%";
      const tp = Math.max(0, Math.min(1, (p - 0.08) / 0.32));
      ht.style.opacity = 1 - tp;
      ht.style.transform = `translateY(${tp * -80}px)`;
      if (si) si.style.opacity = Math.max(0, 1 - p * 14);
      if (gr) gr.style.opacity = Math.min(1, 0.85 + p * 0.15);
      const solid = window.scrollY > 80;
      if (solid !== lastSolid) {
        lastSolid = solid;
        setNavSolid(solid);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, [ready, drawFrame, findNearestFrame]);

  /* reveal on scroll */
  useEffect(() => {
    const els = document.querySelectorAll(".lm-root .rv");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ready]);

  /* gallery: horizontal pinned scroll + parallax */
  useEffect(() => {
    let t = false;
    const run = () => {
      t = false;
      document.querySelectorAll(".gx-h").forEach((hs) => {
        const tr = hs.querySelector(".gx-track"),
          bar = hs.querySelector(".gx-hbar i");
        const r = hs.getBoundingClientRect();
        const p = Math.max(0, Math.min(1, -r.top / (r.height - window.innerHeight)));
        const max = Math.max(0, tr.scrollWidth - window.innerWidth);
        const x = hs.dataset.rev === "1" ? -(1 - p) * max : -p * max;
        tr.style.transform = `translate3d(${x}px,0,0)`;
        if (bar) bar.style.width = p * 100 + "%";
      });
      document.querySelectorAll(".gx-grow").forEach((g) => {
        const r = g.getBoundingClientRect();
        const p = Math.max(0, Math.min(1, -r.top / (r.height - window.innerHeight)));
        const m = window.innerWidth < 681 ? 30 : 40;
        g.querySelector("img").style.clipPath = `inset(${(1 - p) * 30}% ${(1 - p) * m}%)`;
        g.querySelector("h2").style.opacity = Math.max(0, (p - 0.55) * 2.2);
      });
      document.querySelectorAll(".gx-pimg").forEach((el) => {
        const r = el.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        const k = parseFloat(el.dataset.k || ".06");
        el.style.transform = `translateY(${(r.top + r.height / 2 - window.innerHeight / 2) * -k}px) scale(1.25)`;
      });
    };
    const on = () => {
      if (!t) {
        t = true;
        requestAnimationFrame(run);
      }
    };
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    run();
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, [ready]);

  /* lightbox keys */
  useEffect(() => {
    if (lb === null) return;
    const n = PICS.length;
    const k = (e) => {
      if (e.key === "Escape") setLb(null);
      if (e.key === "ArrowRight") setLb((v) => (v + 1) % n);
      if (e.key === "ArrowLeft") setLb((v) => (v - 1 + n) % n);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", k);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", k);
    };
  }, [lb]);

  useEffect(() => {
    const t = setInterval(() => setSlide((v) => (v + 1) % SL.length), 4500);
    return () => clearInterval(t);
  }, []);

  const tilt = (e) => {
    const el = e.currentTarget,
      r = el.getBoundingClientRect();
    el.style.setProperty("--ry", ((e.clientX - r.left) / r.width - 0.5) * 16 + "deg");
    el.style.setProperty("--rx", -((e.clientY - r.top) / r.height - 0.5) * 16 + "deg");
  };
  const untilt = (e) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };

  const bokeh = useRef(
    Array.from({ length: 12 }).map(() => ({
      left: Math.random() * 100,
      top: 40 + Math.random() * 55,
      size: 6 + Math.random() * 18,
      dur: 8 + Math.random() * 8,
      delay: Math.random() * 6,
    })),
  ).current;

  const dirs = ["", "gx-r", "gx-c", "", "gx-r", "", "gx-c", "gx-r"];
  const rowA = PICS.slice(0, 6),
    rowB = PICS.slice(6, 12);

  return (
    <div className="lm-root">
      <style>{CSS}</style>

      {/* ═══ 1. LOADER (unchanged) ═══ */}
      <div className={`lm-loader ${ready ? "hidden" : ""}`}>
        <div className="lm-orb lm-orb-1" />
        <div className="lm-orb lm-orb-2" />
        <div className="lm-loader-logo">NIKON</div>
        <div className="lm-loader-tagline">Optics · Est. 1964</div>
        <div className="lm-loader-bar-wrap">
          <div
            className="lm-loader-bar"
            style={{ width: `${Math.min(100, progress)}%` }}
          />
        </div>
        <div className="lm-loader-pct">
          {Math.round(Math.min(100, progress))}%
        </div>
        <div className="lm-loader-status">{STATUSES[statusIdx]}</div>
      </div>

      {/* ═══ 2. HERO (unchanged) ═══ */}
      <section className="lm-hero-scroll" ref={heroScrollRef} id="top">
        <div className={`lm-hero-sticky ${ready ? "lm-ready" : ""}`}>
          <canvas className="lm-canvas" ref={canvasRef} />
          <div className="lm-grad" ref={gradRef} />
          <div className="lm-bokeh">
            {bokeh.map((b, i) => (
              <span
                key={i}
                style={{
                  left: `${b.left}%`,
                  top: `${b.top}%`,
                  width: `${b.size}px`,
                  height: `${b.size}px`,
                  animationDuration: `${b.dur}s`,
                  animationDelay: `${b.delay}s`,
                }}
              />
            ))}
          </div>
          <div className="lm-hero-text" ref={heroTextRef}>
            <p className="lm-eyebrow">Full-Frame · Est. 1964</p>
            <h1 className="lm-title">
              <span className="outline">Where</span>
              <br />
              the <span className="italic">Light</span>
              <br />
              <span className="outline">Meets</span>{" "}
              <span className="italic">Glass</span>
            </h1>
            <p className="lm-sub">
              Nine lens elements. One perfect frame. Yours — from the moment the
              aperture opens.
            </p>
            <div className="lm-cta-row">
              <a className="lm-btn-fill" href="#reserve">
                Pre-order Now
              </a>
              <a className="lm-btn-ghost" href="#lenses">
                Explore the glass
              </a>
            </div>
          </div>
          <div className="lm-scroll-ind" ref={scrollIndRef}>
            <div className="lm-scroll-dot" />
            <span>Scroll to explore</span>
          </div>
          <div className="lm-side-label">NIKON Optics · Full-Frame</div>
          <div className="lm-scrub-progress">
            <div className="lm-scrub-bar" ref={scrubBarRef} />
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div className="lm-marquee">
        <div className="lm-marquee-in">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <React.Fragment key={i}>
              <span className="lm-marquee-item">{item}</span>
              <span className="lm-marquee-dot">·</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ═══ G1. PINNED HORIZONTAL SCROLL GALLERY ═══ */}
      <section className="gx-h" id="lenses">
        <div className="gx-hs">
          <div className="gx-hhd">
            <div className="lm-tag">Shot on NIKON</div>
            <h2 className="lm-big">
              Frames in <em>motion</em>
            </h2>
          </div>
          <div className="gx-track">
            {PICS.slice(0, 8).map((p) => (
              <div className="gx-card" key={p.i} onClick={() => setLb(p.i)}>
                <img src={p.src} alt={p.label} style={{ objectPosition: p.pos }} loading="lazy" />
                <span className="gx-num">{String(p.i + 1).padStart(2, "0")}</span>
                <span className="gx-cap">{p.label}</span>
              </div>
            ))}
          </div>
          <div className="gx-hbar">
            <i />
          </div>
        </div>
      </section>

      <div className="gx-big"><div>{[0, 1].map((k) => (<span key={k}>Shot on NIKON · Light &amp; Glass · </span>))}</div></div>
      {/* ═══ GROW ═══ */}
      <section className="gx-grow">
        <div className="gx-grows">
          <img src={PICS[18].src} alt="Morning Mist" />
          <h2>Step into<br /><em>the frame</em></h2>
        </div>
      </section>

      {/* ═══ G2. ACCORDION ═══ */}
      <section className="gx-sec" id="features">
        <div className="gx-hd">
          <div className="lm-tag rv">The Collection</div>
          <h2 className="lm-big rv d1">Hover. <em>Open</em> the frame.</h2>
        </div>
        <div className="gx-acc rv d1">
          {PICS.slice(0, 6).map((p, i) => (
            <div key={p.i} className={`gx-ap ${acc === i ? "on" : ""}`} onMouseEnter={() => setAcc(i)} onClick={() => (acc === i ? setLb(p.i) : setAcc(i))}>
              <img src={p.src} alt={p.label} style={{ objectPosition: p.pos }} loading="lazy" />
              <b>{String(i + 1).padStart(2, "0")}</b>
              <span>{p.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CHAPTERS ═══ */}
      <section className="gx-sec">
        <div className="gx-hd"><div className="lm-tag rv">Three Chapters</div><h2 className="lm-big rv d1">A day in <em>light</em></h2></div>
        {CHAPS.map(([n, h, d], c) => (
          <div className="gx-chap" key={c}>
            <div className="gx-chap-t rv"><div className="gx-chap-n">{n}</div><h3 className="lm-big" style={{ marginBottom: 16 }}>{h}</h3><p className="lm-body">{d}</p></div>
            <div className="gx-chap-i">
              {PICS.slice(12 + c * 4, 16 + c * 4).map((p, j) => (
                <div key={p.i} className="gx-t rv" style={{ transitionDelay: `${j * 0.1}s` }} onClick={() => setLb(p.i)}>
                  <img className="gx-pimg" data-k=".05" src={p.src} alt={p.label} style={{ objectPosition: p.pos }} loading="lazy" /><span>{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ═══ G3. OPPOSITE-DIRECTION IMAGE RIVERS ═══ */}
      <section className="gx-rows">
        {[rowA, rowB].map((row, r) => (
          <div className={`gx-row ${r ? "rev" : ""}`} key={r}>
            {[...row, ...row].map((p, i) => (
              <img
                key={i}
                src={p.src}
                alt={p.label}
                style={{ objectPosition: p.pos }}
                onClick={() => setLb(p.i)}
                loading="lazy"
              />
            ))}
          </div>
        ))}
      </section>

      {/* ═══ STACK ═══ */}
      <section className="gx-stackw">
        <div className="gx-hd"><div className="lm-tag rv">Layers of Light</div><h2 className="lm-big rv d1">Stacked, <em>one by one</em></h2></div>
        {PICS.slice(21, 26).map((p, i) => (
          <div className="gx-sc" key={p.i} style={{ "--i": i }} onClick={() => setLb(p.i)}>
            <img src={p.src} alt={p.label} loading="lazy" />
            <div><p>{String(i + 1).padStart(2, "0")} / 05</p><h3>{p.label}</h3></div>
          </div>
        ))}
      </section>
            <div className="gx-big"><div>{[0, 1].map((k) => (<span key={k}>Shot on NIKON · Light &amp; Glass · </span>))}</div></div>
      <section className="gx-sec">
        <div className="gx-hd"><div className="lm-tag rv">The Wall</div><h2 className="lm-big rv d1">Pinned, <em>developed</em>, kept</h2></div>
        <div className="gx-pols">
          {PICS.slice(18, 27).map((p, i) => (
            <div key={p.i} className="gx-pol rv" style={{ "--r": `${[-5, 3, -2, 6, -4, 2, -6, 4, -3][i]}deg`, transitionDelay: `${(i % 3) * 0.12}s` }} onClick={() => setLb(p.i)}>
              <img src={p.src} alt={p.label} loading="lazy" />
              <span>{p.label}</span>
            </div>
          ))}
        </div>
      </section>

{/* ═══ G4. 3D TILT CARDS ═══ */}
      <section className="gx-sec">
        <div className="gx-hd">
          <div className="lm-tag rv">Behind the Lens</div>
          <h2 className="lm-big rv d1">
            Touch the <em>light</em>
          </h2>
        </div>
        <div className="gx-tilts">
          {TILTS.map(([h, d], i) => (
            <div
              className={`gx-tilt rv d${i}`}
              key={i}
              onMouseMove={tilt}
              onMouseLeave={untilt}
              onClick={() => setLb(8 + i)}
            >
              <div className="gx-tin">
                <img src={PICS[8 + i].src} alt={h} style={{ objectPosition: PICS[8 + i].pos }} loading="lazy" />
                <div className="gx-tb">
                  <h3>{h}</h3>
                  <p>{d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <HGal items={PICS.slice(20, 30)} tag="Field Notes" rev setLb={setLb}>The road, <em>in reverse</em></HGal>

      {/* ═══ G5. PARALLAX BANNER ═══ */}
      <section className="gx-par">
        <img className="gx-pimg" data-k=".1" src={P} alt="Golden hour" />
        <div>
          <p className="lm-tag rv">Golden Hour · Every Frame</p>
          <h2 className="rv d1">
            The light is always
            <br />
            <em>performing</em>
          </h2>
          <a className="lm-btn-fill rv d2" href="#reserve">
            Reserve your lens
          </a>
        </div>
      </section>

      {/* ═══ SLIDER (id=reserve for hero links) ═══ */}
      <section className="gx-sl" id="reserve">
        {SL.map((id, i) => (
          <img key={id} className={slide === i ? "on" : ""} src={PICS[id].src} alt={PICS[id].label} style={{ objectPosition: PICS[id].pos }} loading="lazy" />
        ))}
        <div className="gx-slt">
          <p className="lm-tag">Moments · {String(slide + 1).padStart(2, "0")} / {String(SL.length).padStart(2, "0")}</p>
          <h2 className="lm-big" key={slide} style={{ animation: "gxZ .8s ease" }}>{PICS[SL[slide]].label}</h2>
        </div>
        <div className="gx-dots">
          {SL.map((_, i) => (<i key={i} className={slide === i ? "on" : ""} onClick={() => setSlide(i)} />))}
        </div>
      </section>

      <footer className="gx-foot"><b>NIKON</b><span>Optics · Est. 1964</span><span>© 2026 All frames reserved</span></footer>

      {/* ═══ LIGHTBOX ═══ */}
      {lb !== null && (
        <div className="gx-lb" onClick={() => setLb(null)}>
          <img key={lb} src={PICS[lb].src} alt={PICS[lb].label} onClick={(e) => e.stopPropagation()} />
          <b>{PICS[lb].label}</b>
          <button className="x" onClick={() => setLb(null)}>×</button>
          <button className="pv" onClick={(e) => { e.stopPropagation(); setLb((lb - 1 + PICS.length) % PICS.length); }}>‹</button>
          <button className="nx" onClick={(e) => { e.stopPropagation(); setLb((lb + 1) % PICS.length); }}>›</button>
        </div>
      )}
    </div>
  );
}