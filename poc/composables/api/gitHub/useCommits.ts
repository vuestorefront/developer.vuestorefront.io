import { generateReturnMethods } from '~/utils/fetch';
import { ApiUrl } from '~/enums/apiUrl';

export const useCommits = ({
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
