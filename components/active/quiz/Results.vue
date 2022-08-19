<template>
  <h1 class="my-12 text-center text-4xl">
    <AtomsTextFirstColoredWord
      :text="
        t(
          response.isSubmitter
            ? 'page.quiz.result.submitter_message'
            : 'page.quiz.result.message',
          {
            name: response.username,
            score: response.score,
            test: response.quiz.title,
          },
        )
      "
    />
  </h1>

  <div class="container mx-auto flex pt-16">
    <div class="flex w-full flex-col items-center md:w-1/2">
      <p class="mb-4 text-gray-600">{{ t('page.quiz.result.shareTitle') }}</p>

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
        <AtomsButton color="gray" class="p-0">
          <AtomsIcon
            name="carbon:logo-twitter"
            class="text-[#1DA1F2]"
            width="3rem"
            height="3rem"
          />
        </AtomsButton>

        <AtomsButton color="gray" class="p-0">
          <AtomsIcon
            name="carbon:logo-linkedin"
            class="text-[#0072B1]"
            width="3rem"
            height="3rem"
          />
        </AtomsButton>

        <AtomsButton color="gray" class="p-0">
          <AtomsIcon
            name="carbon:logo-facebook"
            class="text-[#4267B2]"
            width="3rem"
            height="3rem"
          />
        </AtomsButton>
      </div>
    </div>

    <div class="flex w-full flex-col items-center md:w-1/2">
      <p class="mb-4 text-gray-600">{{ t('page.quiz.result.loginTitle') }}</p>

      <div>
        <AtomsButton
          v-if="userSession"
          color="gray"
          class="bg-[#5865F2] py-2 px-6 text-white"
          @click="claimBadge"
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
          @click="loginWithDiscord"
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
  </div>
</template>

<script setup lang="ts">
  import { ApiUrl } from '~/enums/apiUrl';
  import { createClient } from '@supabase/supabase-js';
  import { useI18n } from 'vue-i18n';
  import type { ApiQuizResponse } from '~/types/api/quiz';
  import type { SupabaseClient, Session } from '@supabase/supabase-js';

  const props = defineProps<{
    response: ApiQuizResponse;
  }>();

  let supabase: SupabaseClient | null = null;
  const { t } = useI18n();

  const shareUrl = ref('http://www.example.com');
  const copiedIndicator = ref(false);
  const userSession = ref<Session | null>(null);

  onMounted(() => {
    const { url, publicKey } = useRuntimeConfig().public.supabase;
    supabase = createClient(url, publicKey);
    userSession.value = supabase.auth.session();
  });

  async function copyShareurl() {
    await navigator.clipboard.writeText(shareUrl.value);
    copiedIndicator.value = true;

    setTimeout(() => {
      copiedIndicator.value = false;
    }, 2000);
  }

  async function loginWithDiscord() {
    if (!supabase || userSession.value) {
      return;
    }

    const { session } = await supabase.auth.signIn(
      {
        provider: 'discord',
      },
      {
        redirectTo: window.location.href,
        scopes: 'identify email',
      },
    );

    userSession.value = session;
  }

  async function claimBadge() {
    const response = await $fetch<ApiQuizResponse>(ApiUrl.QuizClaimBadge, {
      method: 'POST',
      body: {
        accessToken: userSession.value?.access_token,
        resultId: props.response.id,
      },
    });
  }
</script>
