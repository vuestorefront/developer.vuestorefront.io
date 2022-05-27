import { DevToArticleApiResponse } from '~/server/utils/devTo/types';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  console.log(event.context.params);
  return $fetch<DevToArticleApiResponse>(`https://dev.to/api/articles/${id}`, {
    method: 'GET',
    responseType: 'json',
  });
});
