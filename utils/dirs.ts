import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// @ts-ignore
export const distDir = resolve(
  typeof __dirname === 'undefined' ? fileURLToPath(import.meta.url) : __dirname,
);

const _makeResolve = (base: string) => {
  return (...p: string[]) => resolve(base, ...p);
};

export const themeDir = resolve(distDir, '../');
export const resolveThemeDir = _makeResolve(themeDir);
