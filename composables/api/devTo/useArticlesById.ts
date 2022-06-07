import { ApiUrl } from '~/enums/apiUrl';
import { generateReturnMethods } from '~/composables/api/utils/generateReturnMethods';

export const useArticleById = (id: number | string) =>
  generateReturnMethods(`${ApiUrl.Blog}articles/${id}`);
