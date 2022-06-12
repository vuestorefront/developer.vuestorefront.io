import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  debug: process.env.NODE_ENV !== 'production',
  sourcemap: process.env.NODE_ENV !== 'production',
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    devToToken: process.env.DEV_TO_TOKEN,
  },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  buildModules: ['@nuxt/content', '@nuxtjs/google-fonts', '@nuxtjs/color-mode'],
  tailwindcss: {
    jit: true,
    exposeConfig: false,
    viewer: false,
  },
  googleFonts: {
    display: 'block',
    families: {
      'Red Hat Display': true,
      'Red Hat Text': true,
      'JetBrains Mono': true,
    },
  },
  content: {
    watch: true,
    markdown: {
      remarkPlugins: [],
    },
    highlight: {
      theme: 'material-darker',
      preload: ['javascript', 'typescript', 'vue', 'css'],
    },
  },
});
