import { resolve } from 'node:path';

export const NuxtContentModule = '@nuxt/content';

export const NuxtContentConfig = {
  watch: true,
  /* sources: [
    'content',
    {
      name: 'fa-ir',
      prefix: '/fa', // All contents inside this source will be prefixed with `/fa`
      driver: 'fs',
      driverOptions: {
        base: resolve(__dirname, '..', 'content-fa'), // Path for source directory
      },
    },
  ], */
  markdown: {
    remarkPlugins: [
      // 'remark-rehype',
      // 'remark-emoji',
      // 'remark-mdx',
      // 'remark-mermaidjs',
      // 'remark-prettier',
      // 'remark-wiki-link',
      // '@fec/remark-a11y-emoji',
      // 'remark-code-import',
      // 'remark-fix-guillemets',
      // ['remark-git-contributors', { appendIfMissing: true }],
      // 'remark-github',
      // 'remark-hint',
    ],
  },
  toc: {
    depth: 2,
    searchDepth: 2,
  },
  highlight: {
    theme: 'zhuangtongfa.material-theme',
    preload: ['javascript', 'typescript', 'vue', 'css'],
  },
};
