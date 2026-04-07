<template>
  <div class="min-h-screen bg-background">

    <!-- ═══════════════════════════════════════════
         HERO
         ═══════════════════════════════════════════ -->
    <section class="relative min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/3 left-1/3 w-80 h-80 bg-fire-500/6 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-1/3 right-1/3 w-64 h-64 bg-ember/5 rounded-full blur-[100px]"></div>
      </div>

      <div class="relative z-10 text-center max-w-5xl mx-auto">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fire-500/30 bg-fire-500/5 text-fire-400 text-sm font-medium mb-8 opacity-0 animate-fade-in-down">
          <span class="w-2 h-2 rounded-full bg-fire-400 animate-pulse"></span>
          Universal Access Control · Angular · Vue · .NET
        </div>

        <h1
          class="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-6 text-balance opacity-0 animate-fade-in-down"
          style="animation-delay: 0.1s">
          Calcifer<span class="text-fire-400">.UserMatrix</span>
        </h1>

        <p class="text-xl text-muted-foreground font-light mb-4 max-w-2xl mx-auto opacity-0 animate-fade-in-down"
          style="animation-delay: 0.2s">
          Control access. Everywhere.
        </p>

        <p class="text-base text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-down"
          style="animation-delay: 0.3s">
          Centralized user and access management. Roles, permissions,
          feature-level access control, audit logs, and cross-system integration.
          Where permissions are defined, not guessed.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
          style="animation-delay: 0.4s">
          <Button size="lg" class="px-8 bg-fire-500 hover:bg-fire-600 text-white border-0 glow-pulse">
            📦 Angular Module
          </Button>
          <Button size="lg" variant="outline" class="px-8 border-border hover:border-fire-500/50">
            ⚡ Vue Composables
          </Button>
          <Button size="lg" variant="outline" class="px-8 border-border hover:border-fire-500/50">
            🔌 .NET API
          </Button>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         FEATURES
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6 bg-card/20">
      <div class="max-w-6xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Capabilities</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-4 text-balance">
          Complete <span class="text-fire-400">identity infrastructure</span>.
        </h2>
        <p class="text-lg text-muted-foreground mb-16 max-w-2xl">
          Controls who can do what. Secures applications at scale. Works across multiple systems.
        </p>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(feature, idx) in features" :key="idx"
            class="group p-8 rounded-2xl border border-border/50 bg-background hover:border-fire-500/40 transition-all duration-300 hover:-translate-y-1 glow-card">
            <div class="text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
              {{ feature.icon }}
            </div>
            <h3 class="text-lg font-bold mb-3">{{ feature.title }}</h3>
            <p class="text-muted-foreground text-sm leading-relaxed">{{ feature.description }}</p>
            <div v-if="feature.tags" class="flex flex-wrap gap-2 mt-4">
              <span v-for="tag in feature.tags" :key="tag"
                class="px-2 py-0.5 rounded-md bg-fire-500/10 text-fire-400 text-xs font-medium">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         PHILOSOPHY
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6">
      <div class="max-w-4xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Philosophy</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-8 text-balance">
          Why a <span class="text-fire-400">separate</span> identity layer?
        </h2>

        <div class="p-8 rounded-2xl border border-fire-500/30 bg-fire-500/5 glow-card">
          <p class="text-xl text-foreground/90 leading-relaxed mb-6">
            Because <span class="text-fire-400 font-semibold">every app needs users</span>.
          </p>
          <p class="text-muted-foreground leading-relaxed mb-6">
            You shouldn't rebuild auth, roles, and permissions for every project.
            UserMatrix is a battle-tested internal system — the same identity layer
            we use across all Calcifer products — now available publicly.
          </p>
          <p class="text-muted-foreground leading-relaxed">
            Plug it in. Focus on your <span class="text-foreground font-medium">actual product</span>.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         TECH INTEGRATION
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6 bg-card/20">
      <div class="max-w-5xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Integration</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-16 text-balance">
          Works with your <span class="text-fire-400">stack</span>.
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(tech, idx) in techIntegrations" :key="idx"
            class="p-8 rounded-2xl border border-border/50 bg-background text-center hover:border-fire-500/30 transition-colors">
            <div class="text-4xl mb-4">{{ tech.icon }}</div>
            <h3 class="text-lg font-bold mb-2">{{ tech.title }}</h3>
            <p class="text-sm text-muted-foreground mb-4">{{ tech.description }}</p>
            <div class="flex flex-wrap justify-center gap-2">
              <span v-for="tag in tech.tags" :key="tag"
                class="px-2 py-0.5 rounded-md bg-fire-500/10 text-fire-400 text-xs font-medium">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         ROLE HIERARCHY
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6">
      <div class="max-w-4xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Access Control</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-16 text-balance">
          Flexible <span class="text-fire-400">role hierarchy</span>.
        </h2>

        <div class="space-y-4">
          <div v-for="(role, idx) in roles" :key="idx" :class="[
            'p-6 rounded-xl border transition-all duration-300',
            role.highlight
              ? 'border-fire-500/40 bg-fire-500/5 glow-card'
              : 'border-border/50 bg-card/30'
          ]" :style="{ marginLeft: `${idx * 24}px` }">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-lg bg-fire-500/10 flex items-center justify-center">
                <span class="text-fire-400 text-lg">{{ role.icon }}</span>
              </div>
              <div>
                <h3 class="font-bold">{{ role.name }}</h3>
                <p class="text-sm text-muted-foreground">{{ role.permissions }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         PRICING
         ═══════════════════════════════════════════ -->
    <section id="pricing" class="py-28 px-6 bg-card/20">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">UserMatrix Pricing</p>
          <h2 class="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Free for learning. <span class="text-fire-400">Paid for control.</span>
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Solo -->
          <div
            class="p-7 rounded-2xl border border-border bg-card hover:border-fire-500/30 transition-all duration-300">
            <h3 class="text-lg font-bold mb-1">Solo</h3>
            <p class="text-sm text-muted-foreground mb-4">Single project</p>
            <p class="text-3xl font-black mb-1">Free</p>
            <p class="text-xs text-muted-foreground mb-6">forever</p>
            <ul class="space-y-2.5 mb-6 text-sm">
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Basic auth</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Role management</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Single project</li>
              <li class="flex items-center gap-2"><span class="text-muted-foreground">—</span> <span
                  class="text-muted-foreground">Audit logs</span></li>
            </ul>
            <Button class="w-full" variant="outline">Get Solo</Button>
          </div>

          <!-- Team Starter -->
          <div
            class="p-7 rounded-2xl border border-border bg-card hover:border-fire-500/30 transition-all duration-300">
            <h3 class="text-lg font-bold mb-1">Starter</h3>
            <p class="text-sm text-muted-foreground mb-4">Teams</p>
            <p class="text-3xl font-black mb-1">$15<span class="text-base font-normal text-muted-foreground">/mo</span>
            </p>
            <p class="text-xs text-muted-foreground mb-6">per project</p>
            <ul class="space-y-2.5 mb-6 text-sm">
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Full auth system</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Role & permissions</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Basic audit logs</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Updates</li>
            </ul>
            <Button class="w-full" variant="outline">Get Starter</Button>
          </div>

          <!-- Team Pro -->
          <div
            class="p-7 rounded-2xl border-2 border-fire-500 bg-card relative hover:-translate-y-1 transition-all duration-300 glow-card">
            <div
              class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-fire-500 text-xs font-bold text-white">
              RECOMMENDED
            </div>
            <h3 class="text-lg font-bold mb-1">Pro</h3>
            <p class="text-sm text-muted-foreground mb-4">Scale</p>
            <p class="text-3xl font-black mb-1 text-fire-400">$39<span
                class="text-base font-normal text-muted-foreground">/mo</span></p>
            <p class="text-xs text-muted-foreground mb-6">per project</p>
            <ul class="space-y-2.5 mb-6 text-sm">
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Feature-level access</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Cross-system</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Advanced audit</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Reporting</li>
            </ul>
            <Button class="w-full bg-fire-500 hover:bg-fire-600 text-white border-0">Get Pro</Button>
          </div>

          <!-- Enterprise -->
          <div
            class="p-7 rounded-2xl border border-border bg-card hover:border-fire-500/30 transition-all duration-300">
            <h3 class="text-lg font-bold mb-1">Enterprise</h3>
            <p class="text-sm text-muted-foreground mb-4">Full control</p>
            <p class="text-3xl font-black mb-1">$299</p>
            <p class="text-xs text-muted-foreground mb-6">one-time</p>
            <ul class="space-y-2.5 mb-6 text-sm">
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Full identity system</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Unlimited roles</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Self-hosted</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Internal deploy</li>
            </ul>
            <Button class="w-full" variant="outline">Get Enterprise</Button>
          </div>
        </div>

        <!-- Add-ons -->
        <div class="mt-12 p-6 rounded-2xl border border-border/50 bg-card/30">
          <h3 class="font-bold mb-4 text-center">🔌 Paid Add-ons</h3>
          <div class="flex flex-wrap justify-center gap-4">
            <span class="px-4 py-2 rounded-lg bg-fire-500/10 border border-fire-500/20 text-fire-400 text-sm">SSO
              Integration</span>
            <span
              class="px-4 py-2 rounded-lg bg-fire-500/10 border border-fire-500/20 text-fire-400 text-sm">Multi-tenant
              Identity</span>
            <span class="px-4 py-2 rounded-lg bg-fire-500/10 border border-fire-500/20 text-fire-400 text-sm">Security
              Compliance</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         FINAL CTA
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl sm:text-5xl font-black mb-6 text-balance">
          Stop rebuilding <span class="text-fire-400">identity systems</span>.
        </h2>
        <p class="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
          Every app needs users. Make this the last time you build auth, roles,
          and permissions from scratch.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" class="px-8 bg-fire-500 hover:bg-fire-600 text-white border-0 glow-pulse">
            🔐 Get UserMatrix
          </Button>
          <Button size="lg" variant="outline" class="px-8 border-border hover:border-fire-500/50"
            @click="openLink('https://github.com/calcifer-shop/calcifer')">
            🐙 View Source
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: "🔐",
    title: "Authentication",
    description: "Login, register, 2FA support, and social login stubs. Everything you need to get users in the door.",
    tags: ["JWT", "OAuth", "2FA"],
  },
  {
    icon: "👤",
    title: "Role Management",
    description: "Admin, Manager, User — fully customizable. Create your own roles with granular permission sets.",
    tags: ["RBAC", "Custom Roles"],
  },
  {
    icon: "🔒",
    title: "Permissions",
    description: "Granular can_edit, can_view, can_delete permissions. Control exactly what each role can do.",
    tags: ["Granular", "Policy-based"],
  },
  {
    icon: "📋",
    title: "Audit Log",
    description: "Who did what and when? Complete activity tracking with timestamp, action, and user attribution.",
    tags: ["Compliance", "Tracking"],
  },
  {
    icon: "🧑",
    title: "Profile Management",
    description: "Avatar, metadata, preferences. Let users personalize their experience with extensible profile fields.",
    tags: ["Avatar", "Metadata"],
  },
  {
    icon: "🔗",
    title: "Cross-System Integration",
    description: "RESTful API for all user operations. Designed for multi-system environments with shared identity.",
    tags: ["REST", "Multi-system"],
  },
]

