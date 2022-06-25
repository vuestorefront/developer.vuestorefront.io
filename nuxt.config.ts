// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/relative-url-style */
import { defineNuxtConfig } from 'nuxt';
import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
  debug: process.env.NODE_ENV !== 'production',
  sourcemap: process.env.NODE_ENV !== 'production',
  alias: {
    constants: fileURLToPath(new URL('./constants', import.meta.url)),
    enums: fileURLToPath(new URL('./enums', import.meta.url)),
    locales: fileURLToPath(new URL('./locales', import.meta.url)),
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    devToToken: process.env.DEV_TO_TOKEN,
  },
  modules: ['@nuxtjs/tailwindcss', '@intlify/nuxt3', '@vueuse/nuxt'],
  buildModules: ['@nuxtjs/google-fonts', '@nuxt/content', '@nuxtjs/color-mode'],
  css: ['@/assets/scss/main.scss'],
  tailwindcss: {
    jit: true,
    viewer: false,
  },
  experimental: {
    externalVue: true,
    reactivityTransform: true,
  },
  components: true,
  googleFonts: {
    download: false,
    prefetch: true,
    display: 'auto',
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
  typescript: {
    shim: true,
    strict: true,
    typeCheck: true,
  },
});
