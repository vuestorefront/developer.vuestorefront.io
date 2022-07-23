<template>
  <Popover
    v-slot="slotProps"
    :as="custom"
    class="filter-horizontal-pop-over-content"
  >
    <slot v-bind="slotProps" />
  </Popover>
</template>

<script setup lang="ts">
  import { Popover } from '@headlessui/vue';
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
