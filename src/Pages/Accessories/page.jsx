// import React, { useState } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useReducedMotion,
// } from "framer-motion";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Heart,
//   Star,
//   ShoppingBag,
//   Check,
//   ShieldCheck,
//   CreditCard,
//   Truck,
//   PackageCheck,
//   ChevronDown,
//   Camera,
//   Quote,
//   Aperture,
// } from "lucide-react";

// /* ------------------------------------------------------------------ */
// /*  Tokens                                                             */
// /* ------------------------------------------------------------------ */

// const GOLD = "#D8B56D";
// const GOLD_LIGHT = "#E8CC91";
// const BORDER = "rgba(255,255,255,0.12)";

// /* ------------------------------------------------------------------ */
// /*  Media paths — apni gallery ki photos/video yahan daalo            */
// /* ------------------------------------------------------------------ */

// const IMG = {
//   hero: "/Accessories/AccessoriesHero.jpg",
//   brandBg: "/images/brand/brand-background.jpg",
//   offerBg: "/Accessories/AccessoriesOffer.jpg",
// };

// const SPOTLIGHT_VIDEO = "/Accessories/videos/spotlight.mp4";

// /* ------------------------------------------------------------------ */
// /*  Data                                                               */
// /* ------------------------------------------------------------------ */

// const STATS = [
//   { value: "12+", label: "Years in Photography" },
//   { value: "48,000+", label: "Orders Shipped" },
//   { value: "600+", label: "Pro Creators Trust Us" },
//   { value: "4.8/5", label: "Average Rating" },
// ];

// const CATEGORIES = [
//   { name: "Camera Bags",      tag: "Carry",      img: "/Accessories/cameraBag.jpg" },
//   { name: "Lighting",         tag: "Illuminate", img: "/Accessories/Lighting.jpg" },
//   { name: "Tripods & Stands", tag: "Stabilize",  img: "/Accessories/Tripods&Stands.jpg" },
//   { name: "Lenses & Filters", tag: "Frame",      img: "/Accessories/lenses.jpg" },
//   { name: "Microphones",      tag: "Record",     img: "/Accessories/microphones.jpg" },
//   { name: "Memory Cards",     tag: "Store",      img: "/Accessories/memorycard.jpg" },
// ];

// const PRODUCTS = [
//   { id: "backpack",  name: "Camera Backpack 3L",                badge: "Bestseller", price: 4999,  originalPrice: 6999,  rating: 4.8, reviews: 214, img: "/Accessories/cameraBag.jpg" },
//   { id: "tripod",    name: "Professional Tripod (Carbon Fiber)", badge: "Hot",        price: 12999, originalPrice: 16999, rating: 4.9, reviews: 132, img: "/Accessories/tripods&stands.jpg" },
//   { id: "led-light", name: "LED Video Light Panel",             badge: "New",        price: 6499,  originalPrice: 8999,  rating: 4.7, reviews: 98,  img: "/Accessories/Lighting2.jpg" },
//   { id: "mic",       name: "Wireless Microphone (2.4GHz)",      badge: "Bestseller", price: 7999,  originalPrice: 9999,  rating: 4.6, reviews: 176, img: "/Accessories/microphones.jpg" },
// ];

// const BRANDS = ["Canon", "Sony", "Nikon", "Fujifilm", "DJI", "GoPro"];

// const BENEFITS = [
//   { icon: ShieldCheck,  title: "Genuine Products", desc: "100% Original & Branded" },
//   { icon: CreditCard,   title: "Secure Payments",  desc: "100% Safe & Encrypted" },
//   { icon: Truck,        title: "Fast Delivery",    desc: "Pan India Express Shipping" },
//   { icon: PackageCheck, title: "Easy Returns",     desc: "Hassle-Free Returns" },
// ];

// const TESTIMONIALS = [
//   { quote: "The carbon fiber tripod changed how I shoot outdoors — sturdy in wind, weighs nothing on long hikes.", name: "Ritika Malhotra", role: "Wildlife Photographer" },
//   { quote: "Build quality feels closer to what you'd expect from the camera brands themselves, not third-party gear.", name: "Aman Bhargava", role: "Wedding Filmmaker" },
//   { quote: "Ordered the lighting panel for a shoot on short notice — arrived in two days, colour output is excellent.", name: "Sana Iqbal", role: "Content Creator" },
// ];

// /* ------------------------------------------------------------------ */
// /*  Shared bits                                                        */
// /* ------------------------------------------------------------------ */

// function CoverImage({ src, alt, className }) {
//   const [broken, setBroken] = useState(false);
//   if (broken) {
//     return (
//       <div className={`flex items-center justify-center bg-gradient-to-br from-[#1a1f26] to-[#0d1013] ${className}`}>
//         <Camera className="w-10 h-10" style={{ color: `${GOLD}55` }} />
//       </div>
//     );
//   }
//   return (
//     <img
//       src={src}
//       alt={alt}
//       loading="lazy"
//       onError={() => setBroken(true)}
//       className={className}
//     />
//   );
// }

// function Eyebrow({ children, light }) {
//   return (
//     <span
//       className="inline-flex items-center gap-2 text-[11px] md:text-xs tracking-[0.25em] uppercase font-['Inter']"
//       style={{ color: light ? GOLD_LIGHT : "#A4A8AD" }}
//     >
//       <span className="w-6 h-px" style={{ backgroundColor: light ? GOLD_LIGHT : "#5c6066" }} />
//       {children}
//     </span>
//   );
// }

// const reveal = {
//   hidden: { opacity: 0, y: 36 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.75, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

// /* ------------------------------------------------------------------ */
// /*  Hero                                                               */
// /* ------------------------------------------------------------------ */

// function Hero() {
//   const prefersReduced = useReducedMotion();
//   const { scrollY } = useScroll();
//   const parallaxY = useTransform(scrollY, [0, 700], [0, prefersReduced ? 0 : 90]);
//   const [slide, setSlide] = useState(0);

//   const words = ["Gear", "Up", "for"];
//   const wordsGold = ["Better", "Shots"];

//   const wv = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, delay: 0.2 + i * 0.09, ease: [0.22, 1, 0.36, 1] },
//     }),
//   };

//   return (
//     <section className="relative w-full min-h-[100vh] overflow-hidden bg-[#080A0D] flex items-end">
//       <motion.div style={{ y: parallaxY }} className="absolute inset-0">
//         <CoverImage
//           src={IMG.hero}
//           alt="Professional mirrorless camera lit dramatically in a dark studio"
//           className="w-full h-[115%] object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#080A0D] via-[#080A0D]/75 to-[#080A0D]/20" />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-transparent to-[#080A0D]/40" />
//       </motion.div>

