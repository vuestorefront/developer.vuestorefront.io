<template>
  <h1 class="my-4 text-center text-4xl">
    <AtomsTextFirstColoredWord :text="t('page.quiz.userDetails.subheading')" />
  </h1>

  <div
    class="container mx-auto flex flex-col flex-wrap px-5 py-4 text-gray-600 lg:w-2/3"
  >
    <form class="flex flex-col items-center" @submit.stop.prevent="submit">
      <div class="flex flex-col space-y-4 md:w-2/3">
        <!-- First name -->
        <div class="flex flex-col">
          <label for="first_name">
            {{ t('page.quiz.userDetails.firstName') }}
          </label>
          <input
            id="first_name"
            type="text"
            name="name"
            required
            class="rounded-md border border-slate-300 bg-slate-50 px-4 py-2 focus:border-blue-300 focus:ring focus:ring-blue-200"
          />
        </div>

        <!-- Last name -->
        <div class="flex flex-col">
          <label for="last_name">
            {{ t('page.quiz.userDetails.lastName') }}
          </label>
          <input
            id="last_name"
            type="text"
            name="surname"
            required
            class="rounded-md border border-slate-300 bg-slate-50 px-4 py-2 focus:border-blue-300 focus:ring focus:ring-blue-200"
          />
        </div>

        <!-- Email address -->
        <div class="flex flex-col">
          <label for="email">
            {{ t('page.quiz.userDetails.email') }}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            class="rounded-md border border-slate-300 bg-slate-50 px-4 py-2 focus:border-blue-300 focus:ring focus:ring-blue-200"
          />

          <p class="mt-2 text-center text-sm text-gray-500">
            {{ t('page.quiz.userDetails.emailMessage') }}
          </p>
        </div>
      </div>

      <!-- Submit button -->
      <AtomsButton
        type="submit"
        color="primary"
        class="mt-6"
        :disabled="loading"
      >
        <AtomsLoading v-if="loading" />

        <template v-else>
          {{ t('page.quiz.questions.submit') }}
        </template>
      </AtomsButton>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import type { UserDetails } from '~/types/api/quiz';

  defineProps<{
    loading: boolean;
  }>();

  const emit = defineEmits<{
    (e: 'submit', form: UserDetails): void;
  }>();

  const { t } = useI18n();

  function submit(event: Event) {
    const form = new FormData(event.target as HTMLFormElement);
    const userDetails = Object.fromEntries(form) as unknown as UserDetails;

    emit('submit', userDetails);
  }
</script>
