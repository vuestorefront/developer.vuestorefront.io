<template>
  <AtomsLayoutContent>
    <AtomsLayoutContainer>
      <MoleculesBannersVideoBanner
        :title="t('page.home.videoBanner.title')"
        :message="t('page.home.videoBanner.message')"
        :button-text="t('page.home.videoBanner.button')"
        button-link="https://docs.vuestorefront.io/v2/getting-started/installation.html"
        video-thumb="https://img.youtube.com/vi/MCN1rRwuIGs/maxresdefault.jpg"
        :thumb-button-text="t('page.home.videoBanner.link')"
        thumb-button-link="/videos"
        video="https://www.youtube.com/watch?v=MCN1rRwuIGs"
      />
      <MoleculesBannersCallToAction
        :title="t('page.home.discordCTA.title')"
        img="/brands/logos/discord.svg"
        :message="t('page.home.discordCTA.message')"
        color="secondary"
        button-color="white"
        button-link="https://discord.gg/vuestorefront"
        :button-text="t('page.home.discordCTA.button')"
        button-text-color="secondary"
      />
      <Suspense>
        <LazyMoleculesSectionLogoClouds
          v-for="(banner, index) in homeIntegrationBanners"
          :key="index"
          v-bind="banner"
        />
      </Suspense>
      <MoleculesSectionLogoClouds />
    </AtomsLayoutContainer>
    <AtomsLayoutFullWidthSection>
      <AtomsLayoutFullWidthContainer>
        <Suspense>
          <LazyAtomsTextHeadingCenter
            :title="t('page.home.certification.title')"
            :message="t('page.home.certification.message')"
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
    <AtomsLayoutFullWidthSection>
      <AtomsLayoutFullWidthContainer>
        <Suspense>
          <LazyAtomsTextHeadingCenter
            :title="t('page.home.blog.title')"
            :message="t('page.home.blog.message')"
          />
        </Suspense>
        <Suspense>
          <LazyOrganismsSectionBlogPosts
            :posts="postsList"
            :loading="pending"
            :error="error"
          />
        </Suspense>
        <Suspense>
          <LazyMoleculesTextFollowSocials />
        </Suspense>
      </AtomsLayoutFullWidthContainer>
    </AtomsLayoutFullWidthSection>
    <AtomsLayoutContainer>
      <LazyMoleculesNewsletterSignUpSection />
    </AtomsLayoutContainer>
  </AtomsLayoutContent>
</template>

<script setup lang="ts">
  import { useDevTo } from '~/composables/useDevTo';
  import { IntegrationCategory } from '~/enums/integrations';
  import { ApiUrl } from '~/enums/apiUrl';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  definePageMeta({
    title: 'i18n:page.home.head.title',
  });

  const { data: commerceVendors } = useAsyncData('commerce', async () =>
    $fetch(ApiUrl.Integrations, {
      params: {
        categories: [IntegrationCategory.commerce],
        random: 6,
      },
    }),
  );

  const { data: cmsVendors } = useAsyncData('cms', async () =>
    $fetch(ApiUrl.Integrations, {
      params: {
        categories: [IntegrationCategory.cms],
        random: 6,
      },
    }),
  );

  const { data: paymentVendors } = useAsyncData('payment', async () =>
    $fetch(ApiUrl.Integrations, {
      params: {
        categories: [IntegrationCategory.payment],
        random: 6,
      },
    }),
  );

  console.log(commerceVendors);

  const homeIntegrationBanners = computed(() => {
    return [
      {
        direction: 'left',
        title: t('global.integration.types.commerce.title'),
        message: t('global.integration.types.commerce.text'),
        brands: commerceVendors.value,
        buttonLink: `documentation/#${IntegrationCategory.commerce}`,
        buttonText: t('page.home.integrations.commerce.buttonText'),
      },
      {
        direction: 'right',
        title: t('global.integration.types.cms.title'),
        message: t('global.integration.types.cms.text'),
        brands: cmsVendors.value,
        buttonLink: `documentation/#${IntegrationCategory.cms}`,
        buttonText: t('page.home.integrations.cms.buttonText'),
      },
      {
        direction: 'left',
        title: t('global.integration.types.payment.title'),
        message: t('global.integration.types.payment.text'),
        brands: paymentVendors.value,
        buttonLink: `documentation/#${IntegrationCategory.payment}`,
        buttonText: t('page.home.integrations.payment.buttonText'),
      },
    ];
  });

  const { convertPostsToProps, useBlogArticles } = useDevTo();

  const { $apiAsyncData } = useBlogArticles({
    organization: 'vue-storefront',
    perPage: 3,
  });

  const { data, pending, error } = await $apiAsyncData();

  const postsList = convertPostsToProps(data.value);
  const elements = [
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
    {
      name: 'And More',
      link: 'https://developer.vuestorefront.io/certification',
      logo: '/brands/logos/and_more.svg',
      status: 'prod',
    }
  ];
</script>
