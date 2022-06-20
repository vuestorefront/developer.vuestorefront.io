import { useGetTypeColors } from '~/composables/useGetTypeColors';
import { iconsData } from '~/constants/iconsData';

export const useGetTypeProperties = (type?: string) => {
  return {
    ...useGetTypeColors(type),
    icon: computed(() => {
      return iconsData[type.toLowerCase()] ? iconsData[type.toLowerCase()] : '';
    }),
  };
};
