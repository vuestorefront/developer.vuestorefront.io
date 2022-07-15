<template>
  <AtomsLayoutContent>
    <AtomsLayoutContainer>
      <MoleculesBannersVideoBanner
        :title="t('content.page.home.videoBanner.title')"
        :message="t('content.page.home.videoBanner.message')"
        :button-text="t('content.page.home.videoBanner.button')"
        button-link="https://docs.vuestorefront.io/v2/getting-started/installation.html"
        video-thumb="/thumbs/video/what-is-vue-storefront.jpg"
        :thumb-button-text="t('content.page.home.videoBanner.link')"
        thumb-button-link="#"
        video-src="https://www.youtube.com/watch?v=MCN1rRwuIGs&t=1s"
      />
      <MoleculesBannersCallToAction
        :title="t('content.page.home.discordCTA.title')"
        img="/brands/logos/discord.svg"
        :message="t('content.page.home.discordCTA.message')"
        color="secondary"
        button-color="white"
        button-link="https://discord.gg/vuestorefront"
        :button-text="t('content.page.home.discordCTA.button')"
        button-text-color="secondary"
      />
      <MoleculesSectionLogoClouds
        direction="left"
        :title="t('content.page.home.integrations.commerce.title')"
        :message="t('content.page.home.integrations.commerce.message')"
        :brands="commerceVendors"
        :button-link="`documentation/#${IntegrationCategory.commerce}`"
        :button-text="t('content.page.home.integrations.commerce.buttonText')"
      />
      <MoleculesSectionLogoClouds
        direction="right"
        :title="t('content.page.home.integrations.cms.title')"
        :message="t('content.page.home.integrations.cms.message')"
        :brands="cmsVendors"
        :button-link="`documentation/#${IntegrationCategory.cms}`"
        :button-text="t('content.page.home.integrations.cms.buttonText')"
      />
      <MoleculesSectionLogoClouds
        direction="left"
        :title="t('content.page.home.integrations.payment.title')"
        :message="t('content.page.home.integrations.payment.message')"
        :brands="paymentVendors"
        :button-link="`documentation/#${IntegrationCategory.payment}`"
        :button-text="t('content.page.home.integrations.payment.buttonText')"
      />
    </AtomsLayoutContainer>
    <AtomsLayoutFullWidthSection>
      <AtomsLayoutFullWidthContainer>
        <AtomsTextHeadingCenter
          :title="t('content.page.home.blog.title')"
          :message="t('content.page.home.blog.message')"
        />
        <OrganismsSectionBlogPosts
          :posts="postsList"
          :loading="pending"
          :error="error"
        />
        <MoleculesTextFollowSocials />
      </AtomsLayoutFullWidthContainer>
    </AtomsLayoutFullWidthSection>
    <AtomsLayoutContainer>
      <MoleculesNewsletterSignUpSection />
    </AtomsLayoutContainer>
  </AtomsLayoutContent>
</template>

<script setup lang="ts">
  import { useDevTo } from '~/composables/useDevTo';
  import { IntegrationCategory } from '~/enums/integrations';
  import { ApiUrl } from '~/enums/apiUrl';
  import { useI18n } from 'vue-i18n';
  import { IntegrationList } from '~/types/integrations';

  const { t } = useI18n();

  const { data: commerceVendors } = useAsyncData('commerce', () =>
    $fetch<IntegrationList>(ApiUrl.Integrations, {
      params: {
        category: IntegrationCategory.commerce,
        random: 6,
      },
    }),
  );

  const { data: cmsVendors } = useAsyncData('cms', () =>
    $fetch<IntegrationList>(ApiUrl.Integrations, {
      params: {
        category: IntegrationCategory.cms,
        random: 6,
      },
    }),
  );

  const { data: paymentVendors } = useAsyncData('payment', () =>
    $fetch<IntegrationList>(ApiUrl.Integrations, {
      params: {
        category: IntegrationCategory.payment,
        random: 6,
      },
    }),
  );

  const { convertPostsToProps, useBlogArticles } = useDevTo();

  const { $apiLazyAsyncData } = useBlogArticles({
    organization: 'vue-storefront',
    perPage: 3,
  });

  const { data, error, pending } = await $apiLazyAsyncData();

  const postsList = convertPostsToProps(data.value);
</script>
