<template>
  <div class="min-h-screen flex items-center justify-center px-6 pt-20">
    <div class="w-full max-w-md border border-border p-8 rounded-3xl shadow-2xl backdrop-blur-xl bg-card/80">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 text-center sm:text-left">
        <div class="flex-1">
          <h2 class="text-3xl font-bold tracking-tight mb-2">Welcome Back</h2>
          <p class="text-sm text-muted-foreground">Continue to the Calcifer Ecosystem</p>
        </div>
        <button type="button" @click="router.push('/dashboard')"
          class="inline-flex items-center justify-center h-12 w-12 rounded-full border border-border bg-card text-foreground shadow-sm transition hover:bg-accent hover:text-card"
          aria-label="Go to dashboard">
          <LayoutDashboard class="h-5 w-5" />
        </button>
      </div>

      <!-- Step 1: Email -->
      <Transition name="fade-slide" mode="out-in">
        <div v-if="step === 1" key="step1" class="space-y-6">
          <div class="space-y-2">
            <label class="text-sm font-medium">Email Address</label>
            <Input v-model="email" type="email" placeholder="name@example.com"
              class="h-12 border-muted-foreground/20 focus:border-accent" />
          </div>
          <Button class="w-full h-12 text-md group" @click="nextStep">
            Continue
            <HugeiconsIcon :icon="ArrowRight01Icon" :size="18"
              class="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div class="relative py-4">
            <div class="absolute inset-0 flex items-center"><span class="w-full border-t border-border"></span></div>
            <div class="relative flex justify-center text-xs uppercase"><span
                class="bg-card px-2 text-muted-foreground">Or continue with</span></div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <Button variant="outline" class="h-12">
              <i class="fab fa-google mr-2 text-xs"></i> Google
            </Button>
            <Button variant="outline" class="h-12">
              <i class="fab fa-apple mr-2 text-sm"></i> Apple
            </Button>
          </div>
        </div>

        <!-- Step 2: Password -->
        <div v-else key="step2" class="space-y-6">
          <button @click="step = 1"
            class="text-xs text-muted-foreground hover:text-foreground mb-4 flex items-center gap-1 group">
            <HugeiconsIcon :icon="ArrowLeft01Icon" :size="14" class="group-hover:-translate-x-1 transition-transform" />
            {{ email }}
          </button>

          <div class="space-y-2">
            <label class="text-sm font-medium">Password</label>
            <Input v-model="password" type="password" placeholder="••••••••"
              class="h-12 border-muted-foreground/20 focus:border-accent" />
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <input type="checkbox" class="rounded border-border bg-muted" />
              <label class="text-xs text-muted-foreground">Remember me</label>
            </div>
            <button class="text-xs text-accent hover:underline font-medium">Forgot password?</button>
          </div>

          <Button class="w-full h-12 text-md" @click="handleLogin">
            Sign In
          </Button>
        </div>
      </Transition>

      <div class="mt-8 text-center text-sm">
        <span class="text-muted-foreground">New to Calcifer?</span>
        <button class="text-accent hover:underline font-medium ml-1">Create an account</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'
import { LayoutDashboard } from '~/composables/useIcons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { HugeiconsIcon } from '@hugeicons/vue'
import { ArrowRight01Icon, ArrowLeft01Icon } from '@hugeicons/core-free-icons'

const router = useRouter()
const authStore = useAuthStore()
const step = ref(1)
const email = ref('sysadmin@calcifar.shop')
const password = ref('sysadmin@calcifar.shop')

const nextStep = () => {
  if (email.value) step.value = 2
}

const handleLogin = () => {
  // Store token and user data
  authStore.login(email.value, password.value)
  // Redirect to dashboard after successful login
  router.push('/dashboard')
}

useHead({
  title: 'Sign In - Calcifer.shop'
})

definePageMeta({
  layout: false // Maybe disable shared header/footer for cleaner login? Or keep it.
})
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>