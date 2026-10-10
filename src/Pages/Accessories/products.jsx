// import React, { useEffect, useState, useMemo } from "react";
// import { motion } from "framer-motion";
// import { Heart, Plus, Star, Camera, ArrowUpRight } from "lucide-react";

// /* ------------------------------------------------------------------ */
// /*  Tokens                                                             */
// /* ------------------------------------------------------------------ */

// const GOLD = "#D8B56D";
// const GOLD_LIGHT = "#E8CC91";

// /* ------------------------------------------------------------------ */
// /*  Data                                                               */
// /* ------------------------------------------------------------------ */

// const PRODUCTS = [
//   {
//     id: "bag-backpack",
//     category: "Camera Bags",
//     name: "Camera Backpack 3L",
//     tag: "Padded • 22L capacity",
//     price: 4999,
//     originalPrice: 6999,
//     rating: 4.8,
//     img: "/Accessories/products/Camera-Backpack-3L.jpg",
//   },
//   {
//     id: "bag-sling",
//     category: "Camera Bags",
//     name: "Sling Camera Bag",
//     tag: "Quick-access • Weatherproof",
//     price: 2999,
//     originalPrice: 3999,
//     rating: 4.6,
//     img: "/Accessories/products/Sling-Camera-Bag.jpg",
//   },
//   {
//     id: "bag-hardcase",
//     category: "Camera Bags",
//     name: "Hard Case Camera Bag",
//     tag: "Impact resistant shell",
//     price: 5499,
//     originalPrice: 6999,
//     rating: 4.7,
//     img: "/Accessories/products/Hard-Case-Camera-Bag.jpg",
//   },
//   {
//     id: "tripod-carbon",
//     category: "Tripods & Stands",
//     name: "Professional Tripod (Carbon Fiber)",
//     tag: "1.3kg • Carbon fiber",
//     price: 12999,
//     originalPrice: 16999,
//     rating: 4.9,
//     img: "/Accessories/products/Professional-Tripod.jpg",
//   },
//   {
//     id: "tripod-mini",
//     category: "Tripods & Stands",
//     name: "Mini Tabletop Tripod",
//     tag: "Compact • Flexible legs",
//     price: 999,
//     originalPrice: 1499,
//     rating: 4.4,
//     img: "/Accessories/products/Mini-Tabletop-Tripod.jpg",
//   },
//   {
//     id: "tripod-boom",
//     category: "Tripods & Stands",
//     name: "Boom Mic Stand",
//     tag: "Adjustable • Studio grade",
//     price: 1799,
//     originalPrice: 2299,
//     rating: 4.5,
//     img: "/Accessories/products/Boom-Mic-Stand.jpg",
//   },
//   {
//     id: "lens-nd-filter",
//     category: "Lenses & Filters",
//     name: "ND Filter Kit",
//     tag: "6-piece • Multi-coated",
//     price: 1899,
//     originalPrice: 2499,
//     rating: 4.6,
//     img: "/Accessories/products/ND-Filter-Kit.png",
//   },
//   {
//     id: "lens-wide",
//     category: "Lenses & Filters",
//     name: "Wide Angle Lens",
//     tag: "18mm • Low distortion",
//     price: 8999,
//     originalPrice: 11999,
//     rating: 4.7,
//     img: "/Accessories/products/Wide-Angle-Lens.jpg",
//   },
//   {
//     id: "lens-cleaning",
//     category: "Lenses & Filters",
//     name: "Lens Cleaning Kit",
//     tag: "Anti-static • Travel size",
//     price: 599,
//     originalPrice: 799,
//     rating: 4.5,
//     img: "/Accessories/products/Lens-Cleaning-Kit.jpg",
//   },
//   {
//     id: "light-led-panel",
//     category: "Lighting",
//     name: "LED Video Light Panel",
//     tag: "Dimmable • 3200–5600K",
//     price: 6499,
//     originalPrice: 8999,
//     rating: 4.7,
//     img: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1000&q=80",
//   },
//   {
//     id: "light-ring",
//     category: "Lighting",
//     name: "Ring Light with Stand",
//     tag: "10-inch • USB powered",
//     price: 2999,
//     originalPrice: 3999,
//     rating: 4.6,
//     img: "/Accessories/products/Ring-Light-with-Stand.jpg",
//   },
//   {
//     id: "light-softbox",
//     category: "Lighting",
//     name: "Softbox Lighting Kit",
//     tag: "Diffused • Two-head",
//     price: 4499,
//     originalPrice: 5999,
//     rating: 4.5,
//     img: "/Accessories/products/Softbox-Lighting-Kit.png",
//   },
//   {
//     id: "mic-wireless",
//     category: "Microphones",
//     name: "Wireless Microphone (2.4GHz)",
//     tag: "Clip-on • 100m range",
//     price: 7999,
//     originalPrice: 9999,
//     rating: 4.6,
//     img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80",
//   },
//   {
//     id: "mic-shotgun",
//     category: "Microphones",
//     name: "Shotgun Microphone",
//     tag: "Directional • Camera mount",
//     price: 5999,
//     originalPrice: 7499,
//     rating: 4.7,
//     img: "/Accessories/products/Shotgun-Microphone.jpg",
//   },
//   {
//     id: "mic-lavalier",
//     category: "Microphones",
//     name: "Lavalier Mic",
//     tag: "Omnidirectional • 6m cable",
//     price: 1499,
//     originalPrice: 1999,
//     rating: 4.4,
//     img: "/Accessories/products/Lavalier-Mic.jpg",
//   },
//    {
//     id: "card-cfexpress",
//     category: "Memory Cards",
//     name: "CFexpress Card",
//     tag: "Type B • 1700MB/s",
//     price: 6999,
//     originalPrice: 8999,
//     rating: 4.9,
//     img: "/Accessories/products/CFexpress-Card.jpg",
//   },
//   {
//     id: "card-sd-128",
//     category: "Memory Cards",
//     name: "128GB SD Card",
//     tag: "UHS-II • 300MB/s",
//     price: 1299,
//     originalPrice: 1699,
//     rating: 4.8,
//     img: "/Accessories/products/128GB-SD-Card.jpg",
//   },
//   {
//     id: "card-sd-256",
//     category: "Memory Cards",
//     name: "256GB microSD Card",
//     tag: "A2 rated • 4K ready",
//     price: 2299,
//     originalPrice: 2999,
//     rating: 4.7,
//     img: "/Accessories/products/256GB-microSD-Card.jpg",
//   },
 
