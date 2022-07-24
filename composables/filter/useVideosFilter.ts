import { useI18n } from 'vue-i18n';
import { useSortOptions } from '~/composables/filter/base';
import { useVideosList } from '~/store/videos/videoList';
import { storeToRefs } from 'pinia';
import { debounce } from 'ts-debounce';

export const useVideosFilter = () => {
  const { sortOptions } = useSortOptions();
  const route = useRoute();
  const router = useRouter();
  const store = useVideosList();
  const i18n = useI18n();

  const { data: videos, filters, selectedFilters } = storeToRefs(store);

  const fetchData = async () =>
    Promise.all([store.getBaseData(i18n), store.fetch()]);

  const routeDebounce = debounce(router.push, 1500);

  const getCounter = (key: string) => {
    if (selectedFilters.value[key]) return selectedFilters.value[key].length;
    return 0;
  };

  const changeFilter = async (index: number, item: string) => {
    if (store.filters[index].selected.has(item)) {
      store.filters[index].selected.delete(item);
    } else {
      store.filters[index].selected.add(item);
    }

    const { author, category, playlist, ...query } = route.query;

    await routeDebounce({
      name: route.name,
      query: {
        ...query,
        ...selectedFilters.value,
      },
    });
  };

  onBeforeMount(fetchData);

  watch([computed(() => route.query)], fetchData, {
    deep: true,
  });

  return {
    sortOptions,
    videos,
    filters,
    selectedFilters,
    getCounter,
    changeFilter,
  };
};
