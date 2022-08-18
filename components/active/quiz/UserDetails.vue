<template>
  <div
    class="container mx-auto flex flex-col flex-wrap px-5 py-4 text-gray-600 lg:w-2/3"
  >
    <form @submit.stop.prevent="submit">
      <div>
        <input type="text" name="name" placeholder="First name" required />
        <input type="text" name="surname" placeholder="Last name" required />
        <input
          type="email"
          name="email"
          placeholder="E-mail address"
          required
        />
      </div>

      <AtomsButton color="gray">
        <AtomsIcon
          name="carbon:arrow-left"
          class="mr-2 text-lg text-gray-800"
          @click="emit('goBack')"
        />
        {{ t('page.quiz.questions.back') }}
      </AtomsButton>

      <AtomsButton color="primary">
        {{ t('page.quiz.questions.submit') }}
      </AtomsButton>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import type { UserDetails } from '~/types/api/quiz';

  const emit = defineEmits<{
    (e: 'goBack'): void;
    (e: 'submit', form: UserDetails): void;
  }>();

  const { t } = useI18n();

  function submit(event: Event) {
    const form = new FormData(event.target as HTMLFormElement);
    const userDetails = Object.fromEntries(form) as unknown as UserDetails;

    emit('submit', userDetails);
  }
</script>
