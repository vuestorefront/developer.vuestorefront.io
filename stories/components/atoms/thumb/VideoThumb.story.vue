<template>
  <Story title="Atoms/Thumb/Video" :init-state="initState">
    <template #default="{ state }">
      <VideoThumb class="h-screen" :image="state.image" />
    </template>
    <template #controls="{ state }">
      <HstText v-model="state.image" title="Image" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import VideoThumb from '~/components/atoms/thumb/VideoThumb.vue';

  function initState() {
    return {
      image: 'https://picsum.photos/600/600/?blur',
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
