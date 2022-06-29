<template>
  <Story
    title="Molecules/Navigation/Pagination"
    :init-state="initState"
    :layout="{ type: 'grid', width: 800 }"
  >
    <template #default="{ state }">
      <MoleculesPagination
        :total="state.total"
        :number-of-elements="state.numberOfElements"
        :pages-to-display="state.pagesToDisplay"
        :current-page="state.currentPage"
      />
    </template>
    <template #controls="{ state }">
      <HstNumber v-model="state.total" title="Total Count" />
      <HstNumber v-model="state.numberOfElements" title="Elements on a Page" />
      <HstNumber v-model="state.pagesToDisplay" title="Pages to Display" />
      <HstText v-model="state.currentPage" title="Current Page" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import Pagination from '~/components/molecules/pagination/Pagination.vue';

  function initState() {
    return {
      total: 120,
      numberOfElements: 12,
      pagesToDisplay: 6,
      currentPage: 6,
    };
  }
</script>

<docs lang="md">
# Pagination Navigation

Page pagination component

```typescript
type Props = {
  total: number;
  numberOfElements?: number;
  pagesToDisplay?: number;
  currentPage?: number;
  pageLinkRule?: (pageNumber: number) => string;
};
```
</docs>
