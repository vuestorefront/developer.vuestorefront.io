import { NuxtConfig } from 'nuxt';
import { googleFontsOptions } from './googleFonts.config';
import { unpluginAutoImportModule } from './autoImport.config';
import { windiCssConfig, windiCssOptions } from './windiCss.config';
import envsConfig from './envs.config';
import { autoColorConfig, autoColorOptions } from './autoColor.config';
import { NuxtContentModule, NuxtContentConfig } from './content.config';

export default {
  ...envsConfig,
  components: true,
  modules: ['@vueuse/nuxt'],
  buildModules: [
    NuxtContentModule,
    unpluginAutoImportModule,
    '@nuxtjs/google-fonts',
    windiCssConfig,
    autoColorConfig,
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: true,
  },
  windicss: windiCssOptions,
  googleFonts: googleFontsOptions,
  content: NuxtContentConfig,
  colorMode: autoColorOptions,
  typescript: {
    strict: true,
    shim: true,
    typeCheck: true,
  },
  debug: process.env.NODE_ENV !== 'production',
  sourcemap: process.env.NODE_ENV !== 'production',
} as NuxtConfig;
