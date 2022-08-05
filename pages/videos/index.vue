<template>
  <AtomsLayoutContainer>
    <h1 class="text-center text-6xl font-bold">
      {{ t('page.videos.head.title') }}
    </h1>
    <ActiveVideosHorizontalFilter />
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <MoleculesCardVideo
        v-for="video in videos"
        :key="video._path"
        :author="{
          name: video.author,
          link: {
            name: 'videos-by-author',
            params: { author: video.author },
          },
        }"
        :date="video.publishedAt"
        :video="video.video"
        :link="video._path"
        :title="video.title"
      />
    </div>
    <MoleculesPagination
      :total="pages.total"
      :number-of-elements="8"
      :current-page="pages.current"
    />
  </AtomsLayoutContainer>
</template>

<script setup lang="ts">
  import { useVideosList } from '~/store/videos/videoList';
  import { useI18n } from 'vue-i18n';

  definePageMeta({
    title: 'i18n:page.videos.head.title',
  });

  const { t } = useI18n();

  const { pages, videos } = useVideosList();
</script>
