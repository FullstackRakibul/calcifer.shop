<template>
  <div class="min-h-screen bg-background">

    <!-- ═══════════════════════════════════════════
         HERO
         ═══════════════════════════════════════════ -->
    <section class="relative pt-32 pb-16 px-6 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/4 right-1/3 w-96 h-96 bg-fire-500/8 rounded-full blur-[120px]"></div>
      </div>

      <div class="relative z-10 max-w-4xl mx-auto">
        <div class="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <NuxtLink to="/docs" class="hover:text-fire-400 transition-colors">Docs</NuxtLink>
          <span>/</span>
          <span class="text-fire-400 font-medium">Calcifer.OrderMint</span>
        </div>

        <div class="flex items-center gap-4 mb-6">
          <div class="text-5xl">🛒</div>
          <div>
            <div
              class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-fire-500/10 text-fire-400 text-xs font-bold mb-2">
              Business System
            </div>
            <h1 class="text-4xl sm:text-5xl font-black tracking-tighter">Calcifer.OrderMint</h1>
          </div>
        </div>

        <p class="text-lg text-muted-foreground font-light max-w-3xl">
          The social commerce management system that turns Facebook Messenger chaos
          into structured, trackable business operations — with invoicing, ledger management,
          and real-time reporting built in.
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SIDEBAR + CONTENT
         ═══════════════════════════════════════════ -->
    <section class="pb-24 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-4 gap-12">

          <!-- Sidebar -->
          <aside class="lg:col-span-1">
            <nav class="sticky top-24 space-y-1">
              <p class="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-3">On This Page</p>
              <button v-for="(section, idx) in sections" :key="section.id" @click="scrollToSection(section.id)"
                class="w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200" :class="activeSection === idx
                  ? 'bg-fire-500/10 text-fire-400 font-medium'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'">
                {{ section.title }}
              </button>
            </nav>
            <ScrollSpy :sections="sections" @activeChange="activeSection = $event" />
          </aside>

          <!-- Content -->
          <div class="lg:col-span-3 space-y-16">

            <!-- Overview -->
            <div id="overview">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Overview
              </h2>
              <div class="prose-section">
                <p>
                  OrderMint was born from a real problem: thousands of small businesses across South and Southeast Asia
                  run their entire operations through Facebook Messenger — taking orders via chat, tracking payments
                  manually,
                  and losing data in the process.
                </p>
                <p>
                  OrderMint transforms that chaos into structure. It captures orders from social channels,
                  generates invoices, maintains double-entry ledgers, tracks inventory, and generates reports —
                  all from conversations that were previously just text on a screen.
                </p>

                <div class="mt-6 p-5 rounded-xl border border-fire-500/20 bg-fire-500/5">
                  <p class="text-sm font-semibold text-fire-400 mb-2">💡 Why This Matters</p>
                  <p class="text-sm text-muted-foreground">
                    For many small businesses, the jump from "selling on Facebook" to "running a real business"
                    feels impossible. OrderMint bridges that gap — giving informal businesses formal tools
                    without requiring them to change how they already work.
                  </p>
                </div>
              </div>
            </div>

            <!-- Order Pipeline -->
            <div id="pipeline">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Order Processing Pipeline
              </h2>
              <div class="prose-section">
                <p>
                  The order pipeline is the core workflow engine. It tracks every order from initial message
                  through confirmation, fulfillment, and delivery — with status updates at every stage.
                </p>

                <div class="mt-6 space-y-3">
                  <div v-for="(step, idx) in pipelineSteps" :key="idx"
                    class="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/30">
                    <div
                      class="shrink-0 w-8 h-8 rounded-full bg-fire-500/10 flex items-center justify-center text-fire-400 text-sm font-bold">
                      {{ idx + 1 }}
                    </div>
                    <div>
                      <p class="font-semibold text-foreground text-sm">{{ step.title }}</p>
                      <p class="text-xs text-muted-foreground mt-1 leading-relaxed">{{ step.detail }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Integrations -->
            <div id="integrations">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Integrations
              </h2>
              <div class="prose-section">
                <p>
                  OrderMint is designed to plug into the channels where your business already operates.
                  No need to force customers onto a new platform — meet them where they are.
                </p>

                <div class="grid sm:grid-cols-2 gap-4 mt-6">
                  <div v-for="(item, idx) in integrations" :key="idx"
                    class="p-5 rounded-xl border border-border/50 bg-card/30">
                    <div class="flex items-center gap-3 mb-3">
                      <span class="text-xl">{{ item.icon }}</span>
                      <h3 class="font-bold text-foreground text-sm">{{ item.title }}</h3>
                      <span v-if="item.status"
                        class="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider"
                        :class="item.status === 'live' ? 'bg-green-500/10 text-green-400' : 'bg-fire-500/10 text-fire-400'">
                        {{ item.status }}
                      </span>
                    </div>
                    <p class="text-xs text-muted-foreground leading-relaxed">{{ item.detail }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Reporting -->
            <div id="reporting">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Reporting Engine
              </h2>
              <div class="prose-section">
                <p>
                  Real-time insights without manual spreadsheets. The reporting engine aggregates
                  order data, revenue metrics, customer behavior, and fulfillment performance
                  into actionable dashboards.
                </p>

                <div class="space-y-3 mt-6">
                  <div v-for="(report, idx) in reports" :key="idx"
                    class="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/30">
                    <span class="text-fire-400 shrink-0 mt-0.5">{{ report.icon }}</span>
                    <div>
                      <p class="font-semibold text-foreground text-sm">{{ report.title }}</p>
                      <p class="text-xs text-muted-foreground mt-1 leading-relaxed">{{ report.detail }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Invoice & Ledger -->
            <div id="invoicing">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Invoice & Ledger System
              </h2>
              <div class="prose-section">
                <p>
                  Every order generates a structured invoice. Every payment updates the ledger.
                  The double-entry bookkeeping system ensures your financial data is always accurate
                  and audit-ready — even if you started with nothing but DMs.
                </p>

                <div class="mt-6 rounded-xl border border-border/50 overflow-hidden">
                  <div class="px-4 py-2 bg-muted/50 border-b border-border/50">
                    <span class="text-xs text-muted-foreground font-mono">Invoice Generation Flow</span>
                  </div>
                  <pre class="p-4 text-xs text-muted-foreground leading-relaxed overflow-x-auto bg-card/30"><code>Order Confirmed
  → Invoice Generated (INV-2026-00142)
    → Line items populated from order details
    → Tax calculated based on region
    → PDF generated & stored
  → Payment Recorded
    → Ledger updated (debit: receivables, credit: revenue)
    → Balance recalculated
  → Receipt sent to customer via Messenger</code></pre>
                </div>
              </div>
            </div>

            <!-- Webhook Config -->
            <div id="webhooks">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Webhook Configuration
              </h2>
              <div class="prose-section">
                <p>
                  OrderMint supports webhooks for key business events — allowing you to integrate
                  with external systems, trigger notifications, or sync data with your existing tools.
                </p>

                <div class="mt-6 rounded-xl border border-border/50 overflow-hidden">
                  <div class="px-4 py-2 bg-muted/50 border-b border-border/50 flex items-center justify-between">
                    <span class="text-xs text-muted-foreground font-mono">POST /api/webhooks/configure</span>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-fire-500/10 text-fire-400 font-bold">EXAMPLE</span>
                  </div>
                  <pre class="p-4 text-xs text-muted-foreground leading-relaxed overflow-x-auto bg-card/30"><code>{
  "url": "https://your-server.com/webhook",
  "events": [
    "order.created",
    "order.confirmed",
    "payment.received",
    "invoice.generated"
  ],
  "secret": "whsec_your_signing_secret",
  "active": true
}</code></pre>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div class="p-8 rounded-2xl border border-fire-500/20 bg-fire-500/5 text-center">
              <p class="text-xl font-bold text-foreground mb-2">Turn conversations into commerce.</p>
              <p class="text-muted-foreground text-sm max-w-lg mx-auto mb-6">
                OrderMint gives informal businesses formal tools — without changing how they already work.
              </p>
              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <NuxtLink to="/products/ordermint">
                  <Button class="px-6 bg-fire-500 hover:bg-fire-600 text-white border-0">
                    🛒 Get OrderMint
                  </Button>
                </NuxtLink>
                <NuxtLink to="/docs">
                  <Button variant="outline" class="px-6 border-border hover:border-fire-500/50">
                    ← Back to Docs
                  </Button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import ScrollSpy from '@/components/ScrollSpy.vue'
import { useScrollToHash } from '@/composables/useScrollToHash'

const { scrollToElement } = useScrollToHash()
const activeSection = ref(0)

const sections = [
  { id: 'overview', title: 'Overview' },
  { id: 'pipeline', title: 'Order Pipeline' },
  { id: 'integrations', title: 'Integrations' },
  { id: 'reporting', title: 'Reporting Engine' },
  { id: 'invoicing', title: 'Invoice & Ledger' },
  { id: 'webhooks', title: 'Webhooks' },
]

function scrollToSection(id: string) {
  scrollToElement(id)
  window.history.pushState({}, '', `#${id}`)
}

const pipelineSteps = [
  {
    title: 'Message Received',
    detail: 'A customer sends a message via Facebook Messenger, Instagram, or WhatsApp. The system detects order intent using keyword matching or AI parsing.',
  },
  {
    title: 'Order Created',
    detail: 'The message is parsed into a structured order — product, quantity, customer info, delivery details. The operator confirms or adjusts.',
  },
  {
    title: 'Invoice Generated',
    detail: 'An invoice is automatically generated with line items, tax calculations, and payment instructions. Sent back to the customer for confirmation.',
  },
  {
    title: 'Payment Tracked',
    detail: 'Payment is recorded against the invoice. The ledger updates automatically. Multiple payment methods supported (bank transfer, mobile wallet, COD).',
  },
  {
    title: 'Fulfillment & Delivery',
    detail: 'Order moves to fulfillment queue. Delivery status is tracked. Customer is notified at each stage through their original messaging channel.',
  },
]

const integrations = [
  {
    icon: '💬',
    title: 'Facebook Messenger',
    status: 'live',
    detail: 'Direct integration with Facebook Page Messenger. Auto-detection of order messages, customer identification, and automated responses.',
  },
  {
    icon: '📸',
    title: 'Instagram DMs',
    status: 'live',
    detail: 'Process orders from Instagram Direct Messages. Product image recognition and story-to-order conversion.',
  },
  {
    icon: '📱',
    title: 'WhatsApp Business',
    status: 'planned',
    detail: 'WhatsApp Business API integration for markets where WhatsApp is the primary commerce channel.',
  },
  {
    icon: '🔗',
    title: 'Custom Webhooks',
    status: 'live',
    detail: 'Connect OrderMint to any external system via webhooks. Trigger actions on order events, payment confirmations, and status changes.',
  },
]

const reports = [
  {
    icon: '📈',
    title: 'Revenue Dashboard',
    detail: 'Daily, weekly, and monthly revenue tracking with trend analysis. Compare periods, identify growth patterns, and forecast performance.',
  },
  {
    icon: '👥',
    title: 'Customer Analytics',
    detail: 'Track repeat customers, average order value, customer lifetime value, and purchase frequency across all channels.',
  },
  {
    icon: '📦',
    title: 'Fulfillment Metrics',
    detail: 'Monitor order-to-delivery time, fulfillment success rate, and bottleneck identification in your supply chain.',
  },
  {
    icon: '💰',
    title: 'Financial Ledger',
    detail: 'Complete double-entry bookkeeping with receivables, payables, and real-time balance sheets. Audit-ready from day one.',
  },
]

useHead({
  title: 'Calcifer.OrderMint Documentation — Calcifer.Shop',
  meta: [
    {
      name: 'description',
      content: 'Complete documentation for Calcifer.OrderMint — the social commerce business system with order processing, invoicing, and real-time reporting.',
    },
  ],
})
</script>

<style scoped></style>