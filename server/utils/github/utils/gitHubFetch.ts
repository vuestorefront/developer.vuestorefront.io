import { $fetch } from 'ohmyfetch';
import { sanitizeRepo } from '~/server/utils/github/utils/sanitize';

export const gitHubFetch = async <T, K = 'json'>(
  GITHUB_TOKEN: string,
  {
    organization,
    repository,
  }: {
    organization: string;
    repository: string;
  },
  path = '',
  opts = {},
) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return $fetch<T, K>(
    `repos/${organization}/${sanitizeRepo(repository)}/${path || ''}`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
      retry: 3,
      baseURL: 'https://api.github.com/',
      method: 'GET',
      ...(opts || {}),
    },
  );
};
