<template>
  <AtomsModal :open="open" @close="$emit('close', $event)">
    <template #content>
      <AtomsVideoPlayer v-if="open" v-bind="$props" />
    </template>
  </AtomsModal>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      open?: boolean;
      poster?: string;
      src: string;
      sources?: { poster?: string; src: string }[];
    }>(),
    {
      open: false,
      poster: '',
      sources: () => [],
    },
  );

  defineEmits(['close']);
</script>
