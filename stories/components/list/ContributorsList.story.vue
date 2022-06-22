<template>
  <Story
    title="List/Contributors"
    :init-state="initState"
    :layout="{ type: 'grid', width: 500 }"
  >
    <template #default="{ state }">
      <Contributors :contributors="state.contributors" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import Contributors from '~/components/list/ContributorsList.vue';

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