// ];

// const CATEGORIES = [
//   "All",
//   "Camera Bags",
//   "Tripods & Stands",
//   "Lenses & Filters",
//   "Lighting",
//   "Microphones",
//   "Memory Cards",
// ];

// function categoryFromHash() {
//   const prefix = "#accessories-products-";
//   const hash = window.location.hash;
//   if (!hash.startsWith(prefix)) return "All";

//   const slug = hash.slice(prefix.length);
//   return (
//     CATEGORIES.find(
//       (category) => category.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug,
//     ) || "All"
//   );
// }

// function scrollToProducts() {
//   window.requestAnimationFrame(() => {
//     document.getElementById("accessories-products")?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   });
// }

// const ADS = [
//   {
//     brand: "DJI",
//     headline: "Fly Further. Shoot Steadier.",
//     sub: "Creator accessory bundles for every DJI gimbal and drone.",
//     cta: "Explore DJI Gear",
//     img: "Accessories/products/drone1.jpg",
//   },
//   {
//     brand: "GoPro",
//     headline: "Built for Every Angle",
//     sub: "Mounts, cases and floating grips made for the way you move.",
//     cta: "Shop GoPro Mounts",
//     img: "Accessories/products/Go-Pro-banner.jpg",
//   },
//   {
//     brand: "Canon",
//     headline: "Trade In, Level Up",
//     sub: "Bring your old lens in and save up to ₹8,000 on your next one.",
//     cta: "Check Trade-In Value",
//     img: "/Accessories/products/Canon-trade-in.jpg",
//   },
//   {
//     brand: "Sony",
//     headline: "Engineered to Match Your Alpha",
//     sub: "Grips, cages and batteries built to Sony's own tolerances.",
//     cta: "Shop Sony Accessories",
//     img: "/Accessories/Shop-Sony-Accessories.jpg",
//   },
// ];

// /* ------------------------------------------------------------------ */
// /*  Helpers                                                             */
// /* ------------------------------------------------------------------ */

// function chunk(arr, size) {
//   const out = [];
//   for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
//   return out;
// }

// function CoverImage({ src, alt, className }) {
//   const [broken, setBroken] = useState(false);
//   if (broken) {
//     return (
//       <div
//         className={`flex items-center justify-center bg-gradient-to-br from-[#1a1f26] to-[#0d1013] ${className}`}
//       >
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

// const reveal = {
//   hidden: { opacity: 0, y: 34 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

// /* ------------------------------------------------------------------ */
// /*  Filter tabs — underline style                                      */
// /* ------------------------------------------------------------------ */

