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
      @go-back="goBackToSurvey"
    />
  </AtomsLayoutContainer>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import { ApiUrl } from '~/enums/apiUrl';
  import type {
    SelectedAnswers,
    UserDetails,
    ApiQuizQuestions,
  } from '~/types/api/quiz';

  definePageMeta({
    documentDriven: false,
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
    selectedAnswers: {},
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

  function submitSurvey(selectedAnswers: SelectedAnswers) {
    form.selectedAnswers = selectedAnswers;
    step.value = Steps.UserDetails;
  }

  function goBackToSurvey() {
    step.value = Steps.Survey;
  }

  // Methods
  async function submitUserDetails(userDetails: UserDetails) {
    form.userDetails = userDetails;

    const data = await $fetch<ApiQuizSubmit>(ApiUrl.QuizSubmit, {
      method: 'POST',
      body: {
        name: quiz.value.name,
        ...form,
      },
    });

    await router.push(`/quiz/results/${data.id}`);
  }
</script>
