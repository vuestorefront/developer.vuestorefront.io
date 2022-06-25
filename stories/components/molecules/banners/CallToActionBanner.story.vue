<template>
  <Story title="Molecules/Banners/Call To Action" :init-state="initState">
    <template #default="{ state }">
      <CallToActionBanner
        :header="state.header"
        :message="state.message"
        :button-text="state.buttonText"
        :button-link="state.buttonLink"
        :img="state.img"
        :img-alt="state.imgAlt"
        :color="state.color"
      />
    </template>
    <template #controls="{ state }">
      <HstText v-model="state.header" title="Header Title" />
      <HstText v-model="state.message" title="Text" />
      <HstText v-model="state.buttonText" title="Button Text" />
      <HstText v-model="state.buttonColor" title="Button BG Color" />
      <HstSelect
        v-model="state.buttonTextColor"
        title="Button Text Color"
        :options="{
          secondary: 'Secondary (Violet)',
          primary: 'Primary (Green)',
          yellow: 'Warning (Yellow)',
          blue: 'Information (Blue)',
          rose: 'Danger (Rose)',
          gray: 'Gray',
        }"
      />
      <HstText v-model="state.buttonLink" title="Button Link" />
      <HstText v-model="state.img" title="Image Src" />
      <HstText v-model="state.imgAlt" title="Image Alt" />
      <HstSelect
        v-model="state.color"
        title="Color"
        :options="{
          secondary: 'Secondary (Violet)',
          primary: 'Primary (Green)',
          yellow: 'Warning (Yellow)',
          blue: 'Information (Blue)',
          rose: 'Danger (Rose)',
          gray: 'Gray',
        }"
      />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import CallToActionBanner from '~/components/molecules/banners/CallToActionBanner.vue';

  function initState() {
    return {
      header: 'Join our Discord server',
      message:
        'Find help, new ideas, new projects, and much more on our Discord server. ',
      buttonText: 'Join our Discord server',
      buttonLink: 'https://discord.gg/vuestorefront',
      buttonColor: 'white',
      buttonTextColor: 'secondary',
      img: 'brands/discord.svg',
      imgAlt: 'Discord Logo',
      color: 'secondary',
    };
  }
</script>

<docs lang="md">
# Call to Action Banner

Banner used for Call to Action with Button and Image

```typescript
type Props = {
  header?: string;
  message?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonColor?: string; // default: 'white'
  buttonHoverColor?: string; // default: ''
  buttonTextColor?: string; // default: 'secondary'
  img?: string;
  imgAlt?: string;
  color?: string; // default: 'secondary'
  textColor?: string; // default: 'white'
};
```
</docs>
