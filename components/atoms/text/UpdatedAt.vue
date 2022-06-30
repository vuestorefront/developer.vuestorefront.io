<template>
  <p class="text-base text-gray-500 dark:text-white leading-8 align-middle">
    <slot :text-date="textDate">
      Updated at <time>{{ textDate }}</time>
    </slot>
    <Suspense>
      <AtomsIcon name="carbon:calendar" class="text-lg ml-2 mb-1" />
    </Suspense>
  </p>
</template>

<script setup lang="ts">
  const props = defineProps<{
    date?: Date | number;
  }>();
  const { formatDate } = useDateTimeIntl();

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
