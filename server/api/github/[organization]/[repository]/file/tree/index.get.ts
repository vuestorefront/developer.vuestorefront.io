import { fetchTree } from '~/server/utils/github';
import { useRuntimeConfig } from '#imports';

export default defineEventHandler(async (event) => {
  const { organization, repository } = event.context.params;
  const query = useQuery(event);
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
