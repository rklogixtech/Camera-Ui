# Nikon Z Series — Web App

A fully custom, pixel-crafted Nikon-inspired front-end web application built with React 19 and Tailwind CSS. Every page is hand-designed with cinematic dark aesthetics, micro-animations, and real camera UI metaphors like viewfinders, AF-lock brackets, HUD overlays, and exposure readouts.

---

## Live Preview

> Run locally with `npm start` — see setup instructions below.

---

## Pages & Features

### Home Page
A multi-section immersive page built from 6 dedicated components:

| Section | Component | What it does |
|---|---|---|
| Hero Slider | `Hero.jsx` | Viewfinder-style full-bleed slider with AF-lock animation, Ken Burns effect, live exposure HUD, and thumbnail rail. Auto-advances every 6s, pauses on hover |
| Split Bay | `Nikonsplitbay.jsx` | Polaroid photo collage section with hover lift, tape stickers, and handwritten captions |
| Camera Collection | `Nikoncollectiongrid.jsx` | Bento-style mosaic grid of 6 cameras (Z9, Z8, Zf, Z6III, Z50II, ZR) with category filter tabs, hover corner brackets, and spec reveal. Mobile gets a full swipe viewer with LCD readout |
| Field Gallery | `Stickerfeaturessection.jsx` | Editorial full-screen gallery — hover over zones to swap images on desktop, swipeable card carousel on mobile |
| Field Index | `Fieldindex.jsx` | Scroll-triggered landscape photo slider with autoplay progress bar, thumbnail rail, keyboard and swipe navigation |
| Trust Section | `Nikontrustsection.jsx` | Animated accordion "Mission Log" — NASA/Nikon real-world deployments — paired with an SVG flight-deck HUD that reacts to the active entry |

### Cameras Page
Standalone `NikonCollectionGrid` rendered as its own page via `#cameras` hash. Shows the full Z-series lineup with filter tabs and an interactive mobile viewfinder.

### Lenses / Gallery Page
Scroll-driven cinematic hero with a rotating SVG lens animation, marquee strip, lens cards grid, testimonials, and a heritage timeline.

### Accessories Page
Full e-commerce style page with:
- Parallax hero with animated headline
- Stats strip (orders shipped, rating, years)
- Category grid: Camera Bags, Lighting, Tripods, Lenses & Filters, Microphones, Memory Cards
- Spotlight section with autoplay video
- Best Sellers with wishlist toggle and add-to-cart feedback
- Testimonials carousel
- Brand section: Canon, Sony, Nikon, Fujifilm, DJI, GoPro
- Special offer banner
- Why Shop With Us benefits grid

### Stories Page
A fully designed editorial journal with:
- Viewfinder-style split hero with live exposure readout
- Animated ticker of photography genres
- Full story index with category filters and cursor-following image preview
- Pull quote section
- Expanding genre panels (Wildlife, Weddings, Street, Landscape, Film)
- Draggable editors' picks carousel with tab switching
- Q&A accordion with image swap
- Animated contribute/pitch CTA with word-by-word reveal

### Support Page
- Animated hero with live search filtering
- Contact channels: Live Chat, Email, Phone, WhatsApp (with gold accent card)
- Help Center: tabbed FAQ accordion with 10 questions across 4 categories
- Contact form: topic pills, validation, animated success state

---

## Tech Stack

| Tool | Version | Why |
|---|---|---|
| React | 19 | UI library |
| Tailwind CSS | 3.4 | Utility-first styling |
| Framer Motion | 11 | Page animations, spring physics, drag gestures |
| Lucide React | 1.48 | Icon set |
| React Icons | 5.7 | WhatsApp and brand icons |
| PostCSS + Autoprefixer | — | CSS processing |

---

## Routing

No React Router. The app uses a custom **hash-based routing** system in `App.js`:

