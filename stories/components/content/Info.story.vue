<template>
  <Story
    title="Nuxt Content/Component/Banner/Information"
    :layout="{ type: 'single', iframe: true }"
    :init-state="initState"
  >
    <template #default="{ state }">
      <Info :message="state.message" :title="state.title" />
    </template>
    <template #controls="{ state }">
      <HstText v-model="state.title" title="Title" />
      <HstText v-model="state.message" title="Message" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import Info from '~/components/content/Info';

  function initState() {
    return {
      message: 'This is a colored banner default message',
      title: 'Title',
    };
  }
</script>

<docs lang="md">
# Information MD Block

[Nuxt Content](https://content.nuxtjs.org/) MD Information Block

```typescript
type Props = {
  icon?: string;
  title?: string;
  message?: string;
};
```
</docs>
