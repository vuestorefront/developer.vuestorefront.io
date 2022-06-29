// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/relative-url-style */
import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  debug: process.env.NODE_ENV !== 'production',
  sourcemap: process.env.NODE_ENV !== 'production',
  components: {
    dirs: [
      {
        watch: true,
        path: '@/components',
        transpile: 'auto',
        isAsync: true,
        enabled: true,
      },
    ],
  },
  experimental: {
    externalVue: true,
    reactivityTransform: true,
  },
  typescript: {
    shim: true,
    strict: true,
    typeCheck: true,
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    devToToken: process.env.DEV_TO_TOKEN,
  },
  modules: ['@nuxtjs/tailwindcss', '@intlify/nuxt3', '@vueuse/nuxt'],
  buildModules: ['@nuxtjs/google-fonts', '@nuxt/content', '@nuxtjs/color-mode'],
  css: ['@/assets/scss/main.scss'],
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
  tailwindcss: {
    viewer: false,
    jit: true,
  },
});
