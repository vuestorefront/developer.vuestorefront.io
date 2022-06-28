<template>
  <ul
    v-show="isOpen"
    class="dropdown-options"
    aria-labelledby="dropdownDefault"
  >
    <li v-for="option in options" :key="option.id">
      <DropdownItem
        :tag="itemTag"
        :tag-props="itemPropsFn(option)"
        v-bind="option"
        @click="$emit('select', option)"
      />
    </li>
  </ul>
</template>

<script lang="ts">
  import DropdownItem from '~/components/atoms/dropdown/DropdownItem.vue';
  import {
    DropdownListProps,
    DropdownOption,
    TagProps,
  } from '~/constants/types';

  export default {
    name: 'DropdownList',
    components: { DropdownItem },
    props: {
      options: {
        required: true,
        type: Array,
      },
      isOpen: {
        type: Boolean,
        default: false,
      },
      selected: {
        required: true,
        type: [String, Number, Boolean],
      },
      itemTag: String,
      itemTagProps: {
        type: [Object, Function],
        default: () => ({}),
      },
    },
    emits: ['select'],
    setup(props: DropdownListProps) {
      const itemPropsFn = (item: DropdownOption): TagProps | undefined =>
        typeof props.itemTagProps === 'function'
          ? props.itemTagProps(item)
          : props.itemTagProps;

      return { itemPropsFn };
    },
  };
</script>
