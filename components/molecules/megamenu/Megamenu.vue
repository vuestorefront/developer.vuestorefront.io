<template>
  <NuxtLink
    class="mega-menu-button"
    color="transparent"
    v-bind="subMenu?.length > 0 ? { dataDropdownToggle: UUID } : {}"
  >
    {{ label }}
    <Suspense v-if="subMenu?.length > 0">
      <AtomsIcon
        name="ph:caret-down-bold"
        class="button-text transform transition-transform duration-200 ease-in-out"
        :class="isVisible ? 'rotate-180' : 'rotate-0'"
      />
    </Suspense>
  </NuxtLink>
  <MoleculesMegamenuList
    v-if="subMenu"
    :data-dropdown-menu="UUID"
    :is-visible="isVisible"
    :items="subMenu"
  />
</template>

<script setup lang="ts">
  import { useDropdown } from '~/composables/dynamicUi/useDropdown';
  import type { HeaderMenu } from '~/constants/props/types/molecules/menuPropTypes';
  import { RouteLink } from '~/constants/types/base';

  const props = defineProps<{
    label: string;
    link?: RouteLink;
    iconName?: string;
    subMenu?: HeaderMenu[];
  }>();

  const emit = defineEmits(['show', 'hide']);
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
</script>
