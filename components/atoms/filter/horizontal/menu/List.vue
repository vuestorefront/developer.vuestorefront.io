<template>
  <transition
    enter-active-class="transition ease-out duration-100"
    enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-from-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <MenuItems
      :as="custom"
      :disabled="disabled"
      class="filter-horizontal-menu-list"
    >
      <slot />
    </MenuItems>
  </transition>
</template>

<script setup lang="ts">
  import { MenuItems } from '@headlessui/vue';
  import type { VNode } from 'vue';

  withDefaults(
    defineProps<{
      custom?: keyof HTMLElementTagNameMap | VNode;
      disabled?: boolean;
    }>(),
    {
      disabled: false,
      custom: 'div',
    },
  );
</script>
