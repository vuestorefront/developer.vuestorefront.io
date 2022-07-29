<template>
  <AtomsLayoutContainer ref="container" class="space-y-2">
    <h1 class="my-12 text-center text-4xl">
      <AtomsTextFirstColoredWord
        :text="t('page.quiz.questions.header', { test: 'X' })"
      />
    </h1>

    <div
      class="container mx-auto flex flex-col flex-wrap px-5 py-4 text-gray-600 lg:w-2/3"
    >
      <!-- Quiz header -->
      <div class="flex justify-between pt-4">
        <div class="mb-1 text-sm text-gray-500">
          {{
            t('page.quiz.questions.step', { current: currentStepNumber, max })
          }}
        </div>

        <div class="flex items-center md:w-64">
          <div class="mr-2 w-full rounded-full bg-gray-100">
            <div
              class="h-2 rounded-full bg-green-500 transition-all duration-200 ease-in-out"
              :style="{ width: progress + '%' }"
            ></div>
          </div>
          <div class="w-10 text-xs text-gray-500">
            {{ t('page.quiz.questions.progress', { progress }) }}
          </div>
        </div>
      </div>

      <!-- Quiz questions -->
      <div class="flex w-full flex-col py-2">
        <div class="flex flex-col flex-wrap">
          <!-- Form -->
          <p class="py-6 text-2xl font-medium leading-tight text-gray-700">
            {{ currentStep.question }}
          </p>

          <label
            v-for="answer in currentStep.answers"
            :key="answer"
            :for="'answer' + answer"
            :class="{
              'border-green-300 bg-green-100 text-green-800':
                isSelected(answer),
            }"
            class="mt-2 flex cursor-pointer items-center justify-center rounded border border-gray-200 pl-4 text-gray-800 transition-all duration-200 ease-in-out"
          >
            <div class="flex h-10 w-10 items-center justify-center">
              <AtomsIcon
                v-if="isSelected(answer)"
                name="carbon:radio-button-checked"
                class="text-green-600"
              />

              <AtomsIcon
                v-else
                name="carbon:radio-button"
                class="text-gray-400"
              />
            </div>

            <input
              :id="'answer' + answer"
              :value="answer"
              :name="currentStep.question"
              :checked="isSelected(answer)"
              type="radio"
              class="hidden"
              @input="() => select(answer)"
            />
            <span class="text-bold w-full py-4 text-sm">
              {{ answer }}
            </span>
          </label>

          <!-- Buttons -->
          <div class="mt-6 flex w-full flex-wrap items-center justify-between">
            <AtomsButton color="gray" @click="goBack">
              <AtomsIcon
                name="carbon:arrow-left"
                class="mr-2 text-lg text-gray-800"
              />
              {{ t('page.quiz.questions.back') }}
            </AtomsButton>

            <AtomsButton
              v-if="isLastStep"
              :disabled="!currentAnswer"
              color="primary"
              @click="submit"
            >
              {{ t('page.quiz.questions.submit') }}
            </AtomsButton>

            <AtomsButton
              v-else
              :disabled="!currentAnswer"
              color="gray"
              @click="goNext"
            >
              {{ t('page.quiz.questions.next') }}
              <AtomsIcon
                name="carbon:arrow-right"
                class="ml-2 text-lg text-gray-800"
              />
            </AtomsButton>
          </div>
        </div>
      </div>
    </div>
  </AtomsLayoutContainer>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  definePageMeta({
    documentDriven: false,
  });

  const { t } = useI18n();

  // Refs
  const selectedAnswers = reactive<Record<number, string>>({});
  const currentStepNumber = ref(1);
  const steps = ref([
    {
      title: 'UI library',
      question:
        "What's the name of the UI library preinstalled in Vue Storefront projects?",
      answers: ['Vuetify', 'CommerceUI', 'StorefrontUI', 'HeadlessUI'],
    },
    {
      title: 'Framework',
      question: 'Whcih framework powers Vue Storefront?',
      answers: ['Nuxt.js', 'Next.js', 'SvelteKit', 'Remix'],
    },
    {
      title: 'Server Middleware',
      question: 'Which file configures Server Middleware?',
      answers: [
        'nuxt.config.js',
        'middleware.config.js',
        'server.config.js',
        'vue.config.js',
      ],
    },
  ]);

  // Computed
  const max = computed(() => steps.value.length);
  const progress = computed(() =>
    Math.round((currentStepNumber.value / max.value) * 100),
  );
  const currentStep = computed(() => steps.value[currentStepNumber.value - 1]);
  const currentAnswer = computed(
    () => selectedAnswers[currentStepNumber.value],
  );
  const isLastStep = computed(() => currentStepNumber.value === max.value);

  // Methods
  function goBack() {
    if (currentStepNumber.value > 1) {
      currentStepNumber.value -= 1;
    }
  }

  function goNext() {
    if (!currentAnswer.value) {
      return;
    }

    if (currentStepNumber.value >= max.value) {
      return;
    }

    currentStepNumber.value += 1;
  }

  function select(answer: string) {
    selectedAnswers[currentStepNumber.value] = answer;
  }

  function submit() {
    console.log(selectedAnswers);
  }

  function isSelected(answer: string) {
    return answer === currentAnswer.value;
  }
</script>
