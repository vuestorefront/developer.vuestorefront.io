import { NuxtConfig } from 'nuxt';

export const nuxtConfigRuntimeConfig = {
  githubToken: process.env.GITHUB_API_TOKEN,
  devToToken: process.env.DEVTO_API_TOKEN,
  discord: {
    token: process.env.DISCORD_TOKEN,
    guildId: process.env.DISCORD_GUILD_ID,
  },
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  public: {
    gitHub: {
      repository: 'vuestorefront/developer.vuestorefront.io',
      contentPath: 'content',
      branch: 'main',
    },
    supabase: {
      url: process.env.SUPABASE_URL,
      publicKey: process.env.SUPABASE_PUBLIC_KEY,
    },
  },
} as NuxtConfig['runtimeConfig'];
