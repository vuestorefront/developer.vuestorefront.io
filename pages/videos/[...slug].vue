<template>
  <AtomsLayoutContainer ref="container" class="space-y-2">
    <h1 class="text-4xl font-bold">
      <AtomsTextFirstColoredWord :text="contentQuery.title" />
    </h1>
    <div class="flex w-full items-center justify-center">
      <AtomsVideoPlayer
        :src="contentQuery.video"
        :width="playerSizes.width"
        :height="playerSizes.height"
      />
    </div>
    <ContentDoc>
      <template #empty />
    </ContentDoc>
    <div class="flex flex-col pt-2 pb-2">
      <div class="flex flex-row space-x-4">
        <span
          v-for="tag in contentQuery.tags"
          :key="tag"
          class="text-primary-700"
        >
          #{{ tag }}
        </span>
      </div>
      <div class="text-sm text-gray-500">
        <time>
          {{ d(new Date(contentQuery.publishedAt || ''), 'medium') }}
        </time>
      </div>
    </div>

    <p>{{ contentQuery.description }}</p>
    <NuxtLink
      :to="{
        name: 'videos',
        query: { author: contentQuery.author },
      }"
      class="cursor-pointer"
    >
      <div class="mt-6 flex items-center">
        <div v-if="contentQuery.avatar" class="mr-3 flex-shrink-0">
          <AtomsAvatarDiamondShape
            :img="contentQuery.avatar"
            width="3rem"
            height="3rem"
          />
        </div>
        <div>
          <p class="text-base text-gray-900">
            {{ contentQuery.author }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </AtomsLayoutContainer>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  definePageMeta({
    layout: 'content',
  });

  const { path, params } = useRoute();
  const container = ref(null);
  const { width, height } = useElementSize(container);

  const playerSizes = computed(() => ({
    height: Math.ceil((width.value * 9) / 16),
    width: width.value,
  }));

  const contentQuery = await queryContent(path).findOne();

  const { d } = useI18n();
</script>