//       <div
//         className="pointer-events-none absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full blur-[160px] opacity-20"
//         style={{ background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)` }}
//       />

//       <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 pb-20 pt-40 md:pt-56">
//         <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//           <Eyebrow light>Camera Accessories</Eyebrow>
//         </motion.div>

//         <h1 className="mt-6 font-['Playfair_Display'] text-[#F5F5F2] text-[3.4rem] leading-[1.02] sm:text-7xl md:text-8xl lg:text-[7.5rem] font-medium max-w-5xl">
//           <span className="block overflow-hidden">
//             {words.map((w, i) => (
//               <motion.span key={w} custom={i} variants={wv} initial="hidden" animate="visible" className="inline-block mr-4">
//                 {w}
//               </motion.span>
//             ))}
//           </span>
//           <span className="block overflow-hidden" style={{ color: GOLD }}>
//             {wordsGold.map((w, i) => (
//               <motion.span key={w} custom={i + words.length} variants={wv} initial="hidden" animate="visible" className="inline-block mr-4">
//                 {w}
//               </motion.span>
//             ))}
//           </span>
//         </h1>

//         <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
//           <motion.p
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.7 }}
//             className="max-w-md text-[#A4A8AD] text-base md:text-lg font-['Inter'] font-light leading-relaxed"
//           >
//             Premium camera accessories for creators, photographers and storytellers.
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, x: 16 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.85 }}
//             className="hidden md:block font-['Playfair_Display'] italic text-[#F5F5F2]/70 text-base text-right leading-snug"
//           >
//             Better Gear. Bigger Stories.
//           </motion.p>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 1 }}
//           className="mt-10 flex items-center gap-10"
//         >
//           <motion.button
//             whileHover="hover"
//             initial="rest"
//             animate="rest"
//             className="relative overflow-hidden px-9 py-4 rounded-full font-['Inter'] text-sm font-medium tracking-wide text-[#080A0D]"
//             style={{ backgroundColor: GOLD }}
//           >
//             <motion.span
//               variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
//               transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//               className="absolute inset-0"
//               style={{ backgroundColor: GOLD_LIGHT }}
//             />
//             <span className="relative flex items-center gap-2">
//               Explore Collection
//               <motion.span variants={{ rest: { x: 0 }, hover: { x: 4 } }} transition={{ duration: 0.3 }}>
//                 <ArrowRight className="w-4 h-4" />
//               </motion.span>
//             </span>
//           </motion.button>

//           <div className="flex items-center gap-3">
//             {["01", "02", "03"].map((label, i) => (
//               <button
//                 key={label}
//                 onClick={() => setSlide(i)}
//                 className="relative font-['Inter'] text-xs tracking-wider pb-2"
//                 style={{ color: slide === i ? GOLD_LIGHT : "#5c6066" }}
//               >
//                 {label}
//                 {slide === i && (
//                   <motion.span
//                     layoutId="hero-slide-indicator"
//                     className="absolute left-0 -bottom-0 h-[1.5px] w-full"
//                     style={{ backgroundColor: GOLD }}
//                   />
//                 )}
//               </button>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 1.2 }}
//         className="hidden md:flex absolute bottom-10 right-12 flex-col items-center gap-2 text-[#A4A8AD] z-10"
//       >
//         <span className="text-[10px] tracking-[0.25em] uppercase font-['Inter']">Scroll</span>
//         <motion.div
//           animate={prefersReduced ? {} : { y: [0, 6, 0] }}
//           transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <ChevronDown className="w-4 h-4" style={{ color: GOLD }} />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Stats strip                                                        */
// /* ------------------------------------------------------------------ */

// function StatsStrip() {
//   return (
//     <section className="bg-[#080A0D] border-y border-[rgba(255,255,255,0.08)]">
//       <div className="max-w-[90rem] mx-auto px-6 md:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
//         {STATS.map((s, i) => (
//           <motion.div
//             key={s.label}
//             custom={i}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.6 }}
//             variants={reveal}
//             className="text-center md:text-left"
//           >
//             <div className="font-['Playfair_Display'] text-2xl md:text-3xl" style={{ color: GOLD_LIGHT }}>
//               {s.value}
//             </div>
//             <div className="mt-1 text-xs md:text-sm text-[#A4A8AD] font-['Inter'] font-light">
//               {s.label}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Shop by Category — masonry columns                                 */
// /* ------------------------------------------------------------------ */

// function CategoryCard({ cat, index }) {
//   const categoryHash = cat.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

//   return (
//     <motion.a
//       href={`#accessories-products-${categoryHash}`}
//       custom={index}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.15 }}
//       variants={reveal}
//       whileHover="hover"
//       className="group relative block w-full mb-6 rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#11151A] overflow-hidden break-inside-avoid"
//     >
//       {/* gold border on hover */}
//       <motion.div
//         variants={{ hover: { borderColor: GOLD } }}
//         className="absolute inset-0 rounded-2xl border border-transparent z-20 pointer-events-none"
//       />

//       {/* glow behind */}
//       <motion.div
//         variants={{ hover: { opacity: 0.25 } }}
//         initial={{ opacity: 0 }}
//         className="pointer-events-none absolute inset-0 blur-3xl z-0"
//         style={{ background: `radial-gradient(circle at 50% 40%, ${GOLD} 0%, transparent 70%)` }}
//       />

//       {/* IMAGE — full width, natural height, poori dikhegi */}
//       <motion.div
//         variants={{ hover: { scale: 1.03 } }}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         className="relative w-full bg-[#0d1014]"
//       >
//         <CoverImage
//           src={cat.img}
//           alt={cat.name}
//           className="w-full h-auto block object-contain"
//         />
//         <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080A0D] to-transparent pointer-events-none" />
//       </motion.div>

//       {/* text bar */}
//       <div className="relative z-10 px-6 py-5 flex items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.06)]">
//         <div>
//           <span className="text-[10px] tracking-[0.25em] uppercase font-['Inter']" style={{ color: GOLD_LIGHT }}>
//             {cat.tag}
//           </span>
//           <h3 className="mt-1 font-['Playfair_Display'] text-[#F5F5F2] text-lg md:text-xl">
//             {cat.name}
//           </h3>
//         </div>

