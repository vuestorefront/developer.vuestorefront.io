export const useErrorHandling = (reactiveData = ref()) => {
  const error = ref();

  onErrorCaptured((e) => {
    error.value = e;
  });

  watch(reactiveData, () => {
    error.value = null;
  });

  return { error };
};
