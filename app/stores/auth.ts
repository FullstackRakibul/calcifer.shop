import { defineStore } from "pinia"
import { ref } from "vue"

export const useAuthStore = defineStore("auth", () => {
  const isLoggedIn = ref(false)
  const token = ref<string | null>(null)
  const user = ref<{
    name: string
    email: string
    initials: string
  } | null>(null)

  function generateDemoToken(email: string): string {
    // Generate a simple demo token based on email and timestamp
    const timestamp = Date.now()
    const randomStr = Math.random().toString(36).substring(2, 15)
    return `demo_${btoa(email)}_${timestamp}_${randomStr}`
  }

  function login(email: string, password: string) {
    // Mock login - in real app, this would call an API
    isLoggedIn.value = true
    token.value = generateDemoToken(email)
    user.value = {
      name: "System Admin",
      email: email,
      initials: "SA",
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("token", token.value)
      localStorage.setItem("user", JSON.stringify(user.value))
    }
  }

  function logout() {
    isLoggedIn.value = false
    token.value = null
    user.value = null
    if (typeof window !== "undefined") {
      localStorage.removeItem("isLoggedIn")
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    }
  }

  function checkAuth() {
    if (typeof window !== "undefined") {
      const savedAuth = localStorage.getItem("isLoggedIn")
      const savedToken = localStorage.getItem("token")
      const savedUser = localStorage.getItem("user")
      if (savedAuth === "true" && savedToken && savedUser) {
        isLoggedIn.value = true
        token.value = savedToken
        user.value = JSON.parse(savedUser)
      }
    }
  }

  function verifyToken(): boolean {
    return isLoggedIn.value && token.value !== null && token.value !== ""
  }

  return {
    isLoggedIn,
    token,
    user,
    login,
    logout,
    checkAuth,
    verifyToken,
  }
})
