<template>
  <h1 class="my-4 text-center text-4xl">
    <AtomsTextFirstColoredWord :text="t('page.quiz.tryAgain.header')" />
  </h1>

  <div class="flex flex-col items-center space-y-8 pt-8">
    <p class="text-center text-lg text-gray-600 lg:w-1/2">
      {{ t('page.quiz.tryAgain.description', { score: response.score }) }}
    </p>

    <AtomsButton :href="quizUrl" color="primary">
      {{ t('page.quiz.tryAgain.cta') }}
    </AtomsButton>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import type { ApiQuizResponse } from '~/types/api/quiz';

  const props = defineProps<{
    response: ApiQuizResponse;
  }>();

  definePageMeta({
    documentDriven: false,
    title: 'i18n:page.quiz.tryAgain.head.title',
  });

  const { t } = useI18n();

  const quizUrl = computed(() => {
    return `/quiz/questions/${props.response.quiz.id}`;
  });
</script>
