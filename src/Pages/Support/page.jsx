import React, { useState, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Search,
  Mail,
  MessageCircle,
  Phone,
  Plus,
  ArrowUpRight,
  ArrowRight,
  Check,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

/* ------------------------------------------------------------------ */
/*  Tokens + shared helpers (same as Stories page)                     */
/* ------------------------------------------------------------------ */

const GOLD = "#D8B56D";
const GOLD_LIGHT = "#E8CC91";
const LINE = "rgba(255,255,255,0.12)";

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

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

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] md:text-xs tracking-[0.25em] uppercase font-['Inter'] text-[#A4A8AD]">
      <span className="w-6 h-px bg-[#5c6066]" />
      {children}
    </span>
  );
}

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <motion.div
      style={{ scaleX, backgroundColor: GOLD }}
      className="fixed top-0 inset-x-0 h-[3px] origin-left z-[60]"
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const TABS = [
  "All",
  "Orders & Shipping",
  "Gear & Rentals",
  "Account",
  "Payments",
];

const FAQS = [
  {
    cat: "Orders & Shipping",
    q: "How long does delivery take?",
    a: "Most orders ship within 24 hours. Metro cities usually receive them in 2 to 4 working days and other locations in 4 to 7. You get a tracking link by email and SMS once the order is dispatched.",
  },
  {
    cat: "Orders & Shipping",
    q: "Can I change or cancel my order?",
    a: "Yes, until it is dispatched. Open your order from the account page and choose Cancel, or write to us with your order number and we will do it for you.",
  },
  {
    cat: "Orders & Shipping",
    q: "What if my package arrives damaged?",
    a: "Please photograph the box and the item within 48 hours of delivery and send them to us. We arrange a free pickup and send a replacement or refund.",
  },
  {
    cat: "Gear & Rentals",
    q: "How does gear rental work?",
    a: "Pick your dates, add the gear to your cart and complete the ID verification once. We deliver before your start date and collect after your end date.",
  },
  {
    cat: "Gear & Rentals",
    q: "What if I return rented gear late?",
    a: "Each extra day is charged at the daily rate. If you need more time, extend the rental from your account before the end date and there is no penalty.",
  },
  {
    cat: "Gear & Rentals",
    q: "Do I need to pay a security deposit?",
    a: "Some high-value items need a refundable deposit. It is shown at checkout and returned within 3 working days of the gear passing inspection.",
  },
  {
    cat: "Account",
    q: "I forgot my password. What now?",
    a: "Choose Forgot password on the sign-in page. The reset link arrives within a minute, so check your spam folder if you do not see it.",
  },
  {
    cat: "Account",
    q: "How do I update my email or phone number?",
    a: "Go to Account, then Profile. Changing your email needs a one-time code sent to the new address.",
  },
  {
    cat: "Payments",
    q: "Which payment methods do you accept?",
    a: "UPI, all major debit and credit cards, net banking and popular wallets. EMI is available on selected cards for orders above a minimum amount.",
  },
  {
    cat: "Payments",
    q: "When will my refund arrive?",
    a: "Refunds are started within 2 working days of the return being received. They reach your bank in 5 to 7 working days, depending on the bank.",
  },
];

const CHANNELS = [
  {
    icon: MessageCircle,
    title: "Live chat",
    text: "Fastest way to reach us.",
    meta: "Replies in about 5 minutes",
    cta: "Start a chat",
    href: "https://raj-kumawat-portfolio.vercel.app/",
  },
  {
    icon: Mail,
    title: "Email",
    text: "Best for detailed questions.",
    meta: "Replies within 4 hours",
    cta: "Rklogixtech@gmail.com",
    href: "mailto:Rklogixtech@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    text: "Talk to a real person.",
    meta: "Mon to Sat, 10am to 7pm",
    cta: "+91 87648-41243",
    href: "tel:+918764841243",
  }
];

const WHATSAPP = {
  icon: FaWhatsapp,
  title: "WhatsApp",
  text: "Prefer chatting on WhatsApp? Message us directly and get a reply within minutes.",
  meta: "Mon to Sat, 10am to 7pm",
  cta: "+91 87648-41243",
  href: "https://wa.me/918764841243",
};

