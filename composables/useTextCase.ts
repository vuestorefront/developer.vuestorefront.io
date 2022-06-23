export const useTextCase = () => {
  const toTitleCase = (text: string) => {
    return text.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
    });
  };

  return {
    toTitleCase,
  };
};
