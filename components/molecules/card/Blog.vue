<template>
  <div class="blog-card">
    <slot name="image">
      <NuxtLink :to="blogLink" target="_blank" no-rel>
        <img class="object-fit" :src="image" :alt="title" />
      </NuxtLink>
    </slot>
    <NuxtLink :to="blogLink" target="_blank" no-rel>
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
          <div class="blog-card-reading-time">
            {{
              t('components.molecules.card.blog.readingTime', {
                time: readingTime,
              })
            }}
          </div>
        </slot>
      </div>
    </NuxtLink>
    <slot name="author">
      <NuxtLink
        :to="authorLink"
        target="_blank"
        no-rel
        class="blog-card-author"
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
          <p class="blog-card-author--name">
            <span class="text-gray-500">
              {{ t('components.molecules.card.blog.by') }}
            </span>
            {{ author.name }}
          </p>
          <div class="blog-card-author--date">
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
  import { formatDate } from '~/utils/date';
  import { useI18n } from 'vue-i18n';

  const props = defineProps<{
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
  }>();

  const { t } = useI18n();

  const blogLink = computed(() => props.url);

  const authorLink = computed(() => `https://dev.to/${props.author?.username}`);

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
