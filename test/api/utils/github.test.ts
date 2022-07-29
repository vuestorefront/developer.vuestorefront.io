import { describe, expect, test } from 'vitest';
import { sanitizeJsonResponse } from '~/server/utils/github';

describe('API/utils/github.ts', () => {
  test('Sanitize GitHub JSON API response data, replaced URL', () => {
    const jsonData = {
      api: 'https://api.github.com/users/bloodf',
      http: 'https://github.com/bloodf',
    };

    expect(sanitizeJsonResponse(jsonData).api).toBe(
      'https://github.com/users/bloodf',
    );
    expect(sanitizeJsonResponse(jsonData).http).toBe(
      'https://github.com/bloodf',
    );
  });
});
