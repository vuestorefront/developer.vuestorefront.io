<template>
  <div class="max-w-lg mx-auto grid gap-10 lg:grid-cols-3 lg:max-w-none">
    <BlogCard v-for="post in posts" :key="post.title" v-bind="post" />
  </div>
</template>

<script setup lang="ts">
  import BlogCard from '~/components/molecules/card/BlogCard.vue';

  defineProps<{
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
  }>();
</script>
