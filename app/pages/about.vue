<template>
  <div class="min-h-screen bg-background">

    <!-- ═══════════════════════════════════════════
         HERO — The Motto
         ═══════════════════════════════════════════ -->
    <section class="relative pt-32 pb-24 px-6 overflow-hidden">
      <!-- Fire Glow Background -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/4 left-1/3 w-125 h-125 bg-fire-500/8 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-1/4 right-1/4 w-100 h-100 bg-ember/6 rounded-full blur-[100px]"></div>
      </div>

      <!-- Noise Texture -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none"
        style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');">
      </div>

      <div class="relative z-10 max-w-4xl mx-auto">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fire-500/30 bg-fire-500/5 text-fire-400 text-sm font-medium mb-8 opacity-0 animate-fade-in-down">
          <span class="w-2 h-2 rounded-full bg-fire-400 animate-pulse"></span>
          About Calcifer.Shop
        </div>

        <h1
          class="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-6 text-balance opacity-0 animate-fade-in-down"
          style="animation-delay: 0.1s">
          Solid architecture and better tools for<br />
          <span class="text-fire-400">businesses that make sense.</span>
        </h1>

        <p class="text-xl sm:text-2xl text-muted-foreground font-light max-w-3xl opacity-0 animate-fade-in-down"
          style="animation-delay: 0.2s">
          Where software becomes structure, and structure becomes value.
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SUBTEXT — What We Are
         ═══════════════════════════════════════════ -->
    <section class="py-24 px-6">
      <div class="max-w-4xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Who We Are</p>
        <h2 class="text-3xl sm:text-4xl font-bold mb-8 text-balance leading-tight">
          Business-ready software systems<br />
          for <span class="text-fire-400">individuals, teams, and enterprises.</span>
        </h2>

        <div class="grid sm:grid-cols-3 gap-5 mb-12">
          <div v-for="(principle, idx) in principles" :key="idx"
            class="group p-6 rounded-2xl border border-border/50 bg-card/30 hover:border-fire-500/30 transition-all duration-300 hover:-translate-y-1">
            <div class="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{{ principle.icon }}
            </div>
            <h3 class="font-bold text-foreground mb-2">{{ principle.title }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ principle.description }}</p>
          </div>
        </div>

        <div class="p-8 rounded-2xl border border-fire-500/20 bg-fire-500/5">
          <p class="text-lg text-muted-foreground leading-relaxed text-center">
            From architecture engines to business systems,
            everything we build is focused on one thing:<br />
            <span class="text-fire-400 font-semibold text-xl mt-2 inline-block">clarity, control, and real-world
              use.</span>
          </p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         WHAT WE BUILD
         ═══════════════════════════════════════════ -->
    <section class="py-24 px-6 bg-card/20">
      <div class="max-w-4xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">What We Build</p>
        <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-balance">
          No unnecessary complexity.<br />
          No reinvention of the <span class="text-fire-400">same problems.</span>
        </h2>
        <p class="text-lg text-muted-foreground mb-12 max-w-2xl">
          Tools that turn work into measurable business.
        </p>

        <div class="grid sm:grid-cols-2 gap-5">
          <div v-for="(item, idx) in buildPrinciples" :key="idx"
            class="group flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-background hover:border-fire-500/30 transition-all duration-300">
            <div
              class="shrink-0 w-10 h-10 rounded-lg bg-fire-500/10 flex items-center justify-center text-fire-400 mt-0.5">
              <span class="text-lg">{{ item.icon }}</span>
            </div>
            <div>
              <p class="font-semibold text-foreground mb-1">{{ item.title }}</p>
              <p class="text-sm text-muted-foreground leading-relaxed">{{ item.detail }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         WHO IT'S FOR
         ═══════════════════════════════════════════ -->
    <section class="py-24 px-6">
      <div class="max-w-4xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Who It's For</p>
        <h2 class="text-3xl sm:text-4xl font-bold mb-12 text-balance">
          From solo builders to <span class="text-fire-400">enterprise teams.</span>
        </h2>

        <div class="space-y-4">
          <div v-for="(audience, idx) in audiences" :key="idx"
            class="group flex items-center gap-5 p-5 rounded-xl border border-border/50 bg-card/30 hover:border-fire-500/30 transition-all duration-300">
            <div
              class="shrink-0 w-12 h-12 rounded-xl bg-fire-500/10 flex items-center justify-center group-hover:bg-fire-500/20 transition-colors duration-300">
              <span class="text-xl">{{ audience.icon }}</span>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-foreground">{{ audience.label }}</h3>
              <p class="text-sm text-muted-foreground mt-0.5">{{ audience.detail }}</p>
            </div>
            <div
              class="shrink-0 w-8 h-8 rounded-lg bg-fire-500/5 flex items-center justify-center text-fire-400/50 group-hover:text-fire-400 transition-colors">
              →
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         CLOSING — The Line
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6 bg-card/20">
      <div class="max-w-4xl mx-auto text-center">
        <div class="relative">
          <!-- Glow -->
          <div class="absolute inset-0 pointer-events-none">
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fire-500/8 rounded-full blur-[100px]">
            </div>
          </div>

          <div class="relative z-10">
            <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-8">Our Belief</p>
            <h2 class="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-balance leading-tight">
              Software should not just work.<br />
              It should make <span class="text-fire-400">business make sense.</span>
            </h2>

            <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <NuxtLink to="/products/forge">
                <Button size="lg" class="px-8 bg-fire-500 hover:bg-fire-600 text-white border-0 glow-pulse">
                  🔥 Explore Our Tools
                </Button>
              </NuxtLink>
              <NuxtLink to="/contact">
                <Button size="lg" variant="outline" class="px-8 border-border hover:border-fire-500/50">
                  Get In Touch
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

const principles = [
  {
    icon: '✅',
    title: 'Ready to Use',
    description: 'Production-ready from day one. No boilerplate marathons, no setup labyrinths.',
  },
  {
    icon: '🔗',
    title: 'Easy to Integrate',
    description: 'Drop into existing workflows. Designed to fit your stack, not fight it.',
  },
  {
    icon: '📈',
    title: 'Built to Scale',
    description: 'From a solo side-project to a multinational deployment. Architecture that grows with you.',
  },
]

const buildPrinciples = [
  {
    icon: '⚡',
    title: 'Work from day one',
    detail: 'Every system ships functional. No "coming soon" features, no half-built modules.',
  },
  {
    icon: '🧩',
    title: 'Fit into real workflows',
    detail: 'Designed around how people actually work — not how we wish they would.',
  },
  {
    icon: '🌱',
    title: 'Grow with your business',
    detail: 'Modular architecture that scales from solo to enterprise without rewrites.',
  },
  {
    icon: '🎯',
    title: 'Solve actual problems',
    detail: 'No over-engineering. Every feature exists because a real user needed it.',
  },
]

const audiences = [
  {
    icon: '🧑‍💻',
    label: 'Individuals',
    detail: 'Building their first system and need a strong foundation.',
  },
  {
    icon: '💼',
    label: 'Freelancers',
    detail: 'Managing multiple clients who need structured, repeatable solutions.',
  },
  {
    icon: '👥',
    label: 'Teams',
    detail: 'Scaling products that need built-in business logic and access control.',
  },
  {
    icon: '🏢',
    label: 'Companies',
    detail: 'Needing structure — licensing, feature gating, and operational clarity.',
  },
  {
    icon: '🌍',
    label: 'Enterprises',
    detail: 'Requiring fine-grained control over access, seats, and deployment.',
  },
]

useHead({
  title: 'About — Calcifer.Shop',
  meta: [
    {
      name: 'description',
      content: 'Calcifer.Shop builds business-ready software systems for individuals, teams, and enterprises. Tools that are ready to use, easy to integrate, and built to scale.',
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

.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out forwards;
}
</style>