// function FilterTabs({ active, onChange }) {
//   return (
//     <div className="flex gap-8 overflow-x-auto border-b border-[rgba(255,255,255,0.1)] pb-px">
//       {CATEGORIES.map((cat) => {
//         const isActive = active === cat;
//         return (
//           <button
//             key={cat}
//             onClick={() => onChange(cat)}
//             className="relative shrink-0 pb-4 font-['Inter'] text-sm tracking-wide whitespace-nowrap"
//             style={{ color: isActive ? "#F5F5F2" : "#5c6066" }}
//           >
//             {cat}
//             {isActive && (
//               <motion.span
//                 layoutId="tab-underline"
//                 transition={{ type: "spring", stiffness: 380, damping: 32 }}
//                 className="absolute left-0 right-0 -bottom-px h-[2px] rounded-full"
//                 style={{ backgroundColor: GOLD }}
//               />
//             )}
//           </button>
//         );
//       })}
//     </div>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Editorial product tile (used inside a pair row)                    */
// /* ------------------------------------------------------------------ */

// function ProductTile({ product, globalIndex, total, offset }) {
//   const [wishlisted, setWishlisted] = useState(false);
//   const discount = Math.round(
//     ((product.originalPrice - product.price) / product.originalPrice) * 100,
//   );

//   return (
//     <div className={offset ? "md:mt-14" : ""}>
//       <div className="group relative rounded-2xl overflow-hidden aspect-[4/5]">
//         <motion.div
//           className="absolute inset-0"
//           whileHover={{ scale: 1.06 }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <CoverImage
//             src={product.img}
//             alt={product.name}
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//         <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D]/70 via-transparent to-transparent" />

//         <button
//           onClick={() => setWishlisted((v) => !v)}
//           aria-label="Toggle wishlist"
//           className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center"
//           style={{ backgroundColor: "rgba(8,10,13,0.55)" }}
//         >
//           <motion.span
//             animate={wishlisted ? { scale: [1, 1.3, 1] } : { scale: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <Heart
//               className="w-4 h-4"
//               style={{
//                 color: wishlisted ? GOLD : "#F5F5F2",
//                 fill: wishlisted ? GOLD : "transparent",
//               }}
//             />
//           </motion.span>
//         </button>

//         <button
//           className="absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
//           style={{ backgroundColor: GOLD }}
//           aria-label="Add to cart"
//         >
//           <Plus className="w-4 h-4 text-[#080A0D]" />
//         </button>

//         <span
//           className="absolute top-3 left-3 font-['Playfair_Display'] italic text-xs"
//           style={{ color: GOLD_LIGHT }}
//         >
//           {String(globalIndex + 1).padStart(2, "0")}/
//           {String(total).padStart(2, "0")}
//         </span>
//       </div>

//       <div className="mt-4 flex items-start justify-between gap-3">
//         <div>
//           <span
//             className="text-[10px] tracking-[0.18em] uppercase font-['Inter']"
//             style={{ color: "#5c6066" }}
//           >
//             {product.category}
//           </span>
//           <h3 className="mt-1 font-['Playfair_Display'] text-[#F5F5F2] text-lg leading-snug">
//             {product.name}
//           </h3>
//           <p className="mt-1 text-xs text-[#A4A8AD] font-['Inter'] font-light">
//             {product.tag}
//           </p>
//         </div>
//         <div className="flex items-center gap-1 shrink-0 mt-1">
//           <Star className="w-3.5 h-3.5" style={{ color: GOLD, fill: GOLD }} />
//           <span className="text-xs font-['Inter'] text-[#F5F5F2]">
//             {product.rating}
//           </span>
//         </div>
//       </div>

//       <div className="mt-2 flex items-baseline gap-2">
//         <span className="font-['Playfair_Display'] text-base text-[#F5F5F2]">
//           ₹{product.price.toLocaleString("en-IN")}
//         </span>
//         <span className="text-xs text-[#A4A8AD] line-through font-['Inter']">
//           ₹{product.originalPrice.toLocaleString("en-IN")}
//         </span>
//         <span className="text-xs font-['Inter']" style={{ color: GOLD_LIGHT }}>
//           {discount}% off
//         </span>
//       </div>
//     </div>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Product row block (a pair of editorial tiles)                      */
// /* ------------------------------------------------------------------ */

