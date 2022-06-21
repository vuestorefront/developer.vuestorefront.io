<template>
  <p class="text-base text-gray-500 dark:text-white leading-8 align-middle">
    <slot :text-date="textDate">Updated at {{ textDate }}</slot>
    <Suspense>
      <Icon name="carbon:calendar" class="text-lg ml-2 mb-1" />
    </Suspense>
  </p>
</template>

<script setup lang="ts">
  import Icon from '~/components/icons/Icon.vue';

  const props = defineProps<{
    date?: Date | number;
  }>();

  const textDate = computed(() =>
    new Intl.DateTimeFormat('default', {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(props.date || '')),
  );
</script>
