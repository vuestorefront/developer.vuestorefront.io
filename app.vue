<template>
  <NuxtPage />
</template>

<script setup lang="ts">
  import { PAGE_TITLE } from '~/constants/text';

  useHead({
    title: PAGE_TITLE,
    meta: [
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: PAGE_TITLE,
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@VueStorefront' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://repository-images.githubusercontent.com/497115253/df260e4b-c48c-4725-bf92-54328494a30d',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content:
          'https://repository-images.githubusercontent.com/497115253/df260e4b-c48c-4725-bf92-54328494a30d',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: PAGE_TITLE,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://repository-images.githubusercontent.com/497115253/df260e4b-c48c-4725-bf92-54328494a30d',
      },
    ],
  });
</script>