const techIntegrations = [
  {
    icon: "🅰️",
    title: "Angular",
    description: "Drop-in Angular module with services, guards, and components.",
    tags: ["NgModule", "Guards", "Services"],
  },
  {
    icon: "⚡",
    title: "Vue.js",
    description: "Composables, stores, and components for Vue 3 + Pinia.",
    tags: ["Composables", "Pinia", "Vue 3"],
  },
  {
    icon: "🔌",
    title: ".NET API",
    description: "ASP.NET Core API with Identity, JWT, and full user management endpoints.",
    tags: [".NET 8", "Identity", "JWT"],
  },
]

const roles = [
  { icon: "👑", name: "Super Admin", permissions: "Full system access, user creation, role management, settings", highlight: true },
  { icon: "⚙️", name: "Admin", permissions: "User management, content moderation, reports", highlight: false },
  { icon: "📊", name: "Manager", permissions: "Team management, analytics, limited admin functions", highlight: false },
  { icon: "👤", name: "User", permissions: "Profile access, basic features, self-management", highlight: false },
]

const openLink = (url: string) => {
  window.open(url, '_blank')
}

useHead({
  title: 'Calcifer.UserMatrix — Control Access. Everywhere.',
  meta: [
    {
      name: 'description',
      content: 'Calcifer.UserMatrix is the universal access & identity control system. Roles, permissions, feature-level access, audit logs, and cross-system integration.'
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