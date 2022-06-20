<template>
  <Iconify v-if="icon" :icon="icon" class="inline-block" />
  <Component :is="component" v-else-if="component" />
  <span v-else>{{ properties.name }}</span>
</template>

<script setup lang="ts">
  import type { Ref } from 'vue';
  import type { IconifyIcon } from '@iconify/vue';
  import { Icon as Iconify, loadIcon } from '@iconify/vue';

  const properties = defineProps<{
    name: string;
    inlineClass?: string;
  }>();

  const nuxtApp = useNuxtApp();
  const icon: Ref<IconifyIcon | null> = ref(null);
  icon.value = await loadIcon(properties.name).catch((_) => null);

  const component = computed(() => nuxtApp.vueApp.component(properties.name));

  watch(
    () => properties.name,
    async () => {
      icon.value = await loadIcon(properties.name).catch((_) => null);
    },
  );
</script>
