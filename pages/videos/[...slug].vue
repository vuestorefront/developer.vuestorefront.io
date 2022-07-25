<template>
  <AtomsLayoutContent>
    <AtomsLayoutContainer>
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
        <template #empty>
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
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time>
                    {{ d(new Date(props.date || ''), 'medium') }}
                  </time>
                </div>
              </div>
            </div>
          </NuxtLink>
        </template>
      </ContentDoc>
    </AtomsLayoutContainer>
  </AtomsLayoutContent>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  definePageMeta({
    layout: 'video',
  });
  const { path, params } = useRoute();

  const playerSizes = ref({
    height: 560,
    width: 1000,
  });

  const contentQuery = await queryContent(path).findOne();

  const { d } = useI18n();
</script>
