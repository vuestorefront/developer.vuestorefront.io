<template>
  <Story title="Atoms/Thumb/Video" :init-state="initState">
    <template #default="{ state }">
      <AtomsVideoThumb class="w-[300px]" :image="state.image" />
    </template>
    <template #controls="{ state }">
      <HstText v-model="state.image" title="Image" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  function initState() {
    return {
      image: 'https://picsum.photos/600/300/?blur',
    };
  }
</script>

<docs lang="md">
# Video Thumb

Video thumb component

```typescript
type Props = {
  image: string;
};
```
</docs>
