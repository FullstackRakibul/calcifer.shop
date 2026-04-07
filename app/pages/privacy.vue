<template>
  <div class="min-h-screen bg-background">

    <!-- ═══════════════════════════════════════════
         HERO
         ═══════════════════════════════════════════ -->
    <section class="relative pt-32 pb-16 px-6 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-fire-500/6 rounded-full blur-[120px]"></div>
      </div>

      <div class="relative z-10 max-w-3xl mx-auto">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fire-500/30 bg-fire-500/5 text-fire-400 text-sm font-medium mb-6 opacity-0 animate-fade-in-down">
          <span class="w-2 h-2 rounded-full bg-fire-400 animate-pulse"></span>
          Privacy
        </div>

        <h1
          class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6 opacity-0 animate-fade-in-down"
          style="animation-delay: 0.1s">
          Your data is <span class="text-fire-400">yours.</span><br />
          Always has been. Always will be.
        </h1>

        <p class="text-lg text-muted-foreground font-light max-w-2xl opacity-0 animate-fade-in-down"
          style="animation-delay: 0.2s">
          We believe trust is earned through restraint — not exploitation.
          Here's exactly how we handle your information.
        </p>

        <p class="text-xs uppercase tracking-widest font-semibold text-muted-foreground mt-8 opacity-0 animate-fade-in-down"
          style="animation-delay: 0.3s">
          Last Updated: April 2026
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         POLICY CONTENT
         ═══════════════════════════════════════════ -->
    <section class="pb-24 px-6">
      <div class="max-w-3xl mx-auto space-y-16">

        <!-- What We Collect -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-fire-500/10 flex items-center justify-center text-xl">📋</div>
            <h2 class="text-2xl font-bold text-foreground">What We Collect</h2>
          </div>
          <p class="text-muted-foreground leading-relaxed mb-6">
            We collect only what is necessary to provide and improve our services — nothing more.
            We don't harvest data for advertising. We don't build shadow profiles.
            Every data point we store has a clear, defensible reason to exist.
          </p>
          <div class="grid sm:grid-cols-2 gap-4">
            <div v-for="(item, idx) in dataCollected" :key="idx"
              class="p-5 rounded-xl border border-border/50 bg-card/30">
              <div class="flex items-center gap-3 mb-2">
                <span class="text-fire-400 text-sm font-bold">{{ item.icon }}</span>
                <h3 class="font-semibold text-foreground text-sm">{{ item.title }}</h3>
              </div>
              <p class="text-xs text-muted-foreground leading-relaxed">{{ item.detail }}</p>
            </div>
          </div>
        </div>

        <!-- What We Don't Do -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-fire-500/10 flex items-center justify-center text-xl">🚫</div>
            <h2 class="text-2xl font-bold text-foreground">What We Will Never Do</h2>
          </div>
          <div class="p-6 rounded-2xl border border-fire-500/20 bg-fire-500/5">
            <div class="space-y-4">
              <div v-for="(item, idx) in neverDo" :key="idx" class="flex items-start gap-3">
                <span class="text-destructive/70 shrink-0 mt-0.5 font-bold">✕</span>
                <p class="text-muted-foreground text-sm leading-relaxed">{{ item }}</p>
              </div>
            </div>
            <p class="text-fire-400 font-semibold text-sm mt-6 pt-4 border-t border-fire-500/20">
              We do not believe in turning users into products.
            </p>
          </div>
        </div>

        <!-- How We Protect -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-fire-500/10 flex items-center justify-center text-xl">🔐</div>
            <h2 class="text-2xl font-bold text-foreground">How We Protect Your Data</h2>
          </div>
          <p class="text-muted-foreground leading-relaxed mb-6">
            Security isn't a feature we bolt on at the end — it's woven into the foundation of every system we build.
            Your data is protected at every layer.
          </p>
          <div class="space-y-3">
            <div v-for="(item, idx) in protections" :key="idx"
              class="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/30">
              <div class="shrink-0 w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center">
                <span class="text-fire-400 text-sm">{{ item.icon }}</span>
              </div>
              <div class="flex-1">
                <p class="font-semibold text-foreground text-sm">{{ item.title }}</p>
                <p class="text-xs text-muted-foreground mt-0.5">{{ item.detail }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Your Rights -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-fire-500/10 flex items-center justify-center text-xl">⚖️</div>
            <h2 class="text-2xl font-bold text-foreground">Your Rights</h2>
          </div>
          <p class="text-muted-foreground leading-relaxed mb-6">
            You are always in control. These aren't features we offer as a favor —
            they're rights that belong to you by default.
          </p>
          <div class="grid sm:grid-cols-3 gap-4">
            <div v-for="(right, idx) in userRights" :key="idx"
              class="p-5 rounded-xl border border-border/50 bg-card/30 text-center">
              <div class="text-2xl mb-3">{{ right.icon }}</div>
              <h3 class="font-bold text-foreground text-sm mb-1">{{ right.title }}</h3>
              <p class="text-xs text-muted-foreground leading-relaxed">{{ right.detail }}</p>
            </div>
          </div>
        </div>

        <!-- Closing -->
        <div class="p-8 rounded-2xl border border-fire-500/20 bg-fire-500/5 text-center">
          <p class="text-xl font-bold text-foreground mb-2">Trust is earned through restraint.</p>
          <p class="text-muted-foreground text-sm max-w-lg mx-auto mb-4">
            Not exploitation. Not marketing speak. Through consistent, verifiable action
            that puts your interests ahead of our convenience.
          </p>
          <p class="text-sm text-muted-foreground">
            Questions? Reach us at
            <span class="text-fire-400 font-medium">privacy@calcifer.shop</span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const dataCollected = [
  {
    icon: '👤',
    title: 'Account Information',
    detail: 'Name, email, and credentials needed to identify you and provide access to your account securely.',
  },
  {
    icon: '📊',
    title: 'Usage Analytics',
    detail: 'Anonymized usage patterns that help us understand which features matter most and where to improve.',
  },
  {
    icon: '🔧',
    title: 'System Logs',
    detail: 'Security and performance logs that help us detect threats, debug issues, and maintain system health.',
  },
  {
    icon: '💳',
    title: 'Transaction Records',
    detail: 'Payment details processed through encrypted third-party providers. We never store raw card data.',
  },
]

const neverDo = [
  'Sell, rent, or trade your data to third parties — ever.',
  'Use your data for targeted advertising or behavioral profiling.',
  'Share your information with data brokers or marketing platforms.',
  'Access your data for any purpose beyond providing and improving our services.',
  'Retain your data longer than necessary or after you request deletion.',
]

const protections = [
  {
    icon: '🔒',
    title: 'Encrypted in Transit & at Rest',
    detail: 'TLS 1.3 for all communications. AES-256 encryption for stored data.',
  },
  {
    icon: '🏛️',
    title: 'Industry-Standard Infrastructure',
    detail: 'Hosted on enterprise-grade cloud providers with SOC 2 compliance.',
  },
  {
    icon: '🔑',
    title: 'Controlled Access',
    detail: 'Role-based access controls ensure only authorized systems and processes can touch your data.',
  },
  {
    icon: '📡',
    title: 'Continuous Monitoring',
    detail: 'Real-time threat detection and automated alerts for any suspicious activity.',
  },
]

const userRights = [
  {
    icon: '📥',
    title: 'Access',
    detail: 'Request a complete copy of all data we hold about you, at any time.',
  },
  {
    icon: '🗑️',
    title: 'Deletion',
    detail: 'Request permanent deletion of your data. We comply promptly and completely.',
  },
  {
    icon: '📤',
    title: 'Export',
    detail: 'Export your data in standard formats whenever you need it — no lock-in.',
  },
]

useHead({
  title: 'Privacy Policy — Calcifer.Shop',
  meta: [
    {
      name: 'description',
      content: 'Your data is yours. Always has been. Always will be. Learn how Calcifer.Shop protects your privacy with strict security practices and transparent data policies.',
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
