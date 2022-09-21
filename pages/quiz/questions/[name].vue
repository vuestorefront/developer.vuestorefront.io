<template>
  <AtomsLayoutContainer ref="container" class="space-y-2">
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

  useHead({
    meta: [
      {
        hid: 'og:title',
        property: 'og:title',
        content: t('page.quiz.questions.head.ogtitle'),
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: t('page.quiz.questions.head.ogdescription'),
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/og_images/quiz_questions.jpg',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: '/og_images/quiz_questions.jpg',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/og_images/quiz_questions.jpg',
      },
    ],
  });

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
