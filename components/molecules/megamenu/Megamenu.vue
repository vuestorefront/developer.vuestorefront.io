<template>
  <NuxtLink
    class="mega-menu-button group"
    color="transparent"
    :to="link"
    :target="target || ''"
    v-bind="subMenu?.length > 0 ? { dataDropdownToggle: UUID() } : {}"
  >
    {{ label }}
    <Icon
      v-if="!(subMenu?.length > 0) && iconName"
      :name="iconName"
      class="group-hover:text-primary"
    />
    <Suspense v-if="subMenu?.length > 0">
      <AtomsIcon
        name="ph:caret-down-bold"
        class="group-hover:text-primary transform transition-transform duration-200 ease-in-out"
        :class="isVisible ? 'rotate-180' : 'rotate-0'"
      />
    </Suspense>
  </NuxtLink>
  <MoleculesMegamenuList
    v-if="subMenu"
    :data-dropdown-menu="UUID()"
    :is-visible="isVisible"
    :items="subMenu"
  />
</template>

<script setup lang="ts">
  import { useDropdown } from '~/composables/dynamicUi/useDropdown';
  import type { HeaderMenu } from '~/types/props/types/molecules/menuPropTypes';
  import { RouteLocationRaw } from 'vue-router';
  import { UUID } from '~/utils/uuid';

  const props = defineProps<{
    label: string;
    link?: RouteLocationRaw;
    iconName?: string;
    target?: string;
    subMenu?: HeaderMenu[];
  }>();

  const emit = defineEmits(['show', 'hide']);

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
</script>
