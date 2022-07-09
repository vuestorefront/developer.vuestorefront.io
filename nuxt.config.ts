// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/relative-url-style */
import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  target: 'server',
  debug: process.env.NODE_ENV !== 'production',
  sourcemap: process.env.NODE_ENV !== 'production',
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    devToToken: process.env.DEV_TO_TOKEN,
  },
  components: true,
  experimental: {
    externalVue: true,
    reactivityTransform: true,
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Hat+Text:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
      },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    ],
  },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  buildModules: ['@nuxt/content', '@nuxtjs/color-mode'],
  css: ['@/assets/scss/main.scss'],
  content: {
    highlight: {
      theme: 'material-darker',
    },
  },
});
