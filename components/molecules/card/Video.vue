<template>
  <NuxtLink
    class="flex flex-col overflow-hidden rounded-3xl border border-gray-100 hover:shadow-xl"
    :to="{ path: link }"
  >
    <slot name="image">
      <AtomsVideoThumb :video="video" :image="poster" />
    </slot>
    <div class="flex flex-1 flex-col justify-between bg-white p-2">
      <div class="flex-1">
        <slot name="title">
          <p class="text-xl font-bold text-gray-900">
            {{ title }}
          </p>
        </slot>
        <slot name="author">
          <div class="mt-6 flex items-center">
            <div v-if="author.avatar" class="mr-3 flex-shrink-0">
              <AtomsAvatarDiamondShape
                :img="author.avatar"
                width="3rem"
                height="3rem"
              />
            </div>
            <div>
              <p class="text-base text-gray-900">
                {{ author.name }}
              </p>
              <div v-if="date" class="flex space-x-1 text-sm text-gray-500">
                <time :datetime="textDate">
                  {{ textDate }}
                </time>
              </div>
            </div>
          </div>
        </slot>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import { formatDate } from '~/utils/date';

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

  const textDate = computed(() =>
    formatDate({
      date: new Date(props.date || '').toUTCString(),
      options: {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    }),
  );
</script>
