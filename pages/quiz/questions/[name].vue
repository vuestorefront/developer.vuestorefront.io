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
  import { notify } from '@kyvg/vue3-notification';
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

  const enum Steps {
    Survey = 1,
    UserDetails = 2,
  }

  const { t } = useI18n();
  const route = useRoute();
  const router = useRouter();
  const config = useRuntimeConfig();
  const step = ref(Steps.Survey);
  const form = reactive({
    selectedAnswers: [] as string[],
    userDetails: {},
  });

  const { data: quiz } = await useFetch<ApiQuizQuestions>(
    ApiUrl.QuizQuestions,
    {
      key: `quiz-${route.params.name}`,
      params: {
        name: route.params.name,
      },
    },
  );

  const ogImage = computed(() => {
    const { href } = new URL(
      '/og_images/quiz_questions.jpg',
      config.public.pageUrl,
    );

    return href;
  });

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
        content: ogImage,
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: ogImage,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: ogImage,
      },
    ],
  });

  // Methods
  function submitSurvey(selectedAnswers: string[]) {
    form.selectedAnswers = selectedAnswers;
    step.value = Steps.UserDetails;
  }

  async function submitUserDetails(userDetails: UserDetails) {
    form.userDetails = userDetails;

    await $fetch<ApiQuizSubmit>(ApiUrl.QuizSubmit, {
      method: 'POST',
      body: {
        name: quiz.value.id,
        ...form,
      },
    })
      .then((data) => router.push(`/quiz/results/${data.id}`))
      .catch((error) =>
        notify({
          text: error.data.message || t('global.error.generic'),
          type: 'error',
        }),
      );
  }
</script>
