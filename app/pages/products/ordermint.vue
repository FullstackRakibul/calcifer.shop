<template>
  <div class="min-h-screen bg-background">

    <!-- ═══════════════════════════════════════════
         HERO
         ═══════════════════════════════════════════ -->
    <section class="relative min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/3 left-1/4 w-96 h-96 bg-fire-500/8 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-ember/6 rounded-full blur-[100px]"></div>
      </div>

      <div class="relative z-10 text-center max-w-5xl mx-auto">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fire-500/30 bg-fire-500/5 text-fire-400 text-sm font-medium mb-8 opacity-0 animate-fade-in-down">
          <span class="w-2 h-2 rounded-full bg-fire-400 animate-pulse"></span>
          Facebook-First Business Management
        </div>

        <h1 class="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-6 text-balance opacity-0 animate-fade-in-down" style="animation-delay: 0.1s">
          Turn Facebook Messages<br />
          Into <span class="text-fire-400">Sales, Not Chaos.</span>
        </h1>

        <p class="text-xl text-muted-foreground font-light mb-4 max-w-3xl mx-auto opacity-0 animate-fade-in-down" style="animation-delay: 0.2s">
          The first Facebook-first Business Management System that turns
          Messenger chats into invoices, ledgers, and insights.
        </p>

        <p class="text-base text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-down" style="animation-delay: 0.3s">
          OrderMint tracks orders, creates invoices, and manages your business —
          directly from your Facebook inbox.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style="animation-delay: 0.4s">
          <Button size="lg" class="px-8 bg-fire-500 hover:bg-fire-600 text-white border-0 glow-pulse">
            🚀 Start Free Trial
          </Button>
          <Button size="lg" variant="outline" class="px-8 border-border hover:border-fire-500/50">
            📱 Connect Facebook
          </Button>
          <Button size="lg" variant="outline" class="px-8 border-border hover:border-fire-500/50" @click="scrollTo('how-it-works')">
            🎥 Watch Flow
          </Button>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         THE PROBLEM
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6">
      <div class="max-w-4xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">The Problem</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-8 text-balance leading-tight">
          Your business lives in <span class="text-fire-400">Messenger</span>.<br />
          But your records live <span class="text-muted-foreground">nowhere</span>.
        </h2>

        <div class="p-8 rounded-2xl border border-border/50 bg-card/30 mb-8">
          <p class="text-lg text-foreground/80 italic mb-6 leading-relaxed">
            "I have 500 messages a day. Orders get lost. Customers ask for due amounts.
            I don't know who owes me what."
          </p>
          <p class="text-sm text-muted-foreground">— Every Facebook Seller</p>
        </div>

        <div class="grid sm:grid-cols-2 gap-4">
          <div v-for="(pain, idx) in painPoints" :key="idx"
            class="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-card/30 hover:border-fire-500/30 transition-all duration-300">
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
          You are working… but you are not <span class="text-fire-400 font-medium">measuring</span>.
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         THE SOLUTION — Conversion Flow
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6 bg-card/20">
      <div class="max-w-5xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">The Solution</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-4 text-balance">
          OrderMint turns conversations into<br />
          <span class="text-fire-400">business records</span>.
        </h2>
        <p class="text-lg text-muted-foreground mb-16 max-w-2xl">
          A simple, powerful flow from chat to insight.
        </p>

        <!-- Flow Steps -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div v-for="(step, idx) in solutionFlow" :key="idx"
            class="relative text-center p-6">
            <div class="w-16 h-16 rounded-2xl bg-fire-500/10 border border-fire-500/20 flex items-center justify-center mx-auto mb-5 glow-card">
              <span class="text-2xl">{{ step.icon }}</span>
            </div>
            <h3 class="text-lg font-bold mb-2">{{ step.title }}</h3>
            <p class="text-sm text-muted-foreground">{{ step.subtitle }}</p>
            <div v-if="idx < solutionFlow.length - 1" class="hidden lg:block absolute top-12 -right-3 text-fire-400/50 text-lg">→</div>
          </div>
        </div>

        <!-- Real Flow Example -->
        <div class="p-8 rounded-2xl border border-fire-500/30 bg-fire-500/5 glow-card">
          <h3 class="text-lg font-bold mb-6 text-fire-400">🧪 Real Flow</h3>
          <div class="grid sm:grid-cols-4 gap-4">
            <div class="p-4 rounded-xl bg-background border border-border/50 text-center">
              <p class="text-xs text-muted-foreground mb-2">Message</p>
              <p class="text-sm font-medium">"Vai eta nibo"</p>
            </div>
            <div class="p-4 rounded-xl bg-background border border-border/50 text-center">
              <p class="text-xs text-muted-foreground mb-2">Result</p>
              <p class="text-sm font-medium text-fire-400">→ Order created</p>
            </div>
            <div class="p-4 rounded-xl bg-background border border-border/50 text-center">
              <p class="text-xs text-muted-foreground mb-2">Auto</p>
              <p class="text-sm font-medium text-fire-400">→ Invoice generated</p>
            </div>
            <div class="p-4 rounded-xl bg-background border border-border/50 text-center">
              <p class="text-xs text-muted-foreground mb-2">Tracked</p>
              <p class="text-sm font-medium text-fire-400">→ Ledger updated</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         HOW IT WORKS
         ═══════════════════════════════════════════ -->
    <section id="how-it-works" class="py-28 px-6">
      <div class="max-w-5xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">How It Works</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-16 text-balance">
          Five steps. <span class="text-fire-400">Zero chaos.</span>
        </h2>

        <div class="flex flex-wrap items-center justify-center gap-3 p-6 rounded-2xl border border-border/50 bg-card/30">
          <span v-for="(step, idx) in howItWorks" :key="idx" class="flex items-center gap-3">
            <span class="px-4 py-2 rounded-lg bg-fire-500/10 border border-fire-500/20 text-fire-400 text-sm font-medium">{{ step }}</span>
            <span v-if="idx < howItWorks.length - 1" class="text-fire-400/40">→</span>
          </span>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         CORE FEATURES
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6 bg-card/20">
      <div class="max-w-6xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Core Features</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-16 text-balance">
          Everything your business <span class="text-fire-400">needs</span>.
        </h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(feature, idx) in features" :key="idx"
            class="p-8 rounded-2xl border border-border/50 bg-background hover:border-fire-500/40 transition-all duration-300 hover:-translate-y-1 glow-card">
            <div class="text-3xl mb-5">{{ feature.icon }}</div>
            <h3 class="text-lg font-bold mb-3">{{ feature.title }}</h3>
            <p class="text-muted-foreground text-sm leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         WHY IT WINS
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6">
      <div class="max-w-5xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Why OrderMint Wins</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-16 text-balance">
          Stop using <span class="text-muted-foreground">notebooks</span>.
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Others -->
          <div class="p-8 rounded-2xl border border-border/50 bg-background">
            <h3 class="text-lg font-bold mb-6 text-muted-foreground">What You're Using Now</h3>
            <div class="space-y-4">
              <div v-for="(item, idx) in ['Excel spreadsheets', 'Handwritten notebooks', 'Manual WhatsApp tracking', 'Memory-based accounting', 'Screenshot invoices']" :key="idx" class="flex items-start gap-3">
                <span class="text-destructive/60 shrink-0 mt-0.5">✕</span>
                <p class="text-muted-foreground">{{ item }}</p>
              </div>
            </div>
          </div>

          <!-- OrderMint -->
          <div class="p-8 rounded-2xl border border-fire-500/30 bg-fire-500/5 glow-card">
            <h3 class="text-lg font-bold mb-6 text-fire-400">🧾 OrderMint</h3>
            <div class="space-y-4">
              <div v-for="(item, idx) in ['Automatic order records', 'Digital invoices (image + PDF)', 'Real-time sales tracking', 'Clean business reports', 'Team performance insights']" :key="idx" class="flex items-start gap-3">
                <span class="text-fire-400 shrink-0 mt-0.5">✓</span>
                <p class="text-foreground">{{ item }}</p>
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
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Pricing</p>
          <h2 class="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Start free. <span class="text-fire-400">Scale when ready.</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <!-- Free -->
          <div class="p-8 rounded-2xl border border-border bg-card hover:border-fire-500/30 transition-all duration-300">
            <h3 class="text-lg font-bold mb-2">Free</h3>
            <p class="text-sm text-muted-foreground mb-6">For starter sellers</p>
            <p class="text-4xl font-black mb-1">$0</p>
            <p class="text-xs text-muted-foreground mb-8">forever</p>
            <ul class="space-y-3 mb-8 text-sm">
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> 100 orders/month</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> 1 Facebook page</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Basic reports</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Invoice generation</li>
              <li class="flex items-center gap-2"><span class="text-muted-foreground">—</span> <span class="text-muted-foreground">Advanced insights</span></li>
            </ul>
            <Button class="w-full" variant="outline">
              Start Free
            </Button>
          </div>

          <!-- Pro -->
          <div class="p-8 rounded-2xl border-2 border-fire-500 bg-card relative glow-card hover:-translate-y-1 transition-all duration-300">
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-fire-500 text-xs font-bold text-white">
              RECOMMENDED
            </div>
            <h3 class="text-lg font-bold mb-2">Pro</h3>
            <p class="text-sm text-muted-foreground mb-6">For serious business</p>
            <p class="text-4xl font-black mb-1 text-fire-400">$29<span class="text-lg font-normal text-muted-foreground">/mo</span></p>
            <p class="text-xs text-muted-foreground mb-8">per month</p>
            <ul class="space-y-3 mb-8 text-sm">
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Unlimited orders</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> 5+ Facebook pages</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Advanced insights + exports</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Team management</li>
              <li class="flex items-center gap-2"><span class="text-fire-400">✓</span> Priority support</li>
            </ul>
            <Button class="w-full bg-fire-500 hover:bg-fire-600 text-white border-0">
              Get Pro
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         ROADMAP
         ═══════════════════════════════════════════ -->
    <section class="py-28 px-6">
      <div class="max-w-4xl mx-auto">
        <p class="text-fire-400 text-sm font-semibold uppercase tracking-widest mb-4">Roadmap</p>
        <h2 class="text-4xl sm:text-5xl font-bold mb-16 text-balance">
          What's <span class="text-fire-400">coming</span>.
        </h2>

        <div class="space-y-4">
          <div v-for="(item, idx) in roadmap" :key="idx"
            class="flex items-start gap-5 p-6 rounded-xl border border-border/50 bg-card/30 hover:border-fire-500/20 transition-colors">
            <div class="shrink-0 mt-1">
              <span v-if="item.status === 'in-progress'" class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center">
                <span class="w-2.5 h-2.5 rounded-full bg-fire-400 animate-pulse"></span>
              </span>
              <span v-else class="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground text-xs">○</span>
            </div>
            <div>
              <h3 class="font-bold mb-1">{{ item.title }}</h3>
              <p class="text-sm text-muted-foreground">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         TECH TRUST BADGE
         ═══════════════════════════════════════════ -->
    <section class="py-16 px-6 bg-card/20">
      <div class="max-w-4xl mx-auto text-center">
        <p class="text-muted-foreground text-sm">
          Built on <span class="text-foreground font-medium">.NET 8 + Angular</span>. Secure, scalable, Facebook API approved.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