// function ProductRow({ pair, startIndex, total, reversed }) {
//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.25 }}
//       variants={reveal}
//       className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 ${reversed ? "md:[&>*:first-child]:order-2" : ""}`}
//     >
//       {pair.map((p, i) => (
//         <ProductTile
//           key={p.id}
//           product={p}
//           globalIndex={startIndex + i}
//           total={total}
//           offset={i === 1 && !reversed}
//         />
//       ))}
//     </motion.div>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Sponsored advertisement spread                                     */
// /* ------------------------------------------------------------------ */

// function AdSpread({ ad }) {
//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={reveal}
//       className="relative rounded-3xl overflow-hidden min-h-[22rem] md:min-h-[26rem] flex items-end"
//     >
//       <motion.div
//         initial={{ scale: 1.08 }}
//         whileInView={{ scale: 1 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
//         className="absolute inset-0"
//       >
//         <CoverImage
//           src={ad.img}
//           alt={ad.brand}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-[#080A0D]/55 to-[#080A0D]/10" />
//       </motion.div>

//       <span
//         className="absolute top-6 left-6 z-10 px-3 py-1 rounded-full text-[10px] tracking-[0.18em] uppercase font-['Inter'] border"
//         style={{
//           borderColor: "rgba(232,204,145,0.5)",
//           color: GOLD_LIGHT,
//           backgroundColor: "rgba(8,10,13,0.5)",
//         }}
//       >
//         Sponsored · {ad.brand}
//       </span>

//       <div className="relative z-10 p-8 md:p-12 max-w-xl">
//         <h3 className="font-['Playfair_Display'] text-[#F5F5F2] text-3xl md:text-4xl font-medium leading-tight">
//           {ad.headline}
//         </h3>
//         <p className="mt-3 text-[#A4A8AD] font-['Inter'] font-light">
//           {ad.sub}
//         </p>
//         <motion.button
//           whileHover={{ backgroundColor: GOLD, color: "#080A0D" }}
//           className="mt-6 inline-flex items-center gap-2 px-7 py-3 rounded-full border font-['Inter'] text-sm font-medium text-[#F5F5F2]"
//           style={{ borderColor: GOLD }}
//         >
//           {ad.cta}
//           <ArrowUpRight className="w-4 h-4" />
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Page                                                                */
// /* ------------------------------------------------------------------ */

// export default function AllProductsPage() {
//   const [active, setActive] = useState(categoryFromHash);

//   useEffect(() => {
//     const handleHashChange = () => {
//       setActive(categoryFromHash());
//       if (window.location.hash.startsWith("#accessories-products-")) {
//         scrollToProducts();
//       }
//     };

//     window.addEventListener("hashchange", handleHashChange);
//     if (window.location.hash.startsWith("#accessories-products-")) {
//       scrollToProducts();
//     }
//     return () => window.removeEventListener("hashchange", handleHashChange);
//   }, []);

//   const filtered = useMemo(
//     () =>
//       active === "All"
//         ? PRODUCTS
//         : PRODUCTS.filter((p) => p.category === active),
//     [active],
//   );

//   const pairs = useMemo(() => chunk(filtered, 2), [filtered]);

//   const feed = useMemo(() => {
//     const blocks = [];
//     let adCursor = 0;
//     pairs.forEach((pair, i) => {
//       blocks.push({
//         type: "products",
//         pair,
//         startIndex: i * 2,
//         reversed: i % 2 === 1,
//       });
//       if ((i + 1) % 2 === 0 && i !== pairs.length - 1) {
//         blocks.push({ type: "ad", ad: ADS[adCursor % ADS.length] });
//         adCursor += 1;
//       }
//     });
//     return blocks;
//   }, [pairs]);

//   return (
//     <div
//       id="accessories-products"
//       className="bg-[#080A0D] w-full min-h-screen overflow-x-hidden"
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
//         @media (prefers-reduced-motion: reduce) {
//           *, *::before, *::after {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//           }
//         }
//       `}</style>

//       <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
//         {/* Intro */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           className="mb-10 max-w-2xl"
//         >
//           <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#A4A8AD] font-['Inter']">
//             <span className="w-6 h-px bg-[#5c6066]" />
//             All Products
//           </span>
//           <h1 className="mt-5 font-['Playfair_Display'] text-[#F5F5F2] text-4xl md:text-6xl font-medium leading-tight">
//             Find What You Need
//           </h1>
//           <p className="mt-5 text-[#A4A8AD] font-['Inter'] font-light leading-relaxed max-w-xl">
//             Every accessory across our line-up, laid out the way a photographer
//             browses a catalog — with a few partner features from the brands we
//             trust along the way.
//           </p>
//         </motion.div>

