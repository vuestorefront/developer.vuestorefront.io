import { defineSetupVue3 } from 'histoire/client';
import { createI18n } from 'vue-i18n';
import { datetimeFormats } from '../locales/dateTimeFormat';
// eslint-disable-next-line import/extensions
import en from '../locales/en.json';

export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
  const i18n = createI18n({
    datetimeFormats,
    legacy: false,
    availableLocales: ['en'],
    sync: true,
    fallbackLocale: 'en',
    locale: 'en',
    messages: {
      en,
    },
  });

  app.use(i18n);
});
