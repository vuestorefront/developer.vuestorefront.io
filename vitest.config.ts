import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

const r = (p: string) => resolve(__dirname, p);

export default defineConfig({
  test: {
    watch: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
  resolve: {
    alias: {
      '~~': r('.'),
      '~~/*': r('./*'),
      '@@': r('.'),
      '@@/*': r('./*'),
      '~': r('.'),
      '~/*': r('./*'),
      '@': r('.'),
      '@/*': r('./*'),
      assets: r('assets'),
      'assets/*': r('assets/*'),
      public: r('public'),
      'public/*': r('public/*'),
      '#app': r('node_modules/nuxt/dist/app'),
      '#app/*': r('node_modules/nuxt/dist/app/*'),
      'vue-demi': r('node_modules/nuxt/dist/app/compat/vue-demi'),
      '@intlify/shared': r(
        'node_modules/@intlify/shared/dist/shared.esm-bundler',
      ),
      '@intlify/core-base': r(
        'node_modules/@intlify/core-base/dist/core-base.esm-bundler',
      ),
      '@intlify/devtools-if': r(
        'node_modules/@intlify/devtools-if/dist/devtools-if.esm-bundler',
      ),
      'vue-i18n': r('node_modules/vue-i18n/dist/vue-i18n.esm-bundler'),
      pinia: r('pinia/dist/pinia'),
      '@vueuse/schema-org': r('node_modules/@vueuse/schema-org/dist'),
      '@vueuse/schema-org/*': r('node_modules/@vueuse/schema-org/dist/*'),
      '#head': r('node_modules/nuxt/dist/head/runtime'),
      '#head/*': r('node_modules/nuxt/dist/head/runtime/*'),
      '#components': r('.nuxt/components'),
      '#imports': r('.nuxt/imports'),
      '#build': r('.nuxt'),
      '#build/*': r('.nuxt/*'),
    },
  },
});
