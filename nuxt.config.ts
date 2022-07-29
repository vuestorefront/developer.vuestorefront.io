// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/relative-url-style */
import { defineNuxtConfig } from 'nuxt';
import { nuxtConfigHead } from './config/nuxt/head';
import { nuxtConfigContent } from './config/nuxt/content';
import { nuxtConfigI18n } from './config/nuxt/i18n';
import { nuxtConfigAlgolia } from './config/nuxt/algolia';
import { nuxtConfigSchema } from './config/nuxt/schema';
import { nuxtConfigTailwind } from './config/nuxt/tailwind';
import { nuxtConfigRuntimeConfig } from './config/nuxt/runtimeConfig';
import { nuxtConfigBuild } from './config/nuxt/build';

export default defineNuxtConfig({
  ...nuxtConfigBuild,
  runtimeConfig: nuxtConfigRuntimeConfig,
  components: true,
  modules: [
    '@intlify/nuxt3',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-schema-org',
    ...(process.env.LIGHTHOUSE ? ['@unlighthouse/nuxt'] : []),
    '@nuxtjs/algolia',
  ],
  buildModules: ['@nuxt/content'],
  head: nuxtConfigHead,
  loading: {
    color: '#02bb4d',
  },
  schemaOrg: nuxtConfigSchema,
  tailwindcss: nuxtConfigTailwind,
  content: nuxtConfigContent,
  intlify: nuxtConfigI18n,
  algolia: nuxtConfigAlgolia,
});
