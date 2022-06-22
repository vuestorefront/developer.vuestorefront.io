<template>
  <Story title="Nuxt Content/Banner/Success" :init-state="initState">
    <template #default="{ state }">
      <Success :message="state.message" :title="state.title" />
    </template>
    <template #controls="{ state }">
      <HstText v-model="state.title" title="Title" />
      <HstText v-model="state.message" title="Message" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import Success from '~/components/content/Success.vue';

  function initState() {
    return {
      message: 'This is a colored banner default message',
      title: 'Title',
    };
  }
</script>

<docs lang="md">
# Success MD Block

[Nuxt Content](https://content.nuxtjs.org/) MD Success Block

```typescript
type Props = {
  icon?: string;
  title?: string;
  message?: string;
};
```
</docs>
