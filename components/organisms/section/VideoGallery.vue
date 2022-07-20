<template>
  <div class="mx-auto grid max-w-lg gap-10 lg:max-w-none lg:grid-cols-4">
    <MoleculesCardVideo v-for="post in posts" :key="post.title" v-bind="post" />
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    posts: {
      author?: {
        name?: string;
        link?: string;
        avatar?: string;
      };
      date: Date | number;
      description: string;
      image: string;
      link: string;
      title: string;
    }[];
  }>();
</script>
