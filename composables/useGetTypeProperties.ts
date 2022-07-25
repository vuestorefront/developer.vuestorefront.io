import { useGetTypeColors } from '~/composables/useGetTypeColors';
import { IconTypeName } from '~/enums/icons';
import { KeyOfEnum } from '~/types/helpers';
import { TypeColors } from '~/enums/colors';

export const useGetTypeProperties = (
  type?: KeyOfEnum<TypeColors> | KeyOfEnum<IconTypeName>,
) => {
  return {
    ...useGetTypeColors(type),
    icon: IconTypeName[type] || '',
  };
};
