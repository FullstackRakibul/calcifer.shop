# Calcifer.shop — Claude Brain

> "The Hearth of Digital Business." Calcifer.shop is the public marketing + light-app surface for the **Calcifer ecosystem** — a suite of .NET 8 developer-tooling products (Forge, OrderMint, UserMatrix). This repo is the **Nuxt 4 storefront**, not the .NET products themselves.

This file is the project brief for every agent (main Claude + any subagent). Read it before touching code.

---

## 1. One-paragraph summary

Calcifer.shop is a **Nuxt 4 + Vue 3.5 + Tailwind v4** single-brand storefront with three product marketing pages, three docs pages, a checkout flow, a mock auth + dashboard area, and a runtime-switchable fire-themed dark-mode design system driven by OKLCH CSS variables in a Pinia store. It originated as a multi-vendor marketplace ("RH Business Club") and was **stripped down and re-skinned** in 2026 — see [CALCIFER_TRANSFORMATION.md](CALCIFER_TRANSFORMATION.md) and [IMPLEMENTATION_CHECKLIST.md](IMPLEMENTATION_CHECKLIST.md) for the cut-list. Some legacy stores (`cart.ts`, `clipCart.ts`, `checkout.ts`) and the older single-product checkout flow predate the multi-product pivot and may need rationalization.

---

## 2. Tech stack

| Layer | Choice |
|---|---|
| Framework | **Nuxt 4.4** (`srcDir: 'app/'`, SSR on, `experimental.appManifest: false`) |
| UI | Vue 3.5, **shadcn-nuxt** (componentDir `@/components/ui`), **reka-ui** 2.7 (the renamed radix-vue — both are installed, prefer reka-ui going forward) |
| Styling | **Tailwind CSS v4** via `@tailwindcss/vite` plugin (not the PostCSS one), `tailwindcss-animate` |
| State | **Pinia** (`@pinia/nuxt`) |
| Icons | `lucide-vue-next` re-exported from [app/composables/useIcons.ts](app/composables/useIcons.ts), `@hugeicons/vue` + `@hugeicons/core-free-icons`, Font Awesome (CSS only, for brand marks) |
| Scroll | **Lenis** (`lenis.client.ts` plugin attaches to `<html>`) |
| Fonts | Inter (body), Chakra Petch (heading display), JetBrains Mono (code) — loaded via Google Fonts `<link>` in [nuxt.config.ts](nuxt.config.ts) |
| Theme | Dark-mode-first; `<html class="dark">` baked in; runtime accent swapping via [app/stores/theme.ts](app/stores/theme.ts) writing CSS vars |

No backend, no API, no database. `server/` is empty except for a tsconfig.

---

## 3. Directory map

```
app/
├── app.vue                  ← root layout (header → main → footer + FloatingThemeButton + Lenis init)
├── error.vue                ← global error page
├── assets/
│   ├── css/tailwind.css    ← design tokens (@theme block) — fire scale, OKLCH, radii
│   ├── img/  video/
├── components/
│   ├── AppHeader.vue        ← sticky, scroll-blur, products dropdown, mobile menu, auth-aware dashboard/login icon
│   ├── AppFooter.vue
│   ├── CartDropdown.vue
│   ├── FloatingThemeButton.vue   ← opens ThemeTray
│   ├── ThemeTray.vue             ← dark toggle + accent picker (reads colorOptions from theme store)
│   ├── PaymentSuccessModal.vue
│   └── ui/                       ← shadcn primitives: badge, button, card, dialog, input, popover, separator, sheet, skeleton, textarea
├── composables/
│   ├── useIcons.ts          ← single source of truth for lucide imports — add new icons HERE, don't import lucide-vue-next directly in pages
│   ├── useHugeIcons.ts
│   ├── useLayout.ts
│   ├── useProducts.ts
│   └── useSmoothScroll.ts
├── lib/utils.ts             ← cn() helper (clsx + tailwind-merge)
├── pages/
│   ├── index.vue            ← 8-section scrollytelling home
│   ├── about.vue  contact.vue  faq.vue  privacy.vue  shipping.vue  terms.vue
│   ├── checkout.vue         ← legacy single-product checkout (predates multi-product pivot)
│   ├── login.vue            ← 2-step (email → password) mock auth, uses authStore.login()
│   ├── products/
│   │   ├── forge.vue  ordermint.vue  usermatrix.vue   ← marketing pages
│   ├── docs/
│   │   ├── index.vue  forge.vue  ordermint.vue  usermatrix.vue
│   └── dashboard/
│       ├── index.vue            ← 3 nav cards: Create Invoice / Visitor Details / Project-Package List
│       └── createInvoice.vue    ← STUB (single <h1>) — needs implementation
├── plugins/
│   ├── lenis.client.ts      ← exposes $Lenis + $lenis ref
│   ├── pinia.ts             ← empty
│   └── ssr-width.client.ts
└── stores/
    ├── auth.ts              ← mock JWT in localStorage (key: isLoggedIn / token / user). Replace before prod.
    ├── theme.ts             ← darkMode + primaryColor; persists to localStorage key "calcifer-theme"
    ├── layout.ts            ← isMobile, mobileMenuOpen, headerScrolled (>50px)
    ├── products.ts          ← single flagship DevProduct + tiered cart (solo/studio/enterprise)
    ├── cart.ts  clipCart.ts  checkout.ts   ← LEGACY — verify before extending
```

