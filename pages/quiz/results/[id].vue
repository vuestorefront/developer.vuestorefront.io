<template>
  <AtomsLayoutContainer ref="container" class="space-y-2">
    <ActiveQuizResults
      v-if="response.passed"
      :response="response"
      :user-session="userSession"
      @claim-badge="claimBadge"
      @login-with-discord="loginWithDiscord"
    />

    <ActiveQuizTryAgain v-else :response="response" />
  </AtomsLayoutContainer>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import { ApiUrl } from '~/enums/apiUrl';
  import { createClient } from '@supabase/supabase-js';
  import type { ApiQuizResponse } from '~/types/api/quiz';
  import type { SupabaseClient, Session } from '@supabase/supabase-js';

  definePageMeta({
    documentDriven: false,
    title: 'i18n:page.quiz.result.head.title',
  });

  let supabase: SupabaseClient | null = null;
  const { t } = useI18n();
  const route = useRoute();
  const userSession = ref<Session | null>(null);

  useHead({
    meta: [
      {
        hid: 'og:title',
        property: 'og:title',
        content: t('page.quiz.result.head.ogtitle'),
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/og_images/quiz_results.jpg',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: '/og_images/quiz_results.jpg',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/og_images/quiz_results.jpg',
      },
    ],
  });

  onMounted(() => {
    const { url, publicKey } = useRuntimeConfig().public.supabase;
    supabase = createClient(url, publicKey);
    userSession.value = supabase.auth.session();

    supabase.auth.onAuthStateChange((event, session) => {
      userSession.value = session;
    });
  });

  const { data: response } = await useFetch(ApiUrl.QuizResponse, {
    key: `quiz-response-${route.params.id}`,
    params: {
      id: route.params.id,
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    headers: useRequestHeaders(['cookie']),
  });

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
    if (!response.value.isSubmitter || response.value.isBadgeClaimed) {
      return;
    }

    await $fetch<ApiQuizResponse>(ApiUrl.QuizClaimBadge, {
      method: 'POST',
      body: {
        accessToken: userSession.value?.access_token,
        resultId: response.value.id,
      },
    });

    response.value.isBadgeClaimed = true;
  }
</script>
