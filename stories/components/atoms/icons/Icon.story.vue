<template>
  <Story title="Atoms/Icons" :layout="{ type: 'grid', width: 200 }">
    <Variant :init-state="initState" title="default">
      <template #default="{ state }">
        <Suspense>
          <Icon :name="state.name" />
        </Suspense>
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.name" title="Icon" />
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import Icon from '~/components/atoms/icon/Icon.vue';

  function initState() {
    return {
      name: 'heroicons-outline:exclamation',
    };
  }
</script>

<docs lang="md">
# Icon

Component for icon with [Iconify](https://iconify.design/) module.

```typescript
type Props = {
  name: string;
};
```
</docs>
