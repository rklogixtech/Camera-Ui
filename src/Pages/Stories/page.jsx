import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useScroll,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, ArrowRight, Clock, Camera, Quote, Plus } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Tokens                                                             */
/* ------------------------------------------------------------------ */

const GOLD = "#D8B56D";
const GOLD_LIGHT = "#E8CC91";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const CATEGORIES = ["All", "Field Notes", "Gear Guides", "Creator Spotlights"];

const FEATURED = {
  category: "Field Notes",
  title: "Eleven Days Above the Cloud Line",
  excerpt:
    "A wildlife photographer, one carbon fiber tripod and a stubborn snow leopard in the high Himalaya — what she packed, what she left behind, and the frame that finally worked.",
  author: "Ritika Malhotra",
  read: "12 min read",
  img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=2000&q=80",
};

const STORIES = [
  { id: 1, category: "Field Notes", title: "Shooting Golden Hour in the Thar", author: "Aman Bhargava", read: "8 min", date: "Sep 2026", img: "https://images.unsplash.com/photo-1519638831568-d9897f54ed69?auto=format&fit=crop&w=900&q=80" },
  { id: 2, category: "Gear Guides", title: "How to Choose an ND Filter Without Guessing", author: "Team Editorial", read: "6 min", date: "Sep 2026", img: "https://images.unsplash.com/photo-1519183071298-a2962be96f83?auto=format&fit=crop&w=900&q=80" },
  { id: 3, category: "Creator Spotlights", title: "The Wedding Filmmaker Who Travels With One Bag", author: "Sana Iqbal", read: "9 min", date: "Aug 2026", img: "https://images.unsplash.com/photo-1547949003-9792a18a2645?auto=format&fit=crop&w=900&q=80" },
  { id: 4, category: "Gear Guides", title: "Wireless Mics, Explained: 2.4GHz vs Everything Else", author: "Team Editorial", read: "7 min", date: "Aug 2026", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80" },
  { id: 5, category: "Field Notes", title: "Night Markets of Jaipur, One Light Panel at a Time", author: "Kabir Rathore", read: "10 min", date: "Aug 2026", img: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=900&q=80" },
  { id: 6, category: "Creator Spotlights", title: "From Reels to Feature Film: A Creator's First Year", author: "Meera Nair", read: "11 min", date: "Jul 2026", img: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&w=900&q=80" },
  { id: 7, category: "Gear Guides", title: "Memory Cards for 4K: What Speed You Actually Need", author: "Team Editorial", read: "5 min", date: "Jul 2026", img: "https://images.unsplash.com/photo-1597852074816-d933c7d2b122?auto=format&fit=crop&w=900&q=80" },
  { id: 8, category: "Field Notes", title: "Rain, Reflections and the Case for Bad Weather", author: "Ritika Malhotra", read: "6 min", date: "Jun 2026", img: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=900&q=80" },
];

const FIELD_CARDS = [
  { title: "What's in a Wildlife Bag", tag: "Kit list", text: "Lenses, straps and the one item that never leaves the bag.", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80" },
  { title: "Lighting a Portrait With One Panel", tag: "Tutorial", text: "Distance, angle and diffusion, shot in a single afternoon.", img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80" },
  { title: "Sound First: A Filmmaker's Mic Setup", tag: "Behind the scenes", text: "Why she records audio before she frames a single shot.", img: "https://images.unsplash.com/photo-1590935217281-2f5f0d0bda2c?auto=format&fit=crop&w=900&q=80" },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                             */
/* ------------------------------------------------------------------ */

function CoverImage({ src, alt, className }) {
  const [broken, setBroken] = useState(false);
  if (broken) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-[#1a1f26] to-[#0d1013] ${className}`}>
        <Camera className="w-10 h-10" style={{ color: `${GOLD}55` }} />
      </div>
    );
  }
  return <img src={src} alt={alt} loading="lazy" onError={() => setBroken(true)} className={className} />;
}

function Eyebrow({ children, light }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-[11px] md:text-xs tracking-[0.25em] uppercase font-['Inter']"
      style={{ color: light ? GOLD_LIGHT : "#A4A8AD" }}
    >
      <span className="w-6 h-px" style={{ backgroundColor: light ? GOLD_LIGHT : "#5c6066" }} />
      {children}
    </span>
  );
}

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ------------------------------------------------------------------ */
/*  REDESIGNED: Header + featured story                                */
/*  Viewfinder-style split hero                                        */
/* ------------------------------------------------------------------ */

function Corner({ className }) {
  return <span className={`absolute w-6 h-6 border-[#E8CC91] ${className}`} />;
}

function Header() {
  return (
    <section className="max-w-[90rem] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-8">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-5">
          <p className="font-['Inter'] text-sm text-[#A4A8AD]">The Journal · Issue 26</p>

          <h1 className="mt-6 font-['Playfair_Display'] text-[#F5F5F2] text-5xl sm:text-6xl xl:text-7xl font-medium leading-[1.05]">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Stories from behind the lens
            </motion.span>
          </h1>

          <p className="mt-6 max-w-md text-[#A4A8AD] font-['Inter'] font-light text-base md:text-lg leading-relaxed">
            Field notes, gear guides and creator spotlights — written by the people who actually carry the equipment.
          </p>

          <div className="mt-10 pt-8 border-t border-[rgba(255,255,255,0.12)] max-w-md">
            <span className="font-['Inter'] text-sm" style={{ color: GOLD_LIGHT }}>
              {FEATURED.category}
            </span>
            <h2 className="mt-2 font-['Playfair_Display'] text-[#F5F5F2] text-2xl md:text-3xl leading-snug">
              {FEATURED.title}
            </h2>
            <p className="mt-3 text-[#A4A8AD] font-['Inter'] font-light text-sm leading-relaxed">{FEATURED.excerpt}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-['Inter'] text-sm">
              <span className="text-[#F5F5F2]">By {FEATURED.author}</span>
              <span className="flex items-center gap-1.5 text-[#A4A8AD]">
                <Clock className="w-4 h-4" /> {FEATURED.read}
              </span>
            </div>
            <a
              href="#"
              className="group mt-7 inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium font-['Inter'] text-[#080A0D] transition-colors hover:bg-[#E8CC91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8CC91]"
              style={{ backgroundColor: GOLD }}
            >
              Read the story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right: viewfinder frame */}
        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 relative block aspect-[4/5] sm:aspect-[4/3] lg:aspect-[5/6] rounded-[2rem] overflow-hidden"
          aria-label={FEATURED.title}
        >
          <CoverImage src={FEATURED.img} alt={FEATURED.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D]/60 via-transparent to-[#080A0D]/20" />

          {/* viewfinder brackets */}
          <div className="absolute inset-6 md:inset-8 pointer-events-none">
            <Corner className="top-0 left-0 border-t-2 border-l-2" />
            <Corner className="top-0 right-0 border-t-2 border-r-2" />
            <Corner className="bottom-0 left-0 border-b-2 border-l-2" />
            <Corner className="bottom-0 right-0 border-b-2 border-r-2" />
          </div>

          {/* exposure readout */}
          <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 rounded-full bg-[#080A0D]/70 backdrop-blur px-5 py-2 font-['Inter'] text-xs text-[#F5F5F2]">
            <span>f/5.6</span>
            <span className="w-px h-3 bg-[rgba(255,255,255,0.3)]" />
            <span>1/500</span>
            <span className="w-px h-3 bg-[rgba(255,255,255,0.3)]" />
            <span>ISO 800</span>
          </div>
        </motion.a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ALL STORIES — UNCHANGED                                            */
/*  Story index — typographic rows + cursor-following preview          */
/* ------------------------------------------------------------------ */

function StoryIndex() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 26 });
  const sy = useSpring(my, { stiffness: 220, damping: 26 });

  const filtered = useMemo(
    () => (active === "All" ? STORIES : STORIES.filter((s) => s.category === active)),
    [active]
  );
  const hoveredStory = STORIES.find((s) => s.id === hovered);

  return (
    <section className="max-w-[90rem] mx-auto px-6 md:px-12 py-28 md:py-36">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={reveal}
        className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
      >
        <div>
          <Eyebrow>All Stories</Eyebrow>
          <h2 className="mt-5 font-['Playfair_Display'] text-[#F5F5F2] text-4xl md:text-5xl font-medium">
            The Archive
          </h2>
        </div>

        <div className="flex gap-7 overflow-x-auto">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="relative shrink-0 pb-3 font-['Inter'] text-sm whitespace-nowrap"
                style={{ color: isActive ? "#F5F5F2" : "#5c6066" }}
              >
                {cat}
                {isActive && (
                  <motion.span
                    layoutId="stories-tab"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full"
                    style={{ backgroundColor: GOLD }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </motion.div>

      <div
        className="border-t border-[rgba(255,255,255,0.12)]"
        onMouseMove={(e) => {
          mx.set(e.clientX + 28);
          my.set(e.clientY - 110);
        }}
        onMouseLeave={() => setHovered(null)}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((s, i) => (
            <motion.a
              key={s.id}
              href="#"
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHovered(s.id)}
              className="group flex items-center gap-5 md:gap-10 py-7 md:py-9 border-b border-[rgba(255,255,255,0.12)]"
            >
              <span className="hidden sm:block w-10 font-['Playfair_Display'] italic text-sm text-[#5c6066]">
                {String(s.id).padStart(2, "0")}
              </span>

              <div className="sm:hidden w-16 h-16 rounded-xl overflow-hidden shrink-0">
                <CoverImage src={s.img} alt={s.title} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 min-w-0">
                <span className="text-[10px] tracking-[0.2em] uppercase font-['Inter']" style={{ color: GOLD_LIGHT }}>
                  {s.category}
                </span>
                <h3 className="mt-1.5 font-['Playfair_Display'] text-[#F5F5F2] text-xl md:text-3xl leading-snug transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#E8CC91]">
                  {s.title}
                </h3>
              </div>

              <div className="hidden md:flex flex-col items-end gap-1 text-xs font-['Inter'] text-[#A4A8AD] w-40">
                <span>{s.author}</span>
                <span className="text-[#5c6066]">
                  {s.read} · {s.date}
                </span>
              </div>

              <span className="shrink-0 w-10 h-10 rounded-full border border-[rgba(255,255,255,0.18)] flex items-center justify-center text-[#A4A8AD] transition-all duration-300 group-hover:border-[#D8B56D] group-hover:text-[#D8B56D] group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>

      {/* floating cursor preview (desktop only) */}
      <motion.div
        style={{ x: sx, y: sy }}
        className="hidden lg:block pointer-events-none fixed top-0 left-0 z-50"
      >
        <AnimatePresence>
          {hoveredStory && (
            <motion.div
              key={hoveredStory.id}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="w-64 h-80 rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.15)] shadow-2xl"
            >
              <CoverImage src={hoveredStory.img} alt="" className="w-full h-full object-cover" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  REDESIGNED: Pull quote — portrait + quote, side by side            */
/* ------------------------------------------------------------------ */

function PullQuote() {
  return (
    <section className="max-w-[90rem] mx-auto px-6 md:px-12 pb-28 md:pb-36">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center rounded-[2rem] bg-[#11151A] p-6 md:p-10">
        <div className="md:col-span-4 aspect-[4/5] rounded-2xl overflow-hidden">
          <CoverImage
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=70"
            alt="Aman Bhargava filming"
            className="w-full h-full object-cover"
          />
        </div>
        <figure className="md:col-span-8 md:pr-6">
          <Quote className="w-8 h-8 mb-6" style={{ color: GOLD }} />
          <blockquote className="font-['Playfair_Display'] text-[#F5F5F2] text-2xl sm:text-3xl lg:text-4xl leading-snug max-w-2xl">
            The best camera is the one you trust enough to forget about, so you can finally look at what's in front of it.
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4 font-['Inter'] text-sm">
            <span className="w-10 h-10 rounded-full flex items-center justify-center font-medium text-[#080A0D]" style={{ backgroundColor: GOLD }}>
              AB
            </span>
            <span>
              <span className="block text-[#F5F5F2]">Aman Bhargava</span>
              <span className="block text-[#A4A8AD]">Wedding filmmaker</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  NEW: shared animation helpers                                      */
/* ------------------------------------------------------------------ */

function Reveal({ children, i = 0, className }) {
  return (
    <motion.div
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={reveal}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return <motion.div style={{ scaleX, backgroundColor: GOLD }} className="fixed top-0 inset-x-0 h-[3px] origin-left z-[60]" />;
}

/* ------------------------------------------------------------------ */
/*  NEW: Ticker                                                        */
/* ------------------------------------------------------------------ */

function Ticker() {
  const reduced = useReducedMotion();
  const words = ["Wildlife", "Weddings", "Street", "Travel", "Documentary", "Portraits", "Astro"];
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-[rgba(255,255,255,0.12)] py-6 mt-16" aria-hidden="true">
      <motion.div
        animate={reduced ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        className="flex w-max items-center"
      >
        {[0, 1].map((k) => (
          <div key={k} className="flex items-center shrink-0">
            {row.map((w, i) => (
              <span key={w + i} className="flex items-center">
                <span className="font-['Playfair_Display'] italic text-4xl md:text-6xl text-[#5c6066] hover:text-[#E8CC91] transition-colors px-8">
                  {w}
                </span>
                <Camera className="w-6 h-6" style={{ color: GOLD }} />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  NEW: Topics — expanding panels                                     */
/* ------------------------------------------------------------------ */

const TOPICS = [
  {
    name: "Wildlife",
    count: "14 stories",
    body: "Long lenses, cold mornings and a lot of waiting. Working photographers share how they plan a shoot around animal behaviour, what they carry into remote places, and how they decide when a frame is finally worth pressing the shutter for.",
    reads: ["Eleven Days Above the Cloud Line", "What to Pack for a Wildlife Trek", "Rain, Reflections and Bad Weather"],
    img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=60",
  },
  {
    name: "Weddings",
    count: "9 stories",
    body: "The biggest day of someone's life happens once. Filmmakers and photographers explain how they travel light, stay out of the way and still come home with the moments the family will replay for decades.",
    reads: ["The Filmmaker Who Travels With One Bag", "Second Shooters: A Working Guide", "Sound First on the Wedding Day"],
    img: "https://images.unsplash.com/photo-1547949003-9792a18a2645?auto=format&fit=crop&w=1200&q=60",
  },
  {
    name: "Street",
    count: "11 stories",
    body: "Markets, neon and crowded lanes. Learn how to work with available light, add a single panel when you need it, and photograph strangers with respect instead of a long lens.",
    reads: ["Night Markets of Jaipur", "Shooting Street With One Prime", "Reading a Crowd Before You Raise the Camera"],
    img: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1200&q=60",
  },
  {
    name: "Landscape",
    count: "12 stories",
    body: "Weather, timing and patience. These stories cover filters, tripods and location scouting, and make the case that flat grey days and heavy rain often give you the best light of the year.",
    reads: ["Shooting Golden Hour in the Thar", "How to Choose an ND Filter", "Scouting a Location From Your Sofa"],
    img: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=1200&q=60",
  },
  {
    name: "Film",
    count: "7 stories",
    body: "From your first reel to your first feature. Creators talk about real budgets, the gear they actually kept, and the mistakes in audio, storage and planning that cost them the most time.",
    reads: ["From Reels to Feature Film", "Memory Cards for 4K", "Wireless Mics, Explained"],
    img: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&w=1200&q=60",
  },
];

function Topics() {
  const [open, setOpen] = useState(0);
  return (
    <section className="max-w-[90rem] mx-auto px-6 md:px-12 pb-28 md:pb-36">
      <Reveal className="mb-12 max-w-2xl">
        <Eyebrow>Browse by Genre</Eyebrow>
        <h2 className="mt-5 font-['Playfair_Display'] text-[#F5F5F2] text-4xl md:text-5xl font-medium leading-tight">
          Pick your kind of light
        </h2>
      </Reveal>

      <Reveal className="flex flex-col md:flex-row gap-3 h-[48rem] md:h-[36rem]">
        {TOPICS.map((t, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={t.name}
              role="button"
              tabIndex={0}
              animate={{ flexGrow: isOpen ? 5 : 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 26 }}
              onMouseEnter={() => setOpen(i)}
              onFocus={() => setOpen(i)}
              onClick={() => setOpen(i)}
              aria-expanded={isOpen}
              className="relative flex-1 basis-0 min-h-0 min-w-0 overflow-hidden rounded-2xl border bg-[#11151A] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#E8CC91]"
              style={{ borderColor: isOpen ? "rgba(216,181,109,0.45)" : "rgba(255,255,255,0.12)", transition: "border-color .4s" }}
            >
              {/* faint background image */}
              <motion.div animate={{ opacity: isOpen ? 0.2 : 0.08, scale: isOpen ? 1 : 1.08 }} transition={{ duration: 0.6 }} className="absolute inset-0">
                <CoverImage src={t.img} alt="" className="w-full h-full object-cover grayscale" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#11151A] via-[#11151A]/70 to-[#11151A]/40" />

              <div className="relative h-full p-6 md:p-7 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="font-['Playfair_Display'] text-2xl md:text-3xl whitespace-nowrap transition-colors duration-300"
                    style={{ color: isOpen ? GOLD_LIGHT : "#F5F5F2" }}
                  >
                    {t.name}
                  </h3>
                  <motion.span
                    animate={{ rotate: isOpen ? 0 : -45, opacity: isOpen ? 1 : 0 }}
                    className="hidden md:flex shrink-0 w-10 h-10 rounded-full border border-[#D8B56D] items-center justify-center text-[#D8B56D]"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.span>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.18, duration: 0.45 } }}
                      exit={{ opacity: 0, transition: { duration: 0.1 } }}
                      className="mt-auto max-w-xl"
                    >
                      <p className="font-['Inter'] font-light text-sm md:text-base leading-relaxed text-[#F5F5F2]/85">{t.body}</p>
                      <p className="mt-6 font-['Inter'] text-xs text-[#A4A8AD]">Popular reads · {t.count}</p>
                      <ul className="mt-2 border-t border-[rgba(255,255,255,0.12)]">
                        {t.reads.map((r) => (
                          <li key={r} className="border-b border-[rgba(255,255,255,0.12)]">
                            <a href="#" className="group flex items-center justify-between gap-4 py-2.5 font-['Playfair_Display'] text-base md:text-lg text-[#F5F5F2] hover:text-[#E8CC91] transition-colors">
                              <span className="transition-transform duration-300 group-hover:translate-x-2">{r}</span>
                              <ArrowUpRight className="w-4 h-4 shrink-0 text-[#A4A8AD] group-hover:text-[#D8B56D]" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  NEW: Editors' picks — tabs + draggable carousel                    */
/* ------------------------------------------------------------------ */

const PICK_TABS = ["This week", "This month", "All time"];
const PICKS = [
  { tab: "This week", title: "The One-Bag Wedding Kit", author: "Sana Iqbal", read: "9 min", img: "https://images.unsplash.com/photo-1547949003-9792a18a2645?auto=format&fit=crop&w=800&q=70" },
  { tab: "This week", title: "Golden Hour in the Thar", author: "Aman Bhargava", read: "8 min", img: "https://images.unsplash.com/photo-1519638831568-d9897f54ed69?auto=format&fit=crop&w=800&q=70" },
  { tab: "This week", title: "ND Filters Without Guessing", author: "Team Editorial", read: "6 min", img: "https://images.unsplash.com/photo-1519183071298-a2962be96f83?auto=format&fit=crop&w=800&q=70" },
  { tab: "This week", title: "Why Sound Comes First", author: "Meera Nair", read: "7 min", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=70" },
  { tab: "This week", title: "Rain and Reflections", author: "Ritika Malhotra", read: "6 min", img: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=800&q=70" },
  { tab: "This month", title: "Above the Cloud Line", author: "Ritika Malhotra", read: "12 min", img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=70" },
  { tab: "This month", title: "Jaipur After Dark", author: "Kabir Rathore", read: "10 min", img: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=70" },
  { tab: "This month", title: "Reels to Feature Film", author: "Meera Nair", read: "11 min", img: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&w=800&q=70" },
  { tab: "This month", title: "4K Memory Cards, Decoded", author: "Team Editorial", read: "5 min", img: "https://images.unsplash.com/photo-1597852074816-d933c7d2b122?auto=format&fit=crop&w=800&q=70" },
  { tab: "All time", title: "Your First Wildlife Lens", author: "Team Editorial", read: "8 min", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=70" },
  { tab: "All time", title: "Shooting in Low Light", author: "Aman Bhargava", read: "9 min", img: "https://images.unsplash.com/photo-1519183071298-a2962be96f83?auto=format&fit=crop&w=800&q=70" },
  { tab: "All time", title: "Building a Portfolio That Sells", author: "Sana Iqbal", read: "10 min", img: "https://images.unsplash.com/photo-1547949003-9792a18a2645?auto=format&fit=crop&w=800&q=70" },
];

function Picks() {
  const [tab, setTab] = useState(PICK_TABS[0]);
  const [limit, setLimit] = useState(0);
  const wrap = useRef(null);
  const track = useRef(null);
  const items = useMemo(() => PICKS.filter((p) => p.tab === tab), [tab]);

  useEffect(() => {
    const measure = () => {
      if (wrap.current && track.current) setLimit(Math.max(0, track.current.scrollWidth - wrap.current.offsetWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items]);

  return (
    <section className="max-w-[90rem] mx-auto px-6 md:px-12 pb-28 md:pb-36">
      <Reveal className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <Eyebrow>Editors' Picks</Eyebrow>
          <h2 className="mt-5 font-['Playfair_Display'] text-[#F5F5F2] text-4xl md:text-5xl font-medium">
            Most read right now
          </h2>
        </div>
        <div className="flex gap-7">
          {PICK_TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="relative pb-3 font-['Inter'] text-sm whitespace-nowrap"
              style={{ color: tab === t ? "#F5F5F2" : "#5c6066" }}
            >
              {t}
              {tab === t && (
                <motion.span
                  layoutId="picks-tab"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full"
                  style={{ backgroundColor: GOLD }}
                />
              )}
            </button>
          ))}
        </div>
      </Reveal>

      <div ref={wrap} className="overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div
          key={tab}
          ref={track}
          drag="x"
          dragConstraints={{ left: -limit, right: 0 }}
          dragElastic={0.12}
          className="flex gap-6 w-max"
        >
          {items.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              draggable={false}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group block w-64 md:w-80 shrink-0"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.12)]">
                <CoverImage
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-['Playfair_Display'] text-[#F5F5F2] text-xl leading-snug transition-colors group-hover:text-[#E8CC91]">
                {p.title}
              </h3>
              <p className="mt-1 font-['Inter'] text-xs text-[#A4A8AD]">
                {p.author} · {p.read}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
      <p className="mt-6 font-['Inter'] text-xs text-[#5c6066]">Drag to explore</p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  NEW: Ask the pros — accordion + image swap                         */
/* ------------------------------------------------------------------ */

const QA = [
  { q: "Which lens should I buy first?", a: "Start with a fast 50mm. It's cheap, sharp and teaches you framing before you spend on zooms.", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=70" },
  { q: "Do I really need a tripod for video?", a: "For anything static, yes. A fluid head and a light carbon leg set beats stabilisation for interviews and time-lapse.", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=70" },
  { q: "How do I get clean audio on location?", a: "Get the mic close. A wireless lav or a shotgun on a boom, monitored on headphones, fixes most problems.", img: "https://images.unsplash.com/photo-1590935217281-2f5f0d0bda2c?auto=format&fit=crop&w=1000&q=70" },
  { q: "Is one light panel enough?", a: "For portraits, yes. Place it at 45 degrees, soften it with diffusion and use a reflector for fill.", img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=70" },
];

function AskPros() {
  const [open, setOpen] = useState(0);
  return (
    <section className="max-w-[90rem] mx-auto px-6 md:px-12 pb-28 md:pb-36">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">
        <Reveal>
          <Eyebrow>Ask the Pros</Eyebrow>
          <h2 className="mt-5 mb-10 font-['Playfair_Display'] text-[#F5F5F2] text-4xl md:text-5xl font-medium leading-tight">
            Questions every creator asks
          </h2>
          <div className="border-t border-[rgba(255,255,255,0.12)]">
            {QA.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-[rgba(255,255,255,0.12)]">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="group w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className="font-['Playfair_Display'] text-xl md:text-2xl transition-all duration-300 group-hover:translate-x-2"
                      style={{ color: isOpen ? GOLD_LIGHT : "#F5F5F2" }}
                    >
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="shrink-0 w-10 h-10 rounded-full border border-[rgba(255,255,255,0.18)] flex items-center justify-center text-[#A4A8AD] group-hover:border-[#D8B56D] group-hover:text-[#D8B56D]"
                    >
                      <Plus className="w-4 h-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 max-w-lg font-['Inter'] font-light text-[#A4A8AD] leading-relaxed">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal i={2} className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.12)] lg:sticky lg:top-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={open}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <CoverImage src={QA[Math.max(open, 0)].img} alt="" className="w-full h-full object-cover" />
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  NEW: Contribute CTA + footer                                       */
/* ------------------------------------------------------------------ */

function Contribute() {
  const words = ["Got", "a", "story", "from", "the", "field?"];
  return (
    <section className="max-w-[90rem] mx-auto px-6 md:px-12 pb-16">
      <div className="border-t border-[rgba(255,255,255,0.12)] pt-24 md:pt-32 pb-20">
        <h2 className="font-['Playfair_Display'] text-[#F5F5F2] text-5xl sm:text-6xl md:text-8xl font-medium leading-[1.05] max-w-5xl">
          {words.map((w, i) => (
            <span key={w + i} className="inline-block overflow-hidden mr-4 align-bottom">
              <motion.span
                initial={{ y: "105%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.75, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h2>
        <Reveal i={3} className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
          <motion.a
            href="#"
            whileHover={{ gap: "1.25rem" }}
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 font-['Inter'] text-sm font-medium text-[#080A0D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8CC91]"
            style={{ backgroundColor: GOLD }}
          >
            Pitch your story <ArrowRight className="w-4 h-4" />
          </motion.a>
          <p className="max-w-sm font-['Inter'] font-light text-[#A4A8AD]">
            We pay for every story we publish. Send a short pitch and we reply within a week.
          </p>
        </Reveal>
      </div>

      <footer className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-[rgba(255,255,255,0.12)] pt-8 font-['Inter'] text-sm text-[#5c6066]">
        <span>© 2026 The Journal</span>
        <nav className="flex gap-8">
          {["Stories", "Genres", "Pitch", "About"].map((l) => (
            <a key={l} href="#" className="text-[#A4A8AD] hover:text-[#E8CC91] transition-colors">
              {l}
            </a>
          ))}
        </nav>
      </footer>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function StoriesPage() {
  return (
    <div className="bg-[#080A0D] w-full min-h-screen overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap');
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      <ProgressBar />
      <Header />
      <Ticker />
      <StoryIndex />
      <Reveal>
        <PullQuote />
      </Reveal>
      <Topics />
      <Picks />
      <AskPros />
      <Contribute />
    </div>
  );
}