<template>
  <AtomsLayoutContainer ref="container" class="space-y-2">
    <h1 class="text-4xl font-bold">
      <AtomsTextFirstColoredWord
        :text="t('page.quiz.result.header', { test: 'X' })"
      />
    </h1>

    <p>{{ t('page.quiz.result.message', { score: 95 }) }}</p>

    <div>
      <p>{{ t('page.quiz.result.share') }}</p>

      <div>
        <AtomsButton color="gray" class="p-0">
          <AtomsIcon
            name="carbon:logo-twitter"
            class="text-[#1DA1F2]"
            width="2.5rem"
            height="2.5rem"
          />
        </AtomsButton>

        <AtomsButton color="gray" class="p-0">
          <AtomsIcon
            name="carbon:logo-linkedin"
            class="text-[#0072B1]"
            width="2.5rem"
            height="2.5rem"
          />
        </AtomsButton>

        <AtomsButton color="gray" class="p-0">
          <AtomsIcon
            name="carbon:logo-facebook"
            class="text-[#4267B2]"
            width="2.5rem"
            height="2.5rem"
          />
        </AtomsButton>
      </div>
    </div>

    <div>
      <p>Login to Discord to receive a badge:</p>

      <div>
        <AtomsButton
          color="gray"
          class="relative overflow-visible bg-[#5865F2] py-2 px-6 text-white"
        >
          <span class="pr-2 normal-case">Login to Discord</span>

          <AtomsIcon
            name="carbon:logo-discord"
            class="text-white"
            width="2rem"
            height="2rem"
          />

          <span
            class="absolute top-[-15px] right-[-15px] flex h-8 w-8 items-center justify-center rounded-full bg-amber-400"
          >
            <AtomsIcon
              name="carbon:badge"
              class="text-white"
              width="1.6rem"
              height="1.6rem"
            />
          </span>
        </AtomsButton>
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
</script>