```
/         → Home page
#cameras  → Cameras Grid page
#lenses   → Lenses/Gallery page
#gallery  → Lenses/Gallery page (alias)
#accessories → Accessories page
#accessories-products-{slug} → Product detail page
#stories  → Stories/Journal page
#support  → Support page
```

Hash changes are listened to with `window.addEventListener("hashchange", ...)` and the correct page component is rendered conditionally.

---

## Project Structure

```
nikon/
├── public/
│   ├── cameras/          # Z9, Z8, Zf, Z6III, Z50II, ZR images
│   ├── home/             # Hero and gallery images (g1–g11, hero1–3)
│   ├── others/           # Lifestyle shots (sea, birds, kids, couples, view)
│   └── Accessories/      # Accessories images and spotlight video
│
└── src/
    ├── App.js            # Hash router + page switcher
    ├── componets/
    │   ├── Header.jsx    # Sticky nav with mobile drawer, AF-style CTA button
    │   └── Nikonfooter.jsx # Multi-column footer with logo, links, social icons
    └── Pages/
        ├── Home/
        │   ├── page.jsx                   # Assembles all home sections
        │   ├── Hero.jsx                   # Viewfinder hero slider
        │   ├── Nikonsplitbay.jsx          # Polaroid collage section
        │   ├── Nikoncollectiongrid.jsx    # Camera bento grid
        │   ├── Stickerfeaturessection.jsx # Editorial gallery
        │   ├── Fieldindex.jsx             # Landscape photo slider
        │   └── Nikontrustsection.jsx      # Mission log accordion + HUD
        ├── Lenses/
        │   └── page.jsx                   # Lenses/Gallery page
        ├── Accessories/
        │   ├── page.jsx                   # Full accessories e-commerce page
        │   └── products.jsx               # Product detail page
        ├── Stories/
        │   └── page.jsx                   # Editorial journal page
        └── Support/
            └── page.jsx                   # Help center + contact form
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
# Clone the repo
git clone https://github.com/rklogixtech/nikon.git
cd nikon

# Install dependencies
npm install

# Start development server
npm start
# App opens at http://localhost:3000
```

### Access on Same WiFi (for tablets / phones)

```bash
# The start script is already configured for network access
npm start
# Then open http://192.168.1.X:3000 on any device on the same WiFi
# Replace X with your machine's local IP (check with ipconfig)
```

### Build for Production

```bash
npm run build
# Output goes to /build folder, ready to deploy
```

---

## Design System

| Token | Value | Usage |
|---|---|---|
| Background | `#0B0B0C` / `#08070A` | Page background |
| Surface | `#11151A` | Cards, panels |
| Gold accent | `#FFE300` / `#D8B56D` | CTAs, highlights, AF brackets |
| Text primary | `#F4F3EF` | Headings |
| Text dim | `#9B978D` / `#A4A8AD` | Body copy |
| Border | `rgba(255,255,255,0.12)` | Card borders |

**Fonts used:**
- `Space Grotesk` — Header nav and display
- `JetBrains Mono` — HUD readouts, specs, metadata
- `Archivo Black` — Bold display headings
- `Fraunces` — Italic serif headings
- `Playfair Display` — Editorial sections
- `Inter` — Body copy

---

## Responsive Design

- **Mobile** (`< 640px`): Swipe carousels, mobile viewfinder, compact filter chips, collapsing nav drawer
- **Tablet** (`640px–1024px`): 2-column grids, adapted hero heights
- **Desktop** (`> 1024px`): Full bento grids, cursor-following previews, sticky panels, side-by-side layouts

All animations respect `prefers-reduced-motion`.

---

## Credits

Built by **Raj Kumawat**  
Contact: [Rklogixtech@gmail.com](mailto:Rklogixtech@gmail.com)  
Portfolio: [raj-kumawat-portfolio.vercel.app](https://raj-kumawat-portfolio.vercel.app/)

---

> This is a front-end portfolio project. No backend, no real transactions.
