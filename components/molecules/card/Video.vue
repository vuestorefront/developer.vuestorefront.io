<template>
  <NuxtLink
    class="flex flex-col overflow-hidden rounded-3xl border border-gray-100 hover:shadow-xl"
    :to="{ path: link }"
  >
    <slot name="image">
      <AtomsVideoThumb :video="video" :image="poster" />
    </slot>
    <div class="flex h-max flex-1 flex-col justify-between bg-white p-2 px-4">
      <slot name="title">
        <p class="line-clamp-2 text-xl font-bold text-gray-900">
          {{ title }}
        </p>
      </slot>
      <slot name="author">
        <div class="mt-6 flex items-center">
          <div>
            <p class="text-base text-gray-900">
              {{ author.name }}
            </p>
            <div v-if="date" class="flex space-x-1 text-sm text-gray-500">
              <time>
                {{ d(new Date(props.date || ''), 'medium') }}
              </time>
            </div>
          </div>
        </div>
      </slot>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const props = withDefaults(
    defineProps<{
      author: {
        name: string;
        avatar: string;
      };
      date: Date | number | string;
      video?: string;
      poster?: string;
      link: string;
      title: string;
    }>(),
    {
      video: '',
      poster: '',
    },
  );

  const { d } = useI18n();
</script>
