<template>
  <Story title="Molecules/Dropdown/Dropdown" :init-state="initState">
    <template #default="{ state }">
      <Dropdown v-model="state.selected" :options="state.options" />
    </template>
    <template #controls="{ state }">
      <HstText v-model="state.label" title="Label" />
      <HstText v-model="state.link" title="Link" />
      <HstText v-model="state.iconName" title="Icon Name" />
      <HstTextarea v-model="state.subMenu" title="Sub Menu" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import Dropdown from '~/components/molecules/dropdown/Dropdown.vue';

  function initState() {
    return {
      selected: 'option1',
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ],
    };
  }
</script>

<docs lang="md">
# Dropdown Menu

Dropdown menu component

```typescript
export interface HeaderMenuItem {
  label: string;
  link: string;
  iconName?: string;
}

export interface HeaderMenu extends HeaderMenuItem {
  subMenu?: HeaderMenu[];
}

type Props = HeaderMenu;
```
</docs>
