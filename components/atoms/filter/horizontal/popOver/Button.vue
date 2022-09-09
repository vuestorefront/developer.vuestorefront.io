<template>
  <PopoverButton
    :as="custom"
    :open="open"
    class="filter-horizontal-pop-over-button"
  >
    <span>
      <slot />
    </span>
    <span v-if="counter > 0" class="filter-horizontal-pop-over-button--counter">
      {{ counter }}
    </span>
    <slot name="icon">
      <Icon
        name="ph:caret-down-bold"
        class="filter-horizontal-pop-over-button--icon"
        :class="open ? 'rotate-180' : 'rotate-0'"
      />
    </slot>
  </PopoverButton>
</template>

<script setup lang="ts">
  import { PopoverButton } from '@headlessui/vue';
  import type { VNode } from 'vue';

  withDefaults(
    defineProps<{
      custom?: keyof HTMLElementTagNameMap | VNode;
      open: boolean;
      counter?: number;
    }>(),
    {
      custom: 'button',
      open: false,
      counter: 0,
    },
  );
</script>
