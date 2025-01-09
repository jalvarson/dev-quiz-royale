// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxt/image'],
    googleFonts: {
        families: {
        Inter: true,
        "Passion One": true,
        },
    },
})