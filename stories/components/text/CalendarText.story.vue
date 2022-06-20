<template>
  <Story title="Text/Calendar" :layout="{ type: 'single', iframe: true }">
    <Variant :init-state="initState">
      <template #default="{ state }">
        <Suspense>
          <CalendarText :date="state.date" />
        </Suspense>
      </template>
      <template #controls="{ state }">
        <HstNumber v-model="state.date" title="Date" />
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import CalendarText from '../../../components/text/CalendarText.vue';

  function initState() {
    return {
      date: Date.now(),
    };
  }
</script>

<docs lang="md">
# Calendar Text

Component for displaying a text with a calendar icon in the end.

```typescript
type Props = {
  date?: Date | number;
};
```
</docs>
