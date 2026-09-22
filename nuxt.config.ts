// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'id',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#2A0D14' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/favicon.svg' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL
        || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '')
        || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '')
        || 'https://undangy-ella-yono.vercel.app',
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL
        || '',
      supabaseKey: process.env.NUXT_PUBLIC_SUPABASE_KEY
        || '',
    },
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: {
        semi: false,
        quotes: 'single',
        commaDangle: 'always-multiline',
        indent: 2,
      },
    },
  },
  googleFonts: {
    families: {
      'Great Vibes': [400],
      'Montserrat': [400, 500, 600],
      'Koh Santepheap': [300, 400, 700],
      'Cormorant Garamond': [400, 500, 600, 700],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
  },
})
