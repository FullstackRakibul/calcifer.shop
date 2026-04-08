<template>
  <div class="hash-observer" />
</template>

<script setup lang="ts">
import { useScrollToHash } from '@/composables/useScrollToHash'

const route = useRoute()
const { scrollToElement } = useScrollToHash()

// Handle initial load with hash
onMounted(() => {
  if (route.hash) {
    setTimeout(() => {
      const elementId = route.hash.slice(1)
      scrollToElement(elementId)
    }, 200)
  }
})

// Watch for hash changes in the same route
watch(
  () => route.hash,
  (newHash, oldHash) => {
    if (newHash && newHash !== oldHash) {
      setTimeout(() => {
        const elementId = newHash.slice(1)
        scrollToElement(elementId)
      }, 100)
    }
  },
)

// Handle click events on anchor links globally
const handleAnchorClick = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  const anchor = target.closest('a')

  if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
    const elementId = anchor.hash.slice(1)
    const targetElement = document.getElementById(elementId)

    if (
      targetElement &&
      anchor.origin === window.location.origin &&
      anchor.pathname === window.location.pathname
    ) {
      e.preventDefault()
      scrollToElement(elementId)
      window.history.pushState({}, '', anchor.hash)
    }
  }
}

onMounted(() => {
  document.addEventListener('click', handleAnchorClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleAnchorClick)
})
</script>

<style scoped>
.hash-observer {
  display: none;
}
</style>
