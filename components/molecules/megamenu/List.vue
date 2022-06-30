<template>
  <ul v-show="isVisible" class="dropdown-options">
    <li v-for="option in options" :key="option.id">
      <AtomsDropdownItem
        :tag="itemTag"
        :tag-props="itemPropsFn(option)"
        v-bind="option"
        @click="$emit('select', option)"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { DropdownOption } from '~/constants/props/types/molecules/dropdownPropTypes';
  import { TagProps } from '~/constants/types/base';

  const props = defineProps<{
    options: DropdownOption[];
    isVisible?: boolean;
    selected?: string | boolean | number;
    itemTag?: string;
    itemTagProps?: Record<string, any>;
  }>();

  defineEmits(['select']);

  const itemPropsFn = (item: DropdownOption): TagProps | undefined =>
    typeof props.itemTagProps === 'function'
      ? props.itemTagProps(item)
      : props.itemTagProps;
</script>
