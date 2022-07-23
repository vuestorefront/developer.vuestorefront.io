<template>
  <MenuItem v-slot="slotProps">
    <NuxtLink
      class="filter-horizontal-menu-list-item group"
      :class="
        slotProps.active ? 'filter-horizontal-menu-list-item--active' : ''
      "
      :to="{
        ...to,
        query: {
          ...$route.query,
          ...to?.query,
        },
      }"
    >
      <Suspense v-if="icon">
        <AtomsIcon
          :name="icon"
          class="filter-horizontal-menu-list-item--icon"
        />
      </Suspense>
      <slot v-bind="slotProps" />
    </NuxtLink>
  </MenuItem>
</template>

<script setup lang="ts">
  import { MenuItem } from '@headlessui/vue';
  import { NuxtLinkProps } from '#app';

  withDefaults(
    defineProps<{
      icon?: string;
      to: NuxtLinkProps;
    }>(),
    {
      icon: '',
    },
  );
</script>
