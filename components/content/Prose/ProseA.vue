<template>
  <NuxtLink :href="href">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
  defineProps({
    href: {
      type: String,
      default: '',
    },
    blank: {
      type: Boolean,
      default: false,
    },
  });
</script>