const painPoints = [
  { title: "Orders lost in chat", detail: "Messages pile up. Orders get missed. Customers get frustrated." },
  { title: "No proper ledger", detail: "You don't know your daily sales, expenses, or profit." },
  { title: "No invoice system", detail: "Customers ask for invoices. You send screenshots." },
  { title: "No sales tracking", detail: "No idea which products sell most or which customers owe money." },
]

const solutionFlow = [
  { icon: "📩", title: "Chat → Order", subtitle: "Messages become records" },
  { icon: "🧾", title: "Order → Invoice", subtitle: "Auto-generated invoices" },
  { icon: "📒", title: "Invoice → Ledger", subtitle: "Digital bookkeeping" },
  { icon: "📊", title: "Ledger → Report", subtitle: "Business intelligence" },
]

const howItWorks = ["Message", "Detect", "Confirm", "Invoice", "Track"]

const features = [
  { icon: "📩", title: "Smart Inbox", description: "All customer messages in one place. No more switching between Messenger tabs." },
  { icon: "🧾", title: "Auto-Invoice", description: "From chat to bill in 2 clicks. Bangladesh-style invoices — image for Facebook, PDF for email." },
  { icon: "📒", title: "Digital Ledger", description: "Sales, expenses, due/advance tracking. Know exactly where your money is." },
  { icon: "📊", title: "Dashboard", description: "Daily sales, best products, team performance. Real business visibility at a glance." },
  { icon: "👥", title: "Team Management", description: "Assign chats, track who closes the most deals. Measure your team's impact." },
  { icon: "🚚", title: "Delivery Pipeline", description: "New → Confirmed → Shipped → Delivered. Track every order's journey." },
]

const roadmap = [
  { title: "📱 WhatsApp Integration", description: "Extend beyond Facebook to WhatsApp Business API", status: "in-progress" },
  { title: "🚚 Courier API", description: "Integrate with local courier services for auto-tracking", status: "planned" },
  { title: "🧠 AI Sales Assistant", description: "AI-powered message detection and auto-responses", status: "planned" },
  { title: "💳 Payment Integration", description: "bKash, Nagad, and card payment tracking", status: "planned" },
]

const scrollTo = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

useHead({
  title: 'OrderMint — Turn Facebook Messages Into Sales',
  meta: [
    {
      name: 'description',
      content: 'OrderMint is the first Facebook-first Business Management System. Turn Messenger chats into invoices, ledgers, and business insights.'
    }
  ]
})
</script>

<style scoped>
@keyframes fade-in-down {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}
</style>