//         <motion.span
//           variants={{ hover: { x: 4, borderColor: GOLD, color: GOLD_LIGHT } }}
//           transition={{ duration: 0.3 }}
//           className="shrink-0 w-9 h-9 rounded-full border border-[rgba(255,255,255,0.25)] flex items-center justify-center text-[#F5F5F2] bg-[#080A0D]/40"
//         >
//           <ArrowUpRight className="w-4 h-4" />
//         </motion.span>
//       </div>
//     </motion.a>
//   );
// }

// function CategorySection() {
//   return (
//     <section className="bg-[#080A0D] py-28 md:py-36">
//       <div className="max-w-[90rem] mx-auto px-6 md:px-12">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           variants={reveal}
//           className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
//         >
//           <div className="max-w-xl">
//             <Eyebrow>Shop by Category</Eyebrow>
//             <h2 className="mt-5 font-['Playfair_Display'] text-[#F5F5F2] text-4xl md:text-5xl font-medium">
//               Find What You Need
//             </h2>
//           </div>

//           <a
//             href="#accessories-products-all"
//             className="hidden md:inline-flex items-center gap-2 text-sm font-['Inter'] text-[#A4A8AD] hover:text-[#E8CC91] transition-colors"
//           >
//             View all categories
//             <ArrowRight className="w-4 h-4" />
//           </a>
//         </motion.div>

//         {/* Masonry columns */}
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
//           {CATEGORIES.map((cat, i) => (
//             <CategoryCard key={cat.name} cat={cat} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Spotlight — VIDEO instead of image                                 */
// /* ------------------------------------------------------------------ */

// function Spotlight() {
//   return (
//     <section className="bg-[#080A0D] py-28 md:py-36 px-6 md:px-12">
//       <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//         {/* VIDEO — same size/position as before */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.94 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
//           className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.12)] order-1 lg:order-2 bg-[#0d1014]"
//         >
//           {/* glow behind */}
//           <div
//             className="absolute inset-0 blur-3xl opacity-25 z-0"
//             style={{ background: `radial-gradient(circle at 50% 40%, ${GOLD} 0%, transparent 70%)` }}
//           />

//           <video
//             src={SPOTLIGHT_VIDEO}
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="metadata"
//             className="relative w-full h-full object-cover"
//           />
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           variants={reveal}
//           className="order-2 lg:order-1"
//         >
//           <Eyebrow>Spotlight</Eyebrow>
//           <h2 className="mt-5 font-['Playfair_Display'] text-[#F5F5F2] text-4xl md:text-5xl font-medium leading-tight">
//             Built for the Shot
//             <br />
//             You Won't Get Twice
//           </h2>
//           <p className="mt-6 max-w-md text-[#A4A8AD] font-['Inter'] font-light leading-relaxed">
//             Our Professional Carbon Fiber Tripod holds steady on cliff edges,
//             city rooftops and studio floors alike — engineered to disappear from
//             your mind so you can focus on the frame.
//           </p>

//           <div className="mt-8 flex items-center gap-8">
//             <div className="flex items-center gap-2">
//               <Aperture className="w-4 h-4" style={{ color: GOLD }} />
//               <span className="text-sm font-['Inter'] text-[#F5F5F2]">
//                 1.3 kg — carbon fiber
//               </span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Star className="w-4 h-4" style={{ color: GOLD, fill: GOLD }} />
//               <span className="text-sm font-['Inter'] text-[#F5F5F2]">
//                 4.9 rated by 132 creators
//               </span>
//             </div>
//           </div>

//           <div className="mt-9 flex items-center gap-6">
//             <span className="font-['Playfair_Display'] text-2xl text-[#F5F5F2]">
//               ₹12,999
//             </span>
//             <span className="text-sm text-[#A4A8AD] line-through font-['Inter']">
//               ₹16,999
//             </span>
//             <motion.button
//               whileHover={{ backgroundColor: GOLD_LIGHT }}
//               className="px-7 py-3 rounded-full font-['Inter'] text-sm font-medium text-[#080A0D]"
//               style={{ backgroundColor: GOLD }}
//             >
//               View Product
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Best Sellers                                                       */
// /* ------------------------------------------------------------------ */

// function ProductCard({ product, index }) {
//   const [wishlisted, setWishlisted] = useState(false);
//   const [added, setAdded] = useState(false);
//   const discount = Math.round(
//     ((product.originalPrice - product.price) / product.originalPrice) * 100,
//   );

//   const handleAddToCart = () => {
//     if (added) return;
//     setAdded(true);
//     setTimeout(() => setAdded(false), 1800);
//   };

//   return (
//     <motion.div
//       custom={index}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={reveal}
//       whileHover={{ y: -6 }}
//       transition={{ type: "spring", stiffness: 260, damping: 22 }}
//       className="group rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#11151A] overflow-hidden flex flex-col"
//     >
//       <div className="relative aspect-[4/3] overflow-hidden">
//         <span
//           className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-['Inter'] font-medium"
//           style={{
//             backgroundColor: "rgba(8,10,13,0.7)",
//             color: GOLD_LIGHT,
//             border: "1px solid rgba(216,181,109,0.4)",
//           }}
//         >
//           {product.badge}
//         </span>
//         <button
//           onClick={() => setWishlisted((v) => !v)}
//           aria-label="Toggle wishlist"
//           className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center"
//           style={{ backgroundColor: "rgba(8,10,13,0.7)" }}
//         >
//           <motion.span
//             animate={wishlisted ? { scale: [1, 1.35, 1] } : { scale: 1 }}
//             transition={{ duration: 0.35 }}
//           >
//             <Heart
//               className="w-4 h-4"
//               style={{
//                 color: wishlisted ? GOLD : "#A4A8AD",
//                 fill: wishlisted ? GOLD : "transparent",
//               }}
//             />
//           </motion.span>
//         </button>
//         <motion.div
//           className="w-full h-full"
//           whileHover={{ scale: 1.06 }}
//           transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <CoverImage
//             src={product.img}
//             alt={product.name}
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//       </div>

