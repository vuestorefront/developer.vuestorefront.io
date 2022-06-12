<template>
  <Story title="Atoms/Icon">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <Suspense>
          <Icon :name="state.name" />
        </Suspense>
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.name" title="Icon" />
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import Icon from '../../../components/atoms/Icon.vue';

  function initState() {
    return {
      name: 'heroicons-outline:exclamation',
    };
  }
</script>
