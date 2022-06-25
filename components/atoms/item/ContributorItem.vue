<template>
  <NuxtLink
    :to="url"
    target="_blank"
    class="flex flex-row items-center justify-items-start border border-gray-300 rounded-xl px-2 py-1 w-fit hover:bg-gray-300 text-gray-500 dark:text-white hover:text-gray-900 cursor-pointer"
  >
    <DiamondShape :img="avatar" class="mr-2" />
    <div class="text-base">
      {{ name }}
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import DiamondShape from '~/components/atoms/avatar/DiamondShape.vue';

  defineProps<{
    name?: string;
    avatar?: string;
    username?: string;
    url?: string;
  }>();
</script>
