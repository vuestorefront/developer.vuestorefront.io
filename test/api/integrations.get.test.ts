import { describe, expect, test } from 'vitest';
import { $fetch } from '@nuxt/test-utils';
import { integrationsList } from '~/constants/integrations';
import { nuxtSetup } from '~/test/helpers/nuxt';
import { IntegrationLicense, IntegrationStatus } from '~/enums/integrations';

describe('API/integrations.get.ts', async () => {
  await nuxtSetup();

  const API_ENDPOINT = '/api/integrations';

  test('API returns values', async () => {
    const docs = await $fetch(`${API_ENDPOINT}`);

    expect(docs.length).toBeTruthy();
  });

  test('API returns only 1 category', async () => {
    const docs = await $fetch(`${API_ENDPOINT}`, {
      params: {
        categories: ['cms'],
      },
    });

    expect(docs.length).toBe(
      integrationsList.filter((i) => i.categories.includes('cms')).length,
    );
  });

  test('API only results from single status', async () => {
    const docs = await $fetch(`${API_ENDPOINT}`, {
      params: {
        status: IntegrationStatus.prod,
      },
    });

    expect(docs.flat().length).toBe(
      integrationsList.filter((i) => i.status === IntegrationStatus.prod)
        .length,
    );
  });

  test('API only results from specific license', async () => {
    const docs = await $fetch(`${API_ENDPOINT}`, {
      params: {
        license: IntegrationLicense.enterprise,
      },
    });

    expect(docs.flat().length).toBe(
      integrationsList.filter(
        (i) => i.license === IntegrationLicense.enterprise,
      ).length,
    );
  });
});
