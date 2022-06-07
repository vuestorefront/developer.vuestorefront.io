export default function returnSingleParameters(
  queryParameter: string[] | string | undefined,
) {
  return Array.isArray(queryParameter)
    ? queryParameter.shift()
    : queryParameter;
}
