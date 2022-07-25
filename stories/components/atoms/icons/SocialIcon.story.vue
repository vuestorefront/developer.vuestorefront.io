<template>
  <Story
    title="Atoms/Icons/Social Icon"
    :init-state="initState"
    :layout="{ type: 'grid', width: 200 }"
  >
    <template #default="{ state }">
      <AtomsIconSocial :name="state.name" />
    </template>
    <template #controls="{ state }">
      <HstSelect
        v-model="state.name"
        title="Name"
        :options="{
          twitter: 'Twitter',
          github: 'GitHub',
          youtube: 'YouTube',
          'dev.to': 'Dev.To',
          facebook: 'Facebook',
          linkedin: 'LinkedIn',
        }"
      />
    </template>
  </Story>
</template>

<script setup lang="ts">
  function initState() {
    return {
      name: 'twitter',
    };
  }
</script>

<docs lang="md">
# Social Icon

Showcase a specific social icon, based on the name prop.

```typescript
type Props = {
  name: string;
};
```
</docs>
