import { NuxtConfig } from 'nuxt';

export const nuxtConfigRuntimeConfig = {
  githubToken: process.env.GITHUB_TOKEN,
  devToToken: process.env.DEV_TO_TOKEN,
  public: {
    gitHub: {
      repository: 'vuestorefront/developer.vuestorefront.io',
      contentPath: 'content',
      branch: 'main',
    },
  },
} as NuxtConfig['runtimeConfig'];
