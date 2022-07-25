import { defineConfig } from 'histoire';
import { HstNuxt } from '@histoire/plugin-nuxt';

export default defineConfig({
  storyIgnored: ['**/node_modules/**', '**/dist/**', '**/poc/**'],
  setupFile: '/stories/setup.ts',
  theme: {
    title: 'Developer Portal - System',
    logo: {
      light: 'public/logo/vsf-full.svg',
      dark: 'public/logo/vsf-full-dark.svg',
      square: 'public/logo/vsf-square.svg',
    },
    logoHref: 'https://vuestorefront.io',
    colors: {
      primary: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#02bb4d',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
    },
    favicon: 'public/favicon.ico',
  },
  vite: {
    server: {
      port: 3042,
    },
  },
  plugins: [HstNuxt()],
});
