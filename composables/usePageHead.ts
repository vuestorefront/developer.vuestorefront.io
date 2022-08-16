import { useI18n } from 'vue-i18n';
import En from '~/locales/en.json';

export const usePageHead = () => {
  const { t } = useI18n();
  const route = useRoute();

  const pageTitle = computed(() => {
    if (route.meta?.title?.startsWith('i18n:')) {
      const title = `${route.meta.title.split('i18n:').pop()}`;
      return t ? t(title) : getValueByKeyString(title, En);
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
