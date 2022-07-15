import { BlogArticleApiResponse } from '~/types/api/devTo';
import transformObjectKeys from 'transform-object-keys';

export default defineEventHandler(async (event) => {
  const { slug, username } = event.context.params;

  return transformObjectKeys(
    await $fetch<BlogArticleApiResponse>(
      `https://dev.to/api/articles/${username}/${slug}`,
      {
        method: 'GET',
        responseType: 'json',
      },
    ),
    { deep: true },
  );
});
