export const useScrollToHash = () => {
  const route = useRoute()

  const scrollToElement = (elementId: string, behavior: ScrollBehavior = 'smooth') => {
    if (import.meta.client) {
      const element = document.getElementById(elementId)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: behavior,
        })
        return true
      }
    }
    return false
  }

  const handleHashOnLoad = () => {
    if (import.meta.client && route.hash) {
      setTimeout(() => {
        const elementId = route.hash.slice(1)
        scrollToElement(elementId)
      }, 100)
    }
  }

  const handleHashChange = () => {
    if (import.meta.client && window.location.hash) {
      const elementId = window.location.hash.slice(1)
      scrollToElement(elementId)
    }
  }

  return {
    scrollToElement,
    handleHashOnLoad,
    handleHashChange,
  }
}
