import { BlogArticleApiResponse } from '~/server/utils/devTo/types';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  return $fetch<BlogArticleApiResponse>(`https://dev.to/api/articles/${id}`, {
    method: 'GET',
    responseType: 'json',
  });
});
