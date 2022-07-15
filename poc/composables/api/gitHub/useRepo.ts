import { generateReturnMethods } from '~/composables/utils/generateReturnMethods';
import { ApiUrl } from '~/enums/apiUrl';

export const useRepo = ({
  organization,
  repository,
}: {
  organization: string;
  repository: string;
}) => generateReturnMethods(`${ApiUrl.GitHub}${organization}/${repository}`);
