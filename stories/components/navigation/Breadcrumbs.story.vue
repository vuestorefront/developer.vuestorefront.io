<template>
  <Story
    title="Navigation/Breadcrumb"
    :init-state="initState"
    :layout="{ type: 'grid', width: 500 }"
  >
    <template #default="{ state }">
      <Breadcrumb :bread-crumbs="state.breadCrumbs" />
    </template>
    <template #controls="{ state }">
      <HstTextarea v-model="state.breadCrumbs" title="Icon" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import Breadcrumb from '~/components/navigation/Breadcrumb.vue';

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
