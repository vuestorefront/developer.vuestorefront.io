import fetchOrgArticles from '~/server/utils/devTo/organization/fetchOrgArticles';

export default defineEventHandler(async (event) => {
  const { organization } = event.context.params;

  return fetchOrgArticles({
    organization,
    ...useQuery(event),
  });
});