//         <div className="sticky top-0 z-20 -mx-6 md:-mx-10 px-6 md:px-10 py-4 bg-[#080A0D]/90 backdrop-blur">
//           <FilterTabs active={active} onChange={setActive} />
//         </div>

//         {/* Feed */}
//         <div className="mt-12 flex flex-col gap-16 md:gap-20">
//           {feed.map((block, i) =>
//             block.type === "products" ? (
//               <ProductRow
//                 key={`p-${active}-${i}`}
//                 pair={block.pair}
//                 startIndex={block.startIndex}
//                 total={filtered.length}
//                 reversed={block.reversed}
//               />
//             ) : (
//               <AdSpread key={`a-${active}-${i}`} ad={block.ad} />
//             ),
//           )}
//         </div>

//         {/* Closing CTA */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           variants={reveal}
//           className="mt-24 text-center border-t border-[rgba(255,255,255,0.1)] pt-16"
//         >
//           <h2 className="font-['Playfair_Display'] text-[#F5F5F2] text-3xl md:text-4xl font-medium">
//             That's everything, for now.
//           </h2>
//           <p className="mt-3 text-[#A4A8AD] font-['Inter'] font-light">
//             New gear lands every month — check back for fresh drops.
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Heart, Plus, Star, Camera, ArrowUpRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Tokens                                                             */
/* ------------------------------------------------------------------ */

const GOLD = "#D8B56D";
const GOLD_LIGHT = "#E8CC91";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const PRODUCTS = [
  {
    id: "bag-backpack",
    category: "Camera Bags",
    name: "Camera Backpack 3L",
    tag: "Padded • 22L capacity",
    price: 4999,
    originalPrice: 6999,
    rating: 4.8,
    img: "/Accessories/products/Camera-Backpack-3L.jpg",
  },
  {
    id: "bag-sling",
    category: "Camera Bags",
    name: "Sling Camera Bag",
    tag: "Quick-access • Weatherproof",
    price: 2999,
    originalPrice: 3999,
    rating: 4.6,
    img: "/Accessories/products/Sling-Camera-Bag.jpg",
  },
  {
    id: "bag-hardcase",
    category: "Camera Bags",
    name: "Hard Case Camera Bag",
    tag: "Impact resistant shell",
    price: 5499,
    originalPrice: 6999,
    rating: 4.7,
    img: "/Accessories/products/Hard-Case-Camera-Bag.jpg",
  },
  {
    id: "tripod-carbon",
    category: "Tripods & Stands",
    name: "Professional Tripod (Carbon Fiber)",
    tag: "1.3kg • Carbon fiber",
    price: 12999,
    originalPrice: 16999,
    rating: 4.9,
    img: "/Accessories/products/Professional-Tripod.jpg",
  },
  {
    id: "tripod-mini",
    category: "Tripods & Stands",
    name: "Mini Tabletop Tripod",
    tag: "Compact • Flexible legs",
    price: 999,
    originalPrice: 1499,
    rating: 4.4,
    img: "/Accessories/products/Mini-Tabletop-Tripod.jpg",
  },
  {
    id: "tripod-boom",
    category: "Tripods & Stands",
    name: "Boom Mic Stand",
    tag: "Adjustable • Studio grade",
    price: 1799,
    originalPrice: 2299,
    rating: 4.5,
    img: "/Accessories/products/Boom-Mic-Stand.jpg",
  },
  {
    id: "lens-nd-filter",
    category: "Lenses & Filters",
    name: "ND Filter Kit",
    tag: "6-piece • Multi-coated",
    price: 1899,
    originalPrice: 2499,
    rating: 4.6,
    img: "/Accessories/products/ND-Filter-Kit.png",
  },
  {
    id: "lens-wide",
    category: "Lenses & Filters",
    name: "Wide Angle Lens",
    tag: "18mm • Low distortion",
    price: 8999,
    originalPrice: 11999,
    rating: 4.7,
    img: "/Accessories/products/Wide-Angle-Lens.jpg",
  },
  {
    id: "lens-cleaning",
    category: "Lenses & Filters",
    name: "Lens Cleaning Kit",
    tag: "Anti-static • Travel size",
    price: 599,
    originalPrice: 799,
    rating: 4.5,
    img: "/Accessories/products/Lens-Cleaning-Kit.jpg",
  },
  {
    id: "light-led-panel",
    category: "Lighting",
    name: "LED Video Light Panel",
    tag: "Dimmable • 3200–5600K",
    price: 6499,
    originalPrice: 8999,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "light-ring",
    category: "Lighting",
    name: "Ring Light with Stand",
    tag: "10-inch • USB powered",
    price: 2999,
    originalPrice: 3999,
    rating: 4.6,
    img: "/Accessories/products/Ring-Light-with-Stand.jpg",
  },
  {
    id: "light-softbox",
    category: "Lighting",
    name: "Softbox Lighting Kit",
    tag: "Diffused • Two-head",
    price: 4499,
    originalPrice: 5999,
    rating: 4.5,
    img: "/Accessories/products/Softbox-Lighting-Kit.png",
  },
  {
    id: "mic-wireless",
    category: "Microphones",
    name: "Wireless Microphone (2.4GHz)",
    tag: "Clip-on • 100m range",
    price: 7999,
    originalPrice: 9999,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "mic-shotgun",
    category: "Microphones",
    name: "Shotgun Microphone",
    tag: "Directional • Camera mount",
    price: 5999,
    originalPrice: 7499,
    rating: 4.7,
    img: "/Accessories/products/Shotgun-Microphone.jpg",
  },
  {
    id: "mic-lavalier",
    category: "Microphones",
    name: "Lavalier Mic",
    tag: "Omnidirectional • 6m cable",
    price: 1499,
    originalPrice: 1999,
    rating: 4.4,
    img: "/Accessories/products/Lavalier-Mic.jpg",
  },
  {
    id: "card-cfexpress",
    category: "Memory Cards",
    name: "CFexpress Card",
    tag: "Type B • 1700MB/s",
    price: 6999,
    originalPrice: 8999,
    rating: 4.9,
    img: "/Accessories/products/CFexpress-Card.jpg",
  },
  {
    id: "card-sd-128",
    category: "Memory Cards",
    name: "128GB SD Card",
    tag: "UHS-II • 300MB/s",
    price: 1299,
    originalPrice: 1699,
    rating: 4.8,
    img: "/Accessories/products/128GB-SD-Card.jpg",
  },
  {
    id: "card-sd-256",
    category: "Memory Cards",
    name: "256GB microSD Card",
    tag: "A2 rated • 4K ready",
    price: 2299,
    originalPrice: 2999,
    rating: 4.7,
    img: "/Accessories/products/256GB-microSD-Card.jpg",
  },
];

