<template>
  <div>
    <h1>GitHub File</h1>
    <hr />
    <p><strong>Is Fetching:</strong> {{ isFetching }}</p>
    <p><strong>Is Loading:</strong> {{ isFinished }}</p>
    <p><strong>Status Code:</strong> {{ statusCode }}</p>
    <p><strong>Error:</strong> {{ error }}</p>
    <hr />
    <MarkdownRenderer :value="data" />
  </div>
</template>

<script setup lang="ts">
  import { useFile } from '~/poc/composables/api/gitHub/useFile';

  const { $apiAsyncData } = useFile({
    filePath: 'README.md',
    organization: 'vuestorefront',
    repository: 'vue-storefront',
  });
  const { data, error, isFetching, isFinished, response, statusCode } =
    await $apiAsyncData();
</script>
