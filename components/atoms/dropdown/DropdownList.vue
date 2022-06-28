<template>
  <transition
    enter-active-class="transform transition duration-300"
    enter-class="-translate-y-1/2 scale-y-0 opacity-0"
    enter-to-class="translate-y-0 scale-y-100 opacity-100"
    leave-active-class="transform transition duration-300"
    leave-class="translate-y-0 scale-y-100 opacity-100"
    leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
  >
    <ul
      v-show="isOpen"
      class="dropdown-options"
      aria-labelledby="dropdownDefault"
    >
      <DropdownItem
        v-for="option in options"
        :key="option.id"
        v-bind="option"
        @click="$emit('select', option)"
      />
    </ul>
  </transition>
</template>

<script lang="ts">
  import DropdownItem from '~/components/atoms/dropdown/DropdownItem.vue';

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
    },
    emits: ['close', 'select'],
  };
</script>
