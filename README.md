# InterTech — Fiber Internet Landing Page

A fully responsive React landing page for **InterTech**, a fictional high-speed fiber internet provider. Migrated from a static HTML/CSS/JS site and enhanced with Framer Motion animations and SEO optimizations.

---

## ✨ Features

- **Component-based architecture** — Every section is a standalone React component.
- **Framer Motion animations** — Staggered hero entrance, scroll-triggered section reveals, and animated number counters.
- **Animated mobile menu** — Hamburger icon morphs into an X on open, with a spring-based slide-in drawer.
- **Card hover states** — Pricing, performance, and infrastructure cards lift with a blue glow on hover.
- **Responsive design** — Fully mobile-optimised with a dedicated mobile navigation layout.
- **SEO ready** — Comprehensive meta tags including Open Graph and Twitter Card tags in `index.html`.

---

## 🧱 Component Structure

```
src/
├── assets/               # All images, icons, and videos
├── components/
│   ├── Navbar.jsx        # Responsive nav with animated mobile menu
│   ├── Hero.jsx          # Hero section with staggered animations
│   ├── Trust.jsx         # Logo slider + animated stat counters
│   ├── Counter.jsx       # Reusable animated number counter
│   ├── Infrastructure.jsx
│   ├── Performance.jsx
│   ├── Testimonials.jsx
│   ├── Pricing.jsx
│   ├── FAQ.jsx           # Accordion FAQ
│   ├── CTA.jsx
│   ├── Footer.jsx
│   ├── FeatureCard.jsx
│   ├── InfraCard.jsx
│   ├── PerfCard.jsx
│   ├── TestimonialCard.jsx
│   ├── PricingCard.jsx
│   └── FAQCard.jsx
├── App.jsx
├── index.css             # All global styles (migrated from InterTech/styles.css)
└── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

---

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [Vite 7](https://vitejs.dev/) | Bundler and dev server |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| Vanilla CSS | All styling via `index.css` |

---

## 📂 Original Source

The original static site lives in the `InterTech/` folder at the project root and was used as the reference for content, assets, and CSS during migration.