const TOPICS = ["Order", "Rental", "Account", "Payment", "Something else"];

/* ------------------------------------------------------------------ */
/*  Top bar                                                            */
/* ------------------------------------------------------------------ */



/* ------------------------------------------------------------------ */
/*  Hero + live search                                                 */
/* ------------------------------------------------------------------ */

function Hero({ query, setQuery }) {
  const words = ["How", "can", "we", "help?"];
  return (
    <section className="max-w-[90rem] mx-auto px-6 md:px-12 pt-20 md:pt-28">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Eyebrow>Support</Eyebrow>
      </motion.div>

      <h1 className="mt-6 font-['Playfair_Display'] text-[#F5F5F2] text-5xl sm:text-6xl md:text-8xl font-medium leading-[1.03] max-w-5xl">
        {words.map((w, i) => (
          <span
            key={w + i}
            className="inline-block overflow-hidden mr-4 align-bottom"
          >
            <motion.span
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.1 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
              style={{ color: i === 3 ? GOLD : undefined }}
            >
              {w}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-10 max-w-2xl"
      >
        <label htmlFor="support-search" className="sr-only">
          Search help articles
        </label>
        <div className="flex items-center gap-4 rounded-full border border-[rgba(255,255,255,0.18)] bg-[#11151A] px-6 focus-within:border-[#D8B56D] transition-colors">
          <Search className="w-5 h-5 text-[#A4A8AD]" />
          <input
            id="support-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: delivery, refund, rental, password..."
            className="w-full bg-transparent py-5 text-base text-[#F5F5F2] placeholder-[#5c6066] outline-none font-['Inter']"
          />
        </div>
        <p className="mt-4 font-['Inter'] text-sm text-[#5c6066]">
          Most questions are answered below. If not, we are one message away.
        </p>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact channels                                                   */
/* ------------------------------------------------------------------ */

function Channels() {
  return (
    <section className="max-w-[90rem] mx-auto px-6 md:px-12 pt-20 md:pt-28">
      {/* 3 normal cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CHANNELS.map((c, i) => (
          <Reveal key={c.title} i={i}>
            <motion.a
              href={c.href}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group block h-full rounded-3xl border bg-[#11151A] p-8 transition-colors hover:border-[#D8B56D]"
              style={{ borderColor: LINE }}
            >
              <div className="flex items-start justify-between">
                <span
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(216,181,109,0.12)",
                    color: GOLD,
                  }}
                >
                  <c.icon className="w-5 h-5" />
                </span>
                <span className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.18)] flex items-center justify-center text-[#A4A8AD] transition-all duration-300 group-hover:border-[#D8B56D] group-hover:text-[#D8B56D] group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <h3 className="mt-8 font-['Playfair_Display'] text-[#F5F5F2] text-2xl">
                {c.title}
              </h3>
              <p className="mt-2 font-['Inter'] font-light text-[#A4A8AD]">
                {c.text}
              </p>
              <p
                className="mt-6 font-['Inter'] text-sm"
                style={{ color: GOLD_LIGHT }}
              >
                {c.cta}
              </p>
              <p className="mt-1 font-['Inter'] text-xs text-[#5c6066]">
                {c.meta}
              </p>
            </motion.a>
          </Reveal>
        ))}
      </div>

      {/* WhatsApp — alag full-width box, gold theme */}
      <Reveal i={3} className="mt-6">
        <motion.a
          href={WHATSAPP.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="group relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10 rounded-3xl border p-8 md:p-10 transition-colors overflow-hidden"
          style={{
            borderColor: "rgba(216,181,109,0.35)",
            background:
              "linear-gradient(135deg, rgba(216,181,109,0.08) 0%, #11151A 55%)",
          }}
        >
          {/* subtle gold glow top-right */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-40 blur-3xl"
            style={{ backgroundColor: "rgba(216,181,109,0.18)" }}
          />

          <span
            className="relative w-14 h-14 shrink-0 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "rgba(216,181,109,0.15)",
              color: GOLD,
            }}
          >
            <WHATSAPP.icon className="w-6 h-6" /> {/* eslint-disable-line */}
          </span>

          <div className="relative flex-1 min-w-0">
            <h3 className="font-['Playfair_Display'] text-[#F5F5F2] text-2xl md:text-3xl">
              {WHATSAPP.title}
            </h3>
            <p className="mt-2 font-['Inter'] font-light text-[#A4A8AD] max-w-2xl">
              {WHATSAPP.text}
            </p>
            <p className="mt-2 font-['Inter'] text-xs text-[#5c6066]">
              {WHATSAPP.meta}
            </p>
          </div>

          <div className="relative flex items-center gap-4 shrink-0">
            <span
              className="font-['Inter'] text-sm hidden sm:block"
              style={{ color: GOLD_LIGHT }}
            >
              {WHATSAPP.cta}
            </span>
            <span
              className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45"
              style={{ backgroundColor: GOLD, color: "#080A0D" }}
            >
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>
        </motion.a>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Help center: tabs + accordion                                      */
/* ------------------------------------------------------------------ */

function HelpCenter({ query, setQuery }) {
  const [tab, setTab] = useState("All");
  const [open, setOpen] = useState(null);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter(
      (f) =>
        (tab === "All" || f.cat === tab) &&
        (!q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)),
    );
  }, [tab, query]);

  return (
    <section className="max-w-[90rem] mx-auto px-6 md:px-12 py-28 md:py-36">
      <Reveal className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <Eyebrow>Help Center</Eyebrow>
          <h2 className="mt-5 font-['Playfair_Display'] text-[#F5F5F2] text-4xl md:text-5xl font-medium">
            Common questions
          </h2>
        </div>
        <div className="flex gap-7 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => {
                setTab(t);
                setOpen(null);
              }}
              className="relative shrink-0 pb-3 font-['Inter'] text-sm whitespace-nowrap"
              style={{ color: tab === t ? "#F5F5F2" : "#5c6066" }}
            >
              {t}
              {tab === t && (
                <motion.span
                  layoutId="support-tab"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full"
                  style={{ backgroundColor: GOLD }}
                />
              )}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="border-t" style={{ borderColor: LINE }}>
        <AnimatePresence mode="popLayout">
          {list.map((f, i) => {
            const isOpen = open === f.q;
            return (
              <motion.div
                key={f.q}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b"
                style={{ borderColor: LINE }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : f.q)}
                  aria-expanded={isOpen}
                  className="group w-full flex items-center gap-5 md:gap-10 py-7 md:py-8 text-left"
                >
                  <span className="hidden sm:block w-10 font-['Playfair_Display'] italic text-sm text-[#5c6066]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase font-['Inter']"
                      style={{ color: GOLD_LIGHT }}
                    >
                      {f.cat}
                    </span>
                    <h3
                      className="mt-1.5 font-['Playfair_Display'] text-xl md:text-3xl leading-snug transition-all duration-300 group-hover:translate-x-2"
                      style={{ color: isOpen ? GOLD_LIGHT : "#F5F5F2" }}
                    >
                      {f.q}
                    </h3>
                  </div>
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
                      <p className="pb-8 sm:pl-[3.75rem] md:pl-[5.5rem] pr-14 max-w-3xl font-['Inter'] font-light text-[#A4A8AD] leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {list.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <p className="font-['Playfair_Display'] text-2xl text-[#F5F5F2]">
              No answers found
            </p>
            <p className="mt-2 font-['Inter'] font-light text-[#A4A8AD]">
              Try different words, or send us a message below.
            </p>
            <button
              onClick={() => setQuery("")}
              className="mt-6 font-['Inter'] text-sm underline underline-offset-4"
              style={{ color: GOLD }}
            >
              Clear search
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact form                                                       */
/* ------------------------------------------------------------------ */

function ContactForm() {
  const [topic, setTopic] = useState("Order");
  const [f, setF] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);
  const valid =
    f.name.trim() && /\S+@\S+\.\S+/.test(f.email) && f.msg.trim().length > 9;

  const field =
    "w-full rounded-2xl border bg-transparent px-5 py-4 text-sm text-[#F5F5F2] placeholder-[#5c6066] outline-none font-['Inter'] focus:border-[#D8B56D] transition-colors";

  return (
    <section className="max-w-[90rem] mx-auto px-6 md:px-12 pb-28 md:pb-36">
      <div className="grid lg:grid-cols-12 gap-14 lg:gap-24">
        <Reveal className="lg:col-span-5">
          <Eyebrow>Still stuck?</Eyebrow>
          <h2 className="mt-5 font-['Playfair_Display'] text-[#F5F5F2] text-4xl md:text-6xl font-medium leading-[1.05]">
            Write to us
          </h2>
          <p className="mt-6 max-w-sm font-['Inter'] font-light text-[#A4A8AD] leading-relaxed">
            Tell us what happened and include your order number if you have one.
            A real person reads every message.
          </p>
          <ul className="mt-10 space-y-4 font-['Inter'] text-sm text-[#A4A8AD]">
            {[
              "Reply within 4 working hours",
              "No bots, no ticket numbers to memorise",
              "Follow-ups stay in one email thread",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <Check className="w-4 h-4" style={{ color: GOLD }} /> {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal i={2} className="lg:col-span-7">
          <div
            className="rounded-3xl border bg-[#11151A] p-6 md:p-10"
            style={{ borderColor: LINE }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center"
                  role="status"
                >
                  <span
                    className="mx-auto w-14 h-14 rounded-full flex items-center justify-center text-[#080A0D]"
                    style={{ backgroundColor: GOLD }}
                  >
                    <Check className="w-6 h-6" />
                  </span>
                  <h3 className="mt-6 font-['Playfair_Display'] text-3xl text-[#F5F5F2]">
                    Message received
                  </h3>
                  <p className="mt-3 font-['Inter'] font-light text-[#A4A8AD]">
                    We will reply to {f.email} within 4 working hours.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setF({ name: "", email: "", msg: "" });
                    }}
                    className="mt-8 font-['Inter'] text-sm underline underline-offset-4"
                    style={{ color: GOLD }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (valid) setSent(true);
                  }}
                  className="space-y-6"
                >
                  <fieldset>
                    <legend className="mb-3 font-['Inter'] text-sm text-[#A4A8AD]">
                      What is this about?
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {TOPICS.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setTopic(t)}
                          aria-pressed={topic === t}
                          className="relative rounded-full px-5 py-2 font-['Inter'] text-sm border transition-colors"
                          style={{
                            borderColor:
                              topic === t
                                ? "transparent"
                                : "rgba(255,255,255,0.18)",
                            color: topic === t ? "#080A0D" : "#A4A8AD",
                          }}
                        >
                          {topic === t && (
                            <motion.span
                              layoutId="topic-pill"
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 32,
                              }}
                              className="absolute inset-0 rounded-full"
                              style={{ backgroundColor: GOLD }}
                            />
                          )}
                          <span className="relative">{t}</span>
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      aria-label="Your name"
                      placeholder="Your name"
                      value={f.name}
                      onChange={(e) => setF({ ...f, name: e.target.value })}
                      className={field}
                      style={{ borderColor: "rgba(255,255,255,0.15)" }}
                    />
                    <input
                      aria-label="Email address"
                      type="email"
                      placeholder="you@example.com"
                      value={f.email}
                      onChange={(e) => setF({ ...f, email: e.target.value })}
                      className={field}
                      style={{ borderColor: "rgba(255,255,255,0.15)" }}
                    />
                  </div>
                  <textarea
                    aria-label="Your message"
                    rows={5}
                    placeholder="How can we help? (at least 10 characters)"
                    value={f.msg}
                    onChange={(e) => setF({ ...f, msg: e.target.value })}
                    className={`${field} resize-none`}
                    style={{ borderColor: "rgba(255,255,255,0.15)" }}
                  />

                  <button
                    type="submit"
                    disabled={!valid}
                    className="group inline-flex items-center gap-3 rounded-full px-8 py-4 font-['Inter'] text-sm font-medium text-[#080A0D] transition-all disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-[#E8CC91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8CC91]"
                    style={{ backgroundColor: GOLD }}
                  >
                    Send message
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function SupportPage() {
  const [query, setQuery] = useState("");
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
      <Hero query={query} setQuery={setQuery} />
      <Channels />
      <HelpCenter query={query} setQuery={setQuery} />
      <ContactForm />
    </div>
  );
}
