import { BlogArticleApiResponse } from '../types';

export default async function fetchOrgArticles({
  organization,
  page,
  perPage,
}: {
  organization: string;
  page?: number;
  perPage?: number;
  [k: string]: unknown | unknown[];
}) {
  return $fetch<BlogArticleApiResponse>(
    `https://dev.to/api/organizations/${organization}/articles`,
    {
      method: 'GET',
      params: {
        page: page || 1,
        per_page: perPage || 10,
      },
      responseType: 'json',
    },
  );
}
