<template>
  <AtomsLayoutContainer ref="container" class="space-y-2">
    <div v-if="step === Steps.Intro">
      <div class="flex lg:gap-20">
        <div class="w-11/12">
          <h1>
            <span class="text-5xl font-medium">
              <span style="color: #02bb4d">Welcome</span> to Vue Storefront's
              <span class="font-semibold">{{ quiz?.title }}</span>
              Certification Program.
            </span>
          </h1>
          <div v-if="quiz?.type !== 'sdk'">
            <p>Our exams consist of a set of {{ quiz?.amount }} questions:</p>
            <ul>
              <li>
                the first 5 questions are about Vue Storefront and its
                architecture;
              </li>
              <li>
                the last 5 are dedicated to testing your knowledge about the
                <span>{{ quiz?.title }}</span> integration.
              </li>
            </ul>
          </div>
          <div v-else>
            <p>Our exams consist of a set of {{ quiz?.amount }} <span class="font-bold">{{ quiz?.title }}</span> specific
              questions.</p>
          </div>

          <p v-if="quiz?.id !== 'essentials'">
            Becoming a certified Vue Storefront developer allows you to broaden
            your career opportunities in the e-commerce space, either by helping
            you to you to stand out inside your current organisation, or, in
            case you’re a freelancer, giving you the power to contribute to
            different projects.
          </p>
        </div>
        <div class="hidden lg:flex lg:h-96 lg:w-3/5 lg:content-start">
          <img :src="`/brands/logos/${quiz?.id}.svg`" :alt="quiz?.title" class="h-40 w-full object-contain" />
        </div>
      </div>
      <div class="w-full lg:w-2/5">
        <p class="my-4 text-lg font-semibold">
          Provide your details to start the quiz:
        </p>
        <div class="flex flex-col">
          <label for="first_name">
            {{ t('page.quiz.userDetails.firstName') }}
          </label>
          <input id="first_name" v-model="firstName" type="text" name="name" required
            class="rounded-md border border-slate-300 bg-slate-50 px-4 py-2 focus:border-blue-300 focus:ring focus:ring-blue-200" />
        </div>

        <!-- Last name -->
        <div class="flex flex-col">
          <label for="last_name">
            {{ t('page.quiz.userDetails.lastName') }}
          </label>
          <input id="last_name" v-model="lastName" type="text" name="surname" required
            class="rounded-md border border-slate-300 bg-slate-50 px-4 py-2 focus:border-blue-300 focus:ring focus:ring-blue-200" />
        </div>

        <!-- Email -->
        <div class="flex flex-col">
          <label for="email">
            {{ t('page.quiz.userDetails.email') }}
          </label>
          <input id="email" v-model="email" type="email" name="email" required
            class="rounded-md border border-slate-300 bg-slate-50 px-4 py-2 focus:border-blue-300 focus:ring focus:ring-blue-200" />
        </div>
      </div>

      <div class="mt-4">
        <AtomsFormCheckbox :model-value="consent" :value="consent" :section-id="1" @change="onCheckboxChange">
          {{ t('page.quiz.userDetails.consent') }}
        </AtomsFormCheckbox>
      </div>
      <AtomsButton color="primary" :disabled="!firstName || !lastName || !email || !consent" label="Start the Quiz"
        text-color="secondary" class="mt-12 w-full md:w-fit" :shadow="false" @click="startQuiz" />
    </div>

    <ActiveQuizSurvey v-if="step === Steps.Survey" :quiz="quiz" :survey-loading="surveyLoading"
      @submit="submitUserDetails" />
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
import { useUserDetails } from '~/store/userDetails';

definePageMeta({
  documentDriven: false,
  title: 'i18n:page.quiz.questions.head.title',
});


const enum Steps {
  UserDetails = 0,
  Intro = 1,
  Survey = 2,
  Results = 3,
}

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();
const { setUserDetails } = useUserDetails();
const loading = ref(false);
const surveyLoading = ref(false);
const step = ref(Steps.Intro);
const firstName = ref(null);
const lastName = ref(null);
const email = ref(null);
const consent = ref(false);
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

function startQuiz() {
  step.value += 1;
}

function onCheckboxChange(value: string, event: Event) {
  const { checked } = event.target as HTMLInputElement;

  consent.value = !!checked;
}

// Methods
function submitSurvey(selectedAnswers: string[]) {
  form.selectedAnswers = selectedAnswers;
  step.value = Steps.UserDetails;
}

async function submitUserDetails(selectedAnswers: string[]) {
  form.selectedAnswers = selectedAnswers;
  form.userDetails = {
    name: firstName.value,
    surname: lastName.value,
    email: email.value,
  };
  setUserDetails({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
  })
  surveyLoading.value = true;
  loading.value = true;

  await $fetch<ApiQuizSubmit>(ApiUrl.QuizSubmit, {
    method: 'POST',
    body: {
      name: quiz.value?.id,
      ...form,
    },
  })
    .then((data) => router.push(`/quiz/results/${data.id}`))
    .catch((error) => {
      loading.value = false;
      notify({
        text: error.data.message || t('global.error.generic'),
        type: 'error',
      });
    });
}
</script>
