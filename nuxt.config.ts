// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/relative-url-style */
import { defineNuxtConfig } from 'nuxt';
import { nuxtConfigPartyTown } from './config/nuxt/partytown';
import { nuxtConfigHead } from './config/nuxt/head';
import { nuxtConfigContent } from './config/nuxt/content';
import { nuxtConfigI18n } from './config/nuxt/i18n';
import { nuxtConfigAlgolia } from './config/nuxt/algolia';
import { nuxtConfigSchema } from './config/nuxt/schema';
import { nuxtConfigTailwind } from './config/nuxt/tailwind';
import { nuxtConfigRuntimeConfig } from './config/nuxt/runtimeConfig';
import { nuxtConfigBuild } from './config/nuxt/build';
import { nuxtGTagConfig } from './config/nuxt/gtag';

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
    '@nuxtjs/partytown',
    '@vue-storefront/nuxt-gtag',
  ],
  buildModules: ['@nuxt/content'],
  app: {
    head: nuxtConfigHead,
  },
  loading: {
    color: '#02bb4d',
  },
  schemaOrg: nuxtConfigSchema,
  tailwindcss: nuxtConfigTailwind,
  content: nuxtConfigContent,
  intlify: nuxtConfigI18n,
  algolia: nuxtConfigAlgolia,
  gTag: nuxtGTagConfig,
  partytown: nuxtConfigPartyTown,
});
