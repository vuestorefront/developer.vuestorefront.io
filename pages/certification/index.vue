<template>
  <AtomsLayoutContainer class="flex">
    <AtomsLayoutContent class="video-banner-content">
      <div>
        <h1 class="text-5xl font-bold">
          <AtomsTextFirstColoredWord
            :text="t('page.certification.banner.title')"
          />
        </h1>
        <p class="video-banner-content--text">
          Our purpose with it is to help foster an ecosystem of skilled Vue
          Storefront professionals, able to deliver high-quality e-commerce
          shops to both our customers and partners.
        </p>
        <p class="video-banner-content--text">
          Our exams consist of a set of 10 questions: the first 5 questions are
          about Vue Storefront and its architecture; the last 5 are dedicated to
          testing your knowledge about the integration of your choice. Becoming
          a certified Vue Storefront developer allows you to broaden your career
          opportunities in the e-commerce space, either by helping you to stand
          out inside your current organisation, or, in case you’re a freelancer,
          giving you the power to contribute to different projects.
        </p>
      </div>
    </AtomsLayoutContent>
    <AtomsLayoutContent>
      hahah
    </AtomsLayoutContent>
  </AtomsLayoutContainer>
  <AtomsLayoutFullWidthSection class="bg-white">
      <AtomsLayoutFullWidthContainer>
        <Suspense>
          <LazyAtomsTextHeadingCenter
            :title="t('page.certification.spread.message')"
          />
        </Suspense>
        <Suspense>
          <div class="mt-8 grid content-center items-center justify-center gap-4 lg:mt-0 grid-cols-2 md:grid-cols-3 order-last">
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
      logo: '/brands/logos/vsf-basic.svg',
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
      link: 'https://developer.vuestorefront.io/quiz/questions/bigcommerce',
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
