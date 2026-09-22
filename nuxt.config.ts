// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
  ],
  devtools: { enabled: true }, app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/favicon.svg' },
      ],
    },
  },
  runtimeConfig: {
    public: {
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
