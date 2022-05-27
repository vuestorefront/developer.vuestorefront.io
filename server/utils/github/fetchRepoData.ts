import { gitHubFetch } from './utils/gitHubFetch';
import { GitHubRepositoryInformation } from '~/server/utils/github/type';
import { sanitizeJsonResponse } from '~/server/utils/github/utils/sanitize';

export default (GITHUB_TOKEN: string) => {
  return async ({
    organization,
    repository,
  }: {
    organization: string;
    repository: string;
  }) => {
    let mutableRepo = `${repository}`;

    if (mutableRepo.includes('@')) {
      [mutableRepo] = mutableRepo.split('@');
    }

    return sanitizeJsonResponse<GitHubRepositoryInformation>(
      await gitHubFetch<GitHubRepositoryInformation>(GITHUB_TOKEN, {
        organization,
        repository: mutableRepo,
      }),
    );
  };
};
