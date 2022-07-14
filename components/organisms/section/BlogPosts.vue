<template>
  <div
    class="mx-auto grid max-w-lg grid-cols-1 items-stretch gap-10 lg:max-w-none lg:grid-cols-3"
  >
    <MoleculesCardBlog v-for="post in posts" :key="post.title" v-bind="post" />
  </div>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      posts: {
        author?: {
          name: string;
          username: string;
          avatar: string;
        };
        date: Date | number;
        description: string;
        id: string | number;
        image: string;
        readingTime: string | number;
        slug: string;
        tags: string[];
        title: string;
        url: string;
      }[];
      loading?: boolean;
      error?: string | Error | boolean;
    }>(),
    {
      loading: false,
      error: false,
    },
  );
</script>
