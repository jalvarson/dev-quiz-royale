// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
  },
  nitro: {
    preset: 'netlify',
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@pinia/nuxt',
    'nuxt-mongoose',
  ],
  googleFonts: {
    families: {
      Inter: true,
      'Passion One': true,
    },
  },
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/styles/variables/colors.scss" as *;
          @use "~/assets/styles/mixins/typography.scss" as *;
          @use "~/assets/styles/mixins/breakpoints.scss" as *;
        `,
        },
      },
    },
  },
});
