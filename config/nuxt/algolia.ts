import { NuxtConfig } from 'nuxt';

export const nuxtConfigAlgolia = {
  apiKey: process.env.ALGOLIA_TOKEN,
  applicationId: process.env.ALGOLIA_ID,
  lite: false,
  instantSearch: true,
} as NuxtConfig['algolia'];
