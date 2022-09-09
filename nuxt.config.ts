import { defineNuxtConfig } from 'nuxt';
import { datetimeFormats } from './locales/dateTimeFormat';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  debug: process.env.NODE_ENV !== 'production',
  sourcemap: process.env.NODE_ENV !== 'production',
  runtimeConfig: {
    githubToken: process.env.GITHUB_API_TOKEN,
    devToToken: process.env.DEVTO_API_TOKEN,
    public: {
      gitHub: {
        repository: 'vuestorefront/developer.vuestorefront.io',
        contentPath: 'content',
        branch: 'main',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  experimental: {
    reactivityTransform: true,
  },
  build: {
    transpile: ['@headlessui/vue'],
  },
  modules: [
    '@intlify/nuxt3',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@vue-storefront/nuxt-gtag',
    '@nuxt/content',
    'nuxt-icon',
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Hat+Text:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
        },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      ],
    },
  },
  loading: {
    color: '#02bb4d',
  },
  tailwindcss: {
    cssPath: '@/assets/scss/main.scss',
    viewer: false,
    injectPosition: 0,
  },
  content: {
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
  gTag: {
    enabled: process.env.NODE_ENV === 'production',
    bootstrap: true,
    pageViewTracker: true,
    config: {
      id: process.env.GOOGLE_TAG_ID,
      params: {
        send_page_view: true,
      },
    },
  },
});
