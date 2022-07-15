import { BlogArticleApiResponse } from '~/types/api/devTo';
import transformObjectKeys from 'transform-object-keys';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  return transformObjectKeys(
    await $fetch<BlogArticleApiResponse>(`https://dev.to/api/articles/${id}`, {
      method: 'GET',
      responseType: 'json',
    }),
    { deep: true },
  );
});
