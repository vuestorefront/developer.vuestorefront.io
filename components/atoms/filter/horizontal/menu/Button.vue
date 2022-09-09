<template>
  <MenuButton
    :as="custom"
    class="filter-horizontal-menu-button group"
    :class="open ? 'filter-horizontal-menu-button--active' : ''"
  >
    <slot />
    <Icon
      name="ph:caret-down-bold"
      class="filter-horizontal-menu-button--icon"
    />
  </MenuButton>
</template>

<script setup lang="ts">
  import { MenuButton } from '@headlessui/vue';
  import type { VNode } from 'vue';

  withDefaults(
    defineProps<{
      custom?: keyof HTMLElementTagNameMap | VNode;
      open?: boolean;
    }>(),
    {
      custom: 'button',
      open: false,
    },
  );
</script>
