<template>
  <footer class="bg-white" aria-labelledby="footer-heading">
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8">
      <div
        class="md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:gap-8"
      >
        <div class="space-y-8 xl:col-span-1">
          <img class="h-10" src="/logo/vsf-full.svg" alt="Vue Storefront" />
          <p class="text-gray-500 text-base">
            Frontend Platform for Headless Commerce
          </p>
          <div class="flex space-x-5">
            <SocialIcon name="twitter" />
            <SocialIcon name="github" />
            <SocialIcon name="youtube" />
            <SocialIcon name="dev.to" />
            <SocialIcon name="facebook" />
            <SocialIcon name="linkedin" />
          </div>
        </div>
        <div
          class="mt-6 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 xl:mt-0 xl:col-span-2"
        >
          <FooterListMenu
            v-for="(item, index) in menuItems"
            :key="index"
            :title="item.title"
            :sub-menu="item.subMenu"
          />
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="pt-6">
        <p class="text-base text-gray-400 text-center">
          &copy; {{ currentYear }} Vue Storefront. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import FooterListMenu from '~/components/molecules/menu/FooterListMenu.vue';
  import SocialIcon from '~/components/atoms/icon/SocialIcon.vue';

  const menuItems = computed(() => [
    {
      title: 'Guides',
      subMenu: [
        {
          title: 'Getting Started',
          link: '#',
        },
        {
          title: 'Create your own Integration',
          link: '#',
        },
        {
          title: 'Create your own Extension',
          link: '#',
        },
        {
          title: 'Deploy Vue Storefront',
          link: '#',
        },
      ],
    },
    {
      title: 'Documentation',
      subMenu: [
        {
          title: 'Vue Storefront 2',
          link: '#',
        },
        {
          title: 'Vue Storefront 1',
          link: '#',
        },
        {
          title: 'Vue Storefront Cloud',
          link: '#',
        },
        {
          title: 'Storefront-UI',
          link: '#',
        },
        {
          title: 'Integrations',
          link: '#',
        },
        {
          title: 'Extensions',
          link: '#',
        },
      ],
    },
    {
      title: 'Company',
      subMenu: [
        {
          title: 'About',
          link: '#',
        },
        {
          title: 'Contact Us',
          link: '#',
        },
        {
          title: 'Contact for Partners',
          link: '#',
        },
        {
          title: 'Careers',
          link: '#',
        },
      ],
    },
  ]);

  const currentYear = computed(() => new Date().getFullYear());
</script>
