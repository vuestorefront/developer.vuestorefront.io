<template>
  <div aria-hidden="true" class="relative" @click="$emit('click', $event)">
    <img
      :src="src"
      alt="Video Thumb"
      class="max-h-56 w-full object-cover object-center"
    />
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
    >
      <img src="~/assets/images/icons/play-button.svg" alt="Video Play" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    image?: string;
    video?: string;
  }>();

  defineEmits(['click']);

  const src = computed(() => {
    if (props.image) return props.image;

    if (props.video) {
      const match = props.video.match(/\?v=([^&]*)/);

      return `https://i3.ytimg.com/vi/${match[1]}/hqdefault.jpg`;
    }

    return '';
  });
</script>
