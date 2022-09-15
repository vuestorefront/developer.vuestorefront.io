<template>
  <div
    class="video-player relative overflow-hidden rounded-sm bg-black bg-opacity-25"
    :class="{ loaded }"
    :style="playerSize"
  >
    <img
      v-if="provider ? provider.poster : poster"
      class="video absolute top-0 left-0 h-full w-full object-cover"
      :src="provider ? provider.poster : poster"
      :width="670"
      :height="377"
    />
    <div v-if="loaded" class="video absolute top-0 left-0 h-full w-full">
      <!-- remote videos -->
      <video v-if="!provider" :poster="poster" controls autoplay>
        <source v-if="src" :src="src" />
        <source
          v-for="source in sources"
          :key="source.src || source"
          :src="source.src || source"
          :type="source.type"
        />
      </video>
      <!-- youtube -->
      <iframe
        v-else-if="provider.name === 'youtube'"
        width="560"
        height="377"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
        class="h-full w-full"
        :src="provider.src"
      ></iframe>
    </div>
    <div
      v-if="!loaded"
      class="overlay absolute top-0 left-0 h-full w-full cursor-pointer"
      @click="loaded = true"
    >
      <button class="play"></button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = withDefaults(
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
  const provider = ref(null);
  const loaded = ref(false);

  if (!props.src && props.sources.length === 0) {
    throw new Error(
      'VideoPlayer: you need to provide either `src` or `sources` props',
    );
  }

  const src = props.src || props.sources[0].src;

  if (src && src.includes('youtube.com/watch')) {
    const match = src.match(/\?v=([^&]*)/);
    provider.value = {
      name: 'youtube',
      src: `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1`,
      poster:
        props.poster || `https://i3.ytimg.com/vi/${match[1]}/hqdefault.jpg`,
    };
  }

  const playerSize = computed(() => ({
    width: `${
      /^\d+$/.test(`${props.width}`) ? `${props.width}px` : props.width
    }`,
    height: `${
      /^\d+$/.test(`${props.height}`) ? `${props.height}px` : props.height
    }`,
  }));
</script>
