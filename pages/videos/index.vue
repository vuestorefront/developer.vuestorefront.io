<template>
  <NuxtLayout>
    <AtomsLayoutContainer>
      <h1 class="text-center text-6xl font-bold">
        {{ t('page.videos.head.title') }}
      </h1>
      <ActiveVideosHorizontalFilter/>
      <div
        v-if="videos.length"
        class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        v-if="pages?.total > 1"
        :total="pages.total"
        :number-of-elements="8"
        :current-page="pages.current"
      />
    </AtomsLayoutContainer>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import {useVideosList} from '~/composables/store/useVideosList';

definePageMeta({
  title: 'i18n:page.videos.head.title',
});

const {t} = useI18n();

const {
  data: videos,
  filters,
  pages,
} = useVideosList();
</script>
