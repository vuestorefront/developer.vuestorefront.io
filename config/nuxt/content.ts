import { NuxtConfig } from 'nuxt';

export const nuxtConfigContent = {
  watch: true,
  markdown: {
    mdc: true,
    toc: {
      depth: 2,
      searchDepth: 4,
    },
  },
  highlight: {
    preload: ['json', 'js', 'ts', 'html', 'css', 'vue'],
    theme: 'material-darker',
  },
} as NuxtConfig['content'];
