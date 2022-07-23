import { useI18n } from 'vue-i18n';

export const useVideosFilter = async () => {
  const { t } = useI18n();

  const { data: allVideosRaw } = await useAsyncData('allVideos', async () =>
    queryContent('videos').only(['category', 'author', 'playlist']).find(),
  );

  const availableFilters = computed(() =>
    allVideosRaw.value.reduce(
      (acc, { category, author, playlist }) => {
        if (category)
          acc.category.add(
            ...(Array.isArray(category) ? category : [category]),
          );
        if (author) acc.author.add(author);
        if (playlist)
          acc.playlist.add(
            ...(Array.isArray(playlist) ? playlist : [playlist]),
          );

        return {
          ...acc,
          total: acc.total + 1,
        };
      },
      {
        category: new Set(),
        author: new Set(),
        playlist: new Set(),
        total: 0,
      },
    ),
  );

  const filters = computed(() => {
    return [
      {
        id: 'category',
        name: t('page.videos.filter.category'),
        options: [...availableFilters.value.category].map((c) => ({
          value: c,
          label: c,
        })),
      },
      {
        id: 'author',
        name: t('page.videos.filter.author'),
        options: [...availableFilters.value.author].map((c) => ({
          value: c,
          label: c,
        })),
      },
      {
        id: 'playlist',
        name: t('page.videos.filter.playlist'),
        options: [...availableFilters.value.playlist].map((c) => ({
          value: c,
          label: c,
        })),
      },
    ];
  });

  return {
    filters,
    pagesTotal: availableFilters.value.total,
  };
};
