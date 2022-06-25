<template>
  <div class="flex flex-col rounded-3xl shadow-lg overflow-hidden">
    <slot name="image" v-bind="{ image, link, title }">
      <NuxtLink class="flex-shrink-0" :to="link">
        <img class="h-48 w-full object-cover" :src="image" :alt="title" />
      </NuxtLink>
    </slot>
    <div class="flex-1 bg-white p-2 flex flex-col justify-between">
      <div class="flex-1">
        <slot name="title" v-bind="{ link, title }">
          <NuxtLink class="block" :to="link">
            <p class="text-xl font-semibold text-gray-900">
              {{ title }}
            </p>
          </NuxtLink>
          <div class="flex space-x-1 text-sm text-gray-500">
            <time :datetime="textDate">
              {{ textDate }}
            </time>
          </div>
        </slot>
        <slot name="description" v-bind="{ description }">
          <p class="mt-3 text-base text-gray-500">
            {{ description }}
          </p>
        </slot>
        <slot name="read-more" v-bind="{ link }">
          <NuxtLink
            class="cursor-pointer text-primary bg-white shadow-base hover:shadow-lg focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center uppercase my-5"
            :to="link"
          >
            Read more
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

  const props = defineProps<{
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