//       <div className="p-6 flex flex-col flex-1">
//         <div className="flex items-center gap-1.5 mb-2.5">
//           <Star className="w-3.5 h-3.5" style={{ color: GOLD, fill: GOLD }} />
//           <span className="text-xs font-['Inter'] text-[#F5F5F2]">
//             {product.rating}
//           </span>
//           <span className="text-xs font-['Inter'] text-[#A4A8AD]">
//             ({product.reviews})
//           </span>
//         </div>
//         <h3 className="font-['Inter'] text-[#F5F5F2] text-sm md:text-base font-medium leading-snug mb-3">
//           {product.name}
//         </h3>
//         <div className="flex items-baseline gap-2 mb-5">
//           <span className="font-['Playfair_Display'] text-lg text-[#F5F5F2]">
//             ₹{product.price.toLocaleString("en-IN")}
//           </span>
//           <span className="text-xs text-[#A4A8AD] line-through font-['Inter']">
//             ₹{product.originalPrice.toLocaleString("en-IN")}
//           </span>
//           <span className="text-xs font-['Inter']" style={{ color: GOLD_LIGHT }}>
//             {discount}% off
//           </span>
//         </div>
//         <motion.button
//           onClick={handleAddToCart}
//           whileHover={{ backgroundColor: GOLD_LIGHT }}
//           className="mt-auto w-full py-2.5 rounded-full font-['Inter'] text-sm font-medium flex items-center justify-center gap-2 text-[#080A0D]"
//           style={{ backgroundColor: added ? "#3EA36E" : GOLD }}
//         >
//           {added ? (
//             <motion.span
//               key="added"
//               initial={{ opacity: 0, y: 6 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="flex items-center gap-2 text-white"
//             >
//               <Check className="w-4 h-4" /> Added
//             </motion.span>
//           ) : (
//             <motion.span key="add" className="flex items-center gap-2">
//               <ShoppingBag className="w-4 h-4" /> Add to Cart
//             </motion.span>
//           )}
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// }

// function BestSellers() {
//   return (
//     <section className="bg-[#080A0D] py-28 md:py-36">
//       <div className="max-w-[90rem] mx-auto px-6 md:px-12">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           variants={reveal}
//           className="mb-16 max-w-xl"
//         >
//           <Eyebrow>Best Sellers</Eyebrow>
//           <h2 className="mt-5 font-['Playfair_Display'] text-[#F5F5F2] text-4xl md:text-5xl font-medium">
//             Popular Picks
//           </h2>
//         </motion.div>
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
//           {PRODUCTS.map((p, i) => (
//             <ProductCard key={p.id} product={p} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Testimonials                                                       */
// /* ------------------------------------------------------------------ */

