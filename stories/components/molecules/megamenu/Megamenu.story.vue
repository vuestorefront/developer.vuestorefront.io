<template>
  <Story title="Molecules/MegaMenu/Menu" :init-state="initState">
    <template #default="{ state }">
      <div class="mega-menu">
        <MoleculesMegamenu
          v-for="(menu, index) in state.menu"
          :key="index"
          v-bind="menu"
        />
      </div>
    </template>
    <template #controls="{ state }">
      <HstText v-model="state.iconName" title="Icon Name" />
      <HstTextarea v-model="state.buttonTag" title="Button Tag" />
      <HstTextarea v-model="state.itemTag" title="Item Tag" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import { headerMenuItems } from '~/constants/headerMenu';

  function initState() {
    return {
      menu: headerMenuItems,
    };
  }
</script>

<docs lang="md">
# Mega Menu

```typescript
export interface HeaderMenu {
  label: string;
  link?: RouteLink;
  iconName?: string;
  subMenu?: HeaderMenu[];
}
```
</docs>
