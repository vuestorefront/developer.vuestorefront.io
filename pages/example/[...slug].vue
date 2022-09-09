<template>
  <NuxtLayout>
    <AtomsLayoutContainer>
      <ContentDoc />
    </AtomsLayoutContainer>
  </NuxtLayout>
</template>

<script setup lang="ts">
  const { path, params } = useRoute();

  definePageMeta({
    layout: 'content',
  });

  const contentQuery = await queryContent(path).findOne();
</script>
