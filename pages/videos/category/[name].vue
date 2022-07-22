<template>
  <AtomsLayoutContent>
    <AtomsLayoutContainer>
      <h1 class="text-4xl font-bold">
        <AtomsTextFirstColoredWord
          first-part="Videos by"
          :second-part="params.author"
        />
      </h1>
      <div
        class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <MoleculesCardVideo
          v-for="video in videos"
          :key="video._path"
          :author="{
            name: video.author,
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
    </AtomsLayoutContainer>
  </AtomsLayoutContent>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'video',
  });
  const { path, params } = useRoute();

  const videos = await queryContent('videos')
    .where({ author: params.name })
    .sort({ publishedAt: 1 })
    .limit(12)
    .find();
</script>
