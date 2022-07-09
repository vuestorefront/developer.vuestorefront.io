<template>
  <AtomsModal :open="open" @close="$emit('close', $event)">
    <div ref="player" class="video-container" />
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

<style>
  .video-container {
    overflow: hidden;
    position: relative;
  }
  @media (max-width: 640px) {
    .video-container {
      width: 100%;
    }
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
