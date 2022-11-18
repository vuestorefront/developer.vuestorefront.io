import transformObjectKeys from 'transform-object-keys';
import { BlogArticleApiResponse } from '~/types/api/devTo';
import { returnSingleParameters } from '~/server/utils/queryParams';
import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const username = returnSingleParameters(query?.user);

  return transformObjectKeys(
    await $fetch<BlogArticleApiResponse>('https://dev.to/api/articles', {
      method: 'GET',
      params: {
        page: 1,
        per_page: 10,
        ...(username ? { username } : {}),
        ...transformObjectKeys(
          {
            ...query,
          },
          { snakeCase: true },
        ),
      },
      responseType: 'json',
    }),
    { deep: true },
  );
});
