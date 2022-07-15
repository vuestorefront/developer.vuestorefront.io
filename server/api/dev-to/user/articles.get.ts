import returnSingleParams from '~/server/utils/queryParams/returnSingleParameters';
import transformObjectKeys from 'transform-object-keys';
import { BlogArticleApiResponse } from '~/types/api/devTo';

export default defineEventHandler(async (event) => {
  const query = useQuery(event);
  const username = returnSingleParams(query?.user);

  const data = await $fetch<BlogArticleApiResponse>(
    'https://dev.to/api/articles',
    {
      method: 'GET',
      params: {
        page: 1,
        per_page: 10,
        ...(username ? { username } : {}),
        ...transformObjectKeys({
          ...query,
        }),
      },
      responseType: 'json',
    },
  );

  return transformObjectKeys(data, { deep: true });
});
