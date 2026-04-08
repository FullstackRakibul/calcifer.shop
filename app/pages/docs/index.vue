<template>
  <div class="min-h-screen bg-background">

    <!-- ═══════════════════════════════════════════
         HERO
         ═══════════════════════════════════════════ -->
    <section class="relative pt-32 pb-20 px-6 overflow-hidden">
      <!-- Fire Glow -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/4 left-1/3 w-125 h-125 bg-fire-500/8 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-ember/6 rounded-full blur-[100px]"></div>
      </div>

      <!-- Noise Texture -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none"
        style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');">
      </div>

      <div class="relative z-10 max-w-4xl mx-auto text-center">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fire-500/30 bg-fire-500/5 text-fire-400 text-sm font-medium mb-6 opacity-0 animate-fade-in-down">
          <span class="w-2 h-2 rounded-full bg-fire-400 animate-pulse"></span>
          Documentation
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6 opacity-0 animate-fade-in-down"
          style="animation-delay: 0.1s">
          Documentation that<br />
          <span class="text-fire-400">respects your time.</span>
        </h1>

        <p class="text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-down"
          style="animation-delay: 0.2s">
          This is not just documentation — it's a map. A clear path through the system,
          so you can understand, extend, and master it.
        </p>

        <!-- Search Bar -->
        <div class="max-w-xl mx-auto opacity-0 animate-fade-in-up" style="animation-delay: 0.3s">
          <div class="relative">
            <input type="text" v-model="searchQuery" placeholder="Search documentation..."
              class="w-full px-5 py-4 pl-12 bg-card/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-fire-500/50 focus:border-fire-500/50 transition-all backdrop-blur-sm" />
            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">🔍</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         QUICK START CARDS
         ═══════════════════════════════════════════ -->
    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink v-for="(card, idx) in quickStart" :key="idx" :to="card.link"
            class="group relative p-6 rounded-2xl border border-border/50 bg-card/30 hover:border-fire-500/30 hover:-translate-y-1 transition-all duration-300 block">
            <div
              class="absolute inset-0 rounded-2xl bg-linear-to-b from-fire-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>
            <div class="relative z-10">
              <div class="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{{ card.icon }}</div>
              <h3 class="text-lg font-bold text-foreground mb-2">{{ card.title }}</h3>
              <p class="text-sm text-muted-foreground leading-relaxed mb-4">{{ card.description }}</p>
              <div class="flex items-center gap-2 text-fire-400 text-sm font-medium group-hover:gap-3 transition-all">
                {{ card.cta }}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         PRODUCT DOCUMENTATION
         ═══════════════════════════════════════════ -->
    <section class="py-20 px-6 bg-card/20">
      <div class="max-w-6xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Product Docs</p>
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">
          Deep-dive into each <span class="text-fire-400">product.</span>
        </h2>
        <p class="text-lg text-muted-foreground mb-12 max-w-2xl">
          Each product has its own comprehensive documentation — architecture, API references,
          guides, and real-world examples.
        </p>

        <div class="grid md:grid-cols-3 gap-8">
          <NuxtLink v-for="(product, idx) in productDocs" :key="idx" :to="product.link"
            class="group relative p-8 rounded-2xl border border-border/50 bg-background glow-card hover:-translate-y-2 transition-all duration-500 block">
            <div
              class="absolute inset-0 rounded-2xl bg-linear-to-b from-fire-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>
            <div class="relative z-10">
              <div class="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 ember-float"
                :style="{ animationDelay: `${idx * 0.5}s` }">{{ product.icon }}</div>
              <div
                class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-fire-500/10 text-fire-400 text-xs font-bold mb-4">
                {{ product.type }}
              </div>
              <h3 class="text-xl font-bold mb-2">{{ product.name }}</h3>
              <p class="text-sm text-fire-400/80 font-medium mb-3">{{ product.tagline }}</p>
              <ul class="space-y-2 mb-6">
                <li v-for="(doc, di) in product.sections" :key="di"
                  class="text-muted-foreground text-xs flex items-center gap-2">
                  <span class="text-fire-400/50">→</span> {{ doc }}
                </li>
              </ul>
              <div class="flex items-center gap-2 text-fire-400 text-sm font-medium group-hover:gap-3 transition-all">
                View Docs
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         FULL SITEMAP
         ═══════════════════════════════════════════ -->
    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Full Reference</p>
        <h2 class="text-3xl sm:text-4xl font-bold mb-12">
          Complete <span class="text-fire-400">sitemap.</span>
        </h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(section, idx) in siteMap" :key="idx">
            <h3 class="font-bold text-foreground mb-4 flex items-center gap-2">
              <span class="text-lg">{{ section.icon }}</span>
              {{ section.title }}
            </h3>
            <ul class="space-y-2">
              <li v-for="(item, ii) in section.items" :key="ii">
                <NuxtLink :to="item.link"
                  class="text-sm text-muted-foreground hover:text-fire-400 transition-colors flex items-center gap-2 py-1">
                  <span class="text-fire-400/30">→</span>
                  {{ item.label }}
                  <span v-if="item.badge"
                    class="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-fire-500/10 text-fire-400">{{
                      item.badge }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         DOCUMENTATION PHILOSOPHY
         ═══════════════════════════════════════════ -->
    <section class="py-20 px-6 bg-card/20">
      <div class="max-w-3xl mx-auto text-center">
        <div class="relative">
          <div class="absolute inset-0 pointer-events-none">
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fire-500/6 rounded-full blur-[100px]">
            </div>
          </div>
          <div class="relative z-10">
            <div class="text-5xl mb-6">📖</div>
            <h2 class="text-3xl sm:text-4xl font-black mb-6 text-balance">
              Good documentation doesn't<br />explain everything.
            </h2>
            <p class="text-xl text-fire-400 font-semibold mb-8">
              It removes the need to ask.
            </p>
            <p class="text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Every page is written to get you unblocked — not to impress you with jargon.
              If something doesn't make sense, that's our problem to fix, not yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')

const quickStart = [
  {
    icon: '🚀',
    title: 'Getting Started',
    description: 'Installation guide, system requirements, and your first setup walkthrough. Go from zero to running in under 10 minutes.',
    cta: 'Start Here',
    link: '/docs/getting-started',
  },
  {
    icon: '🧠',
    title: 'Core Concepts',
    description: 'Architecture overview, module system, data flow, API design patterns, and the authentication & authorization model.',
    cta: 'Learn',
    link: '/docs/core-concepts',
  },
  {
    icon: '🧩',
    title: 'Features & Modules',
    description: 'Dashboard systems, reporting engines, user management, workflow systems — every module documented in depth.',
    cta: 'Explore',
    link: '/docs/modules',
  },
  {
    icon: '🔌',
    title: 'API Reference',
    description: 'Base URLs, authentication with JWT, endpoint groups by feature, and request/response examples for every route.',
    cta: 'Browse API',
    link: '/docs/api',
  },
  {
    icon: '⚡',
    title: 'Advanced Guides',
    description: 'Custom module development, extending services, event-driven architecture, and performance optimization strategies.',
    cta: 'Go Deeper',
    link: '/docs/advanced',
  },
  {
    icon: '🚢',
    title: 'Deployment',
    description: 'Local setup, production deployment, Docker and CI/CD configurations, monitoring, and troubleshooting guides.',
    cta: 'Deploy',
    link: '/docs/deployment',
  },
]

const productDocs = [
  {
    icon: '🔥',
    name: 'Calcifer.Forge',
    type: 'Architecture Engine',
    tagline: 'Build software that knows its value.',
    link: '/docs/forge',
    sections: [
      'Architecture & Module System',
      'Licensing Engine Deep-Dive',
      'Feature Gating with Attributes',
      'Seat Control & Machine Binding',
      'Clean Architecture Patterns',
      'API Endpoint Reference',
    ],
  },
  {
    icon: '🛒',
    name: 'Calcifer.OrderMint',
    type: 'Business System',
    tagline: 'From inbox chaos to structured business.',
    link: '/docs/ordermint',
    sections: [
      'Order Processing Pipeline',
      'Facebook Messenger Integration',
      'Invoice & Ledger System',
      'Real-Time Reporting',
      'Customer Management',
      'Webhook Configuration',
    ],
  },
  {
    icon: '🔐',
    name: 'Calcifer.UserMatrix',
    type: 'Access Control',
    tagline: 'Control access. Everywhere.',
    link: '/docs/usermatrix',
    sections: [
      'Role & Permission Architecture',
      'Feature-Level Access Control',
      'Multi-System Integration',
      'Audit Logging System',
      'SSO & Identity Federation',
      'API Security Patterns',
    ],
  },
]

const siteMap = [
  {
    icon: '🏠',
    title: 'Main Pages',
    items: [
      { label: 'Home', link: '/' },
      { label: 'About', link: '/about' },
      { label: 'Contact', link: '/contact' },
      { label: 'FAQ', link: '/faq' },
    ],
  },
  {
    icon: '📦',
    title: 'Products',
    items: [
      { label: 'Calcifer.Forge', link: '/products/forge' },
      { label: 'Calcifer.OrderMint', link: '/products/ordermint' },
      { label: 'Calcifer.UserMatrix', link: '/products/usermatrix' },
    ],
  },
  {
    icon: '📚',
    title: 'Documentation',
    items: [
      { label: 'Getting Started', link: '/docs/getting-started' },
      { label: 'Core Concepts', link: '/docs/core-concepts' },
      { label: 'Features & Modules', link: '/docs/modules' },
      { label: 'API Reference', link: '/docs/api', badge: 'New' },
      { label: 'Advanced Guides', link: '/docs/advanced' },
      { label: 'Deployment', link: '/docs/deployment' },
    ],
  },
  {
    icon: '🔥',
    title: 'Forge Docs',
    items: [
      { label: 'Forge Overview', link: '/docs/forge' },
      { label: 'Licensing Engine', link: '/docs/forge#licensing' },
      { label: 'Feature Gating', link: '/docs/forge#gating' },
      { label: 'Architecture', link: '/docs/forge#architecture' },
    ],
  },
  {
    icon: '🛒',
    title: 'OrderMint Docs',
    items: [
      { label: 'OrderMint Overview', link: '/docs/ordermint' },
      { label: 'Order Pipeline', link: '/docs/ordermint#pipeline' },
      { label: 'Reporting', link: '/docs/ordermint#reporting' },
      { label: 'Integrations', link: '/docs/ordermint#integrations' },
    ],
  },
  {
    icon: '🔐',
    title: 'UserMatrix Docs',
    items: [
      { label: 'UserMatrix Overview', link: '/docs/usermatrix' },
      { label: 'Roles & Permissions', link: '/docs/usermatrix#roles' },
      { label: 'Audit System', link: '/docs/usermatrix#audit' },
      { label: 'SSO Integration', link: '/docs/usermatrix#sso' },
    ],
  },
  {
    icon: '📜',
    title: 'Legal',
    items: [
      { label: 'Privacy Policy', link: '/privacy' },
      { label: 'Terms of Service', link: '/terms' },
    ],
  },
  {
    icon: '🔧',
    title: 'Troubleshooting',
    items: [
      { label: 'Common Issues', link: '/docs/troubleshooting' },
      { label: 'Debugging Tips', link: '/docs/troubleshooting#debugging' },
      { label: 'Logs & Monitoring', link: '/docs/troubleshooting#monitoring' },
    ],
  },
  {
    icon: '🔥',
    title: 'Forge Docs',
    items: [
      { label: 'Forge Overview', link: '/docs/forge' },
      { label: 'Licensing Engine', link: '/docs/forge#licensing' },
      { label: 'Feature Gating', link: '/docs/forge#gating' },
      { label: 'Seat Control', link: '/docs/forge#seats' },
      { label: 'Architecture', link: '/docs/forge#architecture' },
      { label: 'Configuration', link: '/docs/forge#configuration' },
      { label: 'FAQ', link: '/docs/forge#faq' }
    ]
  },
  {
    icon: '🛒',
    title: 'OrderMint Docs',
    items: [
      { label: 'OrderMint Overview', link: '/docs/ordermint' },
      { label: 'Order Pipeline', link: '/docs/ordermint#pipeline' },
      { label: 'Facebook Integration', link: '/docs/ordermint#facebook-integration' },
      { label: 'Invoice & Ledger', link: '/docs/ordermint#invoicing' },
      { label: 'Reporting', link: '/docs/ordermint#reporting' },
      { label: 'Webhooks', link: '/docs/ordermint#webhooks' }
    ]
  },
  {
    icon: '🔐',
    title: 'UserMatrix Docs',
    items: [
      { label: 'UserMatrix Overview', link: '/docs/usermatrix' },
      { label: 'Roles & Permissions', link: '/docs/usermatrix#roles' },
      { label: 'Feature‑Level Access', link: '/docs/usermatrix#feature-access' },
      { label: 'Audit System', link: '/docs/usermatrix#audit' },
      { label: 'SSO Federation', link: '/docs/usermatrix#sso' },
      { label: 'API Security', link: '/docs/usermatrix#security' },
      { label: 'Permission Matrix', link: '/docs/usermatrix#permission-matrix' }
    ]
  }
]

useHead({
  title: 'Documentation — Calcifer.Shop',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive documentation for Calcifer.Shop products. Getting started guides, API references, architecture deep-dives, and deployment instructions.',
    },
  ],
})
</script>

<style scoped>
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}
</style>