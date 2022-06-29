<template>
  <Story title="Atoms/Badge/BadgeTag" :layout="{ type: 'grid', width: 200 }">
    <Variant title="With Text & Icon" :init-state="initState">
      <template #default="{ state }">
        <AtomsBadgeTag
          :icon="state.icon"
          :icon-only="state.iconOnly"
          :type="state.type"
        />
      </template>
    </Variant>
    <Variant title="Text Only" :init-state="initState">
      <template #default="{ state }">
        <AtomsBadgeTag :type="state.type" />
      </template>
    </Variant>
    <Variant title="Icon only" :init-state="initState">
      <template #default="{ state }">
        <AtomsBadgeTag :icon="state.icon" :type="state.type" icon-only />
      </template>
    </Variant>
    <template #controls="{ state }">
      <HstText v-model="state.icon" title="Icon" />
      <HstCheckbox v-model="state.iconOnly" title="Icon Only" />
      <HstSelect
        v-model="state.type"
        title="Component Type"
        :options="{
          success: 'Success (Green)',
          info: 'Info (Blue)',
          warning: 'Warning (Yellow)',
          danger: 'Danger (Rose)',
          default: 'Gray',
        }"
      />
    </template>
  </Story>
</template>

<script setup lang="ts">
  function initState() {
    return {
      icon: 'heroicons-outline:exclamation',
      iconOnly: false,
      type: 'default',
    };
  }
</script>

<docs lang="md">
# Badge Tag

Badge component with icon & text

```typescript
type Props = {
  icon?: string;
  iconOnly?: boolean;
  textOnly?: boolean;
  type?: ['default', 'success', 'danger', 'info', 'warning'];
};
```
</docs>
