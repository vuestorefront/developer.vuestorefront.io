<template>
  <AtomsLayoutContainer ref="container" class="space-y-2">
    <ActiveQuizSurvey :quiz="quiz" @submit="submit" />
  </AtomsLayoutContainer>
</template>

<script setup lang="ts">
  import { ApiUrl } from '~/enums/apiUrl';
  import type {
    SelectedAnswers,
    ApiQuizQuestions,
    ApiQuizSubmit,
  } from '~/types/api/quiz';

  definePageMeta({
    documentDriven: false,
  });

  const route = useRoute();
  const router = useRouter();

  // Refs
  const { data: quiz } = await useFetch<ApiQuizQuestions>(
    ApiUrl.QuizQuestions,
    {
      key: `quiz-${route.params.name}`,
      params: {
        name: route.params.name,
      },
    },
  );

  // Methods
  async function submit(selectedAnswers: SelectedAnswers) {
    const data = await $fetch<ApiQuizSubmit>(ApiUrl.QuizSubmit, {
      method: 'POST',
      body: {
        name: quiz.value.name,
        selectedAnswers,
      },
    });

    await router.push(`/quiz/results/${data.id}`);
  }
</script>
