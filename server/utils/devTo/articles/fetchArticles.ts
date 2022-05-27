import { DevToArticleApiResponse } from '~/server/utils/devTo/types';

export default async function fetchArticles({
  username,
  page,
  perPage,
  collectionId,
  urlQuery = {},
}: {
  username?: string;
  page?: number;
  perPage?: number;
  collectionId?: number;
  urlQuery?: Record<string, string | string[] | undefined>;
}) {
  return $fetch<DevToArticleApiResponse>('https://dev.to/api/articles', {
    method: 'GET',
    params: {
      page: page || 1,
      per_page: perPage || 10,
      ...(username ? { username } : {}),
      ...(collectionId ? { collection_id: collectionId } : {}),
      ...(urlQuery ? { urlQuery } : {}),
    },
    responseType: 'json',
  });
}
