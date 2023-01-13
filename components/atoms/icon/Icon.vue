<template>
  <Icon :name="name" />
</template>

<script setup lang="ts">
  defineProps<{
    name: string;
  }>();
</script>
