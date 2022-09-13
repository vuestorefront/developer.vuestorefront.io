<template>
  <h1 class="my-12 text-center text-4xl">
    <AtomsTextFirstColoredWord
      :text="t('page.quiz.result.header', { test: response.quiz.title })"
    />
  </h1>

  <div class="mb-4 flex w-full justify-start overflow-y-auto md:justify-center">
    <div class="w-full min-w-[768px] md:w-3/4">
      <ActiveQuizDiploma :response="response" />
    </div>
  </div>

  <div class="container mx-auto flex flex-col items-center justify-center">
    <client-only v-if="response.isSubmitter">
      <div class="mt-16 flex w-full flex-col justify-center md:flex-row">
        <div class="flex w-full flex-col items-center md:w-1/2">
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
            <a :href="twitterShareLink">
              <AtomsIcon
                name="carbon:logo-twitter"
                class="text-[#1DA1F2]"
                width="3rem"
                height="3rem"
              />
            </a>

            <a :href="linkedinShareLink">
              <AtomsIcon
                name="carbon:logo-linkedin"
                class="text-[#0072B1]"
                width="3rem"
                height="3rem"
              />
            </a>

            <a :href="facebookShareLink">
              <AtomsIcon
                name="carbon:logo-facebook"
                class="text-[#4267B2]"
                width="3rem"
                height="3rem"
              />
            </a>
          </div>
        </div>

        <div
          v-if="showBadgeButtons"
          class="mt-8 flex w-full flex-col items-center md:mt-0 md:w-1/2"
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

  onMounted(() => {
    shareUrl.value = window.location.href;
  });

  const showBadgeButtons = computed(
    () => props.response.isSubmitter && props.response.passed,
  );

  const twitterShareLink = computed(() => {
    return `https://twitter.com/intent/tweet?url=${shareUrl.value}`;
  });

  const linkedinShareLink = computed(() => {
    // Works only on publicly available URLs (not on localhost)
    return `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl.value}`;
  });

  const facebookShareLink = computed(() => {
    return `https://www.facebook.com/sharer.php?u=${shareUrl.value}`;
  });

  async function copyShareurl() {
    await navigator.clipboard.writeText(shareUrl.value);
    copiedIndicator.value = true;

    setTimeout(() => {
      copiedIndicator.value = false;
    }, 2000);
  }
</script>