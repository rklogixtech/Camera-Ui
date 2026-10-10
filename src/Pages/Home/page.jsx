// import FieldIndex from "./Fieldindex ";
// import NikonHero from "./Hero";
// import NikonCollectionGrid from "./Nikoncollectiongrid ";
// import NikonSplitBay from "./Nikonsplitbay";
// import NikonTrustSection from "./Nikontrustsection";
// import StickerFeaturesSection from "./Stickerfeaturessection ";

// function App() {
//   return (
//     <div className="min-h-screen bg-[#0B0B0C]">
//       <NikonHero/>
//       <NikonSplitBay/>
//       <NikonCollectionGrid/>
//       <StickerFeaturesSection/>
//       <FieldIndex/>
//       <NikonTrustSection/>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useRef, useState, useCallback } from "react";

/* Purchase page ka route yahan badal lena (home page par checkout nahi hai) */
const SHOP = "/shop";

const U = (id, w = 1400) => `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

/* ═══════════ DATA ═══════════ */
const HERO = [
  { name: "Z9", tag: "The flagship. Unstoppable.", f: "ƒ/1.2", s: "1/8000s", iso: "ISO 100", img: "/home/hero1.jpg" },
  { name: "Z8", tag: "All the power. Half the weight.", f: "ƒ/1.8", s: "1/4000s", iso: "ISO 200", img: "/home/hero2.jpg" },
  { name: "Zf", tag: "Heritage, rewired.", f: "ƒ/2.8", s: "1/500s", iso: "ISO 400", img: "/home/hero3.jpg" },
];
const TICK = ["NIKON Z SERIES", "FULL-FRAME MIRRORLESS", "493 AF POINTS", "BUILT FOR LIGHT", "ISO 64 – 25600", "Z-MOUNT OPTICS", "MADE TO SEE", "SINCE 1964"];
const CAMS = [
  { id: "z9", name: "Z9", cat: "Flagship", tag: "The flagship. Unstoppable.", f: "ƒ1.2", s: "1/8000", iso: "100", img: "/cameras/z9.jpg", bars: [98, 95, 92, 55] },
  { id: "z8", name: "Z8", cat: "Pro", tag: "All the power. Half the weight.", f: "ƒ1.8", s: "1/4000", iso: "200", img: "/cameras/z8.jpg", bars: [92, 95, 90, 75] },
  { id: "zf", name: "Zf", cat: "Retro", tag: "Heritage, rewired.", f: "ƒ2.8", s: "1/500", iso: "400", img: "/cameras/zr.jpg", bars: [60, 70, 88, 85] },
  { id: "z6iii", name: "Z6III", cat: "Hybrid", tag: "The all-rounder, sharpened.", f: "ƒ2.0", s: "1/2000", iso: "160", img: "/cameras/z6iii.jpg", bars: [85, 72, 94, 80] },
  { id: "z50ii", name: "Z50II", cat: "Compact", tag: "Light body, no compromises.", f: "ƒ3.5", s: "1/1000", iso: "320", img: "/cameras/z50ii.jpg", bars: [70, 55, 70, 95] },
  { id: "zr", name: "ZR", cat: "Cinema", tag: "Born cinematic.", f: "ƒ1.4", s: "1/50", iso: "800", img: "/cameras/zf8.jpg", bars: [65, 75, 85, 82] },
];
const BARS = ["Speed", "Detail", "Low light", "Portability"];
const GENRES = [
  ["Nikon Z9",   "/cameras/z9.png",   "400mm ƒ/2.8",      "Tracking AF that never blinks."],
  ["Nikon Zf",   "/cameras/zf.jpg",   "50mm ƒ/1.2",       "Moments that don't wait for a retake."],
  ["Nikon Z6III","/cameras/z6iii.jpg","24–70mm ƒ/2.8",    "One body. Every border."],
  ["Nikon Z8",   "/cameras/z8.jpg",   "14–24mm ƒ/2.8",    "Horizon to horizon, edge-sharp."],
  ["Nikon Z50II","/cameras/z50ii.jpg","35mm ƒ/1.8",       "Light, quick, invisible."],
  ["Nikon Z5II", "/cameras/z5ii.jpg", "24–120mm ƒ/4",     "Stars as points, not streaks."],
  ["Nikon Z7II", "/cameras/z7ii.jpg", "70–200mm ƒ/2.8",   "Frames faster than the moment."],
];
const LENSES = [
  ["14–24mm ƒ/2.8 S", [14, 24], 18, U("1516035069371-29a1b244cc32", 500), "Ultra-wide"],
  ["24–70mm ƒ/2.8 S", [24, 70], 40, U("1502920917128-1aa500764cbd", 500), "Standard zoom"],
  ["50mm ƒ/1.2 S", [50, 50], 50, U("1510127034890-ba27508e9f1c", 500), "Signature prime"],
  ["85mm ƒ/1.2 S", [85, 85], 85, U("1495707902641-75cac588d2e9", 500), "Portrait prime"],
  ["70–200mm ƒ/2.8 VR", [70, 200], 135, U("1452780212940-6f5c0d14d848", 500), "Telephoto"],
];
const FIELD = ["1506905925346-21bda4d32df4", "1470071459604-3b5ec3a7fe05", "1441974231531-c6227db76b6e", "1441716844725-09cedc13a4e7", "1500534623283-312aade485b7"].map((id) => U(id, 900));
const ROW1 = [
  ["/home/g1.jpg", "The Body"], ["/home/g2.jpg", "The Glass"], [FIELD[0], "Above the Tree Line"], ["/home/g3.jpg", "The Aperture"],
  ["/others/sea.jpg", "Salt Air"], ["/home/g4.jpg", "Ambient Light"], [FIELD[1], "Athabasca, Dusk"], ["/home/g5.jpg", "The Details"],
];
const ROW2 = [
  ["/home/g7.jpg", "In Hand"], ["/others/kids.jpg", "Unfiltered"], ["/home/g8.jpg", "The Frame"], [FIELD[2], "Pahalgam Rapids"],
  ["/home/g9.jpg", "The Element"], ["/others/birds.jpg", "Mid-air"], [FIELD[4], "Last Light"], ["/home/g11.jpg", "The Landscape"],
];
const LOG = [
  { date: "Jan 2024", title: "13 bodies to orbit", tag: "LAUNCH", color: "#FF7A29", n: 13, u: "Z9 bodies", body: "Thirteen unmodified Z9 cameras rode to the International Space Station aboard a Northrop Grumman resupply mission, retiring three generations of Nikon SLRs that had served the crew since 2017." },
  { date: "Feb 2024", title: "Built for the Moon", tag: "CONTRACT", color: "#6FA8DC", n: 384400, u: "km to the lunar surface", body: "NASA and Nikon signed on to build the Handheld Universal Lunar Camera — a modified Z9 with thermal shielding for Artemis III, the first handheld camera designed to work on the lunar surface." },
  { date: "2026", title: "Tested in deep space", tag: "IN FLIGHT", color: "#B073FF", t: "II", u: "Artemis II", body: "A Z9 flew aboard Artemis II to log how the platform holds up in a high-radiation, deep-space environment ahead of the crewed lunar flyby." },
  { date: "2021–23", title: "Recognition", tag: "CITATION", color: "#D9B24C", n: 6, u: "awards, 2021–2023", body: "Camera Grand Prix (2022), Red Dot — Best of the Best (2022), EISA Camera of the Year (2022–23), DPReview Product of the Year (2021), TIPA World Award for Best Pro Full-Frame (2022), and an iF Design Award (2022)." },
];

const Im = (p) => <img loading="lazy" draggable={false} alt="" onError={(e) => (e.currentTarget.style.opacity = 0)} {...p} />;

function useSlide(n, ms) {
  const [i, setI] = useState(0);
  const pv = useRef(0);
  const go = useCallback((k) => setI((c) => { const x = (k + n) % n; if (x !== c) pv.current = c; return x; }), [n]);
  useEffect(() => { const t = setInterval(() => go(i + 1), ms); return () => clearInterval(t); }, [i, ms, go]);
  return [i, pv.current, go];
}

/* ═══════════ CSS ═══════════ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=JetBrains+Mono:wght@400;500&family=Inter:wght@300;400;500;600&display=swap');
.n{--bg:#070707;--bg2:#0f0f0f;--ink:#f4f1ea;--dim:#9b978d;--y:#ffd400;--ln:rgba(244,241,234,.14);--p:max(clamp(20px,5vw,72px),calc((100% - 1296px)/2));background:var(--bg);color:var(--ink);font-family:Inter,sans-serif;overflow-x:clip}
.n *{box-sizing:border-box;margin:0;padding:0}.n img{display:block;max-width:none}.n a{color:inherit;text-decoration:none}
.n button{font:inherit;color:inherit;background:none;border:0;cursor:pointer}
.d{font-family:'Archivo Black',sans-serif;text-transform:uppercase}.m{font-family:'JetBrains Mono',monospace}
.sc{padding:clamp(48px,6vw,88px) var(--p)}.bg2{background:var(--bg2)}
.eb{display:flex;align-items:center;gap:12px;font:500 11px 'JetBrains Mono';letter-spacing:.22em;text-transform:uppercase;color:var(--y);margin-bottom:16px}
.eb::before{content:"";width:28px;height:2px;background:var(--y)}
.h2{font:400 clamp(34px,6vw,86px)/.94 'Archivo Black';text-transform:uppercase;letter-spacing:-.02em;margin-bottom:clamp(22px,3vw,40px)}
.h2 .o{color:transparent;-webkit-text-stroke:2px var(--y)}
.hd{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap}.hd .cp{max-width:380px;color:var(--dim);line-height:1.7;margin-bottom:clamp(22px,3vw,40px)}
.btn{display:inline-flex;gap:10px;align-items:center;background:var(--y);color:#000;font:600 12px 'JetBrains Mono';letter-spacing:.14em;text-transform:uppercase;padding:15px 28px;border-radius:2px;transition:transform .3s,box-shadow .3s}
.btn:hover{transform:translateY(-3px);box-shadow:0 12px 30px rgba(255,212,0,.28)}
.gh{display:inline-flex;font:500 12px 'JetBrains Mono';letter-spacing:.14em;text-transform:uppercase;padding:14px 26px;border:1px solid var(--ln);transition:.3s}.gh:hover{border-color:var(--y);color:var(--y)}
.vfx{position:relative}.vfx::before,.vfx::after{content:"";position:absolute;width:22px;height:22px;border:2px solid var(--y);z-index:5;pointer-events:none}
.vfx::before{top:10px;left:10px;border-right:0;border-bottom:0}.vfx::after{bottom:10px;right:10px;border-left:0;border-top:0}
.rv{opacity:0;transform:translateY(44px);transition:opacity .9s,transform .9s cubic-bezier(.2,.8,.2,1);transition-delay:var(--dl,0s)}
.rv.l{transform:translateX(-70px)}.rv.r{transform:translateX(70px)}.rv.z{transform:scale(.92)}.rv.in{opacity:1;transform:none}
@keyframes up{from{opacity:0;transform:translateY(50px)}to{opacity:1;transform:none}}
@keyframes kb{from{transform:scale(1)}to{transform:scale(1.12)}}
@keyframes fill{from{width:0}to{width:100%}}
@keyframes mq{to{transform:translateX(-50%)}}
@keyframes lock{0%{transform:translate(-50%,-50%) scale(1.35)}to{transform:translate(-50%,-50%) scale(1)}}
.pb{position:fixed;top:0;left:0;right:0;height:3px;background:var(--y);transform-origin:left;transform:scaleX(0);z-index:60}

/* HERO */
.hr{position:relative;height:100svh;min-height:600px;overflow:hidden;background:#000;cursor:crosshair}
.hr-s{position:absolute;inset:0;clip-path:circle(0% at 50% 55%)}
.hr-s.pv{clip-path:circle(150% at 50% 55%);z-index:1}
.hr-s.on{clip-path:circle(150% at 50% 55%);z-index:2;transition:clip-path 1.4s cubic-bezier(.7,0,.2,1)}
.hr-s img{width:100%;height:100%;object-fit:cover;filter:brightness(.72)}.hr-s.on img{animation:kb 9s ease-out both}
.hr::after{content:"";position:absolute;inset:0;z-index:3;pointer-events:none;background:linear-gradient(to bottom,rgba(7,7,7,.6),transparent 28%,transparent 40%,rgba(7,7,7,.96))}
.vf{position:absolute;z-index:6;width:28px;height:28px;border:2px solid rgba(244,241,234,.7);pointer-events:none}
.vf.a{top:22px;left:22px;border-right:0;border-bottom:0}.vf.b{top:22px;right:22px;border-left:0;border-bottom:0}.vf.c{bottom:22px;left:22px;border-right:0;border-top:0}.vf.d2{bottom:22px;right:22px;border-left:0;border-top:0}
.af{position:absolute;z-index:6;width:92px;height:92px;transform:translate(-50%,-50%);pointer-events:none;transition:left .55s cubic-bezier(.2,.9,.2,1),top .55s cubic-bezier(.2,.9,.2,1)}
.af.lk{animation:lock .4s ease-out}
.af i{position:absolute;width:20px;height:20px;border:2px solid #fff;transition:border-color .2s}.af.lk i{border-color:var(--y)}
.af i:nth-child(1){top:0;left:0;border-right:0;border-bottom:0}.af i:nth-child(2){top:0;right:0;border-left:0;border-bottom:0}.af i:nth-child(3){bottom:0;left:0;border-right:0;border-top:0}.af i:nth-child(4){bottom:0;right:0;border-left:0;border-top:0}
.af b{position:absolute;top:100%;left:50%;transform:translateX(-50%);margin-top:8px;font:500 9px 'JetBrains Mono';letter-spacing:.2em;white-space:nowrap}.af.lk b{color:var(--y)}
.hud{position:absolute;z-index:6;font:400 10px 'JetBrains Mono';letter-spacing:.18em;color:rgba(244,241,234,.8)}
.hr-c{position:absolute;z-index:6;left:var(--p);bottom:118px;right:20px;pointer-events:none}
.hr-c a{pointer-events:auto}
.hr-n{display:block;font:400 clamp(100px,24vw,330px)/.8 'Archivo Black';letter-spacing:-.04em;animation:up 1s cubic-bezier(.2,.8,.2,1) both}
.hr-p{font-size:clamp(14px,1.6vw,20px);color:#ddd8cb;margin:20px 0 24px;animation:up 1s .15s both}
.hr-bt{display:flex;gap:12px;flex-wrap:wrap;animation:up 1s .3s both}
.lcd{position:absolute;z-index:6;right:var(--p);bottom:118px;background:rgba(0,0,0,.55);border:1px solid var(--ln);backdrop-filter:blur(6px);padding:12px 16px;font:500 12px 'JetBrains Mono';letter-spacing:.1em;color:var(--y);display:flex;gap:14px}
.hr-tb{position:absolute;z-index:6;left:var(--p);right:var(--p);bottom:34px;display:flex;align-items:flex-end;gap:14px}
.hr-t{width:46px;height:46px;overflow:hidden;opacity:.5;transition:.3s;flex:none}.hr-t img{width:100%;height:100%;object-fit:cover}.hr-t.on{opacity:1;outline:2px solid var(--y);outline-offset:2px}
.hr-b{flex:1;display:flex;gap:8px;margin-bottom:22px}.hr-b span{flex:1;height:2px;background:rgba(244,241,234,.2);position:relative}
.hr-b span.dn::after,.hr-b span.on::after{content:"";position:absolute;left:0;top:0;height:100%;background:var(--y);width:100%}.hr-b span.on::after{animation:fill 6.5s linear both}
.fw{position:fixed;inset:0;background:#fff;z-index:100;pointer-events:none;opacity:0}.fw.go{animation:fl .6s ease-out}@keyframes fl{0%{opacity:.95}to{opacity:0}}

/* TICKER */
.tk{background:var(--y);color:#000;overflow:hidden;padding:13px 0;display:flex}
.tk div{display:flex;width:max-content;animation:mq 28s linear infinite}.tk span{font:400 14px 'Archivo Black';letter-spacing:.12em;padding:0 26px;white-space:nowrap}.tk span::after{content:"◉";margin-left:52px;font-size:10px;vertical-align:middle}

/* CAMERAS */
.cf{display:grid;grid-template-columns:200px 1.5fr 1fr;gap:20px;align-items:stretch}
.cf-l{display:flex;flex-direction:column;gap:6px}
.cf-l button{display:grid;grid-template-columns:30px 1fr;align-items:center;text-align:left;padding:14px 12px;border:1px solid var(--ln);transition:.3s;position:relative}
.cf-l button span{font-size:11px;color:var(--dim)}.cf-l b{font:400 20px 'Archivo Black'}.cf-l small{grid-column:2;font:400 10px 'JetBrains Mono';letter-spacing:.14em;color:var(--dim);text-transform:uppercase}
.cf-l button.on{background:var(--y);color:#000;border-color:var(--y)}.cf-l button.on span,.cf-l button.on small{color:#000}
.cf-s{min-height:440px;background:#000;overflow:hidden}
.cf-s img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transform:scale(1.08);transition:opacity .7s,transform 1.2s}.cf-s img.on{opacity:1;transform:scale(1)}
.cf-s::after{z-index:6}
.cf-h{position:absolute;z-index:6;left:20px;bottom:16px;font:500 11px 'JetBrains Mono';letter-spacing:.14em;color:var(--y);text-shadow:0 1px 6px #000}
.cf-r{display:flex;flex-direction:column;justify-content:center;animation:up .7s both}
.cf-r h3{font:400 clamp(56px,7vw,100px)/.9 'Archivo Black'}.cf-r p{color:var(--dim);margin:12px 0 24px}
.br{margin-bottom:16px}.br label{display:flex;justify-content:space-between;font:400 10px 'JetBrains Mono';letter-spacing:.16em;text-transform:uppercase;color:var(--dim);margin-bottom:7px}
.br div{height:4px;background:var(--ln)}.br i{display:block;height:100%;background:var(--y);transform-origin:left;animation:gr 1s cubic-bezier(.2,.8,.2,1) both}@keyframes gr{from{transform:scaleX(0)}}
.cf-r .btn{align-self:flex-start;margin-top:10px}

/* GENRES */
.gn{position:relative;height:min(100vh,800px);overflow:hidden;background:#000}
.gn-s{position:absolute;inset:0;opacity:0;transition:opacity 1.1s}.gn-s.on{opacity:1}
.gn-s img{width:100%;height:100%;object-fit:cover;filter:brightness(.72)}.gn-s.on img{animation:kb 8s ease-out both}
.gn::after{content:"";position:absolute;inset:0;z-index:2;pointer-events:none;background:linear-gradient(to top,rgba(7,7,7,.95),transparent 60%),linear-gradient(to right,rgba(7,7,7,.55),transparent 55%)}
.gn-c{position:absolute;z-index:3;left:var(--p);bottom:104px;right:20px}
.gn-c h2{font:400 clamp(60px,13vw,200px)/.85 'Archivo Black';text-transform:uppercase;letter-spacing:-.03em;animation:up .8s both}
.gn-c p{margin-top:16px;animation:up .8s .1s both}.gn-c .m{color:var(--y);font-size:12px;letter-spacing:.16em}.gn-c span{display:block;color:#ddd8cb;margin-top:6px}
.gn-ch{position:absolute;z-index:4;left:var(--p);right:var(--p);bottom:28px;display:flex;gap:8px;overflow-x:auto;scrollbar-width:none}.gn-ch::-webkit-scrollbar{display:none}
.gn-ch button{flex:none;font:500 11px 'JetBrains Mono';letter-spacing:.1em;text-transform:uppercase;padding:10px 16px;border:1px solid rgba(255,255,255,.3);transition:.3s}
.gn-ch button.on{background:var(--y);color:#000;border-color:var(--y)}

/* ZOOM */
.zm{display:grid;grid-template-columns:1.4fr 1fr;gap:clamp(24px,4vw,56px);align-items:center}
.zm-v{aspect-ratio:16/10;overflow:hidden;background:#000}
.zm-v img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform-origin:58% 60%;transition:transform .25s ease-out}
.zm-x{position:absolute;inset:0;z-index:4;pointer-events:none;opacity:.35;background:linear-gradient(#fff,#fff) 33.3% 0/1px 100% no-repeat,linear-gradient(#fff,#fff) 66.6% 0/1px 100% no-repeat,linear-gradient(#fff,#fff) 0 33.3%/100% 1px no-repeat,linear-gradient(#fff,#fff) 0 66.6%/100% 1px no-repeat}
.zm-r{position:absolute;z-index:6;left:18px;bottom:14px;font:500 11px 'JetBrains Mono';letter-spacing:.14em;color:var(--y);text-shadow:0 1px 6px #000}
.zm-n{font:400 clamp(72px,9vw,130px)/1 'Archivo Black';color:var(--y)}.zm-n small{font-size:.28em;color:var(--ink);margin-left:6px}
.zm-c input{-webkit-appearance:none;appearance:none;width:100%;height:3px;background:var(--ln);outline:0;margin:14px 0 6px}
.zm-c input::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;background:var(--y);border-radius:2px;cursor:pointer;box-shadow:0 0 0 6px rgba(255,212,0,.18)}.zm-c input::-moz-range-thumb{width:22px;height:22px;border:0;background:var(--y);border-radius:2px}
.zm-sc{display:flex;justify-content:space-between;font:400 10px 'JetBrains Mono';color:var(--dim)}
.zm-l{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:24px}
.zm-l button{text-align:left;border:1px solid var(--ln);transition:.3s;overflow:hidden}.zm-l button img{width:100%;aspect-ratio:1;object-fit:cover;filter:grayscale(1);transition:.4s}
.zm-l button small{display:block;padding:7px 8px;font:400 9px 'JetBrains Mono';letter-spacing:.06em;line-height:1.4;color:var(--dim)}
.zm-l button.on{border-color:var(--y)}.zm-l button.on img{filter:none}.zm-l button.on small{color:var(--y)}

/* WALL */
.wl{overflow:hidden;padding-bottom:10px}
.wl-r{display:flex;width:max-content;animation:mq 60s linear infinite;margin-bottom:14px}.wl-r.rev{animation-direction:reverse;animation-duration:72s}.wl:hover .wl-r{animation-play-state:paused}
.wl figure{position:relative;flex:none;width:clamp(210px,24vw,330px);aspect-ratio:3/2;overflow:hidden;margin-right:14px}
.wl img{width:100%;height:100%;object-fit:cover;transition:transform .7s,filter .5s;filter:grayscale(.5)}.wl figure:hover img{transform:scale(1.08);filter:none}
.wl figcaption{position:absolute;left:0;right:0;bottom:0;padding:26px 14px 10px;font:500 10px 'JetBrains Mono';letter-spacing:.16em;text-transform:uppercase;background:linear-gradient(to top,rgba(0,0,0,.85),transparent)}

/* MISSION */
.ms{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.mc{position:relative;padding:26px 22px;border:1px solid var(--ln);background:linear-gradient(160deg,rgba(255,255,255,.04),transparent);transition:transform .4s,border-color .4s}
.mc:hover{transform:translateY(-6px);border-color:var(--a)}.mc .m{font-size:10px;letter-spacing:.18em;color:var(--a)}
.mc .st{font:400 clamp(38px,4.2vw,60px)/1 'Archivo Black';color:var(--a);margin:16px 0 4px}.mc .u{font:400 10px 'JetBrains Mono';letter-spacing:.14em;text-transform:uppercase;color:var(--dim);margin-bottom:18px}
.mc h3{font:600 18px Inter;margin-bottom:8px}.mc p{font-size:13px;line-height:1.65;color:#a6a3aa}

/* FINALE */
.fin{text-align:center;overflow:hidden}
.fin-big{display:flex;width:max-content;animation:mq 30s linear infinite;margin-bottom:22px}
.fin-big span{font:400 clamp(60px,12vw,170px)/.95 'Archivo Black';text-transform:uppercase;color:transparent;-webkit-text-stroke:1px rgba(255,212,0,.5);padding-right:60px;white-space:nowrap}
.sh{position:relative;width:110px;height:110px;border-radius:50%;border:3px solid var(--y);display:inline-grid;place-items:center;margin:6px 0 16px;transition:transform .2s}
.sh::before{content:"";width:78px;height:78px;border-radius:50%;background:var(--y);transition:transform .2s}.sh:active{transform:scale(.92)}.sh:active::before{transform:scale(.8)}

@media(max-width:1000px){
  .cf{grid-template-columns:1fr}.cf-l{flex-direction:row;overflow-x:auto;scrollbar-width:none}.cf-l button{flex:none;min-width:120px}.cf-s{min-height:340px}
  .zm{grid-template-columns:1fr}
  .ms{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;margin:0 -20px;padding:0 20px;scrollbar-width:none}.mc{flex:0 0 78%;scroll-snap-align:center}
}
@media(max-width:700px){
  .hr-c{bottom:120px}.lcd{display:none}.vf.a,.vf.b{top:16px}.af{width:70px;height:70px}
  .gn{height:72vh}.gn-c{bottom:90px}.zm-l small{display:none}.zm-l button{padding:0}
  .cf-s{min-height:300px}.hd .cp{display:none}
}
@media(prefers-reduced-motion:reduce){.n *{animation:none!important;transition:none!important}.rv{opacity:1;transform:none}}
`;

