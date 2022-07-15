import { generateReturnMethods } from '~/utils/fetch';
import { ApiUrl } from '~/enums/apiUrl';

export const useFile = ({
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
