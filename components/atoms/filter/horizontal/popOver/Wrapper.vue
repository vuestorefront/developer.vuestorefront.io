<template>
  <PopoverGroup :as="custom" class="filter-horizontal-pop-over-wrapper">
    <slot />
  </PopoverGroup>
</template>

<script setup lang="ts">
  import { PopoverGroup } from '@headlessui/vue';
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