const CATEGORIES = [
  "All",
  "Camera Bags",
  "Tripods & Stands",
  "Lenses & Filters",
  "Lighting",
  "Microphones",
  "Memory Cards",
];

function categoryFromHash() {
  const prefix = "#accessories-products-";
  const hash = window.location.hash;
  if (!hash.startsWith(prefix)) return "All";

  const slug = hash.slice(prefix.length);
  return (
    CATEGORIES.find(
      (category) => category.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug,
    ) || "All"
  );
}

function scrollToProducts() {
  window.requestAnimationFrame(() => {
    document.getElementById("accessories-products")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const ADS = [
  {
    brand: "DJI",
    headline: "Fly Further. Shoot Steadier.",
    sub: "Creator accessory bundles for every DJI gimbal and drone.",
    cta: "Explore DJI Gear",
    img: "/Accessories/products/drone1.jpg",
  },
  {
    brand: "GoPro",
    headline: "Built for Every Angle",
    sub: "Mounts, cases and floating grips made for the way you move.",
    cta: "Shop GoPro Mounts",
    img: "/Accessories/products/Go-Pro-banner.jpg",
  },
  {
    brand: "Canon",
    headline: "Trade In, Level Up",
    sub: "Bring your old lens in and save up to ₹8,000 on your next one.",
    cta: "Check Trade-In Value",
    img: "/Accessories/products/Canon-trade-in.jpg",
  },
  {
    brand: "Sony",
    headline: "Engineered to Match Your Alpha",
    sub: "Grips, cages and batteries built to Sony's own tolerances.",
    cta: "Shop Sony Accessories",
    img: "/Accessories/Shop-Sony-Accessories.jpg",
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                             */
/* ------------------------------------------------------------------ */

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function CoverImage({ src, alt, className }) {
  const [broken, setBroken] = useState(false);
  if (broken) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#1a1f26] to-[#0d1013] ${className}`}
      >
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

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ------------------------------------------------------------------ */
/*  Filter tabs — underline style (mobile: tighter, smooth swipe)      */
/* ------------------------------------------------------------------ */

function FilterTabs({ active, onChange }) {
  return (
    <div className="no-scrollbar flex gap-6 md:gap-8 overflow-x-auto border-b border-[rgba(255,255,255,0.1)] pb-px snap-x">
      {CATEGORIES.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className="relative shrink-0 pb-3 md:pb-4 font-['Inter'] text-[13px] md:text-sm tracking-wide whitespace-nowrap"
            style={{ color: isActive ? "#F5F5F2" : "#5c6066" }}
          >
            {cat}
            {isActive && (
              <motion.span
                layoutId="tab-underline"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className="absolute left-0 right-0 -bottom-px h-[2px] rounded-full"
                style={{ backgroundColor: GOLD }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Editorial product tile                                             */
/*  Mobile: compact 2-col card, add button always visible              */
/* ------------------------------------------------------------------ */

function ProductTile({ product, globalIndex, total, offset }) {
  const [wishlisted, setWishlisted] = useState(false);
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );

  return (
    <div className={offset ? "md:mt-14" : ""}>
      <div className="group relative rounded-xl md:rounded-2xl overflow-hidden aspect-[4/5]">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <CoverImage
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D]/70 via-transparent to-transparent" />

        <button
          onClick={() => setWishlisted((v) => !v)}
          aria-label="Toggle wishlist"
          className="absolute top-2 right-2 md:top-3 md:right-3 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "rgba(8,10,13,0.55)" }}
        >
          <motion.span
            animate={wishlisted ? { scale: [1, 1.3, 1] } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Heart
              className="w-4 h-4"
              style={{
                color: wishlisted ? GOLD : "#F5F5F2",
                fill: wishlisted ? GOLD : "transparent",
              }}
            />
          </motion.span>
        </button>

        <button
          className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300"
          style={{ backgroundColor: GOLD }}
          aria-label="Add to cart"
        >
          <Plus className="w-4 h-4 text-[#080A0D]" />
        </button>

        <span
          className="absolute top-2.5 left-2.5 md:top-3 md:left-3 font-['Playfair_Display'] italic text-[11px] md:text-xs"
          style={{ color: GOLD_LIGHT }}
        >
          {String(globalIndex + 1).padStart(2, "0")}/
          {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-3 md:mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <span
            className="block truncate text-[9px] md:text-[10px] tracking-[0.18em] uppercase font-['Inter']"
            style={{ color: "#5c6066" }}
          >
            {product.category}
          </span>
          <h3 className="mt-1 font-['Playfair_Display'] text-[#F5F5F2] text-[15px] md:text-lg leading-snug line-clamp-2 md:line-clamp-none">
            {product.name}
          </h3>
          <p className="mt-1 text-[11px] md:text-xs text-[#A4A8AD] font-['Inter'] font-light line-clamp-1 md:line-clamp-none">
            {product.tag}
          </p>
        </div>
        <div className="hidden md:flex items-center gap-1 shrink-0 mt-1">
          <Star className="w-3.5 h-3.5" style={{ color: GOLD, fill: GOLD }} />
          <span className="text-xs font-['Inter'] text-[#F5F5F2]">
            {product.rating}
          </span>
        </div>
      </div>

      {/* mobile-only rating row */}
      <div className="mt-1.5 flex items-center gap-1 md:hidden">
        <Star className="w-3 h-3" style={{ color: GOLD, fill: GOLD }} />
        <span className="text-[11px] font-['Inter'] text-[#F5F5F2]">
          {product.rating}
        </span>
      </div>

      <div className="mt-1.5 md:mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <span className="font-['Playfair_Display'] text-[15px] md:text-base text-[#F5F5F2]">
          ₹{product.price.toLocaleString("en-IN")}
        </span>
        <span className="text-[11px] md:text-xs text-[#A4A8AD] line-through font-['Inter']">
          ₹{product.originalPrice.toLocaleString("en-IN")}
        </span>
        <span className="text-[11px] md:text-xs font-['Inter']" style={{ color: GOLD_LIGHT }}>
          {discount}% off
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Product row block (a pair of editorial tiles)                      */
/*  Mobile: always 2 columns side by side                              */
/* ------------------------------------------------------------------ */

function ProductRow({ pair, startIndex, total, reversed }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={reveal}
      className={`grid grid-cols-2 gap-x-3 gap-y-6 md:gap-10 ${reversed ? "md:[&>*:first-child]:order-2" : ""}`}
    >
      {pair.map((p, i) => (
        <ProductTile
          key={p.id}
          product={p}
          globalIndex={startIndex + i}
          total={total}
          offset={i === 1 && !reversed}
        />
      ))}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sponsored advertisement spread                                     */
/* ------------------------------------------------------------------ */

function AdSpread({ ad }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={reveal}
      className="relative rounded-2xl md:rounded-3xl overflow-hidden min-h-[20rem] md:min-h-[26rem] flex items-end"
    >
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <CoverImage
          src={ad.img}
          alt={ad.brand}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-[#080A0D]/55 to-[#080A0D]/10" />
      </motion.div>

      <span
        className="absolute top-4 left-4 md:top-6 md:left-6 z-10 px-3 py-1 rounded-full text-[10px] tracking-[0.18em] uppercase font-['Inter'] border"
        style={{
          borderColor: "rgba(232,204,145,0.5)",
          color: GOLD_LIGHT,
          backgroundColor: "rgba(8,10,13,0.5)",
        }}
      >
        Sponsored · {ad.brand}
      </span>

      <div className="relative z-10 w-full p-5 md:p-12 max-w-xl">
        <h3 className="font-['Playfair_Display'] text-[#F5F5F2] text-2xl md:text-4xl font-medium leading-tight">
          {ad.headline}
        </h3>
        <p className="mt-2 md:mt-3 text-[#A4A8AD] text-sm md:text-base font-['Inter'] font-light">
          {ad.sub}
        </p>
        <motion.button
          whileHover={{ backgroundColor: GOLD, color: "#080A0D" }}
          className="mt-5 md:mt-6 w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border font-['Inter'] text-sm font-medium text-[#F5F5F2]"
          style={{ borderColor: GOLD }}
        >
          {ad.cta}
          <ArrowUpRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function AllProductsPage() {
  const [active, setActive] = useState(categoryFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setActive(categoryFromHash());
      if (window.location.hash.startsWith("#accessories-products-")) {
        scrollToProducts();
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    if (window.location.hash.startsWith("#accessories-products-")) {
      scrollToProducts();
    }
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const filtered = useMemo(
    () =>
      active === "All"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === active),
    [active],
  );

  const pairs = useMemo(() => chunk(filtered, 2), [filtered]);

  const feed = useMemo(() => {
    const blocks = [];
    let adCursor = 0;
    pairs.forEach((pair, i) => {
      blocks.push({
        type: "products",
        pair,
        startIndex: i * 2,
        reversed: i % 2 === 1,
      });
      if ((i + 1) % 2 === 0 && i !== pairs.length - 1) {
        blocks.push({ type: "ad", ad: ADS[adCursor % ADS.length] });
        adCursor += 1;
      }
    });
    return blocks;
  }, [pairs]);

  return (
    <div
      id="accessories-products"
      className="bg-[#080A0D] w-full min-h-screen overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 md:px-10 pt-24 pb-14 md:py-28">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 md:mb-10 max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#A4A8AD] font-['Inter']">
            <span className="w-6 h-px bg-[#5c6066]" />
            All Products
          </span>
          <h1 className="mt-4 md:mt-5 font-['Playfair_Display'] text-[#F5F5F2] text-[2rem] md:text-6xl font-medium leading-tight">
            Find What You Need
          </h1>
          <p className="mt-3 md:mt-5 text-[#A4A8AD] text-sm md:text-base font-['Inter'] font-light leading-relaxed max-w-xl">
            Every accessory across our line-up, laid out the way a photographer
            browses a catalog — with a few partner features from the brands we
            trust along the way.
          </p>
        </motion.div>

        <div className="sticky top-0 z-20 -mx-4 md:-mx-10 px-4 md:px-10 pt-3 pb-0 md:py-4 bg-[#080A0D]/90 backdrop-blur">
          <FilterTabs active={active} onChange={setActive} />
        </div>

        {/* Feed */}
        <div className="mt-8 md:mt-12 flex flex-col gap-10 md:gap-20">
          {feed.map((block, i) =>
            block.type === "products" ? (
              <ProductRow
                key={`p-${active}-${i}`}
                pair={block.pair}
                startIndex={block.startIndex}
                total={filtered.length}
                reversed={block.reversed}
              />
            ) : (
              <AdSpread key={`a-${active}-${i}`} ad={block.ad} />
            ),
          )}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
          className="mt-16 md:mt-24 text-center border-t border-[rgba(255,255,255,0.1)] pt-10 md:pt-16"
        >
          <h2 className="font-['Playfair_Display'] text-[#F5F5F2] text-2xl md:text-4xl font-medium">
            That's everything, for now.
          </h2>
          <p className="mt-3 text-[#A4A8AD] text-sm md:text-base font-['Inter'] font-light">
            New gear lands every month — check back for fresh drops.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
