import fetchOrgArticles from '~/server/utils/devTo/organization/fetchOrgArticles';
import transformObjectKeys from 'transform-object-keys';

export default defineEventHandler(async (event) => {
  const { organization } = event.context.params;

  const data = await fetchOrgArticles({
    organization,
    ...useQuery(event),
  });

  return transformObjectKeys(data, { deep: true });
});
