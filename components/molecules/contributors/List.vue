<template>
  <div>
    <p class="text-gray mb-2 text-sm dark:text-white">
      {{ t('components.molecules.contributors.list.contributorsPage') }}
    </p>
    <div class="flex flex-row gap-4">
      <AtomsContributorItem
        v-for="(contributor, key) in contributors"
        :key="key"
        v-bind="contributor"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  defineProps<{
    contributors?: {
      name?: string;
      avatar?: string;
      username?: string;
      url?: string;
    }[];
  }>();

  const { t } = useI18n();
</script>
