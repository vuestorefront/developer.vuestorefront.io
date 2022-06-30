<template>
  <div aria-hidden="true" class="relative flex items-end justify-start">
    <img :src="image" alt="" class="h-full w-full rounded-xl" />
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <img src="assets/images/icons/play-button.svg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    image: string;
  }>();
</script>
