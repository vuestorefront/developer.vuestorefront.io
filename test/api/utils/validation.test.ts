import { describe, expect, test } from 'vitest';
import { validateToken } from '~/server/utils/validations';

describe('API/utils/validation.ts', () => {
  test('Check if token validation works', () => {
    expect(validateToken('token')).toBeUndefined();
  });
});
