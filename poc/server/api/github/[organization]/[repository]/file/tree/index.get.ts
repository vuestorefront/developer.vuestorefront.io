import { fetchTree } from '~/poc/server/utils/github';
import { useRuntimeConfig } from '#imports';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const { organization, repository } = event.context.params;
  const query = getQuery(event);
  const token = useRuntimeConfig().githubToken;
  const filesTree = async () =>
    fetchTree(token)({
      organization,
      repository,
      sha: query.sha || '',
      recursive: !!query.recursive || false,
    });

  return filesTree();
});
