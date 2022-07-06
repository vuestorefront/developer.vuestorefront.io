<template>
  <div
    aria-hidden="true"
    class="relative flex cursor-pointer items-end justify-start"
    @click="$emit('click', $event)"
  >
    <img :src="image" alt="" class="h-full w-full rounded-xl" />
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
    >
      <img src="assets/images/icons/play-button.svg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    image: string;
  }>();
  defineEmits(['click']);
</script>
