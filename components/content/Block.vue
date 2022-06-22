<template>
  <ColorTextBox type="default" :message="message" :title="title" />
</template>

<script setup lang="ts">
  import ColorTextBox from '~/components/banners/TextBoxBanner.vue';

  defineProps<{
    title: string;
    message: string;
  }>();
</script>
