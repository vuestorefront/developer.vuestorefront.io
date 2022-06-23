<template>
  <div class="flex space-x-5">
    <NuxtLink
      v-for="(social, index) in socialLinks"
      :key="index"
      :to="social.link"
      class="text-gray-400 hover:text-gray-500"
    >
      <span class="sr-only">{{ social.name }}</span>
      <Suspense>
        <Icon :name="social.icon" class="social-icon" />
      </Suspense>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  import Icon from '~/components/icons/Icon.vue';

  const socialLinks = computed<{ icon: string; link: string; name: string }[]>(
    () => [
      {
        icon: 'fa6-brands:twitter',
        link: 'https://twitter.com/VueStorefront',
        name: 'Twitter',
      },
      {
        icon: 'fa6-brands:github',
        link: 'https://github.com/vuestorefront/vue-storefront',
        name: 'GitHub',
      },
      {
        icon: 'fa6-brands:youtube',
        link: 'https://www.youtube.com/vuestorefront',
        name: 'YouTube',
      },
      {
        icon: 'fa6-brands:dev',
        link: 'https://dev.to/vuestorefront',
        name: 'Dev.to',
      },
      {
        icon: 'fa6-brands:facebook-square',
        link: 'https://www.facebook.com/vuestorefront/',
        name: 'Facebook',
      },
      {
        icon: 'fa6-brands:linkedin-in',
        link: 'https://www.linkedin.com/company/vue-storefront/',
        name: 'LinkedIn',
      },
    ],
  );
</script>

<style scoped>
  .social-icon {
    font-size: 24px;
    line-height: 1em;
  }
</style>
