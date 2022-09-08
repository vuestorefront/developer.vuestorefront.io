import { defineStore, storeToRefs } from 'pinia';
import { Filter } from '~/types/components/filter';
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { whereObj } from '~/utils/content';
import { SortType } from '~/enums/filter';
import { useI18n } from 'vue-i18n';
import { useSortOptions } from '~/composables/filter/base';

export const videosList = defineStore('videosList', {
  state: () => {
    return {
      filters: [],
      data: [],
      pages: {
        current: 1,
        limit: 6,
        total: 0,
      },
    } as {
      filters: Filter[];
      data: ParsedContent[];
      pages: {
        current: number;
        limit: number;
        total: number;
      };
    };
  },
  getters: {
    selectedFilters(state) {
      return state.filters.reduce((acc, curr) => {
        return {
          ...acc,
          ...(curr.selected.size > 0
            ? {
                [curr.id]: [...curr.selected].filter(Boolean),
              }
            : {}),
        };
      }, {});
    },
  },
  actions: {
    async fetch() {
      const nuxtApp = useNuxtApp();
      const { query } = nuxtApp._activeRoute;

      const contentQuery = async () => {
        const nuxtApp = useNuxtApp();
        const { query } = nuxtApp._activeRoute;

        if (query.page) {
          this.pages.current = Number(query.page.toString());
        }
        const sort: { publishedAt?: number; title?: number } = {};
        switch (query.sort) {
          case SortType.NEWEST:
            sort.publishedAt = -1;
            break;
          case SortType.OLDEST:
            sort.publishedAt = 1;
            break;
          case SortType.AZ:
            sort.title = 1;
            break;
          case SortType.ZA:
            sort.title = -1;
            break;
          default:
            sort.publishedAt = -1;
            break;
        }

        return queryContent('videos').sort({ $sensitivity: 'base', ...sort });
      };

      const whereCategory = whereObj(query, 'category', true);
      const whereAuthor = whereObj(query, 'author');
      const wherePlaylist = whereObj(query, 'playlist', true);

      const orQuery = [];
      const andQuery = [];

      if (whereCategory.length > 1) {
        orQuery.push(...whereCategory);
      }

      if (whereCategory.length === 1) {
        andQuery.push(...whereCategory);
      }

      if (wherePlaylist.length > 1) {
        orQuery.push(...wherePlaylist);
      }

      if (wherePlaylist.length > 1) {
        orQuery.push(...wherePlaylist);
      }

      if (whereAuthor.length === 1) {
        andQuery.push(...whereAuthor);
      }

      const whereQuery = {
        ...(orQuery.length > 0 ? { $or: orQuery } : {}),
        ...(andQuery.length > 0 ? { $and: andQuery } : {}),
      };

      this.data = await contentQuery()
        .where(whereQuery)
        .skip(
          this.pages.current === 1 || !this.pages.current
            ? 0
            : this.pages.limit * (this.pages.current - 1),
        )
        .limit(this.pages.limit)
        .find();

      const filteredVideosRaw = await contentQuery()
        .where(whereQuery)
        .only(['title'])
        .find();

      this.pages.total = filteredVideosRaw.length;
    },

    async getBaseData(i18n) {
      const nuxtApp = useNuxtApp();
      const { query } = nuxtApp._activeRoute;

      const allVideosRaw = await contentQuery()
        .only(['category', 'author', 'playlist'])
        .find();

      const { category, author, playlist } = allVideosRaw.reduce(
        (acc, curr) => {
          if (curr.category)
            acc.category.add(
              ...(Array.isArray(curr.category)
                ? curr.category
                : [curr.category]),
            );
          if (curr.author) acc.author.add(curr.author);
          if (curr.playlist)
            acc.playlist.add(
              ...(Array.isArray(curr.playlist)
                ? curr.playlist
                : [curr.playlist]),
            );

          return {
            ...acc,
          };
        },
        {
          category: new Set(),
          author: new Set(),
          playlist: new Set(),
        } as {
          category: Set<string>;
          author: Set<string>;
          playlist: Set<string>;
        },
      );

      this.filters = [
        {
          id: 'category',
          name: i18n.t('page.videos.filter.category'),
          options: [...category].sort(),
          selected: new Set(
            [
              ...(query?.category && Array.isArray(query.category)
                ? query?.category
                : [query?.category]),
            ].filter(Boolean),
          ),
        },
        {
          id: 'author',
          name: i18n.t('page.videos.filter.author'),
          options: [...author].sort(),
          selected: new Set(
            [
              ...(query?.author && Array.isArray(query.author)
                ? query?.author
                : [query?.author]),
            ].filter(Boolean),
          ),
        },
        {
          id: 'playlist',
          name: i18n.t('page.videos.filter.playlist'),
          options: [...playlist].sort(),
          selected: new Set(
            [
              ...(query?.playlist && Array.isArray(query.playlist)
                ? query?.playlist
                : [query?.playlist]),
            ].filter(Boolean),
          ),
        },
      ];
    },
  },
});

export const useVideosList = () => {
  const { sortOptions } = useSortOptions();
  const route = useRoute();
  const router = useRouter();
  const i18n = useI18n();
  const store = videosList();

  const { data, filters, pages } = storeToRefs(store);

  const routeDebounce = useDebounceFn(
    () => {
      const { author, category, playlist, ...query } = route.query;
      router
        .push({
          name: route.name,
          query: {
            ...query,
            ...store.selectedFilters,
          },
        })
        .catch((e) => console.error(e));
    },
    750,
    { maxWait: 3000 },
  );

  const getCounter = (key: string) => {
    if (store.selectedFilters[key]) return store.selectedFilters[key].length;
    return 0;
  };

  const changeFilter = (index: number, item: string) => {
    if (store.filters[index].selected.has(item)) {
      store.filters[index].selected.delete(item);
    } else {
      store.filters[index].selected.add(item);
    }

    routeDebounce();
  };

  const { refresh: refreshBaseData } = useAsyncData('baseData', async () =>
    store.getBaseData(i18n),
  );

  const {
    pending,
    refresh: refreshList,
    error,
  } = useAsyncData('videosList', async () => store.fetch());

  const refresh = async () => Promise.all([refreshBaseData(), refreshList()]);

  watch(
    computed(() => route.query),
    refresh,
    {
      deep: true,
    },
  );

  return {
    changeFilter,
    contentQuery: computed(() => store.contentQuery()),
    videos: data,
    error,
    filters,
    getCounter,
    pages,
    pending,
    refresh,
    selectedFilters: computed(() => store.selectedFilters),
    sortOptions,
  };
};
