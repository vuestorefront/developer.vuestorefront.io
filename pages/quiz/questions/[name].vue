<template>
  <AtomsLayoutContainer ref="container" class="space-y-2">
    <h1 class="my-12 text-center text-4xl">
      <AtomsTextFirstColoredWord
        :text="t('page.quiz.questions.header', { test: quiz.title })"
      />
    </h1>

    <ActiveQuizSurvey
      v-if="step === Steps.Survey"
      :quiz="quiz"
      @submit="submitSurvey"
    />

    <ActiveQuizUserDetails
      v-if="step === Steps.UserDetails"
      @submit="submitUserDetails"
    />
  </AtomsLayoutContainer>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import { ApiUrl } from '~/enums/apiUrl';
  import type {
    UserDetails,
    ApiQuizQuestions,
    ApiQuizSubmit,
  } from '~/types/api/quiz';

  definePageMeta({
    documentDriven: false,
    title: 'i18n:page.quiz.questions.head.title',
  });

  const { t } = useI18n();

  const route = useRoute();
  const router = useRouter();

  const enum Steps {
    Survey = 1,
    UserDetails = 2,
  }

  const step = ref(Steps.Survey);
  const form = reactive({
    selectedAnswers: [] as string[],
    userDetails: {},
  });

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

  function submitSurvey(selectedAnswers: string[]) {
    form.selectedAnswers = selectedAnswers;
    step.value = Steps.UserDetails;
  }

  // Methods
  async function submitUserDetails(userDetails: UserDetails) {
    form.userDetails = userDetails;

    const data = await $fetch<ApiQuizSubmit>(ApiUrl.QuizSubmit, {
      method: 'POST',
      body: {
        name: quiz.value.id,
        ...form,
      },
    });

    await router.push(`/quiz/results/${data.id}`);
  }
</script>
