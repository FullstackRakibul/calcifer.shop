<template>
  <div class="min-h-screen bg-background">

    <!-- ═══════════════════════════════════════════
         HERO
         ═══════════════════════════════════════════ -->
    <section class="relative pt-32 pb-16 px-6 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/3 left-1/3 w-96 h-96 bg-fire-500/6 rounded-full blur-[120px]"></div>
      </div>

      <div class="relative z-10 max-w-3xl mx-auto">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fire-500/30 bg-fire-500/5 text-fire-400 text-sm font-medium mb-6 opacity-0 animate-fade-in-down">
          <span class="w-2 h-2 rounded-full bg-fire-400 animate-pulse"></span>
          Legal
        </div>

        <h1
          class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6 opacity-0 animate-fade-in-down"
          style="animation-delay: 0.1s">
          Use it with <span class="text-fire-400">respect,</span><br />
          and it will serve you well.
        </h1>

        <p class="text-lg text-muted-foreground font-light max-w-2xl opacity-0 animate-fade-in-down"
          style="animation-delay: 0.2s">
          This is a partnership — not just a platform.
          Clear terms, honest expectations, mutual respect.
        </p>

        <p class="text-xs uppercase tracking-widest font-semibold text-muted-foreground mt-8 opacity-0 animate-fade-in-down"
          style="animation-delay: 0.3s">
          Effective Date: April 2026
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         TERMS CONTENT
         ═══════════════════════════════════════════ -->
    <section class="pb-24 px-6">
      <div class="max-w-3xl mx-auto space-y-16">

        <!-- Your Responsibilities -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-fire-500/10 flex items-center justify-center text-xl">🤝</div>
            <h2 class="text-2xl font-bold text-foreground">Your Responsibilities</h2>
          </div>
          <p class="text-muted-foreground leading-relaxed mb-6">
            By using our platform, you're entering a professional relationship.
            We keep things straightforward — no 40-page legalese, no hidden clauses.
            Here's what we expect from each other.
          </p>
          <div class="space-y-3">
            <div v-for="(item, idx) in userResponsibilities" :key="idx"
              class="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-card/30">
              <div class="shrink-0 w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center">
                <span class="text-fire-400 text-sm">{{ item.icon }}</span>
              </div>
              <div>
                <p class="font-semibold text-foreground text-sm">{{ item.title }}</p>
                <p class="text-xs text-muted-foreground mt-1 leading-relaxed">{{ item.detail }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- What We Provide -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-fire-500/10 flex items-center justify-center text-xl">🔥</div>
            <h2 class="text-2xl font-bold text-foreground">What We Provide</h2>
          </div>
          <p class="text-muted-foreground leading-relaxed mb-6">
            In return for your trust and fair use, we commit to building and maintaining
            systems that genuinely serve your business — not just our metrics.
          </p>
          <div class="grid sm:grid-cols-3 gap-4">
            <div v-for="(item, idx) in weProvide" :key="idx"
              class="p-5 rounded-xl border border-border/50 bg-card/30 text-center hover:border-fire-500/30 transition-colors duration-300">
              <div class="text-2xl mb-3">{{ item.icon }}</div>
              <h3 class="font-bold text-foreground text-sm mb-1">{{ item.title }}</h3>
              <p class="text-xs text-muted-foreground leading-relaxed">{{ item.detail }}</p>
            </div>
          </div>
        </div>

        <!-- Our Rights -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-fire-500/10 flex items-center justify-center text-xl">⚙️</div>
            <h2 class="text-2xl font-bold text-foreground">Our Rights</h2>
          </div>
          <p class="text-muted-foreground leading-relaxed mb-6">
            To maintain a healthy platform for everyone, we reserve certain rights.
            We exercise them responsibly and transparently.
          </p>
          <div class="space-y-3">
            <div v-for="(item, idx) in ourRights" :key="idx"
              class="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/30">
              <span class="text-fire-400 shrink-0 mt-0.5">→</span>
              <div>
                <p class="font-semibold text-foreground text-sm">{{ item.title }}</p>
                <p class="text-xs text-muted-foreground mt-1 leading-relaxed">{{ item.detail }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Reality Check -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-fire-500/10 flex items-center justify-center text-xl">⚠️</div>
            <h2 class="text-2xl font-bold text-foreground">The Reality Check</h2>
          </div>
          <div class="p-6 rounded-2xl border border-fire-500/20 bg-fire-500/5">
            <p class="text-muted-foreground leading-relaxed mb-6">
              We build strong systems — but no system is perfect. Honesty is better than false promises.
            </p>

            <div class="grid sm:grid-cols-2 gap-4 mb-6">
              <div class="p-4 rounded-xl bg-background border border-border/50">
                <p class="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-3">We do not guarantee</p>
                <div class="space-y-2">
                  <div v-for="(item, idx) in noGuarantees" :key="idx" class="flex items-start gap-2">
                    <span class="text-destructive/60 shrink-0 mt-0.5 text-xs">✕</span>
                    <p class="text-muted-foreground text-xs leading-relaxed">{{ item }}</p>
                  </div>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-background border border-fire-500/20">
                <p class="text-xs uppercase tracking-widest font-semibold text-fire-400 mb-3">But we commit to</p>
                <div class="space-y-2">
                  <div v-for="(item, idx) in commitments" :key="idx" class="flex items-start gap-2">
                    <span class="text-fire-400 shrink-0 mt-0.5 text-xs">✓</span>
                    <p class="text-foreground text-xs leading-relaxed">{{ item }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Intellectual Property -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-fire-500/10 flex items-center justify-center text-xl">©️</div>
            <h2 class="text-2xl font-bold text-foreground">Intellectual Property</h2>
          </div>
          <p class="text-muted-foreground leading-relaxed mb-4">
            All Calcifer products, designs, code, documentation, and branding are the intellectual property
            of Calcifer.Shop and its licensors. Licensed products are granted for use under the terms
            of their specific tier — Solo, Team, Enterprise, or Custom.
          </p>
          <p class="text-muted-foreground leading-relaxed">
            Your data, configurations, and business logic built on top of our systems remain yours.
            We never claim ownership of what you build. The tools are ours — the output is yours.
          </p>
        </div>

        <!-- Closing -->
        <div class="p-8 rounded-2xl border border-fire-500/20 bg-fire-500/5 text-center">
          <p class="text-xl font-bold text-foreground mb-2">This is a partnership.</p>
          <p class="text-muted-foreground text-sm max-w-lg mx-auto mb-4">
            Not just a platform. We build systems for people who value clarity, control,
            and honest relationships. If that resonates — we're glad you're here.
          </p>
          <p class="text-sm text-muted-foreground">
            Questions? Contact
            <span class="text-fire-400 font-medium">legal@calcifer.shop</span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const userResponsibilities = [
  {
    icon: '✅',
    title: 'Use the system for lawful and ethical business purposes',
    detail: 'Our tools are designed for legitimate business operations. Use them to build, manage, and grow — not to harm, deceive, or exploit.',
  },
  {
    icon: '🔒',
    title: 'Maintain the confidentiality of your account credentials',
    detail: 'Your account is your gateway. Keep your credentials secure. Enable two-factor authentication when available. Report any suspected unauthorized access immediately.',
  },
  {
    icon: '🚫',
    title: 'Do not attempt to disrupt, exploit, or reverse-engineer the system',
    detail: 'Respect the integrity of the platform. Automated scraping, penetration testing without permission, and attempts to circumvent licensing are prohibited.',
  },
  {
    icon: '📋',
    title: 'Comply with applicable laws and regulations',
    detail: 'You are responsible for ensuring your use of the platform complies with local, national, and international laws relevant to your business.',
  },
]

const weProvide = [
  {
    icon: '🛠️',
    title: 'Reliable Tools',
    detail: 'Consistent, tested access to all features included in your tier.',
  },
  {
    icon: '🔄',
    title: 'Continuous Updates',
    detail: 'Regular improvements, security patches, and new capabilities.',
  },
  {
    icon: '📞',
    title: 'Support & Uptime',
    detail: 'Reasonable uptime targets and responsive support for your tier.',
  },
]

const ourRights = [
  {
    title: 'Suspend accounts that violate usage policies',
    detail: 'If a user engages in abusive, fraudulent, or harmful behavior, we may restrict or terminate access to protect the platform and its users.',
  },
  {
    title: 'Update features and structure as the platform evolves',
    detail: 'We continuously improve our systems. Features may be added, modified, or deprecated. We\'ll communicate significant changes in advance.',
  },
  {
    title: 'Modify pricing with reasonable notice',
    detail: 'Pricing may change as the platform grows. Existing licenses and active subscriptions are honored under their original terms until renewal.',
  },
]

const noGuarantees = [
  '100% uninterrupted service at all times',
  'Absolute prevention of all external security threats',
  'Compatibility with every third-party integration',
  'That all features will remain unchanged indefinitely',
]

const commitments = [
  'Full transparency about outages, incidents, and changes',
  'Fast response times and honest communication',
  'Continuous improvement based on real-world usage',
  'Respect for your data, your time, and your trust',
]

useHead({
  title: 'Terms of Service — Calcifer.Shop',
  meta: [
    {
      name: 'description',
      content: 'Terms of Service for Calcifer.Shop. Clear terms, honest expectations, mutual respect. Use it with respect, and it will serve you well.',
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
