<template>
  <AtomsLayoutContent>
    <AtomsLayoutContainer>
      <h1 class="text-6xl font-bold">
        <AtomsTextFirstColoredWord text="All Videos" />
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

  const allVideos = await queryContent('videos').find();

  const { data: videos, refresh } = await useAsyncData('homepage', () => {
    return queryContent('/')
      .sort({
        publishedAt: -1,
      })
      .skip(itemsSkip.value)
      .limit(pageLimit.value)
      .find();
  });

  watch(currentPage, async () => {
    await refresh();
  });
</script>
