import { describe, expect, test } from 'vitest';
import { returnSingleParameters } from '~/server/utils/queryParams';

describe('API/utils/queryParams.ts', () => {
  test('Return a single parameter', () => {
    expect(returnSingleParameters(['a', 'b'])).toBe('a');
  });
});
