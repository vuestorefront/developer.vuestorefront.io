<template>
  <Story>
    <Alert :icon="state.icon">
      <template #controls>
        Icon: <input v-model="state.icon" type="text" />
      </template>
    </Alert>
  </Story>
</template>

<script setup lang="ts">
  const state = reactive({
    icon: 'heroicons-outline:exclamation',
  });
</script>
