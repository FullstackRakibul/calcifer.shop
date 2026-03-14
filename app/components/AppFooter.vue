<template>
  <footer class="bg-card border-t border-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Brand Column -->
        <div class="lg:col-span-1">
          <NuxtLink to="/" class="flex items-center opacity-90 hover:opacity-100 transition-opacity">
            <span class="text-2xl font-bold tracking-tight">Calcifer.shop</span>
          </NuxtLink>
          <p class="text-muted-foreground text-sm leading-relaxed max-w-xs">
            The world's most refined audio ecosystem. Hand-calibrated 
            engineering for the discerning listener.
          </p>
        </div>

        <!-- Business Clubs -->
        <div>
          <h3 class="text-foreground font-medium mb-4">Collections</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/products?club=quantum"
                class="text-muted-foreground hover:text-quantum-500 text-sm transition-colors flex items-center gap-2">
                <HugeiconsIcon :icon="CpuIcon" :size="16" />
                Quantum Edition
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products?club=elegance"
                class="text-muted-foreground hover:text-elegance-500 text-sm transition-colors flex items-center gap-2">
                <HugeiconsIcon :icon="DiamondIcon" :size="16" />
                Elegance Edition
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products?club=nextstop"
                class="text-muted-foreground hover:text-nextstop-500 text-sm transition-colors flex items-center gap-2">
                <HugeiconsIcon :icon="Airplane01Icon" :size="16" />
                NextStop Edition
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h3 class="text-foreground font-medium mb-4">Support</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/about" class="text-muted-foreground hover:text-foreground text-sm transition-colors">
                About Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Contact
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/faq" class="text-muted-foreground hover:text-foreground text-sm transition-colors">
                FAQ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/shipping" class="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Shipping Info
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Connect -->
        <div>
          <h3 class="text-foreground font-medium mb-4">Connect</h3>
          <div class="flex items-center gap-3 mb-4">
            <a href="#"
              class="w-9 h-9 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
              <i class="fab fa-facebook-f text-sm"></i>
            </a>
            <a href="#"
              class="w-9 h-9 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
              <i class="fab fa-instagram text-sm"></i>
            </a>
            <a href="#"
              class="w-9 h-9 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
              <i class="fab fa-twitter text-sm"></i>
            </a>
          </div>
          <p class="text-muted-foreground text-sm flex items-center gap-2">
            <HugeiconsIcon :icon="Mail01Icon" :size="16" />
            concierge@calcifer.shop
          </p>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-border">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-muted-foreground text-sm">
            © 2026 Calcifer. All rights reserved.
          </p>
          <div class="flex items-center gap-6">
            <NuxtLink to="/privacy" class="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms" class="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import {
  CpuIcon,
  DiamondIcon,
  Airplane01Icon,
  Mail01Icon,
} from '@hugeicons/core-free-icons'
</script>