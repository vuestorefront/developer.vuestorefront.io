<template>
  <AtomsButton
    :data-dropdown-toggle="UUID()"
    :tag="buttonTag"
    :tag-props="buttonTagProps"
  >
    <template #right>
      <Icon
        :name="iconName"
        class="button-text transform transition-transform duration-200 ease-in-out"
        :class="isVisible ? 'rotate-180' : 'rotate-0'"
      />
    </template>
    {{ selected.label }}
  </AtomsButton>
  <MoleculesDropdownList
    :data-dropdown-menu="UUID()"
    :is-visible="isVisible"
    :options="dropdownOptions"
    :selected="modelValue"
    :item-tag="itemTag"
    @select="setValue"
  />
</template>

<script setup lang="ts">
  import { useDropdown } from '~/composables/dynamicUi/useDropdown';
  import { DropdownOption } from '~/types/props/types/molecules/dropdownPropTypes';
  import { UUID } from '~/utils/uuid';

  const props = defineProps<{
    options: DropdownOption[];
    modelValue: string | number | boolean;
    iconName?: string;
    buttonTag?: string;
    buttonTagProps?: Record<string, any>;
    itemTag?: string;
    itemTagProps?: Record<string, any>;
  }>();

  const emit = defineEmits(['update:modelValue', 'show', 'hide']);

  const onShow = () => emit('show');
  const onHide = () => emit('hide');

  const { isVisible, hide } = useDropdown({
    targetElement: `[data-dropdown-menu="${UUID()}"]`,
    triggerElement: `[data-dropdown-toggle="${UUID()}"]`,
    options: {
      onHide,
      onShow,
    },
  });

  const dropdownOptions = computed<DropdownOption[]>(() =>
    props.options?.map((c, i) => ({
      selected: c.selected || props.modelValue === c.value,
      id: UUID(),
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
</script>
