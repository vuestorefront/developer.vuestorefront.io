export const generateReturnMethods = (url: string) => ({
  $apiFetch: <T>(): ReturnType<typeof useFetch> => useFetch<T>(url),
  $apiLazyFetch: <T>(): ReturnType<typeof useLazyFetch> => useLazyFetch<T>(url),
  $apiAsyncData: <T>(): ReturnType<typeof useAsyncData> =>
    useAsyncData<T>(url, () => $fetch(url)),
  $apiLazyAsyncData: <T>(): ReturnType<typeof useLazyAsyncData> =>
    useLazyAsyncData<T>(url, () => $fetch(url)),
});
