<template>
  <div
    class="grid grid-cols-1 items-center justify-center md:grid-cols-2 md:gap-24"
  >
    <div class="text-gray-900">
      <h1 v-if="title" class="text-6xl font-bold">
        <AtomsTextFirstColoredWord :text="title" />
      </h1>
      <h2 class="text-5xl font-bold">
        Error <span class="text-secondary-900">{{ code }}</span>
      </h2>
      <p class="my-4 text-gray-500">
        <slot>{{ message }}</slot>
      </p>
      <pre
        v-if="error"
        class="my-8 flex whitespace-normal break-words rounded-lg border border-gray-200 bg-gray-100 p-3 text-gray-400"
      >
          {{ error }}
      </pre>
      <div class="flex flex-row gap-4">
        <NuxtLink>
          <AtomsButtonContent color="primary" shadow>
            Go Back
          </AtomsButtonContent>
        </NuxtLink>
        <NuxtLink to="/">
          <AtomsButtonContent color="white" shadow>
            Go to Home
          </AtomsButtonContent>
        </NuxtLink>
      </div>
    </div>
    <div>
      <img src="/draw/techLife.svg" :alt="`Error ${code}`" />
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    code: number | string;
    title?: string;
    message?: string;
    error?: string;
  }>();
</script>
