type PartialPageData = { number: number; ellipsis?: boolean; active?: boolean };
type PageData = Omit<PartialPageData, 'number'> & {
  link: string;
  page: number;
};

const generatePageObj = (
  { number, ellipsis = false, active = false }: PartialPageData,
  linkRule: (pageNumber: number) => string,
): PageData => ({
  page: number,
  link: linkRule(number),
  active,
  ellipsis,
});

export const usePagination = ({
  total,
  numberOfElements = 12,
  pagesToDisplay = 6,
  currentPage = 1,
  pageLinkRule = (pageNumber) => {
    return `page=${pageNumber}`;
  },
}: {
  total: number;
  numberOfElements?: number;
  pagesToDisplay?: number;
  currentPage?: number;
  pageLinkRule?: (pageNumber: number) => string;
}) => {
  const pagesCount = Math.ceil(total / numberOfElements);
  const displaySize = pagesToDisplay < pagesCount ? pagesToDisplay : pagesCount;
  const hasPrevious = currentPage !== 1;
  const hasNext = currentPage !== pagesCount;
  const baseData: {
    pagesCount: number;
    currentPage: number;
    previousPage: PageData | null;
    nextPage: PageData | null;
    firstPage: PageData;
    lastPage: PageData;
    pages: PageData[];
  } = {
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

  if (baseData.currentPage < displaySize) {
    baseData.firstPage.ellipsis = false;
    baseData.lastPage.ellipsis = baseData.pagesCount > displaySize;

    new Array(displaySize).fill('').forEach((_, i) => {
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

  if (baseData.currentPage >= displaySize) {
    const count = Math.floor(displaySize / 2);
    baseData.firstPage.ellipsis = displaySize === pagesToDisplay;
    if (baseData.currentPage - count + displaySize <= baseData.pagesCount) {
      baseData.lastPage.ellipsis =
        baseData.currentPage - count + displaySize < baseData.pagesCount;
      for (
        let j = baseData.currentPage - count;
        j < baseData.currentPage - count + displaySize;
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
        let k = baseData.pagesCount - displaySize + 1;
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
