import fetchArticles from '~/server/utils/devTo/articles/fetchArticles';
import returnSingleParams from '~/server/utils/queryParams/returnSingleParameters';
import transformObjectKeys from 'transform-object-keys';

export default defineEventHandler(async (event) => {
  const query = useQuery(event);
  const username = returnSingleParams(query?.user);

  const data = await fetchArticles({
    username,
    ...useQuery(event),
  });

  return transformObjectKeys(data, { deep: true });
});
