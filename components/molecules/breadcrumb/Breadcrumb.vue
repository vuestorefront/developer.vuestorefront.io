<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol
      vocab="http://schema.org/"
      typeof="BreadcrumbList"
      role="list"
      class="flex items-center space-x-2"
    >
      <li>
        <div>
          <NuxtLink
            property="item"
            typeof="WebPage"
            href="#"
            class="text-gray-400"
          >
            <Suspense>
              <AtomsIcon name="carbon:home" />
            </Suspense>
            <span class="sr-only">{{ t('global.interface.home') }}</span>
          </NuxtLink>
        </div>
      </li>

      <li v-for="(crumb, index) in crumbs" :key="index">
        <div class="flex items-center">
          <span class="text-gray-400">/</span>
          <NuxtLink
            property="item"
            typeof="WebPage"
            :to="crumb.link"
            class="ml-2 text-sm text-gray-400"
          >
            {{ crumb.title }}
          </NuxtLink>
        </div>
        <meta property="position" :content="index + 2" />
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  defineProps<{
    crumbs: {
      title: string;
      link: string;
    }[];
  }>();

  const { t } = useI18n();
</script>
