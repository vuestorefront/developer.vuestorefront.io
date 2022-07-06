<template>
  <Story
    title="Atoms/Buttons/Button"
    :init-state="initState"
    :layout="{ type: 'grid', width: 400, iframe: true }"
  >
    <Variant
      v-for="(color, index) in buttonColors"
      :key="nanoid() + index"
      :title="capitalize(color)"
    >
      <template #default="{ state }">
        <AtomsButtonDefault
          :color="state.color || color"
          :counter="state.counter"
          :disabled="state.disabled"
          :icon-name="state.iconName"
          :icon-only="state.iconOnly"
          :icon="state.icon"
          :label="state.label"
          :outline="state.outline"
          :rounded="state.rounded"
          :square="state.square"
          :shadow="state.shadow"
          :size="state.size"
          :tag-props="state.tagProps"
          :tag="state.tag"
        />
      </template>
    </Variant>
    <Variant
      v-for="(btn, index) in iconButtons"
      :key="nanoid() + index"
      :title="btn.title"
    >
      <template #default="{ state }">
        <AtomsButtonDefault
          :counter="state.counter"
          :disabled="state.disabled"
          :icon-name="state.iconName || btn.iconName"
          :icon-only="btn.iconOnly"
          :icon="btn.icon"
          :label="btn.label"
          :outline="state.outline"
          :rounded="state.rounded"
          :square="state.square"
          :shadow="state.shadow"
          :size="state.size"
          :tag-props="state.tagProps"
          :tag="state.tag"
          color="success"
        />
      </template>
    </Variant>
    <Variant title="With Counter">
      <template #default="{ state }">
        <AtomsButtonDefault
          :counter="state.counter || 5"
          :disabled="state.disabled"
          :icon-name="state.iconName"
          :icon-only="state.iconOnly"
          :icon="state.icon"
          :label="state.label"
          :outline="state.outline"
          :rounded="state.rounded"
          :square="state.square"
          :shadow="state.shadow"
          :size="state.size"
          :tag="state.tag"
          :tag-props="state.tagProps"
          color="warning"
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
        v-model="state.color"
        title="Color"
        :options="{
          success: 'Succes (Green)',
          primary: 'Primary (Green)',
          secondary: 'Secondary (Purple)',
          danger: 'Danger (Rose)',
          warning: 'Warning (Yellow)',
          info: 'Info (Blue)',
          white: 'White',
          transparent: 'Transparent',
          facebook: 'Facebook',
          twitter: 'Twitter',
          github: 'GitHub',
          google: 'Google',
          apple: 'Apple',
        }"
      />
      <HstCheckbox v-model="state.outline" title="Outline" />
      <HstText v-model="state.label" title="Label" />
      <HstSelect
        v-model="state.icon"
        title="Enable Icon"
        :options="{
          right: 'Right',
          Left: 'Left',
          true: 'Enable (Right/Boolean)',
          false: 'Disable (Right/Boolean)',
        }"
      />
      <HstCheckbox v-model="state.iconOnly" title="Icon Only" />
      <HstText v-model="state.iconName" title="Icon Name" />
      <HstNumber v-model="state.counter" title="Counter" />
      <HstCheckbox v-model="state.disabled" title="Disabled" />
      <HstCheckbox v-model="state.rounded" title="Rounded" />
      <HstCheckbox v-model="state.square" title="Square" />
      <HstCheckbox v-model="state.shadow" title="Shadow" />
      <HstText v-model="state.tag" title="Tag" />
      <HstText v-model="state.tagProps" title="Tag Props" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import { useUUID } from '~/composables/useUUID';

  const buttonColors = [
    'success',
    'primary',
    'secondary',
    'danger',
    'warning',
    'info',
    'white',
    'transparent',
  ];
  const iconButtons = [
    {
      title: 'Left side Icon',
      label: 'button',
      icon: 'left',
      iconName: 'mdi:home',
    },
    {
      title: 'Right side Icon',
      label: 'button',
      icon: 'right',
      iconName: 'mdi:home',
    },
    {
      title: 'Icon Only',
      label: '',
      icon: true,
      iconOnly: true,
      iconName: 'mdi:home',
    },
  ];
  const { capitalize } = useTextCase();
  const nanoid = useUUID;
  function initState() {
    return {
      size: 'base',
      color: '',
      outline: false,
      shadow: false,
      label: 'Button',
      tag: 'button',
      rounded: false,
      square: false,
      disabled: false,
      counter: 0,
      icon: false,
      iconOnly: false,
      iconName: '',
      tagProps: {},
    };
  }
</script>

<docs lang="md">
# Button

Button component

### Props

```typescript
type Props = {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  color?:
    | 'success'
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'info'
    | 'white'
    | 'transparent';
  outline?: boolean;
  shadow?: boolean;
  rounded?: boolean;
  square?: boolean;
  counter?: number;
  disabled?: boolean;
  icon?: 'left' | 'right' | boolean;
  iconName?: string;
  iconOnly?: boolean;
  label: string;
  tag?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  tagProps?: Record<string, string | number | boolean | Function>;
};
```
</docs>
