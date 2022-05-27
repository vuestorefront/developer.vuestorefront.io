import { generateReturnMethods } from '~/composables/api/utils/generateReturnMethods';
import { ApiUrl } from '~/enums/apiUrl';

export const useGitHubFile = ({
  organization,
  repository,
  filePath,
}: {
  organization: string;
  repository: string;
  filePath: string;
}) => {
  const { $apiFetch, $apiLazyFetch, ...methods } = {
    ...generateReturnMethods(
      `${ApiUrl.GitHub}${organization}/${repository}/file/${filePath}`,
    ),
  };

  return {
    ...methods,
  };
};
