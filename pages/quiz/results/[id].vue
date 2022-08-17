<template>
  <AtomsLayoutContainer ref="container" class="space-y-2">
    <h1 class="my-12 text-center text-4xl">
      <AtomsTextFirstColoredWord
        :text="
          t('page.quiz.result.message', { name: 'X', score: 95, test: 'Y' })
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
            <span v-if="copiedIndicator" class="text-xs">Copied</span>
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
          <AtomsButton color="gray" class="bg-[#5865F2] py-2 px-6 text-white">
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
  </AtomsLayoutContainer>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  definePageMeta({
    documentDriven: false,
  });

  const { t } = useI18n();

  const shareUrl = ref('http://www.example.com');
  const copiedIndicator = ref(false);

  async function copyShareurl() {
    await navigator.clipboard.writeText(shareUrl.value);
    copiedIndicator.value = true;

    setTimeout(() => {
      copiedIndicator.value = false;
    }, 2000);
  }
</script>
