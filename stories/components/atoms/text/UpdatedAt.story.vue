<template>
  <Story title="Atoms/Text/Updated At" :init-state="initState">
    <template #default="{ state }">
      <AtomsTextUpdatedAt :date="state.date" />
    </template>
    <template #controls="{ state }">
      <HstNumber v-model="state.date" title="Date" />
    </template>
  </Story>
</template>

<script setup lang="ts">
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
