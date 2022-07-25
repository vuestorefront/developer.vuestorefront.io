<template>
  <Story title="Atoms/Badge/Tag" :layout="{ type: 'grid', width: 200 }">
    <Variant title="With Text & Icon">
      <template>
        <AtomsBadgeTag icon="carbon:checkmark" type="success">
          Success
        </AtomsBadgeTag>
      </template>
    </Variant>
    <Variant title="Text Only">
      <template>
        <AtomsBadgeTag type="warning"> Warning </AtomsBadgeTag>
      </template>
    </Variant>
    <Variant title="Icon only">
      <template>
        <AtomsBadgeTag icon="carbon:close-outline" icon-only type="danger" />
      </template>
    </Variant>
    <Variant
      v-for="(color, index) in colors"
      :key="color + index"
      :title="`Badge Type: ${capitalize(color)}`"
    >
      <template>
        <AtomsBadgeTag :type="color">
          {{ color }}
        </AtomsBadgeTag>
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import { capitalize } from '~/utils/string';

  const colors = [
    'success',
    'primary',
    'secondary',
    'danger',
    'warning',
    'info',
    'white',
    'transparent',
    'black',
    'gray',
    'default',
  ];
</script>

<docs lang="md">
# Badge Tag

Badge component with icon & text

```typescript
export enum ColorTypeName {
  success = 'success',
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
  white = 'white',
  transparent = 'transparent',
  black = 'black',
  gray = 'gray',
  default = 'gray',
}

type Props = {
  icon?: string;
  iconOnly?: boolean; //Default: false
  type?: KeyOfEnum<ColorTypeName>; //Default: ColorTypeName.default
};
```
</docs>
