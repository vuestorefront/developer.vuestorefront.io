import { withQuery } from 'ufo';
import { ApiUrl } from '~/enums/apiUrl';
import { generateReturnMethods } from '~/composables/api/utils/generateReturnMethods';

export const useDevToUser = ({
  username,
  id,
}: {
  username?: string;
  id?: number;
}) =>
  generateReturnMethods(
    withQuery(`${ApiUrl.DevTo}user`, {
      ...(id && !username ? { id: `${id}` } : {}),
      ...(username ? { username } : {}),
    }),
  );
