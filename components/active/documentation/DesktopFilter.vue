<template>
  <div class="hidden lg:block">
    <h3 class="mb-5 text-lg font-medium text-gray-500">
      {{ t('content.page.documentation.filter.title') }}
    </h3>
    <ActiveDocumentationFilterList />
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>
