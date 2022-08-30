<template>
  <div
    class="container mx-auto flex flex-col flex-wrap px-5 py-4 text-gray-600 lg:w-2/3"
  >
    <!-- Quiz header -->
    <div class="flex justify-between pt-4">
      <div class="mb-1 text-sm text-gray-500">
        {{ t('page.quiz.questions.step', { current: currentStepNumber, max }) }}
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
          {{ currentQuestion.title }}
        </p>

        <label
          v-for="answer in currentQuestion.answers"
          :key="answer.id"
          :for="'answer' + answer.id"
          :class="{
            'border-green-300 bg-green-100 text-green-800': isSelected(
              answer.id,
            ),
          }"
          class="mt-2 flex cursor-pointer items-center justify-center rounded border border-gray-200 pl-4 text-gray-800 transition-all duration-200 ease-in-out"
        >
          <div class="flex h-10 w-10 items-center justify-center">
            <AtomsIcon
              v-if="isSelected(answer.id)"
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
            :id="'answer' + answer.id"
            :value="answer.id"
            :name="currentQuestion.id"
            :checked="isSelected(answer.id)"
            type="radio"
            class="hidden"
            @input="() => select(answer.id)"
          />
          <span class="text-bold w-full py-4 text-sm">
            {{ answer.text }}
          </span>
        </label>

        <!-- Buttons -->
        <div
          :class="isFirstStep ? 'justify-end' : 'justify-between'"
          class="mt-6 flex w-full flex-wrap items-center"
        >
          <AtomsButton v-if="!isFirstStep" color="gray" @click="goBack">
            <AtomsIcon
              name="carbon:arrow-left"
              class="mr-2 text-lg text-gray-800"
            />
            {{ t('page.quiz.questions.back') }}
          </AtomsButton>

          <AtomsButton :disabled="!currentAnswer" color="gray" @click="goNext">
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
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import type { ApiQuizQuestions, SelectedAnswers } from '~/types/api/quiz';

  const props = defineProps<{
    quiz: ApiQuizQuestions;
  }>();

  const emit = defineEmits<{
    (e: 'submit', answers: SelectedAnswers): void;
  }>();

  definePageMeta({
    documentDriven: false,
  });

  const { t } = useI18n();

  // Refs
  const selectedAnswers = reactive<SelectedAnswers>({});
  const currentStepNumber = ref(1);

  // Computed
  const max = computed<number>(() => {
    return props.quiz.questions?.length;
  });

  const progress = computed(() => {
    return Math.round((currentStepNumber.value / max.value) * 100);
  });

  const currentQuestion = computed(() => {
    return props.quiz.questions?.[currentStepNumber.value - 1];
  });

  const currentAnswer = computed(() => {
    return selectedAnswers[currentQuestion.value.id];
  });

  const isFirstStep = computed(() => {
    return currentStepNumber.value === 1;
  });

  const isLastStep = computed(() => {
    return currentStepNumber.value === max.value;
  });

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

    if (isLastStep.value) {
      emit('submit', selectedAnswers);
      return;
    }

    currentStepNumber.value += 1;
  }

  function select(answer: string) {
    selectedAnswers[currentQuestion.value.id] = answer;
  }

  function isSelected(answer: string) {
    return answer === currentAnswer.value;
  }
</script>