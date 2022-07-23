<template>
  <AtomsLayoutContent>
    <AtomsLayoutContainer>
      <h1 class="text-4xl font-bold">
        <AtomsTextFirstColoredWord
          first-part="Videos by"
          :second-part="$route.params.author"
        />
      </h1>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <MoleculesCardVideo
          v-for="video in videos"
          :key="video._path"
          :author="{
            name: video.author,
            avatar: video.avatar || '',
            link: {
              name: 'videos-author-name',
              params: { name: video.author },
            },
          }"
          :date="video.publishedAt"
          :video="video.video"
          :link="video._path"
          :title="video.title"
        />
      </div>
      <MoleculesPagination
        :total="allVideos.length"
        :number-of-elements="8"
        :current-page="currentPage"
      />
    </AtomsLayoutContainer>
  </AtomsLayoutContent>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'video',
  });

  const route = useRoute();
  const pageLimit = ref(6);
  const currentPage = computed(() => Number(route.query.page || 1));
  const itemsSkip = computed(() =>
    currentPage.value === 1 || !currentPage.value
      ? 0
      : pageLimit.value * (currentPage.value - 1),
  );

  const { data: allVideos } = await useAsyncData('AuthorAllVideos', async () =>
    queryContent('videos')
      .where({ author: route.params.author })
      .only('author')
      .find(),
  );

  const { data: videos, refresh } = await useAsyncData('AuthorVideos', () =>
    queryContent('videos')
      .where({ author: route.params.author })
      .sort({
        publishedAt: -1,
      })
      .skip(itemsSkip.value)
      .limit(pageLimit.value)
      .find(),
  );

  watch(currentPage, async () => {
    await refresh();
  });
</script>
