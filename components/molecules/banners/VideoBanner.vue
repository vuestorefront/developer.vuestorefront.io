<template>
  <div class="video-banner">
    <slot name="left">
      <div class="video-banner-content">
        <slot name="header">
          <h1 class="video-banner-content--title">
            <AtomsTextFirstColoredWord :text="title" />
          </h1>
        </slot>
        <slot name="message">
          <p class="video-banner-content--text">
            {{ message }}
          </p>
        </slot>

        <div class="video-banner-content--buttons text">
          <slot name="button" :button="{ text: buttonText, link: buttonLink }">
            <AtomsButton
              v-if="buttonText && buttonLink"
              :to="{ to: buttonLink, target: '_blank' }"
              :color="buttonColor"
              :label="buttonText"
              icon-right-name="akar-icons:link-out"
              text-color="secondary"
              class="w-full md:w-fit"
              :shadow="false"
            />
          </slot>
        </div>
      </div>
    </slot>
    <slot name="right">
      <div v-if="video || videoThumb" class="video-banner-image">
        <AtomsVideoThumb
          :video="video"
          :image="videoThumb"
          class="video-banner-image--thumb"
          @click="isOpen = true"
        />
        <div class="video-banner-image--links">
          <NuxtLink :to="thumbButtonLink">
            {{ thumbButtonText }}
          </NuxtLink>
        </div>
      </div>
    </slot>
    <MoleculesModalVideo :open="isOpen" :src="video" @close="isOpen = false" />
  </div>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      title: string;
      message: string;
      video?: string;
      videoThumb?: string;
      buttonText?: string;
      buttonLink?: string;
      buttonColor?: string;
      thumbButtonText?: string;
      thumbButtonLink?: string;
    }>(),
    {
      title: '',
      message: '',
      buttonColor: 'primary',
      thumbButtonColor: 'transparent',
    },
  );

  const isOpen = ref(false);
</script>
