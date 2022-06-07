import fetchArticles from '~/server/utils/devTo/articles/fetchArticles';
import returnSingleParams from '~/server/utils/queryParams/returnSingleParameters';

export default defineEventHandler(async (event) => {
  const query = useQuery(event);
  const username = returnSingleParams(query?.user);

  return fetchArticles({
    username,
    ...useQuery(event),
  });
});
