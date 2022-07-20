<template>
  <div class="flex flex-col items-center justify-center text-center">
    <slot name="title">
      <h3
        v-if="title"
        class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
      >
        {{ title }}
      </h3>
    </slot>
    <slot name="message">
      <p
        v-if="message"
        class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4"
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
