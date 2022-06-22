<template>
  <Story title="Section/Video Gallery" :init-state="initState">
    <template #default="{ state }">
      <VideoGallery :posts="state.posts" />
    </template>
    <template #controls="{ state }">
      <HstTextarea v-model="state.posts" title="Posts" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import VideoGallery from '~/components/section/VideoGallery.vue';

  function initState() {
    return {
      posts: [
        {
          title: 'Boost your conversion rate',
          link: '#',
          date: Date.now(),
          image: 'https://picsum.photos/600/600/?blur=10',
          author: {
            name: 'Roel Aufderehar',
            link: '#',
            avatar: 'https://i.pravatar.cc/300',
          },
        },
        {
          title: 'How to use search engine optimization to drive sales',
          link: '#',
          date: Date.now(),
          image: 'https://picsum.photos/600/550/?blur=5',
          readingTime: '4 min',
          author: {
            name: 'Brenna Goyette',
            link: '#',
            avatar: 'https://i.pravatar.cc/320',
          },
        },
        {
          title: 'Improve your customer experience',
          link: '#',
          date: Date.now(),
          image: 'https://picsum.photos/600/500/?blur=5',
          readingTime: '11 min',
          author: {
            name: 'Daniela Metz',
            link: '#',
            avatar: 'https://i.pravatar.cc/310',
          },
        },
        {
          title: 'Dictumst varius efficitur nisl mattis',
          link: '#',
          category: { name: 'Case Study', link: '#' },
          date: Date.now(),
          image: 'https://picsum.photos/600/510/?blur=5',
          readingTime: '11 min',
          author: {
            name: 'Maximus facilisis',
            link: '#',
            avatar: 'https://i.pravatar.cc/311',
          },
        },
      ],
    };
  }
</script>

<docs lang="md">
# Video Gallery

Section for displaying videos

```typescript
type Props = {
  posts: {
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
  }[];
};
```
</docs>
