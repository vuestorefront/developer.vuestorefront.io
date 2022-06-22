<template>
  <Story
    title="Text/Updated At"
    :init-state="initState"
  >
    <template #default="{ state }">
      <UpdatedAt :date="state.date" />
    </template>
    <template #controls="{ state }">
      <HstNumber v-model="state.date" title="Date" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import UpdatedAt from '~/components/text/UpdatedAt.vue';

  function initState() {
    return {
      date: Date.now(),
    };
  }
</script>

<docs lang="md">
# Updated At

Component for displaying an updated at text with a calendar icon in the end.

```typescript
type Props = {
  date?: Date | number;
};
```
</docs>
