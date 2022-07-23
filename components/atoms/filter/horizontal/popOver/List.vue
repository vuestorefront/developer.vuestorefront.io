<template>
  <transition
    enter-active-class="transition ease-out duration-100"
    enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-from-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <PopoverPanel
      v-slot="slotProps"
      :as="custom"
      :focus="focus"
      :static="static"
      :unmount="unmount"
      class="filter-horizontal-pop-over-list"
    >
      <form>
        <slot v-bind="slotProps" />
      </form>
    </PopoverPanel>
  </transition>
</template>

<script setup lang="ts">
  import { PopoverPanel } from '@headlessui/vue';
  import type { VNode } from 'vue';

  withDefaults(
    defineProps<{
      custom?: keyof HTMLElementTagNameMap | VNode;
      focus?: boolean;
      static?: boolean;
      unmount?: boolean;
    }>(),
    {
      custom: 'div',
      focus: false,
      static: false,
      unmount: true,
    },
  );
</script>
