<template>
  <AtomsLayoutContent>
    <AtomsLayoutContainer>
      <h1 class="text-4xl font-bold">
        <AtomsTextFirstColoredWord :text="data.title" />
      </h1>
      <MoleculesVideo :video-id="data.videoId" height="625" />
      <ContentDoc />
    </AtomsLayoutContainer>
  </AtomsLayoutContent>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'video',
  });
  const { path, params } = useRoute();

  const { data } = await useAsyncData('video', () =>
    queryContent(path).findOne(),
  );

  useHead({
    title: data.value.title,
    charset: 'utf-8',
    meta: [{ name: 'description', content: data.value.description }],
  });
</script>
