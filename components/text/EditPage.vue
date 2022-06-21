<template>
  <p class="text-base text-gray-500 dark:text-white leading-8 align-middle">
    <slot>Edit this page on GitHub</slot>
    <Suspense>
      <Icon name="carbon:edit" class="text-lg ml-2 mb-1" />
    </Suspense>
  </p>
</template>

<script setup lang="ts">
  import Icon from '~/components/icons/Icon.vue';
</script>
