<template>
  <div class="flex items-center justify-center flex-col">
    <slot name="title">
      <h3 v-if="title" class="text-3xl font-medium mb-2">{{ title }}</h3>
    </slot>
    <slot name="message">
      <p v-if="message" class="text-gray-500 font-base">{{ message }}</p>
    </slot>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title?: string;
    message?: string;
  }>();
</script>
