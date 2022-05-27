import { withQuery } from 'ufo';
import { ApiUrl } from '~/enums/apiUrl';
import { generateReturnMethods } from '~/composables/api/utils/generateReturnMethods';

export const useDevToArticles = ({
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
        ? `${ApiUrl.DevTo}user/articles`
        : `${ApiUrl.DevTo}${organization}/articles`,
      {
        ...(username && !organization ? { username } : {}),
        ...(page ? { page: `${page}` } : {}),
        ...(perPage ? { perPage: `${perPage}` } : {}),
        ...(!organization
          ? {
              ...(collectionId ? { collectionId: `${collectionId}` } : {}),
              ...(urlQuery || {}),
            }
          : {}),
      },
    ),
  );
