<template>
  <Story
    title="Atoms/Buttons/Button"
    :init-state="initState"
    :layout="{ type: 'grid', width: 400, iframe: true }"
  >
    <Variant title="default">
      <template #default="{ state }">
        <Button
          :size="state.size"
          :color="state.color"
          :outline="state.outline"
          :shadow="state.shadow"
          :label="state.label"
          :tag="state.tag"
          :rounded="state.rounded"
          :disabled="state.disabled"
          :icon="state.icon"
          :icon-only="state.iconOnly"
          :icon-name="state.iconName"
        />
      </template>
    </Variant>
    <Variant title="Success/Primary">
      <template #default="{ state }">
        <Button
          :counter="state.counter"
          :disabled="state.disabled"
          :icon-name="state.iconName"
          :icon-only="state.iconOnly"
          :icon="state.icon"
          :label="state.label"
          :outline="state.outline"
          :rounded="state.rounded"
          :shadow="state.shadow"
          :size="state.size"
          :tag="state.tag"
          color="success"
        />
      </template>
    </Variant>
    <Variant title="Secondary">
      <template #default="{ state }">
        <Button
          :counter="state.counter"
          :disabled="state.disabled"
          :icon-name="state.iconName"
          :icon-only="state.iconOnly"
          :icon="state.icon"
          :label="state.label"
          :outline="state.outline"
          :rounded="state.rounded"
          :shadow="state.shadow"
          :size="state.size"
          :tag="state.tag"
          color="secondary"
        />
      </template>
    </Variant>
    <Variant title="Info">
      <template #default="{ state }">
        <Button
          :counter="state.counter"
          :disabled="state.disabled"
          :icon-name="state.iconName"
          :icon-only="state.iconOnly"
          :icon="state.icon"
          :label="state.label"
          :outline="state.outline"
          :rounded="state.rounded"
          :shadow="state.shadow"
          :size="state.size"
          :tag="state.tag"
          color="info"
        />
      </template>
    </Variant>
    <Variant title="Warning">
      <template #default="{ state }">
        <Button
          :counter="state.counter"
          :disabled="state.disabled"
          :icon-name="state.iconName"
          :icon-only="state.iconOnly"
          :icon="state.icon"
          :label="state.label"
          :outline="state.outline"
          :rounded="state.rounded"
          :shadow="state.shadow"
          :size="state.size"
          :tag="state.tag"
          color="warning"
        />
      </template>
    </Variant>
    <Variant title="Danger">
      <template #default="{ state }">
        <Button
          :counter="state.counter"
          :disabled="state.disabled"
          :icon-name="state.iconName"
          :icon-only="state.iconOnly"
          :icon="state.icon"
          :label="state.label"
          :outline="state.outline"
          :rounded="state.rounded"
          :shadow="state.shadow"
          :size="state.size"
          :tag="state.tag"
          color="danger"
        />
      </template>
    </Variant>
    <Variant title="White">
      <template #default="{ state }">
        <Button
          :counter="state.counter"
          :disabled="state.disabled"
          :icon-name="state.iconName"
          :icon-only="state.iconOnly"
          :icon="state.icon"
          :label="state.label"
          :outline="state.outline"
          :rounded="state.rounded"
          :shadow="state.shadow"
          :size="state.size"
          :tag="state.tag"
          color="white"
        />
      </template>
    </Variant>
    <Variant title="Transparent">
      <template #default="{ state }">
        <Button
          :counter="state.counter"
          :disabled="state.disabled"
          :icon-name="state.iconName"
          :icon-only="state.iconOnly"
          :icon="state.icon"
          :label="state.label"
          :outline="state.outline"
          :rounded="state.rounded"
          :shadow="state.shadow"
          :size="state.size"
          :tag="state.tag"
          color="transparent"
        />
      </template>
    </Variant>
    <Variant title="With Left Icon">
      <template #default="{ state }">
        <Button
          :counter="state.counter"
          :disabled="state.disabled"
          :icon-name="state.iconName || 'mdi:home'"
          :icon-only="state.iconOnly"
          :icon="state.icon || 'left'"
          :label="state.label"
          :outline="state.outline"
          :rounded="state.rounded"
          :shadow="state.shadow"
          :size="state.size"
          :tag="state.tag"
          color="success"
        />
      </template>
    </Variant>
    <Variant title="With Right Icon">
      <template #default="{ state }">
        <Button
          :counter="state.counter"
          :disabled="state.disabled"
          :icon-name="state.iconName || 'mdi:home'"
          :icon-only="state.iconOnly"
          :icon="state.icon || 'right'"
          :label="state.label"
          :outline="state.outline"
          :rounded="state.rounded"
          :shadow="state.shadow"
          :size="state.size"
          :tag="state.tag"
          color="secondary"
        />
      </template>
    </Variant>
    <Variant title="Icon Only">
      <template #default="{ state }">
        <Button
          :counter="state.counter"
          :disabled="state.disabled"
          :icon-name="state.iconName || 'mdi:home'"
          :icon="state.icon || 'right'"
          :icon-only="true"
          label=""
          :outline="state.outline"
          :rounded="state.rounded"
          :shadow="state.shadow"
          :size="state.size"
          :tag="state.tag"
          color="info"
        />
      </template>
    </Variant>
    <Variant title="With Counter">
      <template #default="{ state }">
        <Button
          :counter="state.counter || 5"
          :disabled="state.disabled"
          :icon-name="state.iconName"
          :icon-only="state.iconOnly"
          :icon="state.icon"
          :label="state.label"
          :outline="state.outline"
          :rounded="state.rounded"
          :shadow="state.shadow"
          :size="state.size"
          :tag="state.tag"
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
        }"
      />
      <HstText v-model="state.label" title="Label" />
      <HstText v-model="state.tag" title="Tag" />
      <HstText v-model="state.href" title="Href" />
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
      <HstText v-model="state.iconName" title="Icon Name" />
      <HstCheckbox v-model="state.iconOnly" title="Icon Only" />
      <HstCheckbox v-model="state.rounded" title="Rounded" />
      <HstCheckbox v-model="state.outline" title="Outline" />
      <HstCheckbox v-model="state.shadow" title="Shadow" />
      <HstCheckbox v-model="state.disabled" title="Disabled" />
      <HstNumber v-model="state.counter" title="Counter" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import Button from '~/components/atoms/buttons/Button.vue';

  function initState() {
    return {
      size: 'base',
      color: 'primary',
      outline: false,
      shadow: false,
      label: 'Button',
      tag: 'button',
      rounded: false,
      disabled: false,
      counter: 0,
      icon: false,
      iconOnly: false,
      iconName: '',
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
  counter?: number;
  disabled?: number;
  icon?: 'left' | 'right' | boolean;
  iconName?: string;
  iconOnly?: boolean;
  label: string;
  tag?: string;
};
```
</docs>
