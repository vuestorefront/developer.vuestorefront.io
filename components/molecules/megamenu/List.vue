<template>
  <ul v-show="isVisible" class="mega-menu-list">
    <li v-for="(menu, index) in items" :key="index + UUID()">
      <NuxtLink :to="menu.link">
        <Suspense v-if="menu.iconName">
          <AtomsIcon :name="menu.iconName" />
        </Suspense>
        {{ menu.label }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { HeaderMenu } from '~/types/props/types/molecules/menuPropTypes';
  import { UUID } from '~/utils/uuid';

  defineProps<{
    items?: HeaderMenu[];
    isVisible?: boolean;
  }>();
</script>