---

## 4. The 3-product ecosystem (so agents know what these are)

| Product | Tagline | Lives at |
|---|---|---|
| **Calcifer.Forge** | Architecture Engine for .NET — licensing, feature-gating, seat control, dynamic modules | `/products/forge`, `/docs/forge` |
| **Calcifer.OrderMint** | Social Commerce Business System | `/products/ordermint`, `/docs/ordermint` |
| **Calcifer.UserMatrix** | Universal Access & Identity Control | `/products/usermatrix`, `/docs/usermatrix` |

The flagship data model is in [app/stores/products.ts](app/stores/products.ts) as the `DevProduct` interface — anything you scaffold for a new product page should match that shape (pillars, specs, flow, comparison, codeSnippet, architecture, roadmap, testimonials, tiers).

---

## 5. Page design system (read before adding a page)

### Layout shell
Every page renders inside [app/app.vue](app/app.vue) → `AppHeader` → `<main><NuxtPage/><AppFooter/></main>` → `FloatingThemeButton`. To opt out of the shared shell (e.g. focused modals), set `definePageMeta({ layout: false })` like [login.vue](app/pages/login.vue) does.

### Section pattern
Marketing pages follow a **scroll-narrative** rhythm: hero → grid features → specs → gallery → ecosystem → testimonials → CTA. Use full-width `<section>` blocks with `max-w-7xl mx-auto px-6 sm:px-8` containers.

### Color tokens
Reference design tokens **by semantic var**, not by raw hex/oklch:
- Surfaces: `bg-background`, `bg-card`, `bg-popover`, `bg-muted`, `bg-secondary`
- Text: `text-foreground`, `text-muted-foreground`, `text-accent`, `text-primary-foreground`
- Brand fire scale: `bg-fire-500`, `text-fire-400`, `border-fire-500/30` — these are the orange brand accents
- Borders: `border-border`
- Never hard-code `text-orange-500` etc. — those won't theme-swap when the user changes the accent in `ThemeTray`.

### Typography
- Headings: add class `heading-font` (Chakra Petch) and `font-black tracking-tight` for display weights
- Body: Inter via `body` default
- Code: `font-mono` for JetBrains Mono

### Icons — single source of truth
Lucide icons MUST be imported from [app/composables/useIcons.ts](app/composables/useIcons.ts), not directly from `lucide-vue-next`. If the icon you need isn't re-exported there, **add it to useIcons.ts first**, then import it. HugeIcons use `<HugeiconsIcon :icon="ArrowRight01Icon" :size="18" />` from `@hugeicons/vue` + `@hugeicons/core-free-icons`. Font Awesome is loaded globally as a CSS file — use `<i class="fab fa-github">` only for third-party brand marks.

---

## 6. Navigation convention (important — confirmed user preference)

**Prefer `<NuxtLink>` over `@click="navigateTo(...)"` for anything that behaves like a link.** NuxtLink prefetches, renders a real `<a>` (SEO + a11y + middle-click + right-click "open in new tab"), and supports `active-class`. Reserve `navigateTo()` / `router.push()` for **programmatic** redirects after an event (form submit, auth check, permission validation).

```vue
<!-- DO: regular nav -->
<NuxtLink
  to="/dashboard/createInvoice"
  class="flex items-center gap-2 px-4 py-2"
  active-class="bg-fire-500/10 text-fire-400"
>
  <Plus class="w-4 h-4" /> <span>Create Invoice</span>
</NuxtLink>

<!-- DO: programmatic only -->
<form @submit.prevent="async () => { await save(); navigateTo('/dashboard') }">…</form>
```

For **iterated nav** (sidebar, footer columns, breadcrumbs), define the array in `<script setup>` and `v-for` over `<NuxtLink>`:

