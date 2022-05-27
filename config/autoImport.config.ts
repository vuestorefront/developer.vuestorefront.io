import path from 'node:path';

export const unpluginAutoImportModule = [
  'unplugin-auto-import/nuxt',
  {
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
    imports: [
      'vue',
      'vue-router',
      'vue-i18n',
      'vue/macros',
      '@vueuse/head',
      '@vueuse/core',
      {
        h3: [
          'createRouter',
          'defineEventHandler',
          'defineHandle',
          'defineHandler',
          'defineLazyEventHandler',
          'defineLazyHandler',
          'defineMiddleware',
          'deleteCookie',
          'dynamicEventHandler',
          'eventHandler',
          'handleCacheHeaders',
          'isError',
          'isEvent',
          'isEventHandler',
          'isMethod',
          'isStream',
          'lazyEventHandler',
          'lazyHandle',
          'promisifyHandle',
          'promisifyHandler',
          'send',
          'sendError',
          'sendRedirect',
          'sendStream',
          'setCookie',
          'toEventHandler',
          'use',
          'useBase',
          'useBody',
          'useCookie',
          'useCookies',
          'useMethod',
          'useQuery',
          'useRawBody',
        ],
        '@nuxt/content': [
          'ContentDoc',
          'ContentList',
          'ContentRenderer',
          'ContentNavigation',
          'ContentQuery',
          'Markdown',
          'queryContent',
          'fetchContentNavigation',
          'useUnwrap',
        ],
      },
    ],
    dts: path.join(__dirname, '..', 'auto-imports.d.ts'),
    eslintrc: {
      enabled: true, // Default `false`
      filepath: path.join(__dirname, '..', '.eslintrc-auto-import.json'), // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
  },
];
