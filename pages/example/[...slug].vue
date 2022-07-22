<template>
  <AtomsLayoutContent>
    <AtomsLayoutContainer>
      <ContentDoc />
    </AtomsLayoutContainer>
  </AtomsLayoutContent>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'internal',
  });

  const { path, params } = useRoute();

  const contentQuery = await queryContent(path).findOne();
</script>
