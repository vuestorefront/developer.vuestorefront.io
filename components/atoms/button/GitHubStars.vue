<template>
  <GithubButton
    :aria-label="`Star ${repository} on GitHub`"
    :data-size="size || 'large'"
    :href="`https://github.com/${repository}`"
    data-color-scheme="no-preference: light; light: light; dark: light;"
    data-show-count="true"
  >
    Star
  </GithubButton>
</template>

<script setup lang="ts">
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import GithubButton from 'vue-github-button';

  defineProps<{
    repository: string;
    size?: string;
  }>();
</script>
