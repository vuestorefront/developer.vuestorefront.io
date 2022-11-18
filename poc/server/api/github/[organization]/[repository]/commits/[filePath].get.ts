import { gitHubFetch } from '~/poc/server/utils/github';
import { useRuntimeConfig } from '#imports';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  const { organization, repository, filePath } = event.context.params;
  const token = useRuntimeConfig().githubToken;

  return gitHubFetch(
    token,
    {
      organization,
      repository,
    },
    `/commits`,
    {
      params: {
        path: filePath,
      },
    },
  );
});
