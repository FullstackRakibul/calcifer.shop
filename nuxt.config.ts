import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@pinia/nuxt",
    "shadcn-nuxt",
  ],

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
      title: "Calcifer.shop — Dev Tools for Builders",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Production-ready .NET 8 templates with built-in licensing, feature gating, and seat control. Ship SaaS like a product, not just code." },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" },
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
  compatibilityDate: '2025-10-01',
  srcDir: 'app/',

  components: [
    { path: '~/components', pathPrefix: false },
  ],
})