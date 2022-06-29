<template>
  <Button
    :class="{ ':hover': isVisible }"
    :data-dropdown-toggle="UUID"
    :tag="buttonTag"
    :tag-props="buttonTagProps"
  >
    {{ selected.label }}
    <template #right>
      <Suspense>
        <Icon
          :name="iconName"
          class="button-text transform transition-transform duration-200 ease-in-out"
          :class="isVisible ? 'rotate-180' : 'rotate-0'"
        />
      </Suspense>
    </template>
  </Button>
  <DropdownList
    :data-dropdown-menu="UUID"
    :is-open="isVisible"
    :options="dropdownOptions"
    :selected="modelValue"
    :item-tag="itemTag"
    @select="setValue"
  />
</template>

<script lang="ts">
  import { DropdownOption, DropdownProps } from '~/constants/types';
  import DropdownList from '~/components/molecules/dropdown/DropdownList.vue';
  import Button from '~/components/atoms/buttons/Button.vue';
  import Icon from '~/components/atoms/icon/Icon.vue';
  import { useUuid } from '~/composables/useUuid';
  import { useDropdown } from '~/composables/dynamicUi/useDropdown';

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
      iconName: String,
      buttonTag: String,
      buttonTagProps: {
        type: Object,
        default: () => ({}),
      },
      itemTag: String,
      itemTagProps: {
        type: [Object, Function],
        default: () => ({}),
      },
    },
    emits: ['update:modelValue', 'show', 'hide'],
    setup(props: DropdownProps, { emit }) {
      const isOpen = ref(false);
      const UUID = useUuid();
      const onShow = () => emit('show');
      const onHide = () => emit('hide');
      const { isVisible, hide } = useDropdown({
        targetElement: `[data-dropdown-menu="${UUID}"]`,
        triggerElement: `[data-dropdown-toggle="${UUID}"]`,
        options: {
          onHide,
          onShow,
        },
      });

      const dropdownOptions = computed<DropdownOption[]>(() =>
        props.options?.map((c, i) => ({
          selected: c.selected || props.modelValue === c.value,
          id: useUuid(),
          ...c,
        })),
      );

      const selected = computed(() =>
        dropdownOptions.value.find((c) => c.selected),
      );

      const setValue = async (value: DropdownOption) => {
        emit('update:modelValue', value.value);

        onHide();
        await hide();
      };

      return {
        setValue,
        dropdownOptions,
        selected,
        isOpen,
        UUID,
        isVisible,
      };
    },
  };
</script>
