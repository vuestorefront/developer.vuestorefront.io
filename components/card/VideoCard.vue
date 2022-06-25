<template>
  <div class="flex flex-col overflow-hidden hover:shadow-base rounded-3xl">
    <slot name="image" v-bind="{ image, link, title }">
      <NuxtLink class="flex-shrink-0" :to="link">
        <VideoThumb class="h-48 w-full object-cover" :image="image" />
      </NuxtLink>
    </slot>
    <div class="flex-1 bg-white p-2 flex flex-col justify-between">
      <div class="flex-1">
        <slot name="title" v-bind="{ link, title }">
          <NuxtLink class="block mt-1" :to="link">
            <p class="text-xl font-semibold text-gray-900">
              {{ title }}
            </p>
          </NuxtLink>
        </slot>
        <slot name="author" :author="author">
          <NuxtLink :to="author.link" class="cursor-pointer">
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <span class="sr-only">{{ author.name }}</span>
                <DiamondShape :img="author.avatar" width="3rem" height="3rem" />
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
            </div>
          </NuxtLink>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import DiamondShape from '~/components/atoms/avatar/DiamondShape.vue';
  import VideoThumb from '~/components/atoms/thumb/VideoThumb.vue';

  const props = defineProps<{
    author: {
      name: string;
      avatar: string;
    };
    date: Date | number;
    image: string;
    link: string;
    title: string;
  }>();
  const { formatDate } = useDateTimeIntl();

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
