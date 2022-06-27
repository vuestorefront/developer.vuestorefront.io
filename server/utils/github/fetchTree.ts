import { GitTree } from '~/server/utils/github/type';
import { gitHubFetch } from './utils/gitHubFetch';

export default (GITHUB_TOKEN: string) => {
  return async ({
    organization,
    repository,
    sha,
    recursive = false,
  }: {
    organization: string;
    repository: string;
    sha: string | string[];
    recursive: boolean;
  }) => {
    const [{ sha: firstSha }] = await gitHubFetch(
      GITHUB_TOKEN,
      {
        organization,
        repository,
      },
      `/commits?per_page=1&page=1`,
    );

    const { tree: fileTreeRaw } = await gitHubFetch<GitTree>(
      GITHUB_TOKEN,
      {
        organization,
        repository,
      },
      `/git/trees${sha || `/${sha || firstSha}`}`,
      {
        params: {
          recursive,
        },
      },
    );

    const paths = fileTreeRaw.map((index) => index.path);
    const result = [];

    paths.map((path) => {
      const temporary = path?.split('/');
      return temporary?.reduce(
        (previous, tmpPath, index, arrayPaths) => {
          if (!previous[tmpPath]) {
            previous[tmpPath] = { result: [] };

            previous.result.push({
              path,
              children: previous[tmpPath]?.result,
              type: 'file',
            });
          }
          return previous[tmpPath];
        },
        { result },
      );
    });

    return result;
  };
};
