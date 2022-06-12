<template>
  <ColorTextBox type="danger" :message="message" :title="title" />
</template>

<script setup lang="ts">
  import ColorTextBox from '../molecules/banner/ColorTextBox';

  defineProps<{
    title: string;
    message: string;
  }>();
</script>
