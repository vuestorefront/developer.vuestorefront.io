<template>
  <p class="align-middle text-sm font-normal text-gray-500">
    <slot>{{ t('components.atoms.text.editPage') }}</slot>
    <Suspense>
      <AtomsIcon name="carbon:edit" class="ml-2 mb-1 text-base" />
    </Suspense>
  </p>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>
