<template>
  <div>
    <h1>Dev.to Article by ID</h1>
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
  import { useBlogArticleById } from '~/composables/api/devTo/useBlogArticleById';

  const { $apiLazyFetch } = useBlogArticleById(1_080_900);
  const { data, error, isFetching, isFinished, response, statusCode } =
    await $apiLazyFetch();
</script>
