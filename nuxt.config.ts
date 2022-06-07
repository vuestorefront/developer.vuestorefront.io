import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  typescript: {
    strict: true,
    shim: true,
    typeCheck: true,
  },
  debug: process.env.NODE_ENV !== 'production',
  sourcemap: process.env.NODE_ENV !== 'production',
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    devToToken: process.env.DEV_TO_TOKEN,
  },
  modules: ['@vueuse/nuxt'],
  buildModules: [
    'nuxt-windicss',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
  ],
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
  colorMode: {
    classSuffix: '',
  },
});
