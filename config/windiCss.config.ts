import path from 'node:path';

export const windiCssConfig = 'nuxt-windicss';

export const windiCssOptions = {
  scan: {
    dirs: [path.join(__dirname, '..')],
    exclude: [
      'node_modules',
      'dist',
      '.git',
      '.github',
      '.nuxt',
      'coverage',
      '**/__snapshots__',
      '*.test.js',
    ],
  },
  preflight: {
    alias: {
      // add nuxt aliases
      'nuxt-link': 'a',
      // @nuxt/image module
      'nuxt-img': 'img',
    },
  },
};