// function Testimonials() {
//   return (
//     <section className="bg-[#0b0e12] py-28 md:py-36 border-y border-[rgba(255,255,255,0.08)]">
//       <div className="max-w-[90rem] mx-auto px-6 md:px-12">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           variants={reveal}
//           className="mb-16 max-w-xl"
//         >
//           <Eyebrow>From the Community</Eyebrow>
//           <h2 className="mt-5 font-['Playfair_Display'] text-[#F5F5F2] text-4xl md:text-5xl font-medium">
//             Trusted on Set
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {TESTIMONIALS.map((t, i) => (
//             <motion.div
//               key={t.name}
//               custom={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={reveal}
//               className="rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#11151A] p-8"
//             >
//               <Quote className="w-6 h-6 mb-5" style={{ color: GOLD }} />
//               <p className="font-['Playfair_Display'] text-[#F5F5F2] text-lg leading-relaxed italic">
//                 "{t.quote}"
//               </p>
//               <div className="mt-6 pt-6 border-t border-[rgba(255,255,255,0.1)]">
//                 <div className="font-['Inter'] text-sm text-[#F5F5F2] font-medium">
//                   {t.name}
//                 </div>
//                 <div className="font-['Inter'] text-xs text-[#A4A8AD]">
//                   {t.role}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Shop by Brand                                                      */
// /* ------------------------------------------------------------------ */

// function BrandSection() {
//   return (
//     <section className="relative bg-[#080A0D] py-28 md:py-32 overflow-hidden">
//       <div className="absolute inset-0">
//         <CoverImage
//           src={IMG.brandBg}
//           alt=""
//           className="w-full h-full object-cover opacity-[0.12]"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-[#080A0D] via-[#080A0D]/90 to-[#080A0D]" />
//       </div>

//       <div className="relative max-w-6xl mx-auto px-6 md:px-12 text-center">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           variants={reveal}
//         >
//           <h2 className="font-['Playfair_Display'] text-[#F5F5F2] text-4xl md:text-5xl font-medium">
//             Shop by Brand
//           </h2>
//           <p className="mt-5 text-[#A4A8AD] font-['Inter'] font-light max-w-md mx-auto">
//             Choose your favorite brand and find compatible accessories.
//           </p>
//         </motion.div>

//         <div className="mt-16 flex flex-wrap justify-center gap-x-14 gap-y-9 md:gap-x-20">
//           {BRANDS.map((brand, i) => (
//             <motion.span
//               key={brand}
//               custom={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.4 }}
//               variants={reveal}
//               whileHover={{ scale: 1.06, color: GOLD_LIGHT }}
//               className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#F5F5F2]/80 cursor-pointer transition-colors"
//             >
//               {brand}
//             </motion.span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Special Offer Banner                                               */
// /* ------------------------------------------------------------------ */

// function OfferBanner() {
//   return (
//     <section className="bg-[#080A0D] py-28 md:py-32 px-6 md:px-12">
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         variants={reveal}
//         className="relative max-w-[90rem] mx-auto rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.12)] min-h-[26rem] flex items-center"
//       >
//         <div className="absolute inset-0">
//           <CoverImage
//             src={IMG.offerBg}
//             alt="Photographer shooting outdoors with camera gear"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#080A0D] via-[#080A0D]/70 to-transparent" />
//         </div>

//         <div className="relative px-8 py-16 md:px-16 md:py-24 max-w-lg">
//           <motion.div variants={reveal} custom={1}>
//             <Eyebrow light>Special Offer</Eyebrow>
//           </motion.div>
//           <motion.h2
//             variants={reveal}
//             custom={2}
//             className="mt-5 font-['Playfair_Display'] text-5xl md:text-6xl font-medium"
//             style={{ color: GOLD_LIGHT }}
//           >
//             Up to 40% Off
//           </motion.h2>
//           <motion.p
//             variants={reveal}
//             custom={3}
//             className="mt-5 text-[#A4A8AD] font-['Inter'] font-light text-lg"
//           >
//             On Selected Camera Accessories
//           </motion.p>
//           <motion.button
//             variants={reveal}
//             custom={4}
//             whileHover={{ backgroundColor: GOLD_LIGHT }}
//             className="mt-9 px-9 py-4 rounded-full font-['Inter'] text-sm font-medium text-[#080A0D]"
//             style={{ backgroundColor: GOLD }}
//           >
//             Shop Now
//           </motion.button>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Why Shop With Us                                                   */
// /* ------------------------------------------------------------------ */

// function WhyShopSection() {
//   return (
//     <section className="bg-[#080A0D] py-28 md:py-36">
//       <div className="max-w-[90rem] mx-auto px-6 md:px-12">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           variants={reveal}
//           className="mb-16 text-center"
//         >
//           <h2 className="font-['Playfair_Display'] text-[#F5F5F2] text-4xl md:text-5xl font-medium">
//             Why Shop With Us?
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           {BENEFITS.map((b, i) => {
//             const Icon = b.icon;
//             return (
//               <motion.div
//                 key={b.title}
//                 custom={i}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.4 }}
//                 variants={reveal}
//                 whileHover={{ y: -4, borderColor: GOLD }}
//                 className="rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#11151A] p-8 text-center flex flex-col items-center"
//               >
//                 <motion.div whileHover={{ scale: 1.12 }} transition={{ duration: 0.3 }}>
//                   <Icon className="w-8 h-8 mb-5" style={{ color: GOLD }} />
//                 </motion.div>
//                 <h3 className="font-['Inter'] text-[#F5F5F2] text-sm font-medium mb-1.5">
//                   {b.title}
//                 </h3>
//                 <p className="text-xs text-[#A4A8AD] font-['Inter'] font-light">
//                   {b.desc}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Page                                                               */
// /* ------------------------------------------------------------------ */

// export default function CameraAccessoriesPage() {
//   return (
//     <div className="bg-[#080A0D] w-full overflow-x-hidden">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
//         @media (prefers-reduced-motion: reduce) {
//           *, *::before, *::after {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//             scroll-behavior: auto !important;
//           }
//         }
//       `}</style>
//       <Hero />
//       <StatsStrip />
//       <CategorySection />
//       <Spotlight />
//       <BestSellers />
//       <Testimonials />
//       <BrandSection />
//       <OfferBanner />
//       <WhyShopSection />
//     </div>
//   );
// }

import React, { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Star,
  ShoppingBag,
  Check,
  ShieldCheck,
  CreditCard,
  Truck,
  PackageCheck,
  ChevronDown,
  Camera,
  Quote,
  Aperture,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Tokens                                                             */
/* ------------------------------------------------------------------ */

const GOLD = "#D8B56D";
const GOLD_LIGHT = "#E8CC91";

/* ------------------------------------------------------------------ */
/*  Media paths                                                        */
/* ------------------------------------------------------------------ */

const IMG = {
  hero: "/Accessories/AccessoriesHero.jpg",
  brandBg: "/images/brand/brand-background.jpg",
  offerBg: "/Accessories/AccessoriesOffer.jpg",
};

const SPOTLIGHT_VIDEO = "/Accessories/videos/spotlight.mp4";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const STATS = [
  { value: "12+", label: "Years in Photography" },
  { value: "48,000+", label: "Orders Shipped" },
  { value: "600+", label: "Pro Creators Trust Us" },
  { value: "4.8/5", label: "Average Rating" },
];

const CATEGORIES = [
  { name: "Camera Bags",      tag: "Carry",      img: "/Accessories/cameraBag.jpg" },
  { name: "Lighting",         tag: "Illuminate", img: "/Accessories/Lighting.jpg" },
  { name: "Tripods & Stands", tag: "Stabilize",  img: "/Accessories/Tripods&Stands.jpg" },
  { name: "Lenses & Filters", tag: "Frame",      img: "/Accessories/lenses.jpg" },
  { name: "Microphones",      tag: "Record",     img: "/Accessories/microphones.jpg" },
  { name: "Memory Cards",     tag: "Store",      img: "/Accessories/memorycard.jpg" },
];

const PRODUCTS = [
  { id: "backpack",  name: "Camera Backpack 3L",                badge: "Bestseller", price: 4999,  originalPrice: 6999,  rating: 4.8, reviews: 214, img: "/Accessories/cameraBag.jpg" },
  { id: "tripod",    name: "Professional Tripod (Carbon Fiber)", badge: "Hot",        price: 12999, originalPrice: 16999, rating: 4.9, reviews: 132, img: "/Accessories/tripods&stands.jpg" },
  { id: "led-light", name: "LED Video Light Panel",             badge: "New",        price: 6499,  originalPrice: 8999,  rating: 4.7, reviews: 98,  img: "/Accessories/Lighting2.jpg" },
  { id: "mic",       name: "Wireless Microphone (2.4GHz)",      badge: "Bestseller", price: 7999,  originalPrice: 9999,  rating: 4.6, reviews: 176, img: "/Accessories/microphones.jpg" },
];

const BRANDS = ["Canon", "Sony", "Nikon", "Fujifilm", "DJI", "GoPro"];

const BENEFITS = [
  { icon: ShieldCheck,  title: "Genuine Products", desc: "100% Original & Branded" },
  { icon: CreditCard,   title: "Secure Payments",  desc: "100% Safe & Encrypted" },
  { icon: Truck,        title: "Fast Delivery",    desc: "Pan India Express Shipping" },
  { icon: PackageCheck, title: "Easy Returns",     desc: "Hassle-Free Returns" },
];

const TESTIMONIALS = [
  { quote: "The carbon fiber tripod changed how I shoot outdoors — sturdy in wind, weighs nothing on long hikes.", name: "Ritika Malhotra", role: "Wildlife Photographer" },
  { quote: "Build quality feels closer to what you'd expect from the camera brands themselves, not third-party gear.", name: "Aman Bhargava", role: "Wedding Filmmaker" },
  { quote: "Ordered the lighting panel for a shoot on short notice — arrived in two days, colour output is excellent.", name: "Sana Iqbal", role: "Content Creator" },
];

/* ------------------------------------------------------------------ */
/*  Shared bits                                                        */
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
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setBroken(true)}
      className={className}
    />
  );
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
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* Mobile: swipeable row. Desktop (given breakpoint): normal layout */
function SwipeHint({ className = "" }) {
  return (
    <div className={`mt-4 flex items-center justify-center gap-2 text-[#A4A8AD] text-[11px] tracking-[0.2em] uppercase font-['Inter'] ${className}`}>
      Swipe
      <ArrowRight className="w-3.5 h-3.5" style={{ color: GOLD }} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function Hero() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 700], [0, prefersReduced ? 0 : 90]);
  const [slide, setSlide] = useState(0);

  const words = ["Gear", "Up", "for"];
  const wordsGold = ["Better", "Shots"];

  const wv = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.2 + i * 0.09, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section className="relative w-full min-h-[92svh] md:min-h-[100vh] overflow-hidden bg-[#080A0D] flex items-end">
      <motion.div style={{ y: parallaxY }} className="absolute inset-0">
        <CoverImage
          src={IMG.hero}
          alt="Professional mirrorless camera lit dramatically in a dark studio"
          className="w-full h-[115%] object-cover object-[65%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080A0D] via-[#080A0D]/75 to-[#080A0D]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-transparent to-[#080A0D]/40" />
        {/* mobile only: darker bottom so text is readable */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-t from-[#080A0D] via-[#080A0D]/60 to-transparent" />
      </motion.div>

      <div
        className="pointer-events-none absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full blur-[160px] opacity-20"
        style={{ background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)` }}
      />

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-5 md:px-12 pb-14 md:pb-20 pt-32 md:pt-56">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Eyebrow light>Camera Accessories</Eyebrow>
        </motion.div>

        <h1 className="mt-5 md:mt-6 font-['Playfair_Display'] text-[#F5F5F2] text-[2.9rem] leading-[1.05] sm:text-7xl md:text-8xl lg:text-[7.5rem] font-medium max-w-5xl">
          <span className="block overflow-hidden">
            {words.map((w, i) => (
              <motion.span key={w} custom={i} variants={wv} initial="hidden" animate="visible" className="inline-block mr-3 md:mr-4">
                {w}
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden" style={{ color: GOLD }}>
            {wordsGold.map((w, i) => (
              <motion.span key={w} custom={i + words.length} variants={wv} initial="hidden" animate="visible" className="inline-block mr-3 md:mr-4">
                {w}
              </motion.span>
            ))}
          </span>
        </h1>

        <div className="mt-6 md:mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-md text-[#A4A8AD] text-[15px] md:text-lg font-['Inter'] font-light leading-relaxed"
          >
            Premium camera accessories for creators, photographers and storytellers.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="hidden md:block font-['Playfair_Display'] italic text-[#F5F5F2]/70 text-base text-right leading-snug"
          >
            Better Gear. Bigger Stories.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 md:mt-10 flex flex-col items-stretch gap-6 sm:flex-row sm:items-center sm:gap-10"
        >
          <motion.button
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="relative overflow-hidden px-9 py-4 rounded-full font-['Inter'] text-sm font-medium tracking-wide text-[#080A0D]"
            style={{ backgroundColor: GOLD }}
          >
            <motion.span
              variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
              style={{ backgroundColor: GOLD_LIGHT }}
            />
            <span className="relative flex items-center justify-center gap-2">
              Explore Collection
              <motion.span variants={{ rest: { x: 0 }, hover: { x: 4 } }} transition={{ duration: 0.3 }}>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </span>
          </motion.button>

          <div className="flex items-center justify-center gap-3">
            {["01", "02", "03"].map((label, i) => (
              <button
                key={label}
                onClick={() => setSlide(i)}
                className="relative font-['Inter'] text-xs tracking-wider pb-2 px-1"
                style={{ color: slide === i ? GOLD_LIGHT : "#5c6066" }}
              >
                {label}
                {slide === i && (
                  <motion.span
                    layoutId="hero-slide-indicator"
                    className="absolute left-0 -bottom-0 h-[1.5px] w-full"
                    style={{ backgroundColor: GOLD }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="hidden md:flex absolute bottom-10 right-12 flex-col items-center gap-2 text-[#A4A8AD] z-10"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-['Inter']">Scroll</span>
        <motion.div
          animate={prefersReduced ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" style={{ color: GOLD }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Stats strip                                                        */
/* ------------------------------------------------------------------ */

function StatsStrip() {
  return (
    <section className="bg-[#080A0D] border-y border-[rgba(255,255,255,0.08)]">
      <div className="max-w-[90rem] mx-auto px-5 md:px-12 py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-y-7 gap-x-4 md:gap-8">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={reveal}
            className="text-center md:text-left"
          >
            <div className="font-['Playfair_Display'] text-2xl md:text-3xl" style={{ color: GOLD_LIGHT }}>
              {s.value}
            </div>
            <div className="mt-1 text-[11px] md:text-sm text-[#A4A8AD] font-['Inter'] font-light">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Shop by Category                                                   */
/*  Mobile: swipe carousel with uniform cards                          */
/*  sm and up: original masonry columns                                */
/* ------------------------------------------------------------------ */

function CategoryCard({ cat, index }) {
  const categoryHash = cat.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <motion.a
      href={`#accessories-products-${categoryHash}`}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={reveal}
      whileHover="hover"
      className="group relative block w-[76%] shrink-0 snap-center sm:w-full sm:shrink sm:snap-align-none sm:mb-6 rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#11151A] overflow-hidden sm:break-inside-avoid"
    >
      <motion.div
        variants={{ hover: { borderColor: GOLD } }}
        className="absolute inset-0 rounded-2xl border border-transparent z-20 pointer-events-none"
      />

      <motion.div
        variants={{ hover: { opacity: 0.25 } }}
        initial={{ opacity: 0 }}
        className="pointer-events-none absolute inset-0 blur-3xl z-0"
        style={{ background: `radial-gradient(circle at 50% 40%, ${GOLD} 0%, transparent 70%)` }}
      />

      <motion.div
        variants={{ hover: { scale: 1.03 } }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full bg-[#0d1014]"
      >
        <CoverImage
          src={cat.img}
          alt={cat.name}
          className="w-full block aspect-[4/5] object-cover sm:aspect-auto sm:h-auto sm:object-contain"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080A0D] to-transparent pointer-events-none" />
      </motion.div>

      <div className="relative z-10 px-4 py-4 md:px-6 md:py-5 flex items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.06)]">
        <div>
          <span className="text-[10px] tracking-[0.25em] uppercase font-['Inter']" style={{ color: GOLD_LIGHT }}>
            {cat.tag}
          </span>
          <h3 className="mt-1 font-['Playfair_Display'] text-[#F5F5F2] text-base md:text-xl">
            {cat.name}
          </h3>
        </div>

        <motion.span
          variants={{ hover: { x: 4, borderColor: GOLD, color: GOLD_LIGHT } }}
          transition={{ duration: 0.3 }}
          className="shrink-0 w-9 h-9 rounded-full border border-[rgba(255,255,255,0.25)] flex items-center justify-center text-[#F5F5F2] bg-[#080A0D]/40"
        >
          <ArrowUpRight className="w-4 h-4" />
        </motion.span>
      </div>
    </motion.a>
  );
}

function CategorySection() {
  return (
    <section className="bg-[#080A0D] py-16 md:py-36">
      <div className="max-w-[90rem] mx-auto px-5 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
          className="mb-8 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="max-w-xl">
            <Eyebrow>Shop by Category</Eyebrow>
            <h2 className="mt-4 md:mt-5 font-['Playfair_Display'] text-[#F5F5F2] text-3xl md:text-5xl font-medium">
              Find What You Need
            </h2>
          </div>

          <a
            href="#accessories-products-all"
            className="hidden md:inline-flex items-center gap-2 text-sm font-['Inter'] text-[#A4A8AD] hover:text-[#E8CC91] transition-colors"
          >
            View all categories
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 pb-2 sm:mx-0 sm:px-0 sm:pb-0 sm:block sm:overflow-visible sm:columns-2 lg:columns-3 sm:gap-6">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.name} cat={cat} index={i} />
          ))}
        </div>
        <SwipeHint className="sm:hidden" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Spotlight                                                          */
/* ------------------------------------------------------------------ */

function Spotlight() {
  return (
    <section className="bg-[#080A0D] py-16 md:py-36 px-5 md:px-12">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/4.4] sm:aspect-[4/5] max-h-[75svh] lg:max-h-none w-full rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.12)] order-1 lg:order-2 bg-[#0d1014]"
        >
          <div
            className="absolute inset-0 blur-3xl opacity-25 z-0"
            style={{ background: `radial-gradient(circle at 50% 40%, ${GOLD} 0%, transparent 70%)` }}
          />

          <video
            src={SPOTLIGHT_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="relative w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
          className="order-2 lg:order-1"
        >
          <Eyebrow>Spotlight</Eyebrow>
          <h2 className="mt-4 md:mt-5 font-['Playfair_Display'] text-[#F5F5F2] text-3xl md:text-5xl font-medium leading-tight">
            Built for the Shot
            <br />
            You Won't Get Twice
          </h2>
          <p className="mt-5 md:mt-6 max-w-md text-[#A4A8AD] text-[15px] md:text-base font-['Inter'] font-light leading-relaxed">
            Our Professional Carbon Fiber Tripod holds steady on cliff edges,
            city rooftops and studio floors alike — engineered to disappear from
            your mind so you can focus on the frame.
          </p>

          <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <Aperture className="w-4 h-4" style={{ color: GOLD }} />
              <span className="text-sm font-['Inter'] text-[#F5F5F2]">
                1.3 kg — carbon fiber
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" style={{ color: GOLD, fill: GOLD }} />
              <span className="text-sm font-['Inter'] text-[#F5F5F2]">
                4.9 rated by 132 creators
              </span>
            </div>
          </div>

          <div className="mt-7 md:mt-9 flex flex-wrap items-center gap-x-5 gap-y-4 md:gap-6">
            <span className="font-['Playfair_Display'] text-2xl text-[#F5F5F2]">
              ₹12,999
            </span>
            <span className="text-sm text-[#A4A8AD] line-through font-['Inter']">
              ₹16,999
            </span>
            <motion.button
              whileHover={{ backgroundColor: GOLD_LIGHT }}
              className="w-full sm:w-auto px-7 py-3 rounded-full font-['Inter'] text-sm font-medium text-[#080A0D]"
              style={{ backgroundColor: GOLD }}
            >
              View Product
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Best Sellers                                                       */
/*  Mobile: swipe carousel. md: 2 cols, lg: 4 cols (original)          */
/* ------------------------------------------------------------------ */

function ProductCard({ product, index }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );

  const handleAddToCart = () => {
    if (added) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={reveal}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group w-[68%] shrink-0 snap-center md:w-auto md:shrink md:snap-align-none rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#11151A] overflow-hidden flex flex-col"
    >
      <div className="relative aspect-square md:aspect-[4/3] overflow-hidden">
        <span
          className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-['Inter'] font-medium"
          style={{
            backgroundColor: "rgba(8,10,13,0.7)",
            color: GOLD_LIGHT,
            border: "1px solid rgba(216,181,109,0.4)",
          }}
        >
          {product.badge}
        </span>
        <button
          onClick={() => setWishlisted((v) => !v)}
          aria-label="Toggle wishlist"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "rgba(8,10,13,0.7)" }}
        >
          <motion.span
            animate={wishlisted ? { scale: [1, 1.35, 1] } : { scale: 1 }}
            transition={{ duration: 0.35 }}
          >
            <Heart
              className="w-4 h-4"
              style={{
                color: wishlisted ? GOLD : "#A4A8AD",
                fill: wishlisted ? GOLD : "transparent",
              }}
            />
          </motion.span>
        </button>
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <CoverImage
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="p-4 md:p-6 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 mb-2">
          <Star className="w-3.5 h-3.5" style={{ color: GOLD, fill: GOLD }} />
          <span className="text-xs font-['Inter'] text-[#F5F5F2]">
            {product.rating}
          </span>
          <span className="text-xs font-['Inter'] text-[#A4A8AD]">
            ({product.reviews})
          </span>
        </div>
        <h3 className="font-['Inter'] text-[#F5F5F2] text-sm md:text-base font-medium leading-snug mb-3">
          {product.name}
        </h3>
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-4 md:mb-5">
          <span className="font-['Playfair_Display'] text-lg text-[#F5F5F2]">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <span className="text-xs text-[#A4A8AD] line-through font-['Inter']">
            ₹{product.originalPrice.toLocaleString("en-IN")}
          </span>
          <span className="text-xs font-['Inter']" style={{ color: GOLD_LIGHT }}>
            {discount}% off
          </span>
        </div>
        <motion.button
          onClick={handleAddToCart}
          whileHover={{ backgroundColor: GOLD_LIGHT }}
          className="mt-auto w-full py-2.5 rounded-full font-['Inter'] text-sm font-medium flex items-center justify-center gap-2 text-[#080A0D]"
          style={{ backgroundColor: added ? "#3EA36E" : GOLD }}
        >
          {added ? (
            <motion.span
              key="added"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-white"
            >
              <Check className="w-4 h-4" /> Added
            </motion.span>
          ) : (
            <motion.span key="add" className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" /> Add to Cart
            </motion.span>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}

function BestSellers() {
  return (
    <section className="bg-[#080A0D] py-16 md:py-36">
      <div className="max-w-[90rem] mx-auto px-5 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
          className="mb-8 md:mb-16 max-w-xl"
        >
          <Eyebrow>Best Sellers</Eyebrow>
          <h2 className="mt-4 md:mt-5 font-['Playfair_Display'] text-[#F5F5F2] text-3xl md:text-5xl font-medium">
            Popular Picks
          </h2>
        </motion.div>
        <div className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 pb-2 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        <SwipeHint className="md:hidden" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/* ------------------------------------------------------------------ */

function Testimonials() {
  return (
    <section className="bg-[#0b0e12] py-16 md:py-36 border-y border-[rgba(255,255,255,0.08)]">
      <div className="max-w-[90rem] mx-auto px-5 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
          className="mb-8 md:mb-16 max-w-xl"
        >
          <Eyebrow>From the Community</Eyebrow>
          <h2 className="mt-4 md:mt-5 font-['Playfair_Display'] text-[#F5F5F2] text-3xl md:text-5xl font-medium">
            Trusted on Set
          </h2>
        </motion.div>

        <div className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 pb-2 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={reveal}
              className="w-[84%] shrink-0 snap-center md:w-auto md:shrink rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#11151A] p-6 md:p-8"
            >
              <Quote className="w-6 h-6 mb-4 md:mb-5" style={{ color: GOLD }} />
              <p className="font-['Playfair_Display'] text-[#F5F5F2] text-base md:text-lg leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="mt-5 pt-5 md:mt-6 md:pt-6 border-t border-[rgba(255,255,255,0.1)]">
                <div className="font-['Inter'] text-sm text-[#F5F5F2] font-medium">
                  {t.name}
                </div>
                <div className="font-['Inter'] text-xs text-[#A4A8AD]">
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <SwipeHint className="md:hidden" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Shop by Brand                                                      */
/*  Mobile: 2-col grid of tiles. sm and up: original centered row      */
/* ------------------------------------------------------------------ */

function BrandSection() {
  return (
    <section className="relative bg-[#080A0D] py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <CoverImage
          src={IMG.brandBg}
          alt=""
          className="w-full h-full object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080A0D] via-[#080A0D]/90 to-[#080A0D]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-12 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
        >
          <h2 className="font-['Playfair_Display'] text-[#F5F5F2] text-3xl md:text-5xl font-medium">
            Shop by Brand
          </h2>
          <p className="mt-4 md:mt-5 text-[#A4A8AD] text-[15px] md:text-base font-['Inter'] font-light max-w-md mx-auto">
            Choose your favorite brand and find compatible accessories.
          </p>
        </motion.div>

        <div className="mt-9 sm:mt-16 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-14 sm:gap-y-9 md:gap-x-20">
          {BRANDS.map((brand, i) => (
            <motion.span
              key={brand}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={reveal}
              whileHover={{ scale: 1.06, color: GOLD_LIGHT }}
              className="font-['Playfair_Display'] text-xl sm:text-2xl md:text-3xl text-[#F5F5F2]/80 cursor-pointer transition-colors py-5 sm:py-0 rounded-xl border border-[rgba(255,255,255,0.12)] bg-[#11151A]/70 sm:border-0 sm:bg-transparent"
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Special Offer Banner                                               */
/* ------------------------------------------------------------------ */

function OfferBanner() {
  return (
    <section className="bg-[#080A0D] py-16 md:py-32 px-5 md:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={reveal}
        className="relative max-w-[90rem] mx-auto rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.12)] min-h-[22rem] md:min-h-[26rem] flex items-end md:items-center"
      >
        <div className="absolute inset-0">
          <CoverImage
            src={IMG.offerBg}
            alt="Photographer shooting outdoors with camera gear"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080A0D] via-[#080A0D]/70 to-transparent" />
          {/* mobile only: bottom fade for readable text */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-t from-[#080A0D] via-[#080A0D]/60 to-transparent" />
        </div>

        <div className="relative px-6 py-10 md:px-16 md:py-24 max-w-lg">
          <motion.div variants={reveal} custom={1}>
            <Eyebrow light>Special Offer</Eyebrow>
          </motion.div>
          <motion.h2
            variants={reveal}
            custom={2}
            className="mt-4 md:mt-5 font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-medium"
            style={{ color: GOLD_LIGHT }}
          >
            Up to 40% Off
          </motion.h2>
          <motion.p
            variants={reveal}
            custom={3}
            className="mt-3 md:mt-5 text-[#A4A8AD] font-['Inter'] font-light text-base md:text-lg"
          >
            On Selected Camera Accessories
          </motion.p>
          <motion.button
            variants={reveal}
            custom={4}
            whileHover={{ backgroundColor: GOLD_LIGHT }}
            className="mt-7 md:mt-9 w-full sm:w-auto px-9 py-3.5 md:py-4 rounded-full font-['Inter'] text-sm font-medium text-[#080A0D]"
            style={{ backgroundColor: GOLD }}
          >
            Shop Now
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Why Shop With Us — 2x2 compact on mobile                           */
/* ------------------------------------------------------------------ */

function WhyShopSection() {
  return (
    <section className="bg-[#080A0D] py-16 md:py-36">
      <div className="max-w-[90rem] mx-auto px-5 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
          className="mb-8 md:mb-16 text-center"
        >
          <h2 className="font-['Playfair_Display'] text-[#F5F5F2] text-3xl md:text-5xl font-medium">
            Why Shop With Us?
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={reveal}
                whileHover={{ y: -4, borderColor: GOLD }}
                className="rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#11151A] p-5 sm:p-8 text-center flex flex-col items-center"
              >
                <motion.div whileHover={{ scale: 1.12 }} transition={{ duration: 0.3 }}>
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 mb-4 sm:mb-5" style={{ color: GOLD }} />
                </motion.div>
                <h3 className="font-['Inter'] text-[#F5F5F2] text-[13px] sm:text-sm font-medium mb-1.5">
                  {b.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#A4A8AD] font-['Inter'] font-light">
                  {b.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function CameraAccessoriesPage() {
  return (
    <div className="bg-[#080A0D] w-full overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @media (min-width: 640px) { .sm\\:snap-align-none { scroll-snap-align: none; } }
        @media (min-width: 768px) { .md\\:snap-align-none { scroll-snap-align: none; } }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
      <Hero />
      <StatsStrip />
      <CategorySection />
      <Spotlight />
      <BestSellers />
      <Testimonials />
      <BrandSection />
      <OfferBanner />
      <WhyShopSection />
    </div>
  );
}