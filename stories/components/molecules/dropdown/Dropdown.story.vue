<template>
  <Story title="Molecules/Dropdown/Dropdown" :init-state="initState">
    <template #default="{ state }">
      <Dropdown
        v-model="state.selected"
        :options="state.options"
        :icon-name="state.iconName"
        :button-tag="state.buttonTag"
        :item-tag="state.itemTag"
      />
    </template>
    <template #controls="{ state }">
      <HstText v-model="state.iconName" title="Icon Name" />
      <HstTextarea v-model="state.buttonTag" title="Button Tag" />
      <HstTextarea v-model="state.itemTag" title="Item Tag" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import Dropdown from '~/components/molecules/dropdown/Dropdown.vue';

  function initState() {
    return {
      selected: 'option1',
      buttonTag: 'button',
      itemTag: 'p',
      iconName: 'ph:caret-down-bold',
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
        { label: 'Option 4', value: 'option4' },
        { label: 'Option 5', value: 'option5' },
        { label: 'Option 6', value: 'option6' },
      ],
    };
  }
</script>

<docs lang="md">
# Dropdown

Dropdown component

```typescript
export type DropdownOption = {
  id?: string | number;
  label: string;
  selected?: boolean;
  value: string | number | boolean;
};

export type DropdownListProps = {
  options: DropdownOption[];
  modelValue: string | number | boolean;
  buttonTag?: string;
  buttonTagProps?: Record<any, any>;
  itemTag?: string;
  itemTagProps?: Record<any, any> | ((item: DropdownOption) => void);
};
```
</docs>
