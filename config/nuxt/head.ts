import { NuxtConfig } from 'nuxt';

export const nuxtConfigHead = {
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
} as NuxtConfig['head'];
