<template>
  <!-- Calcifer Multi-Product Header -->
  <header :class="[
    'sticky top-0 z-40 transition-all duration-500',
    layoutStore.headerScrolled
      ? 'bg-background/10 backdrop-blur-md border-b border-border/50'
      : 'bg-transparent border-b border-transparent'
  ]">
    <div class="px-6 sm:px-8 max-w-7xl mx-auto">
      <div class="flex items-center justify-between h-16">

        <!-- Left: Brand -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
            <span class="text-xl">🔥</span>
            <span class="text-xl font-black tracking-tight heading-font">Calcifer</span>
          </NuxtLink>
        </div>

        <!-- Center: Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <!-- Products Dropdown -->
          <div class="relative group">
            <button
              class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              Products
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="transition-transform group-hover:rotate-180">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div
              class="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div class="w-72 rounded-xl border border-border bg-card/95 backdrop-blur-lg shadow-xl p-2">
                <NuxtLink to="/products/forge"
                  class="flex items-start gap-3 p-3 rounded-lg hover:bg-fire-500/5 transition-colors group/item">
                  <span class="text-lg mt-0.5">🔥</span>
                  <div>
                    <p class="font-semibold text-sm text-foreground group-hover/item:text-fire-400 transition-colors">
                      Calcifer.Forge</p>
                    <p class="text-xs text-muted-foreground">Architecture Engine for .NET</p>
                  </div>
                </NuxtLink>
                <NuxtLink to="/products/ordermint"
                  class="flex items-start gap-3 p-3 rounded-lg hover:bg-fire-500/5 transition-colors group/item">
                  <span class="text-lg mt-0.5">🛒</span>
                  <div>
                    <p class="font-semibold text-sm text-foreground group-hover/item:text-fire-400 transition-colors">
                      Calcifer.OrderMint</p>
                    <p class="text-xs text-muted-foreground">Social Commerce Business System</p>
                  </div>
                </NuxtLink>
                <NuxtLink to="/products/usermatrix"
                  class="flex items-start gap-3 p-3 rounded-lg hover:bg-fire-500/5 transition-colors group/item">
                  <span class="text-lg mt-0.5">🔐</span>
                  <div>
                    <p class="font-semibold text-sm text-foreground group-hover/item:text-fire-400 transition-colors">
                      Calcifer.UserMatrix</p>
                    <p class="text-xs text-muted-foreground">Universal Access & Identity Control</p>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <NuxtLink to="/about"
            class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About
          </NuxtLink>
          <NuxtLink to="/contact"
            class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact
          </NuxtLink>
        </nav>

        <!-- Right: Actions -->
        <div class="flex items-center gap-3">
          <a :href="githubUrl" target="_blank" rel="noopener"
            class="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground border border-transparent hover:border-border transition-all">
            <i class="fab fa-github text-base"></i>
            <span>GitHub</span>
          </a>

          <NuxtLink to="/products/forge">
            <Button size="sm" class="bg-fire-500 hover:bg-fire-600 text-white border-0">
              Get Started
            </Button>
          </NuxtLink>

          <Button variant="ghost" size="icon" class="md:hidden" @click="layoutStore.toggleMobileMenu">
            <svg v-if="!layoutStore.mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </Button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="layoutStore.mobileMenuOpen"
        class="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
        <nav class="px-6 py-4 space-y-1">
          <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2">Products</p>
          <NuxtLink to="/products/forge" @click="layoutStore.closeMobileMenu"
            class="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-fire-500/5">
            🔥 Calcifer.Forge
          </NuxtLink>
          <NuxtLink to="/products/ordermint" @click="layoutStore.closeMobileMenu"
            class="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-fire-500/5">
            🛒 Calcifer.OrderMint
          </NuxtLink>
          <NuxtLink to="/products/usermatrix" @click="layoutStore.closeMobileMenu"
            class="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-fire-500/5">
            🔐 Calcifer.UserMatrix
          </NuxtLink>

          <div class="pt-3 mt-2 border-t border-border/50 space-y-1">
            <NuxtLink to="/about" @click="layoutStore.closeMobileMenu"
              class="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground">About
            </NuxtLink>
            <NuxtLink to="/contact" @click="layoutStore.closeMobileMenu"
              class="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground">Contact
            </NuxtLink>
            <a :href="githubUrl" target="_blank" rel="noopener"
              class="flex items-center gap-2 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground">
              <i class="fab fa-github"></i>
              Star on GitHub
            </a>
          </div>

          <div class="pt-3">
            <NuxtLink to="/products/forge" @click="layoutStore.closeMobileMenu">
              <Button class="w-full bg-fire-500 hover:bg-fire-600 text-white border-0">
                Get Started
              </Button>
            </NuxtLink>
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
const githubUrl = 'https://github.com/FullstackRakibul/calcifer.shop'

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