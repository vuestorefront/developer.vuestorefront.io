<template>
  <AtomsLayoutContainer ref="container" class="space-y-2">
    <ActiveQuizResults
      :response="response"
      :user-session="userSession"
      @claim-badge="claimBadge"
      @login-with-discord="loginWithDiscord"
    />
  </AtomsLayoutContainer>
</template>

<script setup lang="ts">
  import { ApiUrl } from '~/enums/apiUrl';
  import { createClient } from '@supabase/supabase-js';
  import type { ApiQuizResponse } from '~/types/api/quiz';
  import type { SupabaseClient, Session } from '@supabase/supabase-js';

  definePageMeta({
    documentDriven: false,
  });

  let supabase: SupabaseClient | null = null;
  const route = useRoute();
  const userSession = ref<Session | null>(null);

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
