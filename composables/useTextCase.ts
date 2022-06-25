export const useTextCase = () => {
  const toTitleCase = (text: string) => {
    return text.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
    });
  };

  const capitalize = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1);

  return {
    toTitleCase,
    capitalize,
  };
};
