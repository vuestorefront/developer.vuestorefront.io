import { fetchFileContent } from '~/poc/server/utils/github';
import { useRuntimeConfig } from '#imports';

export default defineEventHandler(async (event) => {
  const { organization, repository, filePath } = event.context.params;
  const token = useRuntimeConfig().githubToken;
  const fileData = await fetchFileContent(token)({
    organization,
    repository,
    filePath,
  });
  return {
    ...fileData,
  };
});
