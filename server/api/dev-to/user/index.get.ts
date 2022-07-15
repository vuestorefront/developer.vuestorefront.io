import returnSingleParams from '~/server/utils/queryParams/returnSingleParameters';
import transformObjectKeys from 'transform-object-keys';
import { BlogUserApiResponse } from '~/types/api/devTo';

export default defineEventHandler(async (event) => {
  const query = useQuery(event);

  const id = returnSingleParams(query?.id);
  const username = returnSingleParams(query?.username);

  const apiUrl =
    id && !username
      ? `https://dev.to/api/users/${id}`
      : `https://dev.to/api/users/by_username?url=${username}`;

  return transformObjectKeys(
    await $fetch<BlogUserApiResponse>(apiUrl, {
      method: 'GET',
      responseType: 'json',
    }),
    { deep: true },
  );
});
