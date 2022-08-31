import { NuxtConfig } from 'nuxt';

export const nuxtConfigHead = {
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Hat+Text:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
    },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  ],
  script: [
    // { src: '//js.hsforms.net/forms/v2.js', type: 'text/partytown' },
    {
      src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_TAG_ID}&l=dataLayer`,
      preconnectOrigin: 'https://www.googletagmanager.com',
      defer: false,
      type: 'text/partytown',
    },
  ],
} as NuxtConfig['head'];
