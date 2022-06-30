export const useTextStyle = () => {
  const firstColoredWord = ({
    text = '',
    firstPart = '',
    secondPart = '',
    cssClass = {
      firstPart: '',
      secondPart: '',
    },
  }: {
    text: string;
    firstPart?: string;
    secondPart?: string;
    cssClass?: {
      firstPart: string | string[] | Record<string, any>;
      secondPart: string | string[] | Record<string, any>;
    };
  }) => {
    return computed(() => {
      const getTextArray = () => {
        if (firstPart && secondPart) return [firstPart, secondPart];
        return `${text || ''}`.split(' ');
      };

      const [first, ...second] = getTextArray();

      return {
        firstPart: second.length > 0 ? `${first} ` : first,
        secondPart: second.join(' '),
        cssClass: {
          firstPart: cssClass?.firstPart || 'text-primary-500',
          secondPart: cssClass?.secondPart || 'text-gray-900',
        },
      };
    });
  };
  computed(() => {});

  return {
    firstColoredWord,
  };
};
