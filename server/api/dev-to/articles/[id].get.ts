import { BlogArticleApiResponse } from '~/types/api/devTo';
import transformObjectKeys from 'transform-object-keys';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);

  return transformObjectKeys(
    await $fetch<BlogArticleApiResponse>(`https://dev.to/api/articles/${id}`, {
      method: 'GET',
      responseType: 'json',
    }),
    { deep: true },
  );
});
