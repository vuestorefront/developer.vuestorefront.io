import fetchUserInfo from '~/server/utils/devTo/user/fetchUserInfo';
import returnSingleParams from '~/server/utils/queryParams/returnSingleParams';

export default defineEventHandler(async (event) => {
  const query = useQuery(event);

  const id = returnSingleParams(query?.id);
  const username = returnSingleParams(query?.username);

  return fetchUserInfo({ id, username });
});
