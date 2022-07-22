<template>
  <MoleculesBannersTextBox type="danger" :message="message" :title="title">
    <slot />
  </MoleculesBannersTextBox>
</template>

<script setup lang="ts">
  defineProps<{
    title: string;
    message: string;
  }>();
</script>
