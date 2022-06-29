<template>
  <Story title="Organisms/Section/Blog Posts" :init-state="initState">
    <template #default="{ state }">
      <OrganismsSectionBlogPosts :posts="state.posts" />
    </template>

    <template #controls="{ state }">
      <HstTextarea v-model="state.posts" title="Posts" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  function initState() {
    return {
      posts: [
        {
          title: 'Boost your conversion rate',
          link: '#',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
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
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
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
          category: { name: 'Case Study', link: '#' },
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          date: Date.now(),
          image: 'https://picsum.photos/600/500/?blur=5',
          readingTime: '11 min',
          author: {
            name: 'Daniela Metz',
            link: '#',
            avatar: 'https://i.pravatar.cc/310',
          },
        },
      ],
    };
  }
</script>

<docs lang="md">
# Blog Section

Section for displaying blog posts

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
