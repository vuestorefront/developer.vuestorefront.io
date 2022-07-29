import { NuxtConfig } from 'nuxt';

export const nuxtConfigBuild = {
  modern: true,
  debug: process.env.NODE_ENV !== 'production',
  sourcemap: process.env.NODE_ENV !== 'production',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  nitro: {
    node: true,
  },
  experimental: {
    reactivityTransform: true,
    viteNode: true,
  },
  build: {
    splitChunks: {
      commons: true,
      layouts: true,
      pages: true,
    },
    cssSourceMap: process.env.NODE_ENV !== 'production',
    extractCSS: true,
    optimizeCSS: true,
    standalone: true,
    transpile: ['@headlessui/vue'],
    analyze: process.env.NUXT_ANALYZE,
  },
} as NuxtConfig;
