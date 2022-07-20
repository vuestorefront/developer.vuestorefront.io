<template>
  <GithubButton
    :aria-label="`Star ${repository} on GitHub`"
    :data-size="size || 'large'"
    :href="`https://github.com/${repository}`"
    data-color-scheme="no-preference: light; light: light; dark: light;"
    data-show-count="true"
  >
    {{ t('components.atoms.buttons.stars') }}
  </GithubButton>
</template>

<script setup lang="ts">
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import GithubButton from 'vue-github-button';
  import { useI18n } from 'vue-i18n';

  defineProps<{
    repository: string;
    size?: string;
  }>();

  const { t } = useI18n();
</script>
