export const usePagination = ({
  total,
  numberOfElements = 12,
  pagesToDisplay = 6,
  currentPage = 1,
  pageLinkRule = (pageNumber) => {
    return `/page/${pageNumber}`;
  },
}: {
  total: number;
  numberOfElements?: number;
  pagesToDisplay?: number;
  currentPage?: number;
  pageLinkRule?: (pageNumber: number) => string;
}) => {
  const generatePageObj = (
    {
      number,
      ellipsis = false,
      active = false,
    }: { number: number; ellipsis?: boolean; active?: boolean },
    linkRule: (pageNumber: number) => string,
  ) => ({
    page: number,
    link: linkRule(number),
    active,
    ellipsis,
  });
  const pagesCount = Math.ceil(total / numberOfElements);
  const hasPrevious = currentPage !== 1;
  const hasNext = currentPage !== pagesCount;
  const baseData = {
    pagesCount,
    currentPage,
    previousPage: hasPrevious
      ? generatePageObj({ number: currentPage - 1 }, pageLinkRule)
      : null,
    nextPage: hasNext
      ? generatePageObj({ number: currentPage + 1 }, pageLinkRule)
      : null,
    pages: [],
    firstPage: generatePageObj({ number: 1 }, pageLinkRule),
    lastPage: generatePageObj({ number: pagesCount }, pageLinkRule),
  };

  if (baseData.currentPage < pagesToDisplay) {
    baseData.firstPage.ellipsis = false;
    baseData.lastPage.ellipsis = baseData.pagesCount >= pagesToDisplay;
    new Array(pagesToDisplay).fill('').forEach((_, i) => {
      baseData.pages.push(
        generatePageObj(
          {
            number: i + 1,
            active: i + 1 === baseData.currentPage,
          },
          pageLinkRule,
        ),
      );
    });
  }

  if (baseData.currentPage >= pagesToDisplay) {
    const count = Math.floor(pagesToDisplay / 2);
    baseData.firstPage.ellipsis = baseData.currentPage - count > 1;
    if (baseData.currentPage - count + pagesToDisplay <= baseData.pagesCount) {
      baseData.lastPage.ellipsis =
        baseData.currentPage - count + pagesToDisplay < baseData.pagesCount;
      for (
        let j = baseData.currentPage - count;
        j < baseData.currentPage - count + pagesToDisplay;
        j += 1
      ) {
        baseData.pages.push(
          generatePageObj(
            {
              number: j,
              active: j === baseData.currentPage,
            },
            pageLinkRule,
          ),
        );
      }
    } else {
      baseData.lastPage.ellipsis = false;
      for (
        let k = baseData.pagesCount - pagesToDisplay + 1;
        k <= baseData.pagesCount;
        k += 1
      ) {
        baseData.pages.push(
          generatePageObj(
            {
              number: k,
              active: k === baseData.currentPage,
            },
            pageLinkRule,
          ),
        );
      }
    }
  }

  return baseData;
};
