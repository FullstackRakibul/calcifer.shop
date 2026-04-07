<template>
  <div class="min-h-screen bg-background">

    <!-- ═══════════════════════════════════════════
         HERO
         ═══════════════════════════════════════════ -->
    <section class="relative pt-32 pb-20 px-6 overflow-hidden">
      <!-- Fire Glow -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/3 left-1/4 w-96 h-96 bg-fire-500/8 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-1/4 right-1/3 w-80 h-80 bg-ember/6 rounded-full blur-[100px]"></div>
      </div>

      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fire-500/30 bg-fire-500/5 text-fire-400 text-sm font-medium mb-6 opacity-0 animate-fade-in-down">
          <span class="w-2 h-2 rounded-full bg-fire-400 animate-pulse"></span>
          Support
        </div>

        <h1
          class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6 opacity-0 animate-fade-in-down"
          style="animation-delay: 0.1s">
          Questions? <span class="text-fire-400">Good.</span><br />
          That means you're thinking.
        </h1>

        <p class="text-lg text-muted-foreground font-light max-w-2xl mx-auto opacity-0 animate-fade-in-down"
          style="animation-delay: 0.2s">
          We've collected the most common questions from developers, freelancers, and teams
          who are evaluating Calcifer for their next project.
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         FAQ ACCORDION
         ═══════════════════════════════════════════ -->
    <section class="pb-24 px-6">
      <div class="max-w-3xl mx-auto">
        <div class="space-y-4">
          <div v-for="(item, index) in faqs" :key="index"
            class="group rounded-xl border transition-all duration-300"
            :class="activeIndex === index
              ? 'border-fire-500/30 bg-fire-500/5'
              : 'border-border/50 bg-card/30 hover:border-fire-500/20'">
            <button @click="toggle(index)"
              class="w-full px-6 py-5 flex items-center gap-4 text-left transition-colors">
              <div
                class="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-lg transition-colors duration-300"
                :class="activeIndex === index ? 'bg-fire-500/10 text-fire-400' : 'bg-muted text-muted-foreground'">
                {{ item.icon }}
              </div>
              <span class="flex-1 font-semibold text-foreground">{{ item.q }}</span>
              <HugeiconsIcon :icon="ArrowDown01Icon" :size="18"
                :class="['transition-transform duration-300 text-muted-foreground', activeIndex === index ? 'rotate-180 text-fire-400' : '']" />
            </button>
            <Transition name="accordion">
              <div v-if="activeIndex === index"
                class="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">
                <div class="pl-12">
                  <p v-for="(line, li) in item.a" :key="li" :class="li > 0 ? 'mt-3' : ''">{{ line }}</p>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Closing -->
        <div class="mt-16 p-8 rounded-2xl border border-fire-500/20 bg-fire-500/5 text-center">
          <p class="text-xl font-bold text-foreground mb-2">Still wondering?</p>
          <p class="text-muted-foreground mb-6">
            That means you're thinking like a builder. Let's figure it out together.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <NuxtLink to="/docs">
              <Button variant="outline" class="px-6 border-border hover:border-fire-500/50">
                📚 Read the Docs
              </Button>
            </NuxtLink>
            <NuxtLink to="/contact">
              <Button class="px-6 bg-fire-500 hover:bg-fire-600 text-white border-0">
                💬 Talk to Us
              </Button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { HugeiconsIcon } from '@hugeicons/vue'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/button'

const activeIndex = ref<number | null>(0)
const toggle = (i: number) => activeIndex.value = activeIndex.value === i ? null : i

const faqs = [
  {
    icon: '🛡️',
    q: 'Why should I trust your platform?',
    a: [
      'Because we design for control, not dependency. Your data stays yours — always. Our systems are built to make your decisions clearer, not to lock you in.',
      'Every tool we ship is designed with transparency in mind. You can inspect, extend, and own the outcome. We don\'t believe in vendor lock-in — we believe in value that earns loyalty.',
    ],
  },
  {
    icon: '🏗️',
    q: 'Is this suitable for small businesses?',
    a: [
      'Absolutely. In fact, Calcifer is designed for businesses that are growing and need structure before chaos takes over.',
      'Whether you\'re a solo founder managing your first product, or a small team scaling to 20 clients — our systems give you the operational backbone that most companies don\'t build until it\'s too late.',
    ],
  },
  {
    icon: '🧩',
    q: 'Can I customize the system?',
    a: [
      'Yes. Our architecture is modular — meaning you can extend, swap, and adapt individual modules based on your business needs without touching the core.',
      'Need a custom reporting module? Want to plug in a different auth provider? The system is designed to grow with you, not against you.',
    ],
  },
  {
    icon: '⚡',
    q: 'What makes this different from other tools?',
    a: [
      'Most tools add features. We remove confusion.',
      'Other platforms give you 50 buttons and 12 dashboards. We give you one system that actually makes sense — where every feature exists because a real business needed it, not because a product manager needed a roadmap item.',
    ],
  },
  {
    icon: '🔐',
    q: 'What about data security?',
    a: [
      'We follow strict security practices — encryption in transit and at rest, controlled access policies, and industry-standard infrastructure.',
      'Your data is treated like an asset, not a commodity. We don\'t sell it, rent it, or trade it. Period.',
    ],
  },
  {
    icon: '🔄',
    q: 'Will there be updates?',
    a: [
      'Constantly. A system that doesn\'t evolve becomes irrelevant.',
      'We actively maintain and improve every product. Updates include security patches, performance improvements, new module capabilities, and architecture refinements based on real-world usage patterns.',
    ],
  },
  {
    icon: '💰',
    q: 'How does pricing work?',
    a: [
      'Simple and predictable. Solo developers start free. Teams pay a subscription for collaboration features. Enterprises get a one-time license for full ownership.',
      'No hidden fees. No surprise price hikes. Visit individual product pages for detailed tier breakdowns.',
    ],
  },
  {
    icon: '🤝',
    q: 'Do you offer support?',
    a: [
      'Every tier includes community support via GitHub discussions. Team and Enterprise tiers include priority support channels with guaranteed response times.',
      'We also have comprehensive documentation, getting-started guides, and architecture walkthroughs to help you onboard quickly.',
    ],
  },
]

useHead({
  title: 'FAQ — Calcifer.Shop',
  meta: [
    {
      name: 'description',
      content: 'Frequently asked questions about Calcifer.Shop — pricing, security, customization, and how our business-ready software systems work for individuals, teams, and enterprises.',
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

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
