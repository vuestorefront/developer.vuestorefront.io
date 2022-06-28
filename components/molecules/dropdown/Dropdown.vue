<template>
  <slot name="dropdown:select">
    <Button
      data-dropdown-toggle="dropdown"
      :class="{ ':hover': isOpen }"
      @keydown.enter.exact="toggleMenu"
      @keydown.esc.exact="toggleMenu"
      @click.exact="toggleMenu"
    >
      {{ selected.label }}
      <template #right>
        <Suspense>
          <Icon
            name="ph:caret-down-bold"
            class="button-text transform transition-transform duration-200 ease-in-out"
            :class="isOpen ? 'rotate-180' : 'rotate-0'"
          />
        </Suspense>
      </template>
    </Button>
  </slot>
  <slot name="dropdown:options" v-bind="{ options, modelValue }">
    <DropdownList
      :is-open="isOpen"
      :options="dropdownOptions"
      :selected="modelValue"
      @select="setValue"
    />
  </slot>
</template>

<script lang="ts">
  import { nanoid } from 'nanoid';
  import { DropdownListProps, DropdownOption } from '~/constants/types';
  import DropdownList from '~/components/atoms/dropdown/DropdownList.vue';
  import Button from '~/components/atoms/buttons/Button.vue';
  import Icon from '~/components/atoms/icon/Icon.vue';

  export default {
    components: { Icon, Button, DropdownList },
    inheritAttrs: true,
    props: {
      options: {
        required: true,
        type: Array,
      },
      modelValue: {
        required: true,
        type: [String, Number, Boolean],
      },
    },
    emits: ['update:modelValue'],
    setup(props: DropdownListProps, { emit }) {
      const isOpen = ref(false);

      const dropdownOptions = computed<DropdownOption[]>(() =>
        props.options?.map((c, i) => ({
          selected: c.selected || props.modelValue === c.value,
          id: nanoid(),
          ...c,
        })),
      );

      const selected = computed(() =>
        dropdownOptions.value.find((c) => c.selected),
      );

      const toggleMenu = () => {
        isOpen.value = !isOpen.value;
      };

      const setValue = (value: DropdownOption) => {
        emit('update:modelValue', value.value);
        isOpen.value = false;
      };

      return {
        setValue,
        toggleMenu,
        dropdownOptions,
        selected,
        isOpen,
      };
    },
  };
</script>
