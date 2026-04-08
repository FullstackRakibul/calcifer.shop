<div align="center">

# 🔥 Calcifer.Shop

**The Hearth of Digital Business**

*An ecosystem of ownership infrastructure — tools that turn software into controlled, scalable products.*

[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.17-00DC82?style=flat-square&logo=nuxt.js)](https://nuxt.com)
[![Vue 3](https://img.shields.io/badge/Vue-3.5-4FC08D?style=flat-square&logo=vue.js)](https://vuejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-FFB800?style=flat-square)](LICENSE)

</div>

---

## Overview

**Calcifer.Shop** is the official storefront and documentation hub for the Calcifer product ecosystem. It showcases three core products designed for developers and businesses who need enterprise-grade infrastructure without enterprise complexity:

| Product | Purpose | Status |
|---------|---------|--------|
| 🔥 **Calcifer.Forge** | .NET 8 architecture engine with licensing, feature gating & seat control | Active |
| 🛒 **Calcifer.OrderMint** | Social commerce system — turns Messenger/DM chaos into structured operations | Active |
| 🔐 **Calcifer.UserMatrix** | Universal identity & access control with RBAC, audit logs & SSO | Active |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Nuxt 3](https://nuxt.com) (SSR + Static) |
| **UI** | [Vue 3](https://vuejs.org) Composition API |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) + oklch design tokens |
| **Components** | [shadcn-vue](https://www.shadcn-vue.com/) via `shadcn-nuxt` |
| **State** | [Pinia](https://pinia.vuejs.org/) with localStorage persistence |
| **Scroll** | [Lenis](https://github.com/darkroomengineering/lenis) smooth scroll |
| **Icons** | [Font Awesome 6](https://fontawesome.com/) + [Lucide](https://lucide.dev/) |
| **Fonts** | Inter, Chakra Petch, JetBrains Mono (via Google Fonts) |

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or pnpm / yarn / bun)

### Installation

```bash
# Clone the repository
git clone https://github.com/FullstackRakibul/calcifer.shop.git
cd calcifer.shop

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server starts at **http://localhost:3000** with hot-reload enabled.

### Build for Production

```bash
# Build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
calcifer.shop/
├── app/
│   ├── assets/css/         # Tailwind config + design tokens
│   ├── components/         # Vue components (AppHeader, ThemeTray, ScrollSpy, etc.)
│   │   └── ui/             # shadcn-vue UI primitives
│   ├── composables/        # Vue composables (useScrollToHash, etc.)
│   ├── lib/                # Utility functions
│   ├── pages/              # File-based routing
│   │   ├── index.vue       # Homepage — scrollytelling product showcase
│   │   ├── docs/           # Product documentation (Forge, OrderMint, UserMatrix)
│   │   ├── about.vue       # About page
│   │   ├── contact.vue     # Contact page
│   │   └── ...
│   ├── plugins/            # Nuxt plugins (Lenis, etc.)
│   ├── stores/             # Pinia stores (theme, layout, products, cart)
│   └── app.vue             # Root component
├── public/                 # Static assets (favicon, videos, images)
├── server/                 # Nitro server config
├── nuxt.config.ts          # Nuxt configuration
├── components.json         # shadcn-vue configuration
├── package.json
└── tsconfig.json
```

---

## Features

### 🎨 Dynamic Theme System
- **Dark / Light mode** toggle with smooth transitions
- **6 accent color presets** (Fire Orange, Ember Red, Frost Blue, Amethyst, Emerald, Rose Gold)
- Persisted to `localStorage` — no flash on reload
- Cute animated **Calcifer floating button** to open the theme tray

### 📖 Documentation Hub
- Full product documentation for Forge, OrderMint, and UserMatrix
- **Scroll Spy** sidebar with active section highlighting
- Hash-based navigation with sticky header offset compensation
- Responsive layout with collapsible sidebar on mobile

### ⚡ Performance
- Nuxt 3 SSR with automatic code splitting
- Lenis smooth scroll with 60fps rendering
- Tailwind CSS 4 with oklch color space for perceptually uniform colors
- Optimized font loading via Google Fonts preconnect

---

## Security

### Application Security

| Measure | Implementation |
|---------|---------------|
| **Content Security** | Strict CSP headers via Nuxt/Nitro configuration |
| **XSS Prevention** | Vue 3 auto-escaping + no `v-html` with user input |
| **Dependency Auditing** | Regular `npm audit` — zero known vulnerabilities |
| **HTTPS Enforcement** | All production traffic served over TLS |
| **Secrets Management** | Environment variables via `.env` files (git-ignored) |

### Data Privacy
- **No tracking cookies** — theme preferences stored in `localStorage` only
- **No analytics SDKs** — zero third-party data collection
- **No server-side user data** — static site with no database
- **GDPR-ready** — no personal data collected or processed

### Reporting Vulnerabilities

If you discover a security vulnerability, please report it responsibly:

1. **Do not** open a public GitHub issue.
2. Email **security@calcifer.shop** with a detailed description.
3. Include steps to reproduce, impact assessment, and suggested fixes if possible.
4. We will acknowledge receipt within **48 hours** and provide a resolution timeline.

---

## Environment Variables

Create a `.env` file in the project root (never commit this file):

```env
# ── Base URL ──────────────────────────────
NUXT_PUBLIC_SITE_URL=https://calcifer.shop

# ── API (if applicable) ──────────────────
NUXT_API_BASE_URL=https://api.calcifer.shop
NUXT_API_SECRET=your-api-secret-here

# ── Analytics (optional) ─────────────────
NUXT_PUBLIC_GA_ID=
```

> **Note:** The `.env` file is git-ignored by default. Use `.env.example` as a template.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot-reload on port 3000 |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build locally |
| `npm run generate` | Generate static site |
| `npm run postinstall` | Prepare Nuxt (auto-runs after `npm install`) |

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please ensure your code:
- Passes TypeScript type checking
- Follows the existing code style and design system
- Includes appropriate documentation for new features

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with 🔥 by [Rakibul H. Rabbi](https://github.com/FullstackRakibul)**

*Calcifer — systems that burn bright so your business doesn't burn out.*

</div>
