<template>
  <div>
    <!-- Floating Calcifer Button -->
    <button @click="isOpen = !isOpen" aria-label="Open theme settings"
      class="fixed bottom-6 left-1/2 -translate-x-1/2 z-997 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 focus-visible:outline-none group calcifer-btn"
      :class="isOpen ? 'scale-90 rotate-12' : 'hover:scale-110 hover:-translate-y-1'">
      <!-- Glow ring behind -->
      <span class="absolute inset-0 rounded-full calcifer-glow animate-pulse-slow" />

      <!-- Fire SVG sprite -->
      <svg viewBox="0 0 64 64" class="w-9 h-9 relative z-10 drop-shadow-lg calcifer-fire"
        xmlns="http://www.w3.org/2000/svg">
        <!-- Outer flame -->
        <path d="M32 4 C22 18, 10 28, 12 42 C14 54, 24 60, 32 60 C40 60, 50 54, 52 42 C54 28, 42 18, 32 4Z"
          class="flame-outer" fill="var(--color-fire-500)" />
        <!-- Inner flame -->
        <path d="M32 20 C27 30, 20 36, 22 46 C23 52, 28 56, 32 56 C36 56, 41 52, 42 46 C44 36, 37 30, 32 20Z"
          class="flame-inner" fill="var(--color-fire-300)" />
        <!-- Core glow -->
        <ellipse cx="32" cy="48" rx="7" ry="5" fill="var(--color-fire-100)" opacity="0.8" />
        <!-- Left eye -->
        <ellipse cx="27" cy="40" rx="2.2" ry="2.8" fill="var(--color-background)" class="calcifer-eye" />
        <!-- Right eye -->
        <ellipse cx="37" cy="40" rx="2.2" ry="2.8" fill="var(--color-background)" class="calcifer-eye" />
        <!-- Left pupil -->
        <ellipse cx="27.5" cy="40.5" rx="1.2" ry="1.5" fill="var(--color-foreground)" />
        <!-- Right pupil -->
        <ellipse cx="37.5" cy="40.5" rx="1.2" ry="1.5" fill="var(--color-foreground)" />
        <!-- Mouth -->
        <path d="M28 46 Q32 50 36 46" fill="none" stroke="var(--color-background)" stroke-width="1.5"
          stroke-linecap="round" />
      </svg>
    </button>

    <!-- Theme Tray -->
    <ThemeTray v-model="isOpen" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ThemeTray from '@/components/ThemeTray.vue'

const isOpen = ref(false)
</script>

<style>
/* ── Button base ──────────────────────────── */
.calcifer-btn {
  background: radial-gradient(circle at 50% 60%,
      var(--color-fire-400),
      var(--color-fire-600));
  box-shadow:
    0 4px 20px -4px var(--color-fire-500),
    0 0 0 3px color-mix(in oklch, var(--color-fire-500) 15%, transparent);
}

.calcifer-btn:hover {
  box-shadow:
    0 6px 30px -4px var(--color-fire-400),
    0 0 0 4px color-mix(in oklch, var(--color-fire-500) 25%, transparent);
}

/* ── Glow pulse ring ─────────────────────── */
.calcifer-glow {
  background: transparent;
  box-shadow: 0 0 20px 4px color-mix(in oklch, var(--color-fire-500) 30%, transparent);
}

@keyframes pulse-slow {

  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(1.15);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

/* ── Flame animation ─────────────────────── */
.calcifer-fire {
  animation: flame-dance 2s ease-in-out infinite;
}

@keyframes flame-dance {

  0%,
  100% {
    transform: scaleY(1) translateY(0);
  }

  25% {
    transform: scaleY(1.04) translateY(-1px);
  }

  50% {
    transform: scaleY(0.97) translateY(1px);
  }

  75% {
    transform: scaleY(1.02) translateY(-0.5px);
  }
}

.flame-outer {
  animation: flame-flicker 1.8s ease-in-out infinite alternate;
}

.flame-inner {
  animation: flame-flicker 1.4s ease-in-out infinite alternate-reverse;
}

@keyframes flame-flicker {
  0% {
    opacity: 0.9;
  }

  100% {
    opacity: 1;
  }
}

/* ── Eye blink ───────────────────────────── */
.calcifer-eye {
  animation: blink 4s ease-in-out infinite;
}

@keyframes blink {

  0%,
  42%,
  44%,
  100% {
    transform: scaleY(1);
  }

  43% {
    transform: scaleY(0.1);
  }
}
</style>