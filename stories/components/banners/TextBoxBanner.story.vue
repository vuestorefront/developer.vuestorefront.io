<template>
  <Story title="Banners/Text Box" :layout="{ type: 'grid', width: 400 }">
    <template #controls="{ state }">
      <HstText v-model="state.icon" title="Icon" />
      <HstText v-model="state.title" title="Title" />
      <HstText v-model="state.message" title="Message" />
    </template>
    <Variant
      v-for="(type, key) in componentType"
      :key="key"
      :title="type"
      :init-state="initState"
    >
      <template #default="{ state }">
        <Suspense>
          <TextBoxBanner
            :icon="state.icon"
            :type="type"
            :message="state.message"
            :title="state.title"
          />
        </Suspense>
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import TextBoxBanner from '~/components/banners/TextBoxBanner.vue';

  const componentType = [
    'Warning',
    'Info',
    'Success',
    'Danger',
    'Default',
  ].sort();
  function initState() {
    return {
      type: 'default',
      icon: '',
      message: 'This is a colored banner default message',
      title: 'Title',
    };
  }
</script>

<docs lang="md">
# Text Colored Icon Banner

Base text colored icon banner used in the [Nuxt Content](https://content.nuxtjs.org/) MD Blocks

```typescript
type Props = {
  icon?: string;
  title?: string;
  message?: string;
  type?: ['default', 'success', 'danger', 'info', 'warning'];
};
```
</docs>
