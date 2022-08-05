import { useI18n } from 'vue-i18n';

export const usePageHead = () => {
  const { t } = useI18n();
  const route = useRoute();

  const pageTitle = computed(() => {
    if (route.meta?.title?.startsWith('i18n:')) {
      return t(`${route.meta.title.split('i18n:').pop()}`);
    }

    return route.meta.title;
  });

  const setHead = () => {
    useHead({
      title: pageTitle.value,
    });
  };

  watch(pageTitle, setHead, { immediate: true, flush: 'sync', deep: true });
};
