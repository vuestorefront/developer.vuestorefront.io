import { fetchFileContent } from '~/poc/server/utils/github';
import { useRuntimeConfig } from '#imports';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineEventHandler } from 'h3';

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
