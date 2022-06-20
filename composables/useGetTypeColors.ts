import { colorsData } from '~/constants/colorsData';

export const useGetTypeColors = (type?: string) => {
  const color = computed(() => {
    return colorsData[type.toLowerCase()]
      ? colorsData[type.toLowerCase()]
      : 'gray';
  });

  return {
    bg: `${color.value}-50`,
    text: `${color.value}-500`,
    border: `${color.value}-800`,
  };
};
