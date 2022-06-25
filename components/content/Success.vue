<template>
  <ColorTextBox type="success" :message="message" :title="title" />
</template>

<script setup lang="ts">
  import ColorTextBox from '~/components/molecules/banners/TextBoxBanner.vue';

  defineProps<{
    title: string;
    message: string;
  }>();
</script>
