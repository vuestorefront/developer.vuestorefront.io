<template>
  <p class="align-middle text-base leading-8 text-gray-500 dark:text-white">
    <slot :text-date="textDate">
      {{ t('components.atoms.text.updatedAt') }} <time>{{ textDate }}</time>
    </slot>
    <Suspense>
      <AtomsIcon name="carbon:calendar" class="ml-2 mb-1 text-lg" />
    </Suspense>
  </p>
</template>

<script setup lang="ts">
  import { formatDate } from '~/utils/date';
  import { useI18n } from 'vue-i18n';

  const props = defineProps<{
    date?: Date | number;
  }>();

  const { t } = useI18n();

  const textDate = computed(() =>
    formatDate({
      date: new Date(props.date || '').toUTCString(),
      options: {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    }),
  );
</script>
