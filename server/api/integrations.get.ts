import { integrationsList } from '~/constants/integrations';
import { IntegrationList } from '~/types/integrations';
import { randomElements, filterBy } from '~/utils/array';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler((event) => {
  const query = getQuery(event);

  const defaultQuery = {
    categories: ['all'],
    compatibility: 'all',
    status: 'all',
    license: 'all',
    name: '',
    random: 0,
    ...query,
  };

  let baseData: IntegrationList = integrationsList;

  if (!defaultQuery.categories.includes('all')) {
    baseData = filterBy<IntegrationList, { categories: string | string[] }>(
      baseData,
      {
        categories: Array.isArray(defaultQuery.categories)
          ? defaultQuery.categories
          : [defaultQuery.categories],
      },
    );
  }

  if (defaultQuery.status !== 'all') {
    baseData = filterBy(baseData, { status: defaultQuery.status });
  }

  if (defaultQuery.license !== 'all') {
    baseData = filterBy(baseData, { license: defaultQuery.license });
  }

  if (defaultQuery.compatibility !== 'all') {
    baseData = baseData.filter(
      (i) =>
        Array.isArray(i.link) &&
        i.link.some((l) => defaultQuery.compatibility.includes(l.name)),
    );
  }

  if (defaultQuery.name) {
    baseData = baseData.filter((i) => i.name === defaultQuery.name);
  }

  if (defaultQuery.random > 0) {
    baseData = randomElements<IntegrationList>(baseData, defaultQuery.random);
  }

  return defaultQuery.random > 0
    ? randomElements<IntegrationList>(baseData, defaultQuery.random)
    : baseData;
});
