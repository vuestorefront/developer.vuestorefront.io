<template>
  <AtomsLayoutContainer class="space-y-2">
    <hr class="mb-4 border-x border-gray-100" />
    <div class="flex flex-auto flex-row justify-between">
      <NuxtLink target="_blank" :to="getEditPageLink(currentFile)">
        <AtomsTextEditPage />
      </NuxtLink>
      <AtomsTextUpdatedAt v-if="data?.lastUpdate" :date="data.lastUpdate" />
    </div>
    <MoleculesContributorsList
      v-if="data?.contributors && data.contributors.length > 0"
      :contributors="data.contributors"
    />
  </AtomsLayoutContainer>
</template>

<script setup lang="ts">
  const { useFileCommits, currentFile, getEditPageLink } = useGitHub();

  const { $apiAsyncData } = useFileCommits({
    filePath: currentFile.value,
  });

  const { data } = $apiAsyncData();
</script>
