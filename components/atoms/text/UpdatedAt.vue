<template>
  <p class="align-middle text-base leading-8 text-gray-500 dark:text-white">
    <slot :text-date="textDate">
      Updated at <time>{{ textDate }}</time>
    </slot>
    <Suspense>
      <AtomsIcon name="carbon:calendar" class="ml-2 mb-1 text-lg" />
    </Suspense>
  </p>
</template>

<script setup lang="ts">
  import { formatDate } from '~/utils/date';

  const props = defineProps<{
    date?: Date | number;
  }>();

  const textDate = computed(() =>
    formatDate({
      date: props.date || '',
      options: {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    }),
  );
</script>
