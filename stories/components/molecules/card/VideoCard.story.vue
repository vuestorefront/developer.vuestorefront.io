<template>
  <Story
    title="Molecules/Card/Video"
    :init-state="initState"
    :layout="{ type: 'grid', width: 300 }"
  >
    <template #default="{ state }">
      <VideoCard
        :title="state.title"
        :image="state.image"
        :link="state.link"
        :author="state.author"
        :date="state.date"
      />
    </template>
    <template #controls="{ state }">
      <HstText v-model="state.title" title="Title" />
      <HstText v-model="state.image" title="Image" />
      <HstText v-model="state.link" title="Link" />
      <HstText v-model="state.date" title="Post Date" />
      <HstText v-model="state.author.name" title="Author Name" />
      <HstText v-model="state.author.link" title="Author Link" />
      <HstText v-model="state.author.avatar" title="Author Avatar" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import VideoCard from '~/components/molecules/card/VideoCard.vue';

  function initState() {
    return {
      title: 'Egestas risus scelerisque nisl arcu eget sed',
      image: 'https://picsum.photos/600/600/?blur',
      link: '#',
      date: Date.now(),
      author: {
        name: 'Dis curabitur',
        link: '#',
        avatar: 'https://i.pravatar.cc/300',
      },
    };
  }
</script>

<docs lang="md">
# Video Card

Card for displaying a resumed version of a video

```typescript
type Props = {
  author: {
    name: string;
    link: string;
    avatar: string;
  };
  date: Date | number;
  description: string;
  image: string;
  link: string;
  title: string;
};
```
</docs>
