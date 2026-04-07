<template>
  <div class="min-h-screen bg-background">

    <!-- ═══════════════════════════════════════════
         1. HERO — The Gate
         ═══════════════════════════════════════════ -->
    <section class="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <!-- Fire Glow Background -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/4 left-1/3 w-125 h-125 bg-fire-500/10 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-1/4 right-1/4 w-100 h-100 bg-ember/8 rounded-full blur-[100px]"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-fire-400/5 rounded-full blur-[180px]"></div>
      </div>

      <!-- Noise Texture Overlay -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none"
        style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');">
      </div>

      <div class="relative z-10 text-center max-w-5xl mx-auto">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fire-500/30 bg-fire-500/5 text-fire-400 text-sm font-medium mb-8 opacity-0 animate-fade-in-down">
          <span class="w-2 h-2 rounded-full bg-fire-400 animate-pulse"></span>
          The Hearth of Digital Business
        </div>

        <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-balance opacity-0 animate-fade-in-down" style="animation-delay: 0.1s">
          Stop Writing Code.<br />
          <span class="text-fire-400">Start Controlling Value.</span>
        </h1>

        <p class="text-lg sm:text-xl text-muted-foreground font-light mb-4 max-w-3xl mx-auto opacity-0 animate-fade-in-down" style="animation-delay: 0.2s">
          Calcifer isn't another template. It's the missing access-control layer
          between your software and your business model.
        </p>

        <p class="text-base text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-down" style="animation-delay: 0.3s">
          Built for .NET architects, Vue artisans, and vibe coders who want to
          ship products, not repos.
        </p>

        <!-- Hero CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style="animation-delay: 0.4s">
          <NuxtLink to="/products/calcifer-microservice">
            <Button size="lg" class="px-8 bg-fire-500 hover:bg-fire-600 text-white border-0 glow-pulse">
              🔥 Light Your Project
            </Button>
          </NuxtLink>
          <Button size="lg" variant="outline" class="px-8 border-border hover:border-fire-500/50" @click="scrollTo('products')">
            📦 Browse Tools
          </Button>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div class="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
          <div class="w-1 h-2 rounded-full bg-fire-400 animate-pulse"></div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         2. THE PROBLEM — The Burn
         ═══════════════════════════════════════════ -->
    <section id="problem" class="py-28 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="mb-16">
          <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">The Problem</p>
          <h2 class="text-4xl sm:text-5xl font-bold mb-8 text-balance leading-tight">
            You have the auth. You have the APIs.<br />
            But the moment you need to <span class="text-fire-400">charge</span>…<br />
            you're back to <span class="text-muted-foreground">square one</span>.
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 gap-4">
          <div v-for="(pain, idx) in painPoints" :key="idx"
            class="group flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-card/30 hover:border-fire-500/30 transition-all duration-300">
            <div class="shrink-0 w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center text-destructive text-sm mt-0.5">
              ✕
            </div>
            <div>
              <p class="font-medium text-foreground">{{ pain.title }}</p>
              <p class="text-sm text-muted-foreground mt-1">{{ pain.detail }}</p>
            </div>
          </div>
        </div>

        <p class="text-center text-muted-foreground mt-12 text-lg">
          Every. Single. Time.
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         3. THE SOLUTION — Product Lines
         ═══════════════════════════════════════════ -->
    <section id="products" class="py-28 px-6 bg-card/20">
      <div class="max-w-6xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Our Tools</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-4 text-balance">
          Systems that <span class="text-fire-400">control value</span>.
        </h2>
        <p class="text-lg text-muted-foreground mb-16 max-w-2xl">
          Three product lines. One philosophy: your code should know its worth.
        </p>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Card 1: Calcifer.Microservice -->
          <NuxtLink to="/products/calcifer-microservice"
            class="group relative p-8 rounded-2xl border border-border/50 bg-background glow-card hover:-translate-y-2 transition-all duration-500 cursor-pointer block">
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-b from-fire-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 ember-float">⚙️</div>
              <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-fire-500/10 text-fire-400 text-xs font-bold mb-4">
                B2D · Developer Tools
              </div>
              <h3 class="text-xl font-bold mb-2">Calcifer.Microservice</h3>
              <p class="text-sm text-fire-400/80 font-medium mb-3">The Control Layer for .NET</p>
              <p class="text-muted-foreground text-sm leading-relaxed mb-6">
                [RequireFeature] · Licensing Engine · Seat Control.
                Built-in monetization for backend architects and SaaS builders.
              </p>
              <div class="flex items-center gap-2 text-fire-400 text-sm font-medium group-hover:gap-3 transition-all">
                Explore
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </NuxtLink>

          <!-- Card 2: OrderMint -->
          <NuxtLink to="/products/ordermint"
            class="group relative p-8 rounded-2xl border border-border/50 bg-background glow-card hover:-translate-y-2 transition-all duration-500 cursor-pointer block">
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-b from-fire-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 ember-float" style="animation-delay: 0.5s">🧾</div>
              <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-fire-500/10 text-fire-400 text-xs font-bold mb-4">
                B2B · Business Systems
              </div>
              <h3 class="text-xl font-bold mb-2">OrderMint</h3>
              <p class="text-sm text-fire-400/80 font-medium mb-3">The Digital Spine for Facebook Sellers</p>
              <p class="text-muted-foreground text-sm leading-relaxed mb-6">
                Chat → Invoice → Ledger → Insight.
                Turn Facebook messages into real business records and intelligence.
              </p>
              <div class="flex items-center gap-2 text-fire-400 text-sm font-medium group-hover:gap-3 transition-all">
                Explore
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </NuxtLink>

          <!-- Card 3: User Dashboard -->
          <NuxtLink to="/products/user-dashboard"
            class="group relative p-8 rounded-2xl border border-border/50 bg-background glow-card hover:-translate-y-2 transition-all duration-500 cursor-pointer block">
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-b from-fire-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 ember-float" style="animation-delay: 1s">👥</div>
              <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-fire-500/10 text-fire-400 text-xs font-bold mb-4">
                Internal → Public
              </div>
              <h3 class="text-xl font-bold mb-2">User Management Dashboard</h3>
              <p class="text-sm text-fire-400/80 font-medium mb-3">The Universal Identity Hub</p>
              <p class="text-muted-foreground text-sm leading-relaxed mb-6">
                Roles · Permissions · Audit Logs.
                Battle-tested internal systems, now available publicly.
              </p>
              <div class="flex items-center gap-2 text-fire-400 text-sm font-medium group-hover:gap-3 transition-all">
                Explore
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         4. THE DIFFERENCE — Others vs Calcifer
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6">
      <div class="max-w-5xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">The Difference</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-16 text-balance">
          You don't sell code.<br />
          You sell <span class="text-fire-400">control</span>.
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Others -->
          <div class="p-8 rounded-2xl border border-border/50 bg-background">
            <h3 class="text-lg font-bold mb-6 text-muted-foreground">Others</h3>
            <div class="space-y-4">
              <div v-for="(item, idx) in comparison.others" :key="idx" class="flex items-start gap-3">
                <span class="text-destructive/60 shrink-0 mt-0.5">✕</span>
                <p class="text-muted-foreground">{{ item }}</p>
              </div>
            </div>
          </div>

          <!-- Calcifer -->
          <div class="p-8 rounded-2xl border border-fire-500/30 bg-fire-500/5 glow-card">
            <h3 class="text-lg font-bold mb-6 text-fire-400">🔥 Calcifer</h3>
            <div class="space-y-4">
              <div v-for="(item, idx) in comparison.calcifer" :key="idx" class="flex items-start gap-3">
                <span class="text-fire-400 shrink-0 mt-0.5">✓</span>
                <p class="text-foreground">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         5. FOR VIBE CODERS — The Secret Angle
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6 bg-card/20">
      <div class="max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fire-500/30 bg-fire-500/5 text-fire-400 text-sm font-medium mb-8">
          <span class="w-2 h-2 rounded-full bg-fire-400 animate-pulse"></span>
          For Vibe Coders
        </div>

        <h2 class="text-4xl sm:text-5xl font-bold mb-8 text-balance">
          You know the flow.<br />
          You know the code.
        </h2>

        <p class="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          But licensing? Seat control? Multi-tenancy?
          That's boring. That's what <span class="text-fire-400 font-semibold">we give you</span>.
        </p>

        <p class="text-lg text-foreground/60 max-w-xl mx-auto mb-12">
          Calcifer is your co-pilot for the boring-but-critical stuff.
          Focus on your product. We handle the business spine.
        </p>

        <NuxtLink to="/products/calcifer-microservice">
          <Button size="lg" class="px-10 bg-fire-500 hover:bg-fire-600 text-white border-0">
            🔥 See How It Works
          </Button>
        </NuxtLink>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         6. ROADMAP — The Future
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6">
      <div class="max-w-4xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Roadmap</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-4 text-balance">
          This ecosystem will <span class="text-fire-400">grow</span>.
        </h2>
        <p class="text-lg text-muted-foreground mb-16 max-w-2xl">
          Active development across all product lines.
        </p>

        <div class="space-y-4">
          <div v-for="(item, idx) in roadmap" :key="idx"
            class="flex items-start gap-5 p-6 rounded-xl border border-border/50 bg-card/30 hover:border-fire-500/20 transition-colors">
            <div class="shrink-0 mt-1">
              <span v-if="item.status === 'done'" class="w-8 h-8 rounded-lg bg-fire-500/15 flex items-center justify-center text-fire-400 text-sm">✓</span>
              <span v-else-if="item.status === 'in-progress'" class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center">
                <span class="w-2.5 h-2.5 rounded-full bg-fire-400 animate-pulse"></span>
              </span>
              <span v-else class="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground text-xs">○</span>
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-1">
                <h3 class="font-bold">{{ item.title }}</h3>
                <span :class="[
                  'px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider',
                  item.status === 'done' ? 'bg-fire-500/15 text-fire-400' :
                  item.status === 'in-progress' ? 'bg-fire-500/10 text-fire-300' :
                  'bg-muted text-muted-foreground'
                ]">{{ item.status }}</span>
              </div>
              <p class="text-sm text-muted-foreground">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         7. FINAL CTA — Close Strong
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6 bg-card/20">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Glow bg -->
        <div class="relative">
          <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fire-500/8 rounded-full blur-[100px]"></div>
          </div>
          <div class="relative z-10">
            <h2 class="text-4xl sm:text-6xl font-black mb-6 text-balance">
              Your code is powerful.<br />
              <span class="text-fire-400">Give it a business spine.</span>
            </h2>
            <p class="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
              You're not selling code. You're selling the ability to sleep at night
              knowing your software won't be stolen, misused, or run without payment.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/products/calcifer-microservice">
                <Button size="lg" class="px-8 bg-fire-500 hover:bg-fire-600 text-white border-0 glow-pulse">
                  🔥 Try Calcifer.Microservice
                </Button>
              </NuxtLink>
              <NuxtLink to="/products/ordermint">
                <Button size="lg" variant="outline" class="px-8 border-border hover:border-fire-500/50">
                  📦 Get OrderMint
                </Button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

