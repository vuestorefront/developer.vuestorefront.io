<template>
  <Iconify v-if="icon" :icon="icon" class="inline-block" aria-hidden="true" />
  <Component :is="component" v-else-if="component" aria-hidden="true" />
  <span v-else>{{ icon }}</span>
</template>

<script setup lang="ts">
  import type { Ref } from 'vue';
  import type { IconifyIcon } from '@iconify/vue';
  import { Icon as Iconify, loadIcon } from '@iconify/vue';

  const properties = defineProps<{
    name: string;
  }>();
  const icon: Ref<IconifyIcon | null> = ref(null);

  const nuxtApp = useNuxtApp();
  const { error } = useErrorHandling(icon);

  const component = computed(
    () => nuxtApp?.vueApp?.component(properties.name) || null,
  );

  const setIcon = async () => {
    icon.value = await loadIcon(properties.name).catch((_) => null);
  };

  onBeforeMount(async () => {
    await setIcon();
  });

  watch(
    () => properties.name,
    async () => {
      await setIcon();
    },
  );
</script>
