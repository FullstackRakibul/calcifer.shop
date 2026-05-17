import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@pinia/nuxt", "shadcn-nuxt", "nuxt-lucide-icons"],

  shadcn: {
    prefix: '',
    componentDir: '@/components/ui'
  },

  css: [
    "@fortawesome/fontawesome-free/css/all.css",
    "~/assets/css/tailwind.css"
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "Calcifer.shop — The Hearth of Digital Business",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Calcifer builds systems that turn software into controlled, scalable products. Forge, OrderMint, and UserMatrix — an ecosystem of ownership infrastructure." },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" },
      ],
      htmlAttrs: {
        class: 'dark'
      }
    },
  },

  experimental: {
    appManifest: false
  },

  ssr: true,
  compatibilityDate: '2029-04-08',
  srcDir: 'app/',

  components: [
    { path: '~/components', pathPrefix: false },
  ],
})