const painPoints = [
  { title: "No Licensing", detail: "You ship software but can't control who uses it or for how long." },
  { title: "No Feature Gating", detail: "All users get all features. No way to differentiate between tiers." },
  { title: "No Seat Control", detail: "One license key gets shared across unlimited machines." },
  { title: "No Business Logic", detail: "Authentication exists but monetization infrastructure is zero." },
]

const comparison = {
  others: [
    "Just CRUD & Auth",
    "No monetization layer",
    "You build the business logic",
    "Rebuild for every project",
    "Scattered, unrelated tools",
  ],
  calcifer: [
    "Business-ready API & Access Control",
    "Built-in licensing & seat control",
    "We give you the capabilities",
    "Ship products in days, not months",
    "Unified ecosystem, shared core",
  ],
}

const roadmap = [
  { title: "🔥 RSA License Keys", description: "Cryptographically signed offline-capable license validation", status: "in-progress" },
  { title: "🧠 AI Chat Parser for OrderMint", description: "Intelligent message-to-order detection from Facebook Messenger", status: "in-progress" },
  { title: "🏢 Multi-tenant System", description: "Tenant isolation with shared or dedicated databases", status: "planned" },
  { title: "🔌 Plugin Modules for Vue.js", description: "Hot-loadable feature plugins with dependency injection", status: "planned" },
  { title: "📱 WhatsApp Integration", description: "Extend OrderMint beyond Facebook to WhatsApp Business", status: "planned" },
]

const scrollTo = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Page meta
useHead({
  title: 'Calcifer — Build Software That Knows Its Value',
  meta: [
    {
      name: 'description',
      content: 'Calcifer builds systems that turn code into revenue. Developer tools, business systems, and identity infrastructure — designed to control access, monetize features, and ship products.'
    }
  ]
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
