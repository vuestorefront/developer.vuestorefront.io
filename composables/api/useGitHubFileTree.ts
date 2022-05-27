import { withQuery } from 'ufo';
import { generateReturnMethods } from '~/composables/api/utils/generateReturnMethods';
import { ApiUrl } from '~/enums/apiUrl';

export const useGitHubFileTree = ({
  organization,
  repository,
  sha = '',
  recursive = false,
}: {
  organization: string;
  repository: string;
  sha?: string;
  recursive?: boolean;
}) =>
  generateReturnMethods(
    withQuery(`${ApiUrl.GitHub}${organization}/${repository}/file/tree`, {
      ...(sha ? { sha } : {}),
      // eslint-disable-next-line no-bitwise
      ...(recursive ? { recursive: `${~~recursive}` } : {}),
    }),
  );
