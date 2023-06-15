<template>
  <div class="flex flex-col items-center justify-center text-center">
    <slot name="title">
      <div class="flex items-center gap-2">
        <h4 v-if="title" class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          {{ title }}
        </h4>
        <div v-if="new">
          <span class="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 font-medium text-green-800">
            New
          </span>
        </div>
      </div>
    </slot>
    <slot name="message">
      <p v-if="message" class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
        {{ message }}
      </p>
    </slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  message?: string;
  new?: boolean;
}>();
</script>
