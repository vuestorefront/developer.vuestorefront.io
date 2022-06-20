<template>
  <Story
    title="Nuxt Content/Component/Banner/Warning"
    :layout="{ type: 'single', iframe: true }"
    :init-state="initState"
  >
    <template #default="{ state }">
      <Warning :message="state.message" :title="state.title" />
    </template>
    <template #controls="{ state }">
      <HstText v-model="state.title" title="Title" />
      <HstText v-model="state.message" title="Message" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import Warning from '~/components/content/Warning';

  function initState() {
    return {
      message: 'This is a colored banner default message',
      title: 'Title',
    };
  }
</script>

<docs lang="md">
# Warning MD Block

[Nuxt Content](https://content.nuxtjs.org/) MD Warning Block

```typescript
type Props = {
  icon?: string;
  title?: string;
  message?: string;
};
```
</docs>
