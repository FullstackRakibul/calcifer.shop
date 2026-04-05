<template>
  <footer class="bg-card border-t border-border">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Brand Column -->
        <div class="lg:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity mb-4">
            <span class="text-xl">🔥</span>
            <span class="text-xl font-black tracking-tight">Calcifer</span>
          </NuxtLink>
          <p class="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Production-ready .NET templates and developer tools.
            Built for builders who ship products, not just code.
          </p>
        </div>

        <!-- Product -->
        <div>
          <h3 class="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Product</h3>
          <ul class="space-y-2.5">
            <li>
              <a href="#features" class="text-muted-foreground hover:text-fire-400 text-sm transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#architecture" class="text-muted-foreground hover:text-fire-400 text-sm transition-colors">
                Architecture
              </a>
            </li>
            <li>
              <a href="#pricing" class="text-muted-foreground hover:text-fire-400 text-sm transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="https://docs.calcifer.shop" target="_blank" rel="noopener"
                class="text-muted-foreground hover:text-fire-400 text-sm transition-colors">
                Documentation
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h3>
          <ul class="space-y-2.5">
            <li>
              <NuxtLink to="/about" class="text-muted-foreground hover:text-fire-400 text-sm transition-colors">
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/faq" class="text-muted-foreground hover:text-fire-400 text-sm transition-colors">
                FAQ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-muted-foreground hover:text-fire-400 text-sm transition-colors">
                Contact
              </NuxtLink>
            </li>
            <li>
              <a href="https://github.com/calcifer-shop/calcifer/blob/main/CHANGELOG.md" target="_blank" rel="noopener"
                class="text-muted-foreground hover:text-fire-400 text-sm transition-colors">
                Changelog
              </a>
            </li>
          </ul>
        </div>

        <!-- Connect -->
        <div>
          <h3 class="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h3>
          <div class="flex items-center gap-2 mb-4">
            <a href="https://github.com/calcifer-shop/calcifer" target="_blank" rel="noopener"
              class="w-9 h-9 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-fire-400 hover:bg-fire-500/10 transition-colors">
              <i class="fab fa-github text-sm"></i>
            </a>
            <a href="https://www.nuget.org/packages/Calcifer" target="_blank" rel="noopener"
              class="w-9 h-9 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-fire-400 hover:bg-fire-500/10 transition-colors">
              📦
            </a>
            <a href="#"
              class="w-9 h-9 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-fire-400 hover:bg-fire-500/10 transition-colors">
              <i class="fab fa-discord text-sm"></i>
            </a>
            <a href="#"
              class="w-9 h-9 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-fire-400 hover:bg-fire-500/10 transition-colors">
              <i class="fab fa-twitter text-sm"></i>
            </a>
          </div>
          <p class="text-muted-foreground text-sm">
            hello@calcifer.shop
          </p>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-border">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-muted-foreground text-xs">
            © {{ new Date().getFullYear() }} Calcifer.shop. All rights reserved.
          </p>
          <div class="flex items-center gap-6">
            <NuxtLink to="/privacy" class="text-muted-foreground hover:text-foreground text-xs transition-colors">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms" class="text-muted-foreground hover:text-foreground text-xs transition-colors">
              Terms of Service
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>