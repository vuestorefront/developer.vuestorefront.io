<template>
  <div class="container m-auto px-2 py-5">
    <div
      class="flex flex-col md:flex-row items-center justify-between w-100 shadow-xl rounded-2xl lines-bg px-7 py-10 lg:px-16 lg:py-14"
      :class="`bg-${color}-500 `"
    >
      <div class="lg:w-8/12 w-12/12" :class="`text-${textColor}`">
        <slot name="left">
          <slot name="header" :header="header">
            <h1 class="lg:text-4xl text-3xl font-semibold capitalize mb-4">
              {{ header }}
            </h1>
          </slot>
          <slot name="message" :message="message">
            <p class="text-lg mb-10 text-xl">{{ message }}</p>
          </slot>
          <slot name="button" :button="{ text: buttonText, link: buttonLink }">
            <nuxt-link
              v-if="buttonText && buttonLink"
              :to="buttonLink"
              class="px-5 py-2.5 mb-2 shadow-base cursor-pointer rounded text-base lg:text-lg text-center uppercase"
              :class="`bg-${buttonColor} text-${buttonTextColor}${
                buttonHoverColor ? ` hover:bg-${buttonHoverColor}` : ''
              }`"
            >
              {{ buttonText }}
            </nuxt-link>
          </slot>
        </slot>
      </div>
      <div
        class="lg:w-4/12 w-12/12 text-right sm:order-last order-first pb-5 md:pb-0 flex"
      >
        <slot name="right">
          <slot name="img" :img="img">
            <img
              :src="img"
              :alt="imgAlt"
              class="object-fill w-auto h-24 lg:h-36 flex-auto"
            />
          </slot>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      header?: string;
      message?: string;
      buttonText?: string;
      buttonLink?: string;
      buttonColor?: string;
      buttonHoverColor?: string;
      buttonTextColor?: string;
      img?: string;
      imgAlt?: string;
      color?: string;
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

<style scoped>
  .lines-bg {
    background-image: url('backgrounds/bg-diamon-white.svg');
    background-position: right center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
