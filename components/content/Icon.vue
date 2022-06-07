<template>
  <Iconify v-if="icon" :icon="icon" class="inline-block w-5 h-5" />
  <Component :is="component" v-else-if="component" />
  <span v-else>{{ name }}</span>
</template>

<script setup lang="ts">
  import type { Ref } from 'vue';
  import type { IconifyIcon } from '@iconify/vue';
  import { Icon as Iconify, loadIcon } from '@iconify/vue';

  const properties = defineProps({
    name: {
      type: String,
      required: true,
    },
  });

  const nuxtApp = useNuxtApp();
  const icon: Ref<IconifyIcon | null> = ref(null);
  const component = computed(() => nuxtApp.vueApp.component(properties.name));

  icon.value = await loadIcon(properties.name).catch((_) => null);

  watch(
    () => properties.name,
    async () => {
      icon.value = await loadIcon(properties.name).catch((_) => null);
    },
  );
</script>
