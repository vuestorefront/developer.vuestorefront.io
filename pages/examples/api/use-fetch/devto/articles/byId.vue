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
  import { useDevToArticleById } from '~/composables/api/useDevToArticlesById';

  const { $apiFetch } = useDevToArticleById(1080900);
  const { data, error, isFetching, isFinished, response, statusCode } =
    await $apiFetch();
</script>
