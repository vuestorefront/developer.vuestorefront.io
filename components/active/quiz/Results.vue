<template>
  <h1 class="my-4 text-center text-4xl">
    <AtomsTextFirstColoredWord
      :text="t('page.quiz.result.header', { test: response.quiz.title })"
    />
  </h1>

  <!-- Diploma -->
  <div class="mb-4 flex w-full justify-start overflow-y-auto md:justify-center">
    <div class="w-full min-w-[768px] md:w-3/4">
      <!-- Use "object" instead of "img" to properly load fonts -->
      <object
        type="image/svg+xml"
        :data="diplomaSvg"
        class="A4-aspect-ratio my-4 w-full shadow"
      />
    </div>
  </div>

  <!-- Share and badge buttons -->
  <div class="container mx-auto flex flex-col items-center justify-center">
    <client-only v-if="response.isSubmitter">
      <div class="mt-4 flex w-full flex-col justify-center lg:flex-row">
        <!-- Share buttons -->
        <div class="flex w-full flex-col items-center lg:w-1/3">
          <p class="mb-4 text-gray-600">
            {{ t('page.quiz.result.shareTitle') }}
          </p>

          <div class="flex">
            <input
              type="text"
              :value="shareUrl"
              class="h-10 w-80 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              disabled
            />
            <button
              class="block flex h-10 w-14 items-center justify-center rounded-r-lg border border-gray-300 bg-gray-50 hover:bg-gray-100"
              @click="copyShareurl"
            >
              <span v-if="copiedIndicator" class="text-xs">{{
                t('page.quiz.result.copied')
              }}</span>
              <AtomsIcon v-else name="carbon:copy" class="text-gray-800" />
            </button>
          </div>

          <div class="mt-4 flex">
            <a :href="twitterShareLink" target="_blank">
              <AtomsIcon
                name="carbon:logo-twitter"
                class="text-[#1DA1F2]"
                width="3rem"
                height="3rem"
              />
            </a>

            <a :href="linkedinShareLink" target="_blank">
              <AtomsIcon
                name="carbon:logo-linkedin"
                class="text-[#0072B1]"
                width="3rem"
                height="3rem"
              />
            </a>

            <a :href="facebookShareLink" target="_blank">
              <AtomsIcon
                name="carbon:logo-facebook"
                class="text-[#4267B2]"
                width="3rem"
                height="3rem"
              />
            </a>
          </div>
        </div>

        <!-- Download button -->
        <div class="mt-8 flex w-full flex-col items-center lg:mt-0 lg:w-1/3">
          <p class="mb-4 text-gray-600">
            {{ t('page.quiz.result.downloadTitle') }}
          </p>

          <AtomsButton
            download
            :href="diplomaPdf"
            target="_blank"
            color="primary"
          >
            {{ t('page.quiz.result.download') }}
          </AtomsButton>
        </div>

        <!-- Badge buttons -->
        <div
          v-if="response.isSubmitter"
          class="mt-8 flex w-full flex-col items-center lg:mt-0 lg:w-1/3"
        >
          <p class="mb-4 text-gray-600">
            {{ t('page.quiz.result.loginTitle') }}
          </p>

          <AtomsButton
            v-if="response.isBadgeClaimed"
            color="info"
            class="py-2 px-6"
          >
            <span class="pr-2 normal-case">
              {{ t('page.quiz.result.badgeClaimed') }}
            </span>

            <AtomsIcon
              name="carbon:checkmark"
              class="text-white"
              width="2rem"
              height="2rem"
            />
          </AtomsButton>
          <AtomsButton
            v-else-if="userSession"
            color="gray"
            class="bg-[#5865F2] py-2 px-6 text-white"
            @click="$emit('claimBadge')"
          >
            <span class="pr-2 normal-case">
              {{ t('page.quiz.result.claimBadge') }}
            </span>

            <AtomsIcon
              name="carbon:logo-discord"
              class="text-white"
              width="2rem"
              height="2rem"
            />
          </AtomsButton>
          <AtomsButton
            v-else
            color="gray"
            class="bg-[#5865F2] py-2 px-6 text-white"
            @click="$emit('loginWithDiscord')"
          >
            <span class="pr-2 normal-case">
              {{ t('page.quiz.result.loginButton') }}
            </span>

            <AtomsIcon
              name="carbon:logo-discord"
              class="text-white"
              width="2rem"
              height="2rem"
            />
          </AtomsButton>
        </div>
      </div>
    </client-only>

    <div v-else class="mt-4 flex flex-col items-center">
      <p class="mb-4 text-lg text-gray-600">
        {{ t('page.quiz.result.cta', { test: response.quiz.title }) }}
      </p>

      <AtomsButton :href="quizUrl" color="primary">
        {{ t('page.quiz.result.takeTest') }}
      </AtomsButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import type { ApiQuizResponse } from '~/types/api/quiz';
  import type { Session } from '@supabase/supabase-js';

  const props = defineProps<{
    response: ApiQuizResponse;
    userSession: Session | null;
  }>();

  defineEmits<{
    (e: 'claimBadge'): void;
    (e: 'loginWithDiscord'): void;
  }>();

  const { t } = useI18n();

  const shareUrl = ref('');
  const copiedIndicator = ref(false);

  const config = useRuntimeConfig();

  onMounted(() => {
    shareUrl.value = window.location.href;
  });

  const quizUrl = computed(() => {
    return `/quiz/questions/${props.response.quiz.id}`;
  });

  const diplomaSvg = computed(() => {
    const url = new URL(
      `/storage/v1/object/public/quiz-diplomas/${props.response.id}.svg`,
      config.public.supabase.url,
    );

    return url.href;
  });

  const diplomaPdf = computed(() => {
    const url = new URL(
      `/storage/v1/object/public/quiz-diplomas/${props.response.id}.pdf`,
      config.public.supabase.url,
    );

    return url.href;
  });

  const twitterShareLink = computed(() => {
    const url = new URL('/intent/tweet', 'https://twitter.com/');
    url.searchParams.set(
      'text',
      `${t('page.quiz.result.head.ogtitle')} @VSFdevelopers`,
    );
    url.searchParams.set('url', shareUrl.value);
    return url.href;
  });

  const linkedinShareLink = computed(() => {
    // Works only on publicly available URLs (not on localhost)

    const url = new URL('/sharing/share-offsite/', 'https://www.linkedin.com/');
    url.searchParams.set('url', shareUrl.value);
    return url.href;
  });

  const facebookShareLink = computed(() => {
    const url = new URL('/sharer.php', 'https://www.facebook.com/');
    url.searchParams.set('u', shareUrl.value);
    return url.href;
  });

  async function copyShareurl() {
    await navigator.clipboard.writeText(shareUrl.value);
    copiedIndicator.value = true;

    setTimeout(() => {
      copiedIndicator.value = false;
    }, 2000);
  }
</script>

<style scoped>
  .A4-aspect-ratio {
    aspect-ratio: 1.4142/1;
  }
</style>
