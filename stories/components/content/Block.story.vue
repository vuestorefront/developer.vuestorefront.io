<template>
  <Story
    title="Nuxt Content/Banner/Block"
    :init-state="initState"
    :layout="{ type: 'grid', width: 300 }"
  >
    <template #default="{ state }">
      <Block :message="state.message" :title="state.title" />
    </template>
    <template #controls="{ state }">
      <HstText v-model="state.title" title="Title" />
      <HstText v-model="state.message" title="Message" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import Block from '~/components/content/Block.vue';

  function initState() {
    return {
      message: 'This is a colored banner default message',
      title: 'Title',
    };
  }
</script>

<docs lang="md">
# Default MD Block

[Nuxt Content](https://content.nuxtjs.org/) MD Default Block

```typescript
type Props = {
  icon?: string;
  title?: string;
  message?: string;
};
```
</docs>
