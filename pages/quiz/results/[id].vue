<template>
  <AtomsLayoutContainer ref="container" class="space-y-2">
    <ActiveQuizResults :response="response" />
  </AtomsLayoutContainer>
</template>

<script setup lang="ts">
  import { ApiUrl } from '~/enums/apiUrl';
  import type { ApiQuizResponse } from '~/types/api/quiz';

  definePageMeta({
    documentDriven: false,
  });

  const route = useRoute();

  const response = await $fetch<ApiQuizResponse>(ApiUrl.QuizResponse, {
    params: {
      id: route.params.id,
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    headers: useRequestHeaders(['cookie']),
  });
</script>
