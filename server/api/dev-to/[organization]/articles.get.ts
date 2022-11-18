import transformObjectKeys from 'transform-object-keys';
import { BlogArticleApiResponse } from '~/types/api/devTo';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const { organization } = event.context.params;

  return transformObjectKeys(
    await $fetch<BlogArticleApiResponse[]>(
      `https://dev.to/api/organizations/${organization}/articles`,
      {
        method: 'GET',
        params: transformObjectKeys(
          {
            page: 1,
            per_page: 10,
            ...getQuery(event),
          },
          { snakeCase: true },
        ),
        responseType: 'json',
      },
    ),
    { deep: true },
  );
});
