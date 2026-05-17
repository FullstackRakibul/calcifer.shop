<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <div class="border-b border-border bg-card/50 backdrop-blur-sm ">
      <div
        class="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-bold">Dashboard</h1>
          <p class="text-sm text-muted-foreground">Welcome back, {{ authStore.user?.email }}</p>
          <div class="flex flex-wrap items-center gap-2 mt-1">
            <span class="text-xs px-2 py-1 rounded-full"
              :class="isTokenValid ? 'bg-green-500/20 text-green-700 dark:text-green-400' : 'bg-red-500/20 text-red-700 dark:text-red-400'">
              {{ isTokenValid ? '✓ Token Valid' : '✗ Token Invalid' }}
            </span>
            <span v-if="authStore.token" class="text-xs text-muted-foreground truncate max-w-xs">{{
              authStore.token.substring(0, 20) }}...</span>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <button type="button" @click="router.push('/login')"
            class="h-8 w-8 rounded-full border border-border bg-card text-foreground shadow-sm transition hover:bg-accent hover:text-card"
            aria-label="Go to login page">
            <LogIn class="h-4.5" />
          </button>
          <button @click="logout"
            class="rounded-full px-4 py-2 text-sm text-muted-foreground border border-border bg-card transition hover:bg-accent hover:text-card">
            Logout
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-6 py-8">
      <!-- Navigation Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <!-- Create Invoice Card -->
        <div @click="navigateTo('/dashboard/createInvoice')"
          class="group cursor-pointer p-6 rounded-lg border border-border bg-card hover:bg-card/80 hover:border-accent transition-all duration-200 shadow-sm hover:shadow-md">
          <div class="flex items-start justify-between mb-4">
            <div
              class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
          <h3 class="text-lg font-semibold mb-2">Create Invoice</h3>
          <p class="text-sm text-muted-foreground">Generate and manage invoices for your projects</p>
          <div
            class="mt-4 flex items-center text-accent text-sm font-medium group-hover:translate-x-1 transition-transform">
            Get Started
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <!-- Visitor Details Card -->
        <div @click="navigateTo('/dashboard/visitor-details')"
          class="group cursor-pointer p-6 rounded-lg border border-border bg-card hover:bg-card/80 hover:border-accent transition-all duration-200 shadow-sm hover:shadow-md">
          <div class="flex items-start justify-between mb-4">
            <div
              class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM15 20H9v-2a6 6 0 0112 0v2z" />
              </svg>
            </div>
          </div>
          <h3 class="text-lg font-semibold mb-2">Visitor Details</h3>
          <p class="text-sm text-muted-foreground">View and manage visitor information and records</p>
          <div
            class="mt-4 flex items-center text-blue-500 text-sm font-medium group-hover:translate-x-1 transition-transform">
            View Details
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <!-- Project / Package List Card -->
        <div @click="navigateTo('/dashboard/project-packages')"
          class="group cursor-pointer p-6 rounded-lg border border-border bg-card hover:bg-card/80 hover:border-accent transition-all duration-200 shadow-sm hover:shadow-md">
          <div class="flex items-start justify-between mb-4">
            <div
              class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
              <svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20 7l-8-4-8 4m0 0l8-4m0 0l8 4m0 6l-8 4-8-4m0 0l8-4m0 0l8 4m0 6l-8 4-8-4" />
              </svg>
            </div>
          </div>
          <h3 class="text-lg font-semibold mb-2">Project / Package List</h3>
          <p class="text-sm text-muted-foreground">Browse and manage all available projects and packages</p>
          <div
            class="mt-4 flex items-center text-purple-500 text-sm font-medium group-hover:translate-x-1 transition-transform">
            Browse List
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { LogIn } from '~/composables/useIcons'

const authStore = useAuthStore()
const router = useRouter()

// Check authentication on component mount
onMounted(() => {
  authStore.checkAuth()
  if (!authStore.isLoggedIn) {
    router.push('/login')
  }
})

// Verify token
const isTokenValid = computed(() => authStore.verifyToken())

const navigateTo = (path) => {
  router.push(path)
}

const logout = () => {
  authStore.logout()
  router.push('/login')
}

useHead({
  title: 'Dashboard - Calcifer.shop'
})
</script>

<style scoped></style>