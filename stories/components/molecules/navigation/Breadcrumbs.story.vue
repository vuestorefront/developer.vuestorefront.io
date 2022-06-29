<template>
  <Story
    title="Molecules/Navigation/Breadcrumbs"
    :init-state="initState"
    :layout="{ type: 'grid', width: 500 }"
  >
    <template #default="{ state }">
      <MoleculesBreadcrumb :bread-crumbs="state.breadCrumbs" />
    </template>
    <template #controls="{ state }">
      <HstTextarea v-model="state.breadCrumbs" title="BreadCrumbs" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  function initState() {
    return {
      breadCrumbs: [
        {
          title: 'Category',
          link: '#',
        },
        {
          title: 'Page',
          link: '#',
        },
      ],
    };
  }
</script>

<docs lang="md">
# Breacrumbs Navigation

Page breadcrumbs navigation component

```typescript
type Props = {
  breadCrumbs: {
    title: string;
    link: string;
  }[];
};
```
</docs>
