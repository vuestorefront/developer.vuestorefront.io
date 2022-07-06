<template>
  <AtomsLayoutContent>
    <AtomsLayoutContainer>
      <LazyMoleculesBannersVideoBanner
        title="What is Vue Storefront"
        message="Vue Storefront is enormous but straightforward at the same time. Marc Backes created this fantastic video to explain to developers, what is Vue Storefront, is and how it works."
        button-link="#"
        button-text="Getting started"
        video-thumb="/thumbs/video/what-is-vue-storefront.jpg"
        thumb-button-text="Check our other videos"
        thumb-button-link="#"
      />
      <LazyMoleculesBannersCallToAction
        message="Find help, new ideas, new projects, and much more on our Discord server. "
        img="/brands/discord.svg"
        header="Join our Discord server"
        color="secondary"
        button-color="white"
        button-link="https://discord.gg/vuestorefront"
        button-text="Join our Discord server"
        button-text-color="secondary"
      />
      <LazyMoleculesSectionLogoClouds
        direction="left"
        title="Commerce integrations"
        message="Ac magnis ultrices vulputate ante etiam mus id diam quam, integer accumsan praesent semper taciti turpis nam vehicula. Ornare vel feugiat volutpat consequat semper bibendum ullamcorper gravida lorem mollis dictumst justo elit."
        :brands="commerceVendors"
      />
      <LazyMoleculesSectionLogoClouds
        direction="right"
        title="CMS integrations"
        message="Ac magnis ultrices vulputate ante etiam mus id diam quam, integer accumsan praesent semper taciti turpis nam vehicula. Ornare vel feugiat volutpat consequat semper bibendum ullamcorper gravida lorem mollis dictumst justo elit."
        :brands="cmsVendors"
      />
      <LazyMoleculesSectionLogoClouds
        direction="left"
        title="Payment integrations"
        message="Ac magnis ultrices vulputate ante etiam mus id diam quam, integer accumsan praesent semper taciti turpis nam vehicula. Ornare vel feugiat volutpat consequat semper bibendum ullamcorper gravida lorem mollis dictumst justo elit."
        :brands="paymentVendors"
      />
    </AtomsLayoutContainer>
    <AtomsLayoutFullWidthSection>
      <AtomsLayoutFullWidthContainer>
        <LazyAtomsTextHeadingCenter
          title="Engage with us"
          message="Read our incredible content in our developer focus blog."
        />
        <LazyOrganismsSectionBlogPosts
          :posts="postsList"
          :loading="pending"
          :error="error"
        />
        <LazyMoleculesTextFollowSocials />
      </AtomsLayoutFullWidthContainer>
    </AtomsLayoutFullWidthSection>
    <AtomsLayoutContainer>
      <LazyMoleculesNewsletterSignUpSection />
    </AtomsLayoutContainer>
  </AtomsLayoutContent>
</template>

<script setup lang="ts">
  import { useArticles } from '~/composables/api/devTo/useArticles';
  import { useDevTo } from '~/composables/data/dev.to/useDevTo';
  import { integrationsListByCategory } from '~/constants/brands';
  import { IntegrationCategory } from '~/enums/integrations';

  const { randomElements } = useArrayManipulation();
  const { removeProperties } = useObjectManipulation();

  const commerceVendors = randomElements(
    integrationsListByCategory([IntegrationCategory.commerce]),
    6,
  );

  const cmsVendors = randomElements(
    integrationsListByCategory([IntegrationCategory.cms]),
    6,
  );

  const paymentVendors = randomElements(
    integrationsListByCategory([IntegrationCategory.payment]),
    6,
  );

  const { convertPostsToProps } = useDevTo();
  const { $apiLazyAsyncData } = useArticles({
    organization: 'vue-storefront',
    perPage: 3,
  });
  const { data, error, pending } = await $apiLazyAsyncData();

  const postsList = convertPostsToProps(data.value);
</script>
