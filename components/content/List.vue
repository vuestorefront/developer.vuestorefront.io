<template>
  <ul class="p-0">
    <li
      v-for="(item, index) of flatUnwrap($slots.default(), ['ul'])"
      :key="index"
      class="flex items-center space-x-2"
    >
      <AtomsIcon :name="icon" class="h-6 w-6 flex-shrink-0 text-emerald-500" />
      <span><Markdown :use="() => item" unwrap="li" /></span>
    </li>
  </ul>
</template>

<script setup lang="ts">
  defineProps({
    icon: {
      type: String,
      default: 'heroicons-outline:badge-check',
    },
  });
  // Utils from Nuxt Content
  const { flatUnwrap } = useUnwrap();
</script>
