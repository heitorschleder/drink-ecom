// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],
  pages: true,
  googleFonts: {
    families: {
      'Inter': [400, 500, 600, 700],
    }
  },
  app: {
    head: {
      title: 'E-Drinks',
      meta: [
        { name: 'description', content: 'Modern e-commerce platform' }
      ],
    }
  }
})