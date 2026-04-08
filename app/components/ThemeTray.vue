<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <Transition name="fade">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-998 bg-black/40 backdrop-blur-sm"
        @click="close"
      />
    </Transition>

    <!-- Tray -->
    <Transition name="slide-up">
      <div
        v-if="modelValue"
        role="dialog"
        aria-label="Theme settings"
        class="fixed inset-x-0 bottom-0 z-999 flex justify-center pointer-events-none"
      >
        <div
          class="pointer-events-auto w-full max-w-md rounded-t-3xl border-t border-l border-r shadow-2xl p-6 pt-5 tray-bg"
        >
          <!-- Grab handle -->
          <div class="flex justify-center mb-4">
            <div class="w-10 h-1 rounded-full bg-muted-foreground/30" />
          </div>

          <!-- Close -->
          <button
            @click="close"
            aria-label="Close theme settings"
            class="absolute right-5 top-5 w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18" /><path d="m6 6 12 12" />
            </svg>
          </button>

          <!-- Title -->
          <h3 class="text-base font-bold mb-5 flex items-center gap-2">
            <span class="text-lg">🎨</span> Theme Settings
          </h3>

          <!-- ── Dark / Light toggle ────────── -->
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-2">
              <!-- Sun icon -->
              <svg v-if="!themeStore.isDark" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="text-amber-400">
                <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" /><path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
              </svg>
              <!-- Moon icon -->
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="text-indigo-400">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
              <span class="text-sm font-medium">{{ themeStore.isDark ? 'Dark Mode' : 'Light Mode' }}</span>
            </div>

            <!-- Toggle switch -->
            <button
              @click="themeStore.toggleDarkMode()"
              :aria-label="themeStore.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
              class="relative w-12 h-6 rounded-full transition-colors duration-300 focus-visible:outline-none"
              :class="themeStore.isDark ? 'bg-indigo-500/30' : 'bg-amber-400/30'"
            >
              <span
                class="absolute top-0.5 left-0.5 w-5 h-5 rounded-full shadow-sm transition-all duration-300 flex items-center justify-center text-[10px]"
                :class="themeStore.isDark
                  ? 'translate-x-6 bg-indigo-400'
                  : 'translate-x-0 bg-amber-400'"
              >
                {{ themeStore.isDark ? '🌙' : '☀️' }}
              </span>
            </button>
          </div>

          <!-- ── Color swatches ─────────────── -->
          <p class="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-3">Accent Color</p>
          <div class="grid grid-cols-6 gap-3 mb-5">
            <button
              v-for="color in colorOptions"
              :key="color.name"
              @click="themeStore.setPrimaryColor(color.name)"
              :aria-label="`Set theme to ${color.label}`"
              class="group relative w-10 h-10 rounded-full transition-all duration-200 ring-2 ring-offset-2 ring-offset-background"
              :class="themeStore.primaryColor === color.name
                ? 'ring-foreground scale-110'
                : 'ring-transparent hover:ring-muted-foreground/40 hover:scale-105'"
              :style="{ backgroundColor: color.swatch }"
            >
              <!-- Check mark for active -->
              <svg
                v-if="themeStore.primaryColor === color.name"
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                class="absolute inset-0 m-auto drop-shadow-md"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </button>
          </div>

          <!-- ── Labels row ────────────────── -->
          <div class="grid grid-cols-6 gap-3 mb-5">
            <span
              v-for="color in colorOptions"
              :key="color.name + '-label'"
              class="text-[10px] text-center text-muted-foreground truncate"
            >
              {{ color.label }}
            </span>
          </div>

          <!-- ── Reset ──────────────────────── -->
          <button
            @click="themeStore.resetTheme()"
            class="w-full py-2 rounded-lg text-sm font-medium border border-border hover:border-muted-foreground/40 text-muted-foreground hover:text-foreground transition-all duration-200"
          >
            ↺ Reset to Default
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useThemeStore, colorOptions } from '@/stores/theme'

const themeStore = useThemeStore()

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()

function close() {
  emit('update:modelValue', false)
}
</script>

<style scoped>
.tray-bg {
  background: color-mix(in oklch, var(--color-background) 92%, var(--color-card));
  border-color: var(--color-border);
}

/* Slide-up transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* Backdrop fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
