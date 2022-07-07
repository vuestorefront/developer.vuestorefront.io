<template>
  <div>
    <h1>Dev.to Article by User</h1>
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
  import { useBlogArticles } from '~/composables/api/devTo/useBlogArticles';

  const { $apiAsyncData } = useBlogArticles({ username: 'bloodf' });
  const { data, error, isFetching, isFinished, response, statusCode } =
    await $apiAsyncData();
</script>
