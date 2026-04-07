import { defineStore } from "pinia"
import { ref, computed } from "vue"

/**
 * Calcifer.shop — Developer Tools Marketplace
 * Product data model for templates, packages, and starter kits
 */
export interface DevProduct {
  id: number
  name: string
  brand: string
  tagline: string
  description: string
  longDescription: string

  // Pricing tiers
  tiers: {
    solo: number
    studio: number
    enterprise: number
  }

  techStack: string[]

  // Capabilities / pillars
  pillars: Array<{
    icon: string
    title: string
    description: string
  }>

  // Tech specifications
  specs: Record<string, string>

  // How-it-works steps
  flow: Array<{
    step: number
    label: string
    detail: string
  }>

  // Comparison: others vs calcifer
  comparison: {
    others: string[]
    calcifer: string[]
  }

  // API code snippet
  codeSnippet: {
    method: string
    endpoint: string
    body: string
    response: string
  }

  // Architecture modules
  architecture: Array<{
    name: string
    description: string
  }>

  // Roadmap
  roadmap: Array<{
    title: string
    description: string
    status: 'done' | 'in-progress' | 'planned'
  }>

  // Testimonials / Social proof
  testimonials: Array<{
    quote: string
    author: string
    role: string
  }>

  // Media
  heroImage: string

  // Delivery
  estimatedDelivery: string

  // Links
  githubUrl: string
  nugetUrl: string
  docsUrl: string
}

interface CalciferCart {
  tier: 'solo' | 'studio' | 'enterprise'
  quantity: number
}

