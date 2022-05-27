import { generateReturnMethods } from '~/composables/api/utils/generateReturnMethods';
import { ApiUrl } from '~/enums/apiUrl';

export const useGitHubRepo = ({
  organization,
  repository,
}: {
  organization: string;
  repository: string;
}) => generateReturnMethods(`${ApiUrl.GitHub}${organization}/${repository}`);
