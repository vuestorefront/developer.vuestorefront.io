export const useGetTypeProperties = (type?: string) => {
  const typeToData = (componentType): [string, string] => {
    const baseData = {
      warning: ['yellow', 'carbon:warning-alt'],
      info: ['blue', 'carbon:information'],
      success: ['primary', 'carbon:checkmark'],
      danger: ['rose', 'carbon:close-outline'],
    };

    return baseData[componentType] ? baseData[componentType] : ['primary', ''];
  };
  const data = computed(() => typeToData(type));

  return {
    bg: `${data.value[0]}-50`,
    text: `${data.value[0]}-500`,
    border: `${data.value[0]}-800`,
    icon: data.value[1],
  };
};