/* ═══════════ SECTIONS ═══════════ */
function Hero({ onShot }) {
  const [i, pv, go] = useSlide(HERO.length, 6500);
  const [af, setAf] = useState({ x: 50, y: 52, l: true });
  const tm = useRef(0), idle = useRef(true);
  const s = HERO[i];
  useEffect(() => {
    const id = setInterval(() => {
      if (!idle.current) return;
      setAf({ x: 25 + Math.random() * 50, y: 30 + Math.random() * 35, l: false });
      setTimeout(() => setAf((a) => ({ ...a, l: true })), 750);
    }, 3200);
    return () => clearInterval(id);
  }, []);
  const mv = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    idle.current = false;
    setAf({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100, l: false });
    clearTimeout(tm.current);
    tm.current = setTimeout(() => { setAf((a) => ({ ...a, l: true })); idle.current = true; }, 600);
  };
  return (
    <section className="hr" id="top" onMouseMove={mv} onClick={onShot}>
      {HERO.map((h, k) => <div key={k} className={`hr-s ${k === i ? "on" : k === pv ? "pv" : ""}`}><Im src={h.img} /></div>)}
      {["a", "b", "c", "d2"].map((c) => <i key={c} className={`vf ${c}`} />)}
      <div className={`af ${af.l ? "lk" : ""}`} style={{ left: af.x + "%", top: af.y + "%" }}>
        <i /><i /><i /><i /><b>{af.l ? "AF-S ● LOCK" : "AF …"}</b>
      </div>
      <div className="hud" style={{ top: 30, left: "calc(var(--p) + 6px)" }}>NIKON · Z SERIES</div>
      <div className="hud" style={{ top: 30, right: "calc(var(--p) + 6px)" }}>● REC 0{i + 1}/0{HERO.length}</div>
      <div className="hr-c" key={i}>
        <h1 className="hr-n">{s.name}</h1>
        <p className="hr-p">{s.tag}</p>
        <div className="hr-bt">
          <a className="btn" href={`${SHOP}?model=${s.name.toLowerCase()}`}>Shop {s.name} →</a>
          <a className="gh" href="#cameras">Compare cameras</a>
        </div>
      </div>
      <div className="lcd"><span>{s.f}</span><span>{s.s}</span><span>{s.iso}</span></div>
      <div className="hr-tb">
        {HERO.map((h, k) => <button key={k} className={`hr-t ${k === i ? "on" : ""}`} onClick={(e) => { e.stopPropagation(); go(k); }} aria-label={h.name}><Im src={h.img} /></button>)}
        <div className="hr-b">{HERO.map((_, k) => <span key={`${k}-${k === i}`} className={k < i ? "dn" : k === i ? "on" : ""} />)}</div>
      </div>
    </section>
  );
}

