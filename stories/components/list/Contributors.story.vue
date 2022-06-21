<template>
  <Story title="List/Contributors" :layout="{ type: 'single', iframe: true }">
    <Variant :init-state="initState">
      <template #default="{ state }">
        <Suspense>
          <Contributors :contributors="state.contributors" />
        </Suspense>
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import Contributors from '~/components/list/Contributors.vue';

  function initState() {
    return {
      contributors: [
        {
          name: 'Heitor Ramon',
          avatar: 'https://avatars.githubusercontent.com/u/1626923?v=4',
          username: 'bloodf',
          url: 'https://github.com/bloodf/',
        },
        {
          name: 'Heitor Ramon',
          avatar: 'https://avatars.githubusercontent.com/u/1626923?v=4',
          username: 'bloodf',
          url: 'https://github.com/bloodf/',
        },
      ],
    };
  }
</script>

<docs lang="md">
# Contributor Item

Contributor list item for be used with [Contributors]() list component

```typescript
type Props = {
  name?: string;
  avatar?: string;
  url?: string;
};
```
</docs>
