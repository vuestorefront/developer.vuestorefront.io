import fetchUserInfo from '~/server/utils/devTo/user/fetchUserInfo';
import returnSingleParams from '~/server/utils/queryParams/returnSingleParameters';
import transformObjectKeys from 'transform-object-keys';

export default defineEventHandler(async (event) => {
  const query = useQuery(event);

  const id = returnSingleParams(query?.id);
  const username = returnSingleParams(query?.username);

  const data = await fetchUserInfo({ id, username });

  return transformObjectKeys(data, { deep: true });
});
