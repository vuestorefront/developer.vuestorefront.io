<template>
  <div class="main-layout-content">
    <div class="main-layout-container">
      <MoleculesBannersVideoBanner
        title="What is Vue Storefront"
        message="Vue Storefront is enormous but straightforward at the same time. Marc Backes created this fantastic video to explain to developers, what is Vue Storefront, is and how it works."
        button-link="#"
        button-text="Getting started"
        video-thumb="/thumbs/video/what-is-vue-storefront.jpg"
        thumb-button-text="Check our other videos"
        thumb-button-link="#"
      />
      <MoleculesBannersCallToAction
        message="Find help, new ideas, new projects, and much more on our Discord server. "
        img="/brands/discord.svg"
        header="Join our Discord server"
        color="secondary"
        button-color="white"
        button-link="https://discord.gg/vuestorefront"
        button-text="Join our Discord server"
        button-text-color="secondary"
      />
    </div>
    <div class="main-layout-full-section">
      <div class="main-layout-full-section--container">
        <AtomsTextHeadingCenter
          title="Engage with us"
          message="Read our incredible content in our developer focus blog."
        />
        <OrganismsSectionBlogPosts
          :posts="postsList"
          :loading="isFinished"
          :error="error"
        />
        <MoleculesTextFollowSocials />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useArticles } from '~/composables/api/devTo/useArticles';
  import { useDevTo } from '~/composables/data/dev.to/useDevTo';

  const { convertPostsToProps } = useDevTo();
  const { $apiLazyAsyncData } = useArticles({
    organization: 'vue-storefront',
    perPage: 3,
  });
  const { data, error, isFetching, isFinished, response, statusCode } =
    await $apiLazyAsyncData();

  const postsList = convertPostsToProps(data.value);
</script>
