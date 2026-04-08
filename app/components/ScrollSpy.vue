<template>
  <div class="scroll-spy" />
</template>

<script setup lang="ts">
const props = defineProps<{
  sections: Array<{ id: string; title: string }>
}>()

const emit = defineEmits<{
  (e: 'activeChange', activeIndex: number): void
}>()

const activeSection = ref(0)

const updateActiveSection = () => {
  if (!import.meta.client) return

  const scrollPosition = window.scrollY + 100 // Header offset + buffer

  for (let i = props.sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(props.sections[i].id)
    if (section && section.offsetTop <= scrollPosition) {
      if (activeSection.value !== i) {
        activeSection.value = i
        emit('activeChange', i)
      }
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<style scoped>
.scroll-spy {
  display: none;
}
</style>
