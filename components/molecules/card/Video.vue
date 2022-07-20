<template>
  <div
    class="flex flex-col overflow-hidden rounded-3xl border border-gray-100 hover:shadow-xl"
  >
    <slot name="image">
      <NuxtLink class="flex-shrink-0" :to="link">
        <AtomsThumbVideo class="w-full object-cover" :image="poster" />
      </NuxtLink>
    </slot>
    <div class="flex flex-1 flex-col justify-between bg-white p-2">
      <div class="flex-1">
        <slot name="title" v-bind="{ link, title }">
          <NuxtLink class="mt-1 block" :to="link">
            <p class="text-xl font-bold text-gray-900">
              {{ title }}
            </p>
          </NuxtLink>
        </slot>
        <slot name="author" :author="author">
          <NuxtLink :to="author.link" class="cursor-pointer">
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
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time :datetime="textDate">
                    {{ textDate }}
                  </time>
                </div>
              </div>
            </div>
          </NuxtLink>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { formatDate } from '~/utils/date';

  const props = defineProps<{
    author: {
      name: string;
      avatar: string;
    };
    date: Date | number | string;
    video: string;
    link: string;
    title: string;
  }>();

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

  const poster = computed(() => {
    const match = props.video.match(/\?v=([^&]*)/);

    return `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`;
  });
</script>
