<template>
  <div class="min-h-screen pt-32 pb-20 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-4 capitalize">
          {{ clubName }} Collection
        </h1>
        <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
          Exclusive access to the most refined audio engineering in the world. 
          Limited production. Unrivaled performance.
        </p>
      </div>

      <!-- Single Product Showcase (Since it's a single product site) -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="relative group aspect-square rounded-3xl overflow-hidden bg-muted">
          <img :src="product.heroImage" :alt="product.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <span class="text-xs uppercase tracking-[0.2em] text-white/70 mb-2">Flagship Model</span>
            <h2 class="text-3xl font-bold text-white">{{ product.name }}</h2>
          </div>
        </div>

        <div class="space-y-8">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
              <HugeiconsIcon :icon="clubIcon" :size="14" />
              {{ clubName }} Approved
            </div>
            <h2 class="text-3xl font-bold mb-4">{{ product.tagline }}</h2>
            <p class="text-muted-foreground leading-relaxed">
              {{ product.description }}
            </p>
          </div>

          <div class="space-y-4">
            <div v-for="(val, key) in displaySpecs" :key="key" class="flex justify-between py-3 border-b border-border text-sm">
              <span class="text-muted-foreground">{{ key }}</span>
              <span class="font-medium">{{ val }}</span>
            </div>
          </div>

          <div class="flex items-center gap-6">
            <div class="text-3xl font-bold">${{ product.price }}</div>
            <Button size="lg" class="px-8 h-14 text-md" @click="handleAddToCart">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/products'
import { Button } from '@/components/ui/button'
import { HugeiconsIcon } from '@hugeicons/vue'
import { CpuIcon, DiamondIcon, Airplane01Icon } from '@hugeicons/core-free-icons'

const route = useRoute()
const productStore = useProductStore()
const product = computed(() => productStore.product)

const club = computed(() => route.query.club as string || 'General')

const clubName = computed(() => {
  switch(club.value) {
    case 'quantum': return 'Quantum'
    case 'elegance': return 'Elegance'
    case 'nextstop': return 'NextStop'
    default: return 'Premium'
  }
})

const clubIcon = computed(() => {
  switch(club.value) {
    case 'quantum': return CpuIcon
    case 'elegance': return DiamondIcon
    case 'nextstop': return Airplane01Icon
    default: return CpuIcon
  }
})

const displaySpecs = {
  "Audio Codecs": "LDAC, aptX Adaptive, AAC",
  "Driver Type": "Beryllium Dynamic",
  "Noise Control": "Adaptive Hybrid ANC",
  "Material": "Grade 5 Titanium & Leather"
}

const handleAddToCart = () => {
  productStore.addToCart(1)
}

useHead({
  title: `${clubName.value} Collection - Calcifer.shop`
})
</script>
