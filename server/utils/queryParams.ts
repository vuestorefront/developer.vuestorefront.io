export const returnSingleParameters = (
  queryParameter: string[] | string | undefined,
) => (Array.isArray(queryParameter) ? queryParameter.shift() : queryParameter);
