import { NuxtConfig } from 'nuxt';

export const nuxtConfigRuntimeConfig = {
  githubToken: process.env.GITHUB_API_TOKEN,
  devToToken: process.env.DEVTO_API_TOKEN,
  public: {
    gitHub: {
      repository: 'vuestorefront/developer.vuestorefront.io',
      contentPath: 'content',
      branch: 'main',
    },
  },
} as NuxtConfig['runtimeConfig'];
