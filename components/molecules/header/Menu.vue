<template>
  <ComponentRender />
</template>

<script setup lang="ts">
  import Dropdown from '~/components/molecules/dropdown/Dropdown.vue';
  import { HeaderMenu } from '~/constants/headerMenu';
  import { NuxtLinkProps } from '~/constants/types/base';
  import { NuxtLink } from '#components';

  const props = defineProps<{
    label: string;
    link: NuxtLinkProps;
    iconName?: string;
    subMenu?: HeaderMenu[];
  }>();

  const ComponentRender = () => {
    if (props.subMenu && props.subMenu.length > 0) {
      return h(Dropdown, {
        ...props,
      });
    }
    if (props.link) {
      return h(
        NuxtLink,
        {
          to: props.link,
        },
        props.label,
      );
    }
    return h('span', props.label);
  };
</script>
