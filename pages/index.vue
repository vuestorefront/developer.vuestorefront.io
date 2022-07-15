<template>
  <AtomsLayoutContent>
    <AtomsLayoutContainer>
      <MoleculesBannersVideoBanner
        title="What is Vue Storefront"
        message="Vue Storefront is enormous but straightforward at the same time. Marc Backes created this fantastic video to explain to developers, what is Vue Storefront, is and how it works."
        button-link="#"
        button-text="Getting started"
        video-thumb="/thumbs/video/what-is-vue-storefront.jpg"
        thumb-button-text="Check our other videos"
        thumb-button-link="#"
        video-src="https://www.youtube.com/watch?v=MCN1rRwuIGs&t=1s"
      />
      <MoleculesBannersCallToAction
        message="Find help, new ideas, new projects, and much more on our Discord server. "
        img="/brands/logos/discord.svg"
        header="Join our Discord server"
        color="secondary"
        button-color="white"
        button-link="https://discord.gg/vuestorefront"
        button-text="Join our Discord server"
        button-text-color="secondary"
      />
      <MoleculesSectionLogoClouds
        direction="left"
        title="Commerce integrations"
        message="Ac magnis ultrices vulputate ante etiam mus id diam quam, integer accumsan praesent semper taciti turpis nam vehicula. Ornare vel feugiat volutpat consequat semper bibendum ullamcorper gravida lorem mollis dictumst justo elit."
        :brands="commerceVendors"
      />
      <MoleculesSectionLogoClouds
        direction="right"
        title="CMS integrations"
        message="Ac magnis ultrices vulputate ante etiam mus id diam quam, integer accumsan praesent semper taciti turpis nam vehicula. Ornare vel feugiat volutpat consequat semper bibendum ullamcorper gravida lorem mollis dictumst justo elit."
        :brands="cmsVendors"
      />
      <MoleculesSectionLogoClouds
        direction="left"
        title="Payment integrations"
        message="Ac magnis ultrices vulputate ante etiam mus id diam quam, integer accumsan praesent semper taciti turpis nam vehicula. Ornare vel feugiat volutpat consequat semper bibendum ullamcorper gravida lorem mollis dictumst justo elit."
        :brands="paymentVendors"
      />
    </AtomsLayoutContainer>
    <AtomsLayoutFullWidthSection>
      <AtomsLayoutFullWidthContainer>
        <AtomsTextHeadingCenter
          title="Engage with us"
          message="Read our incredible content in our developer focus blog."
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
  import { IntegrationList } from '~/types/integrations';

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
