// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/relative-url-style */
import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Hat+Text:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
      },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    ],
  },
  debug: process.env.NODE_ENV !== 'production',
  sourcemap: process.env.NODE_ENV !== 'production',
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    devToToken: process.env.DEV_TO_TOKEN,
  },
  components: true,
  modules: [
    '@intlify/nuxt3',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    // '@nuxtjs/partytown',
    'nuxt-schema-org',
    ...(process.env.LIGHTHOUSE ? ['@unlighthouse/nuxt'] : []),
    '@nuxtjs/algolia',
  ],
  buildModules: ['@nuxt/content'],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  schemaOrg: {
    canonicalHost: 'https://vuestorefront.io/developer',
  },
  tailwindcss: {
    cssPath: '@/assets/scss/main.scss',
    viewer: false,
    injectPosition: 0,
  },
  content: {
    watch: true,
    markdown: {
      mdc: true,
      toc: {
        depth: 2,
        searchDepth: 4,
      },
    },
    highlight: {
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue'],
      theme: 'material-darker',
    },
  },
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      legacy: false,
      availableLocales: ['en'],
      sync: true,
      fallbackLocale: 'en',
      locale: 'en',
    },
  },
  partytown: {
    forward: ['hbspt'],
  },
  algolia: {
    apiKey: process.env.ALGOLIA_TOKEN,
    applicationId: process.env.ALGOLIA_ID,
  },
});
