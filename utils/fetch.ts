export const generateReturnMethods = <K>(url: string) => ({
  $apiFetch: (): ReturnType<typeof useFetch> => useFetch<K>(url),
  $apiLazyFetch: (): ReturnType<typeof useLazyFetch> => useLazyFetch<K>(url),
  $apiAsyncData: (): ReturnType<typeof useAsyncData> =>
    useAsyncData<K>(url, () => $fetch(url)),
  $apiLazyAsyncData: (): ReturnType<typeof useLazyAsyncData> =>
    useLazyAsyncData<K>(url, () => $fetch(url)),
});
