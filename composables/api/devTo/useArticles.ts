import { withQuery } from 'ufo';
import { ApiUrl } from '~/enums/apiUrl';
import { generateReturnMethods } from '~/composables/api/utils/generateReturnMethods';

export const useArticles = ({
  username,
  page,
  perPage,
  collectionId,
  urlQuery = {},
  organization,
}: {
  username?: string;
  organization?: string;
  page?: number;
  perPage?: number;
  collectionId?: number;
  urlQuery?: Record<string, string | string[] | undefined>;
}) =>
  generateReturnMethods(
    withQuery(
      !organization && username
        ? `${ApiUrl.Blog}user/articles`
        : `${ApiUrl.Blog}${organization}/articles`,
      {
        ...(username && !organization ? { username } : {}),
        ...(page ? { page: `${page}` } : {}),
        ...(perPage ? { perPage: `${perPage}` } : {}),
        ...(!organization
          ? {
              ...(collectionId ? { collectionId: `${collectionId}` } : {}),
              ...urlQuery,
            }
          : {}),
      },
    ),
  );
