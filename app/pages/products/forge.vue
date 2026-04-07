<template>
  <div class="min-h-screen bg-background">

    <!-- ═══════════════════════════════════════════
         HERO
         ═══════════════════════════════════════════ -->
    <section class="relative min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/4 left-1/3 w-125 h-125 bg-fire-500/10 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-1/4 right-1/4 w-100 h-100 bg-ember/8 rounded-full blur-[100px]"></div>
      </div>

      <div class="relative z-10 text-center max-w-5xl mx-auto">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fire-500/30 bg-fire-500/5 text-fire-400 text-sm font-medium mb-8 opacity-0 animate-fade-in-down">
          <span class="w-2 h-2 rounded-full bg-fire-400 animate-pulse"></span>
          Architecture Engine · .NET 8 · Production-Ready
        </div>

        <h1
          class="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-6 text-balance opacity-0 animate-fade-in-down"
          style="animation-delay: 0.1s">
          Calcifer<span class="text-fire-400">.Forge</span>
        </h1>

        <p class="text-xl text-muted-foreground font-light mb-4 max-w-2xl mx-auto opacity-0 animate-fade-in-down"
          style="animation-delay: 0.2s">
          Where raw code becomes structured systems.
        </p>

        <p class="text-base text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-down"
          style="animation-delay: 0.3s">
          A .NET microservice foundation with built-in licensing, feature gating,
          seat control, and modular architecture. Turns APIs into monetizable systems.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
          style="animation-delay: 0.4s">
          <Button size="lg" @click="scrollTo('pricing')"
            class="px-8 bg-fire-500 hover:bg-fire-600 text-white border-0 glow-pulse">
            � Get Forge
          </Button>
          <Button size="lg" variant="outline" class="px-8 border-border hover:border-fire-500/50"
            @click="openLink('https://www.nuget.org/packages/Calcifer.Microservice.Api.Template')">
            📦 NuGet Gallery
          </Button>
          <Button size="lg" variant="outline" class="px-8 border-border hover:border-fire-500/50"
            @click="openLink('https://github.com/FullstackRakibul/dotnet.calcifer')">
            🐙 GitHub
          </Button>
        </div>

        <!-- Tech Stack Tags -->
        <div class="flex flex-wrap justify-center gap-2 mt-12 opacity-0 animate-fade-in-up"
          style="animation-delay: 0.5s">
          <span v-for="tech in techStack" :key="tech"
            class="px-3 py-1 rounded-full bg-card border border-border text-xs text-muted-foreground">
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         CORE PILLARS
         ═══════════════════════════════════════════ -->
    <section id="pillars" class="py-28 px-6 bg-card/20">
      <div class="max-w-6xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Core Pillars</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-4 text-balance">
          Five capabilities. <span class="text-fire-400">Zero compromise.</span>
        </h2>
        <p class="text-lg text-muted-foreground mb-16 max-w-2xl">
          Everything you need to turn your .NET code into a monetizable product.
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(pillar, idx) in pillars" :key="idx"
            class="group p-8 rounded-2xl border border-border/50 bg-background hover:border-fire-500/40 transition-all duration-300 hover:-translate-y-1 glow-card">
            <div class="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
              {{ pillar.icon }}
            </div>
            <h3 class="text-xl font-bold mb-3">{{ pillar.title }}</h3>
            <p class="text-muted-foreground text-sm leading-relaxed">
              {{ pillar.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         LIVE FLOW
         ═══════════════════════════════════════════ -->
    <section id="live-flow" class="py-28 px-6">
      <div class="max-w-5xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Live Flow</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-4 text-balance">
          See it <span class="text-fire-400">work</span>.
        </h2>
        <p class="text-lg text-muted-foreground mb-12 max-w-2xl">
          Real endpoints. Real responses. Not theoretical.
        </p>

        <div class="grid sm:grid-cols-3 gap-4 mb-12">
          <div v-for="(step, idx) in flowSteps" :key="idx"
            class="relative text-center p-5 rounded-xl border border-border/50 bg-card/30">
            <div class="text-sm font-mono text-fire-400 mb-2">Step {{ idx + 1 }}</div>
            <code class="text-xs text-foreground/80">{{ step.code }}</code>
            <p class="text-xs text-muted-foreground mt-2">{{ step.label }}</p>
            <div v-if="idx < flowSteps.length - 1"
              class="hidden sm:block absolute top-1/2 -right-2.5 text-fire-400/50 text-lg">→</div>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-6">
          <div class="rounded-2xl border border-border overflow-hidden">
            <div class="px-5 py-3 bg-card border-b border-border flex items-center gap-3">
              <span class="px-2.5 py-1 rounded-md bg-fire-500/10 text-fire-400 text-xs font-bold">POST</span>
              <code class="text-sm text-muted-foreground">/api/license/activate</code>
            </div>
            <pre class="rounded-none! border-0! m-0!"><code class="text-sm">{{ requestBody }}</code></pre>
          </div>

          <div class="rounded-2xl border border-fire-500/20 overflow-hidden glow-card">
            <div class="px-5 py-3 bg-fire-500/5 border-b border-fire-500/20 flex items-center gap-3">
              <span class="px-2.5 py-1 rounded-md bg-fire-500/15 text-fire-400 text-xs font-bold">200 OK</span>
              <code class="text-sm text-muted-foreground">Response</code>
            </div>
            <pre
              class="rounded-none! border-0! m-0!"><code class="text-sm text-fire-200">{{ responseBody }}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         ARCHITECTURE
         ═══════════════════════════════════════════ -->
    <section id="architecture" class="py-28 px-6 bg-card/20">
      <div class="max-w-5xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Architecture</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-4 text-balance">
          Clean. Modular. <span class="text-fire-400">Scalable.</span>
        </h2>
        <p class="text-lg text-muted-foreground mb-16 max-w-2xl">
          Built on Clean Architecture principles. Every layer has a purpose.
        </p>

        <div
          class="flex flex-wrap items-center justify-center gap-3 mb-16 p-6 rounded-2xl border border-border/50 bg-background">
          <span v-for="(step, idx) in archFlow" :key="idx" class="flex items-center gap-3">
            <span
              class="px-4 py-2 rounded-lg bg-fire-500/10 border border-fire-500/20 text-fire-400 text-sm font-medium">{{
                step }}</span>
            <span v-if="idx < archFlow.length - 1" class="text-fire-400/40">→</span>
          </span>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="(mod, idx) in architecture" :key="idx"
            class="p-6 rounded-xl border border-border/50 bg-background hover:border-fire-500/30 transition-colors">
            <div class="w-10 h-10 rounded-lg bg-fire-500/10 flex items-center justify-center mb-4">
              <span class="text-fire-400 font-mono text-sm font-bold">{{ String(idx + 1).padStart(2, '0') }}</span>
            </div>
            <h3 class="font-bold mb-2">{{ mod.name }}</h3>
            <p class="text-sm text-muted-foreground">{{ mod.description }}</p>
          </div>
        </div>

        <div class="mt-16 pt-16 border-t border-border">
          <h3 class="text-2xl font-bold mb-8">Technical Specs</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="(value, key) in specs" :key="key" class="p-4 rounded-lg bg-background border border-border/30">
              <p class="text-xs text-muted-foreground uppercase tracking-widest mb-1">{{ key }}</p>
              <p class="text-sm font-semibold text-foreground">{{ value }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         WHY FORGE
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6">
      <div class="max-w-5xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Why Forge?</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-16 text-balance">
          Built for people who <span class="text-fire-400">ship</span>.
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(reason, idx) in whyChoose" :key="idx"
            class="p-8 rounded-2xl border border-border/50 bg-card/30 hover:border-fire-500/20 transition-colors">
            <div class="text-3xl mb-4">{{ reason.icon }}</div>
            <h3 class="text-lg font-bold mb-3">{{ reason.title }}</h3>
            <p class="text-muted-foreground text-sm leading-relaxed">{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         TESTIMONIALS
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6 bg-card/20">
      <div class="max-w-6xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Trusted By Builders</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-16 text-balance">
          From developers who <span class="text-fire-400">ship</span>.
        </h2>

        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(t, idx) in testimonials" :key="idx"
            class="p-8 rounded-2xl bg-background border border-border/50 hover:border-fire-500/20 transition-colors">
            <p class="text-foreground/90 mb-6 leading-relaxed italic">
              "{{ t.quote }}"
            </p>
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-fire-500/10 flex items-center justify-center text-fire-400 font-bold text-sm">
                {{ t.author.charAt(0) }}
              </div>
              <div>
                <p class="font-semibold text-sm">{{ t.author }}</p>
                <p class="text-xs text-muted-foreground">{{ t.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         PRICING
         ═══════════════════════════════════════════ -->
    <section id="pricing" class="py-28 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Forge Pricing</p>
          <h2 class="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Free for learning. <span class="text-fire-400">Paid for shipping.</span>
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Solo Free -->
          <div
            class="p-7 rounded-2xl border border-border bg-card hover:border-fire-500/30 transition-all duration-300">
            <h3 class="text-lg font-bold mb-1">Solo</h3>
            <p class="text-sm text-muted-foreground mb-4">Prove your idea</p>
            <p class="text-3xl font-black mb-1">Free</p>
            <p class="text-xs text-muted-foreground mb-6">forever</p>
            <ul class="space-y-2.5 mb-6 text-sm">
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Basic template</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Limited modules</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Community updates</li>
              <li class="flex items-center gap-2"><span class="text-muted-foreground">—</span> <span
                  class="text-muted-foreground">Advanced licensing</span></li>
            </ul>
            <Button class="w-full" variant="outline">Get Solo</Button>
          </div>

          <!-- Team Starter -->
          <div
            class="p-7 rounded-2xl border border-border bg-card hover:border-fire-500/30 transition-all duration-300">
            <h3 class="text-lg font-bold mb-1">Team Starter</h3>
            <p class="text-sm text-muted-foreground mb-4">Build for real</p>
            <p class="text-3xl font-black mb-1">$19<span class="text-base font-normal text-muted-foreground">/mo</span>
            </p>
            <p class="text-xs text-muted-foreground mb-6">per seat</p>
            <ul class="space-y-2.5 mb-6 text-sm">
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Full template</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Licensing (basic)</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Feature gating</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Monthly updates</li>
            </ul>
            <Button class="w-full" variant="outline">Get Starter</Button>
          </div>

          <!-- Team Pro -->
          <div
            class="p-7 rounded-2xl border-2 border-fire-500 bg-card relative hover:-translate-y-1 transition-all duration-300 glow-card">
            <div
              class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-fire-500 text-xs font-bold text-white">
              MOST POPULAR
            </div>
            <h3 class="text-lg font-bold mb-1">Team Pro</h3>
            <p class="text-sm text-muted-foreground mb-4">Ship products</p>
            <p class="text-3xl font-black mb-1 text-fire-400">$49<span
                class="text-base font-normal text-muted-foreground">/mo</span></p>
            <p class="text-xs text-muted-foreground mb-6">per seat</p>
            <ul class="space-y-2.5 mb-6 text-sm">
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Advanced licensing</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Seat control</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Modular architecture</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Priority updates</li>
            </ul>
            <Button class="w-full bg-fire-500 hover:bg-fire-600 text-white border-0">Get Pro</Button>
          </div>

          <!-- Enterprise -->
          <div
            class="p-7 rounded-2xl border border-border bg-card hover:border-fire-500/30 transition-all duration-300">
            <h3 class="text-lg font-bold mb-1">Enterprise</h3>
            <p class="text-sm text-muted-foreground mb-4">Full control</p>
            <p class="text-3xl font-black mb-1">$499</p>
            <p class="text-xs text-muted-foreground mb-6">one-time</p>
            <ul class="space-y-2.5 mb-6 text-sm">
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Full source access</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> All modules unlocked</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Self-hosted</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> No usage limits</li>
            </ul>
            <Button class="w-full" variant="outline">Get Enterprise</Button>
          </div>
        </div>

        <!-- Add-ons -->
        <div class="mt-12 p-6 rounded-2xl border border-border/50 bg-card/30">
          <h3 class="font-bold mb-4 text-center">🔌 Paid Add-ons</h3>
          <div class="flex flex-wrap justify-center gap-4">
            <span class="px-4 py-2 rounded-lg bg-fire-500/10 border border-fire-500/20 text-fire-400 text-sm">RSA
              Licensing</span>
            <span
              class="px-4 py-2 rounded-lg bg-fire-500/10 border border-fire-500/20 text-fire-400 text-sm">Multi-tenant
              Module</span>
            <span class="px-4 py-2 rounded-lg bg-fire-500/10 border border-fire-500/20 text-fire-400 text-sm">Plugin
              Modules</span>
            <span class="px-4 py-2 rounded-lg bg-fire-500/10 border border-fire-500/20 text-fire-400 text-sm">Advanced
              Security</span>
          </div>
        </div>

        <!-- Bottom Links -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
          <Button variant="outline" size="lg" class="gap-2"
            @click="openLink('https://github.com/FullstackRakibul/dotnet.calcifer')">
            <i class="fab fa-github"></i>
            ⭐ Star on GitHub
          </Button>
          <Button variant="outline" size="lg" class="gap-2"
            @click="openLink('https://www.nuget.org/packages/Calcifer.Microservice.Api.Template')">
            📦 Install from NuGet
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

const techStack = [".NET 8", "C#", "Entity Framework Core", "JWT", "ASP.NET Identity", "Minimal APIs", "Clean Architecture"]

const pillars = [
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
]

const flowSteps = [
  { code: "POST /auth/login", label: "User authenticates" },
  { code: "POST /license/activate", label: "License activated" },
  { code: "GET /report/sales → 200", label: "Gated feature accessed" },
]

const requestBody = JSON.stringify({
  licenseKey: "CALCIFER-PRO-2024",
  machineId: "DESKTOP-A1B2C3",
}, null, 2)

const responseBody = JSON.stringify({
  activated: true,
  tier: "professional",
  features: ["analytics", "export", "multi-tenant"],
  seatsRemaining: 4,
  expiresAt: "2027-04-01T00:00:00Z",
}, null, 2)

const archFlow = ["User Request", "Auth", "License Validation", "Feature Gate", "Module", "Response"]

const architecture = [
  { name: "Core", description: "Entities, interfaces, domain logic" },
  { name: "Application", description: "Use cases, DTOs, validators" },
  { name: "Infrastructure", description: "EF Core, Identity, external services" },
  { name: "API", description: "Minimal API endpoints, middleware, filters" },
  { name: "Modules", description: "Feature modules with self-contained routes" },
  { name: "Licensing", description: "License engine, activation, gating" },
]

const specs: Record<string, string> = {
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
}

const whyChoose = [
  {
    icon: "🎨",
    title: "For Vibe Coders",
    description: "No more rebuilding the license wheel. Focus on your product, we handle the boring-but-critical infrastructure.",
  },
  {
    icon: "🚀",
    title: "For Startups",
    description: "Go from dotnet new to monetization in days. Everything you need to charge, limit, and license is already wired.",
  },
  {
    icon: "🏢",
    title: "For Enterprises",
    description: "Role hierarchy, audit logs, and white-label licensing out of the box. Battle-tested architecture for serious teams.",
  },
]

const testimonials = [
  {
    quote: "Forge saved us 3 weeks of boilerplate. The licensing engine alone is worth the price — we integrated it into our ERP product in 2 days.",
    author: "Arif Rahman",
    role: "CTO, TechNova Solutions (Dhaka)",
  },
  {
    quote: "Finally, a .NET foundation that understands business logic. Feature gating with attributes is elegant. This is how enterprise software should start.",
    author: "Priya Sharma",
    role: "Senior Architect, InfoBridge (Bangalore)",
  },
  {
    quote: "We were building the same auth + license system for every client project. Forge made that a one-time setup. Our team ships 40% faster now.",
    author: "Minh Tran",
    role: "Lead Developer, VietSoft (Ho Chi Minh City)",
  },
]

const scrollTo = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const openLink = (url: string) => {
  window.open(url, '_blank')
}

useHead({
  title: 'Calcifer.Forge — Build Software That Knows Its Value',
  meta: [
    {
      name: 'description',
      content: 'Calcifer.Forge is the architecture engine for product-ready .NET software. Built-in licensing, feature gating, seat control, and modular architecture.'
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