<template>
  <!-- Calcifer Developer Tools Header -->
  <header :class="[
    'sticky top-0 z-40 transition-all duration-300',
    layoutStore.headerScrolled
      ? 'bg-background/80 backdrop-blur-md border-b border-border/50'
      : 'bg-transparent border-b border-transparent'
  ]">
    <div class="px-6 sm:px-8 max-w-7xl mx-auto">
      <div class="flex items-center justify-between h-16">

        <!-- Left: Brand -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
            <span class="text-xl">🔥</span>
            <span class="text-xl font-black tracking-tight">Calcifer</span>
          </NuxtLink>
        </div>

        <!-- Center: Navigation (hidden on mobile) -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="#features" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#architecture" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Architecture</a>
          <a href="#pricing" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        </nav>

        <!-- Right: Actions -->
        <div class="flex items-center gap-3">
          <!-- GitHub -->
          <a :href="githubUrl" target="_blank" rel="noopener"
            class="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground border border-transparent hover:border-border transition-all">
            <i class="fab fa-github text-base"></i>
            <span>GitHub</span>
          </a>

          <!-- Buy Now CTA -->
          <Button @click="scrollToPricing" size="sm" class="bg-fire-500 hover:bg-fire-600 text-white border-0">
            Buy Now
          </Button>

          <!-- Mobile menu toggle -->
          <Button variant="ghost" size="icon" class="md:hidden" @click="layoutStore.toggleMobileMenu">
            <svg v-if="!layoutStore.mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </Button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="layoutStore.mobileMenuOpen" class="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
        <nav class="px-6 py-4 space-y-3">
          <a href="#features" @click="layoutStore.closeMobileMenu"
            class="block text-sm font-medium text-muted-foreground hover:text-foreground">Features</a>
          <a href="#how-it-works" @click="layoutStore.closeMobileMenu"
            class="block text-sm font-medium text-muted-foreground hover:text-foreground">How It Works</a>
          <a href="#architecture" @click="layoutStore.closeMobileMenu"
            class="block text-sm font-medium text-muted-foreground hover:text-foreground">Architecture</a>
          <a href="#pricing" @click="layoutStore.closeMobileMenu"
            class="block text-sm font-medium text-muted-foreground hover:text-foreground">Pricing</a>
          <div class="pt-3 border-t border-border/50 flex flex-col gap-2">
            <a :href="githubUrl" target="_blank" rel="noopener"
              class="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <i class="fab fa-github"></i>
              Star on GitHub
            </a>
            <Button @click="scrollToPricing(); layoutStore.closeMobileMenu()" class="w-full bg-fire-500 hover:bg-fire-600 text-white border-0 mt-2">
              Buy Now
            </Button>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useLayoutStore } from '@/stores/layout'
import { Button } from '@/components/ui/button'

const layoutStore = useLayoutStore()
const githubUrl = 'https://github.com/calcifer-shop/calcifer'

const scrollToPricing = () => {
  const element = document.getElementById('pricing')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleScroll = () => {
  layoutStore.updateHeaderScroll(window.scrollY)
}

onMounted(() => {
  layoutStore.init()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  layoutStore.destroy()
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>