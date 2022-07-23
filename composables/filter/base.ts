import { useI18n } from 'vue-i18n';
import { SortType } from '~/enums/filter';

export const useSortOptions = (basePath?: string) => {
  const { t } = useI18n();
  const route = useRoute();

  return {
    sortOptions: computed(() => {
      return [
        {
          label: 'global.filter.sort.newest',
          icon: 'bi:sort-down',
          to: { query: { sort: SortType.NEWEST } },
        },
        {
          label: 'global.filter.sort.oldest',
          icon: 'bi:sort-down-alt',
          to: { query: { sort: SortType.OLDEST } },
        },
        {
          label: 'global.filter.sort.az',
          icon: 'bi:sort-alpha-down',
          to: { query: { sort: SortType.AZ } },
        },
        {
          label: 'global.filter.sort.za',
          icon: 'bi:sort-alpha-down-alt',
          to: { query: { sort: SortType.ZA } },
        },
      ].map((o) => ({
        ...o,
        label: t(o.label),
        to: { ...route.query, ...o.to, name: basePath || route.name },
      }));
    }),
  };
};