const Ticker = () => (
  <div className="tk"><div>{[0, 1].map((r) => TICK.map((t, k) => <span key={`${r}${k}`}>{t}</span>))}</div></div>
);

function Cameras() {
  const [k, setK] = useState(0);
  const c = CAMS[k];
  return (
    <section className="sc" id="cameras">
      <div className="hd">
        <div><div className="eb rv">The Lineup</div><h2 className="h2 rv">Choose your <span className="o">Z</span></h2></div>
        <p className="cp rv">Six bodies, one mount. Tap a model to see how it handles speed, detail, low light and weight.</p>
      </div>
      <div className="cf rv">
        <div className="cf-l">
          {CAMS.map((x, j) => <button key={x.id} className={j === k ? "on" : ""} onClick={() => setK(j)}><span className="m">0{j + 1}</span><b>{x.name}</b><small>{x.cat}</small></button>)}
        </div>
        <div className="cf-s vfx">
          {CAMS.map((x, j) => <Im key={x.id} className={j === k ? "on" : ""} src={x.img} alt={x.name} />)}
          <div className="cf-h">{c.f} · {c.s}s · ISO {c.iso}</div>
        </div>
        <div className="cf-r" key={k}>
          <h3>{c.name}</h3><p>{c.tag}</p>
          {BARS.map((b, j) => <div className="br" key={b}><label><span>{b}</span><span>{c.bars[j]}</span></label><div><i style={{ width: c.bars[j] + "%", animationDelay: j * 0.08 + "s" }} /></div></div>)}
          <a className="btn" href={`${SHOP}?model=${c.id}`}>Buy {c.name} →</a>
        </div>
      </div>
    </section>
  );
}

