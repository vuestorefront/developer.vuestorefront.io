import * as ufo from 'ufo';

export const returnSingleParameters = (
  queryParameter: ufo.QueryObject | undefined | null,
) => (Array.isArray(queryParameter) ? queryParameter.shift() : queryParameter);
