export default function returnSingleParams(
  queryParam: string[] | string | undefined,
) {
  return Array.isArray(queryParam) ? queryParam.shift() : queryParam;
}
