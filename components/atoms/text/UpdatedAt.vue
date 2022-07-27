<template>
  <p class="font-base align-middle text-sm text-gray-500 dark:text-white">
    <slot>
      {{ t('components.atoms.text.updatedAt') }}
      <time>{{ d(new Date(props.date || ''), 'medium') }}</time>
    </slot>
    <Suspense>
      <AtomsIcon name="carbon:calendar" class="ml-2 mb-1 text-base" />
    </Suspense>
  </p>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const props = defineProps<{
    date?: Date | number | string;
  }>();

  const { t, d } = useI18n();
</script>
