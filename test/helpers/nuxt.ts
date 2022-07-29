import { setup } from '@nuxt/test-utils';
import { fileURLToPath } from 'node:url';

export const nuxtSetup = async () =>
  setup({
    rootDir: fileURLToPath(new URL('../../', import.meta.url)),
    server: true, //    server`1  `
  });
