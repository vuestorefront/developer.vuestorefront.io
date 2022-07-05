<template>
  <div class="flex items-center justify-center flex-col text-center">
    <slot name="title">
      <h3
        v-if="title"
        class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
      >
        {{ title }}
      </h3>
    </slot>
    <slot name="message">
      <p
        v-if="message"
        class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
      >
        {{ message }}
      </p>
    </slot>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title?: string;
    message?: string;
  }>();
</script>