export const useProductStore = defineStore("products", () => {
  // The Flagship Product — Calcifer .NET 8 Template
  const product = ref<DevProduct>({
    id: 1,
    name: "Calcifer",
    brand: "Calcifer.shop",
    tagline: "Control Who Uses Your Software. Not Just What It Does.",
    description: "A .NET 8 microservice template with built-in licensing, feature gating, and seat control — so you can ship SaaS like a product, not just code.",
    longDescription: "Calcifer is not just a template — it's the missing layer between your software and your business model. Built-in authentication, licensing engine, feature gating, and seat management let you monetize from day one.",

    tiers: {
      solo: 49,
      studio: 149,
      enterprise: 499,
    },

    techStack: [".NET 8", "C#", "Entity Framework Core", "JWT", "ASP.NET Identity", "Minimal APIs", "Clean Architecture"],

    pillars: [
      {
        icon: "🔐",
        title: "Authentication & Authorization",
        description: "JWT + ASP.NET Identity with role hierarchy, policy-based authorization, and resource-level guards. Production-ready from the first commit.",
      },
      {
        icon: "🪪",
        title: "Licensing Engine",
        description: "Create, validate, activate, and expire licenses. Per-key control with machine binding. No third-party dependency.",
      },
      {
        icon: "🧩",
        title: "Feature Gating",
        description: "Lock features behind license tiers with [RequireFeature] attributes. Control access at the endpoint level — not just the role level.",
      },
      {
        icon: "💺",
        title: "Seat Control",
        description: "Limit concurrent activations per license key. Bind to machine IDs. Enforce your pricing model at the infrastructure level.",
      },
      {
        icon: "🌐",
        title: "Dynamic Modules",
        description: "Feature-based architecture with dynamic route registration. Add modules without touching the core. Scale your codebase like a product team.",
      },
    ],

    specs: {
      "Framework": ".NET 8 LTS",
      "Architecture": "Clean Architecture + Vertical Slices",
      "Auth": "JWT Bearer + ASP.NET Identity",
      "Database": "EF Core (SQL Server / PostgreSQL)",
      "API Style": "Minimal APIs + Feature Modules",
      "License Model": "Key-based with machine binding",
      "Feature Gating": "Attribute-driven [RequireFeature]",
      "Seeding": "Auto-seed Roles, Admin, Reference Data",
      "Testing": "xUnit + Integration Tests",
      "Docker": "Dockerfile + Compose included",
    },

    flow: [
      { step: 1, label: "Login", detail: "User authenticates via JWT" },
      { step: 2, label: "License Validate", detail: "System checks active license key" },
      { step: 3, label: "Feature Gate", detail: "Endpoint checks required features" },
      { step: 4, label: "Access Granted", detail: "User accesses the protected resource" },
    ],

    comparison: {
      others: [
        "Just CRUD endpoints",
        "Basic auth only",
        "No business layer",
        "No monetization path",
        "Rebuild for every project",
      ],
      calcifer: [
        "Business-ready API from day one",
        "Auth + Licensing + Feature Gates built-in",
        "Monetization infrastructure included",
        "Modular, scalable architecture",
        "Ship products — not just code",
      ],
    },

    codeSnippet: {
      method: "POST",
      endpoint: "/api/license/activate",
      body: JSON.stringify({
        licenseKey: "LIC-PRO-XXXX-XXXX",
        machineId: "DESKTOP-A1B2C3",
      }, null, 2),
      response: JSON.stringify({
        activated: true,
        tier: "professional",
        features: ["analytics", "export", "multi-tenant"],
        seatsRemaining: 4,
        expiresAt: "2027-04-01T00:00:00Z",
      }, null, 2),
    },

    architecture: [
      { name: "Core", description: "Entities, interfaces, domain logic" },
      { name: "Application", description: "Use cases, DTOs, validators" },
      { name: "Infrastructure", description: "EF Core, Identity, external services" },
      { name: "API", description: "Minimal API endpoints, middleware, filters" },
      { name: "Modules", description: "Feature modules with self-contained routes" },
      { name: "Licensing", description: "License engine, activation, gating" },
    ],

    roadmap: [
      { title: "RSA License Keys", description: "Cryptographically signed offline-capable license validation", status: "in-progress" },
      { title: "Redis Caching", description: "Distributed caching layer for license and session state", status: "planned" },
      { title: "Multi-Tenant System", description: "Tenant isolation with shared or dedicated databases", status: "planned" },
      { title: "Plugin Modules", description: "Hot-loadable feature plugins with dependency injection", status: "planned" },
    ],

    testimonials: [
      {
        quote: "Calcifer saved us 3 weeks of boilerplate. The licensing engine alone is worth the price — we integrated it into our ERP product in 2 days.",
        author: "Arif Rahman",
        role: "CTO, TechNova Solutions (Dhaka)",
      },
      {
        quote: "Finally, a .NET template that understands business logic. Feature gating with attributes is elegant. This is how enterprise software should start.",
        author: "Priya Sharma",
        role: "Senior Architect, InfoBridge (Bangalore)",
      },
      {
        quote: "We were building the same auth + license system for every client project. Calcifer made that a one-time setup. Our team ships 40% faster now.",
        author: "Minh Tran",
        role: "Lead Developer, VietSoft (Ho Chi Minh City)",
      },
    ],

    heroImage: "/images/calcifer-hero.png",
    estimatedDelivery: "Instant — digital delivery via email",

    githubUrl: "https://github.com/calcifer-shop/calcifer",
    nugetUrl: "https://www.nuget.org/packages/Calcifer",
    docsUrl: "https://docs.calcifer.shop",
  })

  // Cart — simplified: tier + quantity
  const cart = ref<CalciferCart>(getCartFromStorage())

  // Computed
  const cartQuantity = computed(() => cart.value.quantity)

  const selectedTierPrice = computed(() => {
    return product.value.tiers[cart.value.tier]
  })

  const cartTotal = computed(() => {
    return selectedTierPrice.value * cart.value.quantity
  })

  const cartItemsCount = computed(() => cart.value.quantity)

  // Actions
  function getCartFromStorage(): CalciferCart {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("calcifer-cart")
      return stored ? JSON.parse(stored) : { tier: 'solo', quantity: 0 }
    }
    return { tier: 'solo', quantity: 0 }
  }

  function saveCartToStorage() {
    if (typeof window !== "undefined") {
      localStorage.setItem("calcifer-cart", JSON.stringify(cart.value))
    }
  }

  function addToCart(tier: 'solo' | 'studio' | 'enterprise' = 'solo', quantity: number = 1) {
    cart.value.tier = tier
    cart.value.quantity += quantity
    saveCartToStorage()
  }

  function removeFromCart(quantity: number = 1) {
    cart.value.quantity = Math.max(0, cart.value.quantity - quantity)
    saveCartToStorage()
  }

  function updateCartQuantity(quantity: number) {
    cart.value.quantity = Math.max(0, quantity)
    saveCartToStorage()
  }

  function setTier(tier: 'solo' | 'studio' | 'enterprise') {
    cart.value.tier = tier
    saveCartToStorage()
  }

  function clearCart() {
    cart.value = { tier: 'solo', quantity: 0 }
    saveCartToStorage()
  }

  return {
    // State
    product,
    cart,

    // Computed
    cartQuantity,
    selectedTierPrice,
    cartTotal,
    cartItemsCount,

    // Actions
    addToCart,
    removeFromCart,
    updateCartQuantity,
    setTier,
    clearCart,
  }
})
