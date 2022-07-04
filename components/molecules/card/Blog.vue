<template>
  <NuxtLink :to="blogLink" class="blog-card">
    <slot name="image">
      <img class="h-48 object-cover" :src="image" :alt="title" />
    </slot>
    <div class="blog-card-content">
      <slot name="title">
        <h3 class="blog-card-title">
          {{ title }}
        </h3>
      </slot>
      <slot name="description">
        <p class="blog-card-description">
          {{ description }}
        </p>
        <!--        <div class="blog-card-reading-time">
          Reading time: {{ readingTime }} Minutes
        </div> -->
      </slot>
      <!--      <slot name="read-more">
        <NuxtLink class="self-end" :to="blogLink">
          <AtomsButtonContent color="transparent" label="Read more..." />
        </NuxtLink>
      </slot> -->
    </div>
    <slot name="author">
      <NuxtLink :to="authorLink" target="_blank" class="blog-card-author">
        <div class="flex-shrink-0">
          <span class="sr-only">{{ author.name }}</span>
          <AtomsAvatarDiamondShape
            :img="author.avatar"
            width="3rem"
            height="3rem"
          />
        </div>
        <div class="ml-3">
          <p class="blog-card-author--name">
            <span class="text-gray-500">by </span> {{ author.name }}
          </p>
          <div class="blog-card-author--date">
            <time :datetime="textDate">
              {{ textDate }}
            </time>
          </div>
        </div>
      </NuxtLink>
    </slot>
  </NuxtLink>
</template>

<script setup lang="ts">
  const props = defineProps<{
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
  }>();
  const { formatDate } = useDateTimeIntl();

  const blogLink = computed(() => ({
    to: 'blog/article',
    params: {
      slug: props.slug,
    },
  }));

  const authorLink = computed(() => ({
    to: 'blog/articles/by-author',
    params: {
      slug: props.slug,
    },
  }));

  const textDate = computed(() =>
    formatDate({
      date: props.date || '',
      options: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    }),
  );
</script>
