import transformObjectKeys from 'transform-object-keys';
import { BlogArticleApiResponse } from '~/types/api/devTo';

export default defineEventHandler(async (event) => {
  const { organization } = event.context.params;

  const data = await $fetch<BlogArticleApiResponse[]>(
    `https://dev.to/api/organizations/${organization}/articles`,
    {
      method: 'GET',
      params: transformObjectKeys({
        page: 1,
        per_page: 10,
        ...useQuery(event),
      }),
      responseType: 'json',
    },
  );

  return transformObjectKeys(data, { deep: true });
});
