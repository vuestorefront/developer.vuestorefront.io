<template>
  <div>
    <h1>GitHub File Tree</h1>
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
  import { useFileTree } from '~/composables/api/gitHub/useFileTree';

  const { $apiFetch } = useFileTree({
    organization: 'vuestorefront',
    repository: 'vue-storefront',
  });
  const { data, error, isFetching, isFinished, response, statusCode } =
    await $apiFetch();
</script>
