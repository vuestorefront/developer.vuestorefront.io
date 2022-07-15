<template>
  <div>
    <h1>GitHub Commits Data</h1>
    <hr />
    <p><strong>Is Fetching:</strong> {{ isFetching }}</p>
    <p><strong>Is Loading:</strong> {{ isFinished }}</p>
    <p><strong>Status Code:</strong> {{ statusCode }}</p>
    <p><strong>Error:</strong> {{ error }}</p>
    <hr />
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup lang="ts">
  import { useCommits } from '~/poc/composables/api/gitHub/useCommits';

  const { $apiLazyFetch } = useCommits({
    organization: 'vuestorefront',
    repository: 'vue-storefront',
    filePath: 'README.md',
  });
  const { data, error, isFetching, isFinished, response, statusCode } =
    await $apiLazyFetch();
</script>
