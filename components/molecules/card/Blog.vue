<template>
  <div
    class="flex flex-col rounded-3xl shadow-lg overflow-hidden bg-white justify-between h-fit"
  >
    <slot name="image">
      <NuxtLink :to="blogLink">
        <img class="h-48 object-cover" :src="image" :alt="title" />
      </NuxtLink>
    </slot>
    <div class="flex pt-2 pb-2 px-4 flex flex-col justify-between">
      <slot name="title">
        <NuxtLink :to="blogLink">
          <h3 class="line-clamp-2 text-xl font-semibold text-gray-900 mb-3">
            {{ title }}
          </h3>
        </NuxtLink>
      </slot>
      <slot name="description">
        <p class="mb-2 text-base text-gray-500 line-clamp-5">
          {{ description }}
        </p>
        <div class="flex space-x-1 text-sm text-gray-400 mb-2">
          Reading time: {{ readingTime }} Minutes
        </div>
      </slot>
      <slot name="read-more">
        <NuxtLink class="self-end" :to="blogLink">
          <AtomsButtonContent color="transparent" label="Read more..." />
        </NuxtLink>
      </slot>
    </div>
    <slot name="author">
      <NuxtLink
        :to="authorLink"
        target="_blank"
        class="cursor-pointer pt-2 pb-4 px-4 flex items-center justify-self-end"
      >
        <div class="flex-shrink-0">
          <span class="sr-only">{{ author.name }}</span>
          <AtomsAvatarDiamondShape
            :img="author.avatar"
            width="3rem"
            height="3rem"
          />
        </div>
        <div class="ml-3">
          <p class="text-base text-gray-900">
            {{ author.name }}
          </p>
          <div class="flex space-x-1 text-sm text-gray-500">
            <time :datetime="textDate">
              {{ textDate }}
            </time>
          </div>
        </div>
      </NuxtLink>
    </slot>
  </div>
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
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    }),
  );
</script>
