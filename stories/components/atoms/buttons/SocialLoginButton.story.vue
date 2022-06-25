<template>
  <Story
    title="Atoms/Buttons/Social Login Button"
    :init-state="initState"
    :layout="{ type: 'grid', width: 400, iframe: true }"
  >
    <Variant
      v-for="(type, index) in socialTypes"
      :key="Math.random() + index"
      :title="`${capitalize(type)} Login`"
    >
      <template #default="{ state }">
        <SocialLoginButton
          :disabled="state.disabled"
          :icon-only="state.iconOnly"
          :type="type"
          :outline="state.outline"
          :rounded="state.rounded"
          :shadow="state.shadow"
          :size="state.size"
          :tag="state.tag"
        />
      </template>
    </Variant>
    <template #controls="{ state }">
      <HstSelect
        v-model="state.size"
        title="Size"
        :options="{
          xs: 'Extra Small',
          sm: 'Small',
          base: 'Base/Normal',
          lg: 'Large',
          xl: 'Extra Large',
        }"
      />
      <HstSelect
        v-model="state.type"
        title="Type"
        :options="{
          facebook: 'Facebook',
          twitter: 'Twitter',
          github: 'GitHub',
          google: 'Google',
          apple: 'Apple',
        }"
      />
      <HstText v-model="state.tag" title="Tag" />
      <HstCheckbox v-model="state.iconOnly" title="Icon Only" />
      <HstCheckbox v-model="state.rounded" title="Rounded" />
      <HstCheckbox v-model="state.outline" title="Outline" />
      <HstCheckbox v-model="state.shadow" title="Shadow" />
      <HstCheckbox v-model="state.disabled" title="Disabled" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import SocialLoginButton from '~/components/atoms/buttons/SocialLoginButton.vue';

  const socialTypes = ['facebook', 'twitter', 'github', 'google', 'apple'];

  const { capitalize } = useTextCase();

  function initState() {
    return {
      size: 'base',
      type: 'facebook',
      outline: false,
      shadow: false,
      tag: 'button',
      rounded: false,
      disabled: false,
      iconOnly: false,
    };
  }
</script>

<docs lang="md">
# Social Login Button

Social Login Button component

### Props

```typescript
type Props = {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  type: 'facebook' | 'twitter' | 'github' | 'google' | 'apple';
  outline?: boolean;
  shadow?: boolean;
  rounded?: boolean;
  disabled?: number;
  iconOnly?: boolean;
  tag?: string;
};
```
</docs>
