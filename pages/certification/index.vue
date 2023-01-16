<template>
  <AtomsLayoutContainer class="flex items-center">
    <AtomsLayoutContent class="video-banner-content">
      <div>
        <h1 class="text-5xl font-bold">
          <AtomsTextFirstColoredWord
            :text="t('page.certification.banner.title')"
          />
        </h1>
        <p class="video-banner-content--text">
          Our certification program aims at helping to foster an ecosystem of
          skilled Vue Storefront professionals, able to deliver high-quality
          e-commerce shops to both our customers and partners. By certifying
          yourself as a Vue Storefront professional you are letting the market
          know that you have unique skills that would allow you to be better
          positioned when taking a job which requires a Vue Storefront
          implementation.
        </p>
        <p class="video-banner-content--text">
          Our ecosystem of partners and customers is constantly hiring for Vue
          Storefront positions: we want to help you test you knowledge, improve
          your expertise and show the market your worth.
        </p>
      </div>
    </AtomsLayoutContent>
    <div class="hidden md:flex md:content-center md:justify-center" style="margin-top: 0;">
      <img src="/draw/certification.svg" alt="certification" class="w-4/5" />
    </div>
  </AtomsLayoutContainer>
  <AtomsLayoutFullWidthSection class="bg-white">
      <AtomsLayoutFullWidthContainer>
        <Suspense>
          <LazyAtomsTextHeadingCenter
            :title="t('page.certification.spread.message')"
          />
        </Suspense>
        <Suspense>
          <div class="mt-8 grid content-center items-center justify-center gap-4 lg:mt-0 grid-cols-0 sm:grid-cols-2 md:grid-cols-3 order-last">
            <AtomsBrandsBox
            v-for="brand in elements"
            :key="brand.key"
            v-bind="brand"
            shaped
          />
          </div>
        </Suspense>
      </AtomsLayoutFullWidthContainer>
    </AtomsLayoutFullWidthSection>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import { useIntegrationsList } from '~/composables/store/useIntegrationList';
  import { definePageMeta } from '#imports';

  const { t } = useI18n();

  definePageMeta({
    title: 'i18n:page.certification.head.title',
  });

  const { appliedFilters } = useIntegrationsList();

  const mobileFiltersOpen = ref(false);

  const elements = [
    {
      name: 'VSF Basic',
      link: 'https://developer.vuestorefront.io/quiz/questions/basics',
      logo: '/brands/logos/basics.svg',
      status: 'prod',
      license: 'vsf',
    },
    {
      name: 'commercetools',
      link: 'https://developer.vuestorefront.io/quiz/questions/commercetools',
      logo: '/brands/logos/commercetools.svg',
      status: 'prod',
      license: 'enterprise',
      categories: ['commerce'],
    },
    {
      name: 'BigCommerce',
      link: 'https://developer.vuestorefront.io/quiz/questions/bigcommerce',
      logo: '/brands/logos/bigcommerce.svg',
      status: 'prod',
      license: 'enterprise',
      categories: ['commerce'],
    },
    {
      name: 'Elastic Path',
      link: 'https://developer.vuestorefront.io/quiz/questions/elasticpath',
      logo: '/brands/logos/elasticpath.svg',
      status: 'prod',
      license: 'enterprise',
      categories: ['commerce'],
    },
    {
      name: 'Magento',
      link: 'https://developer.vuestorefront.io/quiz/questions/magento',
      logo: '/brands/logos/magento.svg',
      status: 'prod',
      license: 'os',
      categories: ['commerce'],
    },
  ];
</script>
