import { Filter } from '~/types/components/filter';
import { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { SortType } from '~/enums/filter';
import { whereObj } from '~/utils/content';
import { useI18n } from 'vue-i18n';

const state = ref<{
  filters: Filter[];
  data: Pick<ParsedContent, string>[];
  pages: {
    current: number;
    limit: number;
    total: number;
  };
}>({
  filters: [],
  data: [],
  pages: {
    current: 1,
    limit: 6,
    total: 0,
  },
});

const selectedFilters = computed(() => {
  return state.value.filters.reduce((acc, curr) => {
    return {
      ...acc,
      ...(curr.selected.size > 0
        ? {
            [curr.id]: [...curr.selected].filter(Boolean),
          }
        : {}),
    };
  }, {});
});

const fetchData = async () => {
  const route = useRoute();
  const query = { ...route.query } as Record<string, string | string[]>;

  if (query.page) {
    state.value.pages.current = Number(query.page.toString());
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

  state.value.data = await queryContent('videos')
    .sort({ $sensitivity: 'base', ...sort })
    .where(whereQuery)
    .skip(
      state.value.pages.current === 1 || !state.value.pages.current
        ? 0
        : state.value.pages.limit * (state.value.pages.current - 1),
    )
    .limit(state.value.pages.limit)
    .find();

  const filteredVideosRaw = await queryContent('videos')
    .sort({ $sensitivity: 'base', ...sort })
    .where(whereQuery)
    .only(['title'])
    .find();

  state.value.pages.total = filteredVideosRaw.length;
};

const routeDebounce = useDebounceFn(
  () => {
    const route = useRoute();
    const router = useRouter();
    const { author, category, playlist, ...query } = route.query;
    router
      .push({
        name: String(route.name),
        query: {
          ...query,
          ...selectedFilters.value,
        },
      })
      .catch((e) => console.error(e));
  },
  500,
  { maxWait: 3000 },
);

const getCounter = (key: string) => {
  if (selectedFilters.value[key]) return selectedFilters.value[key].length;
  return 0;
};

const changeFilter = (index: number, item: string) => {
  if (state.value.filters[index].selected.has(item)) {
    state.value.filters[index].selected.delete(item);
  } else {
    state.value.filters[index].selected.add(item);
  }

  routeDebounce();
};

export const useVideosList = () => {
  const route = useRoute();
  onBeforeMount(async () => {
    const i18n = useI18n();
    const route = useRoute();
    const { query } = route;

    const data = await queryContent('videos')
      .only(['category', 'author', 'playlist'])
      .find();

    await fetchData();

    const { category, author, playlist } = data.reduce(
      (acc, curr) => {
        if (curr.category)
          acc.category.add(
            ...(Array.isArray(curr.category) ? curr.category : [curr.category]),
          );
        if (curr.author) acc.author.add(curr.author);
        if (curr.playlist)
          acc.playlist.add(
            ...(Array.isArray(curr.playlist) ? curr.playlist : [curr.playlist]),
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

    state.value.filters = [
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
  });

  watch(
    computed(() => route.query),
    fetchData,
    { deep: true },
  );

  return {
    data: computed(() => state.value.data),
    pages: computed(() => state.value.pages),
    filters: computed(() => state.value.filters),
    changeFilter,
    selectedFilters,
    getCounter,
    fetchData,
  };
};
