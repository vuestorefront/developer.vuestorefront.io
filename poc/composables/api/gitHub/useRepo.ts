import { generateReturnMethods } from '~/composables/api/utils/generateReturnMethods';
import { ApiUrl } from '~/enums/apiUrl';

export const useRepo = ({
  organization,
  repository,
}: {
  organization: string;
  repository: string;
}) => generateReturnMethods(`${ApiUrl.GitHub}${organization}/${repository}`);
