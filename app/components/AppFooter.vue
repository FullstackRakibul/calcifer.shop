<template>
  <footer class="bg-card border-t border-border">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Brand Column -->
        <div class="lg:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity mb-4">
            <span class="text-xl">🔥</span>
            <span class="text-xl font-black tracking-tight heading-font">Calcifer</span>
          </NuxtLink>
          <p class="text-muted-foreground text-sm leading-relaxed max-w-xs">
            The Hearth of Digital Business. Systems that turn
            software into controlled, scalable products.
          </p>
        </div>

        <!-- Products -->
        <div>
          <h3 class="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Products</h3>
          <ul class="space-y-2.5">
            <li>
              <NuxtLink to="/products/forge"
                class="text-muted-foreground hover:text-fire-400 text-sm transition-colors">
                Calcifer.Forge
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products/ordermint"
                class="text-muted-foreground hover:text-fire-400 text-sm transition-colors">
                Calcifer.OrderMint
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products/usermatrix"
                class="text-muted-foreground hover:text-fire-400 text-sm transition-colors">
                Calcifer.UserMatrix
              </NuxtLink>
            </li>

          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h3>
          <ul class="space-y-2.5">
            <li>
              <NuxtLink to="/faq" class="text-muted-foreground hover:text-fire-400 text-sm transition-colors">
                FAQ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs" class="text-muted-foreground hover:text-fire-400 text-sm transition-colors">
                Documentation
              </NuxtLink>
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