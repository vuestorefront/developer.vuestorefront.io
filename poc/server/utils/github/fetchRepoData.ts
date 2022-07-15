import { GitHubRepositoryInformation } from '~/poc/server/utils/github/type';
import { sanitizeJsonResponse } from '~/poc/server/utils/github/utils/sanitize';
import { gitHubFetch } from './utils/gitHubFetch';

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
