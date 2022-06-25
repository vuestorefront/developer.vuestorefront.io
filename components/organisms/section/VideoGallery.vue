<template>
  <div class="max-w-lg mx-auto grid gap-10 lg:grid-cols-4 lg:max-w-none">
    <VideoCard v-for="post in posts" :key="post.title" v-bind="post" />
  </div>
</template>

<script setup lang="ts">
  import VideoCard from '~/components/molecules/card/VideoCard.vue';

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
