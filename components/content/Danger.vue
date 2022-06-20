<template>
  <ColorTextBox type="danger" :message="message" :title="title" />
</template>

<script setup lang="ts">
  import ColorTextBox from '../banners/colored/TextBoxBanner.vue';

  defineProps<{
    title: string;
    message: string;
  }>();
</script>
