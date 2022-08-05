<template>
  <AtomsModal :open="open" @close="$emit('close', $event)">
    <template #content>
      <AtomsVideoPlayer
        v-if="open"
        v-bind="$props"
        :width="`${playerSizes.width}px`"
        :height="`${playerSizes.height}px`"
      />
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

  const playerSizes = computed(() => {
    const { width } = useWindowSize();
    const widthBase = width.value > 450 ? width.value / 2 : 300;

    return {
      height: Math.ceil((widthBase * 9) / 16),
      width: widthBase,
    };
  });
</script>
