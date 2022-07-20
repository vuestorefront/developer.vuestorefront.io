<template>
  <p class="align-middle text-base leading-8 text-gray-500 dark:text-white">
    <slot>{{ t('components.atoms.text.editPage') }}</slot>
    <Suspense>
      <AtomsIcon name="carbon:edit" class="ml-2 mb-1 text-lg" />
    </Suspense>
  </p>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>
