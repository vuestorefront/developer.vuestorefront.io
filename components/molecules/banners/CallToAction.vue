<template>
  <div
    class="call-to-action-banner call-to-action-banner-background--lines"
    :class="`bg-${color}-500 `"
  >
    <div class="w-12/12 lg:w-8/12" :class="`text-${textColor}`">
      <slot name="left">
        <slot name="title" :title="title">
          <h1 class="mb-4 text-3xl font-bold capitalize lg:text-4xl">
            {{ title }}
          </h1>
        </slot>
        <slot name="message" :message="message">
          <p class="mb-10 text-lg text-white">{{ message }}</p>
        </slot>
        <slot name="button" :button="{ text: buttonText, link: buttonLink }">
          <AtomsButtonLink
            v-if="buttonText && buttonLink"
            :nuxt-link="{ to: buttonLink, target: '_blank' }"
            :color="buttonColor"
            :label="buttonText"
            icon-right-name="akar-icons:link-out"
            text-color="secondary"
            :shadow="false"
          />
        </slot>
      </slot>
    </div>
    <div
      class="w-12/12 order-first flex pb-5 text-right sm:order-last md:pb-0 lg:w-4/12"
    >
      <slot name="right">
        <slot name="img" :img="img">
          <img
            :src="img"
            :alt="imgAlt"
            class="h-24 w-auto flex-auto object-fill lg:h-36"
          />
        </slot>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  // @TODO: Add support for general colors like button
  withDefaults(
    defineProps<{
      title: string;
      message: string;
      buttonText?: string;
      buttonLink?: string;
      buttonColor?: string;
      buttonHoverColor?: string;
      buttonTextColor?: string;
      img: string;
      imgAlt?: string;
      color: string;
      textColor?: string;
    }>(),
    {
      color: 'secondary',
      textColor: 'white',
      buttonColor: 'white',
      buttonHoverColor: '',
      buttonTextColor: 'secondary',
    },
  );
</script>

<style scoped></style>
