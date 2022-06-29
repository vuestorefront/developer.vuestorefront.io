<template>
  <MoleculesBannersTextBox type="default" :message="message" :title="title" />
</template>

<script setup lang="ts">
  defineProps<{
    title: string;
    message: string;
  }>();
</script>
