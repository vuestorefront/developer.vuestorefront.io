<template>
  <Story title="Text/Updated At" :layout="{ type: 'single', iframe: true }">
    <Variant :init-state="initState">
      <template #default="{ state }">
        <Suspense>
          <UpdatedAt :date="state.date" />
        </Suspense>
      </template>
      <template #controls="{ state }">
        <HstNumber v-model="state.date" title="Date" />
      </template>
    </Variant>
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
