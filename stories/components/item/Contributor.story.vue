<template>
  <Story
    title="Item/Contributor"
    :init-state="initState"
    :layout="{ type: 'grid', width: 200 }"
  >
    <template #default="{ state }">
      <Contributor
        :name="state.name"
        :avatar="state.avatar"
        :url="state.url"
        :username="state.username"
      />
    </template>
    <template #controls="{ state }">
      <HstText v-model="state.name" title="Icon" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import Contributor from '~/components/item/ContributorItem.vue';

  function initState() {
    return {
      name: 'Heitor Ramon',
      avatar: 'https://avatars.githubusercontent.com/u/1626923?v=4',
      username: 'bloodf',
      url: 'https://github.com/bloodf/',
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
