<template>
  <NuxtLink
    :to="url"
    target="_blank"
    class="flex w-fit cursor-pointer flex-row items-center justify-items-start rounded-xl border border-gray-300 px-2 py-1 text-gray-500 hover:bg-gray-300 hover:text-gray-900 dark:text-white"
  >
    <AtomsAvatarDiamondShape :img="avatar" class="mr-2" />
    <div class="text-base">
      {{ name }}
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  defineProps<{
    name?: string;
    avatar?: string;
    username?: string;
    url?: string;
  }>();
</script>
