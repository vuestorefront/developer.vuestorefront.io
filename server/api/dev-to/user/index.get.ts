import transformObjectKeys from 'transform-object-keys';
import { BlogUserApiResponse } from '~/types/api/devTo';
import { returnSingleParameters } from '~/server/utils/queryParams';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const id = returnSingleParameters(query?.id);
  const username = returnSingleParameters(query?.username);

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
