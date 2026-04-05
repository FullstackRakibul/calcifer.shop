<template>
  <div class="min-h-screen bg-background">

    <!-- ═══════════════════════════════════════════
         1. HERO — The First Strike
         ═══════════════════════════════════════════ -->
    <section class="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <!-- Fire Glow Background -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/4 left-1/3 w-125 h-125 bg-fire-500/10 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-1/4 right-1/4 w-100 h-100 bg-ember/8 rounded-full blur-[100px]"></div>
      </div>

      <!-- Noise Texture Overlay -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none"
        style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');">
      </div>

      <div class="relative z-10 text-center max-w-5xl mx-auto">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fire-500/30 bg-fire-500/5 text-fire-400 text-sm font-medium mb-8 opacity-0 animate-fade-in-down">
          <span class="w-2 h-2 rounded-full bg-fire-400 animate-pulse"></span>
          .NET 8 · Clean Architecture · Production-Ready
        </div>

        <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-balance opacity-0 animate-fade-in-down" style="animation-delay: 0.1s">
          Control Who Uses<br />
          <span class="text-fire-400">Your Software.</span>
        </h1>

        <p class="text-lg sm:text-xl text-muted-foreground font-light mb-4 max-w-2xl mx-auto opacity-0 animate-fade-in-down" style="animation-delay: 0.2s">
          Not Just What It Does.
        </p>

        <p class="text-base text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-down" style="animation-delay: 0.3s">
          {{ product.description }}
        </p>

        <!-- Hero CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style="animation-delay: 0.4s">
          <Button size="lg" @click="scrollTo('pricing')" class="px-8 bg-fire-500 hover:bg-fire-600 text-white border-0">
            🚀 Start with Calcifer
          </Button>
          <Button size="lg" variant="outline" class="px-8 border-border hover:border-fire-500/50" @click="openLink(product.nugetUrl)">
            📦 View on NuGet
          </Button>
          <Button size="lg" variant="outline" class="px-8 border-border hover:border-fire-500/50" @click="scrollTo('live-flow')">
            💻 See API Demo
          </Button>
        </div>

        <!-- Tech Stack Tags -->
        <div class="flex flex-wrap justify-center gap-2 mt-12 opacity-0 animate-fade-in-up" style="animation-delay: 0.5s">
          <span v-for="tech in product.techStack" :key="tech"
            class="px-3 py-1 rounded-full bg-card border border-border text-xs text-muted-foreground">
            {{ tech }}
          </span>
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
         2. THE PROBLEM — Call It Out
         ═══════════════════════════════════════════ -->
    <section id="problem" class="py-28 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="mb-16">
          <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">The Problem</p>
          <h2 class="text-4xl sm:text-5xl font-bold mb-8 text-balance leading-tight">
            You build features.<br />
            But when it's time to <span class="text-fire-400">monetize</span>…<br />
            you start from <span class="text-muted-foreground">zero</span>.
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
          Every project reinvents the same broken wheel.
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         3. THE SOLUTION — Calcifer's 5 Pillars
         ═══════════════════════════════════════════ -->
    <section id="features" class="py-28 px-6 bg-card/20">
      <div class="max-w-6xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">The Solution</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-4 text-balance">
          This is not a template.<br />
          It's a <span class="text-fire-400">control system</span>.
        </h2>
        <p class="text-lg text-muted-foreground mb-16 max-w-2xl">
          Five built-in capabilities that turn your code into a product.
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(pillar, idx) in product.pillars" :key="idx"
            class="group p-8 rounded-2xl border border-border/50 bg-background hover:border-fire-500/40 transition-all duration-300 hover:-translate-y-1">
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
         4. HOW IT WORKS — Visual Flow
         ═══════════════════════════════════════════ -->
    <section id="how-it-works" class="py-28 px-6">
      <div class="max-w-5xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">How It Works</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-16 text-balance">
          Four steps. <span class="text-fire-400">Zero guesswork.</span>
        </h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="step in product.flow" :key="step.step"
            class="relative text-center p-6">
            <!-- Step Number -->
            <div class="w-14 h-14 rounded-2xl bg-fire-500/10 border border-fire-500/20 flex items-center justify-center mx-auto mb-5">
              <span class="text-fire-400 font-bold text-lg">{{ step.step }}</span>
            </div>
            <h3 class="text-lg font-bold mb-2">{{ step.label }}</h3>
            <p class="text-sm text-muted-foreground">{{ step.detail }}</p>

            <!-- Arrow (hidden on last item & mobile) -->
            <div v-if="step.step < 4" class="hidden lg:block absolute top-12 -right-3 text-border">
              →
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         5. THE DIFFERENCE — Others vs Calcifer
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6 bg-card/20">
      <div class="max-w-5xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">The Difference</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-16 text-balance">
          You don't just build apps.<br />
          You build <span class="text-fire-400">products</span>.
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Others -->
          <div class="p-8 rounded-2xl border border-border/50 bg-background">
            <h3 class="text-lg font-bold mb-6 text-muted-foreground">Other Templates</h3>
            <div class="space-y-4">
              <div v-for="(item, idx) in product.comparison.others" :key="idx" class="flex items-start gap-3">
                <span class="text-destructive/60 shrink-0 mt-0.5">✕</span>
                <p class="text-muted-foreground">{{ item }}</p>
              </div>
            </div>
          </div>

          <!-- Calcifer -->
          <div class="p-8 rounded-2xl border border-fire-500/30 bg-fire-500/5">
            <h3 class="text-lg font-bold mb-6 text-fire-400">🔥 Calcifer</h3>
            <div class="space-y-4">
              <div v-for="(item, idx) in product.comparison.calcifer" :key="idx" class="flex items-start gap-3">
                <span class="text-fire-400 shrink-0 mt-0.5">✓</span>
                <p class="text-foreground">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         6. LIVE FLOW — Real API Code
         ═══════════════════════════════════════════ -->
    <section id="live-flow" class="py-28 px-6">
      <div class="max-w-5xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Live Flow</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-4 text-balance">
          See it <span class="text-fire-400">work</span>.
        </h2>
        <p class="text-lg text-muted-foreground mb-12 max-w-2xl">
          Real endpoint. Real response. Not theoretical.
        </p>

        <div class="grid lg:grid-cols-2 gap-6">
          <!-- Request -->
          <div class="rounded-2xl border border-border overflow-hidden">
            <div class="px-5 py-3 bg-card border-b border-border flex items-center gap-3">
              <span class="px-2.5 py-1 rounded-md bg-fire-500/10 text-fire-400 text-xs font-bold">{{ product.codeSnippet.method }}</span>
              <code class="text-sm text-muted-foreground">{{ product.codeSnippet.endpoint }}</code>
            </div>
            <pre class="rounded-none! border-0! m-0!"><code class="text-sm">{{ product.codeSnippet.body }}</code></pre>
          </div>

          <!-- Response -->
          <div class="rounded-2xl border border-fire-500/20 overflow-hidden">
            <div class="px-5 py-3 bg-fire-500/5 border-b border-fire-500/20 flex items-center gap-3">
              <span class="px-2.5 py-1 rounded-md bg-fire-500/15 text-fire-400 text-xs font-bold">200 OK</span>
              <code class="text-sm text-muted-foreground">Response</code>
            </div>
            <pre class="rounded-none! border-0! m-0!"><code class="text-sm text-fire-200">{{ product.codeSnippet.response }}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         7. ARCHITECTURE — For Serious Devs
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

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="(mod, idx) in product.architecture" :key="idx"
            class="p-6 rounded-xl border border-border/50 bg-background hover:border-fire-500/30 transition-colors">
            <div class="w-10 h-10 rounded-lg bg-fire-500/10 flex items-center justify-center mb-4">
              <span class="text-fire-400 font-mono text-sm font-bold">{{ String(idx + 1).padStart(2, '0') }}</span>
            </div>
            <h3 class="font-bold mb-2">{{ mod.name }}</h3>
            <p class="text-sm text-muted-foreground">{{ mod.description }}</p>
          </div>
        </div>

        <!-- Specs Grid -->
        <div class="mt-16 pt-16 border-t border-border">
          <h3 class="text-2xl font-bold mb-8">Technical Specs</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="(value, key) in product.specs" :key="key"
              class="p-4 rounded-lg bg-background border border-border/30">
              <p class="text-xs text-muted-foreground uppercase tracking-widest mb-1">{{ key }}</p>
              <p class="text-sm font-semibold text-foreground">{{ value }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         8. ROADMAP — Show Future Vision
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6">
      <div class="max-w-4xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Roadmap</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-4 text-balance">
          This will <span class="text-fire-400">grow</span>.
        </h2>
        <p class="text-lg text-muted-foreground mb-16 max-w-2xl">
          Active development. New capabilities shipping regularly.
        </p>

        <div class="space-y-4">
          <div v-for="(item, idx) in product.roadmap" :key="idx"
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
         9. TESTIMONIALS
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6 bg-card/20">
      <div class="max-w-6xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Trusted By Builders</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-16 text-balance">
          From developers who <span class="text-fire-400">ship</span>.
        </h2>

        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(t, idx) in product.testimonials" :key="idx"
            class="p-8 rounded-2xl bg-background border border-border/50 hover:border-fire-500/20 transition-colors">
            <p class="text-foreground/90 mb-6 leading-relaxed italic">
              "{{ t.quote }}"
            </p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-fire-500/10 flex items-center justify-center text-fire-400 font-bold text-sm">
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
         10. FINAL CTA — Pricing & Close
         ═══════════════════════════════════════════ -->
    <section id="pricing" class="py-28 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Pricing</p>
          <h2 class="text-4xl sm:text-6xl font-black mb-6 text-balance">
            Stop rebuilding.<br />
            <span class="text-fire-400">Start shipping.</span>
          </h2>
          <p class="text-lg text-muted-foreground max-w-xl mx-auto">
            One-time purchase. Lifetime access. No subscriptions.
          </p>
        </div>

        <!-- Pricing Cards -->
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Solo -->
          <div class="p-8 rounded-2xl border border-border bg-card hover:border-fire-500/30 transition-all duration-300">
            <h3 class="text-lg font-bold mb-2">Solo</h3>
            <p class="text-sm text-muted-foreground mb-6">For individual developers</p>
            <p class="text-4xl font-black mb-1">${{ product.tiers.solo }}</p>
            <p class="text-xs text-muted-foreground mb-8">one-time</p>
            <ul class="space-y-3 mb-8 text-sm">
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Full Calcifer template</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Auth + Licensing + Gating</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> 1 developer license</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> 6 months updates</li>
              <li class="flex items-center gap-2"><span class="text-muted-foreground">—</span> <span class="text-muted-foreground">Frontend starters</span></li>
            </ul>
            <Button class="w-full" variant="outline" @click="buyTier('solo')">
              Get Solo
            </Button>
          </div>

          <!-- Studio (Featured) -->
          <div class="p-8 rounded-2xl border-2 border-fire-500 bg-card relative hover:-translate-y-1 transition-all duration-300">
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-fire-500 text-xs font-bold text-white">
              MOST POPULAR
            </div>
            <h3 class="text-lg font-bold mb-2">Studio</h3>
            <p class="text-sm text-muted-foreground mb-6">For teams & agencies</p>
            <p class="text-4xl font-black mb-1 text-fire-400">${{ product.tiers.studio }}</p>
            <p class="text-xs text-muted-foreground mb-8">one-time</p>
            <ul class="space-y-3 mb-8 text-sm">
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Everything in Solo</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> 5 developer licenses</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Angular + Vue starters</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> 12 months updates</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Priority email support</li>
            </ul>
            <Button class="w-full bg-fire-500 hover:bg-fire-600 text-white border-0" @click="buyTier('studio')">
              Get Studio
            </Button>
          </div>

          <!-- Enterprise -->
          <div class="p-8 rounded-2xl border border-border bg-card hover:border-fire-500/30 transition-all duration-300">
            <h3 class="text-lg font-bold mb-2">Enterprise</h3>
            <p class="text-sm text-muted-foreground mb-6">For software companies</p>
            <p class="text-4xl font-black mb-1">${{ product.tiers.enterprise }}</p>
            <p class="text-xs text-muted-foreground mb-8">one-time</p>
            <ul class="space-y-3 mb-8 text-sm">
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Everything in Studio</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Unlimited developers</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> White-label licensing</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Multi-tenant support</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Integration support</li>
            </ul>
            <Button class="w-full" variant="outline" @click="buyTier('enterprise')">
              Get Enterprise
            </Button>
          </div>
        </div>

        <!-- Bottom CTA Row -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
          <Button variant="outline" size="lg" class="gap-2" @click="openLink(product.githubUrl)">
            <i class="fab fa-github"></i>
            ⭐ Star on GitHub
          </Button>
          <Button variant="outline" size="lg" class="gap-2" @click="openLink(product.nugetUrl)">
            📦 Install from NuGet
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProductStore } from '@/stores/products'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'

const productStore = useProductStore()
const router = useRouter()

const product = computed(() => productStore.product)

const painPoints = [
  { title: "No licensing system", detail: "You ship software but can't control who uses it or for how long." },
  { title: "No feature gating", detail: "All users get all features. No way to differentiate between tiers." },
  { title: "No seat control", detail: "One license key gets shared across unlimited machines." },
  { title: "No access layer", detail: "Authentication exists but authorization is an afterthought." },
  { title: "No monetization path", detail: "You build great software with zero infrastructure to sell it." },
  { title: "Rebuilt every project", detail: "You code the same auth, roles, and licence logic from scratch — again." },
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

const buyTier = (tier: 'solo' | 'studio' | 'enterprise') => {
  productStore.addToCart(tier, 1)
  router.push('/checkout')
}

// Page meta
useHead({
  title: 'Calcifer — Control Who Uses Your Software',
  meta: [
    {
      name: 'description',
      content: 'A .NET 8 microservice template with built-in licensing, feature gating, and seat control. Ship SaaS like a product, not just code.'
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
