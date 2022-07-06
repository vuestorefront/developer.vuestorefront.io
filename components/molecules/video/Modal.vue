<template>
  <AtomsModal :open="open" @close="$emit('close', $event)">
    <div ref="player" />
  </AtomsModal>
</template>

<script setup lang="ts">
  import YouTubePlayer from 'youtube-player';

  const props = withDefaults(
    defineProps<{
      autoplay?: boolean;
      controls?: boolean;
      height?: number;
      loop?: boolean;
      modestBranding?: boolean;
      open: boolean;
      videoId: string;
      width?: number;
    }>(),
    {
      open: false,
      width: 625,
      height: 352,
      autoplay: false,
      loop: false,
      controls: false,
      modestBranding: false,
    },
  );
  defineEmits(['close']);

  const player = ref(null);

  onMounted(() => {
    player.value = YouTubePlayer(player.value, {
      host: `${window.location.protocol}//www.youtube.com/`,
      width: props.width,
      height: props.height,
      videoId: props.videoId,
      playerVars: {
        autoplay: props.autoplay,
        loop: props.loop,
        controls: props.controls,
        modestbranding: props.modestBranding,
      },
    });
  });

  onUnmounted(() => {
    player.value?.destroy();
  });
</script>
