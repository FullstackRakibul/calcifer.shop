<template>
  <div class="min-h-screen pt-32 pb-20 px-6">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold tracking-tight mb-8 text-center">Frequently Asked Questions</h1>
      
      <div class="space-y-4">
        <div v-for="(item, index) in faqs" :key="index" 
          class="bg-card border border-border rounded-xl overflow-hidden">
          <button @click="toggle(index)" 
            class="w-full px-6 py-4 flex items-center justify-center text-left hover:bg-muted/50 transition-colors">
            <span class="flex-1 font-medium">{{ item.q }}</span>
            <HugeiconsIcon :icon="ArrowDown01Icon" :size="18" 
              :class="['transition-transform duration-300', activeIndex === index ? 'rotate-180' : '']" />
          </button>
          <div v-if="activeIndex === index" class="px-6 py-4 border-t border-border text-muted-foreground text-sm leading-relaxed">
            {{ item.a }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { HugeiconsIcon } from '@hugeicons/vue'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons'

const activeIndex = ref<number | null>(0)
const toggle = (i: number) => activeIndex.value = activeIndex.value === i ? null : i

const faqs = [
  { q: "What makes Calcifer different?", a: "Unlike mass-produced audio, Calcifer uses hand-selected drivers and a custom acoustic resonance chamber designed to deliver studio-pure sound in any environment." },
  { q: "Does it support high-res audio?", a: "Yes, Calcifer supports LDAC and aptX Adaptive codecs, ensuring bit-perfect streaming from any compatible device." },
  { q: "What is the warranty period?", a: "Every Calcifer system comes with a 2-year international limited warranty covering both parts and labor." },
  { q: "How long does the battery last?", a: "Up to 40 hours with Active Noise Cancellation enabled, and 50 hours with it disabled." },
  { q: "Can I connect multiple devices?", a: "Absolutely. Calcifer features Bluetooth 5.3 Multipoint connectivity, allowing you to switch seamlessly between your laptop and phone." }
]

useHead({
  title: 'FAQ - Calcifer.shop'
})
</script>
