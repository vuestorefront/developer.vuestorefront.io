export const toTitleCase = (text: string) => {
  return text.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  });
};

export const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);
