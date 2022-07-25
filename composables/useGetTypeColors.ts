import { KeyOfEnum } from '~/types/helpers';
import { TypeColors } from '~/enums/colors';

export const useGetTypeColors = (type?: KeyOfEnum<TypeColors>) => {
  const color = computed(() => TypeColors[type] || 'gray');

  return {
    bg: `${color.value}-50`,
    text: `${color.value}-500`,
    border: `${color.value}-800`,
  };
};
