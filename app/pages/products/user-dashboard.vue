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
          Angular · Vue · .NET API
        </div>

        <h1
          class="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-6 text-balance opacity-0 animate-fade-in-down"
          style="animation-delay: 0.1s">
          User Management<br />
          <span class="text-fire-400">Dashboard</span>
        </h1>

        <p class="text-xl text-muted-foreground font-light mb-4 max-w-2xl mx-auto opacity-0 animate-fade-in-down"
          style="animation-delay: 0.2s">
          The Universal Identity Hub for Any App.
        </p>

        <p class="text-base text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-down"
          style="animation-delay: 0.3s">
          Roles, permissions, audit logs, and profile management — ready to drop
          into your Angular or Vue project. The last user system you'll ever need.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
          style="animation-delay: 0.4s">
          <Button size="lg" class="px-8 bg-fire-500 hover:bg-fire-600 text-white border-0">
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
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Features</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-4 text-balance">
          Everything you need for <span class="text-fire-400">user management</span>.
        </h2>
        <p class="text-lg text-muted-foreground mb-16 max-w-2xl">
          Complete identity infrastructure, ready to plug into any project.
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
         WHY SEPARATE?
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6">
      <div class="max-w-4xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Philosophy</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-8 text-balance">
          Why a <span class="text-fire-400">separate</span> dashboard?
        </h2>

        <div class="p-8 rounded-2xl border border-fire-500/30 bg-fire-500/5 glow-card">
          <p class="text-xl text-foreground/90 leading-relaxed mb-6">
            Because <span class="text-fire-400 font-semibold">every app needs users</span>.
          </p>
          <p class="text-muted-foreground leading-relaxed mb-6">
            You shouldn't rebuild auth, roles, and profile management for every project.
            Steal this dashboard, plug in your API, and focus on your
            <span class="text-foreground font-medium">actual product</span>.
          </p>
          <p class="text-muted-foreground leading-relaxed">
            This is a battle-tested internal system, now available publicly.
            It's the same user management layer we use across Calcifer products.
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
         ROLE HIERARCHY VISUAL
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6">
      <div class="max-w-4xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Role System</p>
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
         FINAL CTA
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6 bg-card/20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl sm:text-5xl font-black mb-6 text-balance">
          Stop rebuilding <span class="text-fire-400">user systems</span>.
        </h2>
        <p class="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
          Every app needs users. Make this the last time you build auth, roles,
          and profile management from scratch.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" class="px-8 bg-fire-500 hover:bg-fire-600 text-white border-0 glow-pulse">
            📦 Get the Dashboard
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
    title: "API Integration",
    description: "RESTful API endpoints for all user operations. Documented, versioned, and ready for your frontend.",
    tags: ["REST", "Swagger"],
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
  title: 'User Management Dashboard — The Universal Identity Hub',
  meta: [
    {
      name: 'description',
      content: 'A complete user management dashboard with auth, roles, permissions, audit logs, and profile management. Ready to drop into Angular, Vue, or .NET projects.'
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