```ts
const navItems = [
  { label: 'Overview',       to: '/dashboard',                icon: LayoutDashboard },
  { label: 'Create Invoice', to: '/dashboard/createInvoice',  icon: Plus },
  { label: 'Clients',        to: '/dashboard/clients',        icon: Users },
  { label: 'Settings',       to: '/dashboard/settings',       icon: Settings },
]
```

If you genuinely must use a clickable non-anchor (e.g. a card whose whole body navigates), wrap the card in `<NuxtLink>` and remove the underline with `class="block no-underline"` — don't fall back to `role="button" tabindex="0"` unless there is no anchor semantics at all. The existing [dashboard/index.vue](app/pages/dashboard/index.vue) cards use `@click="navigateTo(...)"` and would be more correct as wrapped `<NuxtLink>`.

---

## 7. State conventions

- **Auth** is mocked. `authStore.login(email, password)` accepts anything and writes a fake `demo_*` token to localStorage. Any page that requires auth pattern-matches [dashboard/index.vue](app/pages/dashboard/index.vue): `onMounted(() => { authStore.checkAuth(); if (!authStore.isLoggedIn) router.push('/login') })`. Don't invent middleware until there's a real backend.
- **Theme** persistence: localStorage key `calcifer-theme`, shape `{ darkMode: boolean, primaryColor: string }`. Loaded in `app.vue` `onMounted` *after* Pinia is ready — don't move it earlier or accent flashes.
- **Cart**: `products.ts` cart is `{ tier, quantity }` for the flagship Calcifer template. The older `cart.ts` and `clipCart.ts` are leftover from the marketplace era — don't extend them without checking with the user.

---

## 8. Dev commands

```bash
npm install           # postinstall runs `nuxt prepare`
npm run dev           # nuxt dev --host  (binds 0.0.0.0:3000 — accessible on LAN)
npm run build         # production build
npm run preview       # serve .output/
npm run generate      # static export
```

Docker: `compose.yaml` + `Dockerfile` exist but are minimal — verify before relying on them.

---

## 9. Conventions for any agent touching this repo

1. **Use [Edit](https://) on existing files first.** Don't drop new `*.md`, `README`, or "summary" files into the repo — extend `CLAUDE.md` or one of the existing transformation docs.
2. **No comments on obvious code.** The codebase deliberately omits docstrings; well-named symbols + this brain file carry the explanation.
3. **Don't import lucide-vue-next directly** in pages/components. Always go through `@/composables/useIcons`.
4. **Don't hard-code colors.** Use the semantic CSS vars / fire-* scale so theme switching works.
5. **`<NuxtLink>` for navigation**, `navigateTo()` only for post-action programmatic redirects (see §6).
6. **Use `@/` or `~/` path aliases**, both resolve to `app/` thanks to Nuxt 4 `srcDir`.
7. **Don't add new Pinia stores** when an existing one fits — `cart.ts` / `clipCart.ts` / `checkout.ts` are already on a cleanup short-list; don't add more legacy.
8. **Mobile breakpoint is `lg` (1024px)** in [stores/layout.ts](app/stores/layout.ts), not Tailwind's `md`. The header toggles its mobile menu at `md` though — keep this inconsistency in mind when wiring responsive UI.
9. **`reka-ui` > `radix-vue`.** Both are installed during the migration; new code should reach for reka-ui.
10. When unsure where a feature belongs, the answer is usually **`app/pages/<feature>/index.vue` + a composable, not a new store.**

---

## 10. Known incomplete work

- [app/pages/dashboard/createInvoice.vue](app/pages/dashboard/createInvoice.vue) — stub only (an `<h1>`). Needs form, list, persistence.
- `/dashboard/visitor-details` and `/dashboard/project-packages` are linked from the dashboard cards but **the page files don't exist** — clicking these routes will 404.
- `radix-vue` and `reka-ui` both installed → pick one and remove the other eventually.
- Legacy stores `cart.ts`, `clipCart.ts`, `checkout.ts` may overlap with `products.ts` cart logic.
- `useTheme.ts` composable file is empty — either fill it or delete it.

---

## 11. For subagents

If you are an Agent tool invocation (Explore, general-purpose, Plan, etc.), this file is your full project context. Anchor on:
- **What this repo is**: §1, §4 (it is a *marketing storefront* for .NET products, not the products themselves)
- **Where things live**: §3
- **Page/visual style**: §5
- **Navigation style**: §6 (NuxtLink unless programmatic)
- **What not to invent**: §9, §10

The user is a full-stack engineer (Vue/Nuxt frontend + .NET backend). Keep explanations concise, framework-aware, and skip Vue 101.
