// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/relative-url-style */
import { defineNuxtConfig } from 'nuxt';
import path from 'node:path';

export default defineNuxtConfig({
  debug: process.env.NODE_ENV !== 'production',
  sourcemap: process.env.NODE_ENV !== 'production',
  components: true,
  experimental: {
    externalVue: true,
    reactivityTransform: true,
  },
  target: 'server',
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    devToToken: process.env.DEV_TO_TOKEN,
  },
  modules: ['@nuxtjs/tailwindcss', '@intlify/nuxt3', '@vueuse/nuxt'],
  buildModules: ['@nuxt/content', '@nuxtjs/color-mode'],
  css: ['@/assets/scss/main.scss'],
  content: {
    highlight: {
      theme: 'material-darker',
    },
  },
  tailwindcss: {
    viewer: false,
    jit: true,
  },
});
