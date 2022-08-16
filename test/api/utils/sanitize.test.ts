import { describe, expect, test } from 'vitest';
import { sanitizeRepo } from '~/server/utils/sanitize';

describe('API/utils/sanitize.ts', () => {
  test('Sanitize repository name with NPM scope', () => {
    const repoName = {
      withOrg: '@vuestorefront/vue-storefront',
      withoutOrg: 'vuestorefront/vue-storefront',
    };

    const expectedValue = 'vuestorefront/vue-storefront';

    expect(sanitizeRepo(repoName.withOrg)).toBe(expectedValue);
    expect(sanitizeRepo(repoName.withoutOrg)).toBe(expectedValue);
  });
});
