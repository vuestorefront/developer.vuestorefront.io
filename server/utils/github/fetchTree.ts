import { gitHubFetch } from './utils/gitHubFetch';
import { GitTree } from '~/server/utils/github/type';

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

    const paths = fileTreeRaw.map((i) => i.path);
    const result = [];

    paths.map((path) => {
      const tmp = path?.split('/');
      return tmp?.reduce(
        (previous, path, i, arrPaths) => {
          if (!previous[path]) {
            previous[path] = { result: [] };

            previous.result.push({
              path,
              children: previous[path]?.result,
              type: 'file',
            });
          }
          return previous[path];
        },
        { result },
      );
    });

    return result;
  };
};
