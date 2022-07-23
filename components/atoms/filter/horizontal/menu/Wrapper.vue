<template>
  <Menu
    v-slot="slotProps"
    :as="custom"
    class="filter-horizontal-menu-list-wrapper"
  >
    <slot v-bind="slotProps"> </slot>
  </Menu>
</template>

<script setup lang="ts">
  import { Menu } from '@headlessui/vue';
  import type { VNode } from 'vue';

  withDefaults(
    defineProps<{
      custom?: keyof HTMLElementTagNameMap | VNode;
    }>(),
    {
      custom: 'div',
    },
  );
</script>
