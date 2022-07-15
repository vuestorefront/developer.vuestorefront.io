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
            <NuxtLink v-if="buttonText && buttonLink" :to="buttonLink">
              <AtomsButtonContent
                :color="buttonColor"
                :label="buttonText"
                shadow
              />
            </NuxtLink>
          </slot>
        </div>
      </div>
    </slot>
    <slot name="right">
      <div v-if="videoThumb" class="video-banner-image">
        <AtomsThumbVideo
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
    <MoleculesVideoModal
      :open="isOpen"
      :src="videoSrc"
      @close="isOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      title: string;
      message: string;
      videoSrc?: string;
      buttonText?: string;
      buttonLink?: string;
      buttonColor?: string;
      videoThumb?: string;
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
