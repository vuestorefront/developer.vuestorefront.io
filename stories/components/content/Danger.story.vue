<template>
  <Story title="Nuxt Content/Component/Banner/Danger" :init-state="initState">
    <template #default="{ state }">
      <Danger :message="state.message" :title="state.title" />
    </template>
    <template #controls="{ state }">
      <HstText v-model="state.title" title="Title" />
      <HstText v-model="state.message" title="Message" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import Danger from '~/components/content/Danger.vue';

  function initState() {
    return {
      message: 'This is a colored banner default message',
      title: 'Title',
    };
  }
</script>

<docs lang="md">
# Danger MD Block

[Nuxt Content](https://content.nuxtjs.org/) MD Danger Block

```typescript
type Props = {
  icon?: string;
  title?: string;
  message?: string;
};
```
</docs>
