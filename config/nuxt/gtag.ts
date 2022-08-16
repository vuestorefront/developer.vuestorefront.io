import { NuxtConfig } from 'nuxt/dist';

export const nuxtGTagConfig = {
  enabled: process.env.NODE_ENV === 'production',
  bootstrap: true,
  pageViewTracker: true,
  config: {
    id: process.env.GOOGLE_TAG_ID,
    params: {
      send_page_view: true,
    },
  },
} as NuxtConfig['gTag'];