function Genres() {
  const [i, , go] = useSlide(GENRES.length, 4500);
  const g = GENRES[i];
  return (
    <section className="gn" id="shoot">
      {GENRES.map((x, k) => <div key={k} className={`gn-s ${k === i ? "on" : ""}`}><Im src={x[1]} alt={x[0]} /></div>)}
      <div className="gn-c" key={i}>
        <div className="eb">Shoot anything</div>
        <h2>{g[0]}</h2>
        <p><span className="m">BEST WITH · {g[2]}</span><span>{g[3]}</span></p>
      </div>
      <div className="gn-ch">{GENRES.map((x, k) => <button key={k} className={k === i ? "on" : ""} onClick={() => go(k)}>{x[0]}</button>)}</div>
    </section>
  );
}

function Zoom() {
  const [f, setF] = useState(35);
  const sc = 1 + ((f - 14) / 186) * 2.8;
  const fov = Math.round((2 * Math.atan(36 / (2 * f)) * 180) / Math.PI);
  const dist = (k) => { const [lo, hi] = LENSES[k][1]; return lo === hi ? Math.max(0, Math.abs(f - lo) - 4) : f < lo ? lo - f : f > hi ? f - hi : 0; };
  const act = [2, 3, 0, 1, 4].reduce((b, k) => (dist(k) < b[0] ? [dist(k), k] : b), [1e9, 0])[1];
  return (
    <section className="sc bg2" id="glass">
      <div className="hd">
        <div><div className="eb rv">The Glass</div><h2 className="h2 rv">Zoom the <span className="o">world</span></h2></div>
        <p className="cp rv">Drag the ring from 14mm to 200mm. Same spot, same camera — five lenses that change everything.</p>
      </div>
      <div className="zm">
        <div className="zm-v vfx rv l">
          <Im src="/home/g11.jpg" style={{ transform: `scale(${sc})` }} />
          <i className="zm-x" />
          <div className="zm-r">{f}mm · FOV {fov}° · {LENSES[act][4].toUpperCase()}</div>
        </div>
        <div className="zm-c rv r">
          <div className="zm-n">{f}<small>mm</small></div>
          <input type="range" min="14" max="200" value={f} onChange={(e) => setF(+e.target.value)} aria-label="Focal length" />
          <div className="zm-sc"><span>14</span><span>50</span><span>85</span><span>135</span><span>200</span></div>
          <div className="zm-l">
            {LENSES.map((l, k) => <button key={k} className={k === act ? "on" : ""} onClick={() => setF(l[2])}><Im src={l[3]} alt={l[0]} /><small>{l[0]}</small></button>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Wall() {
  return (
    <section className="sc" id="wall" style={{ paddingInline: 0 }}>
      <div className="hd" style={{ paddingInline: "var(--p)" }}>
        <div><div className="eb rv">Shot on Nikon</div><h2 className="h2 rv">Moments, <span className="o">not poses</span></h2></div>
        <p className="cp rv">The dog mid-jump, a laugh at the table, light through a bus window. Built to keep up with the frames between plans.</p>
      </div>
      <div className="wl rv">
        {[ROW1, ROW2].map((row, k) => (
          <div key={k} className={`wl-r ${k ? "rev" : ""}`}>
            {[...row, ...row].map(([src, cap], j) => <figure key={j}><Im src={src} alt={cap} /><figcaption>{cap}</figcaption></figure>)}
          </div>
        ))}
      </div>
    </section>
  );
}

function Count({ to }) {
  const [v, setV] = useState(0);
  const r = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => { const p = Math.min(1, (t - t0) / 1400); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(r.current);
    return () => io.disconnect();
  }, [to]);
  return <span ref={r}>{v.toLocaleString()}</span>;
}

function Mission() {
  return (
    <section className="sc bg2" id="mission">
      <div className="hd">
        <div><div className="eb rv">Mission Log — Proven in the Field</div><h2 className="h2 rv">Trusted where <span className="o">focus cannot fail</span></h2></div>
      </div>
      <div className="ms">
        {LOG.map((x, k) => (
          <div className="mc rv" key={k} style={{ "--a": x.color, "--dl": `${k * 0.1}s` }}>
            <span className="m">{x.tag} · {x.date}</span>
            <div className="st">{x.n ? <Count to={x.n} /> : x.t}</div>
            <div className="u">{x.u}</div>
            <h3>{x.title}</h3><p>{x.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Finale({ onShot }) {
  return (
    <section className="sc fin" id="contact">
      <div className="fin-big">{[0, 1].map((k) => <span key={k}>Find your frame · Find your frame ·</span>)}</div>
    </section>
  );
}

/* ═══════════ PAGE ═══════════ */
export default function NikonHomeNew() {
  const [flash, setFlash] = useState(0);
  const shot = useCallback(() => setFlash((v) => v + 1), []);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    document.querySelectorAll(".n .rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    const pb = document.getElementById("n-pb");
    let t = 0;
    const run = () => { t = 0; pb.style.transform = `scaleX(${window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1)})`; };
    const on = () => { if (!t) t = requestAnimationFrame(run); };
    window.addEventListener("scroll", on, { passive: true });
    run();
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="n">
      <style>{CSS}</style>
      <div className="pb" id="n-pb" />
      <Hero onShot={shot} />
      <Ticker />
      <Cameras />
      <Genres />
      <Finale onShot={shot} />
      <Zoom />
      <Wall />
      <Mission />
      <div key={flash} className={`fw ${flash ? "go" : ""}`} />
    </div>
  );
}