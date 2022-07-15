import { fetchRepoData, fetchFileContent } from '~/poc/server/utils/github';
import { useRuntimeConfig } from '#imports';

export default defineEventHandler(async (event) => {
  const { organization, repository, filePath } = event.context.params;
  const token = useRuntimeConfig().githubToken;
  const readMeContent = async () =>
    fetchFileContent(token)({
      organization,
      repository,
      filePath,
    });

  if (filePath) {
    return readMeContent();
  }

  return {
    ...(await fetchRepoData(token)({
      organization,
      repository,
    })),
    readMeContent: await readMeContent(),
  };
});
