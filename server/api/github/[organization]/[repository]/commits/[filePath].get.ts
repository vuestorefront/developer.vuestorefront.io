import { gitHubFetch } from '~/server/utils/github';
import { useRuntimeConfig } from '#imports';

export default defineEventHandler(async (event) => {
  const { organization, repository, filePath } = event.context.params;
  const token = useRuntimeConfig().githubToken;

  return gitHubFetch(
    token,
    {
      organization,
      repository,
    },
    `commits`,
    {
      params: {
        path: filePath,
      },
    },
  );
});
