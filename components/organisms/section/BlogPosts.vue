<template>
  <div class="max-w-lg mx-auto grid gap-10 lg:grid-cols-3 lg:max-w-none">
    <MoleculesCardBlog v-for="post in posts" :key="post.title" v-bind="post" />
  </div>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      posts: {
        author?: {
          name?: string;
          avatar?: string;
        };
        date: Date | number;
        description: string;
        id: string | number;
        image: string;
        readingTime: string | number;
        slug: string;
        tags: string[];
        title: string;
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
