<template>
  <NuxtLink :to="url" target="_blank" class="contributors-item">
    <AtomsAvatarDiamondShape :img="avatar" class="mr-2" />
    <span>{{ name }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
  defineProps<{
    name?: string;
    avatar?: string;
    username?: string;
    url?: string;
  }>();
</script>
