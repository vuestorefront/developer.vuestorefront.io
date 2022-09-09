<template>
  <p class="align-middle text-sm font-normal text-gray-500">
    <slot>{{ t('components.atoms.text.editPage') }}</slot>
    <Icon name="carbon:edit" class="ml-2 mb-1 text-base" />
  </p>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>
