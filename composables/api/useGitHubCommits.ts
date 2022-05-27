import { generateReturnMethods } from '~/composables/api/utils/generateReturnMethods';
import { ApiUrl } from '~/enums/apiUrl';

export const useGitHubCommits = ({
  organization,
  repository,
  filePath,
}: {
  organization: string;
  repository: string;
  filePath: string;
}) =>
  generateReturnMethods(
    `${ApiUrl.GitHub}${organization}/${repository}/commits/${filePath}`,
  );
