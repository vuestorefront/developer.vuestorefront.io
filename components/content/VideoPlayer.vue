<template>
  <AtomsVideoPlayer v-bind="$props" />
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      poster?: string;
      src: string;
      sources?: { poster?: string; src: string }[];
      width?: number | string;
      height?: number | string;
    }>(),
    {
      poster: '',
      sources: () => [],
      width: 640,
      height: 360,
    },
  );
</script>
