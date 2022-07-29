import { NuxtConfig } from 'nuxt';
import { datetimeFormats } from '../../locales/dateTimeFormat';

export const nuxtConfigI18n = {
  localeDir: 'locales',
  vueI18n: {
    datetimeFormats,
    legacy: false,
    availableLocales: ['en'],
    sync: true,
    fallbackLocale: 'en',
    locale: 'en',
  },
} as NuxtConfig['intlify'];
