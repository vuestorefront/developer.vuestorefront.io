// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/relative-url-style */
import { defineNuxtConfig } from 'nuxt';
import { datetimeFormats } from './locales/dateTimeFormat';

export default defineNuxtConfig({
  builder: 'vite',
  debug: process.env.NODE_ENV !== 'production',
  sourcemap: process.env.NODE_ENV !== 'production',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    devToToken: process.env.DEV_TO_TOKEN,
    public: {
      gitHub: {
        repository: 'vuestorefront/developer.vuestorefront.io',
        contentPath: 'content',
        branch: 'main',
      },
    },
  },
  nitro: {
    node: true,
  },
  experimental: {
    reactivityTransform: true,
    viteNode: true,
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
  head: {
    titleTemplate: '%s | Vue Storefront - Developer Portal',
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Hat+Text:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
      },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    ],
    meta: [
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Vue Storefront - Developer Portal',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@VueStorefront' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://repository-images.githubusercontent.com/497115253/df260e4b-c48c-4725-bf92-54328494a30d',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content:
          'https://repository-images.githubusercontent.com/497115253/df260e4b-c48c-4725-bf92-54328494a30d',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Nuxt 3',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://repository-images.githubusercontent.com/497115253/df260e4b-c48c-4725-bf92-54328494a30d',
      },
    ],
  },
  loading: {
    color: '#02bb4d',
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
      datetimeFormats,
      legacy: false,
      availableLocales: ['en'],
      sync: true,
      fallbackLocale: 'en',
      locale: 'en',
    },
  },
  /*  partytown: {
    forward: ['hbspt'],
  }, */
  algolia: {
    apiKey: process.env.ALGOLIA_TOKEN,
    applicationId: process.env.ALGOLIA_ID,
    lite: false,
    instantSearch: true,
  },
});
