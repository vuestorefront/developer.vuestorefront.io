<template>
  <Story
    title="Molecules/Card/Blog"
    :init-state="initState"
    :layout="{ type: 'grid', width: 300 }"
  >
    <template #default="{ state }">
      <BlogCard
        :title="state.title"
        :description="state.description"
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
      <HstTextarea v-model="state.description" title="Description" />
      <HstText v-model="state.author.name" title="Author Name" />
      <HstText v-model="state.author.link" title="Author Link" />
      <HstText v-model="state.author.avatar" title="Author Avatar" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import BlogCard from '~/components/molecules/card/BlogCard.vue';

  function initState() {
    return {
      title: 'Egestas risus scelerisque nisl arcu eget sed',
      image: 'https://picsum.photos/600/600/?blur',
      description:
        'Suspendisse orci mus ac placerat pulvinar commodo fames habitant mi non consectetur nisi ex rutrum varius convallis gravida cubilia fermentum blandit quis morbi ornare feugiat magnis ligula porta suscipit libero',
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
# Blog Card

Card for displaying a resumed version of a blog post

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
