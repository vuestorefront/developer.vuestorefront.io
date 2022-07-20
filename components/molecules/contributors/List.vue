<template>
  <div>
    <p class="text-gray font-lg mb-2 dark:text-white">
      Contributors to this page:
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
  defineProps<{
    contributors?: {
      name?: string;
      avatar?: string;
      username?: string;
      url?: string;
    }[];
  }>();
</script>
