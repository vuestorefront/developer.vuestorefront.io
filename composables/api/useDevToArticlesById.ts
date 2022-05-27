import { ApiUrl } from '~/enums/apiUrl';
import { generateReturnMethods } from '~/composables/api/utils/generateReturnMethods';

export const useDevToArticleById = (id: number | string) =>
  generateReturnMethods(`${ApiUrl.DevTo}articles/${id}`);
