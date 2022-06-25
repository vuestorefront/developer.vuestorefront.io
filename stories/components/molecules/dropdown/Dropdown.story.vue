<template>
  <Story title="Molecules/Dropdown/Dropdown Menu" :init-state="initState">
    <template #default="{ state }">
      <DropdownMenu
        :link="state.link"
        :icon-name="state.iconName"
        :label="state.label"
        :sub-menu="state.subMenu"
      />
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
  import DropdownMenu from '~/components/molecules/dropdown/DropdownMenu.vue';
  import { HeaderMenu, headerMenuItems } from '~/constants/headerMenu';

  function initState(): HeaderMenu {
    return {
      label: 'Documentation',
      link: '#',
      subMenu: [
        {
          label: 'Home',
          link: '#',
          iconName: 'carbon:home',
        },
        {
          label: 'Home',
          link: '#',
          iconName: 'carbon:home',
        },
        {
          label: 'Home',
          link: '#',
          iconName: 'carbon:home',
        },
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
