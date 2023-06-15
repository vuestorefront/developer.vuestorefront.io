<template>
  <h1 class="my-4 text-center text-4xl">
    <AtomsTextFirstColoredWord :text="t('page.quiz.result.header', { test: response.quiz.title })" />
  </h1>

  <!-- Diploma -->
  <div class="mb-4 flex w-full justify-start overflow-y-auto md:justify-center">
    <div class="w-full min-w-[768px] md:w-3/4">
      <img :src="diplomaSvg" class="A4-aspect-ratio my-4 w-full shadow" />
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
            <input type="text" :value="shareUrl"
              class="h-10 w-80 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              disabled />
            <button
              class="block flex h-10 w-14 items-center justify-center rounded-r-lg border border-gray-300 bg-gray-50 hover:bg-gray-100"
              @click="copyShareurl">
              <span v-if="copiedIndicator" class="text-xs">{{
                t('page.quiz.result.copied')
              }}</span>
              <AtomsIcon v-else name="carbon:copy" class="text-gray-800" />
            </button>
          </div>

          <div class="mt-4 flex">
            <a :href="twitterShareLink" target="_blank">
              <AtomsIcon name="carbon:logo-twitter" class="text-[#1DA1F2]" width="3rem" height="3rem" />
            </a>

            <a :href="linkedinShareLink" target="_blank">
              <AtomsIcon name="carbon:logo-linkedin" class="text-[#0072B1]" width="3rem" height="3rem" />
            </a>

            <a :href="facebookShareLink" target="_blank">
              <AtomsIcon name="carbon:logo-facebook" class="text-[#4267B2]" width="3rem" height="3rem" />
            </a>
          </div>
        </div>

        <!-- Download button -->
        <div class="mt-8 flex w-full flex-col items-center lg:mt-0 lg:w-1/3">
          <p class="mb-4 text-gray-600">
            {{ t('page.quiz.result.downloadTitle') }}
          </p>


          <AtomsButton download :href="diplomaPdf" target="_blank" color="primary">
            {{ t('page.quiz.result.download') }}
          </AtomsButton>
        </div>
      </div>
    </client-only>

    <!-- send by email -->

    <div v-if="email">
      <h2 class="mt-12 mb-4 text-center text-3xl">
        <AtomsTextFirstColoredWord :text="t('page.quiz.userDetails.subheading')" />
      </h2>

      <div class="container mx-auto flex flex-col flex-wrap px-5 py-4 text-gray-600 lg:w-2/3">
        <form class="flex flex-col items-center" @submit.stop.prevent="submit">
          <!-- Submit button -->
          <AtomsButton type="submit" color="primary" class="mt-6">
            <AtomsLoading v-if="detailsLoading" />

            <template v-else>
              {{ t('page.quiz.userDetails.submit') }}
            </template>
          </AtomsButton>
        </form>
      </div>
    </div>

    <div v-else>
      <h2 class="mt-12 mb-4 text-center text-3xl">
        <AtomsTextFirstColoredWord :text="t('page.quiz.userDetails.subheading')" />
      </h2>

      <div class="container mx-auto flex flex-col flex-wrap px-5 py-4 text-gray-600 lg:w-2/3">
        <form class="flex flex-col items-center" @submit.stop.prevent="submit">

          <div class="flex flex-col">
            <input id="email" type="email" name="email" required
              class="rounded-md border border-slate-300 bg-slate-50 px-4 py-2 focus:border-blue-300 focus:ring focus:ring-blue-200" />

            <p class="mt-2 text-center text-sm text-gray-500">
              {{ t('page.quiz.userDetails.emailMessage') }}
            </p>
          </div>

          <!-- Submit button -->
          <AtomsButton type="submit" color="primary" class="mt-6">
            <AtomsLoading v-if="detailsLoading" />

            <template v-else>
              {{ t('page.quiz.userDetails.submit') }}
            </template>
          </AtomsButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type {
  ApiQuizResponse,
  EmailDetails,
  EmailQuizBody,
} from '~/types/api/quiz';
import type { Session } from '@supabase/supabase-js';
import { ApiUrl } from '~~/enums/apiUrl';
import { notify } from '@kyvg/vue3-notification';
import { useUserDetails } from '~/store/userDetails';

const props = defineProps<{
  response: ApiQuizResponse;
  userSession: Session | null;
}>();

defineEmits<{
  (e: 'claimBadge'): void;
  (e: 'loginWithDiscord'): void;
}>();

const { t } = useI18n();
const route = useRoute();
const store = useUserDetails();
const { email } = store.userDetails;

const shareUrl = ref('');
const copiedIndicator = ref(false);
const detailsLoading = ref(false);

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

async function submit(event: Event) {
  const form = new FormData(event.target as HTMLFormElement);

  const { id } = route.params;
  const { response } = props;
  const name = response.username.split(' ')[0];
  const surname = response.username.split(' ')[1];
  const formEmail = form.get('email') as string;

  detailsLoading.value = true;

  const quizBody: EmailQuizBody = {
    title: response.quiz.title,
    passing_score: response.quiz.passing_score,
  };

  const detailsBody: EmailDetails = {
    id,
    name,
    surname,
    email: email || formEmail,
    score: response.score,
    passed: response.passed,
    diploma: diplomaPdf.value,
  };

  await $fetch(ApiUrl.QuizSendEmail, {
    method: 'POST',
    body: JSON.stringify({
      quiz: quizBody,
      details: detailsBody,
    }),
  });

  detailsLoading.value = false;
  notify({
    title: t('page.quiz.userDetails.emailSent'),
    type: 'success',
  });
}
</script>

<style scoped>
.A4-aspect-ratio {
  aspect-ratio: 1.4142/1;
}
</style>
