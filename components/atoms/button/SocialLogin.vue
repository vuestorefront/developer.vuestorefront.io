<template>
  <ComponentRender />
</template>

<script setup lang="ts">
  import { socialButtonClasses } from '~/constants/css/atoms/button';
  import Button from '~/components/atoms/button/Button.vue';
  import { buttonProps } from './commons/buttonProps';

  const props = defineProps({
    ...buttonProps,
    type: {
      type: String,
      required: true,
      validate: (s: string) =>
        ['facebook', 'twitter', 'github', 'google', 'apple'].includes(s),
    },
  });

  const attrs = useAttrs();
  const ComponentRender = () =>
    h(Button, {
      class: `${socialButtonClasses[props.type].class}`,
      icon: 'left',
      iconName: socialButtonClasses[props.type].icon,
      label: socialButtonClasses[props.type].label,
      ...attrs,
    });
</script>
